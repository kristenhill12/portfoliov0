"use client"

import { motion } from "framer-motion"
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

export default function BlueElephantCase() {
  useScrollTop()

  return (
    <>
      <Head>
        <title>Kristen Hill - Building a System Integrator for Skill Gaps</title>
      </Head>
      <div className="min-h-screen bg-[#F8F8F8]">
        <NavBar />
        <motion.main
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-24"
        >
          <motion.div variants={item} className="space-y-4 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2f5233]">Blue Elephant Solutions</h1>
            <p className="text-xl sm:text-2xl text-[#393938]">
              Building a System Integrator for Identifying Skill Gaps and Driving Career Growth
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
              <span className="px-2 py-1 rounded-full border border-[#393938]/20 text-xs sm:text-sm text-[#393938]/70 whitespace-nowrap">
                SaaS Design
              </span>
              <span className="px-2 py-1 rounded-full border border-[#393938]/20 text-xs sm:text-sm text-[#393938]/70 whitespace-nowrap">
                HR Platform
              </span>
              <span className="px-2 py-1 rounded-full border border-[#393938]/20 text-xs sm:text-sm text-[#393938]/70 whitespace-nowrap">
                Career Growth
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-8 text-[#393938] text-sm"
          >
            <div>
              <h3 className="font-medium mb-1">Client</h3>
              <p>Blue Elephant Solutions</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Team</h3>
              <p>3 Product Designers</p>
              <p>2 Strategic Partners</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Duration</h3>
              <p>2024 (Aug-Sept)</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Role</h3>
              <p>Research</p>
              <p>Conceptualization</p>
              <p>Testing</p>
              <p>Design</p>
            </div>
          </motion.div>

          <motion.div variants={item} className="mb-24">
            <div className="w-full">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blue%20elephant%20solutions%20case%20study%20cover-QQEjbkpECSnevWA5mAwQXRwjvOP0Pw.svg"
                alt="Blue Elephant Solutions Dashboard Interface showing employee profiles and skill tracking"
                className="w-full h-auto object-fit rounded-xl"
              />
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-12 mt-16">
            {/* Introduction Section */}
            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">INTRODUCTION</h2>
              <h3 className="text-2xl font-medium text-[#393938] mb-8">
                Identifying the Skills Employees Need for Career Growth is Often a Challenge for Companies
              </h3>
              <div className="space-y-8">
                <p className="text-lg text-[#393938]/80 leading-relaxed">
                  Blue Elephant Solutions is an AI-powered SaaS platform aimed to help companies build employee skills
                  and improve employee training.
                </p>
                <p className="text-lg text-[#393938]/80 leading-relaxed">
                  I collaborated with two other Product Designers and two Strategic Partners to create and validate a
                  new feature for their existing SaaS platform.
                </p>
              </div>
            </section>

            {/* Problem Section */}
            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">THE PROBLEM</h2>
              <h3 className="text-2xl font-medium text-[#393938] mb-8">
                The current system can track training progress, but it does not reveal which skills employees still need
                for their next role.
              </h3>
              <p className="text-lg text-[#393938]/80 leading-relaxed mb-12">
                Without this, its hard to help employees identify the skills needed to get promoted or grow in their
                careers.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="border-2 border-[#393938]/30 rounded-xl p-6">
                  <div className="text-3xl font-bold text-[#2f5233] mb-4">75%</div>
                  <p className="text-[#393938]/80">of Employees feel stuck from reaching their potential</p>
                </div>
                <div className="border-2 border-[#393938]/30 rounded-xl p-6">
                  <div className="text-3xl font-bold text-[#2f5233] mb-4">35%</div>
                  <p className="text-[#393938]/80">of companies have an unprepared workforce</p>
                </div>
                <div className="border-2 border-[#393938]/30 rounded-xl p-6">
                  <div className="text-3xl font-bold text-[#2f5233] mb-4">69%</div>
                  <p className="text-[#393938]/80">of Employees Lack Key Skills</p>
                </div>
              </div>
            </section>

            {/* Target Users Section */}
            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">TARGET USERS</h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-32 h-32 mb-6">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/target%20user%201-vJPxeJ9cQQQR7SpbnDIUWSW6sR8A63.png"
                      alt="HR Manager Illustration"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-[#393938] mb-2">HR Manager</h3>
                  <div className="bg-transparent rounded-xl p-6 mt-4 border-2 border-[#393938]/30 flex-grow flex items-center">
                    <p className="text-[#393938]/80 italic">
                      "It's tough to guide employees without knowing where they need to grow."
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-32 h-32 mb-6">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/target%20user%202-I9zKlIAx7TkM3eo82FgA8rvYPliQOt.png"
                      alt="HR Assistant Illustration"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-[#393938] mb-2">HR Assistant</h3>
                  <div className="bg-transparent rounded-xl p-6 mt-4 border-2 border-[#393938]/30 flex-grow flex items-center">
                    <p className="text-[#393938]/80 italic">"We don't know what skills employees are missing"</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Client Expectations Section */}
            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">DEFINING THE PROJECT</h2>
              <p className="text-lg text-[#393938]/80 leading-relaxed mb-12">
                Blue Elephant Solutions partnered with us to design a feature that helps their clients identify skill
                gaps, guide employees on what to learn next, and enhance their career growth.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-transparent rounded-xl p-8 border-2 border-[#393938]/30">
                  <h3 className="text-xl font-medium text-[#393938] mb-6">Client Expectations</h3>
                  <ol className="space-y-4 text-[#393938]/80">
                    <li>1. Create a solution that supports existing workflows and is scalable for future growth</li>
                    <li>2. Maintain consistency with the current design system for quick implementation</li>
                  </ol>
                </div>
                <div className="bg-transparent rounded-xl p-8 border-2 border-[#393938]/30">
                  <h3 className="text-xl font-medium text-[#393938] mb-6">Challenges</h3>
                  <ol className="space-y-4 text-[#393938]/80">
                    <li>1. 1 Month timeline with limited customization options</li>
                    <li>2. Niche user base and varying workflows required a flexible yet intuitive solution</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Design Process Section */}
            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-8">DESIGN PROCESS</h2>
              <div className="flex justify-between items-center w-full relative">
                {["Research", "Define", "Ideate", "Design", "Test", "Iterate"].map((step, i, arr) => (
                  <div key={step} className="flex items-center relative">
                    <div className="px-6 py-3 rounded-lg bg-[#F8F8F8] border-2 border-[#393938]/20 text-[#393938]">
                      {step}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="absolute -right-12 top-1/2 -translate-y-1/2 translate-x-full">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M4 12h16m0 0l-6-6m6 6l-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[#393938]"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Research Section */}
            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">RESEARCH</h2>
              <h3 className="text-2xl font-medium text-[#393938] mb-8">Researching Existing Skill Frameworks</h3>
              <div className="space-y-8">
                <p className="text-lg text-[#393938]/80 leading-relaxed">
                  We examined existing skill frameworks like O*NET and SkillsFuture to understand how to track skills,
                  assign training, and support career growth within our feature.
                </p>
                <p className="text-lg text-[#393938]/80 leading-relaxed">
                  We chose these two frameworks to research because they are both compliant with international
                  standards.
                </p>
                <div className="grid grid-cols-2 gap-8 mt-12">
                  <div className="space-y-6">
                    <div className="bg-transparent rounded-xl overflow-hidden border-2 border-[#393938]/30 h-[400px]">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ONET%20solutions-dGeJ8DQYc6mVw2qWs63h0EAT4TvX71.png"
                        alt="O*NET Interface"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-transparent rounded-xl p-6 border-2 border-[#393938]/30 min-h-[100px]">
                      <h4 className="text-xl font-medium text-[#393938] mb-4">
                        O*NET helped us link specific skills to job roles
                      </h4>
                      <p className="text-[#393938]/80">providing clarity on what employees need for each position.</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-transparent rounded-xl overflow-hidden border-2 border-[#393938]/30 h-[400px]">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/skillsfuture-hq3FoFr5aPkjz2RKlAymJOyJo9uXKH.png"
                        alt="SkillsFuture Framework"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-transparent rounded-xl p-6 border-2 border-[#393938]/30 min-h-[100px]">
                      <h4 className="text-xl font-medium text-[#393938] mb-4">
                        SkillsFuture organized skills into levels and career paths
                      </h4>
                      <p className="text-[#393938]/80">showing progression opportunities for employees.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-24">
                <h3 className="text-2xl font-medium text-[#393938] mb-8">
                  Uncovering How Other Platforms Assess and Recommend Skill Development
                </h3>
                <div className="space-y-8">
                  <p className="text-lg text-[#393938]/80 leading-relaxed">
                    I analyzed four competitors: LinkedIn Learning, Oracle, Workday, and Udemy.
                  </p>
                  <p className="text-lg text-[#393938]/80 leading-relaxed">
                    Since these are other B2B competitors, I went through the virtual demos provided on their company
                    websites.
                  </p>

                  <div className="bg-transparent rounded-xl overflow-hidden border-2 border-[#393938]/30 p-8">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copmetitiveanalysis-fpq2YsaELghJ4hHnLwyCAXN3fB88MN.png"
                      alt="Competitive Analysis Table"
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-8 mt-12">
                    <div className="space-y-4">
                      <div className="bg-transparent rounded-xl overflow-hidden border-2 border-[#393938]/30 h-[300px]">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/graphs-hmi92rpvNSder9MjeVCeobMkLoASNt.png"
                          alt="Analytics Dashboard"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[#393938]/80 text-center">
                        Competitors use visual charts, graphs, and filters to simplify tracking gaps and training.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-transparent rounded-xl overflow-hidden border-2 border-[#393938]/30 h-[300px]">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recommendations-kjfHwwhUdv5GIcYedO70xa9z3B8V6w.png"
                          alt="Learning Platform Interface"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[#393938]/80 text-center">
                        Competitors base their recommendations from previous experience rather than interest.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-24">
                <h2 className="text-2xl font-medium text-[#393938] mb-8">Research Takeaways</h2>
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="h-[320px] overflow-hidden mb-4">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Personalizing%20Career%20goals-O7FOSth43ptKkOgnCD1PtO82cjKshx.png"
                        alt="Career Goal Setting Interface"
                        className="w-full h-full object-fill rounded-lg"
                      />
                    </div>
                    <div className="bg-transparent rounded-lg p-6 border-2 border-[#393938]/30 h-[150px]">
                      <h3 className="text-xl font-medium text-[#393938] mb-2">Personalizing Career Goals</h3>
                      <p className="text-[#393938]/80">
                        Personalization is a key differentiator to support employee growth.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="h-[320px] overflow-hidden mb-4">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/improving%20usablity-mB52gC5MQWsoNqxc7KK0lwQFMb9drs.png"
                        alt="Learning Platform Interface"
                        className="w-full h-full object-fill rounded-lg"
                      />
                    </div>
                    <div className="bg-transparent rounded-lg p-6 border-2 border-[#393938]/30 h-[150px]">
                      <h3 className="text-xl font-medium text-[#393938] mb-2">Improving Usability</h3>
                      <p className="text-[#393938]/80">
                        Features like charts and filters highlighted ways to simplify navigation.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="h-[320px] overflow-hidden mb-4">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tracking%20Skills-RJtzVgW5QrVWKaoA2CvG1Ak4vLW6NG.png"
                        alt="Skills Matrix"
                        className="w-full h-full object-fill rounded-lg"
                      />
                    </div>
                    <div className="bg-transparent rounded-lg p-6 border-2 border-[#393938]/30 h-[150px]">
                      <h3 className="text-xl font-medium text-[#393938] mb-2">Tracking Skills and Career Paths</h3>
                      <p className="text-[#393938]/80">
                        Frameworks structured to link skills with roles and levels, forming the backbone of our matrix.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-24">
                <h2 className="text-lg font-medium text-[#393938] mb-4">IDEATION</h2>
                <h3 className="text-2xl font-medium text-[#393938] mb-8">
                  Mapping out the HR Managers user flow and sketching out our ideas
                </h3>
                <div className="space-y-8">
                  <p className="text-lg text-[#393938]/80 leading-relaxed">
                    We began to translate our design requirements into sketches and midfi designs. We worked to combine
                    and simplify our designs to create a simple yet intuitive work flow.
                  </p>
                  <p className="text-lg text-[#393938]/80 leading-relaxed">
                    After several iterations we were able to simplify our user flow for viewing an employees profile
                    which included their skills and career trajectory as well as assigning training modules to further
                    learn the skills they are missing.
                  </p>
                  <div className="mt-12 bg-white rounded-xl p-8 border-2 border-[#393938]/30">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/userflow-asceR7ayAuh9oztOVGXkSxzfovofDe.svg"
                      alt="HR Manager User Flow Diagram"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-24">
                <h3 className="text-2xl font-medium text-[#393938] mb-8">From Sketches to Wireframes</h3>
                <p className="text-lg text-[#393938]/80 leading-relaxed mb-12">
                  We then created sketches based off of our user flow. From there, we were able to create a more
                  finalized design with our midfi wireframes.
                </p>

                {/* Sketches Row */}
                <div>
                  <h4 className="text-xl font-medium text-[#393938] mb-6">Initial Sketches</h4>
                  <div className="grid grid-cols-3 gap-8">
                    {[1, 2, 3].map((num) => (
                      <div key={num} className="space-y-4">
                        <div className="bg-transparent rounded-xl overflow-hidden border-2 border-[#393938]/30 h-[400px]">
                          <img
                            src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sketch%20${num}-${num === 1 ? "ZRH5keHP4P0Bv67cwUfaldApy67vw7" : num === 2 ? "CvpZCkIvZGYIiW51iAeqaIJulxKD6y" : "xMcFtUIippHSrZoLSQSqiUVk4o5Cyl"}.png`}
                            alt={`Sketch ${num}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <p className="text-[#393938]/80 text-center">Sketch {num}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Wireframes Row */}
                <div className="mt-12">
                  <h4 className="text-xl font-medium text-[#393938] mb-6">Midfi Wireframes</h4>
                  <div className="grid grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <div className="bg-transparent rounded-xl overflow-hidden border-2 border-[#393938]/30 h-[400px]">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wireframe%201-7GB6TaRk3K2pD73xbWDNq3mFV52DM7.png"
                          alt="Employee list view wireframe"
                          className="w-full h-full object-fit"
                        />
                      </div>
                      <p className="text-[#393938]/80 text-left">
                        We ended up removing the button in our initial employee overview and simplifying it by making
                        the entire employee row clickable.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-transparent rounded-xl overflow-hidden border-2 border-[#393938]/30 h-[400px]">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wireframe%202-wAy1UDRoyTZBNjvVgXPrN2QwJacq5Q.png"
                          alt="Employee overview wireframe"
                          className="w-full h-full object-fit"
                        />
                      </div>
                      <p className="text-[#393938]/80 text-left">
                        We also ended up removing a lot of the information regarding skills and put more relevant
                        information about the employee.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-transparent rounded-xl overflow-hidden border-2 border-[#393938]/30 h-[400px]">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wireframe%203-G3ZflknmFkdzjrWwj7GS1rrrSqiI9z.png"
                          alt="Employee profile wireframe"
                          className="w-full h-full object-fit"
                        />
                      </div>
                      <p className="text-[#393938]/80 text-left">
                        We decided to enhance the employee profile and include more visuals to gain insights quickly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Solution Section */}
            <section className="pt-24 mt-16">
              <h2 className="text-lg font-medium text-[#393938] mb-8">DESIGN SOLUTION</h2>

              {/* Solution 1 */}
              <div className="grid grid-cols-2 gap-16 mb-24">
                <div>
                  <h3 className="text-2xl font-medium text-[#393938] mb-4">
                    1. Offering a quick view of the Employee Information
                  </h3>
                  <p className="text-[#393938]/80">
                    This allows HR to check an employee's information such as their career goals in order to make quick
                    informed decisions without having to navigate to multiple pages.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-12 border-2 border-[#393938]/30">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Quickview-1gYojR5lLgwmI9tTbECbHU7BuMWdVz.svg"
                    alt="Employee Overview Interface showing list of employees"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Solution 2 */}
              <div className="grid grid-cols-2 gap-16 mb-24">
                <div className="bg-white rounded-xl p-12 border-2 border-[#393938]/30">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Growth%20insights-0aAmzhVAcNCCrngxXUjfnclkBwN5ro.svg"
                    alt="Employee Profile Interface with progress charts and data visualization"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-[#393938] mb-4">
                    2. Creating a centralized employee profile filled with data and visuals
                  </h3>
                  <p className="text-[#393938]/80">
                    We made an employee profile that shows progress, highlights skill gaps and tracks training all in
                    one place. This makes it easier for HR to keep up with the employees career growth.
                  </p>
                </div>
              </div>

              {/* Solution 3 & 4 Combined */}
              <div className="grid grid-cols-2 gap-16 mb-24">
                <div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-medium text-[#393938] mb-4">
                        3. Checking Progress and Skill Competency
                      </h3>
                      <p className="text-[#393938]/80 mb-6">
                        HR can check employee growth insights, assessments, modules, and skill competencies. The
                        assessment section shows the prerequisites needed to complete the training module in order to
                        take the assessment. We also have a module section which shows the status of each module to
                        clearly show the employees progress.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-[#393938] mb-4">4. Skill Competency</h3>
                      <p className="text-[#393938]/80">
                        Shows individual skills the employee has gained and what skills they can improve on or are
                        missing. This makes it easier for HR to recommend the correct skill training for career growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-12 border-2 border-[#393938]/30">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Modules%202-erQHzLZxooVtCg1Fq2cQbh8sE59Ka7.svg"
                    alt="Module tracking and skill competency interface"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Solution 5 */}
              <div className="grid grid-cols-2 gap-16">
                <div className="bg-white rounded-xl p-12 border-2 border-[#393938]/30">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Filters%201-ggDpCbpFVnDO6EwTGvErJKVCj8Jjqm.svg"
                    alt="Filter and search interface"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-[#393938] mb-4">5. Filtering and Search</h3>
                  <p className="text-[#393938]/80">
                    We added a filter, customize column, and search function to help narrow search & assist in
                    navigation based on skills, status, and module.
                  </p>
                </div>
              </div>
            </section>

            {/* Add after the Solution 5 section */}
            {/* Usability Testing Section */}
            <section className="pt-24 mt-16">
              <h2 className="text-lg font-medium text-[#393938] mb-4">USABILITY TESTING</h2>

              <h3 className="text-2xl font-medium text-[#393938] mb-8">
                We conducted Usability tests with 4 participants to ensure the solution supported HR workflows and
                helped track skills for career growth.
              </h3>

              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-8">
                  <p className="text-lg font-medium text-[#393938]">Participants:</p>
                  <p className="text-lg text-[#393938]/80">HR Professionals Ages 20-50</p>
                </div>

                <p className="text-lg font-medium text-[#393938] mb-4">Participants said:</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="rounded-xl p-8 border-2 border-[#393938]/30 relative flex flex-col items-center min-h-[160px]">
                    <div className="mb-4">
                      <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.8175 0.287998V3.2H13.8255C13.2495 3.2 12.7802 3.28533 12.4175 3.456C12.0762 3.62667 11.8202 3.936 11.6495 4.384C11.4788 4.81067 11.3935 5.408 11.3935 6.176V8.512L10.4335 6.528C10.5828 6.4 10.7962 6.304 11.0735 6.24C11.3508 6.15467 11.6602 6.112 12.0015 6.112C12.7482 6.112 13.3775 6.34667 13.8895 6.816C14.4015 7.264 14.6575 7.904 14.6575 8.736C14.6575 9.52533 14.4122 10.1973 13.9215 10.752C13.4308 11.2853 12.7268 11.552 11.8095 11.552C11.2122 11.552 10.6575 11.4133 10.1455 11.136C9.65483 10.8587 9.2495 10.3893 8.9295 9.728C8.63083 9.06667 8.4815 8.17067 8.4815 7.04V6.56C8.4815 5.04533 8.69483 3.82933 9.1215 2.912C9.5695 1.99467 10.2095 1.33333 11.0415 0.927999C11.8735 0.501332 12.8975 0.287998 14.1135 0.287998H14.8175ZM7.2975 0.287998V3.2H6.3055C5.7295 3.2 5.26017 3.28533 4.8975 3.456C4.55617 3.62667 4.30017 3.936 4.1295 4.384C3.95883 4.81067 3.8735 5.408 3.8735 6.176V8.512L2.9135 6.528C3.06283 6.4 3.27617 6.304 3.5535 6.24C3.83083 6.15467 4.14017 6.112 4.4815 6.112C5.22817 6.112 5.8575 6.34667 6.3695 6.816C6.8815 7.264 7.1375 7.904 7.1375 8.736C7.1375 9.52533 6.89217 10.1973 6.4015 10.752C5.91083 11.2853 5.20683 11.552 4.2895 11.552C3.69217 11.552 3.1375 11.4133 2.6255 11.136C2.13483 10.8587 1.7295 10.3893 1.4095 9.728C1.11083 9.06667 0.9615 8.17067 0.9615 7.04V6.56C0.9615 5.04533 1.17483 3.82933 1.6015 2.912C2.0495 1.99467 2.6895 1.33333 3.5215 0.927999C4.3535 0.501332 5.3775 0.287998 6.5935 0.287998H7.2975Z"
                          fill="#6E6E7F"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center justify-center flex-grow">
                      <p className="text-[#393938]/80 text-center">Straight forward and easy to understand.</p>
                    </div>
                  </div>

                  <div className="rounded-xl p-8 border-2 border-[#393938]/30 relative flex flex-col items-center min-h-[160px]">
                    <div className="mb-4">
                      <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.8175 0.287998V3.2H13.8255C13.2495 3.2 12.7802 3.28533 12.4175 3.456C12.0762 3.62667 11.8202 3.936 11.6495 4.384C11.4788 4.81067 11.3935 5.408 11.3935 6.176V8.512L10.4335 6.528C10.5828 6.4 10.7962 6.304 11.0735 6.24C11.3508 6.15467 11.6602 6.112 12.0015 6.112C12.7482 6.112 13.3775 6.34667 13.8895 6.816C14.4015 7.264 14.6575 7.904 14.6575 8.736C14.6575 9.52533 14.4122 10.1973 13.9215 10.752C13.4308 11.2853 12.7268 11.552 11.8095 11.552C11.2122 11.552 10.6575 11.4133 10.1455 11.136C9.65483 10.8587 9.2495 10.3893 8.9295 9.728C8.63083 9.06667 8.4815 8.17067 8.4815 7.04V6.56C8.4815 5.04533 8.69483 3.82933 9.1215 2.912C9.5695 1.99467 10.2095 1.33333 11.0415 0.927999C11.8735 0.501332 12.8975 0.287998 14.1135 0.287998H14.8175ZM7.2975 0.287998V3.2H6.3055C5.7295 3.2 5.26017 3.28533 4.8975 3.456C4.55617 3.62667 4.30017 3.936 4.1295 4.384C3.95883 4.81067 3.8735 5.408 3.8735 6.176V8.512L2.9135 6.528C3.06283 6.4 3.27617 6.304 3.5535 6.24C3.83083 6.15467 4.14017 6.112 4.4815 6.112C5.22817 6.112 5.8575 6.34667 6.3695 6.816C6.8815 7.264 7.1375 7.904 7.1375 8.736C7.1375 9.52533 6.89217 10.1973 6.4015 10.752C5.91083 11.2853 5.20683 11.552 4.2895 11.552C3.69217 11.552 3.1375 11.4133 2.6255 11.136C2.13483 10.8587 1.7295 10.3893 1.4095 9.728C1.11083 9.06667 0.9615 8.17067 0.9615 7.04V6.56C0.9615 5.04533 1.17483 3.82933 1.6015 2.912C2.0495 1.99467 2.6895 1.33333 3.5215 0.927999C4.3535 0.501332 5.3775 0.287998 6.5935 0.287998H7.2975Z"
                          fill="#6E6E7F"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center justify-center flex-grow">
                      <p className="text-[#393938]/80 text-center">I thought it would be more difficult.</p>
                    </div>
                  </div>

                  <div className="rounded-xl p-8 border-2 border-[#393938]/30 relative flex flex-col items-center min-h-[160px]">
                    <div className="mb-4">
                      <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.8175 0.287998V3.2H13.8255C13.2495 3.2 12.7802 3.28533 12.4175 3.456C12.0762 3.62667 11.8202 3.936 11.6495 4.384C11.4788 4.81067 11.3935 5.408 11.3935 6.176V8.512L10.4335 6.528C10.5828 6.4 10.7962 6.304 11.0735 6.24C11.3508 6.15467 11.6602 6.112 12.0015 6.112C12.7482 6.112 13.3775 6.34667 13.8895 6.816C14.4015 7.264 14.6575 7.904 14.6575 8.736C14.6575 9.52533 14.4122 10.1973 13.9215 10.752C13.4308 11.2853 12.7268 11.552 11.8095 11.552C11.2122 11.552 10.6575 11.4133 10.1455 11.136C9.65483 10.8587 9.2495 10.3893 8.9295 9.728C8.63083 9.06667 8.4815 8.17067 8.4815 7.04V6.56C8.4815 5.04533 8.69483 3.82933 9.1215 2.912C9.5695 1.99467 10.2095 1.33333 11.0415 0.927999C11.8735 0.501332 12.8975 0.287998 14.1135 0.287998H14.8175ZM7.2975 0.287998V3.2H6.3055C5.7295 3.2 5.26017 3.28533 4.8975 3.456C4.55617 3.62667 4.30017 3.936 4.1295 4.384C3.95883 4.81067 3.8735 5.408 3.8735 6.176V8.512L2.9135 6.528C3.06283 6.4 3.27617 6.304 3.5535 6.24C3.83083 6.15467 4.14017 6.112 4.4815 6.112C5.22817 6.112 5.8575 6.34667 6.3695 6.816C6.8815 7.264 7.1375 7.904 7.1375 8.736C7.1375 9.52533 6.89217 10.1973 6.4015 10.752C5.91083 11.2853 5.20683 11.552 4.2895 11.552C3.69217 11.552 3.1375 11.4133 2.6255 11.136C2.13483 10.8587 1.7295 10.3893 1.4095 9.728C1.11083 9.06667 0.9615 8.17067 0.9615 7.04V6.56C0.9615 5.04533 1.17483 3.82933 1.6015 2.912C2.0495 1.99467 2.6895 1.33333 3.5215 0.927999C4.3535 0.501332 5.3775 0.287998 6.5935 0.287998H7.2975Z"
                          fill="#6E6E7F"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center justify-center flex-grow">
                      <p className="text-[#393938]/80 text-center">It was very clear and straightforward.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Insights and Impact Section */}
            <section className="pt-24 mt-16">
              <h2 className="text-lg font-medium text-[#393938] mb-8">INSIGHTS & IMPACT</h2>

              <div className="grid grid-cols-2 gap-16">
                {/* Insight 1 */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-medium text-[#393938]">Insight 1</h3>
                  <p className="text-[#393938]/80">
                    Before finding the skill competencies tab the users got lost and ended up on other tabs
                  </p>
                  <div className="rounded-xl overflow-hidden border-2 border-[#393938]/30 h-[240px]">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Insight%201%20image-K9sFcucj7wKXExFR4ljYoHzhgYvOKC.png"
                      alt="Heatmap showing user navigation patterns"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Insight 2 */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-medium text-[#393938]">Insight 2</h3>
                  <p className="text-[#393938]/80">
                    Users also got lost when adding a skill level and explained they didn't understand what skill level
                    meant since there was no explanation.
                  </p>
                  <div className="rounded-xl overflow-hidden border-2 border-[#393938]/30 h-[240px]">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/insight%202-VaYS3Elot5jjEKc1U8458OlbuBhv5X.png"
                      alt="Heatmap showing confusion around skill level input"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Impact 1 */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-medium text-[#393938]">Impact</h3>
                  <p className="text-[#393938]/80">
                    Creating <span className="font-medium">more noticeable tabs</span> will prevent any additional
                    confusion and create more intuitive navigation
                  </p>
                  <div className="rounded-xl overflow-hidden border-2 border-[#393938]/30 h-[240px]">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/impact%201-b5cqHDqnSniYpunFVlKxE5IG9jlKbo.png"
                      alt="Updated employee profile interface with clearer navigation"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Impact 2 */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-medium text-[#393938]">Impact</h3>
                  <p className="text-[#393938]/80">
                    Adding a <span className="font-medium">tool tip</span> will help introduce the user to how and what
                    different areas of the software mean and how it works. Providing{" "}
                    <span className="font-medium">Help and Documentation</span> will allow users to find specific
                    answers about features they are confused about.
                  </p>
                  <div className="rounded-xl overflow-hidden border-2 border-[#393938]/30 h-[240px]">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/impact%202-9oLMgtaItKObARpsDQShukXF5aySeH.png"
                      alt="Tooltip explaining skill level ratings"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* Next Steps Section */}
            <section className="pt-24 mt-16">
              <h2 className="text-lg font-medium text-[#393938] mb-8">NEXT STEPS</h2>

              <div className="grid grid-cols-2 gap-16">
                <div className="bg-[#F8F8F8] rounded-xl p-8 border-2 border-[#393938]/30">
                  <h3 className="text-xl font-medium text-[#393938] mb-4">Integrating Skills and Job Profiles</h3>
                  <p className="text-[#393938]/80">
                    Since we had a 3-month timeline we prioritized identifying skills and recommending training when
                    viewing individual employees. However, further expanding the feature so that it can also link skills
                    to its respective job profiles will help simplify the process even more when recommending skills to
                    employees.
                  </p>
                </div>

                <div className="bg-[#F8F8F8] rounded-xl p-8 border-2 border-[#393938]/30">
                  <h3 className="text-xl font-medium text-[#393938] mb-4">
                    Showcasing the Business Impact with Visuals
                  </h3>
                  <p className="text-[#393938]/80">
                    This feature is to not only help individual employees grow in their career but it is also to help
                    retain and grow the talent within the company. Designing to visually highlight the connection
                    between employee training, career progression, talent retention and company growth will provide
                    stakeholders with clear, actionable insights into the feature's value and potential to drive success
                    within the company.
                  </p>
                </div>
              </div>
            </section>

            {/* The Handover Section */}
            <section className="pt-24 mt-16">
              <h2 className="text-lg font-medium text-[#393938] mb-8">The Handover to our client</h2>
              <p className="text-lg text-[#393938]/80">
                Our feature was presented to our client and has been approved to move forward in development as a
                scalable and user-centered feature for SMEs to identify missing skill gaps and enhance employee career
                growth.
              </p>
            </section>
            {/* Reflection Section */}
            <section className="pt-24 mt-16">
              <h2 className="text-lg font-medium text-[#393938] mb-8">REFLECTION</h2>
              <div className="space-y-8">
                <div className="bg-transparent rounded-xl p-8 border-2 border-[#393938]/30">
                  <h3 className="text-xl font-medium text-[#393938] mb-4">Prioritizing within our limitations</h3>
                  <p className="text-[#393938]/80 leading-relaxed">
                    This project required a learning curve and deep understanding of skill frameworks before developing
                    our design. We ended up researching how competitors can track their employees skills and recommend
                    them based off of their career growth, linking specific skills to jobs, and how it benefits the
                    company as a whole. Rather than researching all three of these features we ended up narrowing our
                    scope to smaller, actionable sections so we could make realistic progress within our timeline.
                  </p>
                </div>

                <div className="bg-transparent rounded-xl p-8 border-2 border-[#393938]/30">
                  <h3 className="text-xl font-medium text-[#393938] mb-4">
                    Strengthening collaboration through feedback
                  </h3>
                  <p className="text-[#393938]/80 leading-relaxed">
                    During this project, we had the pleasure of working with Blue Elephant Solutions and the greatest
                    part about working with this client was their communication. They gave incredibly detailed feedback
                    during meetings and were also passionate about providing a feature that would benefit their users.
                    This feedback played a huge part in designing a solution that met both their business needs and the
                    needs of the users.
                  </p>
                </div>

                <div className="bg-transparent rounded-xl p-8 border-2 border-[#393938]/30">
                  <h3 className="text-xl font-medium text-[#393938] mb-4">Optimizing Time Management</h3>
                  <p className="text-[#393938]/80 leading-relaxed">
                    Looking back, I would have also started recruiting sooner for usability participants and advocated
                    for a larger research budget as well so we could gather more feedback and improve the feature of
                    this product even further with more tests and user interviews.
                  </p>
                </div>
              </div>
            </section>
          </motion.div>
        </motion.main>
        <Footer />
      </div>
    </>
  )
}

