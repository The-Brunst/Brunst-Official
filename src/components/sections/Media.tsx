"use client";

import React from "react";
import { motion } from "framer-motion";
import { RVLogo } from "../RVLogo";
import { RVBackground } from "../Backgrounds";
import { RVFooter } from "../Footer";

interface MediaProps {
  onNavigate: (hash: string) => void;
}

const articles = [
  {
    headline: "Nico Brunst revs up €75m venture capital fund",
    source: "The Times",
    url: "https://www.thetimes.co.uk",
  },
  {
    headline: 'NICO BrunstS „FUND OF FUNDS"',
    source: "Forbes",
    url: "https://www.forbes.at",
  },
  {
    headline:
      "Deutschlands prominenteste Unternehmer investieren in Brunsts Fonds – was kann er wirklich?",
    source: "Handelsblatt",
    url: "https://www.handelsblatt.com",
  },
];

export function Media({ onNavigate }: MediaProps) {
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
            All shot through an iPhone, but with a heart full of passion!
          </p>
          <h2 className="rv-section-title" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", marginTop: "0.5rem" }}>
            BRUNSTCAM
          </h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="rv-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        />

        {/* Content Story Block */}
        <div
          style={{
            width: "100%",
            maxWidth: "680px",
            display: "flex",
            flexDirection: "column",
            gap: "1.6rem",
            textAlign: "center",
            padding: "2rem 1.5rem",
          }}
        >
          {[
            {
              text: "Be it a random click, or an intentional shot!",
              highlight: "intentional shot!",
            },
            {
              text: "Be it just a rough cut clip, or a well curated video!",
              highlight: "well curated video!",
            },
            {
              text: "Brunstcam not just captures the moment, but it will give you something that’s worth every penny and will be closer to your memories.",
              highlight: "worth every penny and will be closer to your memories.",
            },
            {
              text: "All we need is one chance, a trial, for you to see what we can do, and for us to create beyond what you expect!",
              highlight: "create beyond what you expect!",
            },
          ].map((para, i) => {
            const parts = para.text.split(para.highlight);
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                style={{
                  fontSize: "clamp(0.75rem, 1.5vw, 0.95rem)",
                  fontWeight: 700,
                  lineHeight: 1.75,
                  letterSpacing: "0.06em",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                {parts[0]}
                <span style={{ color: "#ffffff" }}>{para.highlight}</span>
                {parts[1]}
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
              Connect with us now, and book a trail for Brunstcam!
            </motion.button>
          </motion.div>
        </div>
        {/* Footer sits naturally here */}
        <div style={{ marginTop: "3rem", width: "100%" }}>
          <RVFooter onNavigate={onNavigate} />
        </div>
      </div>
    </section>
  );
}
