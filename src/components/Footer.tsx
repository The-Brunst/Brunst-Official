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

// Thin LinkedIn Icon
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
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
      {/* SFDR Disclosure Link */}
      <button
        onClick={() => onNavigate("#disclosures")}
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
        SFDR DISCLOSURE
      </button>

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
          href="https://www.crunchbase.com/organization/Brunst-ventures"
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

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/company/Brunst-ventures"
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
          <LinkedInIcon />
        </a>
      </div>
    </motion.footer>
  );
}

// Legacy named export alias
export function Footer({ onNavigate }: RVFooterProps) {
  return <RVFooter onNavigate={onNavigate} />;
}
