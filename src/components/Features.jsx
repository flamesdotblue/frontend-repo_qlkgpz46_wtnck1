import { Bot, LineChart, Shield, Zap } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: Bot,
      title: 'Expert Advisor Ready',
      desc: 'Clean architecture for your MT4/MT5 strategies with intuitive onboarding.',
    },
    {
      icon: LineChart,
      title: 'TradingView Signals',
      desc: 'Webhook-first design. Route alerts to your EA with robust validation.',
    },
    {
      icon: Shield,
      title: 'Secure By Default',
      desc: 'API keys, signatures and IP allowlist to keep your flows protected.',
    },
    {
      icon: Zap,
      title: 'Low Latency',
      desc: 'Optimized for speed so your entries hit the market on time.',
    },
  ];

  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Built for precision and trust</h2>
          <p className="mt-3 text-gray-600">Everything you need to run reliable automated trading.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-900">
                <Icon size={18} />
              </div>
              <h3 className="font-medium">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
