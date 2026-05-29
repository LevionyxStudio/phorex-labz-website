import Link from "next/link"
import { ArrowLeft, Terminal } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 — Not Found | Phorex Labz",
  description: "The page you were looking for has vanished.",
}

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#0a0a0f]">
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        
        {/* Grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto p-8 text-center">
        
        {/* System Error Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(208,188,255,0.1)] mx-auto">
          <Terminal className="w-4 h-4" />
          System Error 404
        </div>

        {/* Glitchy Title */}
        <h1 className="font-display-lg font-black text-white leading-none tracking-tight mb-6">
          <span className="block text-[clamp(6rem,15vw,12rem)] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 drop-shadow-lg">
            404
          </span>
          <span className="block text-[clamp(2rem,5vw,3rem)] mt-2">
            Subject Not Found
          </span>
        </h1>

        {/* Text body */}
        <p 
          className="text-lg md:text-xl text-on-surface-variant mb-10 mx-auto" 
          style={{ width: "100%", minWidth: "280px", maxWidth: "576px", display: "block" }}
        >
          The experiment you are looking for has been moved, deleted, or never existed in our logs. 
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <ArrowLeft className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Return to Lab</span>
          </Link>
          
          <Link
            href="/#features"
            className="inline-flex items-center justify-center px-8 py-4 bg-surface-container border border-outline-variant text-on-surface font-semibold rounded-full hover:bg-surface-container-high hover:border-primary/50 transition-all w-full sm:w-auto"
          >
            Explore Ecosystem
          </Link>
        </div>
      </div>
    </div>
  )
}
