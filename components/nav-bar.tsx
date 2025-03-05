"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isWorkActive = pathname === "/";

  // ✅ Navigates to home without preloader
  const handleHomeNavigation = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ If already home, just scroll up
    } else {
      router.push("/"); // ✅ Navigates normally WITHOUT preloader
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
          {/* ✅ Clicking Logo navigates home properly */}
          <NavLink href="/" label="Work" isActive={isWorkActive} onClick={handleHomeNavigation} />

          {/* Navigation Links */}
          <div className="hidden sm:flex gap-4 md:gap-8">
            <NavLink href="/" label="Work" isActive={isWorkActive} onClick={handleHomeNavigation} />
            <NavLink href="/fun" label="Fun" isActive={pathname === "/fun"} />
            <NavLink href="/about" label="About" isActive={pathname === "/about"} />
            <NavLink href="/resume" label="Resume" isActive={pathname === "/resume"} />
          </div>
        </div>
      </div>
    </nav>
  );
}

// ✅ Properly handles "Work" & Logo using the NavLink component
function NavLink({ href, label, isActive, onClick }: { href: string; label: string; isActive: boolean; onClick?: () => void }) {
  return (
    <div className="relative">
      <Link href={href} onClick={onClick} className={`font-semibold ${isActive ? "text-[#2f5233]" : "text-[#393938]"} hover:text-[#2f5233] transition-colors`}>
        {label}
      </Link>
      <div className={`absolute -top-2 left-0 right-0 h-[3px] bg-[#2f5233] transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} />
    </div>
  );
}
