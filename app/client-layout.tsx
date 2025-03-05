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
  // Check sessionStorage immediately to see if the site has been loaded before
  const [hasVisitedBefore, setHasVisitedBefore] = useState(() => {
    // This runs only on the client side
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('siteVisited') === 'true'
    }
    return false
  })
  
  useSmoothScroll()
  
  useEffect(() => {
    // Only show preloader if this is truly the first visit
    if (isFirstLoad && !hasVisitedBefore) {
      const timer = setTimeout(() => {
        setIsFirstLoad(false)
        // Mark that the site has been visited
        setHasVisitedBefore(true)
        sessionStorage.setItem('siteVisited', 'true')
      }, 2000)
      
      return () => clearTimeout(timer)
    } else {
      // Skip preloader for returning visitors
      setIsFirstLoad(false)
    }
  }, [isFirstLoad, hasVisitedBefore])
  
  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        {isFirstLoad && pathname === "/" && !hasVisitedBefore ? (
          <Preloader key="preloader" />
        ) : (
          <PageTransition key={pathname}>{children}</PageTransition>
        )}
      </AnimatePresence>
    </>
  )
}