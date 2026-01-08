export function Problem() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Most analytics tell you what happened.
              <br />
              <span className="text-gray-400">Not if your customer is still there.</span>
            </h2>

            <div className="space-y-4">
              <ProblemItem
                icon="chart"
                title="Dashboard overload"
                description="Dozens of charts, metrics, and funnels that nobody checks regularly"
              />
              <ProblemItem
                icon="clock"
                title="Lagging indicators"
                description="Revenue drops tell you about churn after it's already happened"
              />
              <ProblemItem
                icon="question"
                title="No clear signal"
                description="Is this account healthy? Nobody can answer without digging through data"
              />
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-gray-200 mb-2">?</div>
                <div className="text-gray-500">Is Acme Corp still using your product?</div>
              </div>

              <div className="space-y-3">
                <MetricRow label="Last login" value="3 days ago" status="unknown" />
                <MetricRow label="Page views (30d)" value="247" status="unknown" />
                <MetricRow label="API calls (30d)" value="1,842" status="unknown" />
                <MetricRow label="Support tickets" value="0" status="unknown" />
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
                <span className="text-gray-500 text-sm">
                  All these metrics, but you still can't answer the question.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  const icons = {
    chart: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
    clock: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    question: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  };

  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icons[icon as keyof typeof icons]}
        </svg>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function MetricRow({ label, value, status }: { label: string; value: string; status: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-100">
      <span className="text-gray-600 text-sm">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-gray-900 font-medium text-sm">{value}</span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
      </div>
    </div>
  );
}
