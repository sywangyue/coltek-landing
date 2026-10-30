'use client';
import {getWissonCopy} from '@/lib/wisson-copy';

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
      className="h-full"
    >
      <Link
        href={href}
        className="group bg-white border border-border rounded-[12px] overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300 no-underline"
      >
        {/* Image */}
        <div className="relative bg-white aspect-video shrink-0 border-b border-border">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className={`${item.id === 'wisson-p3' ? 'object-cover' : 'object-contain p-6'} group-hover:scale-105 transition-transform duration-300`}
            sizes="(max-width: 767px) 100vw, 50vw"
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
  const locale = useLocale();const w=getWissonCopy(locale);
  const categories = [...(t.raw('categories') as CategoryData[]), ...[{key:'cleaning', title:w(95), desc:w(96), items:[{id:'wisson-p3', name:'WISSON Orion AP3-P3', tagline:w(97), specs:[w(98),w(99),w(100)],image:'/images/payloads/wisson-p3/facade-hero.jpg',slug:'wisson-p3'}] }]];

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

      <div className="bg-background-alt py-12 lg:py-16"><div className="mx-auto grid max-w-7xl items-stretch gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
      {categories.map(cat=><section key={cat.key} className="flex min-w-0 flex-col"><div className="mb-6"><h2 className="font-display text-2xl font-bold text-foreground">{cat.title}</h2><p className="mt-3 text-sm leading-7 text-foreground-muted">{cat.desc}</p></div><div className="grid flex-1 gap-6">{cat.items.map(item=><PayloadCard key={item.id} item={item} href={`/${locale}/payloads/${item.slug}`} viewLabel={t('viewProduct')}/>)}</div></section>)}
      </div></div>

      <Footer />
    </main>
  );
}
