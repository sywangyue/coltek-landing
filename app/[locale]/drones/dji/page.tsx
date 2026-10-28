'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, ExternalLink } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// ── Easing (framer-motion v12 compatible) ────────────────────────────────────
const EASE = [0.25, 0.1, 0.25, 1] as const;

// Official DJI product pages, keyed by product id in messages (dji.categories[].items[].id)
const DJI_LINKS: Record<string, string> = {
  m400:  'https://enterprise.dji.com/matrice-400',
  m4t:   'https://enterprise.dji.com/matrice-4-series',
  m4e:   'https://enterprise.dji.com/matrice-4-series',
  m4d:   'https://enterprise.dji.com/dock-3',
  dock4: 'https://enterprise.dji.com/dock-4',
  fc100: 'https://www.dji.com/flycart-100',
  fc30:  'https://www.dji.com/flycart-30',
  t100:  'https://ag.dji.com/t100',
  t70p:  'https://ag.dji.com/t70p',
  t25p:  'https://ag.dji.com/t25p',
  t30:   'https://ag.dji.com/t30',
  m3m:   'https://ag.dji.com/mavic-3-m',
};

// ── Types ────────────────────────────────────────────────────────────────────
interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  specs: string[];
  image: string;
}

interface CategoryData {
  key: string;
  title: string;
  desc: string;
  items: ProductItem[];
}

// ── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({
  product,
  labels,
  contactHref,
  delay,
}: {
  product: ProductItem;
  labels: { officialSite: string; quote: string };
  contactHref: string;
  delay: number;
}) {
  const locale = useLocale();
  const detailLabel = { zh: '查看产品详情', en: 'View product', de: 'Produkt ansehen', nl: 'Bekijk product' }[locale] ?? 'View product';
  const detailHref = ({m400:'matrice-400',m4t:'matrice-4t',m4e:'matrice-4e',m4d:'matrice-4d-series',dock4:'dock-4'} as Record<string,string>)[product.id] ? `/${locale}/drones/dji/${({m400:'matrice-400',m4t:'matrice-4t',m4e:'matrice-4e',m4d:'matrice-4d-series',dock4:'dock-4'} as Record<string,string>)[product.id]}` : null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className="group bg-white border border-border rounded-[12px] overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image (white: the product shots have transparent or white backgrounds) */}
      <div className="relative aspect-video overflow-hidden bg-slate-100 border-b border-border">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display text-lg font-bold text-foreground mb-1">{product.name}</h3>
        <p className="text-sm text-foreground-muted mb-3 leading-snug">{product.tagline}</p>

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

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
          {detailHref ? (
            <Link href={detailHref} className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent border border-accent/40 rounded-full px-3 py-1 hover:bg-accent/5 transition-colors">
              {detailLabel} <ArrowRight size={12} />
            </Link>
          ) : <a
            href={DJI_LINKS[product.id]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent border border-accent/40 rounded-full px-3 py-1 hover:bg-accent/5 transition-colors"
          >
            {labels.officialSite}
            <ExternalLink size={11} />
          </a>}
          <Link
            href={detailHref ? `${detailHref}#inquiry` : contactHref}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            {labels.quote} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function DjiPage() {
  const t = useTranslations('dji');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const categories = t.raw('categories') as CategoryData[];
  const contactHref = `/${locale}/#contact`;
  const labels = { officialSite: t('officialSite'), quote: t('quote') };

  return (
    <main>
      <Navbar />

      {/* ── A. Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-white pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-foreground-muted mb-8">
            <Link href={`/${locale}/`} className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span>{tNav('drones')}</span>
            <span>/</span>
            <span className="text-foreground font-medium">{tNav('dji')}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-5 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              <BadgeCheck size={14} /> {t('hero.badge')}
            </span>
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">{t('hero.title')}</h1>
            <p className="text-lg text-foreground-muted leading-relaxed">{t('hero.description')}</p>
          </motion.div>

          {/* Jump links to the categories */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <a
                key={cat.key}
                href={`#${cat.key}`}
                className="px-4 py-1.5 text-sm font-medium text-foreground border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── B. Categories ────────────────────────────────────────────────── */}
      {categories.map((cat, i) => (
        <section
          key={cat.key}
          id={cat.key}
          className={`py-16 scroll-mt-20 ${i % 2 === 0 ? 'bg-background-alt' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-8"
            >
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">{cat.title}</h2>
              <p className="text-foreground-muted">{cat.desc}</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.items.map((product, j) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  labels={labels}
                  contactHref={contactHref}
                  delay={j * 0.07}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── C. Payload cross-link ────────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 border border-border rounded-[12px] p-6 lg:p-8">
            <div className="relative w-full md:w-72 h-32 shrink-0 bg-[#F1F5F9] rounded-lg">
              <Image
                src="/images/payloads/yunscan/on-m400.png"
                alt="YunScan001 on a DJI Matrice 400"
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 100vw, 288px"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-display text-xl font-bold text-foreground mb-1">{t('payloads.title')}</h2>
              <p className="text-foreground-muted">{t('payloads.desc')}</p>
            </div>
            <Link
              href={`/${locale}/payloads/yunscan`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/40 rounded-[8px] px-5 py-2.5 hover:bg-primary/5 transition-colors shrink-0"
            >
              {t('payloads.button')} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── D. Contact CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-background-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">{t('contact.title')}</h2>
          <p className="text-foreground-muted leading-relaxed mb-8">{t('contact.desc')}</p>
          <Link
            href={contactHref}
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-[8px] hover:bg-primary-dark transition-colors"
          >
            {t('contact.button')} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
