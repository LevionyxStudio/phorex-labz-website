"use client"

import React from "react"
import { cn } from "@/lib/utils"

type SpotlightProps = {
  className?: string
  fill?: string
}

/**
 * Performance design:
 * - The blur wrapper div gets its own GPU compositor layer via translateZ(0).
 *   The blur is applied once to this layer and cached — it never needs to be
 *   re-rasterized during scroll because the wrapper itself does not move.
 * - The inner SVG handles the entry animation (opacity + transform).
 *   Because the blur is on the *parent*, the browser composites the pre-blurred
 *   layer, then applies the child's transform on top — zero re-blur per frame.
 * - willChange is on the inner SVG only (the thing that actually animates).
 */
export function Spotlight({ className, fill }: SpotlightProps) {
  return (
    <div
      className={cn("pointer-events-none absolute z-[1]", className)}
      style={{
        filter: "blur(80px)",
        transform: "translateZ(0)",
      }}
    >
      <svg
        className="animate-spotlight opacity-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
        style={{ willChange: "transform, opacity" }}
      >
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        />
      </svg>
    </div>
  )
}
