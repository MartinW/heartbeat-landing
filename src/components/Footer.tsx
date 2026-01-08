export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
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
            <span className="font-semibold text-xl text-white">Heartbeat</span>
          </div>

          <nav className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors text-sm">
              Documentation
            </a>
            <a href="#" className="hover:text-white transition-colors text-sm">
              Changelog
            </a>
            <a href="#" className="hover:text-white transition-colors text-sm">
              Status
            </a>
            <a href="#" className="hover:text-white transition-colors text-sm">
              Twitter
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Heartbeat Analytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
