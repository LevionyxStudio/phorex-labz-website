import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest w-full pt-16 pb-6 border-t border-white/5 relative z-10 mt-auto">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-6 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-12">
        {/* Brand Column */}
        <div className="col-span-2 md:col-span-2 flex flex-col gap-4 md:pr-8">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Phorex Labz Logo"
              width={28}
              height={28}
              className="h-7 w-auto object-contain rounded-lg"
            />
            <span className="font-headline-md text-xl font-bold text-white tracking-tight">
              Phorex Labz
            </span>
          </div>
          <p 
            className="font-body-md text-sm text-on-surface-variant w-full max-w-xs leading-relaxed"
            style={{ width: "100%", minWidth: "250px", maxWidth: "320px", display: "block" }}
          >
            {siteConfig.description}
          </p>
        </div>

        {/* Links */}
        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="font-semibold text-white text-sm tracking-wide uppercase mb-2">Legal</h4>
          <Link
            href="/terms"
            className="text-on-surface-variant hover:text-white text-sm transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-on-surface-variant hover:text-white text-sm transition-colors"
          >
            Privacy Policy
          </Link>
        </div>

        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="font-semibold text-white text-sm tracking-wide uppercase mb-2">
            Community
          </h4>
          <Link
            href="/#features"
            className="text-on-surface-variant hover:text-white text-sm transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#faq"
            className="text-on-surface-variant hover:text-white text-sm transition-colors"
          >
            FAQ
          </Link>
        </div>

        <div className="col-span-2 sm:col-span-1 flex flex-col gap-3">
          <h4 className="font-semibold text-white text-sm tracking-wide uppercase mb-2">Social</h4>
          <Link
            href={siteConfig.links.discord}
            className="text-on-surface-variant hover:text-white text-sm transition-colors"
          >
            Discord
          </Link>
          <Link
            href="#"
            className="text-on-surface-variant hover:text-white text-sm transition-colors"
          >
            Twitter / X
          </Link>
          <Link
            href="#"
            className="text-on-surface-variant hover:text-white text-sm transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop border-t border-white/5 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Phorex Labz. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-white/40 text-sm">All systems operational</span>
        </div>
      </div>
    </footer>
  )
}
