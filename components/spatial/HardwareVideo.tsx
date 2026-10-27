'use client';
import {useHardwareText} from '@/lib/hardware-translations';
import {useEffect,useRef,useState} from 'react';

/** Official media stays a video; load only when the visitor reaches it. */
export default function HardwareVideo({src,label,official,full=false,className=''}:{src:string;label:string;official:string;full?:boolean;className?:string}){
 const t=useHardwareText();
 const ref=useRef<HTMLVideoElement>(null);const [failed,setFailed]=useState(false);
 useEffect(()=>{const v=ref.current;if(!v)return;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const observer=new IntersectionObserver(([e])=>{if(e.isIntersecting){if(!v.getAttribute('src')){v.src=src;v.load();}if(!full&&!reduced.matches)void v.play().catch(()=>{});}else v.pause();},{threshold:.15});observer.observe(v);return()=>{observer.disconnect();v.pause();v.removeAttribute('src');v.load();};},[src,full]);
 return <div className={`relative aspect-video overflow-hidden rounded-xl bg-[#0a1019] ${className}`}><video ref={ref} aria-label={label} controls playsInline muted={!full} loop={!full} preload="none" poster={`${src}?x-oss-process=video/snapshot,t_1000,w_1200,m_fast`} onError={()=>setFailed(true)} className="absolute inset-0 h-full w-full object-contain"/>{failed&&<p role="status" className="absolute inset-x-0 bottom-0 bg-slate-950 p-4 text-sm text-white">{t("视频暂时无法加载。")}<a href={official} target="_blank" rel="noopener noreferrer" className="ml-2 underline">{t("前往官网观看")}</a></p>}</div>;
}
