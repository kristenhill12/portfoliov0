"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
          {/* 🔥 Forces a FULL PAGE RELOAD when clicking the logo */}
          <a href="/" className="cursor-pointer">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <svg width="48" height="60" viewBox="0 0 539.89 689.85">
                <path fill="#2f5233" d="M539.64,689.85H29.2c-1.58-149.91,61.43-294.13,168.71-397.6l64.78,68.95c15.94-40.27,77.71-141.19,125.88-113.01,113.37,66.34,155,321.21,151.08,441.66Z"/>
                <path fill="#fe6b36" d="M134.88,101.64l75.67,36.56c-86.41,17.16-76.38,55.48-99.64,121.11-2.94,8.3-.99,19.85-12.66,17.32-6.62-31.82-12.88-92.45-40-111.37-8.9-6.21-72.65-17.47-55.24-35.47,5.31-5.49,50.17-7.42,64.51-26.42,15.69-20.78,20.51-76.95,30.74-103.36l36.63,101.64Z"/>
              </svg>
            </motion.div>
          </a>

          <div className="hidden sm:flex gap-4 md:gap-8">
            {/* 🔥 ALL links now FORCE a full reload to ensure they work */}
            <a href="/" className="nav-link">Work</a>
            <a href="/fun" className="nav-link">Fun</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/resume" className="nav-link">Resume</a>
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#393938] hover:text-[#2f5233] transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-[#F8F8F8] border-t border-[#393938]/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="mobile-nav-link">Work</a>
            <a href="/fun" className="mobile-nav-link">Fun</a>
            <a href="/about" className="mobile-nav-link">About</a>
            <a href="/resume" className="mobile-nav-link">Resume</a>
          </div>
        </div>
      )}
    </nav>
  );
}
