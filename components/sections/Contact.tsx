'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Phone, Mail, Loader2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import SocialIconRow from '@/components/shared/SocialIconRow';

const EASE = [0.25, 0.1, 0.25, 1] as const;

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const INTEREST_KEYS = ['spatial', 'airspace', 'ai', 'other'] as const;
const SOURCE_KEYS = ['exhibition', 'socialMedia', 'searchEngine', 'referral', 'partner', 'other'] as const;

// ── Inquiry form ─────────────────────────────────────────────────────────────
function InquiryForm() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [status, setStatus] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [source, setSource] = useState('');
  const [privacyConsented, setPrivacyConsented] = useState(false);

  // Controlled field values for error recovery
  const [name, setName]       = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');

  // Field-level validation errors
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const toggleInterest = (key: string) =>
    setInterests((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );

  function validate(): boolean {
    const errors: Record<string, string> = {};
    if (!name.trim())    errors.name    = t('form.required');
    if (!company.trim()) errors.company = t('form.required');
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = t('form.invalidEmail');
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, company, email, interests, source, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? t('form.error'));
        setStatus('error');
      } else {
        setStatus('success');
      }
    } catch {
      setErrorMsg(t('form.error'));
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="flex flex-col items-center justify-center gap-4 py-16 text-center"
      >
        <CheckCircle size={48} className="text-accent" />
        <p className="text-lg font-semibold text-foreground">{t('form.success')}</p>
      </motion.div>
    );
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-2.5 bg-white border rounded-lg text-sm
    focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors
    ${fieldErrors[field] ? 'border-red-400' : 'border-border'}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          {t('form.name')} <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass('name')}
        />
        {fieldErrors.name && (
          <p className="text-xs text-red-500 mt-1">{fieldErrors.name}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          {t('form.company')} <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClass('company')}
        />
        {fieldErrors.company && (
          <p className="text-xs text-red-500 mt-1">{fieldErrors.company}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          {t('form.email')} <span className="text-primary">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass('email')}
        />
        {fieldErrors.email && (
          <p className="text-xs text-red-500 mt-1">{fieldErrors.email}</p>
        )}
      </div>

      {/* Interests — multi-select checkbox */}
      <div>
        <p className="block text-sm font-medium text-foreground mb-2">
          {t('form.interest')}
        </p>
        <div className="space-y-2">
          {INTEREST_KEYS.map((key) => (
            <label
              key={key}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={interests.includes(key)}
                onChange={() => toggleInterest(key)}
                className="w-4 h-4 rounded border-border accent-primary cursor-pointer"
              />
              <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                {t(`form.interests.${key}`)}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Source — how did you hear about us */}
      <div>
        <p className="block text-sm font-medium text-foreground mb-2">
          {t('form.sourceLabel')}
        </p>
        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="w-full px-4 py-2.5 bg-white border border-border rounded-lg text-sm
            focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors
            text-foreground"
        >
          <option value="">—</option>
          {SOURCE_KEYS.map((key) => (
            <option key={key} value={key}>
              {t(`form.sources.${key}`)}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          {t('form.message')}
        </label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2.5 bg-white border border-border rounded-lg text-sm resize-none
            focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        />
      </div>

      {/* Privacy consent */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={privacyConsented}
          onChange={(e) => setPrivacyConsented(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded border-border accent-primary cursor-pointer shrink-0"
        />
        <span className="text-sm text-foreground-muted leading-snug">
          {t('form.privacyConsent.before')}
          <Link href={`/${locale}/privacy`} className="text-primary underline hover:text-primary/80">
            {t('form.privacyConsent.linkText')}
          </Link>
          {t('form.privacyConsent.after')}
        </span>
      </label>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === 'submitting' || !privacyConsented}
        className={`w-full ${!privacyConsented ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {t('form.submitting')}
          </>
        ) : (
          t('form.submit')
        )}
      </Button>

      {status === 'error' && (
        <p className="text-sm text-red-500 text-center">{errorMsg || t('form.error')}</p>
      )}
    </form>
  );
}

// ── Company card ─────────────────────────────────────────────────────────────
function CompanyCard({
  flag,
  name,
  address,
  phone,
}: {
  flag: string;
  name: string;
  address: string;
  phone: string;
}) {
  return (
    <div className="bg-background-alt rounded-[8px] border border-border p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{flag}</span>
        <span className="font-semibold text-foreground text-sm">{name}</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
          <span className="text-sm text-foreground-muted">{address}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-primary shrink-0" />
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="text-sm text-foreground-muted hover:text-primary transition-colors"
          >
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Main section ─────────────────────────────────────────────────────────────
export default function Contact() {
  const t = useTranslations('contact');

  const coltek = t.raw('companies.coltek') as {
    name: string; country: string; address: string; phone: string;
  };
  const sunova = t.raw('companies.sunova') as {
    name: string; country: string; address: string; phone: string;
  };
  const email = t('email');

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* ── Left: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              {t('label')}
            </span>
            <SectionTitle
              title={t('title')}
              subtitle={t('subtitle')}
              withAccent
              className="mb-8"
            />
            <InquiryForm />
          </motion.div>

          {/* ── Right: Company info ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col gap-5"
          >
            <CompanyCard
              flag="🇩🇪"
              name={coltek.name}
              address={coltek.address}
              phone={coltek.phone}
            />
            <CompanyCard
              flag="🇳🇱"
              name={sunova.name}
              address={sunova.address}
              phone={sunova.phone}
            />

            {/* Email */}
            <div className="flex items-center gap-3 px-5 py-4 bg-background-alt rounded-[8px] border border-border">
              <Mail size={18} className="text-primary shrink-0" />
              <a
                href={`mailto:${email}`}
                className="text-sm text-foreground hover:text-primary transition-colors break-all"
              >
                {email}
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-1 px-3 py-3 bg-background-alt rounded-[8px] border border-border">
              <SocialIconRow size="sm" withLinkedIn />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
