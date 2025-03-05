"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Preloader from "@/components/preloader"
import NavBar from "@/components/nav-bar"
import PageTransition from "@/components/page-transition"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

// Check if this is the first visit using sessionStorage
const checkFirstVisit = () => {
  if (typeof window === 'undefined') return true; // Server-side rendering
  return !sessionStorage.getItem('siteVisited');
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isFirstLoad, setIsFirstLoad] = useState(checkFirstVisit())
  
  useSmoothScroll()
  
  useEffect(() => {
    // Only run the preloader if it's truly the first load
    if (isFirstLoad) {
      // Mark that we've visited the site
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('siteVisited', 'true');
      }
      
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