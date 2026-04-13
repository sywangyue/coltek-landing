import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Download } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function DownloadPage() {
  const t = useTranslations('download');

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            {t('title')}
          </h1>
          <p className="text-base text-foreground-muted mb-16">
            {t('subtitle')}
          </p>

          {/* Placeholder area */}
          <div className="border-2 border-dashed border-gray-300 rounded-2xl py-24 px-8 flex flex-col items-center gap-4">
            <Download size={48} className="text-gray-300" />
            <span className="text-lg font-medium text-gray-400">{t('comingSoon')}</span>
          </div>

          <div className="mt-12">
            <Link
              href="../"
              className="text-sm text-foreground-muted hover:text-primary transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
