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
  // Only show preloader on the very first site load
  const [isFirstLoad, setIsFirstLoad] = useState(() => {
    // Check if we've loaded the site before in this browser session
    return typeof window !== 'undefined' ? 
      !sessionStorage.getItem('initialLoadComplete') : true
  })
  
  useSmoothScroll()
  
  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsFirstLoad(false)
        // Mark that initial load is complete
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('initialLoadComplete', 'true')
        }
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