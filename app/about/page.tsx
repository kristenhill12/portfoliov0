"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"
import { useScrollTop } from "@/hooks/use-scroll-top"
import { ArrowUpRight } from "lucide-react"
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

export default function About() {
  useScrollTop()
  return (
    <>
      <Head>
        <title>Kristen Hill - About</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-[#F8F8F8]"
      >
        <NavBar currentPage="about" />
        <main className="max-w-7xl mx-auto px-8 pt-40">
          <div className="grid grid-cols-[1fr,auto] gap-16 items-start">
            <div className="max-w-xl space-y-12">
              <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
                <motion.h1 variants={item} className="space-y-2">
                  <div className="text-[#2f5233] text-7xl font-bold">Hello</div>
                  <div className="flex items-end">
                    <div className="text-[#2f5233] text-7xl font-bold">I&apos;m Kristen</div>
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
                  </div>
                </motion.h1>
                <motion.div variants={item} className="space-y-6">
                  <p className="text-[#393938] text-base leading-relaxed">
                    <span className="font-bold">
                      I'm a UX Designer passionate about creating simple, yet meaningful solutions that make a
                      difference.
                    </span>{" "}
                    My journey into UX design started with a childhood love for interactive games and creating
                    experiences that felt uniquely mine. Later, while living in Taiwan, I discovered my passion for UX
                    design by building a booking site for my tutoring business, aiming to provide flexible online
                    services for working adults.
                  </p>
                  <p className="text-[#393938] text-base leading-relaxed">
                    Living and working abroad taught me that great design transcends language barriers and gave me a
                    unique perspective on designing for diverse users. Outside of design, I love learning new things and
                    always embrace being a beginner since you'll only be a beginner at something once! When I'm not
                    designing, you'll find me painting, taking film photos, or attempting to bake.
                  </p>
                  <p className="text-[#393938] text-base leading-relaxed">
                    I'm currently seeking work opportunities to grow as a designer, with plans to pursue a Master's in
                    Human-Computer Interaction Design in the next few years. I'm always looking for ways to grow
                    creatively, professionally, and personally. If you'd like to collaborate, feel free to reach out! :)
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <a
                      href="https://www.linkedin.com/in/kristenhill12/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 border border-[#393938] text-[#393938] hover:bg-[#393938] hover:text-white transition-colors rounded-full inline-block"
                    >
                      Say Hi
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ rotate: -6 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Film%201.jpg-9VH9gyqIcvj4GzwB6Z8nbCZhgUgjqQ.png"
                  alt="Kristen smiling while holding a sketchbook with watercolor illustrations"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ rotate: 6 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/film%202.jpg-xqwzBTwctbngCrk0I2aY160MCFOVuf.png"
                  alt="Kristen in a Taiwanese laundromat"
                  width={400}
                  height={300}
                  className="object-cover object-center"
                />
              </motion.div>
            </div>
          </div>

          <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-2 gap-16 py-24">
            <div className="space-y-6">
              <motion.h2 variants={item} className="text-[#2f5233] text-4xl font-bold">
                Skills
              </motion.h2>
              <motion.ul variants={container} className="space-y-4">
                {[
                  "Maze / UserTesting",
                  "Rapid Prototyping",
                  "Figma",
                  "Framer/ Webflow",
                  "HTML / CSS",
                  "Adobe Illustrator / After Effects",
                  "Lottie Files",
                ].map((skill) => (
                  <motion.li key={skill} variants={item} className="text-[#393938] text-base">
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="space-y-6">
              <motion.h2 variants={item} className="text-[#2f5233] text-4xl font-bold">
                Things that bring me joy
              </motion.h2>
              <motion.ul variants={container} className="space-y-4">
                {["Animal Crossing", "Anime", "Watercolor", "Film", "Small Desk Figures"].map((item) => (
                  <motion.li key={item} variants={item} className="text-[#393938] text-base">
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </main>
        <Footer>
          <Link
            href="/resume"
            className="text-[#393938] hover:text-[#2f5233] transition-colors inline-flex items-center gap-1"
          >
            Resume
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Footer>
      </motion.div>
    </>
  )
}

