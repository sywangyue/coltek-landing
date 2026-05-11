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

type Locale = 'en' | 'de' | 'nl' | 'zh';

// Labels per locale for display in the notification email (always Chinese)
const interestLabels: Record<string, Record<Locale, string>> = {
  spatial: { en: 'Spatial Intelligence', de: 'Räumliche Intelligenz', nl: 'Ruimtelijke Intelligentie', zh: '空间智能' },
  airspace: { en: 'Spatial Security', de: 'Räumliche Sicherheit', nl: 'Ruimtelijke Beveiliging', zh: '空间安防' },
  ai: { en: 'AI Hardware', de: 'KI-Hardware', nl: 'AI Hardware', zh: 'AI硬件' },
  other: { en: 'Other / General Inquiry', de: 'Sonstiges', nl: 'Anders', zh: '其他 / 一般咨询' },
};

const sourceLabels: Record<string, Record<Locale, string>> = {
  exhibition: { en: 'Exhibition', de: 'Messe', nl: 'Beurs', zh: '展会' },
  socialMedia: { en: 'Social Media', de: 'Soziale Medien', nl: 'Sociale Media', zh: '社交媒体' },
  searchEngine: { en: 'Search Engine', de: 'Suchmaschine', nl: 'Zoekmachine', zh: '搜索引擎' },
  referral: { en: 'Referral', de: 'Empfehlung', nl: 'Aanbeveling', zh: '朋友推荐' },
  partner: { en: 'Partner', de: 'Partner', nl: 'Partner', zh: '合作伙伴 / 经销商' },
  other: { en: 'Other', de: 'Sonstiges', nl: 'Anders', zh: '其他' },
};

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a moment before trying again.' },
      { status: 429 }
    );
  }

  let body: {
    name?: string;
    company?: string;
    email?: string;
    interests?: string[];
    source?: string;
    message?: string;
    locale?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { name, company, email, interests = [], source, message, locale } = body;
  const lang: Locale = (['en', 'de', 'nl', 'zh'].includes(locale ?? '') ? locale : 'en') as Locale;

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

  if (!process.env.RESEND_API_KEY) {
    console.warn('[contact] RESEND_API_KEY not configured — email not sent.');
    return NextResponse.json(
      { error: 'Email service is not configured. Please contact us directly at support@sunova-innovation.nl' },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  // Internal notification email is always in Chinese
  const interestDisplay = interests.map((k) => interestLabels[k]?.[lang] ?? k);
  const sourceDisplay = source ? (sourceLabels[source]?.[lang] ?? source) : '—';

  const text = [
    `姓名: ${name}`,
    `公司: ${company}`,
    `邮箱: ${email}`,
    `感兴趣的领域: ${interestDisplay.length ? interestDisplay.join('、') : '—'}`,
    `了解渠道: ${sourceDisplay}`,
    `提交语言: ${lang}`,
    '',
    '留言:',
    message?.trim() || '—',
    '',
    '---',
    '来自 sunova-innovation.nl 联系表单',
  ].join('\n');

  try {
    await resend.emails.send({
      from: 'Sunova & Coltek Website <no-reply@sunova-innovation.nl>',
      to: 'support@sunova-innovation.nl',
      subject: `[Sunova & Coltek 询盘] ${name} - ${company}`,
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
