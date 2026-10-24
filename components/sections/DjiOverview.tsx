'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ScanSearch, Warehouse, Wheat, ArrowRight } from 'lucide-react';
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
  { icon: ScanSearch, key: 'inspection' as const },
  { icon: Warehouse,  key: 'dock'       as const },
  { icon: Wheat,      key: 'field'      as const },
];

export default function DjiOverview() {
  const t = useTranslations('dji.overview');
  const locale = useLocale();
  const router = useRouter();

  return (
    <section id="drones" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          Desktop: text left, image right  (opposite of Airspace above)
          Mobile:  image on top, text below
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Text content (Desktop order-1, Mobile order-2) ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="order-2 lg:order-1"
          >
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
                  className="bg-background-alt border border-border rounded-[8px] p-4 hover:-translate-y-1 transition-transform duration-200"
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

            <Button variant="primary" size="md" onClick={() => router.push(`/${locale}/drones/dji`)}>
              {t('cta')} <ArrowRight size={16} />
            </Button>
          </motion.div>

          {/* ── Right: Product image (Desktop order-2, Mobile order-1) ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] rounded-[16px] bg-[#F1F5F9] overflow-hidden border border-border">
              <Image
                src="/images/drones/dji/m400-landscape.webp"
                alt="DJI Matrice 400"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
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
