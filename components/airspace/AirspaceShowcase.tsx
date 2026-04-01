'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Activity, Clock, Shield, ShieldOff } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import BeforeAfter from '@/components/shared/BeforeAfter';

const EASE = [0.25, 0.1, 0.25, 1] as const;

// ── CSS Radar visualization ───────────────────────────────────────────────────
function RadarViz() {
  return (
    <div className="relative w-56 h-56 mx-auto">
      {/* Concentric rings */}
      {[1, 0.75, 0.5, 0.28].map((scale, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-primary/20"
          style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
        />
      ))}

      {/* Cross hairs */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-primary/10" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-px bg-primary/10" />
      </div>

      {/* Rotating scan sector */}
      <div className="absolute inset-0 animate-radar-spin" style={{ transformOrigin: 'center' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <radialGradient id="scanGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#7C3AED" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* 60° sector */}
          <path
            d="M50,50 L50,2 A48,48 0 0,1 91.6,74 Z"
            fill="url(#scanGrad)"
          />
        </svg>
      </div>

      {/* Target blips */}
      {[
        { top: '22%', left: '62%', delay: '0s' },
        { top: '55%', left: '78%', delay: '0.4s' },
        { top: '70%', left: '35%', delay: '0.9s' },
      ].map((pos, i) => (
        <div key={i} className="absolute" style={{ top: pos.top, left: pos.left }}>
          {/* Pulse ring */}
          <div
            className="absolute w-3 h-3 rounded-full border border-accent animate-radar-pulse -translate-x-1/2 -translate-y-1/2"
            style={{ animationDelay: pos.delay }}
          />
          {/* Dot */}
          <div
            className="w-2 h-2 rounded-full bg-accent animate-radar-blink -translate-x-1/2 -translate-y-1/2 relative z-10"
            style={{ animationDelay: pos.delay }}
          />
        </div>
      ))}

      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-2 h-2 rounded-full bg-primary mx-auto mb-1" />
          <span className="text-[9px] text-primary font-semibold leading-tight block">Detection<br/>Center</span>
        </div>
      </div>
    </div>
  );
}

// ── Case card ─────────────────────────────────────────────────────────────────
interface CaseData {
  title: string; environment: string; coverage: string;
  accuracy: string; response: string; description: string;
}

function CaseCard({ data, delay }: { data: CaseData; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className="group relative bg-white border border-border rounded-[8px] p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 overflow-hidden"
    >
      {/* Top border on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, #7C3AED, #6D28D9)' }}
      />

      <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3">
        {data.environment}
      </span>
      <h4 className="font-display font-bold text-foreground mb-4">{data.title}</h4>

      <div className="grid grid-cols-1 gap-2 mb-4">
        {[
          { icon: MapPin,    val: data.coverage },
          { icon: Activity,  val: data.accuracy },
          { icon: Clock,     val: data.response },
        ].map(({ icon: Icon, val }, i) => (
          <div key={i} className="flex items-center gap-2">
            <Icon size={13} className="text-primary shrink-0" />
            <span className="text-sm font-bold text-primary">{val}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-foreground-muted leading-relaxed">{data.description}</p>
    </motion.div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function AirspaceShowcase() {
  const t = useTranslations('airspaceShowcase');

  const cases: CaseData[] = [0, 1, 2].map((i) => ({
    title:       t(`case${i}.title`       as 'case0.title'),
    environment: t(`case${i}.environment` as 'case0.environment'),
    coverage:    t(`case${i}.coverage`    as 'case0.coverage'),
    accuracy:    t(`case${i}.accuracy`    as 'case0.accuracy'),
    response:    t(`case${i}.response`    as 'case0.response'),
    description: t(`case${i}.description` as 'case0.description'),
  }));

  return (
    <section id="airspace-showcase" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Radar */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex-1"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t('label')}</span>
            <SectionTitle title={t('title')} subtitle={t('subtitle')} withAccent />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <RadarViz />
          </motion.div>
        </div>

        {/* Case cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {cases.map((c, i) => <CaseCard key={i} data={c} delay={i * 0.12} />)}
        </div>

        {/* Before / After */}
        <BeforeAfter
          title={t('beforeAfter.title')}
          before={{
            label: t('beforeAfter.before'),
            bg: '#F1F5F9',
            icon: <ShieldOff size={36} className="text-foreground-muted/40" />,
          }}
          after={{
            label: t('beforeAfter.after'),
            bg: 'rgba(124,58,237,0.08)',
            icon: <Shield size={36} className="text-primary/50" />,
          }}
        />
      </div>
    </section>
  );
}
