import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: { email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { email } = body;

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

  try {
    await Promise.all([
      // Confirmation email to subscriber
      resend.emails.send({
        from: 'Coltek Team <onboarding@resend.dev>', // TODO: replace with noreply@sunova-innovation.nl once domain is verified in Resend
        to: email,
        subject: 'Coltek AI Hardware — Subscription Confirmed',
        text: [
          'Thank you for your interest in our upcoming AI Hardware products.',
          "We'll notify you as soon as there are updates.",
          '',
          '— The Coltek Team',
        ].join('\n'),
      }),
      // Notification email to internal team
      resend.emails.send({
        from: 'Coltek Website <onboarding@resend.dev>', // TODO: replace with noreply@sunova-innovation.nl once domain is verified in Resend
        to: 'support@sunova-innovation.nl',
        subject: '[New Subscriber] AI Hardware Interest',
        text: [
          `New email subscription: ${email}`,
          `Subscribed at: ${timestamp}`,
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
