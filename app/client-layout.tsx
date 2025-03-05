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
  const [forceReload, setForceReload] = useState(false);

  useSmoothScroll();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (hasVisited && !forceReload) {
      setIsFirstLoad(false);
    } else {
      const timer = setTimeout(() => {
        setIsFirstLoad(false);
        sessionStorage.setItem("hasVisited", "true");
        setForceReload(false);
      }, 2500); // 🔥 Adjust this time if you want the preloader to last longer
    
      return () => clearTimeout(timer);
    }
  }, [forceReload]);

  // ✅ Function to force show the preloader again
  useEffect(() => {
    window.resetAndShowPreloader = () => {
      sessionStorage.removeItem("hasVisited");
      setForceReload(true);
      setIsFirstLoad(true);
    };

    return () => {
      delete window.resetAndShowPreloader;
    };
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
