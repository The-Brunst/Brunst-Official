"use client";

import React from "react";
import Image from "next/image";

interface BrunstLogoProps {
  className?: string;
}

export function BrunstLogo({ className = "" }: BrunstLogoProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      {/* Brunst logo image */}
      <Image
        src="/BRUNST.logo.web.png"
        alt="Brunst Studios"
        width={100}
        height={100}
        priority
        style={{
          width: "100px",
          height: "100px",
          objectFit: "contain",
          filter: "brightness(0) saturate(100%) invert(40%) sepia(98%) saturate(351%) hue-rotate(187deg) brightness(90%) contrast(95%)",
          clipPath: "inset(0% 0% 18% 0%)",
          marginLeft: "-24px",
          marginRight: "-9px",
          transform: "translateY(7px)",
        }}
      />

      {/* Brand name */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          lineHeight: 1.15,
        }}
      >
        <span
          style={{
            fontSize: "clamp(1.45rem, 2.8vw, 2.1rem)",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#516fc7",
          }}
        >
          BRUNST
        </span>
        <span
          style={{
            fontSize: "clamp(1.45rem, 2.8vw, 2.1rem)",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#516fc7",
          }}
        >
          STUDIOS
        </span>
      </div>
    </div>
  );
}

// Alias for backward compatibility
export const RVLogo = BrunstLogo;
