"use client";

import React from "react";
import { motion } from "framer-motion";
import { RVLogo } from "../RVLogo";
import { RVBackground } from "../Backgrounds";
import { RVFooter } from "../Footer";

interface DisclosuresProps {
  onNavigate: (hash: string) => void;
}

const sections = [
  {
    title: "1. Overview of SFDR Commitment",
    content:
      "Brunst Studios is dedicated to responsible and sustainable investing. Under the Sustainable Finance Disclosure Regulation (SFDR) (EU) 2019/2088, we integrate Environmental, Social, and Governance (ESG) considerations throughout our investment lifecycle—from diligence to portfolio management. We aim to support companies that respect human rights, preserve climate stability, and adhere to strong governance.",
  },
  {
    title: "2. Integration of Sustainability Risks",
    content:
      "Sustainability Risks represent environmental, social, or governance events that, if they occur, could cause an actual or a potential material negative impact on the value of investments. Brunst Studios systematically audits target funds and direct co-investments for exposure to these risks (e.g., carbon emission liabilities, labor standard non-compliance, and data privacy vulnerabilities) prior to committing capital.",
  },
  {
    title: "3. No Consideration of Sustainability Adverse Impacts",
    content:
      "Brunst Studios does not currently consider the adverse impacts of investment decisions on sustainability factors in the exact manner specified under Article 4 of the SFDR. Given our size, stage, and focus on venture capital, the detailed disclosure frameworks (Principal Adverse Impacts metrics) are not proportional to our current portfolio scale. We continue to monitor regulatory standards and may adapt our stance as our data collection systems mature.",
  },
  {
    title: "4. Remuneration Policy Integration",
    content:
      "Our remuneration structure is designed to promote sound and effective risk management. In alignment with Article 5 of the SFDR, our remuneration policies do not encourage excessive risk-taking, including Sustainability Risks. Performance metrics for key decision-makers include compliance with our internal ESG risk guidelines and long-term value preservation strategies.",
  },
];

export function Disclosures({ onNavigate }: DisclosuresProps) {
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
          style={{ maxWidth: "600px" }}
        >
          <p className="rv-section-eyebrow">SUSTAINABLE FINANCE</p>
          <h2 className="rv-section-title" style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}>
            DISCLOSURE REGULATIONS (SFDR)
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
            Article 3, 4 &amp; 5 Disclosures
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="rv-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        />

        {/* Content panels */}
        <div
          style={{
            width: "100%",
            maxWidth: "520px",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            marginTop: "0.5rem",
          }}
        >
          {sections.map((sec, i) => (
            <motion.div
              key={sec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              style={{
                background: "rgba(0,20,50,0.35)",
                border: "1px solid rgba(81,111,199,0.12)",
                borderRadius: "12px",
                padding: "1.5rem 1.75rem",
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


