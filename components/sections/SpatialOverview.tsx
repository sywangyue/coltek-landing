'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ScanLine, Brain, Target, ArrowRight } from 'lucide-react';
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
  { icon: ScanLine, key: 'hardware' as const },
  { icon: Brain,    key: 'platform' as const },
  { icon: Target,   key: 'precision' as const },
];

export default function SpatialOverview() {
  const t = useTranslations('spatial');
  const locale = useLocale();
  const router = useRouter();

  return (
    <section id="spatial" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Text content ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Label */}
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
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
                  className="group bg-white border border-border rounded-[8px] p-4 hover:-translate-y-1 transition-transform duration-200"
                >
                  <Icon size={22} className="text-accent mb-2" />
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
              <Button variant="primary" size="md" onClick={() => router.push(`/${locale}/spatial/xgrids`)}>
                {t('ctaProducts')} <ArrowRight size={16} />
              </Button>
              <Button variant="secondary" size="md" onClick={() => router.push(`/${locale}/spatial/xgrids#spatial-showcase`)}>
                {t('ctaShowcase')} <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>

          {/* ── Right: Lixel L3 launch visual ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            {/* 16:9 so the product name printed on the key visual is never cropped */}
            <Link
              href={`/${locale}/spatial/xgrids`}
              className="group relative block aspect-[16/9] rounded-[16px] overflow-hidden border border-border bg-[#0B1220]"
            >
              <Image
                src="/images/spatial/products/l3/kv-hero.jpg"
                alt="XGRIDS Lixel L3"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Launch badge */}
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-accent text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                {t('launch.badge')}
              </span>

              {/* Launch strip, kept low on the dark floor so it clears the
                  product name and slogan printed on the key visual */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-4 pt-8 pb-3 sm:px-5 sm:pb-4">
                <div className="min-w-0">
                  <p className="font-display text-base sm:text-lg font-bold text-white leading-tight">{t('launch.title')}</p>
                  <p className="hidden sm:block text-xs text-white/75 mt-0.5 line-clamp-2">{t('launch.subtitle')}</p>
                </div>
                <span className="shrink-0 inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/25 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full group-hover:bg-accent group-hover:border-accent transition-colors">
                  {t('launch.cta')} <ArrowRight size={14} />
                </span>
              </div>
            </Link>
            {/* Decorative gradient accent */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-10 -z-10"
              style={{ background: 'linear-gradient(135deg, #8B5CF6, #34D399)' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
