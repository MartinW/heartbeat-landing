export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple concept. Powerful insights.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            One heartbeat event unlocks everything you need to understand account health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon="heart"
            title="Health Classification"
            description="Every account is automatically classified: alive, weak, at risk, or dead. No manual analysis needed."
          />
          <Feature
            icon="trending"
            title="Expansion Signals"
            description="Detect accounts with increasing activity and more users. Perfect timing for upsell conversations."
          />
          <Feature
            icon="bell"
            title="Silence Alerts"
            description="Get notified when active accounts go quiet. Reach out before they become a churn statistic."
          />
          <Feature
            icon="users"
            title="Actor Tracking"
            description="See how many users are active per account. Single-user accounts are riskier than teams."
          />
          <Feature
            icon="chart"
            title="Pulse Trends"
            description="Track heartbeat frequency over time. Spot seasonal patterns and engagement trends."
          />
          <Feature
            icon="zap"
            title="Real-time Updates"
            description="Health status updates within seconds of receiving events. No batch processing delays."
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, description }: { icon: string; title: string; description: string }) {
  const icons = {
    heart: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
    trending: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    ),
    bell: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    ),
    users: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    ),
    chart: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
    zap: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center mb-4">
        <svg className="w-6 h-6 text-pulse-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icons[icon as keyof typeof icons]}
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
