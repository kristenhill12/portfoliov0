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
  const [initialVisit, setInitialVisit] = useState(true)
  
  useSmoothScroll()
  
  useEffect(() => {
    // Check if we've visited before using sessionStorage
    if (typeof window !== 'undefined') {
      const visited = sessionStorage.getItem('siteVisited')
      if (visited) {
        setInitialVisit(false)
      }
    }
    
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsFirstLoad(false)
        
        // Mark that we've visited the site
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('siteVisited', 'true')
        }
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [isFirstLoad])
  
  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        {isFirstLoad && pathname === "/" && initialVisit ? (
          <Preloader key="preloader" />
        ) : (
          <PageTransition key={pathname}>{children}</PageTransition>
        )}
      </AnimatePresence>
    </>
  )
}