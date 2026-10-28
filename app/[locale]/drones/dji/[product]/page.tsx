import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DjiEnterpriseProduct from '@/components/drones/DjiEnterpriseProduct';
import { djiSlugs, getDjiProduct } from '@/lib/dji-products';

const locales = ['zh','en','de','nl'];
export function generateStaticParams() { return locales.flatMap(locale=>djiSlugs.map(product=>({locale,product}))); }
type Props = {params:Promise<{locale:string;product:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {locale,product}=await params;const p=getDjiProduct(product,locale);if(!p)return {};
  const url=`https://www.sunova-innovation.nl/${locale}/drones/dji/${product}`;
  return {title:`${p.name} | ${p.tagline} · Sunova Innovation`,description:p.intro,alternates:{canonical:url,languages:Object.fromEntries(locales.map(lang=>[lang,`https://www.sunova-innovation.nl/${lang}/drones/dji/${product}`]))},openGraph:{title:p.name,description:p.intro,url,images:[`https://www.sunova-innovation.nl${p.hero}`]}};
}
export default async function Page({params}:Props){const {locale,product}=await params;const p=getDjiProduct(product,locale);if(!p)notFound();return <DjiEnterpriseProduct key={`${locale}/${product}`} p={p} locale={locale}/>;}
