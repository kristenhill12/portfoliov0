"use client"

import { motion } from "framer-motion"

const containerVariants = {
  initial: { y: 0 },
  exit: { y: "-100%", transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } },
}

const starVariants = {
  initial: { rotate: 0, scale: 1 },
  animate: {
    rotate: 360,
    scale: [1, 1.2, 1],
    transition: {
      rotate: { duration: 2, ease: "linear", repeat: Number.POSITIVE_INFINITY },
      scale: { duration: 1, repeat: Number.POSITIVE_INFINITY },
    },
  },
}

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      variants={containerVariants}
      initial="initial"
      exit="exit"
    >
      <motion.div variants={starVariants} initial="initial" animate="animate" className="w-12 h-12">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 0L29.5 18.5L48 24L29.5 29.5L24 48L18.5 29.5L0 24L18.5 18.5L24 0Z" fill="#FF5D3B" />
        </svg>
      </motion.div>
    </motion.div>
  )
}

