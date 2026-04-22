import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SpatialProducts from '@/components/spatial/SpatialProducts';
import SpatialShowcase from '@/components/spatial/SpatialShowcase';
import SpatialIndustries from '@/components/spatial/SpatialIndustries';
import { resolveImageDir } from '@/lib/resolveImages';

export default async function XgridsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'xgrids' });
  const spatialImages = resolveImageDir('images/spatial/product');

  return (
    <main>
      <Navbar />

      {/* Brand Hero */}
      <section className="bg-white pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-foreground-muted mb-8">
            <Link href={`/${locale}/`} className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">XGRIDS</span>
          </nav>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Spatial Intelligence
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            XGRIDS
          </h1>
          <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">
            {t('heroDescription')}
          </p>
        </div>
      </section>

      <SpatialProducts imageMap={spatialImages} />
      <SpatialShowcase />
      <SpatialIndustries />

      <Footer />
    </main>
  );
}
