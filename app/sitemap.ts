import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'de', 'nl', 'zh'];
  const baseUrl = 'https://sunova-innovation.nl';

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }));
}
