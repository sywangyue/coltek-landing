'use client';

import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import { Scan, Shield, Cpu } from 'lucide-react';
import Button from '@/components/ui/Button';

// ---------- Fade-in variant factory ----------
const fadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  },
});

// ---------- Business cards ----------
const CARDS = [
  {
    key: 'spatial' as const,
    icon: Scan,
    iconClass: 'text-accent',
    href: '#spatial',
  },
  {
    key: 'airspace' as const,
    icon: Shield,
    iconClass: 'text-primary',
    href: '#airspace',
  },
  {
    key: 'ai' as const,
    icon: Cpu,
    iconClass: '',          // gradient handled via style
    href: '#ai-hardware',
  },
];

function scrollTo(id: string) {
  const el = document.getElementById(id.replace('#', ''));
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// ---------- Gradient-border card ----------
function BusinessCard({
  cardKey,
  icon: Icon,
  iconClass,
  href,
  delay,
}: {
  cardKey: 'spatial' | 'airspace' | 'ai';
  icon: typeof Scan;
  iconClass: string;
  href: string;
  delay: number;
}) {
  const t = useTranslations('hero.cards');

  return (
    <motion.div
      variants={fadeUp(delay)}
      initial="hidden"
      animate="visible"
      // Gradient border trick: outer has gradient bg, inner is white
      className="group relative cursor-pointer rounded-[8px] p-[1px] transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'transparent',
      }}
      onClick={() => scrollTo(href)}
    >
      {/* Gradient border layer — hidden by default, visible on hover */}
      <div
        className="absolute inset-0 rounded-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(135deg, #8B5CF6, #34D399)' }}
      />
      {/* Static border layer */}
      <div className="absolute inset-0 rounded-[8px] border border-border group-hover:opacity-0 transition-opacity duration-300" />
      {/* Content */}
      <div className="relative bg-white rounded-[7px] p-6">
        <div className="mb-3">
          {cardKey === 'ai' ? (
            <span
              style={{
                background: 'linear-gradient(135deg, #8B5CF6, #34D399)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}
            >
              <Cpu size={28} />
            </span>
          ) : (
            <Icon size={28} className={iconClass} />
          )}
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
          {t(`${cardKey}.title`)}
        </h3>
        <p className="text-xs text-foreground-muted leading-relaxed">
          {t(`${cardKey}.keywords`)}
        </p>
      </div>
    </motion.div>
  );
}

// ---------- Main component ----------
export default function HeroContent() {
  const t = useTranslations('hero');

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      {/* H1 Slogan */}
      <motion.h1
        variants={fadeUp(0.2)}
        initial="hidden"
        animate="visible"
        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 max-w-4xl mx-auto whitespace-pre-line"
      >
        {t('slogan')}
      </motion.h1>

      {/* H2 Mission */}
      <motion.p
        variants={fadeUp(0.4)}
        initial="hidden"
        animate="visible"
        className="text-lg md:text-xl text-foreground-muted max-w-3xl mx-auto mb-12 leading-relaxed"
      >
        {t('mission')}
      </motion.p>

      {/* Business Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
        {CARDS.map((card, i) => (
          <BusinessCard
            key={card.key}
            cardKey={card.key}
            icon={card.icon}
            iconClass={card.iconClass}
            href={card.href}
            delay={0.6 + i * 0.1}
          />
        ))}
      </div>

      {/* Trust badge */}
      <motion.p
        variants={fadeUp(0.9)}
        initial="hidden"
        animate="visible"
        className="text-sm text-foreground-muted tracking-wide mb-8"
      >
        {t('trust')}
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        variants={fadeUp(1.0)}
        initial="hidden"
        animate="visible"
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button
          variant="primary"
          size="lg"
          onClick={() => scrollTo('#spatial')}
        >
          {t('ctaPrimary')}
        </Button>
        <Button
          variant="secondary"
          size="lg"
          onClick={() => scrollTo('#contact')}
        >
          {t('ctaSecondary')}
        </Button>
      </motion.div>
    </div>
  );
}
