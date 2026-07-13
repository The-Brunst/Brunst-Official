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
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <RVBackground />

      {/* Single centered block — logo + tagline + buttons + footer all together.
          Footer is NOT pinned to viewport bottom; it's part of this centered group.
          This matches how brunst.studios lays out its hero. */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1,
          width: "100%",
          padding: "0 1.5rem",
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ marginBottom: "1.25rem" }}
        >
          <RVLogo />
        </motion.div>

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
            color: "#406ee9",
            maxWidth: "750px",
            marginBottom: "1.75rem",
            fontWeight: 700,
          }}
        >
          BRINGING TOGETHER THE WORLD’S{" "}
          <span style={{ color: "#ffffff", fontWeight: 700 }}>
            CREATIVE DIVERSITY
          </span>
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
            marginBottom: "2.5rem",
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

        {/* Footer — inline, directly below buttons, no viewport gap */}
        <RVFooter onNavigate={onNavigate} />
      </div>
    </section>
  );
}

