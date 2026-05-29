import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest w-full pt-16 pb-6 border-t border-white/5 relative z-10 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-sm">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPthUmc6rWdLHUGO34eHUZ9f--vcv977aA2qudNiGZoj1mqTtdNLbK4nOvOArdz-zrZGfZX3uhlOPdIICCUdXvJ50KybtsZsH4BrPVZcA5dNPuJCP071CKXHyP4QhPpN4Qgz3SsAVdYnKZBTA4fKlR0XPgsQ3lHhBdW1uLAfqHMZeipS7L6XJ_7J4p1j004pN2CS2Bwd4PybvWLfMu5zZjCfyESRSh0muGWsm-sg4XvhuxQVBzdyNNRZAHRtJgzG84S8vWHMknp5M"
              alt="Phorex Labz Logo"
              width={24}
              height={24}
              className="h-6 w-auto object-contain"
            />
            <span className="font-headline-md text-lg font-bold text-white">
              Phorex Labz
            </span>
          </div>
          <p className="font-body-md text-sm text-on-surface-variant max-w-[200px]">
            {siteConfig.description}
          </p>
        </div>

        {/* Links */}
        <div className="col-span-1 flex flex-col gap-sm">
          <h4 className="font-semibold text-white text-sm mb-4">Legal</h4>
          <Link
            href="/terms"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            Privacy Policy
          </Link>
        </div>

        <div className="col-span-1 flex flex-col gap-sm">
          <h4 className="font-semibold text-white text-sm mb-4">
            Community
          </h4>
          <Link
            href="#features"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            Features
          </Link>
          <Link
            href="#faq"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            FAQ
          </Link>
        </div>

        <div className="col-span-1 flex flex-col gap-sm">
          <h4 className="font-semibold text-white text-sm mb-4">Social</h4>
          <Link
            href={siteConfig.links.discord}
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            Discord
          </Link>
          <Link
            href="#"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            Twitter / X
          </Link>
          <Link
            href="#"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop border-t border-white/5 py-4 mt-12">
        <p className="text-white/30 text-sm text-center">
          © 2026 Phorex Labz. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
