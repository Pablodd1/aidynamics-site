import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are AIDynamics AI Assistant — the AI sales & support agent for AIDynamics, a Miami-based AI development agency.

YOUR KNOWLEDGE BASE:
- AIDynamics builds HIPAA-compliant medical scribe AI, custom LLM systems, AI agents, legal AI automation, and AI phone agents
- CEO/Founder: Jasmel Acosta
- Based in Miami, Florida. Bilingual (English + Spanish)
- Medical AI Scribe: ambient listening, auto-generates SOAP notes, ICD-10 codes, CPT codes. Cuts documentation time by 80%
- Custom AI Agents: autonomous multi-agent systems for business workflow automation
- Legal AI: immigration law RAG system with eCFR Title 8, country conditions, BIA precedent. Cuts research time by 70%
- AI Phone Agents: voice AI for inbound calls, appointment booking, lead qualification
- Typical project timeline: 2-6 weeks from concept to deployment
- Pricing: project-based ($5K-$50K) or subscription ($500-$5K/mo)
- Free initial consultation and custom ROI analysis
- Contact: jasmelacosta@gmail.com
- All systems include 30-day optimization period, staff training, and ongoing support`;

export async function POST(request) {
  try {
    const { message, history = [] } = await request.json();
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ reply: 'Please send a message.' }, { status: 400 });
    }

    // Try OpenRouter (free models available)
    const openRouterKey = process.env.OPENROUTER_API_KEY;
    if (openRouterKey) {
      try {
        const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openRouterKey}`,
            'HTTP-Referer': 'https://www.aidynamics.pro',
            'X-Title': 'AIDynamics Chat',
          },
          body: JSON.stringify({
            model: 'meta-llama/llama-3.3-70b-instruct:free',
            messages: [
              { role: 'system', content: SYSTEM_PROMPT },
              ...history,
              { role: 'user', content: message },
            ],
            max_tokens: 600,
            temperature: 0.7,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          const reply = data?.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({ reply: reply.trim() });
          }
        }
      } catch {
        // Fall through to fallback
      }
    }

    // Try local Ollama as fallback
    try {
      const res = await fetch('http://localhost:11434/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'qwen3.5:4b-q4_K_M',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...history,
            { role: 'user', content: message },
          ],
          stream: false,
        }),
        signal: AbortSignal.timeout(15000),
      });

      if (res.ok) {
        const data = await res.json();
        const reply = data?.message?.content;
        if (reply) return NextResponse.json({ reply: reply.trim() });
      }
    } catch {
      // Fall through
    }

    // Ultimate fallback
    return NextResponse.json({
      reply: `Thanks for your message! I'd love to help you with that. Please reach out directly to **jasmelacosta@gmail.com** or fill out the contact form below — Jasmel will get back to you within 24 hours.`,
    });
  } catch {
    return NextResponse.json({ reply: 'Something went wrong. Please email jasmelacosta@gmail.com directly.' }, { status: 500 });
  }
}
