'use client';

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
        >
          <ModelViewer
            instruction={t('viewer.instruction')}
            loadingText={t('viewer.loading')}
            resetLabel={t('viewer.reset')}
            fullscreenLabel={t('viewer.fullscreen')}
            title={t('case0.title')}
            category={t('case0.category')}
          />
        </motion.div>

      </div>
    </section>
  );
}
