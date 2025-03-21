"use client";

import { motion } from "framer-motion";
import type React from "react";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      key="page-transition"
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{
        type: "tween",
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier ease
        duration: 0.5,
      }}
      className="pt-24 min-h-screen opacity-100" // Ensuring visibility
    >
      {children}
    </motion.main>
  );
}
