"use client"

import { Gamepad2, Code2, Music, Palette, Coffee, Users } from "lucide-react"

interface CardProps {
  icon: React.ReactNode
  title: string
  description: string
  iconBg: string
  iconBorder: string
  accentRgb: string
}

function EcoCard({ icon, title, description, iconBg, iconBorder, accentRgb }: CardProps) {
  return (
    <div
      className="eco-card"
      style={{ 
        "--eco-hover-bg": `rgba(${accentRgb},0.06)`,
        "--eco-hover-border": `rgba(${accentRgb},0.6)`
      } as React.CSSProperties}
    >
      {/* Icon */}
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: iconBg,
          border: `1px solid ${iconBorder}`,
          boxShadow: `0 0 20px rgba(${accentRgb},0.3)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>

      {/* Title + Description */}
      <div style={{ flex: 1 }}>
        <h3 style={{ fontWeight: 600, fontSize: "18px", color: "#ffffff", marginBottom: "12px" }}>
          {title}
        </h3>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: "1.65" }}>
          {description}
        </p>
      </div>
    </div>
  )
}

export function Ecosystem() {
  return (
    <section className="relative z-10 py-24 px-4 md:px-6" id="features">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="font-bold text-3xl md:text-4xl text-white mb-4">
          The Ecosystem
        </h2>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px" }}>
          Everything you need in one place.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <EcoCard
          icon={<Gamepad2 style={{ width: "20px", height: "20px", color: "#f87171" }} />}
          title="Gaming Lounge"
          description="LFG, tournaments, and dedicated voice channels for every major title. Find your squad and dominate."
          iconBg="rgba(239,68,68,0.15)"
          iconBorder="rgba(239,68,68,0.25)"
          accentRgb="248,113,113"
        />
        <EcoCard
          icon={<Code2 style={{ width: "20px", height: "20px", color: "#60a5fa" }} />}
          title="Code Lab"
          description="Share snippets, get code reviews, and collaborate on open-source projects."
          iconBg="rgba(59,130,246,0.15)"
          iconBorder="rgba(59,130,246,0.25)"
          accentRgb="96,165,250"
        />
        <EcoCard
          icon={<Music style={{ width: "20px", height: "20px", color: "#facc15" }} />}
          title="Studio"
          description="Drop beats, share WIPs, and find collaborators for your next track."
          iconBg="rgba(234,179,8,0.15)"
          iconBorder="rgba(234,179,8,0.25)"
          accentRgb="250,204,21"
        />
        <EcoCard
          icon={<Palette style={{ width: "20px", height: "20px", color: "#f472b6" }} />}
          title="Creative Hub"
          description="Designers, 3D artists, and video editors unite to share portfolios and feedback."
          iconBg="rgba(236,72,153,0.15)"
          iconBorder="rgba(236,72,153,0.25)"
          accentRgb="244,114,182"
        />
        <EcoCard
          icon={<Coffee style={{ width: "20px", height: "20px", color: "#2dd4bf" }} />}
          title="The Lounge"
          description="Kick back, chat about life, movies, tech news, or just hang out in VC."
          iconBg="rgba(20,184,166,0.15)"
          iconBorder="rgba(20,184,166,0.25)"
          accentRgb="45,212,191"
        />
        <EcoCard
          icon={<Users style={{ width: "20px", height: "20px", color: "#c084fc" }} />}
          title="Networking"
          description="Connect with like-minded people. Build friendships, find collaborators, and grow your network."
          iconBg="rgba(192,132,252,0.15)"
          iconBorder="rgba(192,132,252,0.25)"
          accentRgb="192,132,252"
        />
      </div>
    </section>
  )
}
