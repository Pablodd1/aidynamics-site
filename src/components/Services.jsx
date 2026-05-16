const SERVICES = [
  {
    icon: '🏥',
    title: 'Medical AI Scribe',
    desc: 'HIPAA-compliant ambient listening AI that automatically generates SOAP notes, ICD-10 codes, and billing documents in real-time. Cuts documentation time by 80%.',
    features: ['Real-time transcription', 'ICD-10 auto-coding', 'EMR integration', 'Bilingual (EN/ES)'],
  },
  {
    icon: '🤖',
    title: 'Custom AI Agents',
    desc: 'Autonomous AI agents that research, decide, and act — from lead generation to full business workflow automation. Deploy in days, not months.',
    features: ['Multi-agent orchestration', 'RAG knowledge bases', 'Automated workflows', '24/7 operation'],
  },
  {
    icon: '⚖️',
    title: 'Legal AI Automation',
    desc: 'AI-powered legal research, document drafting, and case analysis for immigration and general practice attorneys. Cuts research time by 70%.',
    features: ['eCFR Title 8 mastery', 'Country conditions research', 'Brief/Motion drafting', 'FOIA automation'],
  },
  {
    icon: '🔗',
    title: 'Custom LLM Systems',
    desc: 'Fine-tuned language models trained on YOUR data. Private, secure, and purpose-built for your industry — healthcare, legal, or B2B.',
    features: ['Private deployment', 'Domain-specific RAG', 'API-ready endpoints', 'Ongoing fine-tuning'],
  },
  {
    icon: '📊',
    title: 'Business Intelligence AI',
    desc: 'AI that analyzes your business data, identifies patterns, and delivers actionable insights. Predictive analytics for revenue optimization.',
    features: ['Data pipeline setup', 'Custom dashboards', 'Predictive models', 'Automated reporting'],
  },
  {
    icon: '📞',
    title: 'AI Phone Agents',
    desc: 'Voice AI that handles inbound calls, qualifies leads, books appointments, and answers client questions in English and Spanish.',
    features: ['Natural conversation', 'Appointment booking', 'Lead qualification', 'Bilingual support'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          What We <span className="gradient-text">Build</span>
        </h2>
        <p className="section-subtitle">
          End-to-end AI systems deployed for Miami businesses. From concept to production — with no lock-in, full data ownership.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">{s.title}</h3>
              <p className="text-gray-600 mb-5 leading-relaxed text-sm">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
