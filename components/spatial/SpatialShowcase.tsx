'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function SpatialShowcase() {
  const t = useTranslations('spatialShowcase');

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

        {/* LCC iframe Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <iframe
            src="https://lcc-viewer.xgrids.com/pub/dhgdva-showroom"
            width="100%"
            height="500px"
            style={{ border: 'none', borderRadius: '16px' }}
            allow="fullscreen"
          />
        </motion.div>

      </div>
    </section>
  );
}
