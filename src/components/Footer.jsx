import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900">EA Neon</p>
          <p className="text-sm text-gray-600">Clean, credible, and fast. Built for automated trading.</p>
        </div>
        <div className="flex items-center gap-3">
          <a className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-900 hover:bg-gray-50" href="#">
            <Github size={16}/> GitHub
          </a>
          <a className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1.5 text-sm text-white" href="#">
            <Mail size={16}/> Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
