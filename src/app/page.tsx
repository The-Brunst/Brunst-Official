"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useHash } from "@/hooks/use-hash";

// Sections
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Partners } from "@/components/sections/Partners";
import { Media } from "@/components/sections/Media";
import { Contact } from "@/components/sections/Contact";
import { Disclosures } from "@/components/sections/Disclosures";
import { Privacy } from "@/components/sections/Privacy";
import { RVBackground } from "@/components/Backgrounds";
import { RVLogo } from "@/components/RVLogo";
import { RVFooter } from "@/components/Footer";

export default function Home() {
  const [activeHash, navigateTo] = useHash();

  const renderSection = () => {
    switch (activeHash) {
      case "#about":
        return <About onNavigate={navigateTo} />;
      case "#partners":
        return <Partners onNavigate={navigateTo} />;
      case "#media":
        return <Media onNavigate={navigateTo} />;
      case "#contact":
        return <Contact onNavigate={navigateTo} />;
      case "#disclosures":
        return <Disclosures onNavigate={navigateTo} />;
      case "#privacy":
        return <Privacy onNavigate={navigateTo} />;
      default:
        return <Hero onNavigate={navigateTo} />;
    }
  };

  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        overflowX: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Global background video that never unmounts or resets during section transitions */}
      <RVBackground />

      {/* Global centered wrapper layout matching site-main > inner of rosberg.ventures */}
      <div
        className="w-full max-w-[40rem] px-6 md:px-12 py-16 md:py-24 flex flex-col items-center relative z-10"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {/* Global static header (logo) */}
        <div style={{ marginBottom: "1rem" }}>
          <RVLogo />
        </div>

        {/* Transitioning Section Content */}
        <div style={{ width: "100%" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHash}
              initial={{ opacity: 0, scale: 0.9438 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  opacity: { duration: 0.375, ease: "easeInOut" },
                  scale:   { duration: 0.375, ease: "easeInOut" },
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.9438,
                transition: {
                  opacity: { duration: 0.1875, ease: "easeInOut" },
                  scale:   { duration: 0.1875, ease: "easeInOut" },
                },
              }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Global static footer */}
        <div style={{ marginTop: "1.5rem" }}>
          <RVFooter onNavigate={navigateTo} />
        </div>
      </div>
    </main>
  );
}
