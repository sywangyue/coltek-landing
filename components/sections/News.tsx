'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';

const EASE = [0.25, 0.1, 0.25, 1] as const;

const TAG_STYLES: Record<string, string> = {
  Award:          'bg-yellow-100 text-yellow-700',
  获奖:           'bg-yellow-100 text-yellow-700',
  Partnership:    'bg-primary/10 text-primary',
  Partnerschaft:  'bg-primary/10 text-primary',
  Partnerschap:   'bg-primary/10 text-primary',
  合作伙伴:       'bg-primary/10 text-primary',

  Event:          'bg-accent/10 text-accent',
  Veranstaltung:  'bg-accent/10 text-accent',
  Evenement:      'bg-accent/10 text-accent',
  活动:           'bg-accent/10 text-accent',

  'Product Update':  'bg-foreground-muted/10 text-foreground-muted',
  'Produkt-Update':  'bg-foreground-muted/10 text-foreground-muted',
  Productupdates:    'bg-foreground-muted/10 text-foreground-muted',
  产品更新:          'bg-foreground-muted/10 text-foreground-muted',
};

function tagStyle(type: string): string {
  return TAG_STYLES[type] ?? 'bg-foreground-muted/10 text-foreground-muted';
}

interface NewsItem {
  type: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  slug?: string;
  thumbnail?: string;
}

function NewsCard({ item, delay }: { item: NewsItem; delay: number }) {
  const t = useTranslations('news');
  const locale = useLocale();
  const href = item.slug ? `/${locale}/news/${item.slug}` : null;

  const inner = (
    <>
      {/* Thumbnail */}
      {item.thumbnail && (
        <div className="w-full h-40 overflow-hidden rounded-[4px] -mx-0 mb-1">
          <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
        </div>
      )}
      {/* Tag */}
      <span
        className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full ${tagStyle(item.type)}`}
      >
        {item.type}
      </span>

      {/* Title */}
      <h3 className="font-semibold text-foreground leading-snug">{item.title}</h3>

      {/* Date */}
      <div className="flex items-center gap-1.5 text-xs text-foreground-muted">
        <Calendar size={12} />
        <time>{item.date}</time>
      </div>

      {/* Summary */}
      <p className="text-sm text-foreground-muted leading-relaxed flex-1">{item.summary}</p>

      {/* Read more */}
      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
        {t('readMore')} <ArrowRight size={14} />
      </span>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className="
        snap-start shrink-0 w-[300px] sm:w-[320px]
        bg-white rounded-[8px] border border-border
        p-6 flex flex-col gap-3
        hover:-translate-y-1 hover:shadow-md transition-all duration-200
      "
    >
      {href ? (
        <Link href={href} className="flex flex-col gap-3 flex-1 no-underline">
          {inner}
        </Link>
      ) : inner}
    </motion.article>
  );
}

export default function News() {
  const t = useTranslations('news');
  const locale = useLocale();

  const allItems = t.raw('items') as NewsItem[];
  const items = allItems.slice(0, 3);

  // Desktop scroller: arrow buttons step one card at a time
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, [updateArrows]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: 'smooth' });
  };

  const arrowClass =
    'w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground ' +
    'hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:pointer-events-none';

  return (
    <section id="news" className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* ── Left: title area ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:w-[30%] shrink-0 flex flex-col justify-between"
          >
            <div>
              <SectionTitle
                title={t('title')}
                subtitle={t('subtitle')}
                withAccent
              />
            </div>
            <div className="flex items-center justify-between gap-4 mt-6 lg:mt-0">
              <Link
                href={`/${locale}/news`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
              >
                {t('viewAll')} <ArrowRight size={14} />
              </Link>
              <div className="hidden lg:flex items-center gap-2">
                <button type="button" aria-label="Previous" onClick={() => scrollByCard(-1)} disabled={!canPrev} className={arrowClass}>
                  <ChevronLeft size={18} />
                </button>
                <button type="button" aria-label="Next" onClick={() => scrollByCard(1)} disabled={!canNext} className={arrowClass}>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* ── Right: horizontal scroll cards ── */}
          <div className="flex-1 min-w-0">
            {/* Mobile: vertical stack */}
            <div className="flex flex-col gap-4 lg:hidden">
              {items.map((item, i) => (
                <NewsCard key={i} item={item} delay={i * 0.1} />
              ))}
            </div>

            {/* Desktop: horizontal scroll */}
            <div
              ref={scrollerRef}
              onScroll={updateArrows}
              className="hidden lg:flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2"
            >
              {items.map((item, i) => (
                <NewsCard key={i} item={item} delay={i * 0.12} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
