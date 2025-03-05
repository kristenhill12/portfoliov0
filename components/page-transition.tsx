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
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{
        duration: 0.4, // ✅ Adjusted for smooth transitions
        ease: "easeInOut",
      }}
      className="pt-24"
    >
      {children}
    </motion.main>
  );
}
