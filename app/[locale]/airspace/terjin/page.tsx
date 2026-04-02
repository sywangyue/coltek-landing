import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AirspaceProducts from '@/components/airspace/AirspaceProducts';
import AirspaceShowcase from '@/components/airspace/AirspaceShowcase';
import AirspaceIndustries from '@/components/airspace/AirspaceIndustries';
import { resolveImageDir } from '@/lib/resolveImages';

export default async function TerjinPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const airspaceImages = resolveImageDir('images/airspace');

  return (
    <main>
      <Navbar />

      {/* Brand Hero */}
      <section className="bg-background-alt pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-foreground-muted mb-8">
            <Link href={`/${locale}/`} className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Terjin</span>
          </nav>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Airspace Security
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Terjin
          </h1>
          <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">
            Comprehensive airspace security system — multi-sensor drone detection, real-time
            tracking, and intelligent countermeasure coordination.
          </p>
        </div>
      </section>

      <AirspaceProducts imageMap={airspaceImages} />
      <AirspaceShowcase />
      <AirspaceIndustries />

      <Footer />
    </main>
  );
}
