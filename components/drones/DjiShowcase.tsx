'use client';
import {useEffect,useRef,useState} from 'react';
import {djiShowcase} from '@/lib/dji-showcase';

function Demonstration({src,poster,label}:{src:string;poster?:string;label:string}){
  const ref=useRef<HTMLVideoElement>(null);
  const [failed,setFailed]=useState(false);
  useEffect(()=>{const video=ref.current;if(!video)return;const reduced=matchMedia('(prefers-reduced-motion: reduce)');const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting&&!reduced.matches){if(!video.src)video.src=src;void video.play().catch(()=>{});}else video.pause();},{threshold:.15});observer.observe(video);return()=>observer.disconnect();},[src]);
  return <div className="overflow-hidden rounded-xl bg-slate-950"><video ref={ref} poster={poster} muted loop playsInline preload="none" disablePictureInPicture tabIndex={-1} aria-label={label} onError={()=>setFailed(true)} className="pointer-events-none aspect-video w-full object-contain"/>{failed&&<p className="p-3 text-xs text-white">{label}</p>}</div>;
}
export default function DjiShowcase({slug,locale}:{slug:string;locale:string}){
 const items=djiShowcase[slug as keyof typeof djiShowcase];if(!items)return null;
 const lang=Math.max(0,['zh','en','de','nl'].indexOf(locale));
 return <section data-testid="dji-showcase" className="bg-white py-16 sm:py-24"><div className="mx-auto max-w-7xl space-y-16 px-5 sm:space-y-24 sm:px-8">{items.map((item,i)=><article key={item.video} className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-14"><div className={i%2?'lg:order-2':''}><Demonstration src={item.video!} poster={item.poster} label={item.title[lang]}/></div><div><h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{item.title[lang]}</h2><p className="mt-6 text-base leading-8 text-slate-600">{item.text[lang]}</p><a href="#inquiry" className="mt-6 inline-flex border-b border-blue-700 pb-1 text-sm font-semibold text-blue-700">{['咨询项目配置','Discuss your configuration','Konfiguration anfragen','Configuratie bespreken'][lang]}</a></div></article>)}<p className="text-xs leading-6 text-slate-500">{['DJI 官方功能演示；图示配置及效果以实际设备、软件版本和作业条件为准。','Official DJI demonstrations. Configuration and results depend on equipment, software versions and operating conditions.','Offizielle DJI-Demonstrationen. Konfiguration und Ergebnisse hängen von Gerät, Softwarestand und Einsatzbedingungen ab.','Officiële DJI-demonstraties. Configuratie en resultaten hangen af van apparatuur, softwareversie en inzetomstandigheden.'][lang]}</p></div></section>;
}
