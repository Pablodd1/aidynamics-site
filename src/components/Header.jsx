'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#calculator', label: 'ROI Calculator' },
  { href: '#testimonials', label: 'Results' },
  { href: '/blog', label: 'Blog' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">
            AI
          </div>
          <span className={`font-bold text-lg transition-colors ${scrolled ? 'text-dark' : 'text-white'}`}>
            AIDynamics
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? 'text-gray-700' : 'text-white/80'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm !px-5 !py-2.5">
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-dark' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <div className={`w-6 h-0.5 mt-1.5 transition-all ${scrolled ? 'bg-dark' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 mt-1.5 transition-all ${scrolled ? 'bg-dark' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-1' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-xl">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-700 font-medium py-2"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary text-center block">
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
