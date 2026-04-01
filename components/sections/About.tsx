'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { Camera } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const EASE = [0.25, 0.1, 0.25, 1] as const;

// ── Count-up hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1200, startOnView = false) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(!startOnView);

  useEffect(() => {
    if (!started) return;
    if (target === 0) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);

  return { count, trigger: () => setStarted(true) };
}

// ── Stat card ────────────────────────────────────────────────────────────────
function StatCard({
  value,
  label,
  detail,
  delay,
}: {
  value: string;
  label: string;
  detail: string;
  delay: number;
}) {
  const isNumber = /^\d+$/.test(value);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const { count, trigger } = useCountUp(isNumber ? parseInt(value, 10) : 0, 1000);

  useEffect(() => {
    if (inView && isNumber) trigger();
  }, [inView, isNumber, trigger]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className="bg-white rounded-[8px] border border-border p-6 text-center"
    >
      <div
        className="font-display text-4xl font-bold mb-1"
        style={{
          background: 'linear-gradient(135deg, #7C3AED, #10B981)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {isNumber ? count : value}
      </div>
      <p className="text-sm font-semibold text-foreground mb-0.5">{label}</p>
      <p className="text-xs text-foreground-muted">{detail}</p>
    </motion.div>
  );
}

// ── Main section ─────────────────────────────────────────────────────────────
export default function About() {
  const t = useTranslations('about');

  const stats = [
    {
      ...t.raw('stats.entities') as { value: string; label: string; detail: string },
    },
    {
      ...t.raw('stats.xgrids') as { value: string; label: string; detail: string },
    },
    {
      ...t.raw('stats.terjin') as { value: string; label: string; detail: string },
    },
  ];

  return (
    <section id="about" className="bg-background-alt py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Text content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest gradient-brand-text mb-4">
              {t('label')}
            </span>

            <SectionTitle
              title={t('title')}
              withAccent
              className="mb-6"
            />

            <p className="text-foreground-muted leading-relaxed mb-8">
              {t('story')}
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <StatCard
                  key={i}
                  value={stat.value}
                  label={stat.label}
                  detail={stat.detail}
                  delay={i * 0.12}
                />
              ))}
            </div>
          </motion.div>

          {/* ── Right: Image placeholder ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="aspect-[4/3] rounded-[16px] bg-[#F1F5F9] flex flex-col items-center justify-center gap-3 border border-border">
              <Camera size={40} className="text-foreground-muted/40" />
              <span className="text-sm text-foreground-muted/60 font-medium">
                Team Photo
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
