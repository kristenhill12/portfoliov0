"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isWorkActive = pathname === "/" ||
    pathname.includes("/airasia") ||
    pathname.includes("/blue-elephant") ||
    pathname.includes("/studybuddy") ||
    pathname.includes("/depop");

  // ✅ **Fixed navigation back to home (triggers preloader)**
  const handleHomeNavigation = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (typeof window !== "undefined") {
      // ✅ **Force a full reload to show the preloader**
      window.location.href = "/";
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
          {/* ✅ **Clicking Logo now properly reloads home page with preloader** */}
          <a href="/" onClick={handleHomeNavigation} className="cursor-pointer">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <svg width="48" height="60" viewBox="0 0 539.89 689.85">
                <path fill="#2f5233" d="M539.64,689.85H29.2c-1.58-149.91,61.43-294.13,168.71-397.6l64.78,68.95c15.94-40.27,77.71-141.19,125.88-113.01,113.37,66.34,155,321.21,151.08,441.66Z"/>
                <path fill="#fe6b36" d="M134.88,101.64l75.67,36.56c-86.41,17.16-76.38,55.48-99.64,121.11-2.94,8.3-.99,19.85-12.66,17.32-6.62-31.82-12.88-92.45-40-111.37-8.9-6.21-72.65-17.47-55.24-35.47,5.31-5.49,50.17-7.42,64.51-26.42,15.69-20.78,20.51-76.95,30.74-103.36l36.63,101.64Z"/>
              </svg>
            </motion.div>
          </a>

          <div className="hidden sm:flex gap-4 md:gap-8">
            {/* ✅ **Fixed "Work" button to always reload home page properly** */}
            <div className="relative">
              <a href="/" onClick={handleHomeNavigation} className={`font-semibold ${isWorkActive ? "text-[#2f5233]" : "text-[#393938]"} hover:text-[#2f5233] transition-colors`}>
                Work
              </a>
              <div className={`absolute -top-2 left-0 right-0 h-[3px] bg-[#2f5233] transition-opacity duration-300 ${isWorkActive ? "opacity-100" : "opacity-0"}`} />
            </div>

            <NavLink href="/fun" label="Fun" isActive={pathname === "/fun"} />
            <NavLink href="/about" label="About" isActive={pathname === "/about"} />
            <NavLink href="/resume" label="Resume" isActive={pathname === "/resume"} />
          </div>
        </div>
      </div>
    </nav>
  );
}
