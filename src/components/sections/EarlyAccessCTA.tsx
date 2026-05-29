import { ArrowRight } from "lucide-react"

export function EarlyAccessCTA() {
  return (
    <section className="py-xxl my-xl relative" id="community">
      <div className="glass-card rounded-2xl p-xl md:p-xxl text-center relative overflow-hidden">
        {/* Inner glow effect for CTA */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(49,49,192,0.18) 0%, transparent 70%)" }}></div>

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-lg">
          <h2 className="font-display-lg text-display-lg text-white">
            Join Phorex Labz.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            A free all-in-one community for gamers, coders, and creatives. No invites needed — just show up.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-md bg-white text-base px-xl py-md rounded-full font-label-md text-label-md hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] text-black flex items-center gap-2 cursor-pointer"
          >
            Join the Server
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
