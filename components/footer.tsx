import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-32 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2f5233]">Want to work with me?</h2>
            {/* Updated email text */}
            <div className="text-base sm:text-lg text-[#393938]">
              <p className="inline">Email me at </p>
              <span className="font-bold text-[#2f5233]">kristenhillwong@gmail.com</span>
              <p className="inline"> for work.</p>
            </div>
            <div className="flex gap-4 sm:gap-6 items-center">
              <a
                href="https://github.com/kristenhill12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#393938] hover:text-[#2f5233] transition-colors inline-flex items-center gap-1"
              >
                My Git
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
            {/* "Say Hi" button now links to LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kristenhill12/"
              target="_blank"
              rel="noopener noreferrer"
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
      </div>
    </footer>
  )
}

