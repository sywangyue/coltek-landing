'use client';

import {Fragment, useState, type FormEvent} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowRight, ArrowUpRight} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import L3Chinese from './L3Chinese';
import HardwareChinese from './HardwareChinese';
import ProductSectionNav from './ProductSectionNav';
import type {XgridsProductData} from '@/lib/xgrids-products';

const wrap='mx-auto max-w-7xl px-5 sm:px-8';
const button='inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600';
const field='mt-2 w-full rounded-lg border border-slate-300 bg-white p-3 text-base text-slate-900 focus:outline-2 focus:outline-emerald-600';

export default function XgridsProduct({data:p,locale}:{data:XgridsProductData;locale:string}){
 const u=p.ui;
 const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle');
 const summary=p.name;
 const base=`/${locale}/spatial/xgrids`;
 const cinematic=['lixel-l2-pro','portalcam'].includes(p.slug);
 const nav=[...p.blocks.flatMap((block,i)=>[{id:block.id,label:i===0?u.overview:block.navLabel},...(i===0&&p.workflow?[{id:'workflow',label:u.navWorkflow}]:[])]),{id:'specifications',label:u.specifications},{id:'inquiry',label:u.inquiry}];
 async function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault(); if(status==='sending')return;
  const form=event.currentTarget;
  const values=new FormData(form);
  if(['name','company','email'].some(key=>!String(values.get(key)||'').trim())){setStatus('error');return;}
  setStatus('sending');
  const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),15000);
  try{
   const response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},signal:controller.signal,body:JSON.stringify({name:String(values.get('name')).trim(),company:String(values.get('company')).trim(),email:String(values.get('email')).trim(),interests:['spatial'],products:{spatial:[p.name]},locale,message:[summary,`${u.region}: ${values.get('region')||'—'}`,`${u.message}: ${values.get('message')||'—'}`].join('\n\n')})});
   if(!response.ok)throw new Error('request');
   const result=await response.json(); if(!result.success)throw new Error('unconfirmed');
   setStatus('success');
  }catch{setStatus('error');}finally{clearTimeout(timer);}
 }
 return <main lang={locale} className="bg-white pb-20 text-slate-900 lg:pb-0">
  <Navbar/>
  {p.slug==='lixel-l3'?<L3Chinese data={p}/>:['lixel-k2','portalcam'].includes(p.slug)?<HardwareChinese data={p}/>:<>{cinematic?<section className="relative mt-16 overflow-hidden bg-[#141b26] text-white">
   <div className="relative aspect-video md:absolute md:inset-0 md:aspect-auto"><Image src={p.image} alt={p.name} fill preload sizes="100vw" className="object-cover object-center"/></div>
   <div className="absolute inset-0 hidden bg-gradient-to-r from-black/85 via-black/35 to-transparent md:block"/>
   <div className={`${wrap} relative pb-12 pt-8 md:min-h-[600px] md:py-20 lg:py-28`}><Link href={base} className="text-xs text-white/70">XGRIDS / {u.all}</Link><div className="mt-10 max-w-md"><h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">{p.name}</h1><h2 className="mb-5 mt-5 text-2xl font-medium leading-snug">{p.headline}</h2><p className="text-sm leading-7 text-slate-200">{p.description}</p><a href={`#${p.blocks[0].id}`} className={`${button} mt-7`}>{u.readMore}<ArrowRight size={17}/></a></div></div>
  </section>:<section className={`${p.kind==='software'?'bg-[#edf2f4] text-slate-900':'bg-[#111c25] text-white'} pt-24 sm:pt-28`}>
   <div className={wrap}><Link href={base} className="text-xs opacity-70">XGRIDS / {u.all}</Link>
    <div className={`grid items-center gap-8 pb-12 pt-8 ${p.kind==='software'?'lg:grid-cols-[.75fr_1.25fr]':'lg:grid-cols-[.8fr_1.2fr]'} lg:gap-12 lg:pb-16`}><div><p className="mb-5 text-xs font-semibold tracking-[.16em] text-emerald-500">XGRIDS</p><h1 className="break-words text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[1.08] tracking-tight">{p.name}</h1><h2 className="mb-5 mt-5 text-2xl font-medium leading-snug">{p.headline}</h2><p className="max-w-lg text-sm leading-7 opacity-80">{p.description}</p><a href={`#${p.blocks[0].id}`} className={`${button} mt-7`}>{u.readMore}<ArrowRight size={17}/></a></div><div className="relative aspect-video overflow-hidden rounded-xl bg-[#111c25]"><Image src={p.image} alt={p.name} fill preload sizes="(max-width:1024px) 100vw, 60vw" className="object-contain"/></div></div>
   </div>
  </section>}
  <ProductSectionNav label={p.name} items={nav.map(item=>[item.id,item.label])}/>
  {p.highlights.length>0&&<div className="border-b border-slate-200 bg-slate-50"><dl className={`${wrap} grid grid-cols-2 gap-x-8 gap-y-6 py-8 lg:grid-cols-4`}>{p.highlights.map(item=><div key={item.label}><dt className="mb-2 text-xs font-medium text-slate-500">{item.label}</dt><dd className="text-base font-semibold leading-7 text-slate-900">{item.value}</dd></div>)}</dl></div>}
  {p.blocks.map((block,index)=><Fragment key={block.id}><section id={block.id} className={`scroll-mt-40 py-14 sm:py-20 ${block.mode==='steps'?'bg-[#eef4f2]':index%2?'bg-slate-50':'bg-white'}`}><div className={wrap}><p className="mb-4 text-xs font-semibold tracking-widest text-emerald-700">{p.name} / 0{index+1}</p><h2 className="mb-10 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl">{block.title}</h2><ProductBlock block={block}/></div></section>{index===0&&p.workflow&&<section id="workflow" className="scroll-mt-40 bg-[#112c2b] py-14 text-white sm:py-20"><div className={wrap}><p className="text-xs font-semibold tracking-widest text-emerald-300">{p.name} / {u.navWorkflow}</p><h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{p.workflow.title}</h2><div className="mt-10 grid gap-6 lg:grid-cols-[.8fr_1.2fr]"><div className="rounded-2xl border border-white/20 p-6 sm:p-8"><span className="text-sm text-emerald-300">01 / {p.slug==='portalcam'?'LCC Scan':p.slug==='lixel-l3'?'Lixel L3':'LixelGO'}</span><h3 className="mt-5 text-2xl font-semibold">{p.workflow.capture}</h3><p className="mt-4 text-sm leading-7 text-slate-200">{p.workflow.captureBody}</p><ArrowRight className="mt-7 text-emerald-300" aria-hidden="true"/></div><div><p className="mb-4 text-xs text-emerald-200">02 / {p.workflow.branch}</p><div className="grid gap-4">{!p.workflow.portal&&<article className="rounded-xl bg-white p-6 text-slate-900"><p className="text-xs font-semibold text-emerald-700">LixelStudio</p><h3 className="mt-2 text-xl font-semibold">{p.workflow.engineering}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{p.workflow.engineeringBody}</p></article>}<article className="rounded-xl bg-white p-6 text-slate-900"><p className="text-xs font-semibold text-emerald-700">LCC Studio</p><h3 className="mt-2 text-xl font-semibold">{p.workflow.visual}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{p.workflow.visualBody}</p></article></div></div></div><p className="mt-6 max-w-4xl text-xs leading-6 text-slate-300">{p.workflow.portal?p.workflow.portalNote:p.workflow.conditions}</p></div></section>}</Fragment>)}
  <section id="specifications" className="scroll-mt-36 bg-slate-50 py-14 sm:py-20"><div className={wrap}>
   <div className="mb-8 flex flex-wrap items-end justify-between gap-5"><div><p className="mb-3 text-xs font-semibold tracking-widest text-emerald-700">{p.name}</p><h2 className="text-3xl font-semibold sm:text-4xl">{u.specifications}</h2></div><a className="inline-flex items-center gap-2 text-sm text-emerald-700 underline underline-offset-4" href={p.source} target="_blank" rel="noopener noreferrer">{u.source}<ArrowUpRight size={15}/></a></div>
   <div className="grid items-start gap-5 md:grid-cols-2">{p.specGroups.map((group,i)=><article key={group.title} className={`overflow-hidden rounded-2xl border border-slate-200 bg-white ${p.specGroups.length===3&&i===2?'md:col-span-2':''}`}><h3 className="border-b border-slate-100 bg-emerald-50/50 px-6 py-4 text-base font-semibold">{group.title}</h3><dl className={p.specGroups.length===3&&i===2?'grid md:grid-cols-2':''}>{group.items.map(item=><div key={item.label} className="border-b border-slate-100 px-6 py-4 last:border-b-0"><dt className="text-xs font-medium text-slate-500">{item.label}</dt><dd className="mt-1.5 break-words text-sm leading-6 text-slate-900">{item.value}</dd></div>)}</dl></article>)}</div>
   <p className="mt-5 max-w-4xl text-xs leading-6 text-slate-500">{u.specNote}</p>
  </div></section>
  </>}
  <section id="inquiry" className={`${wrap} scroll-mt-36 py-16 sm:py-20`}>
   <div className="grid gap-10 lg:grid-cols-2"><div><p className="mb-3 text-xs font-semibold tracking-widest text-emerald-700">{String(p.blocks.length+2).padStart(2,'0')} / {u.inquiry}</p><h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{u.contactTitle}</h2><p className="mt-5 max-w-lg text-sm leading-7 text-slate-600">{u.contactIntro}</p><div className="my-7 rounded-xl border-l-4 border-emerald-600 bg-emerald-50 p-5"><p className="mb-3 text-xs text-emerald-800">XGRIDS</p><p className="whitespace-pre-line text-sm leading-7" data-testid="product-enquiry">{summary}</p></div><a className="break-all text-sm text-emerald-700 underline underline-offset-4" href={`mailto:support@sunova-innovation.nl?subject=${encodeURIComponent('XGRIDS '+p.name)}&body=${encodeURIComponent(summary)}`}>support@sunova-innovation.nl</a></div>
    <form onSubmit={submit} aria-label={`${p.name} ${u.inquiry}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-8"><fieldset disabled={status==='sending'||status==='success'}><div className="grid gap-5 sm:grid-cols-2">{(['name','company','email','region'] as const).map(key=><label key={key} className="text-sm font-medium">{u[key]}{key!=='region'?' *':''}<input name={key} type={key==='email'?'email':'text'} required={key!=='region'} autoComplete={key==='name'?'name':key==='company'?'organization':key==='email'?'email':'country-name'} maxLength={200} className={field}/></label>)}</div><label className="mt-5 block text-sm font-medium">{u.message}<textarea name="message" rows={4} maxLength={5000} className={field}/></label><label className="my-5 flex items-start gap-3 text-xs leading-6 text-slate-600"><input type="checkbox" required className="mt-1.5 size-4 shrink-0 accent-emerald-700"/>{u.consent}</label><Link href={`/${locale}/privacy`} className="mb-5 inline-block text-xs text-emerald-700 underline">{u.privacy}</Link><button type="submit" className={`${button} w-full disabled:opacity-60`}>{status==='sending'?u.sending:u.send}<ArrowRight size={17}/></button></fieldset><div aria-live="polite">{status==='success'&&<p role="status" className="mt-4 text-sm leading-6 text-emerald-800">{u.success}</p>}{status==='error'&&<p role="alert" className="mt-4 text-sm leading-6 text-red-700">{u.error}</p>}</div><p className="mt-4 text-xs leading-6 text-slate-500">{u.noOrder}</p></form>
   </div>
  </section>
  <section className="border-t border-slate-200 py-12"><div className={wrap}><h2 className="mb-6 text-xl font-semibold">{u.related}</h2><div className="grid gap-4 sm:grid-cols-3">{p.related.map(item=><Link key={item.slug} href={`${base}/${item.slug}`} className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-5 hover:border-emerald-600"><div><p className="font-semibold">{item.name}</p><p className="mt-2 text-xs leading-5 text-slate-500">{item.headline}</p></div><ArrowRight size={18} className="shrink-0 text-emerald-700"/></Link>)}</div></div></section>
  <Footer/>
  <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-slate-200 bg-white px-4 py-3 pb-[max(.75rem,env(safe-area-inset-bottom))] lg:hidden"><span className="min-w-0 truncate text-sm font-semibold">{p.name}</span><a href="#inquiry" className={`${button} shrink-0`}>{u.inquiry}<ArrowUpRight size={15}/></a></div>
 </main>;
}

function ProductBlock({block}:{block:XgridsProductData['blocks'][number]}){
 if(block.mode==='outputs')return <div className={`grid gap-6 ${block.items.length===4?'md:grid-cols-2':'md:grid-cols-3'}`}>
  {block.items.map(entry=><article key={entry.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
   {entry.image&&<div className="relative aspect-[4/3] bg-[#171d25]"><Image src={entry.image} alt={entry.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-contain p-3"/></div>}
   <div className="p-6 sm:p-7"><h3 className="text-xl font-semibold">{entry.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{entry.body}</p>{entry.note&&<p className="mt-4 text-xs leading-6 text-slate-500">{entry.note}</p>}</div>
  </article>)}
 </div>;
 if(block.mode==='steps')return <ol className="grid gap-6 md:grid-cols-3">{block.items.map((entry,i)=><li key={entry.title} className="rounded-2xl bg-white p-7 ring-1 ring-emerald-900/10"><span className="inline-flex size-10 items-center justify-center rounded-full bg-emerald-800 text-sm font-semibold text-white">{i+1}</span><h3 className="mb-3 mt-6 text-xl font-semibold">{entry.title}</h3><p className="text-sm leading-7 text-slate-600">{entry.body}</p>{entry.note&&<p className="mt-4 text-xs leading-6 text-slate-500">{entry.note}</p>}</li>)}</ol>;
 if(block.mode==='editorial')return <div className="grid gap-6 md:grid-cols-2">{block.items.map((entry,i)=><article key={entry.title} className={`${entry.image?'md:col-span-2 grid md:grid-cols-2 items-center gap-6':block.items.length%2===1&&i===block.items.length-1?'md:col-span-2 flex flex-col':'flex flex-col'} rounded-2xl bg-slate-50 p-7 sm:p-8`}><div><span className="text-xs font-semibold tracking-widest text-emerald-700">0{i+1}</span><h3 className="mt-4 mb-4 text-2xl font-semibold leading-snug">{entry.title}</h3><p className="text-sm leading-7 text-slate-600">{entry.body}</p>{entry.note&&<p className="mt-5 border-t border-slate-200 pt-4 text-xs leading-6 text-slate-500">{entry.note}</p>}</div>{entry.image&&<div className="relative aspect-video overflow-hidden rounded-xl bg-slate-900"><Image src={entry.image} alt={entry.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-contain"/></div>}</article>)}</div>;
 return <div className={`grid gap-5 ${block.items.length===3?'lg:grid-cols-3':'md:grid-cols-2'}`}>{block.items.map((entry,i)=><article key={entry.title} className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"><span className="text-xs font-semibold tracking-widest text-emerald-700">0{i+1}</span><h3 className="mb-4 mt-5 text-xl font-semibold leading-snug">{entry.title}</h3><p className="text-base leading-8 text-slate-600">{entry.body}</p>{entry.note&&<p className="mt-5 border-t border-slate-200 pt-4 text-xs leading-6 text-slate-500">{entry.note}</p>}</article>)}</div>;
}
