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
  const [key, setKey] = useState(pathname);

  useSmoothScroll();

  // Set a unique key whenever pathname changes to force re-render
  useEffect(() => {
    setKey(pathname + "-" + Date.now());
  }, [pathname]);

  useEffect(() => {
    // Handle preloader timing
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsFirstLoad(false);
    } else {
      const timer = setTimeout(() => {
        setIsFirstLoad(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        {isFirstLoad && pathname === "/" ? (
          <Preloader key="preloader" />
        ) : (
          <PageTransition key={key}>{children}</PageTransition>
        )}
      </AnimatePresence>
    </>
  );
}