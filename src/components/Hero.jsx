import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:pt-28 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Copy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-200">Futuristic EA + Signals</span>
              <h1 className="font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight">
                Apple‑clean design for your Expert Advisor and TradingView signals
              </h1>
              <p className="text-lg text-gray-600 max-w-prose">
                Launch a modern, trustworthy home for your automated strategies. Interactive 3D hero, crisp typography, and a flow built for conversions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#signals" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-sm transition hover:bg-gray-800">
                Get Started <ArrowRight size={16} />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-medium ring-1 ring-gray-200 transition hover:bg-gray-50">
                Watch Demo
              </a>
            </div>

            <div className="flex items-center gap-6 pt-2 text-sm text-gray-600">
              <div className="inline-flex items-center gap-2"><Shield size={16}/> Secure webhooks</div>
              <div className="inline-flex items-center gap-2"><Zap size={16}/> Millisecond routing</div>
            </div>
          </div>

          {/* Spline Scene */}
          <div className="relative h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] rounded-2xl overflow-hidden ring-1 ring-gray-200">
            <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* subtle gradient overlay that doesn't block interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
