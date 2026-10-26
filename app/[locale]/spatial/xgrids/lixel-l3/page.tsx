import type {Metadata} from 'next';
import XgridsProduct from '@/components/spatial/XgridsProduct';
import {getXgridsProduct} from '@/lib/xgrids-products';
type Props={params:Promise<{locale:string}>};
export function generateStaticParams(){return ['zh','en','de','nl'].map(locale=>({locale}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {locale}=await params;const p=getXgridsProduct('lixel-l3',locale)!;const url='https://www.sunova-innovation.nl/'+locale+'/spatial/xgrids/lixel-l3';return {title:p.name+' | '+p.headline+' · Sunova Innovation',description:p.description,alternates:{canonical:url,languages:Object.fromEntries(['zh','en','de','nl'].map(l=>[l,'https://www.sunova-innovation.nl/'+l+'/spatial/xgrids/lixel-l3']))},openGraph:{title:p.name,description:p.description,url,images:['https://www.sunova-innovation.nl'+p.image]}};}
export default async function Page({params}:Props){const {locale}=await params;return <XgridsProduct data={getXgridsProduct('lixel-l3',locale)!} locale={locale}/>;}
