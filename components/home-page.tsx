export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <div className="w-8">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0L20 12L32 16L20 20L16 32L12 20L0 16L12 12L16 0Z" fill="#1B4B36" />
            </svg>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Work
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Resume
            </a>
          </div>
        </nav>

        <section className="mb-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hi there, I&apos;m Kristen Hill.</h1>
          <p className="text-xl text-gray-600">
            A UX Designer, passionate about enhancing the user experience through simple solutions.
          </p>
        </section>

        {/* Rest of the homepage content would go here */}
      </div>
    </main>
  )
}

