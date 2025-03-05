"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Preloader from "@/components/preloader"
import NavBar from "@/components/nav-bar"
import PageTransition from "@/components/page-transition"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [showPreloader, setShowPreloader] = useState(true)
  
  useSmoothScroll()
  
  useEffect(() => {
    // Check if this is a navigation from another page
    const fromNavigation = sessionStorage.getItem('navigationClick') === 'true';
    
    if (fromNavigation) {
      // Skip preloader if coming from navigation
      setShowPreloader(false);
      sessionStorage.removeItem('navigationClick');
    }
    
    if (isFirstLoad) {
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
        {isFirstLoad && pathname === "/" && showPreloader ? (
          <Preloader key="preloader" />
        ) : (
          <PageTransition key={pathname}>{children}</PageTransition>
        )}
      </AnimatePresence>
    </>
  )
}