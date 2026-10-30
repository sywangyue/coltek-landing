import WissonP3 from '@/components/payloads/WissonP3';
import {getWissonCopy} from '@/lib/wisson-copy';
type Props = {params: Promise<{locale: string}>};
export async function generateMetadata({params}: Props) {
 const {locale}=await params;const w=getWissonCopy(locale);
 const url=(lang:string)=>`https://www.sunova-innovation.nl/${lang}/payloads/wisson-p3`;
 return {title: w(64)+' | Sunova Innovation',description:w(13),alternates:{canonical:url(locale),languages:Object.fromEntries(['zh','en','de','nl'].map(l=>[l,url(l)]))}};
}
export default function Page(){return <WissonP3/>}
