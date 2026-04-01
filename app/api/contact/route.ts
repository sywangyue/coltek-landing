import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple in-memory rate limiter: same IP max 3 requests per minute
const rateMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 3) return true;
  entry.count++;
  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a moment before trying again.' },
      { status: 429 }
    );
  }

  // Parse body
  let body: {
    name?: string;
    company?: string;
    email?: string;
    interests?: string[];
    message?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { name, company, email, interests = [], message } = body;

  // Server-side validation
  if (!name?.trim()) {
    return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
  }
  if (!company?.trim()) {
    return NextResponse.json({ error: 'Company is required.' }, { status: 400 });
  }
  if (!email?.trim() || !isValidEmail(email)) {
    return NextResponse.json(
      { error: 'A valid email address is required.' },
      { status: 400 }
    );
  }

  // Graceful degradation when RESEND_API_KEY is not configured
  if (!process.env.RESEND_API_KEY) {
    console.warn('[contact] RESEND_API_KEY not configured — email not sent.');
    return NextResponse.json(
      { error: 'Email service is not configured. Please contact us directly at support@sunova-innovation.nl' },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const text = [
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `Interested in: ${interests.length ? interests.join(', ') : '—'}`,
    '',
    'Message:',
    message?.trim() || '—',
    '',
    '---',
    'Sent from sunova-innovation.nl contact form',
  ].join('\n');

  try {
    await resend.emails.send({
      from: 'Coltek Website <onboarding@resend.dev>', // TODO: replace with noreply@sunova-innovation.nl once domain is verified in Resend
      to: 'support@sunova-innovation.nl',
      subject: `[Coltek Website Inquiry] from ${name} - ${company}`,
      text,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] Resend error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
