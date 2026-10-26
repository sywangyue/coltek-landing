import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import content from '@/lib/news/ibc-2026.json';

type Props = { params: Promise<{ locale: string }> };
const vizrt = 'https://www.vizrt.com/blog/gaussian-splatting-virtual-production-environments/';
const plugin = 'https://www.xgrids.com/lccUE/';
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const article = content[locale === 'zh' ? 'zh' : 'en'];
  return {
    title: `${article.title} | Sunova Innovation`,
    description: article.summary,
    alternates: { canonical: `https://www.sunova-innovation.nl/${locale}/news/ibc-2026`, languages: Object.fromEntries(['zh','en','de','nl'].map(l => [l, `https://www.sunova-innovation.nl/${l}/news/ibc-2026`])) },
    openGraph: { title: article.title, description: article.summary, type: 'article', publishedTime: '2026-10-26', images: [{ url: 'https://www.sunova-innovation.nl/images/news/ibc-2026/ibc-01.webp' }] },
  };
}
export default async function Ibc2026Page({ params }: Props) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  const article = content[isZh ? 'zh' : 'en'];
  const back = ({zh:'返回新闻',en:'Back to News',de:'Zurück zu den Nachrichten',nl:'Terug naar nieuws'} as Record<string,string>)[locale] || 'Back to News';
  const tag = ({zh:'活动',en:'Event',de:'Veranstaltung',nl:'Evenement'} as Record<string,string>)[locale] || 'Event';
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-white pt-24 pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${locale}/news`} className="inline-flex items-center gap-1.5 text-sm text-foreground-muted hover:text-primary transition-colors mb-8"><ArrowLeft size={14} />{back}</Link>
          <div className="flex items-center gap-3 mb-4"><span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">{tag}</span><time dateTime="2026-10-26" className="text-xs text-foreground-muted">2026-10-26</time></div>
          <article lang={isZh ? 'zh' : 'en'} className="max-w-none">
            <h1 className="font-display text-3xl font-bold text-foreground leading-tight mb-8">{article.title}</h1>
            {article.blocks.map((block, i) => {
              if (block.type === 'image' && 'src' in block) return <div key={i} className="my-8 rounded-xl overflow-hidden"><Image src={block.src!} alt={block.alt!} width={block.width} height={block.height} sizes="(max-width: 768px) 100vw, 704px" className="w-full h-auto" /></div>;
              if (block.type === 'heading') return <h2 key={i} className="font-display text-xl font-bold text-foreground mt-10 mb-4">{block.text}</h2>;
              return <p key={i} className="text-foreground-muted leading-relaxed mb-6">{block.text}{i === 0 && <> <a href={vizrt} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">{isZh ? '阅读 Vizrt 原文' : 'Read the Vizrt article'}</a></>}</p>;
            })}
            <p className="text-sm text-foreground-muted leading-relaxed mt-8">{isZh ? '插件功能与版本说明：' : 'Plugin features and editions: '}<a href={plugin} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">XGRIDS LCC Plugin for Unreal Engine</a></p>
            <Link href={`/${locale}/#contact`} className="inline-flex mt-6 text-primary font-medium hover:underline">{isZh ? '联系 Sunova，预约演示 →' : 'Contact Sunova to request a demonstration →'}</Link>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  );
}
