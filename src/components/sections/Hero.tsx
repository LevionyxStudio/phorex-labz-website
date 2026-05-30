import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/config/site"

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[40vh] md:min-h-[60vh] gap-8 md:gap-xl mb-16 md:mb-xxl px-4 md:px-6">

      {/* Glow orbs — originate from the top corners of the viewport, beam downward.
          Wrapper extends 10rem above the hero (matching main's pt-40) so the gradient
          source sits at the very top of the page, not the hero boundary.
          No filter, no animation — painted once and free to scroll. */}
      <div aria-hidden="true" className="absolute -top-28 md:-top-40 left-[50%] -translate-x-[50%] w-[100vw] h-[100vh] pointer-events-none z-0">
        {/* White spotlight — from top-left corner of the page */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "65%",
          height: "100%",
          background: "radial-gradient(ellipse at top left, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 68%)",
        }} />
        {/* Purple spotlight — from top-right corner of the page */}
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "65%",
          height: "100%",
          background: "radial-gradient(ellipse at top right, rgba(139,92,246,0.30) 0%, rgba(139,92,246,0.08) 45%, transparent 70%)",
        }} />
      </div>

      {/* Grid — unchanged */}
      <div
        className="absolute -top-28 md:-top-40 left-[50%] -translate-x-[50%] w-[100vw] h-[100vh] z-0 pointer-events-none bg-grid-white"
        style={{
          WebkitMaskImage: "radial-gradient(ellipse 90% 60% at 50% 50%, black 0%, black 30%, transparent 70%)",
          maskImage: "radial-gradient(ellipse 90% 60% at 50% 50%, black 0%, black 30%, transparent 70%)",
        }}
      />

      {/* Dark overlay to subtly dim the background and glows behind the text */}
      <div
        className="absolute -top-28 md:-top-40 left-[50%] -translate-x-[50%] w-[100vw] h-[100vh] z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <div className="inline-block px-md py-xs rounded-full bg-primary/10 border border-primary/20 text-primary font-label-md text-[10px] md:text-xs whitespace-nowrap uppercase tracking-wider mb-sm glass-card">
        ✦ Now Open — Join the Community
      </div>
      <div className="relative w-full max-w-4xl mx-auto">

        
        {/* Title Text */}
        <h1 className="relative z-10 font-display-lg text-4xl md:text-6xl lg:text-7xl md:leading-[1.1] font-extrabold text-white drop-shadow-sm flex flex-col gap-2">
          <span>Where Gamers, Coders &</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
            Creators Collide.
          </span>
        </h1>
      </div>
      <p className="font-body-lg text-sm md:text-base px-4 max-w-2xl mx-auto mt-4" style={{ color: '#cbc3d7' }}>
        One server for gaming, coding, music, creativity and good vibes. Free to join, always.
      </p>
        <div className="flex flex-col md:flex-row w-full md:w-auto gap-3 justify-center items-center mt-10 px-4 md:px-0">
          <Link href={siteConfig.links.discord} className="btn-primary-animated cursor-pointer w-full md:w-auto min-w-[160px] whitespace-nowrap px-8 py-3.5 rounded-full inline-flex items-center justify-center">
            Join the Server
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <Link href="/#features" className="btn-secondary-glass cursor-pointer w-full md:w-auto min-w-[160px] whitespace-nowrap px-8 py-3.5 rounded-full inline-flex items-center justify-center">
            Explore Features
          </Link>
        </div>
      </div>

    </section>
  )
}
