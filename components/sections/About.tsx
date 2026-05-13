'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { User } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const TEAM_IMAGES = [
  '/images/team/colt_chen_ceo.png',
  '/images/team/Herry_Sun_coo.jpg',
  '/images/team/shenshen_pm_xgrids.jpg',
  '/images/team/estrella_wang_tecknical_support_xgrids.jpg',
  '/images/team/max_wang_consultant.png',
];

const EASE = [0.25, 0.1, 0.25, 1] as const;
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: d, ease: EASE } },
});

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
  logo,
  clickable,
}: {
  value: string;
  label: string;
  detail: string;
  delay: number;
  logo?: string;
  clickable?: boolean;
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
      className={`bg-white rounded-[8px] border border-border p-6 text-center flex flex-col items-center justify-center gap-2${clickable ? ' hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer' : ''}`}
    >
      {logo && (
        <img src={logo} alt={label} className="h-10 w-auto object-contain mb-1" />
      )}
      {!logo && (isNumber || value) && (
        <div
          className="font-display text-4xl font-bold mb-1"
          style={{
            background: 'linear-gradient(135deg, #8B5CF6, #34D399)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {isNumber ? count : value}
        </div>
      )}
      <p className="text-sm font-semibold text-foreground mb-0.5 leading-snug">{label}</p>
      {detail ? <p className="text-xs text-foreground-muted">{detail}</p> : null}
    </motion.div>
  );
}

function TeamCard({ name, role, image, delay }: { name: string; role: string; image?: string; delay: number }) {
  return (
    <motion.div
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white rounded-[8px] p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200"
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#F1F5F9] mb-3 rounded-xl">
        {image ? (
          <Image src={image} alt={name} fill quality={90} className="object-cover object-center" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <User size={36} className="text-foreground-muted/40" />
          </div>
        )}
      </div>
      <p className="text-sm font-semibold text-foreground">{name}</p>
      <p className="text-xs text-foreground-muted mt-0.5">{role}</p>
    </motion.div>
  );
}

// ── Main section ─────────────────────────────────────────────────────────────
export default function About() {
  const t = useTranslations('about');
  const useLocaleValue = useLocale();

  const stats = [
    {
      ...t.raw('stats.entities') as { value: string; label: string; detail: string },
    },
    {
      ...t.raw('stats.xgrids') as { value: string; label: string; detail: string },
    },
    {
      ...t.raw('stats.droneguard') as { value: string; label: string; detail: string },
    },
  ];
  const team = t.raw('team.members') as { name: string; role: string }[];

  return (
    <section id="about" className="bg-background-alt py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-16">

          {/* ── Top: Text content ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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

            <div className="text-foreground-muted leading-relaxed mb-8 space-y-4">
              {t('story').split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-3">
              <StatCard
                value={stats[0].value}
                label={stats[0].label}
                detail={stats[0].detail}
                delay={0}
              />
              <a href="https://www.xgrids.com" target="_blank" rel="noopener noreferrer" className="block no-underline">
                <StatCard
                  value={stats[1].value}
                  label={stats[1].label}
                  detail={stats[1].detail}
                  delay={0.12}
                  logo="/images/logo/xgrids-logo.png"
                  clickable
                />
              </a>
              <a href="https://globe-protect.com/" target="_blank" rel="noopener noreferrer" className="block no-underline">
                <StatCard
                  value={stats[2].value}
                  label={stats[2].label}
                  detail={stats[2].detail}
                  delay={0.24}
                  logo="/images/logo/globe-protect-logo.png"
                  clickable
                />
              </a>
            </div>
          </motion.div>

          {/* ── Bottom: Team grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-5">
              {t('team.title')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {team.map((member, i) => (
                <TeamCard key={`${member.name}-${i}`} name={member.name} role={member.role} image={TEAM_IMAGES[i]} delay={i * 0.06} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
