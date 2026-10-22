'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// ── Easing (framer-motion v12 compatible) ────────────────────────────────────
const EASE = [0.25, 0.1, 0.25, 1] as const;

// ── Types ────────────────────────────────────────────────────────────────────
interface PayloadItem {
  id: string;
  name: string;
  tagline: string;
  specs: string[];
  image: string;
  slug: string;
}

interface CategoryData {
  key: string;
  title: string;
  desc: string;
  items: PayloadItem[];
}

// ── Payload Card ─────────────────────────────────────────────────────────────
function PayloadCard({ item, href, viewLabel }: { item: PayloadItem; href: string; viewLabel: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <Link
        href={href}
        className="group bg-white border border-border rounded-[12px] overflow-hidden flex flex-col lg:flex-row hover:shadow-lg transition-shadow duration-300 no-underline"
      >
        {/* Image */}
        <div className="relative bg-[#F1F5F9] h-56 lg:h-auto lg:w-[420px] lg:flex-shrink-0 lg:min-h-[260px]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 1024px) 100vw, 420px"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 lg:p-8">
          <h3 className="font-display text-xl font-bold text-foreground mb-1">{item.name}</h3>
          <p className="text-foreground-muted mb-4 leading-snug">{item.tagline}</p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {item.specs.map((spec, i) => (
              <span
                key={i}
                className="inline-block px-2 py-0.5 text-xs font-medium bg-background-alt text-foreground-muted rounded-full border border-border"
              >
                {spec}
              </span>
            ))}
          </div>
          <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary self-start">
            {viewLabel} <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function PayloadsPage() {
  const t = useTranslations('payloads');
  const locale = useLocale();
  const categories = t.raw('categories') as CategoryData[];

  return (
    <main>
      <Navbar />

      {/* ── A. Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-white pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-foreground-muted mb-8">
            <Link href={`/${locale}/`} className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{t('hero.title')}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              {t('hero.label')}
            </span>
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-foreground-muted leading-relaxed">{t('hero.description')}</p>
          </motion.div>
        </div>
      </section>

      {/* ── B. Categories (grouped by application) ───────────────────────── */}
      {categories.map((cat, i) => (
        <section key={cat.key} className={`py-16 ${i % 2 === 0 ? 'bg-background-alt' : 'bg-white'}`}>
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

            <div className="flex flex-col gap-6">
              {cat.items.map((item) => (
                <PayloadCard
                  key={item.id}
                  item={item}
                  href={`/${locale}/payloads/${item.slug}`}
                  viewLabel={t('viewProduct')}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
}
