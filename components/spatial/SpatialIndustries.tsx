'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Building2, Map, Landmark, Home, Clapperboard, Factory, type LucideIcon } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const EASE = [0.25, 0.1, 0.25, 1] as const;
const ICONS: LucideIcon[] = [Building2, Map, Landmark, Home, Clapperboard, Factory];
const IMAGES = [
  '/images/spatial/scenarios/architecture.jpg',
  '/images/spatial/scenarios/surveying.jpg',
  '/images/spatial/scenarios/culture.jpg',
  '/images/spatial/scenarios/estate.jpg',
  '/images/spatial/scenarios/film.jpg',
  '/images/spatial/scenarios/Industrial.jpg',
];

function IndustryCard({
  title,
  desc,
  Icon,
  image,
  delay,
}: {
  title: string;
  desc: string;
  Icon: LucideIcon;
  image: string;
  delay: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: EASE }}
      className="group relative bg-white border border-border rounded-[8px] p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, #8B5CF6, #34D399)' }}
      />
      <div className="relative w-full h-36 mb-4 rounded-lg overflow-hidden bg-gray-100">
        {!imgError && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <Icon size={26} className="text-accent mb-3" />
      <h4 className="font-display font-semibold text-foreground mb-1.5">{title}</h4>
      <p className="text-sm text-foreground-muted leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function SpatialIndustries() {
  const t = useTranslations('spatialIndustries');

  const items = [0, 1, 2, 3, 4, 5].map((i) => ({
    title: t(`item${i}.title` as 'item0.title'),
    desc: t(`item${i}.desc` as 'item0.desc'),
    Icon: ICONS[i],
    image: IMAGES[i],
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
          {items.map(({ title, desc, Icon, image }, i) => (
            <IndustryCard
              key={i}
              title={title}
              desc={desc}
              Icon={Icon}
              image={image}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
