import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
const locales=['en','de','nl','zh'];
return locales.flatMap(locale=>[{url:`https://sunova-innovation.nl/${locale}`,lastModified:new Date(),changeFrequency:'monthly' as const,priority:1},{url:`https://www.sunova-innovation.nl/${locale}/spatial/xgrids/lixel-l3`,lastModified:new Date(),changeFrequency:'monthly' as const,priority:0.8},...['lixel-k2','portalcam','lixel-studio','lixel-go','lcc-studio','lcc-for-revit'].map(slug=>({url:`https://www.sunova-innovation.nl/${locale}/spatial/xgrids/${slug}`,lastModified:new Date(),changeFrequency:'monthly' as const,priority:0.8}))]);
}
