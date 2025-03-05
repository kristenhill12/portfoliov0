"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Preloader from "@/components/preloader";
import NavBar from "@/components/nav-bar";
import PageTransition from "@/components/page-transition";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useSmoothScroll();

  useEffect(() => {
    const hasVisitedBefore = sessionStorage.getItem("hasVisitedBefore");

    if (!hasVisitedBefore) {
      // First visit: Show preloader for 3 seconds
      const timer = setTimeout(() => {
        setIsFirstLoad(false);
        sessionStorage.setItem("hasVisitedBefore", "true"); // Remember user has visited
      }, 3000); // Adjust time as needed

      return () => clearTimeout(timer);
    } else {
      // Not first visit: Don't show preloader
      setIsFirstLoad(false);
    }
  }, []);

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        {isFirstLoad && pathname === "/" ? (
          <Preloader key="preloader" />
        ) : (
          <PageTransition key={pathname}>{children}</PageTransition>
        )}
      </AnimatePresence>
    </>
  );
}
