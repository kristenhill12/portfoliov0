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

export default function StudyBuddyCase() {
  useScrollTop()

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Head>
        <title>Kristen Hill - Making a Local First AI Notebook Experience</title>
      </Head>
      <NavBar />
      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-24"
      >
        <motion.div variants={item} className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2f5233]">StudyBuddy</h1>
            <p className="text-xl sm:text-2xl text-[#393938]">
              Designing a Local-First AI Notebook with a Cozy, Lo-Fi Experience
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
              <span className="px-2 py-1 rounded-full border border-[#393938]/20 text-xs sm:text-sm text-[#393938]/70 whitespace-nowrap">
                AI Design
              </span>
              <span className="px-2 py-1 rounded-full border border-[#393938]/20 text-xs sm:text-sm text-[#393938]/70 whitespace-nowrap">
                Hackathon
              </span>
              <span className="px-2 py-1 rounded-full border border-[#393938]/20 text-xs sm:text-sm text-[#393938]/70 whitespace-nowrap">
                Notebook UX
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-8 text-[#393938] text-sm">
            <div>
              <h3 className="font-medium mb-1">Project Type</h3>
              <p>Hackathon: LoFi-Hack</p>
              <p>Sponsored by Basic, Hugging Face,</p>
              <p>Plymouthstreet, Trive.ai, Browser.ai</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Team</h3>
              <p>1 Product Designer</p>
              <p>1 Software Engineer</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Duration</h3>
              <p>6 hours</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Role</h3>
              <p>Research</p>
              <p>Conceptualization</p>
              <p>Ideation, Design</p>
              <p>Story Telling</p>
            </div>
          </div>

          <div className="border-2 border-[#393938]/20 rounded-xl overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coverstudybuddy-xjFuRVcNShOF4813X3DTyJUhaGMe9S.svg"
              alt="StudyBuddy Interface"
              className="w-full h-auto object-cover"
            />
          </div>

          <section className="pt-16 mt-12">
            <h2 className="text-lg font-medium text-[#393938] mb-4">CONTEXT</h2>
            <p className="text-lg text-[#393938]/80 leading-relaxed">
              At LoFi-Hack, we were given the challenge to create an app that was both local-first and local AI-powered,
              meaning it had to store data directly on the user's device, sync across devices, and run AI without
              relying on the cloud. On top of that, our app had to also have a cozy, lo-fi aesthetic.
            </p>
            <p className="text-lg text-[#393938]/80 leading-relaxed mt-4">
              We designed a Local-First AI Notebook LM, a focus-friendly tool that helps users think and organize their
              ideas without distractions. It features a timer, an animal "study buddy", and a built-in study assistant
              AI that provides guidance without doing the work for you, keeping users engaged and in control of their
              workflow.
            </p>
          </section>

          <section className="pt-16 mt-12">
            <h2 className="text-lg font-medium text-[#393938] mb-4">PROBLEM BREAKDOWN</h2>
            <h3 className="text-2xl font-medium text-[#393938] mb-8">
              Staying focused is difficult when distractions are everywhere and AI does the thinking for you.
            </h3>
            <p className="text-lg text-[#393938]/80 leading-relaxed">
              With constant notifications, open tabs, and AI tools that do the work for you, it's easy to lose focus and
              rely on AI instead of thinking for yourself. Many students and professionals also turn to lo-fi study
              streams for structure, using timers and cozy backgrounds to stay on track and feel less alone while
              working. However, these streams don't offer any interactive way to organize thoughts or track progress.
            </p>
            <p className="text-lg text-[#393938]/80 leading-relaxed mt-4">
              We wanted to create a space that helps users produce organic thought and think for themselves.
            </p>
          </section>

          <section className="pt-16 mt-12">
            <h2 className="text-lg font-medium text-[#393938] mb-4">TARGET USERS</h2>
            <p className="text-lg text-[#393938]/80 text-center mb-12">
              Our notebook is designed for students and working adults who need a place to think, write, and organize
              their work.
            </p>

            <div className="grid grid-cols-2 gap-32 max-w-3xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="bg-gray-50 p-6 rounded-xl border border-[#393938]/20 mb-6 w-[200px] h-[200px] flex items-center justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/user%201-QdVbIZnItz9DmvvmTx2aSIDU6rCOpX.svg"
                    alt="Student Persona"
                    className="w-32 h-32"
                  />
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-[#393938]/20 h-[160px] flex items-center">
                  <p className="text-[#393938]/80 text-sm text-center">
                    "I'll sit down to study for 30 minutes, and suddenly I'm on my phone, watching videos, or doing
                    something completely different."
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-50 p-6 rounded-xl border border-[#393938]/20 mb-6 w-[200px] h-[200px] flex items-center justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/user%202-SwVrGnaRjye8nZF0jRPwVueNHuQDGL.svg"
                    alt="Professional Persona"
                    className="w-32 h-32"
                  />
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-[#393938]/20 h-[160px] flex items-center">
                  <p className="text-[#393938]/80 text-sm text-center">
                    "I struggle with focus, especially when switching between tasks. AI tools feel like a shortcut, but
                    I don't want something to write for me—I just need a little structure to help me think clearly."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-16 mt-12">
            <h2 className="text-lg font-medium text-[#393938] mb-4">HACKATHON EXPECTATIONS</h2>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="bg-gray-50 p-6 rounded-xl border border-[#393938]/20 mb-4 w-24 h-24 mx-auto flex items-center justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cloud-02-UI7PSK5FbUCI3XlBl65JeoStvPvIlR.svg"
                    alt="Cloud Icon"
                    className="w-16 h-16"
                  />
                </div>
                <p className="text-[#393938] font-medium">Local First</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-50 p-6 rounded-xl border border-[#393938]/20 mb-4 w-24 h-24 mx-auto flex items-center justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Star-4am6v6Wb2x7LPS1HiFM8rzCXGOtfKj.svg"
                    alt="Star Icon"
                    className="w-16 h-16"
                  />
                </div>
                <p className="text-[#393938] font-medium">Local AI</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-50 p-6 rounded-xl border border-[#393938]/20 mb-4 w-24 h-24 mx-auto flex items-center justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moon-01-a8Z9x0wafgcEpACU6ZDsi7glvwEj3t.svg"
                    alt="Moon Icon"
                    className="w-16 h-16"
                  />
                </div>
                <p className="text-[#393938] font-medium">Cute Lo-fi Aesthetic</p>
              </div>
            </div>
          </section>

          <section className="pt-16 mt-12">
            <h2 className="text-lg font-medium text-[#393938] mb-4">DESIGN PROCESS</h2>
            <p className="text-lg text-[#393938]/80 mb-12">
              Since this was a hackathon project, we used a Lean UX method because its fast-paced and iterative. We
              focused on ideating, sketching, and validating concepts quickly.
            </p>
            <div className="flex justify-between items-center w-full">
              <div className="flex-1 bg-transparent rounded-xl border-2 border-[#393938]/20 p-6 text-center mx-4">
                <h3 className="text-xl font-medium text-[#393938] mb-2">Think</h3>
                <p className="text-[#393938]/80">Define and Ideate</p>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <path
                  d="M4 12h16m0 0l-6-6m6 6l-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex-1 bg-transparent rounded-xl border-2 border-[#393938]/20 p-6 text-center mx-4">
                <h3 className="text-xl font-medium text-[#393938] mb-2">Make</h3>
                <p className="text-[#393938]/80">Design and Prototype</p>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <path
                  d="M4 12h16m0 0l-6-6m6 6l-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex-1 bg-transparent rounded-xl border-2 border-[#393938]/20 p-6 text-center mx-4">
                <h3 className="text-xl font-medium text-[#393938] mb-2">Check</h3>
                <p className="text-[#393938]/80">Presentation and Feedback</p>
              </div>
            </div>
          </section>

          <section className="pt-16 mt-12">
            <h2 className="text-lg font-medium text-[#393938] mb-4">THINK</h2>
            <h3 className="text-2xl font-medium text-[#393938] mb-8">
              Before diving into design, we defined what we were building and why
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-[#393938]/80 leading-relaxed">
                Originally I wanted to make a study timer with lo-fi music, where as my partner had an idea to create a
                notebook LM and thus we decided to combine our ideas.
              </p>
              <p className="text-lg text-[#393938]/80 leading-relaxed">
                We decided we would create a local-first AI notebook that helps users with productivity.
              </p>
            </div>
          </section>

          <section className="pt-16 mt-12">
            <h2 className="text-lg font-medium text-[#393938] mb-4">THINK</h2>
            <h3 className="text-2xl font-medium text-[#393938] mb-8">Researching other competitors</h3>
            <p className="text-lg text-[#393938]/80 mb-12">
              We looked at Notion, Cursor, and lo-fi timers to understand their strengths and limitations.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-transparent rounded-xl border-2 border-[#393938]/20 overflow-hidden aspect-[16/10]">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cursor-OkabZD4xDYX790vga25p5FFPSYo15t.png"
                    alt="Cursor interface showing chat and studio features"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[#393938]/80">
                  Understanding how users rely on platforms like Cursor to gain gather note outlines and providing views
                  of chats, sources, and studio all in one workspace
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-transparent rounded-xl border-2 border-[#393938]/20 overflow-hidden aspect-[16/10]">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/notion-ZZlxOSOhQxnVbu6Ut0hxPXQ7Yjrpz3.png"
                    alt="Notion new page interface"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[#393938]/80">
                  Users love notion for its easy to understand format showing you the new page, and giving you freedom
                  to create your space the way you want.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-16 mt-12">
            <h2 className="text-lg font-medium text-[#393938] mb-4">THINK</h2>
            <h3 className="text-2xl font-medium text-[#393938] mb-8">User Behavior</h3>
            <p className="text-lg text-[#393938]/80 mb-12">
              Many students and professionals turn to lo-fi study streams for structure. We explored how we could bring
              that focus-driven experience into our app.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-transparent rounded-xl border-2 border-[#393938]/20 overflow-hidden aspect-[16/9]">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Study%20with%20me%20youtube-7Oiw0g4md7js8i8jclUMFOfuB1dGEI.png"
                    alt="Study With Me - Pomodoro Timer with cute pixel art"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-transparent rounded-xl border-2 border-[#393938]/20 p-6">
                  <p className="text-[#393938]/80">
                    Study streams often use cute pixel art and timers to create a cozy, focused environment
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-transparent rounded-xl border-2 border-[#393938]/20 overflow-hidden aspect-[16/9]">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youtube-h24M5mDVVmzsNJpEqEl3cpHCMvjQNZ.png"
                    alt="Study With Me - Focus timer with matcha theme"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-transparent rounded-xl border-2 border-[#393938]/20 p-6">
                  <p className="text-[#393938]/80">
                    Many streams incorporate themed designs and progress tracking to maintain engagement
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-16 mt-12">
            <h2 className="text-lg font-medium text-[#393938] mb-4">MAKE</h2>
            <h3 className="text-2xl font-medium text-[#393938] mb-8">Creating Sketches of user flows and layouts</h3>
            <p className="text-lg text-[#393938]/80 mb-12">
              We started ideating by sketching out early wireframes to get a better idea of the user flow we were going
              to be building. We wanted to make it feel personalized while also having minimal steps.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-transparent rounded-xl border-2 border-[#393938]/20 overflow-hidden aspect-square">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/onboarding.png-EEbpU3nF3R7WmW0eCRCXbmu14izfuO.jpeg"
                    alt="Early sketch of onboarding flow"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[#393938]/80">Here you can see a very early sketches of our onboarding flow.</p>
              </div>
              <div className="space-y-4">
                <div className="bg-transparent rounded-xl border-2 border-[#393938]/20 overflow-hidden aspect-square">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6143.JPG-FDbVpEXg4FxmEsf8pTTNJ7rJOEgZ5l.jpeg"
                    alt="Sketch of workspace layout"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[#393938]/80">
                  In this photo you can see sketches of our workspace where the notes and assistant would be.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-16 mt-12">
            <h2 className="text-lg font-medium text-[#393938] mb-4">IDEATION</h2>
            <h3 className="text-2xl font-medium text-[#393938] mb-8">Getting a better visual with midfi designs</h3>
            <p className="text-lg text-[#393938]/80 mb-12">
              I then created midfi wireframes so my teammate and I could collaborate better and get a better idea of our
              Design direction.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/onboarding-b5fHGHgohB2dfBVoy1swFBstVvP4Uf.svg"
                  alt="Sign up screen wireframe"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Select%20Studybuddy-yULNcY4jwiDWc9eJvLByK0NFSNgl1A.svg"
                  alt="Select study buddy screen wireframe"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Select%20time-XylU1IAlv0Cv02mQC2vUrLBzOUwHpd.svg"
                  alt="Session duration selection screen wireframe"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Notes-5Aeq9pIJVAE02bfJNVyADLZpjxF0e0.svg"
                  alt="Notes workspace screen wireframe"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          <section className="pt-16 mt-12">
            <h2 className="text-lg font-medium text-[#393938] mb-4">DESIGN SOLUTION</h2>

            {/* First Solution */}
            <div className="mb-32">
              <div className="grid grid-cols-2 gap-24 items-center mb-8">
                <div>
                  <h3 className="text-2xl font-medium text-[#393938] mb-4">
                    1. Personalized Onboarding - Select a buddy
                  </h3>
                  <p className="text-[#393938]/80">
                    We wanted the user to feel like they could personalize their workspace by being able to choose their
                    adorable study buddy to keep them company.
                  </p>
                </div>
                <div className="flex justify-end">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop%201440px-DUj1ymzThKBTXYz8JSgMp7Z39Vs8iH.svg"
                    alt="Study buddy selection interface showing cute animal options"
                    className="w-[140%] h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Second Solution */}
            <div className="mb-32">
              <div className="grid grid-cols-2 gap-24 items-center mb-8">
                <div className="flex justify-start">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Time-TYN1jpZ7i9hRQZl4uFkn4y2BpeRUt7.svg"
                    alt="Study session length selection interface"
                    className="w-[140%] h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-[#393938] mb-4">
                    2. Personalized Onboarding - Select length of study session
                  </h3>
                  <p className="text-[#393938]/80">
                    One reason users enjoy using lofi study sessions on youtube is for the structure. Having a timer
                    gives the user structure for when to study and when to take a break.
                  </p>
                </div>
              </div>
            </div>

            {/* Third Solution */}
            <div className="mb-32">
              <div className="grid grid-cols-2 gap-24 items-center mb-8">
                <div>
                  <h3 className="text-2xl font-medium text-[#393938] mb-4">3. Simple Note Design</h3>
                  <p className="text-[#393938]/80 mb-6">
                    Since many Note designs are quite simple, we didn't want to overwhelm the user and just wanted to
                    keep it simple so the user could have a space to be productive.
                  </p>
                  <h3 className="text-2xl font-medium text-[#393938] mb-4">
                    4. Widgets of your study buddy, timer, and lofi playlist
                  </h3>
                  <p className="text-[#393938]/80">
                    We added widgets with a visible timer, study buddy that is animated and moves with them and a lofi
                    playlist. We made them as small widgets so the user can move them accordingly.
                  </p>
                </div>
                <div className="flex justify-end">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop%201440px-kwbMdaJhNPtDAcWAjdrDjzOcMOY8nM.svg"
                    alt="Study interface showing note design and widgets"
                    className="w-[140%] h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Fourth Solution */}
            <div className="mb-32">
              <div className="grid grid-cols-2 gap-24 items-center mb-8">
                <div className="flex justify-start">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chat%20ai-6dI3kcUoh6D9iwWJd7iItTwFX1aVb6.svg"
                    alt="Study Assistant AI interface"
                    className="w-1/2 h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-[#393938] mb-4">5. Study Assistant</h3>
                  <p className="text-[#393938]/80">
                    We added a Study Assistant AI as the local AI. This AI is different because it assists you and helps
                    you produce original thoughts. So instead of writing your paper for you it will actually help you
                    write better. It also outline your notes for you and gives you encouragement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-16 mt-12">
            <h2 className="text-lg font-medium text-[#393938] mb-4">CHECK</h2>
            <h3 className="text-2xl font-medium text-[#393938] mb-8">Presentation and Feedback</h3>

            <p className="text-lg text-[#393938]/80 mb-12">
              Since we couldn't fully build the product due to technical issues, we focused on presenting our concept
              and gathering feedback. We walked judges through our design decisions and user flow.
            </p>
          </section>

          <section className="pt-16 mt-12">
            <h2 className="text-lg font-medium text-[#393938] mb-4">NEXT STEPS</h2>
            <p className="text-lg text-[#393938]/80 mb-12">
              Judges noted areas for improvement, including refining AI interactions and resolving technical
              constraints. Attendees loved the aesthetic and the idea for a focus-friendly AI assistant.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-16">
              <div className="bg-transparent rounded-xl p-6 border-2 border-[#393938]/20">
                <h3 className="text-xl font-medium text-[#393938] mb-4">Integrating API</h3>
                <p className="text-[#393938]/80">
                  We noted areas for improvement, including refining AI interactions and resolving technical constraints
                  that we had during the hackathon.
                </p>
              </div>

              <div className="bg-transparent rounded-xl p-6 border-2 border-[#393938]/20">
                <h3 className="text-xl font-medium text-[#393938] mb-4">Creating a workspace</h3>
                <p className="text-[#393938]/80">
                  We want to work on not only having a notes area but we also want to work on adding workspaces for
                  different teams and projects in the future.
                </p>
              </div>

              <div className="bg-transparent rounded-xl p-6 border-2 border-[#393938]/20">
                <h3 className="text-xl font-medium text-[#393938] mb-4">Animations</h3>
                <p className="text-[#393938]/80">
                  We also want to make our pixel study buddies move so they are working with you.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-medium text-[#393938] mb-4">Received positive feedback</h3>
                <p className="text-lg text-[#393938]/80">
                  Judges and attendees loved the aesthetic and focus-friendly AI assistant.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-[#393938] mb-4">Continuing our Project</h3>
                <p className="text-lg text-[#393938]/80">
                  Since we didn't fully complete our project, my partner and I decided to continue working on our
                  project so we can see it in action and release it to the world.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-16 mt-12">
            <h2 className="text-lg font-medium text-[#393938] mb-4">REFLECTION</h2>
            <div className="space-y-8">
              <div className="bg-transparent rounded-xl p-8 border-2 border-[#393938]/20">
                <h3 className="text-xl font-medium text-[#393938] mb-4">Hackathon Time Constraints</h3>
                <p className="text-[#393938]/80 leading-relaxed">
                  Due to time constraints, we couldn't fully implement the product but established a strong foundation
                  for future iterations. My partner and I both were able to collaborate during 6 hours and create a
                  product. We were able to prioritize and deliver a prototype and visuals to our judges.
                </p>
              </div>

              <div className="bg-transparent rounded-xl p-8 border-2 border-[#393938]/20">
                <h3 className="text-xl font-medium text-[#393938] mb-4">Functionality First</h3>
                <p className="text-[#393938]/80 leading-relaxed">
                  This was a project where we realized we wanted a lot in one app and although the product and project
                  itself is a great idea, I think we first should have focused on creating a fully functional AI
                  Assistant and add our characters, workspace, and music player after we had a fully functioning AI.
                </p>
              </div>

              <div className="bg-transparent rounded-xl p-8 border-2 border-[#393938]/20">
                <h3 className="text-xl font-medium text-[#393938] mb-4">User Testing</h3>
                <p className="text-[#393938]/80 leading-relaxed">
                  I think in order to validate our product in use, we should definitely do some user testing to gather
                  more feedback and validate our product.
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  )
}

