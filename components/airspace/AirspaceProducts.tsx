'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, ExternalLink } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const EASE = [0.25, 0.1, 0.25, 1] as const;
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: d, ease: EASE } },
});

const TERJIN_HREF = 'https://en.terjin.com/index.php?c=category&id=1';

/** Maps category → ordered list of lowercase base filenames expected in public/images/airspace/ */
const PRODUCT_IMAGE_BASES: Record<string, string[]> = {
  system: ['tdoa-management', 'tdoa-x4', 'tdoa-x5', 'multi-mgmt'],
  fixed:  ['ftd1', 'fd1', 'fta1', 'fpc1', 'fr3'],
  portable: ['pd1', 'pl2-pro', 'pc2-pro', 'pl1-b', 'pj1'],
};

interface ProductCardProps {
  name: string;
  desc: string;
  delay: number;
  linkLabel: string;
  imageSrc?: string;
}

function ProductCard({ name, desc, delay, linkLabel, imageSrc }: ProductCardProps) {
  return (
    <motion.div
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group relative bg-white border border-border rounded-[8px] overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 hover:border-t-primary"
      style={{ borderTopWidth: '1px' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-[8px]"
        aria-hidden="true"
      />
      <div className="relative h-36 bg-[#F3F0FF] overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
        {imageSrc ? (
          <Image src={imageSrc} alt={name} fill className="object-contain p-4" sizes="(max-width: 768px) 100vw, 25vw" />
        ) : (
          <div className="h-full flex flex-col items-center justify-center gap-2">
            <Shield size={28} className="text-primary/40" />
            <span className="text-xs text-foreground-muted/50">{name}</span>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <div>
          <h4 className="font-display font-bold text-foreground mb-1">{name}</h4>
          <p className="text-sm text-foreground-muted leading-relaxed">{desc}</p>
        </div>
        <a
          href={TERJIN_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 self-start text-xs font-semibold text-primary border border-primary/40 rounded-full px-3 py-1 hover:bg-primary/5 transition-colors duration-200"
        >
          {linkLabel}
          <ExternalLink size={11} />
        </a>
      </div>
    </motion.div>
  );
}

interface CategorySectionProps {
  title: string;
  desc: string;
  products: { name: string; desc: string; imageSrc?: string }[];
  linkLabel: string;
  baseDelay?: number;
}

function CategorySection({ title, desc, products, linkLabel, baseDelay = 0 }: CategorySectionProps) {
  return (
    <div className="py-12 border-t border-border first:border-t-0 first:pt-0">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05, ease: EASE }}
        className="mb-6"
      >
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/8 border border-primary/20 rounded-full px-3 py-1 mb-3">
          {title}
        </span>
        <p className="text-sm text-foreground-muted">{desc}</p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((p, i) => (
          <ProductCard
            key={i}
            name={p.name}
            desc={p.desc}
            imageSrc={p.imageSrc}
            delay={baseDelay + i * 0.07}
            linkLabel={linkLabel}
          />
        ))}
      </div>
    </div>
  );
}

export default function AirspaceProducts({ imageMap = {} }: { imageMap?: Record<string, string> }) {
  const t = useTranslations('airspaceProducts');
  const tCommon = useTranslations('common');

  const catKeys = ['system', 'fixed', 'portable'] as const;

  const PRODUCT_COUNTS: Record<typeof catKeys[number], number> = {
    system: 4,
    fixed: 5,
    portable: 5,
  };

  const categories = catKeys.map((k) => ({
    key: k,
    title: t(`categories.${k}.title`),
    desc: t(`categories.${k}.desc`),
    products: Array.from({ length: PRODUCT_COUNTS[k] }, (_, i) => {
      const baseName = PRODUCT_IMAGE_BASES[k]?.[i];
      return {
        name: t(`categories.${k}.products.${i}.name` as Parameters<typeof t>[0]),
        desc: t(`categories.${k}.products.${i}.desc` as Parameters<typeof t>[0]),
        imageSrc: baseName ? imageMap[baseName] : undefined,
      };
    }),
  }));

  const linkLabel = tCommon('viewOnTerjin');

  return (
    <section id="airspace-products" className="bg-background-alt py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            {t('label')}
          </span>
          <SectionTitle title={t('title')} subtitle={t('subtitle')} withAccent />
        </motion.div>

        {/* Three category sections */}
        {categories.map((cat, idx) => (
          <CategorySection
            key={cat.key}
            title={cat.title}
            desc={cat.desc}
            products={cat.products}
            linkLabel={linkLabel}
            baseDelay={idx * 0.05}
          />
        ))}
      </div>
    </section>
  );
}
