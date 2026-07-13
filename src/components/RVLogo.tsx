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
        src="/BRUNST.logo.png"
        alt="Brunst Studios"
        width={75}
        height={75}
        priority
        style={{ width: "75px", height: "75px", objectFit: "contain" }}
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
            color: "#406ee9",
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
            color: "#406ee9",
          }}
        >
          STUDIOS
        </span>
      </div>
    </div>
  );
}
