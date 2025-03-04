"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

// Update the Projects component
export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        <ProjectCard
          href="/blue-elephant"
          imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blue%20elepjant%20solutions-8WpDBu1iymVv6IeEeQgVsNOGXBkHcD.svg"
          imageAlt="Blue Elephant Solutions Dashboard"
          title="Blue Elephant Solutions"
          description="Building a System Integrator for Identifying Skill Gaps"
          tags={["SaaS Design", "Freelance", "HR Platform"]}
        />
        <ProjectCard
          href="/studybuddy"
          imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coverstudybuddy-xjFuRVcNShOF4813X3DTyJUhaGMe9S.svg?quality=100"
          imageAlt="StudyBuddy App Interface showing note-taking and study assistant features"
          title="StudyBuddy"
          description="Designing a Local-First AI Notebook Experience for Productivity"
          tags={["AI Design", "Hackathon", "Notebook UX"]}
        />
        <ProjectCard
          href="/airasia"
          imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AirAsia%20Stream.png-12YKOMLQ1scFjQWZAqlyLKDySY19P5.jpeg?width=800"
          imageAlt="AirAsia Move App"
          title="AirAsia Move"
          description="Improving User Traffic into Community Feature"
          tags={["Mobile Design", "Freelance", "Travel App"]}
        />
        <InProgressProjectCard
          imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cover%20quickcheck-cu9fqjn83EVbtEIY5EPTtSVpsm6fWv.svg"
          imageAlt="QuickCheck Interface showing hospital check-in system"
          title="QuickCheck"
          description="Voice and Text AI Solution for Streamlining Check-ins at Hospitals"
          tags={["Tablet Design", "Hackathon", "Medical Tech"]}
        />
      </div>
    </div>
  )
}

// Update the ProjectCard component to ensure consistent sizing
function ProjectCard({ href, imageSrc, imageAlt, title, description, tags }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="rounded-[20px] border border-[#393938]/20 p-4 sm:p-6 h-full flex flex-col"
      >
        <div className="rounded-[20px] overflow-hidden border-2 border-[#393938]/20 mb-4">
          <div className="aspect-w-16 aspect-h-10">
            <img
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              className="w-full h-full object-cover"
              style={{
                imageRendering: "high-quality",
                objectFit: "cover",
                objectPosition: "center",
                WebkitFontSmoothing: "antialiased",
              }}
            />
          </div>
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-medium text-[#2f2f2f] mb-2">{title}</h3>
            <p className="text-base sm:text-lg text-[#2f2f2f] mb-4">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full border border-[#393938]/20 text-xs text-[#2f2f2f] whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

// Update the InProgressProjectCard component
function InProgressProjectCard({ imageSrc, imageAlt, title, description, tags }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="rounded-[20px] border border-[#393938]/20 p-4 sm:p-6 h-full flex flex-col cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="rounded-[20px] overflow-hidden border-2 border-[#393938]/20 mb-4 relative">
        <div className="aspect-w-16 aspect-h-10">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            className="w-full h-full object-cover"
            style={{ imageRendering: "crisp-edges", objectFit: "cover", objectPosition: "center" }}
          />
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <span className="text-white text-xl sm:text-2xl font-medium px-4 sm:px-6 py-2 sm:py-3 bg-black/80 rounded-full">
                In Progress
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-medium text-[#2f2f2f] mb-2">{title}</h3>
          <p className="text-base sm:text-lg text-[#2f2f2f] mb-4">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full border border-[#393938]/20 text-xs text-[#2f2f2f] whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

