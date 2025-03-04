"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import Image from "next/image"
import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"
import { useScrollTop } from "@/hooks/use-scroll-top"
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

export default function ResumePage() {
  useScrollTop()

  return (
    <>
      <Head>
        <title>Kristen Hill - Resume</title>
      </Head>
      <div className="min-h-screen bg-[#F8F8F8]">
        <NavBar />
        <motion.main
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-24"
        >
          {/* Header with Resume title and download button side by side */}
          <motion.div variants={item} className="flex justify-between items-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2f5233]">Resume</h1>

            <a
              href="https://drive.google.com/file/d/14LBQm4X9vtgoBZ_GNmK3cm9wOVLGAfRV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#2f5233] text-white rounded-xl hover:bg-[#2f5233]/90 transition-colors text-sm sm:text-base font-medium shadow-sm whitespace-nowrap"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          <motion.div variants={item}>
            {/* Resume Image with darker border */}
            <div className="bg-white rounded-xl shadow-sm border-2 border-[#393938]/30 overflow-hidden">
              <div className="relative w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kristen-lZAUFhiqAfZ2hyAad6ViY5d4m6kRz1.svg"
                  alt="Kristen Hill's Resume"
                  width={2000}
                  height={2800}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.main>
        <Footer />
      </div>
    </>
  )
}

