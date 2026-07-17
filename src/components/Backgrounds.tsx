"use client";

import React from "react";

// The main background used on ALL sections — official video background matching brunst.studios
export function RVBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        overflow: "hidden",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/bg-poster.jpg"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Dark blue overlay — derived from #516fc7 at very low lightness */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(45deg, rgba(5,9,26,0.85) 40%, rgba(9,15,40,0.88) 100%)",
          zIndex: 1,
        }}
      />

      {/* Noise texture overlay (from official site) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          backgroundImage:
            "url(\"data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20height%3D%22512%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cfilter%20id%3D%22noise%22%3E%20%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.875%22%20result%3D%22noise%22%20%2F%3E%20%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.71875%200%22%20%2F%3E%20%3C%2Ffilter%3E%20%3Crect%20filter%3D%22url%28%23noise%29%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22512%22%20height%3D%22512%22%20fill%3D%22transparent%22%20opacity%3D%221%22%20%2F%3E%3C%2Fsvg%3E\")",
          backgroundSize: "512px",
          backgroundRepeat: "repeat",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

// Alias exports for backward compat
export const AnimatedMeshBackground = RVBackground;
export const CyberGridBackground = RVBackground;
export const FloatingParticlesBackground = RVBackground;

