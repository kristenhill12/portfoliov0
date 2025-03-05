"use client";

import { motion } from "framer-motion";
import type React from "react";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 1 }, // ❗ FIX: Prevent it from fading out to 0 opacity
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{
        type: "tween",
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier ease
        duration: 0.5,
      }}
      className="pt-24 min-h-screen" // Ensure it has height
    >
      {children}
    </motion.main>
  );
}
