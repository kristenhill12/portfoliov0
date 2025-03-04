"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
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

export default function AirAsiaCase() {
  useScrollTop()

  return (
    <>
      <Head>
        <title>Kristen Hill - Improving User Traffic for a Communities Feature</title>
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
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2f5233]">AirAsia Move</h1>
            <p className="text-xl sm:text-2xl text-[#393938]">Improving User Traffic into Community Feature</p>
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
              <span className="px-2 py-1 rounded-full border border-[#393938]/20 text-xs sm:text-sm text-[#393938]/70 whitespace-nowrap">
                Mobile Design
              </span>
              <span className="px-2 py-1 rounded-full border border-[#393938]/20 text-xs sm:text-sm text-[#393938]/70 whitespace-nowrap">
                Freelance
              </span>
              <span className="px-2 py-1 rounded-full border border-[#393938]/20 text-xs sm:text-sm text-[#393938]/70 whitespace-nowrap">
                Travel App
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-8 text-[#393938] text-sm"
          >
            <div>
              <h3 className="font-medium mb-1">Client</h3>
              <p>AirAsia</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Team</h3>
              <p>4 Product Designers</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Duration</h3>
              <p>2024 (Oct-Nov)</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Role</h3>
              <p>UX Design</p>
              <p>Consulting</p>
              <p>Research</p>
            </div>
          </motion.div>

          <motion.div variants={item} className="mb-24">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AirAsia%20Stream.png-12YKOMLQ1scFjQWZAqlyLKDySY19P5.jpeg"
              alt="AirAsia Move App Interface"
              className="w-full rounded-lg"
            />
          </motion.div>

          <motion.div variants={item} className="space-y-12 mt-16">
            {/* Introduction Section */}
            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">INTRODUCTION</h2>
              <h3 className="text-2xl font-medium text-[#393938] mb-8">
                Connecting Travelers Through Shared Experiences
              </h3>
              <div className="space-y-8">
                <p className="text-lg text-[#393938]/80 leading-relaxed">
                  AirAsia MOVE is a travel app that helps users book flights, hotels, and more. It also has a
                  "Communities" feature where travelers can share stories and connect with other travelers.
                </p>
                <p className="text-lg text-[#393938]/80 leading-relaxed">
                  I led a team of three other designers to come up with solutions to improve the user traffic of this
                  feature.
                </p>
                <div className="grid grid-cols-2 gap-8 items-center py-8">
                  <div className="flex justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/second%20image-yzpA4NqnNAfda3Yng6M5iA3jkhKK8n.png"
                      alt="AirAsia Move Communities Chat Interface"
                      className="w-3/4 mx-auto mb-6"
                    />
                  </div>
                  <p className="text-lg text-[#393938]/80">
                    However, many users were having trouble finding the feature and were confused about its purpose.
                  </p>
                </div>
              </div>
            </section>

            {/* Problem Section */}
            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">THE PROBLEM</h2>
              <h3 className="text-2xl font-medium text-[#393938] mb-8">
                The Communities Feature Has a Low Engagement Rate Despite Its Number of Daily Users
              </h3>
              <p className="text-lg text-[#393938]/80 leading-relaxed mb-12">
                Since AirAsia Move is a travel app, most users are not aware of the "Communities" feature and those who
                joined struggle to see the benefits of this feature. This has led to very low activity and interaction
                within the Communities.
              </p>
              <div className="grid grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="border border-[#393938]/20 rounded-full">
                    <div className="flex items-center gap-4 bg-white rounded-full pl-8 pr-4 py-4">
                      <span className="text-[#393938] font-medium">Daily Users</span>
                      <span className="ml-auto bg-[#2f5233] text-white px-6 py-2 rounded-full font-medium">300K</span>
                    </div>
                  </div>
                  <div className="border border-[#393938]/20 rounded-full">
                    <div className="flex items-center gap-4 bg-white rounded-full pl-8 pr-4 py-4">
                      <span className="text-[#393938] font-medium">Community Users</span>
                      <span className="ml-auto bg-[#2f5233] text-white px-6 py-2 rounded-full font-medium">15K</span>
                    </div>
                  </div>
                  <div className="border border-[#393938]/20 rounded-full">
                    <div className="flex items-center gap-4 bg-white rounded-full pl-8 pr-4 py-4">
                      <span className="text-[#393938] font-medium">Engagement Rate</span>
                      <span className="ml-auto bg-[#2f5233] text-white px-6 py-2 rounded-full font-medium">
                        {">"} 1%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/first%20image-Q4iTuFRXJATGru5ijHS4lmrkWByP8g.png"
                    alt="AirAsia Move Communities List Interface"
                    className="w-3/4 mx-auto mb-6"
                  />
                </div>
              </div>
            </section>

            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">DEFINING THE PROJECT</h2>
              <p className="text-lg text-[#393938]/80 leading-relaxed mb-12">
                AirAsia Move partnered with us to redesign the "Communities" feature to enhance user discoverability and
                encourage more meaningful engagement and social interactions.
              </p>
              <div className="flex flex-col items-center gap-12">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hand%20Section%203-Yq7BJI3YvF8vCMRIb5JJglEP7790ru.png"
                  alt="Hand holding phone illustration"
                  className="w-80 h-auto object-contain"
                />
                <div className="border border-[#393938]/20 bg-white rounded-xl p-8 w-full max-w-xl">
                  <h3 className="text-xl font-medium text-[#393938] mb-6">Client Expectations</h3>
                  <ol className="space-y-4 text-[#393938]/80">
                    <li>1. Design solutions that integrate with the existing app and design system</li>
                    <li>2. Create value-added features that enhance user retention/engagement</li>
                  </ol>
                </div>

                <div className="w-full pt-12">
                  <h3 className="text-lg font-medium text-[#393938] mb-8">DESIGN PROCESS</h3>
                  <div className="flex justify-between items-center w-full px-12">
                    {["Define", "Research", "Ideate", "Design", "Test", "Iterate"].map((step, i, arr) => (
                      <div key={step} className="flex items-center">
                        <div className="px-6 py-2 rounded-full border border-[#393938]/20 text-[#393938]">{step}</div>
                        {i < arr.length - 1 && <ArrowRight className="ml-4 text-[#393938]/40" />}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full space-y-12">
                  <div className="border border-[#393938]/20 rounded-2xl p-8">
                    <h3 className="text-xl font-medium text-[#393938] mb-6">Research Objectives</h3>
                    <ol className="space-y-4 text-[#393938]/80">
                      <li>01 Explore how users currently find, join, and interact with Communities feature.</li>
                      <li>
                        02 Discover how both social platforms and travel apps approach onboarding, community discovery,
                        and user engagement.
                      </li>
                      <li>
                        03 Analyze social psychology of online communities to understand what motivates users to join
                        and meaningfully engage.
                      </li>
                      <li>
                        04 Identify design elements like gamification, rewards, or navigation that can encourage
                        participation.
                      </li>
                    </ol>
                  </div>

                  <div className="space-y-8">
                    <p className="text-lg text-[#393938]/80 text-left">
                      To understand the problem, we researched using two main methods:
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nomads%20Mobile-411G7HoHuPWuABHe6DObe56NcWmRGk.svg"
                          alt="Usability Tests Icon"
                          className="w-32 h-32 object-contain mb-8"
                        />
                        <h4 className="text-xl font-medium text-[#393938] mb-2">Usability Tests</h4>
                        <p className="text-[#393938]/80 text-center">
                          Where are users struggling to find and use communities?
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nomads%20Rating-dyr35g0kzTQWPpuNMAy3ePCwut5s3r.svg"
                          alt="Competitive Analysis Icon"
                          className="w-32 h-32 object-contain mb-8"
                        />
                        <h4 className="text-xl font-medium text-[#393938] mb-2">Competitive Analysis</h4>
                        <p className="text-[#393938]/80 text-center">
                          How do social / travel apps help discoverability and engagement?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Research Section */}
            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">RESEARCH</h2>

              <div className="space-y-12">
                <div>
                  <p className="text-lg text-[#393938]/80 mb-6">
                    We conducted usability tests to understand how users currently discover, join, and interact with
                    communities within the app.
                  </p>

                  <p className="text-lg text-[#393938]/80 mb-12">
                    These tests helped us identify challenges with discoverability and gain insights into how users
                    prefer to engage with the feature. After testing with 6 participants, the usability score was below
                    average usability.
                  </p>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="rounded-xl">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Usability%20test%20chart-IEHwNxiFHbWlNVgtWqFv08QxDs2LPc.png"
                          alt="SUS Score Chart"
                          className="w-full h-auto"
                        />
                      </div>
                      <p className="text-[#393938]/80 italic">
                        Initial usability testing revealed significant challenges with the community feature
                      </p>
                    </div>
                    <div className="border border-[#393938]/20 rounded-xl p-8">
                      <h3 className="text-xl font-medium text-[#393938] mb-6">App Feedback</h3>
                      <div className="space-y-4 text-[#393938]/80">
                        <p>"I wouldn't have found communities in the app if it wasn't mentioned"</p>
                        <p>"There is a lot of spam messages and not a lot of content."</p>
                        <p>"I'm scared to interact, it doesn't feel safe."</p>
                        <p>"Why would I use this feature, when I can look at travel blogs?"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Looking at Social and Travel Apps */}
            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">RESEARCH</h2>
              <h3 className="text-2xl font-medium text-[#393938] mb-8">Looking at Social and Travel Apps</h3>
              <p className="text-lg text-[#393938]/80 leading-relaxed mb-12">
                We conducted a competitive analysis to better understand the onboarding, discovery, and unique features
                that encourage engagement in online communities as well as travel apps since AirAsia Move is both.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {/* Social Apps Column */}
                <div className="space-y-8 flex flex-col">
                  <div className="flex flex-col items-center">
                    <h4 className="text-xl font-medium text-[#393938] mb-6">Social</h4>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Social%20Iconas.svg-qlC42cmgxTQ4GknEp0IkBH62zzxncR.png"
                      alt="Social Media Apps"
                      className="w-48"
                    />
                  </div>
                  <div className="border border-[#393938]/20 rounded-xl overflow-hidden flex-1">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Twitch-MIvOIGIyQXdWO5e83fCgiPwtp8exjX.png"
                      alt="Discord Community Screenshots"
                      className="w-full"
                    />
                    <p className="text-[#393938]/80 mt-4 px-4 pb-4">
                      We noticed the onboarding for communities on discord included welcome messages, rules, and easy
                      interactions.
                    </p>
                  </div>
                </div>

                {/* Travel Apps Column */}
                <div className="space-y-8 flex flex-col">
                  <div className="flex flex-col items-center">
                    <h4 className="text-xl font-medium text-[#393938] mb-6">Travel</h4>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/travel%20icons.svg-5ns6H3d6EfamBkNGsXqBPEPKqr1QDv.png"
                      alt="Travel Apps"
                      className="w-48"
                    />
                  </div>
                  <div className="border border-[#393938]/20 rounded-xl overflow-hidden flex-1">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Travel-rXXMckteBCiN8WAcgQ5QTWJLB00MWC.png"
                      alt="Travel Apps Screenshots"
                      className="w-full"
                    />
                    <p className="text-[#393938]/80 mt-4 px-4 pb-4">
                      The travel apps showed tool tips for better understanding the app, offered a search options, and
                      offered a clear layout and preview of different categories.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Research Insights Section */}
            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">RESEARCH</h2>
              <h3 className="text-2xl font-medium text-[#393938] mb-8">Research Insights</h3>

              <div className="space-y-16">
                {/* Finding 1 */}
                <div>
                  <div className="grid grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Research%20insights%201-kS5RdXoegDU3o0md2rCUFLPG6oAMkU.png"
                        alt="Communities Feature Location"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#393938] mb-4">
                        01 Users had a difficult time locating the communities feature
                      </h4>
                      <p className="text-[#393938]/80 leading-relaxed">
                        Since the communities feature is under the message section, users struggled to find the
                        communities feature explained that they wouldn't have looked for it without prompting.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Finding 2 */}
                <div>
                  <div className="grid grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Research%20insights%202-ZKrglU8g6ub6tHoP2Us8JkMydwP8C6.png"
                        alt="Onboarding Issues"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#393938] mb-4">
                        02 The lack of onboarding left users feeling confused and unsafe
                      </h4>
                      <ul className="space-y-4 text-[#393938]/80">
                        <li>
                          • No Onboarding: Users mistook communities for chat support because they were greeted with
                          random messages upon joining.
                        </li>
                        <li>
                          • Users felt unwelcome and unsafe: The absence of guidance made users hesitant to interact.
                        </li>
                        <li>
                          • Unfamiliar interactions: The design didn't match expectations from other messaging apps.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Finding 3 */}
                <div>
                  <div className="grid grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Research%20objectives3-dZdEywQHDWRwMiZgBMi8lgCxIMY5J1.png"
                        alt="Value Understanding"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#393938] mb-4">03 Users did not understand the value</h4>
                      <ul className="space-y-4 text-[#393938]/80">
                        <li>
                          • Unclear value: Users didn't understand the benefits of joining a community or how it could
                          help them.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Defining our Strategy Section */}
            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">DEFINING OUR STRATEGY</h2>
              <p className="text-lg text-[#393938]/80 leading-relaxed mb-12">
                Based on our research findings, I led ideation workshops and client updates, which helped us develop
                "How Might We" statements to align our solutions with user needs and business goals.
              </p>
              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="border border-[#393938]/20 bg-[#F8F8F8] px-6 py-4 rounded-2xl">
                  <p className="text-xl text-[#393938] font-medium text-center">
                    How might we increase the discoverability of the Communities feature?
                  </p>
                </div>
                <div className="border border-[#393938]/20 bg-[#F8F8F8] px-6 py-4 rounded-2xl">
                  <p className="text-xl text-[#393938] font-medium text-center">
                    How might we encourage more meaningful engagement within communities?
                  </p>
                </div>
              </div>
            </section>

            {/* Ideation Section */}
            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">IDEATION</h2>
              <h3 className="text-2xl font-medium text-[#393938] mb-8">Increasing Discoverability via Entry points</h3>
              <p className="text-lg text-[#393938]/80 leading-relaxed mb-12">
                In order to bring more engagement, we first thought of moving the communities section to the home page,
                however after receiving feedback from our stakeholders and in order to stay within the business goals we
                ultimately had to find other ways to promote communities without changing the main menu and navigation
                bar.
              </p>
              <div className="grid grid-cols-2 gap-8 items-start">
                <div>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IA-aRs3yz9rXwpfDHAyhbEa3FjdC0pvee.png"
                    alt="Information Architecture Site Map"
                    className="w-full rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ideation-YpwlBn0ro5yCkXi0md3w6BPjxmohNh.png"
                    alt="Early Ideation Layout"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </section>

            {/* Design Explorations Section */}
            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">DESIGN EXPLORATIONS</h2>

              <div className="space-y-12">
                {/* Exploring Backgrounds */}
                <div>
                  <div className="grid grid-cols-2 gap-8 items-start">
                    <div className="h-80 flex items-center justify-center">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Backgrounds-MLXn7jWxCGaWtJNjVwa5ctNXefp1g0.png"
                        alt="Chat Interface Background Explorations"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-[#393938] mb-8">Exploring Backgrounds</h3>
                      <p className="text-lg text-[#393938]/80 leading-relaxed">
                        We started exploring default backgrounds in the chat to create a less intimidating community
                        space.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Changing the Layout */}
                <div>
                  <div className="grid grid-cols-2 gap-8 items-start">
                    <div className="h-80 flex items-center justify-center">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Layout-XOroqFMVg70KlGsbsGd81ECCioAIkG.png"
                        alt="Community Layout Redesign"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-[#393938] mb-8">
                        Changing the Layout to explore communities more easily
                      </h3>
                      <p className="text-lg text-[#393938]/80 leading-relaxed">
                        The current Messages layout doesn't effectively encourage users to join, so we explored
                        alternative menu layouts to make the experience more intuitive and user-friendly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Solution Section */}
            <section className="pt-24 mt-16">
              <h2 className="text-lg font-medium text-[#393938] mb-4">FINAL SOLUTION</h2>
              <h3 className="text-2xl font-medium text-[#393938] mb-8">Our Solution</h3>

              <div className="space-y-12">
                {/* Solution 1: Home Page Entry Points */}
                <div className="grid grid-cols-2 gap-8 items-center pt-16">
                  <div className="flex justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/entry%20points%202-L0peQL33iQG73zmbWB9kcFOfqGr6AR.png"
                      alt="Home Page Entry Points"
                      className="w-96 mx-auto rounded-lg"
                    />
                  </div>
                  <div className="space-y-6 flex flex-col justify-center">
                    <div className="space-y-4">
                      <p className="text-sm font-medium text-[#393938]/70">01 Discoverability</p>
                      <h4 className="text-xl font-medium text-[#393938]">Home Page Entry Points</h4>
                    </div>
                    <p className="text-[#393938]/80 leading-relaxed">
                      Since communities were only accessible from "Messages," we added more entry points on the homepage
                      to improve visibility, while keeping the original menu and navigation bar unchanged.
                    </p>
                    <div className="space-y-4">
                      <h5 className="text-lg font-medium text-[#393938]">Chat snippets</h5>
                      <p className="text-[#393938]/80">
                        Included chat previews to lower the barrier for new users, making communities feel more
                        approachable and inviting.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solution 2: Post Flight Entry Points */}
                <div className="grid grid-cols-2 gap-8 items-center pt-16">
                  <div className="space-y-6 flex flex-col justify-center">
                    <div className="space-y-4">
                      <p className="text-sm font-medium text-[#393938]/70">02 Post Flight Entry Points</p>
                      <h4 className="text-xl font-medium text-[#393938]">Post Flight Entry Points</h4>
                    </div>
                    <p className="text-[#393938]/80 leading-relaxed">
                      We added more entry points during the initial flight booking process as well to increase the
                      discoverability. This allows users to naturally discover and join relevant communities based on
                      their travel plans.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/post%20flight-7utjKCTML8IpFu69y8nBciwEvu9C6b.svg"
                      alt="Post Flight Entry Points"
                      className="w-96 mx-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Solution 3: Onboarding Experience */}
                <div className="grid grid-cols-2 gap-8 items-center pt-16">
                  <div className="flex justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/onboarding%201-IYiR43vGT4d0BLaIbphUTvCbQLhOV4.png"
                      alt="Onboarding Experience"
                      className="w-96 mx-auto rounded-lg"
                    />
                  </div>
                  <div className="space-y-6 flex flex-col justify-center">
                    <div className="space-y-4">
                      <p className="text-sm font-medium text-[#393938]/70">03 Personalized Onboarding</p>
                      <h4 className="text-xl font-medium text-[#393938]">Personalized Onboarding</h4>
                    </div>
                    <p className="text-[#393938]/80 leading-relaxed">
                      We created a personalized onboarding experience that helps users find communities that match their
                      interests. Users can select their preferred countries, places, and activities to get relevant
                      community recommendations.
                    </p>
                  </div>
                </div>

                {/* Solution 4: Welcome and Guidelines */}
                <div className="grid grid-cols-2 gap-8 items-center pt-16">
                  <div className="space-y-6 flex flex-col justify-center">
                    <div className="space-y-4">
                      <p className="text-sm font-medium text-[#393938]/70">04 Community Guidelines</p>
                      <h4 className="text-xl font-medium text-[#393938]">Welcome and Guidelines</h4>
                    </div>
                    <p className="text-[#393938]/80 leading-relaxed">
                      Added a welcome banner to confirm community membership and encourage users to introduce
                      themselves. The welcome message highlights community discussion topics and includes clear
                      guidelines to promote safety and engagement.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Welcome%20Message-Y9kvVa6n0WUih3SdNCoS2RNOLuMLp7.png"
                      alt="Welcome and Guidelines"
                      className="w-96 mx-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">RESULTS</h2>
              <h3 className="text-2xl font-medium text-[#393938] mb-8">Noticeable Impact</h3>

              <div className="space-y-16">
                {/* User Quotes */}
                <div className="flex justify-center">
                  <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
                    <div className="bg-[#2f5233] text-white p-6 rounded-xl">
                      <p className="text-lg">"This is a great way to connect with people when you are traveling!"</p>
                    </div>
                    <div className="bg-[#2f5233] text-white p-6 rounded-xl">
                      <p className="text-lg">"It feels really welcoming and friendly!"</p>
                    </div>
                    <div className="bg-[#2f5233] text-white p-6 rounded-xl">
                      <p className="text-lg">"I liked seeing the preview of the community before joining!"</p>
                    </div>
                  </div>
                </div>

                {/* Chart and Statistics */}
                <div className="space-y-12">
                  {/* Chart */}
                  <div className="flex justify-center">
                    <div className="w-[300px]">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chart-qFMsyymuJO97wDKuNVzLhVerMDD2Qn.svg"
                        alt="Before and After Redesign Chart"
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Statistics */}
                  <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-8 max-w-4xl">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="24" height="24" rx="4" fill="#2f5233" />
                            <path
                              d="M7 12L10 15L17 8"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="max-w-[280px]">
                          <p className="text-[#393938]">The improvement in task success rate after the redesign is</p>
                          <p className="text-xl font-bold text-[#2f5233]">11.54%</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="24" height="24" rx="4" fill="#2f5233" />
                            <path
                              d="M7 12L10 15L17 8"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="max-w-[280px]">
                          <p className="text-[#393938]">
                            The improvement in user satisfaction score after the redesign is
                          </p>
                          <p className="text-xl font-bold text-[#2f5233]">23.08%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">NEXT STEPS</h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-transparent rounded-[28px] border-2 border-[#393938]/30 p-4 shadow-sm h-[500px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gamification2-fmvGpxQN3CB6ggH9n0X6kmiYbqTMze.png"
                      alt="Points earned notification"
                      className="w-full rounded-[20px] object-contain max-h-full"
                    />
                  </div>
                  <div className="bg-transparent rounded-[16px] border-2 border-[#393938]/30 p-4 h-[120px]">
                    <h3 className="text-[#393938] font-medium mb-2">Gamification</h3>
                    <p className="text-[#393938]/80 text-sm">
                      Incorporate points and gamification overlays to create a gameplay experience that encourages user
                      participation and engagement.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-transparent rounded-[28px] border-2 border-[#393938]/30 p-4 shadow-sm h-[500px] flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/animations221-ezgif.com-crop-htKn2aRDXsRRN6rXJKQFglAKHj0Xyc.gif"
                      alt="Welcome screen animation"
                      className="w-full rounded-[20px] object-contain max-h-full"
                    />
                  </div>
                  <div className="bg-transparent rounded-[16px] border-2 border-[#393938]/30 p-4 h-[120px]">
                    <h3 className="text-[#393938] font-medium mb-2">Detailed animations of existing features</h3>
                    <p className="text-[#393938]/80 text-sm">
                      Animations visually guide users through features, making learning more engaging and enjoyable,
                      which boosts satisfaction and feature adoption.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">THE HANDOVER</h2>
              <div className="space-y-6">
                <p className="text-lg text-[#393938]/80">
                  We presented our solutions to our client and they confirmed plans to implement many of our entry
                  points and interactions at the start of next year. We've continued to monitor their progress and
                  remain available for collaboration as needed.
                </p>
              </div>
            </section>

            {/* Reflection Section */}
            <section className="pt-16 mt-12">
              <h2 className="text-lg font-medium text-[#393938] mb-4">REFLECTION</h2>
              <div className="space-y-8">
                <div className="bg-transparent rounded-xl p-8 border-2 border-[#393938]/30">
                  <h3 className="text-xl font-medium text-[#393938] mb-4">Prioritizing high effort and high impact</h3>
                  <p className="text-[#393938]/80 leading-relaxed">
                    As the lead designer, I led our ideation and brainstorming workshops, and we had great collaboration
                    throughout the project. We prioritized a lot of high-impact, low-effort solutions since they were
                    quick to implement, but I think next time we could scale down even more and focus on bigger,
                    long-term impact solutions.
                  </p>
                </div>
                <div className="bg-transparent rounded-xl p-8 border-2 border-[#393938]/30">
                  <h3 className="text-xl font-medium text-[#393938] mb-4">More Usability Testing</h3>
                  <p className="text-[#393938]/80 leading-relaxed">
                    With a one-month timeline, we successfully tested with over 12 participants, which provided valuable
                    insights. However, in the future, conducting more usability testing would allow us to gather
                    additional user feedback and validate our solutions.
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

