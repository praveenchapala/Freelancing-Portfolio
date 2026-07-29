import React from 'react';
import { Terminal, ArrowUp, Mail, MessageSquare } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa6';

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="border-t border-zinc-800/80 bg-black pt-16 pb-12 text-zinc-400 relative overflow-hidden">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/[0.02] blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/60">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-white">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-bold text-base tracking-tight text-white">
                PRAVEEN<span className="text-zinc-500 font-mono text-xs ml-1">Ships Production-ready software.</span>
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Engineering high-ROI AI automation systems, self-hosted n8n workflows, autonomous agents, and modern full-stack web applications for startup founders and tech agencies.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational (99.9% Uptime)</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono tracking-widest text-zinc-300 uppercase mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Projects</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Development Process</a></li>
              <li><a href="#why-me" className="hover:text-white transition-colors">Why Work With Me</a></li>
              <li><a href="#stack" className="hover:text-white transition-colors">Tech Stack Matrix</a></li>
              <li><a href="#journey" className="hover:text-white transition-colors">Learning & Open Source</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div>
            <h4 className="text-xs font-mono tracking-widest text-zinc-300 uppercase mb-4">Connect</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://github.com/praveenchapala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://www.linkedin.com/in/chapala-praveen/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:shipwithpraveen@gmail.com"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Direct Email</span>
              </a>
              <a
  href="https://wa.me/9014939196?text=Hi%20Praveen,%20I%20Found%20your%20portfolio%20and%20would%20like%20to%20discuss%20about%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
>
  <MessageSquare className="w-4 h-4" />
  <span>WhatsApp Instant</span>
</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} © 2026 Chapala Praveen. Building AI-powered solutions that help startups automate, scale, and grow..</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
