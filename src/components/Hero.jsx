'use client';

import { TypeAnimation } from './TypeAnimation';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/70 text-sm font-medium">AI-Powered Business Automation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Miami&apos;s Premier{' '}
              <span className="gradient-text">AI Development</span> Agency
            </h1>

            <div className="text-xl text-white/70">
              We build{' '}
              <span className="text-white font-semibold">
                <TypeAnimation strings={[
                  'HIPAA-Compliant Medical Scribes',
                  'Custom LLM & Agent Systems',
                  'AI-Powered Legal Automation',
                  'Intelligent Business Workflows',
                  'Bilingual AI Solutions (EN/ES)',
                ]} />
              </span>
            </div>

            <p className="text-white/60 text-lg leading-relaxed">
              From concept to deployed AI system. We build custom AI agents, medical scribes, 
              and automation that cuts operational costs by <strong className="text-white">20–40% in 90 days</strong>.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#calculator" className="btn-primary text-lg">
                Calculate Your ROI
              </a>
              <a href="#contact" className="btn-outline !border-white/30 !text-white hover:!bg-white/10 text-lg">
                Book a Free Consultation
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                HIPAA Compliant
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Miami-Based
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Bilingual (EN/ES)
              </div>
            </div>
          </div>

          {/* Right - visual */}
          <div className="hidden md:flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 animate-pulse-glow" />
              <div className="absolute inset-4 rounded-full border border-white/10 backdrop-blur-sm bg-white/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <div className="text-white text-3xl font-bold">50+</div>
                  <div className="text-white/60 text-sm mt-1">AI Systems Deployed</div>
                </div>
              </div>
              {/* Orbiting dots */}
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary-light rounded-full animate-pulse" style={{ animationDuration: '1.5s' }} />
              <div className="absolute top-1/3 -right-2 w-2.5 h-2.5 bg-accent rounded-full animate-pulse" style={{ animationDuration: '2.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
