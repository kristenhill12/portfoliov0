"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Preloader from "@/components/preloader"
import NavBar from "@/components/nav-bar"
import PageTransition from "@/components/page-transition"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

// Create a flag to track site initialization outside of component render cycles
let siteInitialized = false;

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isFirstLoad, setIsFirstLoad] = useState(!siteInitialized)
  
  useSmoothScroll()
  
  useEffect(() => {
    // Only run the preloader if it's truly the first load
    if (isFirstLoad) {
      // Mark that we've initialized the site for this session
      siteInitialized = true;
      
      const timer = setTimeout(() => {
        setIsFirstLoad(false)
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [isFirstLoad])
  
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
  )
}