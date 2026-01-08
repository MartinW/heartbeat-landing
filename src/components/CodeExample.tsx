import { useState } from 'react';

export function CodeExample() {
  const [activeTab, setActiveTab] = useState<'typescript' | 'swift'>('typescript');

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            One line to integrate
          </h2>
          <p className="text-xl text-gray-600">
            SDKs for TypeScript, Swift, and more coming soon.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveTab('typescript')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'typescript'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              TypeScript
            </button>
            <button
              onClick={() => setActiveTab('swift')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'swift'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Swift
            </button>
          </div>

          {/* Code Block */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-gray-400 text-sm font-mono">
                {activeTab === 'typescript' ? 'app.ts' : 'App.swift'}
              </span>
            </div>

            <pre className="p-6 overflow-x-auto">
              <code className="text-sm font-mono">
                {activeTab === 'typescript' ? (
                  <TypeScriptCode />
                ) : (
                  <SwiftCode />
                )}
              </code>
            </pre>
          </div>

          {/* Install command */}
          <div className="mt-6 bg-gray-100 rounded-lg p-4 font-mono text-sm">
            <span className="text-gray-500">$ </span>
            <span className="text-gray-900">
              {activeTab === 'typescript'
                ? 'npm install @heartbeat-analytics/sdk'
                : 'swift package add HeartbeatAnalytics'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TypeScriptCode() {
  return (
    <>
      <Line comment="// Initialize once at startup" />
      <Line>
        <Keyword>import</Keyword> {'{ init, track }'} <Keyword>from</Keyword> <String>'@heartbeat-analytics/sdk'</String>;
      </Line>
      <Line empty />
      <Line>
        <Function>init</Function>(<String>'YOUR_TOKEN'</String>, <String>'campaign_sent'</String>);
      </Line>
      <Line empty />
      <Line comment="// Track when the critical action happens" />
      <Line>
        <Function>track</Function>(<String>'acme_corp'</String>, <String>'user@acme.com'</String>);
      </Line>
      <Line empty />
      <Line comment="// That's it. Account health updates automatically." />
    </>
  );
}

function SwiftCode() {
  return (
    <>
      <Line comment="// Initialize once at startup" />
      <Line>
        <Keyword>import</Keyword> HeartbeatAnalytics
      </Line>
      <Line empty />
      <Line>
        <Keyword>await</Keyword> HeartbeatClient.shared.<Function>initialize</Function>(
      </Line>
      <Line>
        {'    '}config: <Function>HeartbeatConfig</Function>(
      </Line>
      <Line>
        {'        '}token: <String>"YOUR_TOKEN"</String>,
      </Line>
      <Line>
        {'        '}heartbeatEvent: <String>"campaign_sent"</String>
      </Line>
      <Line>{'    '})</Line>
      <Line>)</Line>
      <Line empty />
      <Line comment="// Track when the critical action happens" />
      <Line>
        <Keyword>await</Keyword> HeartbeatClient.shared.<Function>track</Function>(
      </Line>
      <Line>
        {'    '}accountId: <String>"acme_corp"</String>,
      </Line>
      <Line>
        {'    '}actor: <String>"user@acme.com"</String>
      </Line>
      <Line>)</Line>
    </>
  );
}

function Line({ children, comment, empty }: { children?: React.ReactNode; comment?: string; empty?: boolean }) {
  if (empty) return <div className="h-4"></div>;
  if (comment) return <div className="text-gray-500">{comment}</div>;
  return <div className="text-gray-100">{children}</div>;
}

function Keyword({ children }: { children: React.ReactNode }) {
  return <span className="text-purple-400">{children}</span>;
}

function Function({ children }: { children: React.ReactNode }) {
  return <span className="text-yellow-300">{children}</span>;
}

function String({ children }: { children: React.ReactNode }) {
  return <span className="text-green-400">{children}</span>;
}
