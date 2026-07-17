"use client";

import React from "react";
import { motion } from "framer-motion";
import { RVLogo } from "../RVLogo";
import { RVBackground } from "../Backgrounds";
import { RVFooter } from "../Footer";

interface HeroProps {
  onNavigate: (hash: string) => void;
}

const buttons = [
  { label: "WHAT WE DO", hash: "#about" },
  { label: "BRUNSTCAM", hash: "#media" },
  { label: "WHY US", hash: "#partners" },
  { label: "CONTACT US", hash: "#contact" },
];

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* Headline */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        style={{
          fontSize: "clamp(0.85rem, 1.6vw, 1.15rem)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          textAlign: "center",
          lineHeight: 1.65,
          color: "#fffef1",
          maxWidth: "750px",
          marginBottom: "1.75rem",
          fontWeight: 700,
        }}
      >
        BRINGING TOGETHER THE WORLD’S CREATIVE DIVERSITY
      </motion.p>

      {/* 2×2 Nav buttons — flex-wrap so they naturally reflow on mobile (rosberg.ventures approach) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          width: "100%",
          maxWidth: "25rem", // accommodates two larger 11.5rem buttons side-by-side
        }}
      >
        {buttons.map((btn, i) => (
          <motion.button
            key={btn.hash}
            onClick={() => onNavigate(btn.hash)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.07 }}
            className="rv-nav-btn"
          >
            {btn.label}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}


