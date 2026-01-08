export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-pulse-50 text-pulse-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="pulse-animation absolute inline-flex h-full w-full rounded-full bg-pulse-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pulse-500"></span>
            </span>
            Product health intelligence
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Know if your customers are{' '}
            <span className="gradient-text">alive</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Track one critical event per account. Predict churn before revenue tells you they're gone.
            No dashboards to check. No complex funnels. Just a pulse.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#get-started"
              className="bg-pulse-500 hover:bg-pulse-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg shadow-pulse-500/25"
            >
              Start tracking for free
            </a>
            <a
              href="#how-it-works"
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Health Status Preview */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-gray-400 text-sm font-mono">heartbeat-dashboard</span>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <StatusCard status="alive" count={847} color="green" />
              <StatusCard status="weak" count={123} color="yellow" />
              <StatusCard status="at risk" count={45} color="orange" />
              <StatusCard status="dead" count={12} color="red" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusCard({ status, count, color }: { status: string; count: number; color: string }) {
  const colors = {
    green: 'from-green-500/20 to-green-500/5 border-green-500/30 text-green-400',
    yellow: 'from-yellow-500/20 to-yellow-500/5 border-yellow-500/30 text-yellow-400',
    orange: 'from-orange-500/20 to-orange-500/5 border-orange-500/30 text-orange-400',
    red: 'from-red-500/20 to-red-500/5 border-red-500/30 text-red-400',
  };

  return (
    <div className={`bg-gradient-to-b ${colors[color as keyof typeof colors]} border rounded-xl p-4`}>
      <div className="text-3xl font-bold text-white mb-1">{count}</div>
      <div className={`text-sm font-medium uppercase tracking-wide ${colors[color as keyof typeof colors].split(' ').pop()}`}>
        {status}
      </div>
    </div>
  );
}
