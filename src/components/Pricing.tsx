export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600">
            Pay based on tracked accounts. Not events, not seats.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            name="Starter"
            price="Free"
            description="For early-stage products"
            features={[
              'Up to 100 accounts',
              '1 heartbeat event',
              '30-day retention',
              'Basic dashboard',
              'TypeScript SDK',
            ]}
            cta="Start free"
            highlighted={false}
          />
          <PricingCard
            name="Growth"
            price="$49"
            period="/month"
            description="For scaling products"
            features={[
              'Up to 1,000 accounts',
              'Unlimited heartbeat events',
              '1-year retention',
              'Expansion signals',
              'All SDKs',
              'Slack alerts',
              'API access',
            ]}
            cta="Start trial"
            highlighted={true}
          />
          <PricingCard
            name="Scale"
            price="$199"
            period="/month"
            description="For larger teams"
            features={[
              'Up to 10,000 accounts',
              'Unlimited everything',
              'Unlimited retention',
              'Custom integrations',
              'Priority support',
              'SSO & SAML',
              'SLA guarantee',
            ]}
            cta="Contact sales"
            highlighted={false}
          />
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

function PricingCard({ name, price, period, description, features, cta, highlighted }: PricingCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 ${
        highlighted
          ? 'bg-gray-900 text-white ring-4 ring-pulse-500 scale-105'
          : 'bg-white border border-gray-200'
      }`}
    >
      {highlighted && (
        <div className="text-pulse-400 text-sm font-semibold mb-4 uppercase tracking-wide">
          Most popular
        </div>
      )}

      <h3 className={`text-xl font-bold ${highlighted ? 'text-white' : 'text-gray-900'}`}>
        {name}
      </h3>
      <p className={`text-sm mt-1 ${highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
        {description}
      </p>

      <div className="mt-6 mb-8">
        <span className={`text-4xl font-bold ${highlighted ? 'text-white' : 'text-gray-900'}`}>
          {price}
        </span>
        {period && (
          <span className={highlighted ? 'text-gray-400' : 'text-gray-500'}>{period}</span>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <svg
              className={`w-5 h-5 flex-shrink-0 ${highlighted ? 'text-pulse-400' : 'text-pulse-500'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className={`text-sm ${highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#get-started"
        className={`block w-full text-center py-3 rounded-xl font-semibold transition-colors ${
          highlighted
            ? 'bg-pulse-500 hover:bg-pulse-600 text-white'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}
