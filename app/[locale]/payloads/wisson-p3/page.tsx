import WissonP3 from '@/components/payloads/WissonP3';
import {notFound} from 'next/navigation';
export const metadata={title:'WISSON Orion AP3-P3 清洁负载 | Sunova Innovation',description:'了解万勋P3空中柔韧清洗系统的核心优势、系统配置与建筑立面应用，咨询适合项目的设备方案。',alternates:{canonical:'https://www.sunova-innovation.nl/zh/payloads/wisson-p3'}};
export default async function Page({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(locale!=='zh')notFound();return <WissonP3/>}
