'use client';

import { useState } from 'react';

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', interest: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const isValid = form.name && form.email && form.interest;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid || loading) return;
    setLoading(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'aidynamics.pro' }),
      });
      setSent(true);
    } catch {
      alert('Something went wrong. Please email us directly at jasmelacosta@gmail.com');
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Start Your AI <span className="gradient-text">Transformation</span>
        </h2>
        <p className="section-subtitle">
          Tell us about your business. We&apos;ll build a custom AI roadmap — free, no obligation.
        </p>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          {sent ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-2">Thank You!</h3>
              <p className="text-gray-600">We&apos;ll review your request and reach out within 24 hours. You can also call us directly.</p>
              <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', company: '', interest: '', message: '' }); }} className="mt-6 text-primary hover:underline text-sm">
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Full Name *" name="name" value={form.name} onChange={handleChange} placeholder="Jasmel Acosta" />
                <Input label="Email *" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jasmel@company.com" />
                <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (305) 555-0123" />
                <Input label="Company" name="company" value={form.company} onChange={handleChange} placeholder="Your Company LLC" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">I&apos;m interested in *</label>
                <select name="interest" value={form.interest} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 text-gray-700">
                  <option value="">Select...</option>
                  <option value="medical-scribe">Medical AI Scribe</option>
                  <option value="ai-agents">Custom AI Agents</option>
                  <option value="legal-ai">Legal AI Automation</option>
                  <option value="llm-systems">Custom LLM Systems</option>
                  <option value="phone-agent">AI Phone Agent</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your needs</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none text-gray-700" placeholder="What are you looking to automate? What industry are you in? Timeline?" />
              </div>

              <button type="submit" disabled={!isValid || loading} className="btn-primary w-full text-lg">
                {loading ? 'Sending...' : 'Get My Free AI Roadmap'}
              </button>

              <p className="text-center text-xs text-gray-400">
                We respect your privacy. No spam, no sharing of your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Input({ label, name, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 text-gray-700"
      />
    </div>
  );
}
