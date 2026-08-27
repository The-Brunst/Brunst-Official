"use client";

import React from "react";
import { motion } from "framer-motion";

interface AboutProps {
  onNavigate: (hash: string) => void;
}

const cards = [
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
        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Home of Interiors (Design)",
    services: [
      "Luxury Interior Styling",
      "Café Interiors & Styling",
      "Concept-Based Interiors",
      "3D Visualization & Rendering",
      "Interior Consultation",
      "Custom Design Solutions",
      "Project Management",
    ],
  },
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
];

export function About({ onNavigate }: AboutProps) {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Content */}
      <div className="flex flex-col items-center w-full">
        {/* Back button */}
        <motion.button
          onClick={() => onNavigate("")}
          className="rv-pill-btn mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          &larr; BACK
        </motion.button>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-1 w-full"
        >
          <p className="rv-section-eyebrow">Create. Design. Write. Play</p>
          <h2
            className="rv-section-title md:whitespace-nowrap"
            style={{
              fontSize: "clamp(1.1rem, 3.2vw, 1.45rem)",
              lineHeight: 1.3,
              marginTop: "0.5rem",
              color: "#fffef1",
            }}
          >
            WE ARE HOME TO A WORLD OF FIELDS
          </h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="rv-divider !my-3"
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
              className="flex flex-col items-center text-center gap-3 py-4 px-2 md:px-6"
              style={{
                borderBottom: i < cards.length - 1
                  ? "1px solid rgba(81, 111, 199, 0.08)"
                  : "none",
              }}
            >
              {/* Top row: icon + title side by side */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    flexShrink: 0,
                    border: "1px solid rgba(81, 111, 199, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#516fc7",
                  }}
                >
                  {card.icon}
                </div>
                <h3 className="text-[clamp(0.8rem,3.6vw,1.05rem)] font-bold tracking-[0.08em] md:tracking-[0.18em] uppercase text-[#516fc7] m-0 leading-[1.4] whitespace-nowrap">
                  {card.title}
                </h3>
              </div>

              {/* Services List — below icon+title row */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.55rem",
                }}
              >
                {card.services.map((service) => (
                  <span
                    key={service}
                    className="text-[0.75rem] md:text-[0.85rem] font-bold tracking-[0.1em] uppercase text-[#fffef1]/75 text-center"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


