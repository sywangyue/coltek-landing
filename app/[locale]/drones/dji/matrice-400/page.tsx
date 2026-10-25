import type { Metadata } from 'next';
import Matrice400 from '@/components/drones/Matrice400';

const metadataByLocale = {
  zh: { title: 'DJI Matrice 400｜行业无人机与配置咨询 · Sunova Innovation', description: '了解 Matrice 400 的核心能力、RTK、载荷方案与关键参数，向 Sunova 咨询适合项目的采购配置。' },
  en: { title: 'DJI Matrice 400 | Specifications & configuration · Sunova Innovation', description: 'Explore Matrice 400 capabilities, RTK, payload options and key specifications. Request a configuration and quotation for your project.' },
  de: { title: 'DJI Matrice 400 | Technische Daten & Konfiguration · Sunova Innovation', description: 'Entdecken Sie die Funktionen, RTK, Nutzlastoptionen und technischen Daten der Matrice 400. Fragen Sie eine passende Konfiguration und ein Angebot an.' },
  nl: { title: 'DJI Matrice 400 | Specificaties & configuratie · Sunova Innovation', description: 'Ontdek de functies, RTK, payloadopties en specificaties van de Matrice 400. Vraag een passende configuratie en offerte aan voor uw project.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const metadata = metadataByLocale[locale as keyof typeof metadataByLocale] ?? metadataByLocale.en;
  const path = `/${locale}/drones/dji/matrice-400`;
  return {
    ...metadata,
    alternates: {
      canonical: `https://www.sunova-innovation.nl${path}`,
      languages: Object.fromEntries(['zh', 'en', 'de', 'nl'].map(lang => [lang, `https://www.sunova-innovation.nl/${lang}/drones/dji/matrice-400`])),
    },
    openGraph: { ...metadata, url: `https://www.sunova-innovation.nl${path}`, images: ['https://www.sunova-innovation.nl/images/drones/dji/m400-landscape.webp'] },
  };
}

export default function Page() {
  return <Matrice400 />;
}
