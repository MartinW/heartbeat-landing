export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <svg
              className="w-8 h-8 text-pulse-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="font-semibold text-xl text-gray-900">Heartbeat</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              How it works
            </a>
            <a href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Pricing
            </a>
            <a
              href="#get-started"
              className="bg-pulse-500 hover:bg-pulse-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
