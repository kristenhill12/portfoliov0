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
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsFirstLoad(false);
    } else {
      setTimeout(() => {
        setIsFirstLoad(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 2000);
    }
  }, []);

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <PageTransition key={pathname} disableFadeOnHome={pathname === "/"}>
          {isFirstLoad && pathname === "/" ? <Preloader key="preloader" /> : children}
        </PageTransition>
      </AnimatePresence>
    </>
  );
}
