"use client";

import React from "react";
import { motion } from "framer-motion";

export const Background: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Precision Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial Gradient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]" />

      {/* Ambient Animated Orbs */}
      <motion.div
        className="absolute -top-32 left-[8%] h-[32rem] w-[32rem] rounded-full bg-cyan-500/15 blur-[128px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[28%] right-[5%] h-[36rem] w-[36rem] rounded-full bg-violet-600/15 blur-[140px]"
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[25%] h-[30rem] w-[30rem] rounded-full bg-fuchsia-600/10 blur-[130px]"
        animate={{
          x: [0, 40, 0],
          y: [0, -35, 0],
          opacity: [0.1, 0.22, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
