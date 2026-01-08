export function CTA() {
  return (
    <section id="get-started" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start knowing if your customers are alive
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Set up in 5 minutes. No credit card required.
            Free for up to 100 accounts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-pulse-500 hover:bg-pulse-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              Get started for free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
            >
              Book a demo
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-pulse-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">5 minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-pulse-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-pulse-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
