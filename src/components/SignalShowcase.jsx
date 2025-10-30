import { CheckCircle2, Copy, Link2, Activity } from 'lucide-react';
import { useState } from 'react';

export default function SignalShowcase() {
  const [copied, setCopied] = useState(false);
  const webhook = 'https://api.yourdomain.com/signals/tradingview?key=YOUR_API_KEY';
  const payload = `{
  "symbol": "XAUUSD",
  "side": "buy",
  "strategy": "EA-Neon",
  "timeframe": "5m",
  "price": 2371.52,
  "risk": 0.5,
  "ts": "{{time}}"
}`;

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const recent = [
    { id: 1, symbol: 'BTCUSD', side: 'buy', tf: '1h', status: 'Routed' },
    { id: 2, symbol: 'EURUSD', side: 'sell', tf: '15m', status: 'Routed' },
    { id: 3, symbol: 'NAS100', side: 'buy', tf: '5m', status: 'Routed' },
  ];

  return (
    <section id="signals" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">TradingView in. Orders out.</h2>
          <p className="mt-3 text-gray-600">Connect alerts in seconds with a clean, production-ready format.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Webhook URL */}
          <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-900">
              <Link2 size={16} /> Webhook URL
            </div>
            <div className="group flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
              <code className="text-sm text-gray-900 truncate">{webhook}</code>
              <button onClick={() => copy(webhook)} className="ml-3 inline-flex items-center gap-1 rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white">
                {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />} {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-500">Paste into TradingView alert > Webhook URL.</p>
          </div>

          {/* JSON Payload */}
          <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 lg:col-span-2">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-900">
              <Activity size={16} /> JSON Payload
            </div>
            <pre className="rounded-xl bg-gray-900 p-4 text-gray-100 overflow-auto text-sm"><code>{payload}</code></pre>
            <p className="mt-3 text-xs text-gray-500">Customize fields to match your EA. We validate, sign, and route instantly.</p>
          </div>
        </div>

        {/* Recent activity */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {recent.map((r) => (
            <div key={r.id} className="rounded-xl bg-white p-4 ring-1 ring-gray-200">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">{r.symbol} · {r.tf}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${r.side === 'buy' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{r.side}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">Status: {r.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
