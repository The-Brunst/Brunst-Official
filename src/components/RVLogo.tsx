"use client";

import React from "react";
import Image from "next/image";

interface RVLogoProps {
  className?: string;
}

export function RVLogo({ className = "" }: RVLogoProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
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
          filter: "brightness(0) saturate(100%) invert(97%) sepia(15%) saturate(400%) hue-rotate(15deg) brightness(102%)",
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
            fontSize: "clamp(1.35rem, 2.5vw, 1.95rem)",
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
            fontSize: "clamp(1.35rem, 2.5vw, 1.95rem)",
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
