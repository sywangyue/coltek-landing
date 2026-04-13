'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import { Shield, ChevronDown, ChevronUp, ImageIcon } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// ── Easing (framer-motion v12 compatible) ────────────────────────────────────
const EASE = [0.25, 0.1, 0.25, 1] as const;

// ── Types ────────────────────────────────────────────────────────────────────
interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  specs: string[];
  description: string;
  image?: string;
}

interface CategoryData {
  title: string;
  desc: string;
  items: ProductItem[];
}

interface ScenarioItem {
  id: string;
  title: string;
  desc: string;
  image: string;
}

// ── Product Image with fallback ──────────────────────────────────────────────
function ProductImage({ src, alt }: { src?: string; alt: string }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    );
  }
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 group-hover:scale-105 transition-transform duration-300">
      <Shield size={36} className="text-primary/30" />
      <span className="text-xs text-foreground-muted/50 font-medium">{alt}</span>
    </div>
  );
}

// ── Scenario Image with fallback ─────────────────────────────────────────────
function ScenarioImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#F1F5F9]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <ImageIcon size={32} className="text-foreground-muted/20" />
      </div>
    </div>
  );
}

// ── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({
  product,
  viewLabel,
  hideLabel,
  delay,
  fullWidth,
}: {
  product: ProductItem;
  viewLabel: string;
  hideLabel: string;
  delay: number;
  fullWidth?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className={`group bg-white border border-border rounded-[12px] overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 ${fullWidth ? 'lg:flex-row' : ''}`}
    >
      {/* Image */}
      <div
        className={`relative bg-[#F1F5F9] overflow-hidden rounded-t-[12px] ${
          fullWidth
            ? 'lg:rounded-t-none lg:rounded-l-[12px] lg:w-80 lg:flex-shrink-0 h-52 lg:h-auto'
            : 'h-44'
        }`}
      >
        <ProductImage src={product.image} alt={product.name} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display text-lg font-bold text-foreground mb-1">{product.name}</h3>
        <p className="text-sm text-foreground-muted mb-3 leading-snug">{product.tagline}</p>

        {/* Spec badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.specs.map((spec, i) => (
            <span
              key={i}
              className="inline-block px-2 py-0.5 text-xs font-medium bg-background-alt text-foreground-muted rounded-full border border-border"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Expand / collapse button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors self-start"
        >
          {open ? (
            <>
              {hideLabel} <ChevronUp size={15} />
            </>
          ) : (
            <>
              {viewLabel} <ChevronDown size={15} />
            </>
          )}
        </button>

        {/* Expanded description */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="desc"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="overflow-hidden"
            >
              <p className="mt-3 text-sm text-foreground-muted leading-relaxed bg-gray-50 rounded-b-lg p-4 -mx-1">
                {product.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ── Category Section ─────────────────────────────────────────────────────────
function CategorySection({
  category,
  viewLabel,
  hideLabel,
  bgWhite,
}: {
  category: CategoryData & { key: string };
  viewLabel: string;
  hideLabel: string;
  bgWhite: boolean;
}) {
  const isPortable = category.key === 'portable';
  const items = category.items;

  return (
    <section className={`py-16 ${bgWhite ? 'bg-white' : 'bg-background-alt'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-10"
        >
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-foreground-muted bg-background-alt rounded-full border border-border mb-3">
            {category.title}
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground mb-2">
            {category.title}
          </h2>
          <p className="text-foreground-muted">{category.desc}</p>
        </motion.div>

        {/* Product grid */}
        {isPortable ? (
          // Portable: single full-width card
          <div className="max-w-3xl">
            {items.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                viewLabel={viewLabel}
                hideLabel={hideLabel}
                delay={i * 0.08}
                fullWidth
              />
            ))}
          </div>
        ) : (
          // Fixed / Software: responsive grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                viewLabel={viewLabel}
                hideLabel={hideLabel}
                delay={i * 0.07}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function DroneGuardPage() {
  const t = useTranslations('droneguard');
  const locale = useLocale();

  const viewLabel = t('viewDetails');
  const hideLabel = t('hideDetails');

  const portable = t.raw('products.portable') as CategoryData;
  const fixed = t.raw('products.fixed') as CategoryData;
  const software = t.raw('products.software') as CategoryData;
  const scenarios = t.raw('scenarios.items') as ScenarioItem[];
  const scenariosTitle = t('scenarios.title');

  const categories = [
    { key: 'portable', ...portable },
    { key: 'fixed', ...fixed },
    { key: 'software', ...software },
  ];

  return (
    <main>
      <Navbar />

      {/* ── A. Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-white pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-foreground-muted mb-8">
            <Link href={`/${locale}/`} className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">DroneGuard</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-5">
              DroneGuard
            </span>
            <h1 className="font-space-grotesk text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-foreground-muted max-w-3xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── B. Products (3 categories) ───────────────────────────────────── */}
      {categories.map((cat, i) => (
        <CategorySection
          key={cat.key}
          category={cat}
          viewLabel={viewLabel}
          hideLabel={hideLabel}
          bgWhite={i % 2 === 0}
        />
      ))}

      {/* ── C. Application Scenarios ─────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              {scenariosTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, i) => (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                className="bg-white rounded-[12px] overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <ScenarioImage src={scenario.image} alt={scenario.title} />
                <div className="p-4">
                  <h3 className="font-display text-base font-bold text-foreground mb-1.5">
                    {scenario.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-snug line-clamp-2">
                    {scenario.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
