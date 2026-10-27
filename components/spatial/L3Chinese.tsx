'use client';

import {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import ProductSectionNav from './ProductSectionNav';
import Link from 'next/link';
import {ArrowRight, ArrowDown, ArrowUpRight, Check, ScanLine, Sparkles, Globe2, Gamepad2, Boxes, Map, Building2, Glasses, Radar, Cpu, Network} from 'lucide-react';
import {useLocale} from 'next-intl';
import {l3Translations} from '@/lib/l3-translations';
import type {XgridsProductData} from '@/lib/xgrids-products';

const width='mx-auto max-w-7xl px-6 sm:px-10';
const heading='text-3xl font-semibold leading-tight tracking-tight sm:text-5xl';
const action='inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600';


function Picture({file,alt,className=''}:{file:string;alt:string;className?:string}){
 return <div className={`relative overflow-hidden ${className}`}><Image src={`/images/spatial/official/${file}`} alt={alt} fill sizes="(max-width:768px) 100vw, 65vw" className="object-contain"/></div>;
}


function useL3Text(){const locale=useLocale();return (source:string)=>locale==='zh'?source:(l3Translations[source]?.[({en:0,de:1,nl:2} as Record<string,number>)[locale]??0]??source);}
const mediaBase='https://cdn-bukbb1.xgrids.cloud/ep/dc/officialWebsite/LixelL3/';
function OfficialVideo({file,label,className='',fullFilm=false}:{file:string;label:string;className?:string;fullFilm?:boolean}){
 const t=useL3Text();
 const ref=useRef<HTMLVideoElement>(null);
 const [failed,setFailed]=useState(false);
 const url=mediaBase+file;
 useEffect(()=>{
  const video=ref.current;if(!video)return;
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const observer=new IntersectionObserver(([entry])=>{
   if(entry.isIntersecting){
    if(!video.getAttribute('src')){video.src=url;video.load();}
    if(!motion.matches&&!fullFilm)void video.play().catch(()=>{/* Native controls remain available when autoplay is blocked. */});
   }else video.pause();
  },{threshold:0.2});
  observer.observe(video);
  return()=>{observer.disconnect();video.pause();video.removeAttribute('src');video.load();};
 },[url,fullFilm]);
 return <div className={`relative overflow-hidden bg-[#111820] ${className}`}>
  <video ref={ref} aria-label={label} poster={url+'?x-oss-process=video/snapshot,t_1000,w_1200,m_fast'} controls muted={!fullFilm} loop={!fullFilm} playsInline preload="none" onError={()=>setFailed(true)} className="absolute inset-0 h-full w-full object-contain"/>
  {failed&&<p role="status" className="absolute inset-x-0 bottom-0 bg-slate-950 p-4 text-sm text-white">{t("视频暂时无法加载。")}<a className="ml-2 underline" href="https://www.xgrids.com/intl/lixell3" target="_blank" rel="noopener noreferrer">{t("查看官方演示")}</a></p>}
 </div>;
}

export default function L3Chinese({data:p}:{data:XgridsProductData}){
 const t=useL3Text();const locale=useLocale();
 const results=[
 {name:t("真彩点云"),tag:t("量测与工程分析"),image:'l3-pointcloud.webp',video:'1.6/xgrids-l3-colorized-point-cloud-church.mp4',description:t("保留空间几何与颜色，支持尺寸量测、切片、体积计算和后续工程处理。"),software:'LixelStudio',formats:'LAS · E57 · RCP · PLY · ILAS'},
 {name:t("纹理网格"),tag:t("连续的三维表面"),image:'l3-mesh.webp',video:'1.6/xgrids-lixelstudio-textured-mesh-model.mp4',description:t("将扫描数据重建为带纹理的表面模型，衔接三维展示与模型应用。"),software:'LixelStudio',formats:'OBJ · OSGB'},
 {name:t("3D 高斯泼溅"),tag:t("照片级空间呈现"),image:'l3-3dgs.webp',video:'1.6/xgrids-lcc-gaussian-splatting-church-reconstruction.mp4',description:t("用 3DGS 表现真实场景的视觉细节，适合空间漫游、数字场景与影视内容制作。"),software:'LCC Studio',formats:'LCC2 · LCC · PLY'},
];
 const [selected,setSelected]=useState(0);
 const result=results[selected];
 return <div className="selection:bg-violet-200 selection:text-slate-950">
  <section className="bg-[#07121f] pt-24 text-white">
   <div className={width}><Link href={`/${locale}/spatial/xgrids`} className="text-sm text-slate-300 underline-offset-4 hover:underline">{t("XGRIDS / 全部产品")}</Link>
    <div className="flex flex-wrap items-end justify-between gap-6 py-9 sm:py-12"><div><h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">Lixel L3</h1><p className="mt-4 text-xl text-slate-200 sm:text-2xl">{t("精细测量，也真实还原。")}</p></div><a href="#inquiry" className={action}>{t("咨询配置与报价")}<ArrowUpRight size={17}/></a></div>
   </div>
   <OfficialVideo file="1.1/xgrids-l3-handheld-3d-lidar-scanner-hero_1.mp4" label={t("L3 官方产品动态展示")} className="mx-auto aspect-video max-w-[1600px]"/>
   <div className={`${width} py-8 sm:py-10`}><p className="max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">{t("将激光雷达、真彩视觉、RTK 与触控屏集于一身。一次采集，为工程量测留下几何数据，也为空间展示保留视觉细节。")}</p></div>
  </section>
  <ProductSectionNav label={t("L3 页面导航")} items={[['capabilities',t("核心能力")],['outputs',t("数据成果")],['workflow',t("作业流程")],['specifications',t("技术参数")],['inquiry',t("咨询采购")]]}/>

  <section id="capabilities" className={`${width} scroll-mt-36 py-16 sm:py-24`}>
   <div className="mb-10 grid gap-5 md:grid-cols-2 md:items-end"><h2 className={heading}>{t("细节，经得起量测。")}</h2><p className="max-w-lg text-base leading-8 text-slate-600">{t("L3 的精度分为实时与后处理两组指标。现场先看清采集结果，再按交付要求完成数据处理。")}</p></div>
   <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
    <OfficialVideo file="1.4/xgrids-l3-point-cloud-accuracy-benchmark.mp4" label={t("L3 官方点云精度演示")} className="aspect-video rounded-xl"/>
    <div><h3 className="text-xl font-semibold">{t("从现场检查到精细交付")}</h3><dl className="mt-5 divide-y divide-slate-200">
     <div className="flex items-baseline justify-between gap-4 py-5"><dt className="text-sm text-slate-600">{t("后处理相对精度¹")}</dt><dd className="text-3xl font-semibold">5 <span className="text-lg">mm</span></dd></div>
     <div className="flex items-baseline justify-between gap-4 py-5"><dt className="text-sm text-slate-600">{t("实时相对精度²")}</dt><dd className="text-3xl font-semibold">1 <span className="text-lg">cm</span></dd></div>
     <div className="flex items-baseline justify-between gap-4 py-5"><dt className="text-sm text-slate-600">{t("后处理绝对精度³")}</dt><dd className="text-3xl font-semibold">2 <span className="text-lg">cm</span></dd></div>
    </dl><p className="mt-5 text-xs leading-6 text-slate-500">{t("¹ 500 m² 专用测试场景，1σ。² 实验室条件。³ 水平与高程 RMSE，需开阔天空、良好 GNSS 与大气条件且无多路径影响。实际表现随作业条件变化。")}</p></div>
   </div>
   <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 sm:mt-24"><div><h3 className="text-3xl font-semibold leading-snug sm:text-4xl">{t("几何之外，")}<br/>{t("把现场的颜色留下来。")}</h3><p className="mt-6 max-w-lg text-base leading-8 text-slate-600">{t("两颗全景相机与一颗前向相机，搭配 1/1.3 英寸 CMOS、4K 分辨率和 DCG HDR，兼顾亮部与暗部细节，为真彩点云、纹理网格和 3DGS 提供视觉数据。")}</p><p className="mt-5 text-sm font-medium text-slate-800">{t("4096 × 3072 分辨率 · 2 全景 + 1 前向")}</p></div><Picture file="l3-vision.jpg" alt={t("L3 官方全景视觉系统与镜头结构")} className="aspect-[4/3] rounded-xl bg-[#10151d]"/></div>
  </section>

  <section id="outputs" className="scroll-mt-36 bg-[#111820] py-16 text-white sm:py-24"><div className={width}>
   <h2 className={heading}>{t("同一处空间，三种交付方式。")}</h2><p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{t("先看成果，再选处理路径。切换官方动态演示，查看点云细节、网格表面与 3DGS 的空间呈现。")}</p>
   <div role="group" aria-label={t("选择数据成果")} className="mb-8 mt-9 flex flex-wrap gap-3">{results.map((item,i)=><button key={item.name} type="button" aria-pressed={selected===i} onClick={()=>setSelected(i)} className={`rounded-lg border px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${selected===i?'border-white bg-white text-slate-950':'border-slate-500 text-slate-200 hover:border-white'}`}>{item.name}</button>)}</div>
   <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
    <OfficialVideo key={result.video} file={result.video} label={`${t("L3 官方成果演示：")}${result.name}`} className="aspect-video w-full"/>
    <div aria-live="polite"><h3 className="text-3xl font-semibold">{result.tag}</h3><p className="mt-5 text-base leading-8 text-slate-300">{result.description}</p><dl className="mt-8 space-y-5 border-t border-slate-600 pt-6"><div><dt className="text-xs text-slate-400">{t("处理软件")}</dt><dd className="mt-2 text-lg">{result.software}</dd></div><div><dt className="text-xs text-slate-400">{t("对应输出格式")}</dt><dd className="mt-2 break-words text-sm leading-7">{result.formats}</dd></div></dl></div>
   </div><p className="mt-7 text-xs leading-6 text-slate-400">{t("扫描时即可查看实时点云；本区展示的是后续交付成果，需对应软件处理。3DGS 与工程点云均可能使用 PLY 扩展名，数据内容不同。")}</p>
  </div></section>

  <section className={`${width} py-16 sm:py-24`}>
   <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]"><div><h2 className={heading}>{t("扫到哪里，")}<br/>{t("现场就能看见。")}</h2><p className="mt-6 text-base leading-8 text-slate-600">{t("4.3 英寸机身触控屏，峰值亮度 1,000 nit。边走边看真彩点云，结合扫描辅助和实时质量检查，及时发现覆盖不足。")}</p><ul className="mt-7 space-y-4 text-sm text-slate-700">{[t("实时真彩点云与视觉辅助定位"),t("模型预览、模型量测与 POI 全景预览"),t("AI 动态物体剔除与噪声过滤")].map(t=><li key={t} className="flex gap-3"><Check size={18} className="shrink-0 text-violet-700"/>{t}</li>)}</ul></div><Picture file="l3-field-preview.jpg" alt={t("L3 官方现场操作实拍与触控屏预览")} className="aspect-[4/3] rounded-xl bg-[#111820]"/></div>
   <figure className="mt-12"><OfficialVideo file="video/L3_video_en.mp4" label={t("L3 官方完整介绍视频")} fullFilm className="aspect-video rounded-xl"/><figcaption className="mt-3 text-xs text-slate-500">{t("Lixel L3 官方完整介绍视频（英文版）。点击播放，可开启声音、拖动进度或全屏观看。")}</figcaption></figure>
  </section>

  <section id="workflow" className="scroll-mt-36 bg-[#f4f5f7] py-16 sm:py-24"><div className={width}>
   <h2 className={heading}>{t("从真实空间，到数字应用。")}</h2>
   <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">{t("数据采集、数据处理、数据应用，连接成完整的空间数字化工作流。")}</p>
   <div className="mt-9 overflow-hidden rounded-xl bg-[#080e20] p-6 text-white sm:p-9" aria-label={t("空间智能平台图解")}>
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4"><h3 className="text-2xl font-semibold">{t("空间智能平台")}</h3><p className="flex items-center gap-3 text-sm text-slate-300">{t("物理世界")}<ArrowRight size={18} aria-hidden="true"/>{t("数字世界")}</p></div>
    <ol className="grid items-stretch gap-5 lg:grid-cols-[1fr_32px_1fr_32px_1fr]">
     <li className="flex flex-col rounded-xl bg-[#151f35] p-6"><h4 className="flex items-center gap-3 text-xl font-semibold"><ScanLine size={27} className="text-blue-300" aria-hidden="true"/>{t("数据采集")}</h4><p className="mt-3 text-sm text-slate-300">{t("记录空间的形状与颜色")}</p><div className="relative my-5 h-48"><Image src={p.image} alt={t("Lixel L3 空间扫描仪官方产品图")} fill sizes="(max-width:1024px) 260px, 300px" className="object-contain"/></div><p className="text-center text-2xl font-semibold">Lixel L3</p><p className="mt-3 text-center text-sm leading-7 text-slate-300">{t("激光雷达 · 视觉 · RTK · IMU")}</p><p className="mt-auto border-t border-slate-600 pt-5 text-center text-sm text-blue-200">{t("现场查看实时点云与采集质量")}</p></li>
     <li aria-hidden="true" className="flex items-center justify-center text-blue-300"><ArrowRight className="hidden lg:block" size={30}/><ArrowDown className="lg:hidden" size={26}/></li>
     <li className="flex flex-col rounded-xl bg-[#151f35] p-6"><h4 className="flex items-center gap-3 text-xl font-semibold"><Cpu size={27} className="text-blue-300" aria-hidden="true"/>{t("数据处理")}</h4><p className="mt-3 text-sm text-slate-300">{t("选择要交付的成果")}</p><div className="flex flex-1 flex-col justify-center divide-y divide-slate-600"><div className="py-7"><Image src="/images/spatial/official/lixelstudio-logo.png" alt={t("LixelStudio 官方图标")} width={48} height={48} className="mb-4 h-12 w-12 object-contain"/><p className="text-xl font-semibold">LixelStudio</p><p className="mt-2 text-sm leading-7 text-slate-300">{t("工程点云 · 纹理网格")}<br/>{t("量测与分析")}</p></div><div className="py-7"><Image src="/images/spatial/official/lccstudio-logo.png" alt={t("LCC Studio 官方图标")} width={48} height={48} className="mb-4 h-12 w-12 object-contain"/><p className="text-xl font-semibold">LCC Studio</p><p className="mt-1 text-xs text-slate-400">Lixel CyberColor</p><p className="mt-2 text-sm leading-7 text-slate-300">{t("3DGS 重建 · 编辑 · 发布")}</p></div></div></li>
     <li aria-hidden="true" className="flex items-center justify-center text-blue-300"><ArrowRight className="hidden lg:block" size={30}/><ArrowDown className="lg:hidden" size={26}/></li>
     <li className="flex flex-col rounded-xl bg-[#151f35] p-6"><h4 className="flex items-center gap-3 text-xl font-semibold"><Network size={27} className="text-blue-300" aria-hidden="true"/>{t("数据应用")}</h4><p className="mt-3 text-sm text-slate-300">{t("把数据用于真实项目")}</p><ul className="my-7 grid flex-1 grid-cols-2 gap-x-3 gap-y-7">{[
      {name:'Web',Icon:Globe2,detail:t("网页展示")}, {name:'Unreal Engine',Icon:Gamepad2,detail:t("三维引擎")}, {name:'Unity',Icon:Boxes,detail:t("互动开发")}, {name:'Cesium',Icon:Map,detail:t("地理空间")}, {name:'Autodesk',Icon:Building2,detail:t("工程设计")}, {name:'Vision Pro',Icon:Glasses,detail:t("空间体验")}
     ].map(({name,Icon,detail})=><li key={name} className="flex flex-col items-center text-center"><Icon size={34} strokeWidth={1.4} className="mb-3 text-blue-100" aria-hidden="true"/><p className="text-sm font-semibold">{name}</p><p className="mt-1 text-xs text-slate-400">{detail}</p></li>)}</ul><p className="border-t border-slate-600 pt-5 text-center text-sm text-blue-200">{t("通过对应格式、插件或 SDK 接入")}</p></li>
    </ol>
    <div className="mt-8 border-t border-slate-600 pt-6"><p className="mb-5 text-sm text-slate-300">{t("支撑整个流程的技术")}</p><ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">{[{name:'Multi-SLAM',detail:t("多传感器融合"),Icon:Radar},{name:t("高性能计算"),detail:t("数据处理"),Icon:Cpu},{name:t("3D 高斯泼溅"),detail:t("真实空间重建"),Icon:Sparkles},{name:t("空间 AI"),detail:t("空间理解与计算"),Icon:Network}].map(({name,detail,Icon})=><li key={name} className="flex items-start gap-3"><Icon size={25} className="shrink-0 text-blue-300" aria-hidden="true"/><div><p className="text-sm font-medium">{name}</p><p className="mt-1 text-xs leading-5 text-slate-400">{detail}</p></div></li>)}</ul></div>
   </div>
   <p className="mt-5 text-xs leading-6 text-slate-500">{t("XGRIDS 平台工作流总览。应用生态不代表所有格式均可直接导入所有平台，具体需核对软件版本、插件与授权。")}</p>
  </div></section>

  <section id="specifications" className={`${width} scroll-mt-36 py-16 sm:py-24`}><div className="flex flex-wrap items-end justify-between gap-5"><h2 className={heading}>{t("选型需要的参数。")}</h2><a href={p.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-violet-700 underline underline-offset-4">{t("官方完整规格")}<ArrowUpRight size={16}/></a></div>
   <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">{t("L3 提供 16 线与 32 线版本，对应点频不同。先确认扫描任务、采集密度和交付要求，再选择具体配置。")}</p>
   <div className="mt-9 grid gap-x-12 gap-y-10 lg:grid-cols-2">{p.specGroups.map(group=><div key={group.title}><h3 className="border-b-2 border-slate-900 pb-4 text-lg font-semibold">{group.title}</h3><dl className="divide-y divide-slate-200">{group.items.map(item=><div key={item.label} className="grid grid-cols-[.8fr_1.2fr] gap-4 py-4"><dt className="text-sm leading-6 text-slate-500">{item.label}</dt><dd className="break-words text-sm leading-6 text-slate-900">{item.value}</dd></div>)}</dl></div>)}<div><h3 className="border-b-2 border-slate-900 pb-4 text-lg font-semibold">{t("采购前确认")}</h3><dl className="divide-y divide-slate-200">{[[t("设备版本"),t("16 / 32 线，对应 320,000 / 640,000 点/秒。")],[t("标配配件"),t("底座、充电管家、便携硬箱与背负系统。")],[t("选配与软件"),t("支撑架为选配；处理软件与授权范围在报价中单独确认。")],[t("测试条件"),t("精度、调平与续航均受作业条件影响；RTK 模块定位精度不等于最终模型精度。")]].map(([label,value])=><div key={label} className="grid grid-cols-[.8fr_1.2fr] gap-4 py-4"><dt className="text-sm leading-6 text-slate-500">{label}</dt><dd className="text-sm leading-6">{value}</dd></div>)}</dl></div></div>
   <a href="#inquiry" className={`${action} mt-10`}>{t("让我们协助确认 L3 配置")}<ArrowRight size={17}/></a>
  </section>
 </div>;
}
