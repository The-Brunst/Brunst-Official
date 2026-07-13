"use client";

import React from "react";
import { motion } from "framer-motion";
import { RVLogo } from "../RVLogo";
import { RVBackground } from "../Backgrounds";
import { RVFooter } from "../Footer";

interface AboutProps {
  onNavigate: (hash: string) => void;
}

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Home of Authors (Write)",
    services: [
      "Editing & Proofreading",
      "Design",
      "Formatting",
      "Publishing Setup",
      "Marketing Campaigns",
      "Optional Add-ons",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" />
        <path d="M2 12h20" strokeLinecap="round" />
      </svg>
    ),
    title: "Home of Brands (Create)",
    services: [
      "Branding & Advertising",
      "Marketing",
      "Platform Management",
      "Wall Branding",
      "Business Development & Strategy",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Home of Athletes (Play)",
    services: [
      "Talent Management",
      "Personal Branding",
      "Brand Endorsements & Partnerships",
      "PR & Reputation Management",
      "Wellness Consulting",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Home of Interiors (Design)",
    services: [
      "Luxury Interior Styling",
      "Concept-Based Interiors",
      "3D Visualization & Rendering",
      "Interior Consultation",
      "Custom Design Solutions",
      "Project Management",
    ],
  },
];

export function About({ onNavigate }: AboutProps) {
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
        >
          <p className="rv-section-eyebrow">Write. Create. Play. Design</p>
          <h2 className="rv-section-title" style={{ fontSize: "clamp(1.2rem, 3.2vw, 1.85rem)", lineHeight: 1.3 }}>
            WE ARE HOME TO A WORLD OF FIELDS
          </h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="rv-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        />

        {/* Cards — stacked vertically, centered */}
        <div
          style={{
            width: "100%",
            maxWidth: "520px",
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "2.5rem 1.5rem",
                borderBottom: i < cards.length - 1
                  ? "1px solid rgba(64, 110, 233, 0.08)"
                  : "none",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  border: "1px solid rgba(64, 110, 233, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#406ee9",
                  marginBottom: "1rem",
                }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#406ee9",
                  marginBottom: "1rem",
                }}
              >
                {card.title}
              </h3>

              {/* Services List */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                  alignItems: "center",
                }}
              >
                {card.services.map((service) => (
                  <span
                    key={service}
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255, 255, 255, 0.75)",
                    }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Footer sits naturally here, right below the cards */}
        <div style={{ marginTop: "3rem", width: "100%" }}>
          <RVFooter onNavigate={onNavigate} />
        </div>
      </div>
    </section>
  );
}

