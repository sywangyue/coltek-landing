'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Radio, Crosshair, Eye, ImageIcon, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';

const EASE = [0.25, 0.1, 0.25, 1] as const;

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: EASE } },
});

const HIGHLIGHTS = [
  { icon: Radio,     key: 'detection' as const },
  { icon: Crosshair, key: 'tracking'  as const },
  { icon: Eye,       key: 'awareness' as const },
];

export default function AirspaceOverview() {
  const t = useTranslations('airspace');

  return (
    <section id="airspace" className="bg-background-alt py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          Desktop: image left, text right  (opposite of Spatial)
          Mobile:  image on top, text below
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Image placeholder (Desktop order-1, Mobile order-1) ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative order-1 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-[16px] bg-[#F1F5F9] flex flex-col items-center justify-center gap-3 border border-border">
              <ImageIcon size={40} className="text-foreground-muted/40" />
              <span className="text-sm text-foreground-muted/60 font-medium">
                Product Image
              </span>
            </div>
            {/* Decorative gradient accent */}
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-10 -z-10"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #10B981)' }}
            />
          </motion.div>

          {/* ── Right: Text content (Desktop order-2, Mobile order-2) ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="order-2 lg:order-2"
          >
            {/* Label */}
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              {t('label')}
            </span>

            <SectionTitle
              title={t('title')}
              subtitle={t('subtitle')}
              withAccent
              className="mb-4"
            />

            <p className="text-foreground-muted leading-relaxed mb-8 mt-4">
              {t('description')}
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {HIGHLIGHTS.map(({ icon: Icon, key }, i) => (
                <motion.div
                  key={key}
                  variants={fadeUp(i * 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white border border-border rounded-[8px] p-4 hover:-translate-y-1 transition-transform duration-200"
                >
                  <Icon size={22} className="text-primary mb-2" />
                  <p className="text-sm font-semibold text-foreground mb-0.5">
                    {t(`highlights.${key}.title`)}
                  </p>
                  <p className="text-xs text-foreground-muted leading-relaxed">
                    {t(`highlights.${key}.desc`)}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="md" onClick={() => document.getElementById('airspace-products')?.scrollIntoView({ behavior: 'smooth' })}>
                {t('ctaProducts')} <ArrowRight size={16} />
              </Button>
              <Button variant="secondary" size="md" onClick={() => document.getElementById('airspace-showcase')?.scrollIntoView({ behavior: 'smooth' })}>
                {t('ctaShowcase')} <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
