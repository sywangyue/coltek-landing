'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';
import Button from '@/components/ui/Button';

const EASE = [0.25, 0.1, 0.25, 1] as const;

// ── Abstract chip / ring animation ─────────────────────────────────────────
function ChipAnimation() {
  return (
    <div className="relative w-48 h-48 mx-auto mb-12 flex items-center justify-center">
      {/* Outer ring — slow spin */}
      <div
        className="absolute inset-0 rounded-full animate-spin-slow"
        style={{
          background: 'transparent',
          border: '2px solid transparent',
          borderRadius: '50%',
          backgroundClip: 'padding-box',
          boxShadow: '0 0 0 2px rgba(124,58,237,0.3)',
        }}
      />
      {/* Mid ring — reverse spin */}
      <div
        className="absolute inset-6 rounded-full animate-spin-reverse"
        style={{
          border: '1.5px solid transparent',
          borderRadius: '50%',
          boxShadow: '0 0 0 1.5px rgba(16,185,129,0.4)',
        }}
      />
      {/* Inner ring — pulse */}
      <div
        className="absolute inset-12 rounded-full animate-pulse-ring"
        style={{
          boxShadow: '0 0 0 2px rgba(124,58,237,0.5), 0 0 0 4px rgba(16,185,129,0.2)',
        }}
      />
      {/* Center chip square */}
      <div
        className="relative w-16 h-16 rounded-[8px] flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(16,185,129,0.12))' }}
      >
        {/* Chip grid lines */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="8" y="8" width="16" height="16" rx="2"
            stroke="url(#chipGrad)" strokeWidth="1.5" fill="none" />
          <line x1="8"  y1="12" x2="4"  y2="12" stroke="url(#chipGrad)" strokeWidth="1.5" />
          <line x1="8"  y1="16" x2="4"  y2="16" stroke="url(#chipGrad)" strokeWidth="1.5" />
          <line x1="8"  y1="20" x2="4"  y2="20" stroke="url(#chipGrad)" strokeWidth="1.5" />
          <line x1="24" y1="12" x2="28" y2="12" stroke="url(#chipGrad)" strokeWidth="1.5" />
          <line x1="24" y1="16" x2="28" y2="16" stroke="url(#chipGrad)" strokeWidth="1.5" />
          <line x1="24" y1="20" x2="28" y2="20" stroke="url(#chipGrad)" strokeWidth="1.5" />
          <line x1="12" y1="8"  x2="12" y2="4"  stroke="url(#chipGrad)" strokeWidth="1.5" />
          <line x1="16" y1="8"  x2="16" y2="4"  stroke="url(#chipGrad)" strokeWidth="1.5" />
          <line x1="20" y1="8"  x2="20" y2="4"  stroke="url(#chipGrad)" strokeWidth="1.5" />
          <line x1="12" y1="24" x2="12" y2="28" stroke="url(#chipGrad)" strokeWidth="1.5" />
          <line x1="16" y1="24" x2="16" y2="28" stroke="url(#chipGrad)" strokeWidth="1.5" />
          <line x1="20" y1="24" x2="20" y2="28" stroke="url(#chipGrad)" strokeWidth="1.5" />
          <rect x="12" y="12" width="8" height="8" rx="1"
            fill="url(#chipGrad)" opacity="0.3" />
          <defs>
            <linearGradient id="chipGrad" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// ── Subscribe form ──────────────────────────────────────────────────────────
function SubscribeForm() {
  const t = useTranslations('aiHardware');
  const [email, setEmail]       = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t('invalidEmail'));
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? t('subscribeError'));
        setLoading(false);
      } else {
        setLoading(false);
        setSubmitted(true);
      }
    } catch {
      setError(t('subscribeError'));
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="flex items-center justify-center gap-2 text-accent font-medium"
      >
        <CheckCircle size={20} />
        <span>{t('subscribed')}</span>
      </motion.div>
    );
  }

  return (
    <div className="space-y-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(''); }}
          placeholder={t('emailPlaceholder')}
          className="
            flex-1 px-4 py-3 bg-white border border-border rounded-[12px]
            text-sm text-foreground placeholder-foreground-muted
            focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
            transition-colors
          "
        />
        <Button type="submit" variant="primary" size="md" disabled={loading}>
          {loading ? <Loader2 size={16} className="animate-spin" /> : t('subscribe')}
        </Button>
      </form>
      {error && <p className="text-sm text-red-500 text-center">{error}</p>}
    </div>
  );
}

// ── Main section ────────────────────────────────────────────────────────────
export default function AIHardware() {
  const t = useTranslations('aiHardware');

  return (
    <section id="ai-hardware" className="bg-white py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <ChipAnimation />

          <span className="inline-block text-xs font-semibold uppercase tracking-widest gradient-brand-text mb-4">
            {t('label')}
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            {t('title')}
          </h2>

          <p
            className="text-xl font-semibold mb-6"
            style={{
              background: 'linear-gradient(135deg, #7C3AED, #10B981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t('subtitle')}
          </p>

          <p className="text-foreground-muted mb-10 leading-relaxed">
            {t('description')}
          </p>

          <SubscribeForm />
        </motion.div>
      </div>
    </section>
  );
}
