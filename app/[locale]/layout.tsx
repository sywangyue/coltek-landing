import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Analytics } from '@vercel/analytics/next';
import { routing } from '@/i18n/routing';
import CookieBanner from '@/components/layout/CookieBanner';
import '../globals.css';

// Using system fonts to avoid Google Fonts network dependency in local dev
const inter = { variable: '--font-inter', className: '' };
const spaceGrotesk = { variable: '--font-space-grotesk', className: '' };
const notoSansSC = { variable: '--font-noto-sans-sc', className: '' };

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://sunova-innovation.nl',
      siteName: 'Coltek',
      locale,
      type: 'website',
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'de' | 'nl' | 'zh')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${spaceGrotesk.variable} ${notoSansSC.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <CookieBanner />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
