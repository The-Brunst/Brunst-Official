"use client";

import React from "react";
import { motion } from "framer-motion";
import { RVLogo } from "../RVLogo";
import { RVBackground } from "../Backgrounds";
import { RVFooter } from "../Footer";

interface PrivacyProps {
  onNavigate: (hash: string) => void;
}

const sections = [
  {
    id: "controller",
    title: "1. Controller Details",
    content:
      "Brunst Studios GmbH, based in Germany, operates this website. As the controller under GDPR and applicable data protection regulations, we are responsible for the processing of your personal data. For any questions regarding your privacy, contact us at privacy@brunst.studios.",
  },
  {
    id: "collection",
    title: "2. Collection of Personal Data",
    content:
      "When you visit our site, contact us via form, or use our services, we process personal data. This includes technical details (IP addresses, browser configurations, time of access) and contact information (names, emails, company size, topics chosen) provided when sending inquiries.",
  },
  {
    id: "cookies",
    title: "3. Cookies & Analytical Scripts",
    content:
      "We use cookies and equivalent web storage systems to ensure layout persistence, security authentication, and feature delivery. Brunst Studios employs performance analytics scripts to optimize site loading speed and user journeys. You can restrict or disable cookies through your local browser settings.",
  },
  {
    id: "newsletter",
    title: "4. Newsletter & Communication",
    content:
      "If you subscribe to our newsletter, we process your email address to deliver periodic fund updates and ecosystem news. We use confirmation steps (double opt-in) to verify your permission. You can opt out at any time by clicking the unsubscribe link present in each email footer.",
  },
  {
    id: "transfers",
    title: "5. Data Sharing & Transfers",
    content:
      "Your data is only shared with authorized partners, hosting services, and regulatory bodies as required by law. If data transfers to providers outside the European Economic Area (EEA) occur, we secure those channels using EU Standard Contractual Clauses (SCCs) to maintain safety.",
  },
  {
    id: "retention",
    title: "6. Storage Retention Periods",
    content:
      "We only retain personal data for as long as necessary to fulfill the purposes for which it was collected, including legal audit requirements, tax records, or until you withdraw your consent for subscriptions or newsletter updates.",
  },
  {
    id: "rights",
    title: "7. Your Rights",
    content:
      "Under GDPR, you have the right to request access, rectification, deletion, or portability of your personal data. You also have the right to restrict processing, object to profiling, and lodge complaints with supervising data protection authorities.",
  },
  {
    id: "security",
    title: "8. Data Security",
    content:
      "We maintain modern technical and organizational safety measures (such as SSL encryption, firewalls, and strict access control credentials) to prevent accidental loss, damage, theft, or unauthorized use of personal records.",
  },
  {
    id: "profiling",
    title: "9. Automated Decision Making",
    content:
      "Brunst Studios does not utilize automated algorithms, profiling systems, or automated decision-making procedures to judge your inquiries or eligibility for our services or investment opportunities.",
  },
  {
    id: "updates",
    title: "10. Policy Changes & Updates",
    content:
      "This Privacy Policy is effective as of May 25, 2023. We reserve the right to modify or replace sections to reflect regulatory changes or service enhancements. We will update the effective date accordingly.",
  },
];

export function Privacy({ onNavigate }: PrivacyProps) {
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
          className="text-center mb-1"
        >
          <p className="rv-section-eyebrow">LEGAL</p>
          <h2 className="rv-section-title">PRIVACY POLICY</h2>
          <p
            style={{
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(64,110,233,0.5)",
              marginTop: "0.5rem",
            }}
          >
            Effective Date: May 25, 2023
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
                color: "rgba(64,110,233,0.5)",
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
                      color: "rgba(255,255,255,0.35)",
                      textAlign: "left",
                      width: "100%",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#406ee9"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.35)"; }}
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
                  borderBottom: "1px solid rgba(64,110,233,0.08)",
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
                    color: "#406ee9",
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
        {/* Footer sits naturally here */}
        <div style={{ marginTop: "3.5rem", width: "100%" }}>
          <RVFooter onNavigate={onNavigate} />
        </div>
      </div>
    </section>
  );
}

