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
  const [hasVisitedBefore, setHasVisitedBefore] = useState(false)
  
  useSmoothScroll()
  
  useEffect(() => {
    // Check if this is the very first load of the site
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsFirstLoad(false)
        // Set a flag that the user has visited before
        setHasVisitedBefore(true)
        // Optionally, also store in sessionStorage for persistence across refreshes
        sessionStorage.setItem('hasVisitedBefore', 'true')
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [isFirstLoad])
  
  // This effect runs when pathname changes
  useEffect(() => {
    // We don't need to do anything special here - by NOT setting isFirstLoad
    // to true when returning to homepage, we prevent the preloader from showing again
  }, [pathname])
  
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