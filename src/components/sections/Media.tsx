"use client";

import React from "react";
import { motion } from "framer-motion";

interface MediaProps {
  onNavigate: (hash: string) => void;
}

export function Media({ onNavigate }: MediaProps) {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Content */}
      <div className="flex flex-col items-center w-full">
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
          <h2 className="rv-section-title" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", marginTop: "0.5rem" }}>
            BRUNSTCAM
          </h2>
          <p style={{ textTransform: "none", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.06em", lineHeight: 1.9, color: "#fffef1", margin: "0.5rem 0 0" }}>
            All shot through iPhone,
            <br />
            But, with a heart full of passion!
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="rv-divider !my-3"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        />

        {/* Content Story Block */}
        <div
          style={{
            width: "100%",
            maxWidth: "520px",
            display: "flex",
            flexDirection: "column",
            gap: "1.6rem",
            textAlign: "center",
            padding: "0.75rem 1.5rem 2rem",
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
                  color: "rgba(255, 254, 241, 0.7)",
                }}
              >
                {parts[0]}
                <span style={{ color: "#fffef1" }}>{para.highlight}</span>
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
              className="whitespace-normal md:whitespace-nowrap"
              style={{
                marginTop: "1.5rem",
                background: "transparent",
                border: "1px solid #516fc7",
                borderRadius: "9999px",
                padding: "0.7rem 1.8rem",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#fffef1",
                cursor: "pointer",
                boxShadow: "0 0 15px rgba(81, 111, 199, 0.1)",
                lineHeight: "1.6",
              }}
              whileHover={{
                borderColor: "#fffef1",
                boxShadow: "0 0 25px rgba(81, 111, 199, 0.35)",
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              Connect with us now <br className="block md:hidden" /> to book a free trial.
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


