"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import NavBar from "@/components/nav-bar";
import PageTransition from "@/components/page-transition";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useSmoothScroll();

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <PageTransition key={pathname}>{children}</PageTransition>
      </AnimatePresence>
    </>
  );
}
