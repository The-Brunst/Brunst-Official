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
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeHash}
          initial={{ opacity: 0, scale: 0.9438 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              opacity: { duration: 0.375, ease: "easeInOut", delay: 0.1875 },
              scale:   { duration: 0.375, ease: "easeInOut", delay: 0.1875 },
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
          style={{ minHeight: "100vh" }}
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

