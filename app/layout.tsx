"use client"

import { useState, useEffect } from "react"
import type React from "react"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Preloader from "@/components/preloader"
import NavBar from "@/components/nav-bar"
import PageTransition from "@/components/page-transition"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useSmoothScroll()

  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsFirstLoad(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isFirstLoad])

  return (
    <html lang="en">
      <body className="pt-16 sm:pt-20 md:pt-24">
        <NavBar />
        <AnimatePresence mode="wait">
          {isFirstLoad && pathname === "/" ? (
            <Preloader key="preloader" />
          ) : (
            <PageTransition key={pathname}>{children}</PageTransition>
          )}
        </AnimatePresence>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
