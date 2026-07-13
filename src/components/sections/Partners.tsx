"use client";

import React from "react";
import { motion } from "framer-motion";
import { RVLogo } from "../RVLogo";
import { RVBackground } from "../Backgrounds";
import { RVFooter } from "../Footer";

interface PartnersProps {
  onNavigate: (hash: string) => void;
}

// Real partner logos as SVG — exactly those shown on live site
function A16ZLogo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        lineHeight: 1.1,
      }}
    >
      <span
        style={{
          fontSize: "1.85rem",
          fontWeight: 700,
          color: "#fff",
          letterSpacing: "-0.02em",
        }}
      >
        andreessen.
      </span>
      <span
        style={{
          fontSize: "1.85rem",
          fontWeight: 700,
          color: "#fff",
          letterSpacing: "-0.02em",
        }}
      >
        horowitz
      </span>
    </div>
  );
}

function KleinerPerkinsLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
      {/* Diamond K mark */}
      <svg viewBox="0 0 40 40" width="34" height="34" fill="none">
        <rect
          x="8"
          y="8"
          width="24"
          height="24"
          rx="2"
          stroke="#fff"
          strokeWidth="2"
        />
        <path d="M14 20h8M18 14l-4 6 4 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <span
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          KLEINER
        </span>
        <span
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          PERKINS
        </span>
      </div>
    </div>
  );
}

function KhoslaVenturesLogo() {
  return (
    <span
      style={{
        fontSize: "1.65rem",
        fontWeight: 700,
        color: "#fff",
        letterSpacing: "-0.01em",
      }}
    >
      khosla ventures
    </span>
  );
}

const partners = [
  { name: "Andreessen Horowitz", Logo: A16ZLogo },
  { name: "Kleiner Perkins", Logo: KleinerPerkinsLogo },
  { name: "Khosla Ventures", Logo: KhoslaVenturesLogo },
];

export function Partners({ onNavigate }: PartnersProps) {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      <RVBackground />

      {/* Logo */}
      <motion.div
        className="flex justify-center pt-12 pb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <RVLogo />
      </motion.div>

      {/* Content */}
      <div className="flex flex-col items-center px-6 pb-6 w-full">
        {/* Back button */}
        <motion.button
          onClick={() => onNavigate("")}
          className="rv-pill-btn mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          ← BACK
        </motion.button>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-2"
          style={{ maxWidth: "800px" }}
        >
          <p className="rv-section-eyebrow" style={{ textTransform: "none", fontSize: "0.8rem" }}>
            We are new, only on paper!
          </p>
          <h2 className="rv-section-title" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", marginTop: "0.5rem" }}>
            WHY US
          </h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="rv-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        />

        {/* Narrative Copy Column */}
        <div
          style={{
            width: "100%",
            maxWidth: "680px",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            textAlign: "center",
            padding: "0.5rem 0",
          }}
        >
          {/* Prominent Lead-in */}
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: "clamp(0.9rem, 2.2vw, 1.2rem)",
              fontWeight: 700,
              lineHeight: 1.5,
              letterSpacing: "0.08em",
              color: "#ffffff",
              marginBottom: "0.5rem",
              textTransform: "uppercase",
            }}
          >
            THE FIELD HAS BEEN OURS SINCE THE LAST 730+ DAYS!
          </motion.h3>

          {[
            {
              text: "Brunst, earlier, was just an idea born out of the blue. And, what’s better than to stick to the moment of blue? That’s what happened!",
              highlight: "born out of the blue.",
              highlight2: "stick to the moment of blue?",
            },
            {
              text: "What just was a fleeting thought once, now became the moment the world will love!",
              highlight: "moment the world will love!",
            },
            {
              text: "The team knows what exactly the market and your business needs. You may argue that there are already many who understand the requirements better. So, what’s special here?",
              highlight: "what exactly the market and your business needs.",
            },
            {
              text: "Well, imagine your business or brand having someone who can not only turn heads but also create a beeline towards your product? Who can not only bring sales but also make an impact that history will remember?",
              highlight: "turn heads but also create a beeline",
              highlight2: "make an impact that history will remember?",
            },
            {
              text: "And that’s what Brunst does. We not only understand but also plan to improve the business or brand in ways that bring authenticity to the centre stage, and nothing beats the way of attracting the world, just by being yourself!",
              highlight: "bring authenticity to the centre stage,",
              highlight2: "attracting the world, just by being yourself!",
            },
          ].map((para, i) => {
            let renderedText: React.ReactNode = para.text;

            // Simple highlights helper
            if (para.highlight) {
              const parts = para.text.split(para.highlight);
              renderedText = (
                <>
                  {parts[0]}
                  <span style={{ color: "#ffffff" }}>{para.highlight}</span>
                  {para.highlight2 ? (
                    <>
                      {parts[1].split(para.highlight2)[0]}
                      <span style={{ color: "#ffffff" }}>{para.highlight2}</span>
                      {parts[1].split(para.highlight2)[1]}
                    </>
                  ) : (
                    parts[1]
                  )}
                </>
              );
            }

            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 + i * 0.08 }}
                style={{
                  fontSize: "clamp(0.75rem, 1.5vw, 0.95rem)",
                  fontWeight: 700,
                  lineHeight: 1.75,
                  letterSpacing: "0.06em",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                {renderedText}
              </motion.p>
            );
          })}

          {/* Interactive CTA Link */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <motion.button
              onClick={() => onNavigate("#contact")}
              style={{
                marginTop: "1.5rem",
                background: "transparent",
                border: "1px solid #406ee9",
                borderRadius: "9999px",
                padding: "0.7rem 1.8rem",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#ffffff",
                cursor: "pointer",
                boxShadow: "0 0 15px rgba(64, 110, 233, 0.1)",
              }}
              whileHover={{
                borderColor: "#ffffff",
                boxShadow: "0 0 25px rgba(64, 110, 233, 0.35)",
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              Work with us now
            </motion.button>
          </motion.div>
        </div>
        {/* Footer sits naturally here */}
        <div style={{ marginTop: "3.5rem", width: "100%" }}>
          <RVFooter onNavigate={onNavigate} />
        </div>
      </div>
    </section>
  );
}
