import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import XgridsProduct from '@/components/spatial/XgridsProduct';
import {getXgridsProduct,products} from '@/lib/xgrids-products';

type Props={params:Promise<{locale:string;product:string}>};
export function generateStaticParams(){return ['zh','en','de','nl'].flatMap(locale=>products.filter(p=>p.kind==='software').map(p=>({locale,product:p.slug})));}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {locale,product}=await params;const p=getXgridsProduct(product,locale);if(!p || p.kind!=='software')notFound();
 const url=`https://www.sunova-innovation.nl/${locale}/spatial/xgrids/${product}`;
 return {title:`${p.name} | ${p.headline} · Sunova Innovation`,description:p.description,alternates:{canonical:url,languages:Object.fromEntries(['zh','en','de','nl'].map(l=>[l,`https://www.sunova-innovation.nl/${l}/spatial/xgrids/${product}`]))},openGraph:{title:p.name,description:p.description,url,images:[`https://www.sunova-innovation.nl${p.image}`]}};
}
export default async function Page({params}:Props){const {locale,product}=await params;const data=getXgridsProduct(product,locale);if(!data || data.kind!=='software')notFound();return <XgridsProduct key={`${locale}/${product}`} data={data} locale={locale}/>;}
