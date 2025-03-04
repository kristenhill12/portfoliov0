"use client"

import { motion } from "framer-motion"
import NavBar from "./nav-bar"

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
  show: { opacity: 1, y: 0 },
}

export default function Header() {
  return (
    <div className="relative">
      <NavBar />
      <motion.div className="max-w-7xl mx-auto px-8 pt-40 pb-24" variants={container} initial="hidden" animate="show">
        <div className="space-y-8">
          <motion.div variants={item} className="flex items-end">
            <h1 className="text-[#2f5233] text-4xl sm:text-5xl md:text-6xl font-bold leading-none">
              Hi there, I&apos;m Kristen Hill.
            </h1>
            <div className="relative ml-4 mb-1">
              <svg width="80" height="100" viewBox="0 0 539.89 689.85" className="relative z-10">
                <path
                  fill="#2f5233"
                  d="M539.64,689.85H29.2c-1.58-149.91,61.43-294.13,168.71-397.6l64.78,68.95c15.94-40.27,77.71-141.19,125.88-113.01,113.37,66.34,155,321.21,151.08,441.66Z"
                />
              </svg>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -left-4 z-20"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 0L14.7 9.3L24 12L14.7 14.7L12 24L9.3 14.7L0 12L9.3 9.3L12 0Z" fill="#fe6b36" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          <motion.p variants={item} className="text-[#393938] text-2xl max-w-none leading-relaxed">
            A UX Designer, passionate about enhancing the user experience through simple solutions.
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-2 text-[#393938] pt-8">
            <span className="font-medium text-[17px]">Projects</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

