import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, interest, message, source } = body;

    if (!name || !email || !interest) {
      return NextResponse.json({ error: 'Name, email, and interest are required' }, { status: 400 });
    }

    // Log lead to console (server-side)
    console.log('=== NEW LEAD ===');
    console.log(JSON.stringify({ name, email, phone, company, interest, message, source, timestamp: new Date().toISOString() }));
    console.log('===============');

    // Try to send Telegram notification
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      const text = `🔔 NEW LEAD from aidynamics.pro\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || '—'}\nCompany: ${company || '—'}\nInterest: ${interest}\nMessage: ${message || '—'}\nSource: ${source || 'aidynamics.pro'}`;
      
      try {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
        });
      } catch {
        console.error('Telegram notification failed');
      }
    }

    // Try Brevo API for email notification
    const brevoKey = process.env.BREVO_API_KEY;
    if (brevoKey) {
      try {
        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: { 'api-key': brevoKey, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: [{ email: 'jasmelacosta@gmail.com', name: 'Jasmel Acosta' }],
            subject: `New Lead: ${name} — ${interest}`,
            htmlContent: `<h2>New Lead from aidynamics.pro</h2>
              <table><tr><td><strong>Name:</strong></td><td>${name}</td></tr>
              <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
              <tr><td><strong>Phone:</strong></td><td>${phone || '—'}</td></tr>
              <tr><td><strong>Company:</strong></td><td>${company || '—'}</td></tr>
              <tr><td><strong>Interest:</strong></td><td>${interest}</td></tr>
              <tr><td><strong>Message:</strong></td><td>${message || '—'}</td></tr></table>`,
            sender: { email: 'jasmel@medicalbillingmb.com', name: 'AIDynamics Website' },
          }),
        });
      } catch {
        console.error('Brevo notification failed');
      }
    }

    return NextResponse.json({ success: true, message: 'Lead captured successfully' });
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
