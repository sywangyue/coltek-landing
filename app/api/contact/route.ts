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

const labels: Record<Locale, {
  interests: Record<string, string>;
  sources: Record<string, string>;
  interestedIn: string;
  heardAbout: string;
  messageLabel: string;
  footer: string;
}> = {
  en: {
    interests: {
      spatial: 'Spatial Intelligence',
      airspace: 'Spatial Security',
      ai: 'AI Hardware',
      other: 'Other / General Inquiry',
    },
    sources: {
      exhibition: 'Exhibition / Trade Show',
      socialMedia: 'Social Media',
      searchEngine: 'Search Engine (Google, Bing, etc.)',
      referral: 'Friend Referral',
      partner: 'Partner / Distributor',
      other: 'Other',
    },
    interestedIn: 'Interested in',
    heardAbout: 'Heard about us via',
    messageLabel: 'Message',
    footer: 'Sent from sunova-innovation.nl contact form',
  },
  de: {
    interests: {
      spatial: 'Räumliche Intelligenz',
      airspace: 'Räumliche Sicherheit',
      ai: 'KI-Hardware',
      other: 'Sonstiges / Allgemeine Anfrage',
    },
    sources: {
      exhibition: 'Messe / Ausstellung',
      socialMedia: 'Soziale Medien',
      searchEngine: 'Suchmaschine (Google, Bing, etc.)',
      referral: 'Empfehlung',
      partner: 'Partner / Händler',
      other: 'Sonstiges',
    },
    interestedIn: 'Interesse an',
    heardAbout: 'Aufmerksam geworden über',
    messageLabel: 'Nachricht',
    footer: 'Gesendet über das Kontaktformular von sunova-innovation.nl',
  },
  nl: {
    interests: {
      spatial: 'Ruimtelijke Intelligentie',
      airspace: 'Ruimtelijke Beveiliging',
      ai: 'AI Hardware',
      other: 'Anders / Algemene vraag',
    },
    sources: {
      exhibition: 'Beurs / Tentoonstelling',
      socialMedia: 'Sociale Media',
      searchEngine: 'Zoekmachine (Google, Bing, etc.)',
      referral: 'Aanbeveling',
      partner: 'Partner / Distributeur',
      other: 'Anders',
    },
    interestedIn: 'Interesse in',
    heardAbout: 'Via ons gehoord',
    messageLabel: 'Bericht',
    footer: 'Verzonden via het contactformulier van sunova-innovation.nl',
  },
  zh: {
    interests: {
      spatial: '空间智能',
      airspace: '空间安防',
      ai: 'AI硬件',
      other: '其他 / 一般咨询',
    },
    sources: {
      exhibition: '展会',
      socialMedia: '社交媒体',
      searchEngine: '搜索引擎（Google、Bing 等）',
      referral: '朋友推荐',
      partner: '合作伙伴 / 经销商',
      other: '其他',
    },
    interestedIn: '感兴趣的领域',
    heardAbout: '了解渠道',
    messageLabel: '留言',
    footer: '来自 sunova-innovation.nl 联系表单',
  },
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
  const l = labels[lang];

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

  const interestDisplay = interests.map((k) => l.interests[k] ?? k);
  const sourceDisplay = source ? (l.sources[source] ?? source) : '—';

  const text = [
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `${l.interestedIn}: ${interestDisplay.length ? interestDisplay.join(', ') : '—'}`,
    `${l.heardAbout}: ${sourceDisplay}`,
    '',
    `${l.messageLabel}:`,
    message?.trim() || '—',
    '',
    '---',
    l.footer,
  ].join('\n');

  try {
    await resend.emails.send({
      from: 'Sunova & Coltek Website <no-reply@sunova-innovation.nl>',
      to: 'support@sunova-innovation.nl',
      subject: `[Sunova & Coltek Inquiry] from ${name} - ${company}`,
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
