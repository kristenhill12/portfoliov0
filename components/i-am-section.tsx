export default function IAmSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-32">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#393938]">I am...</h2>
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          <div>
            <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
              <span className="text-xs sm:text-sm text-[#393938]/60 w-4 sm:w-6">01</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#393938]">Creatively Resourceful</h3>
            </div>
            <p className="text-base sm:text-lg text-[#393938]/70 leading-relaxed border-b border-[#393938]/20 pb-8 sm:pb-12 md:pb-16 ml-6 sm:ml-10">
              I have been referred to as &quot;a human library&quot; due to my ability to find and save resources for
              all kinds of projects, whether its for research, UI Design, collaboration, etc.{" "}
              <span className="font-bold text-[#393938]">
                I can always find a tool or article to help improve success in projects.
              </span>
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
              <span className="text-xs sm:text-sm text-[#393938]/60 w-4 sm:w-6">02</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#393938]">Contagiously Positive</h3>
            </div>
            <p className="text-base sm:text-lg text-[#393938]/70 leading-relaxed border-b border-[#393938]/20 pb-8 sm:pb-12 md:pb-16 ml-6 sm:ml-10">
              <span className="font-bold text-[#393938]">
                I am known for being incredibly encouraging even during high pressure to all kinds of collaborators.
              </span>{" "}
              I always try my best to encourage and focus on the positives in order to move forward.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
              <span className="text-xs sm:text-sm text-[#393938]/60 w-4 sm:w-6">03</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#393938]">Ongoing Learner</h3>
            </div>
            <p className="text-base sm:text-lg text-[#393938]/70 leading-relaxed ml-6 sm:ml-10">
              <span className="font-bold text-[#393938]">I love love love to learn.</span> I wish there was more time in
              each day so I could fit in all the courses and skills I wish to learn. Its what I love most about design,
              the longer I design, the more I realize there is so much to learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

