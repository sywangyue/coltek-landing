'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Building2, Map, Landmark, Home, Clapperboard, Factory, type LucideIcon } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const EASE = [0.25, 0.1, 0.25, 1] as const;
const ICONS: LucideIcon[] = [Building2, Map, Landmark, Home, Clapperboard, Factory];

export default function SpatialIndustries() {
  const t = useTranslations('spatialIndustries');

  const items = [0,1,2,3,4,5].map((i) => ({
    title: t(`item${i}.title` as 'item0.title'),
    desc:  t(`item${i}.desc`  as 'item0.desc'),
    Icon:  ICONS[i],
  }));

  return (
    <section id="spatial-industries" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-12 text-center"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-3">{t('label')}</span>
          <SectionTitle title={t('title')} subtitle={t('subtitle')} align="center" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ title, desc, Icon }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
              className="group relative bg-white border border-border rounded-[8px] p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              {/* Top gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, #8B5CF6, #34D399)' }}
              />
              <Icon size={26} className="text-accent mb-3" />
              <h4 className="font-display font-semibold text-foreground mb-1.5">{title}</h4>
              <p className="text-sm text-foreground-muted leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
