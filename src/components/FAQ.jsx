const FAQS = [
  {
    q: 'What industries does AIDynamics specialize in?',
    a: 'We specialize in healthcare (HIPAA-compliant AI, medical scribe automation), legal services (immigration law AI, document automation), B2B automation, and Miami-based businesses requiring on-site AI consulting and deployment. We work in both English and Spanish.',
  },
  {
    q: 'How much can AI automation reduce my operational costs?',
    a: 'Our clients typically see 20-40% cost reduction within the first 90 days, depending on current manual process volume and AI readiness. Use our interactive ROI calculator above for a customized estimate based on your team size.',
  },
  {
    q: 'Is AIDynamics HIPAA compliant?',
    a: 'Yes. We build HIPAA-compliant AI systems with end-to-end encryption, audit trails, Business Associate Agreements (BAAs), and EMR integration. Our medical scribe AI is specifically designed for healthcare workflows including ICD-10 coding and revenue cycle management.',
  },
  {
    q: 'Do you offer bilingual AI solutions?',
    a: 'Yes. AIDynamics provides AI systems in both English and Spanish, serving Miami\'s diverse business community. Our medical scribe and customer service AI support bilingual documentation and real-time communication.',
  },
  {
    q: 'What is the typical timeline from idea to deployed AI?',
    a: 'Most projects go from concept to production in 2-6 weeks. Simple automation workflows can deploy in days. Complex multi-agent systems like medical scribes typically take 4-6 weeks including HIPAA compliance validation, EMR integration, and staff training.',
  },
  {
    q: 'Do I need to have my data ready?',
    a: 'No. We help you prepare your data, clean it, structure it for AI training, and build a secure knowledge base. Many clients start with raw documents, PDFs, or spreadsheets — we handle the transformation.',
  },
  {
    q: 'What happens after the AI system is deployed?',
    a: 'We provide ongoing monitoring, fine-tuning, and support. All systems include a 30-day optimization period where we refine accuracy based on real usage. We also train your team and provide documentation.',
  },
  {
    q: 'How is pricing structured?',
    a: 'We offer project-based pricing for custom builds (typically $5K-$50K depending on complexity) and subscription models for ongoing AI services ($500-$5K/mo). Every project starts with a free consultation and custom proposal.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <p className="section-subtitle">
          Everything you need to know about working with AIDynamics.
        </p>

        <div className="space-y-4">
          {FAQS.map((item, i) => (
            <details key={i} className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none">
                <span className="font-medium text-dark pr-4 text-sm md:text-base">{item.q}</span>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 text-sm leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        {/* Schema.org FAQ structured data (hidden) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQS.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
