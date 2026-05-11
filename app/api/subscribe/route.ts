import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

type Locale = 'en' | 'de' | 'nl' | 'zh';

const confirmationText: Record<Locale, { subject: string; body: string }> = {
  en: {
    subject: 'Sunova & Coltek AI Hardware — Subscription Confirmed',
    body: [
      'Thank you for your interest in our upcoming AI Hardware products.',
      "We'll notify you as soon as there are updates.",
      '',
      '— The Sunova & Coltek Team',
    ].join('\n'),
  },
  de: {
    subject: 'Sunova & Coltek KI-Hardware — Anmeldung bestätigt',
    body: [
      'Vielen Dank für Ihr Interesse an unseren kommenden KI-Hardware-Produkten.',
      'Wir benachrichtigen Sie, sobald es Neuigkeiten gibt.',
      '',
      '— Das Sunova & Coltek Team',
    ].join('\n'),
  },
  nl: {
    subject: 'Sunova & Coltek AI Hardware — Inschrijving bevestigd',
    body: [
      'Bedankt voor uw interesse in onze aankomende AI Hardware producten.',
      'We sturen u een bericht zodra er updates zijn.',
      '',
      '— Het Sunova & Coltek Team',
    ].join('\n'),
  },
  zh: {
    subject: 'Sunova & Coltek AI硬件 — 订阅确认',
    body: [
      '感谢您对我们即将推出的AI硬件产品的关注。',
      '一旦有最新动态，我们将第一时间通知您。',
      '',
      '— Sunova & Coltek 团队',
    ].join('\n'),
  },
};

export async function POST(req: NextRequest) {
  let body: { email?: string; locale?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { email, locale } = body;
  const lang: Locale = (['en', 'de', 'nl', 'zh'].includes(locale ?? '') ? locale : 'en') as Locale;

  if (!email?.trim() || !isValidEmail(email)) {
    return NextResponse.json(
      { error: 'A valid email address is required.' },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.warn('[subscribe] RESEND_API_KEY not configured — email not sent.');
    return NextResponse.json(
      { error: 'Email service is not configured. Please try again later.' },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const timestamp = new Date().toISOString();
  const { subject, body: emailBody } = confirmationText[lang];

  try {
    await Promise.all([
      // Confirmation email to subscriber (in their language)
      resend.emails.send({
        from: 'Sunova & Coltek Team <no-reply@sunova-innovation.nl>',
        to: email,
        subject,
        text: emailBody,
      }),
      // Notification email to internal team
      resend.emails.send({
        from: 'Sunova & Coltek Website <no-reply@sunova-innovation.nl>',
        to: 'support@sunova-innovation.nl',
        subject: '[New Subscriber] AI Hardware Interest',
        text: [
          `New email subscription: ${email}`,
          `Subscribed at: ${timestamp}`,
          `Language: ${lang}`,
        ].join('\n'),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[subscribe] Resend error:', err);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}
