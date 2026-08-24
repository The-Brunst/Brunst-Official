"use client";

import React from "react";
import { motion } from "framer-motion";

interface RVFooterProps {
  onNavigate: (hash: string) => void;
}

// Thin Plus/Subscribe Icon inside a circle
function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

// Thin Instagram Icon
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function RVFooter({ onNavigate }: RVFooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap",
        padding: "1rem 0",
      }}
    >
      {/* Privacy Link */}
      <button
        onClick={() => onNavigate("#privacy")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#516fc7",
          transition: "color 0.2s, opacity 0.2s",
          padding: 0,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "#fffef1"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "#516fc7"; }}
      >
        PRIVACY
      </button>

      {/* Social Icons (Inline with links) */}
      <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
        {/* Plus / Crunchbase Link */}
        <a
          href="https://www.crunchbase.com/organization/Brunst-studios"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#516fc7",
            transition: "color 0.2s, scale 0.2s",
            display: "flex",
            alignItems: "center",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#fffef1"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "#516fc7"; }}
        >
          <PlusIcon />
        </a>

        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/brunststudios?igsh=MTZ0OHQ0Z3Ztdzhldw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#516fc7",
            transition: "color 0.2s, scale 0.2s",
            display: "flex",
            alignItems: "center",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#fffef1"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "#516fc7"; }}
        >
          <InstagramIcon />
        </a>
      </div>
    </motion.footer>
  );
}

// Legacy named export alias
export function Footer({ onNavigate }: RVFooterProps) {
  return <RVFooter onNavigate={onNavigate} />;
}
