"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeHash: string;
  onNavigate: (hash: string) => void;
}

export function Navbar({ activeHash, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position to add glass blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "what we do", hash: "#about" },
    { name: "brunstcam", hash: "#media" },
    { name: "why us", hash: "#partners" },
    { name: "contact us", hash: "#contact" },
  ];

  const handleLinkClick = (hash: string) => {
    onNavigate(hash);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || activeHash !== ""
          ? "bg-black/60 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick("")}
          className="text-xs font-semibold tracking-[0.4em] uppercase text-white hover:text-white/80 transition-colors focus:outline-none"
          data-cursor-hover
        >
          Brunst Studios
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => {
            const isActive = activeHash === item.hash;
            return (
              <button
                key={item.hash}
                onClick={() => handleLinkClick(item.hash)}
                className="relative text-[11px] font-medium tracking-[0.25em] uppercase text-white/60 hover:text-white transition-colors focus:outline-none py-1"
                data-cursor-hover
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white/80 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle Menu"
          data-cursor-hover
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden w-full bg-black/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col space-y-6 py-8 px-6">
              {navItems.map((item) => {
                const isActive = activeHash === item.hash;
                return (
                  <button
                    key={item.hash}
                    onClick={() => handleLinkClick(item.hash)}
                    className="w-full text-left text-xs font-medium tracking-[0.25em] uppercase text-white/70 hover:text-white py-2 focus:outline-none flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
