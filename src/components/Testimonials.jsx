const TESTIMONIALS = [
  {
    quote: 'AIDynamics built us an AI medical scribe that cut documentation time by 80%. Our doctors see more patients and go home earlier. It\'s HIPAA-compliant and integrates with our existing EMR.',
    name: 'Dr. Jeffrey Draesel Jr., D.C.',
    role: 'Owner, Innovate Medical Wellness',
    result: '80% faster documentation',
  },
  {
    quote: 'The custom LLM system they built for our immigration practice researches country conditions and drafts asylum briefs in minutes instead of days. It\'s like having a associate who never sleeps.',
    name: 'Maria Santos, Esq.',
    role: 'Immigration Attorney, Miami',
    result: '70% faster research',
  },
  {
    quote: 'Their AI phone agent handles 60% of our inbound calls — booking appointments, answering billing questions, even in Spanish. Our front desk can focus on complex patient needs.',
    name: 'Carlos Mendez',
    role: 'Clinic Director, Miami Beach',
    result: '60% call automation',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Real <span className="gradient-text">Results</span>
        </h2>
        <p className="section-subtitle">
          See how Miami businesses are transforming with AIDynamics custom AI systems.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-dark text-sm">{t.name}</div>
                <div className="text-gray-500 text-xs">{t.role}</div>
              </div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {t.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
