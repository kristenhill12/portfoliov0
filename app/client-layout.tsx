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
    if (!sessionStorage.getItem("hasVisited")) {
      setTimeout(() => {
        setIsFirstLoad(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 3000); // ✅ **Only shows preloader on first visit**
    } else {
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
