"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import NavBar from "@/components/nav-bar"
import { useScrollTop } from "@/hooks/use-scroll-top"
import { useState } from "react"
import Link from "next/link"
import Head from "next/head"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

const imageLinks = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0132%202.JPG-pMXY2C0pE8i4oXNOCyyOjoQ68xNCE9.jpeg",
    alt: "Split-screen illustration showing a character with glasses in light and dark mode variants",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29B1A093-E997-460C-BF52-9979314307D7%202.JPG-6bIXwvzD9yaDCm7mGoOsMPMuCzVt4U.jpeg",
    alt: "Illustrated Japanese storefront with traditional noren curtains and potted plants",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0116.JPG-3ENwxRkPFa4SFsc25dyNwPuV0OB6NG.jpeg",
    alt: "Detailed illustration of a Japanese coffee shop with wooden details and outdoor seating",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8CD19E60-3654-4184-9562-16E2168AF48B%202.JPG-xKpt2g5ObOrMgYB0EGN9UwU4tURg7Z.jpeg",
    alt: "Scenic illustration of a mountain landscape with cherry blossoms and bridges",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7C2DBCFB-31D0-45CC-ACC5-027DAD3F2CCA.JPG-3cnDVCJIerYhIUpx63hjAUqQhjbmAb.jpeg",
    alt: "Cute illustrated Shiba Inu character named Vallis with monstera leaf",
  },
]

export default function Fun() {
  useScrollTop()
  const [images, setImages] = useState(imageLinks)

  const handleAddImage = (index: number) => {
    const newImageLink = prompt("Enter the image URL:")
    if (newImageLink) {
      const newImages = [...images]
      newImages[index] = { src: newImageLink, alt: "User added image" }
      setImages(newImages)
    }
  }

  return (
    <>
      <Head>
        <title>Kristen Hill - Fun</title>
      </Head>
      <div className="min-h-screen bg-[#F8F8F8]">
        <NavBar />
        <motion.main
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-24"
        >
          <motion.h1 variants={item} className="text-3xl sm:text-4xl font-bold text-[#2f5233] mb-8 sm:mb-12">
            Some random creative creations
          </motion.h1>

          <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* First Row - Two Static Images */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-white"
              onClick={() => handleAddImage(0)}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0132%202.JPG-pMXY2C0pE8i4oXNOCyyOjoQ68xNCE9.jpeg"
                alt="Split-screen illustration showing a character with glasses in light and dark mode variants"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-white"
              onClick={() => handleAddImage(2)}
            >
              <img
                src={images[2].src || "/placeholder.svg"}
                alt={images[2].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Second Row - Two Static Images */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-white"
              onClick={() => handleAddImage(3)}
            >
              <img
                src={images[3].src || "/placeholder.svg"}
                alt={images[3].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-white"
              onClick={() => handleAddImage(4)}
            >
              <img
                src={images[4].src || "/placeholder.svg"}
                alt={images[4].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Third Row - One Static Image and Three.js Animation */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-white"
              onClick={() => handleAddImage(1)}
            >
              <img
                src={images[1].src || "/placeholder.svg"}
                alt={images[1].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-white"
            >
              <iframe
                src="https://threejs-dark-light-mode.vercel.app/"
                title="Three.js Dark Light Mode"
                className="w-full h-full border-none"
              />
            </motion.div>

            {/* Fourth Row - Cloud Animation and Butterfly Animation */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-white"
            >
              <iframe
                src="https://dark-mode-rust.vercel.app/"
                title="Dark Mode Rust Animation"
                className="w-full h-full border-none"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-white"
            >
              <iframe
                src="https://butterfly-cursor.vercel.app/"
                title="Butterfly Cursor Animation"
                className="w-full h-full border-none"
              />
            </motion.div>
          </motion.div>

          {/* Footer Section */}
          <motion.footer variants={item} className="mt-24 sm:mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-32 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#2f5233]">Want to work with me?</h2>
                <p className="text-base sm:text-lg text-[#393938]">
                  Feel free to email me, if you would like to work together!
                </p>
                <div className="flex gap-4 sm:gap-6 items-center">
                  <a
                    href="https://www.linkedin.com/in/kristensierrahill/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#393938] hover:text-[#2f5233] transition-colors inline-flex items-center gap-1"
                  >
                    LinkedIn
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/resume"
                    className="text-[#393938] hover:text-[#2f5233] transition-colors inline-flex items-center gap-1"
                  >
                    Resume
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
                <a
                  href="mailto:kristenhillwong@gmail.com"
                  className="inline-block px-6 sm:px-8 py-2 sm:py-3 border border-[#393938] text-[#393938] hover:bg-[#393938] hover:text-white transition-colors rounded-full text-sm sm:text-base"
                >
                  Say Hi
                </a>
              </div>
              <div className="flex justify-center md:justify-end items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SVG%20me-rLy9hfmmzOfIQPHRisdUcf3KSjQRri.svg"
                  alt="Illustration"
                  className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
                />
              </div>
            </div>
          </motion.footer>
        </motion.main>
      </div>
    </>
  )
}

