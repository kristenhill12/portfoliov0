"use client"

import { useEffect } from "react"

export function useSmoothScroll() {
  useEffect(() => {
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop)
        window.scrollTo(0, c - c / 8)
      }
    }

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.slice(1)
        const element = document.getElementById(id || "")
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleClick)

    history.scrollRestoration = "manual"

    window.addEventListener("beforeunload", scrollToTop)

    return () => {
      document.removeEventListener("click", handleClick)
      window.removeEventListener("beforeunload", scrollToTop)
    }
  }, [])
}

