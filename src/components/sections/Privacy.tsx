"use client";

import React from "react";
import { motion } from "framer-motion";

interface PrivacyProps {
  onNavigate: (hash: string) => void;
}

const sections = [
  {
    id: "commitment",
    title: "1. Privacy Commitment",
    content:
      "At Brunst Studios, we respect your privacy and are committed to protecting your personal information.",
  },
  {
    id: "collection",
    title: "2. Information Collection & Use",
    content:
      "We may collect information such as your name, email address, phone number, company details, and information submitted through our website forms. We use this information to respond to enquiries, provide our services, improve our website, and communicate with you.",
  },
  {
    id: "sharing",
    title: "3. Information Sharing",
    content:
      "We do not sell or rent your personal information. Your information may be shared with trusted service providers when necessary to operate our website or provide our services, or when required by law.",
  },
  {
    id: "cookies",
    title: "4. Cookies & Technologies",
    content:
      "Our website may use cookies and similar technologies to improve your browsing experience and understand website usage.",
  },
  {
    id: "security",
    title: "5. Data Security",
    content:
      "We take reasonable steps to protect your information, but no online system can be guaranteed to be completely secure.",
  },
  {
    id: "updates",
    title: "6. Consent & Updates",
    content:
      "By using our website, you agree to this Privacy Policy. We may update this policy from time to time, and any changes will be posted on this page.",
  },
];

export function Privacy({ onNavigate }: PrivacyProps) {
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
          className="text-center mb-1"
        >
          <h2 className="rv-section-title" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", marginTop: "0.5rem" }}>
            PRIVACY POLICY
          </h2>
          <p
            style={{
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(81,111,199,0.5)",
              marginTop: "0.5rem",
            }}
          >
            Last Updated: 05/08/2026
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="rv-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        />

        {/* Two column layout on desktop */}
        <div
          style={{
            width: "100%",
            maxWidth: "820px",
            display: "flex",
            gap: "2.5rem",
            alignItems: "flex-start",
          }}
        >
          {/* Side navigation (desktop only) */}
          <aside
            style={{
              display: "none",
              width: "220px",
              flexShrink: 0,
              position: "sticky",
              top: "2rem",
            }}
            className="lg:block"
          >
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(81,111,199,0.5)",
                marginBottom: "1rem",
              }}
            >
              Sections
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,254,241,0.35)",
                      textAlign: "left",
                      width: "100%",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#516fc7"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,254,241,0.35)"; }}
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {sections.map((sec, i) => (
              <motion.article
                key={sec.id}
                id={sec.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                style={{
                  borderBottom: "1px solid rgba(81,111,199,0.08)",
                  paddingBottom: "1.5rem",
                  scrollMarginTop: "4rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#516fc7",
                    marginBottom: "0.75rem",
                  }}
                >
                  {sec.title}
                </h3>
                <p className="rv-prose">{sec.content}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


