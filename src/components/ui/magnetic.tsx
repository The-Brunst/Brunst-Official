"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const target = ref.current;
    if (!target) return;

    const { left, top, width, height } = target.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Shift intensity divisor: higher values mean a more subtle, premium movement
    const intensity = 3.5;
    const distanceX = (clientX - centerX) / intensity;
    const distanceY = (clientY - centerY) / intensity;

    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 18, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
