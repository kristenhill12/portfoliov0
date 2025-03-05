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
  const [initialLoadComplete, setInitialLoadComplete] = useState(false)
  
  useSmoothScroll()
  
  useEffect(() => {
    // Check if we've already loaded the site in this session
    const hasLoaded = sessionStorage.getItem('initialLoadComplete')
    
    if (hasLoaded) {
      // If we've already loaded once, skip the preloader entirely
      setIsFirstLoad(false)
      setInitialLoadComplete(true)
    } else if (isFirstLoad) {
      // First time loading the site
      const timer = setTimeout(() => {
        setIsFirstLoad(false)
        setInitialLoadComplete(true)
        // Save that we've loaded the site
        sessionStorage.setItem('initialLoadComplete', 'true')
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