'use client';
import Image from 'next/image';
import Link from 'next/link';
import {useLocale} from 'next-intl';
import {ArrowRight,ArrowDown,ScanLine,Cpu,Network,Globe2,Gamepad2,Boxes,Map,Building2,Glasses,Radar,Sparkles} from 'lucide-react';
import {l3Translations} from '@/lib/l3-translations';
const heading='text-3xl font-semibold leading-tight tracking-tight sm:text-4xl';
export default function PlatformWorkflow(){
 const locale=useLocale();const index=({en:0,de:1,nl:2} as Record<string,number>)[locale]??0;
 const t=(s:string)=>locale==='zh'?s:l3Translations[s]?.[index]??s;
 const devices=[
 {name:'Lixel L3',slug:'lixel-l3',image:'/images/spatial/products/l3/kv-hero.jpg',app:'LixelGO → LixelStudio / LCC Studio'},
 {name:'Lixel K2',slug:'lixel-k2',image:'/images/spatial/products/k2/kv-hero.jpg',app:'LixelGO → LixelStudio / LCC Studio'},
 {name:'PortalCam',slug:'portalcam',image:'/images/spatial/official/portalcam-banner.jpg',app:'LCC Scan → LCC Studio'}
 ];
 return (  <section id="platform-workflow" className="mt-16 border-t border-slate-200 py-12 sm:py-16"><div className="">
   <h2 className={heading}>{t("从真实空间，到数字应用。")}</h2>
   <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">{t("数据采集、数据处理、数据应用，连接成完整的空间数字化工作流。")}</p>
   <div className="mt-9 overflow-hidden rounded-xl bg-[#080e20] p-6 text-white sm:p-9" aria-label={t("空间智能平台图解")}>
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4"><h3 className="text-2xl font-semibold">{t("空间智能平台")}</h3><p className="flex items-center gap-3 text-sm text-slate-300">{t("物理世界")}<ArrowRight size={18} aria-hidden="true"/>{t("数字世界")}</p></div>
    <ol className="grid items-stretch gap-5 lg:grid-cols-[1fr_32px_1fr_32px_1fr]">
     <li className="flex flex-col rounded-xl bg-[#151f35] p-5"><h4 className="flex items-center gap-3 text-xl font-semibold"><ScanLine size={27} className="text-blue-300"/>{t("数据采集")}</h4><p className="mt-3 text-sm text-slate-300">{t("记录空间的形状与颜色")}</p><div className="my-5 flex-1 space-y-4">{devices.map(d=><Link key={d.slug} href={`/${locale}/spatial/xgrids/${d.slug}`} className="grid grid-cols-[112px_1fr] items-center gap-x-3 rounded-lg border border-slate-600 p-3 transition-colors hover:border-blue-300 focus-visible:outline-2 focus-visible:outline-blue-300"><div className="relative h-20 overflow-hidden rounded bg-[#080e20]"><Image src={d.image} alt={d.name} fill sizes="(max-width:1024px) 80vw, 300px" className="object-contain"/></div><p className="flex items-center justify-between gap-2 text-lg font-semibold">{d.name}<ArrowRight size={16}/></p><p className="col-span-2 mt-3 text-xs leading-5 text-slate-300">{d.app}</p></Link>)}</div><p className="border-t border-slate-600 pt-5 text-sm text-blue-200">{t("现场查看实时点云与采集质量")}</p></li>
     <li aria-hidden="true" className="flex items-center justify-center text-blue-300"><ArrowRight className="hidden lg:block" size={30}/><ArrowDown className="lg:hidden" size={26}/></li>
     <li className="flex flex-col rounded-xl bg-[#151f35] p-6"><h4 className="flex items-center gap-3 text-xl font-semibold"><Cpu size={27} className="text-blue-300" aria-hidden="true"/>{t("数据处理")}</h4><p className="mt-3 text-sm text-slate-300">{t("选择要交付的成果")}</p><div className="flex flex-1 flex-col justify-evenly divide-y divide-slate-600"><div className="py-7"><Image src="/images/spatial/official/lixelstudio-logo.png" alt={t("LixelStudio 官方图标")} width={48} height={48} className="mb-4 h-12 w-12 object-contain"/><Link href={`/${locale}/spatial/xgrids/lixel-studio`} className="text-xl font-semibold hover:underline">LixelStudio</Link><p className="mt-2 text-xs text-blue-200">Lixel L3 · Lixel K2</p><p className="mt-2 text-sm leading-7 text-slate-300">{t("工程点云 · 纹理网格")}<br/>{t("量测与分析")}</p></div><div className="py-7"><Image src="/images/spatial/official/lccstudio-logo.png" alt={t("LCC Studio 官方图标")} width={48} height={48} className="mb-4 h-12 w-12 object-contain"/><Link href={`/${locale}/spatial/xgrids/lcc-studio`} className="text-xl font-semibold hover:underline">LCC Studio</Link><p className="mt-2 text-xs text-blue-200">Lixel L3 · Lixel K2 · PortalCam</p><p className="mt-1 text-xs text-slate-400">Lixel CyberColor</p><p className="mt-2 text-sm leading-7 text-slate-300">{t("3DGS 重建 · 编辑 · 发布")}</p></div></div></li>
     <li aria-hidden="true" className="flex items-center justify-center text-blue-300"><ArrowRight className="hidden lg:block" size={30}/><ArrowDown className="lg:hidden" size={26}/></li>
     <li className="flex flex-col rounded-xl bg-[#151f35] p-6"><h4 className="flex items-center gap-3 text-xl font-semibold"><Network size={27} className="text-blue-300" aria-hidden="true"/>{t("数据应用")}</h4><p className="mt-3 text-sm text-slate-300">{t("把数据用于真实项目")}</p><ul className="my-7 grid flex-1 grid-cols-2 gap-x-3 gap-y-7">{[
      {name:'Web',Icon:Globe2,detail:t("网页展示")}, {name:'Unreal Engine',Icon:Gamepad2,detail:t("三维引擎")}, {name:'Unity',Icon:Boxes,detail:t("互动开发")}, {name:'Cesium',Icon:Map,detail:t("地理空间")}, {name:'Autodesk',Icon:Building2,detail:t("工程设计")}, {name:'Vision Pro',Icon:Glasses,detail:t("空间体验")}
     ].map(({name,Icon,detail})=><li key={name} className="flex flex-col items-center text-center"><Icon size={34} strokeWidth={1.4} className="mb-3 text-blue-100" aria-hidden="true"/><p className="text-sm font-semibold">{name}</p><p className="mt-1 text-xs text-slate-400">{detail}</p></li>)}</ul><p className="border-t border-slate-600 pt-5 text-center text-sm text-blue-200">{t("通过对应格式、插件或 SDK 接入")}</p></li>
    </ol>
    <div className="mt-8 border-t border-slate-600 pt-6"><p className="mb-5 text-sm text-slate-300">{t("支撑整个流程的技术")}</p><ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">{[{name:'Multi-SLAM',detail:t("多传感器融合"),Icon:Radar},{name:t("高性能计算"),detail:t("数据处理"),Icon:Cpu},{name:t("3D 高斯泼溅"),detail:t("真实空间重建"),Icon:Sparkles},{name:t("空间 AI"),detail:t("空间理解与计算"),Icon:Network}].map(({name,detail,Icon})=><li key={name} className="flex items-start gap-3"><Icon size={25} className="shrink-0 text-blue-300" aria-hidden="true"/><div><p className="text-sm font-medium">{name}</p><p className="mt-1 text-xs leading-5 text-slate-400">{detail}</p></div></li>)}</ul></div>
   </div>
   <p className="mt-5 text-xs leading-6 text-slate-500">{t("XGRIDS 平台工作流总览。应用生态不代表所有格式均可直接导入所有平台，具体需核对软件版本、插件与授权。")}</p>
  </div></section>

);
}
