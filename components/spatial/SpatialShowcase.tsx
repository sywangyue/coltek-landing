'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

const EASE = [0.25, 0.1, 0.25, 1] as const;

// SSR-safe 3D viewer
const ModelViewer = dynamic(() => import('./ModelViewer'), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] md:h-[500px] bg-gray-900 rounded-[16px] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function SpatialShowcase() {
  const t = useTranslations('spatialShowcase');
  const [activeCase, setActiveCase] = useState(0);

  const cases = [0, 1, 2].map((i) => ({
    title:    t(`case${i}.title`    as 'case0.title'),
    category: t(`case${i}.category` as 'case0.category'),
    desc:     t(`case${i}.description` as 'case0.description'),
  }));

  const categories = [0, 1, 2, 3].map((i) =>
    t(`category${i}` as 'category0')
  );

  return (
    <section id="spatial-showcase" className="bg-background-alt py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-10"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-3">{t('label')}</span>
          <SectionTitle title={t('title')} subtitle={t('subtitle')} withAccent />
        </motion.div>

        {/* 3D Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-8"
        >
          <ModelViewer
            instruction={t('viewer.instruction')}
            loadingText={t('viewer.loading')}
            resetLabel={t('viewer.reset')}
            fullscreenLabel={t('viewer.fullscreen')}
            title={cases[activeCase].title}
            category={cases[activeCase].category}
          />
        </motion.div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat, i) => (
            <span key={i} className="text-xs bg-white border border-border rounded-full px-3 py-1.5 text-foreground-muted cursor-default">
              {cat}
            </span>
          ))}
        </div>

        {/* Case cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveCase(i)}
              className={`text-left rounded-[8px] border p-5 transition-all duration-200 ${
                activeCase === i
                  ? 'border-primary bg-primary/5 border-l-4'
                  : 'border-border bg-white hover:border-primary/40'
              }`}
            >
              <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${
                activeCase === i ? 'bg-primary/10 text-primary' : 'bg-background-alt text-foreground-muted'
              }`}>
                {c.category}
              </span>
              <h4 className="text-sm font-semibold text-foreground mb-1">{c.title}</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">{c.desc}</p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
