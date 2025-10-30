import Hero from './components/Hero';
import Features from './components/Features';
import SignalShowcase from './components/SignalShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Simple top nav */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="font-semibold tracking-tight">EA Neon</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#signals" className="hover:text-gray-900">Signals</a>
            <a href="#" className="inline-flex items-center rounded-full bg-black text-white px-4 py-1.5">Launch App</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <SignalShowcase />
      </main>

      <Footer />
    </div>
  );
}

export default App;
