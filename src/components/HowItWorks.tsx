export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            One event changes everything
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Define the single action that proves your customer is getting value.
            We'll tell you who's alive and who's drifting away.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Step
            number={1}
            title="Define your heartbeat"
            description="What must a customer do regularly to get value? Project created? Campaign sent? Report generated?"
            example={`"campaign_sent"`}
          />
          <Step
            number={2}
            title="Track it"
            description="One line of code. Every time the action happens, we record the pulse."
            example={`track("acme_corp", "user@acme.com")`}
          />
          <Step
            number={3}
            title="Know instantly"
            description="Every account gets a health status. No analysis needed. The pulse tells you everything."
            example={`{ status: "alive", days: 0 }`}
          />
        </div>

        {/* The Insight */}
        <div className="mt-20 bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6">
              <span className="opacity-50">&#x275D;</span>
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
              As long as the heartbeat keeps happening, the account is healthy.
              When it stops, you know before anyone else.
            </blockquote>
            <p className="text-pulse-100 text-lg">
              This is product observability, not analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ number, title, description, example }: { number: number; title: string; description: string; example: string }) {
  return (
    <div className="relative">
      <div className="bg-pulse-50 rounded-2xl p-8 h-full">
        <div className="w-12 h-12 bg-pulse-500 text-white rounded-xl flex items-center justify-center text-xl font-bold mb-6">
          {number}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <code className="inline-block bg-gray-900 text-pulse-400 px-4 py-2 rounded-lg text-sm font-mono">
          {example}
        </code>
      </div>
    </div>
  );
}
