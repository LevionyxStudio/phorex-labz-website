"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/config/site"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "FAQ", href: "#faq" },
]

export function Navbar() {

  const [activeSection, setActiveSection] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const handleScroll = () => {
      setIsMenuOpen(false)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMenuOpen])


  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    // Intersection Observer for single page sections
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    })

    const sectionElements: HTMLElement[] = []
    navLinks.forEach((link) => {
      const id = link.href.replace("#", "")
      if (id) {
        const el = document.getElementById(id)
        if (el) {
          sectionElements.push(el)
          observer.observe(el)
        }
      }
    })

    // Set Home as active if at the very top
    let rafId: number | null = null
    const handleTopScroll = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        if (window.scrollY < 200) {
          setActiveSection("")
        }
      })
    }
    window.addEventListener("scroll", handleTopScroll, { passive: true })

    // Check initial position
    handleTopScroll()

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el))
      window.removeEventListener("scroll", handleTopScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [pathname]) // Re-run if path changes

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-0 right-0 mx-3 md:mx-8 md:mx-auto max-w-[1200px] z-50 transition-all duration-300 rounded-full`}
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.3)",
        willChange: "transform",
      }}
    >
      <div className="flex justify-between items-center h-16 px-4 md:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-sm">
          <Image src="/logo.png" alt="Phorex Labz" width={32} height={32} className="rounded-lg" />
          <span className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
            Phorex Labz
          </span>
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const linkTarget = link.href.replace("#", "")
            const isActive =
              (link.href === "#" && activeSection === "") ||
              (activeSection === linkTarget && activeSection !== "")

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  // Smooth scroll fallback
                  if (link.href.startsWith("#") && link.href !== "#") {
                    e.preventDefault()
                    const element = document.getElementById(linkTarget)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  } else if (link.href === "#") {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                }}
                className={`font-label-md text-label-md px-[16px] py-[8px] rounded-full border transition-all duration-200 ${
                  isActive
                    ? "bg-[rgba(139,92,246,0.15)] border-[rgba(139,92,246,0.25)] text-[#c084fc]"
                    : "bg-transparent border-transparent text-[rgba(255,255,255,0.5)] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.08)] hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden text-white/60 hover:text-white p-1 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Trailing Action */}
          <Link
            href={siteConfig.links.discord}
            target="_blank"
            rel="noreferrer"
            className="btn-navbar-join !hidden md:!inline-flex"
          >
            Join Server
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="absolute left-0 right-0 z-50 flex flex-col gap-1 md:hidden"
          style={{
            top: "calc(100% + 8px)",
            background: "rgba(19,19,24,0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            padding: "8px",
          }}
        >
          {navLinks.map((link) => {
            const linkTarget = link.href.replace("#", "")
            const isActive =
              (link.href === "#" && activeSection === "") ||
              (activeSection === linkTarget && activeSection !== "")

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setIsMenuOpen(false)
                  // Smooth scroll fallback
                  if (link.href.startsWith("#") && link.href !== "#") {
                    e.preventDefault()
                    const element = document.getElementById(linkTarget)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  } else if (link.href === "#") {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                }}
                className={`w-full text-left transition-all duration-200 border ${
                  isActive
                    ? "bg-[rgba(139,92,246,0.15)] text-[#c084fc] border-[rgba(139,92,246,0.25)]"
                    : "bg-transparent border-transparent text-white/60 hover:text-white hover:bg-white/[0.05]"
                }`}
                style={{
                  padding: "12px 16px",
                  borderRadius: "10px",
                }}
              >
                {link.name}
              </Link>
            )
          })}

          {/* Join Server Button at bottom */}
          <Link
            href={siteConfig.links.discord}
            target="_blank"
            rel="noreferrer"
            className="btn-navbar-join w-full mt-2 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Server
          </Link>
        </div>
      )}
    </nav>
  )
}
