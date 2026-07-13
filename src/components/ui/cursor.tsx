"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "text">("default");
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the outer ring
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("a, button, input, select, textarea, [role='button'], [data-cursor-hover]");
      
      if (interactiveEl) {
        const customText = interactiveEl.getAttribute("data-cursor-text");
        if (customText) {
          setCursorType("text");
          setCursorText(customText);
        } else {
          setCursorType("pointer");
          setCursorText("");
        }
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Precise Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 hidden lg:block mix-blend-difference"
        style={{ x: mouseX, y: mouseY }}
      />
      {/* 2. Sleek Outer Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/30 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center text-[10px] tracking-wider uppercase text-black font-semibold"
        style={{
          x: ringX,
          y: ringY,
          width: cursorType === "pointer" ? 44 : cursorType === "text" ? 64 : 20,
          height: cursorType === "pointer" ? 44 : cursorType === "text" ? 64 : 20,
          backgroundColor: cursorType === "text" ? "rgba(255, 255, 255, 0.95)" : "transparent",
          borderColor: cursorType === "text" ? "transparent" : cursorType === "pointer" ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        {cursorType === "text" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-black font-bold text-center leading-none text-[9px]"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
