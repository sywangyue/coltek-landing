import { getTranslations } from 'next-intl/server';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const TAG_STYLES: Record<string, string> = {
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
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'news' });

  const items = t.raw('items') as NewsItem[];

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-white pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page header */}
          <div className="mb-12">
            <Link
              href={`/${locale}/#news`}
              className="inline-flex items-center gap-1.5 text-sm text-foreground-muted hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={14} />
              Back
            </Link>
            <span className="block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              {t('subtitle')}
            </span>
            <h1 className="font-display text-4xl font-bold text-foreground">
              {t('title')}
            </h1>
          </div>

          {/* News grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => {
              const href = item.slug ? `/${locale}/news/${item.slug}` : null;
              const inner = (
                <>
                  <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full ${tagStyle(item.type)}`}>
                    {item.type}
                  </span>
                  <h2 className="font-semibold text-foreground leading-snug">{item.title}</h2>
                  <div className="flex items-center gap-1.5 text-xs text-foreground-muted">
                    <Calendar size={12} />
                    <time>{item.date}</time>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">{item.summary}</p>
                  {href && (
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-auto">
                      {t('readMore')} →
                    </span>
                  )}
                </>
              );
              return href ? (
                <Link key={i} href={href} className="bg-white rounded-[8px] border border-border p-6 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-md transition-all duration-200 no-underline">
                  {inner}
                </Link>
              ) : (
                <article key={i} className="bg-white rounded-[8px] border border-border p-6 flex flex-col gap-3">
                  {inner}
                </article>
              );
            })}
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
