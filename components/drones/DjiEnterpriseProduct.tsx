'use client';

import { useRef, useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight, ArrowUpRight, Check, Mail } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DjiFullVideo from '@/components/drones/DjiFullVideo';
import DjiShowcase from '@/components/drones/DjiShowcase';
import ProductSectionNav from '@/components/spatial/ProductSectionNav';
import type { DjiProductData } from '@/lib/dji-products';

const wrap = 'mx-auto max-w-7xl px-5 sm:px-8';
const action = 'inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary';
const field = 'mt-2 w-full min-w-0 rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20';

export default function DjiProduct({ p, locale }: { p: DjiProductData; locale: string }) {
  const t = useTranslations('matrice400');
  const u = p.ui;
  const [choice, setChoice] = useState(0);
  const [enquiryChoice, setEnquiryChoice] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const [error, setError] = useState('');
  const sending = useRef(false);
  const current = p.choices[choice];

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const values = new FormData(event.currentTarget);
    if (!String(values.get('name') ?? '').trim() || !String(values.get('company') ?? '').trim()) {
      setError(t('please_enter_your_name_and_company_name')); setStatus('error'); return;
    }
    sending.current = true; setStatus('sending'); setError('');
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: controller.signal,
        body: JSON.stringify({
          name: String(values.get('name')).trim(), company: String(values.get('company')).trim(), email: String(values.get('email')).trim(),
          interests: ['dji'], products: { dji: [p.name] }, locale,
          message: [`Product: ${p.name}`, `${u.selected}: ${enquiryChoice || u.none}`, `${t('quantity')}: ${values.get('quantity')}`, `${t('delivery_country_region')}: ${values.get('region') || '—'}`, `${t('what_would_you_like_to_discuss')}: ${values.get('intent')}`, `${t('project_requirements')}: ${values.get('message') || '—'}`].join('\n'),
        }),
      });
      if (!response.ok) throw new Error(response.status === 429 ? t('too_many_requests_please_try_again_shortly') : t('your_enquiry_could_not_be_submitted_please_try_again_or_contact_'));
      const result = await response.json();
      if (!result.success) throw new Error(t('submission_has_not_been_confirmed_please_try_again_or_contact_us'));
      setStatus('success');
    } catch (err) {
      setError(err instanceof Error && err.name !== 'AbortError' ? err.message : t('the_connection_timed_out_please_try_again_your_entries_have_been')); setStatus('error');
    } finally { clearTimeout(timer); sending.current = false; }
  }

  return <main className="bg-white pb-24 text-slate-950 selection:bg-blue-100 selection:text-blue-950 lg:pb-0">
    <Navbar />
    <header className="relative mt-16 overflow-hidden bg-[#111a24] text-white">
      <div className="relative aspect-video sm:min-h-[380px] lg:absolute lg:inset-y-0 lg:right-0 lg:w-[64%] lg:aspect-auto"><Image src={p.hero} alt={p.name} fill preload className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 64vw"/><div className="absolute inset-0 bg-gradient-to-t from-[#111a24] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#111a24] lg:via-[#111a24]/5"/></div>
      <div className={`${wrap} relative pb-14 lg:py-20`}><nav aria-label={t('breadcrumb')} className="mb-10 flex flex-wrap gap-2 text-xs text-slate-300"><Link href={`/${locale}/drones/dji`}>{u.catalogue}</Link><span>/</span><span>{p.name}</span></nav><div className="max-w-lg lg:max-w-[43%]"><p className="mb-5 text-xs font-semibold tracking-[.18em] text-emerald-300">{u.group}</p><h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">{p.name.replace('DJI ','')}</h1><p className="mt-5 text-2xl font-medium leading-snug sm:text-3xl">{p.tagline}</p><p className="mb-7 mt-5 max-w-md text-sm leading-7 text-slate-300">{p.intro}</p><div className="flex flex-wrap gap-3"><a href="#inquiry" className={action}>{t('get_a_quote')}<ArrowUpRight size={17}/></a><a href="#specifications" className="px-3 py-3 text-sm underline underline-offset-8">{u.specifications}</a></div><p className="mt-6 text-xs text-slate-300">SUNOVA INNOVATION × COLTEK ROBOTICS</p></div></div>
    </header>
    <div className={`${wrap} py-10 sm:py-12`}><dl className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">{p.metrics.map(m=><div key={m.label} className="border-l border-slate-200 px-5 first:border-0"><dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{m.value}</dd><dt className="mt-3 text-sm text-slate-500">{m.label}</dt></div>)}</dl><p className="mt-8 text-xs leading-5 text-slate-500">{u.conditions}</p></div>
    <ProductSectionNav label={t('product_navigation')} items={[["capabilities",u.overview],["configuration",u.configuration],["specifications",u.specifications],["inquiry",u.inquiry]]}/>
    <section id="capabilities" className="scroll-mt-36 border-t border-border bg-[#f7f8fa] py-16 sm:py-20"><div className={wrap}>
      <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <div><h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{u.capabilitiesTitle}</h2><p className="mt-5 text-sm text-primary">{u.group}</p>
          <div className="mt-9 border-t border-slate-200 pt-6"><p className="text-xl font-medium leading-relaxed">{p.tagline}</p><a href={p.source} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-slate-600 underline underline-offset-4">{u.source}<ArrowUpRight size={14}/></a></div>
        </div>
        <div>{p.features.map(f=><article key={f.title} className="border-t border-slate-200 py-7 first:pt-6"><h3 className="text-xl font-semibold leading-snug sm:text-2xl">{f.title}</h3><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{f.text}</p>{f.note&&<p className="mt-3 max-w-2xl text-xs leading-6 text-slate-600">{u.note}{f.note}</p>}</article>)}</div>
      </div>
    </div></section>
    <DjiShowcase slug={p.slug} locale={locale}/>
    <section id="configuration" className="scroll-mt-36 bg-[#111a24] py-16 text-white sm:py-24"><div className={wrap}>
      <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{p.choiceTitle}</h2><p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300">{u.choiceIntro}</p>
      <div className="mt-10 grid gap-8 lg:grid-cols-[.85fr_1.3fr] lg:gap-16">
        <div role="group" aria-label={p.choiceTitle} className="space-y-2">{p.choices.map((c,i)=><button key={c.title} type="button" aria-pressed={choice===i} onClick={()=>setChoice(i)} className={`flex min-h-16 w-full items-center justify-between gap-4 rounded-lg px-5 py-4 text-left text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 ${choice===i?'bg-blue-600 text-white':'bg-white/5 text-slate-200 hover:bg-white/10'}`}><span>{c.title}</span>{choice===i?<Check size={18} className="shrink-0"/>:<ArrowRight size={18} className="shrink-0"/>}</button>)}</div>
        <div className="min-w-0 border-t border-slate-500 pt-7" aria-live="polite" aria-atomic="true"><h3 className="text-2xl font-semibold sm:text-3xl">{current.title}</h3><p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">{current.text}</p>{current.note&&<p className="mt-5 max-w-2xl text-xs leading-6 text-slate-300">{current.note}</p>}<a href="#inquiry" onClick={()=>setEnquiryChoice(current.title)} className={`${action} mt-8`}>{u.interest}<ArrowRight size={16}/></a></div>
      </div>
    </div></section>
    <section id="specifications" className="scroll-mt-36 border-y border-slate-200 bg-[#f7f8fa] py-16 sm:py-20"><div className={`${wrap} grid gap-10 lg:grid-cols-[.8fr_1.4fr]`}><div><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{u.specsTitle}</h2><p className="mt-5 text-sm leading-7 text-slate-500">{u.specsIntro}</p><div className="mt-7 flex flex-col items-start gap-4 text-xs text-primary"><a href={p.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{u.source} ↗</a><a href={`${p.source}/specs`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{u.sourceSpecs} ↗</a></div></div><div className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white"><table className="w-full table-fixed text-left text-sm"><caption className="sr-only">{p.name} — {u.specifications}</caption><tbody>{p.specs.map(s=><tr key={s.label} className="border-b border-slate-100 last:border-0"><th scope="row" className="w-[37%] break-words px-4 py-4 align-top text-xs font-medium leading-6 text-slate-500 sm:px-6 sm:text-sm">{s.label}</th><td className="break-words px-4 py-4 sm:px-6"><span className="font-semibold leading-6">{s.value}</span>{s.note&&<span className="mt-2 block text-xs leading-5 text-slate-500">{s.note}</span>}</td></tr>)}</tbody></table></div></div></section>
    <section className="py-14"><div className={`${wrap} grid gap-8 md:grid-cols-2`}><h2 className="text-2xl font-semibold">{u.faq}</h2><div>{p.faq.map(q=><details key={q.question} className="border-b border-slate-200 py-5"><summary className="cursor-pointer pr-4 text-sm font-semibold leading-6">{q.question}</summary><p className="mt-4 text-sm leading-7 text-slate-600">{q.answer}</p></details>)}</div></div></section>
    <section id="inquiry" className="scroll-mt-36 bg-[#f7f8fa] py-16 sm:py-20"><div className={`${wrap} grid gap-10 lg:grid-cols-2`}><div><h2 className="text-3xl font-semibold sm:text-4xl">{u.enquiryTitle}</h2><p className="mt-5 max-w-lg text-sm leading-7 text-slate-600">{u.enquiryIntro}</p><div className="mt-7 border-t border-slate-300 pt-5"><p className="text-lg font-semibold">{p.name}</p><p className="mt-3 text-xs leading-6 text-slate-500">{u.selected}</p><p data-testid="selected-enquiry" className="mt-1 text-sm font-medium">{enquiryChoice||u.none}</p></div><a href="mailto:support@sunova-innovation.nl" className="mt-8 inline-flex max-w-full items-center gap-2 break-all text-sm text-primary"><Mail size={17} className="shrink-0"/>support@sunova-innovation.nl</a></div>
      <form onSubmit={submit} data-testid="product-enquiry" aria-label={`${p.name} — ${u.inquiry}`} className="min-w-0 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
        {status==='success'?<div role="status" className="py-14 text-center"><Check size={36} className="mx-auto mb-5 text-emerald-600"/><h3 className="text-xl font-semibold">{t('enquiry_submitted')}</h3><p className="mt-3 text-sm leading-7 text-slate-500">{t('we_will_contact_you_at_the_email_address_provided')}<br/>{t('to_confirm_the_configuration_and_quotation_this_is_not_yet_an_or')}</p></div>:<><h3 className="mb-5 text-lg font-semibold">{t('request_your_project_quotation')}</h3><fieldset disabled={status==='sending'} className="space-y-5 disabled:opacity-60"><div className="grid gap-4 sm:grid-cols-2"><label className="min-w-0 text-sm font-medium">{t('name')}<input name="name" required maxLength={80} autoComplete="name" className={field}/></label><label className="min-w-0 text-sm font-medium">{t('company_name')}<input name="company" required maxLength={160} autoComplete="organization" className={field}/></label></div><label className="block text-sm font-medium">{t('email_address')}<input name="email" type="email" required maxLength={254} autoComplete="email" className={field}/></label><div className="grid gap-4 sm:grid-cols-2"><label className="min-w-0 text-sm font-medium">{t('quantity')}<input name="quantity" type="number" min="1" max="999" step="1" required defaultValue="1" className={field}/></label><label className="min-w-0 text-sm font-medium">{t('delivery_country_region')}<input name="region" autoComplete="country-name" maxLength={100} className={field}/></label></div><label className="block text-sm font-medium">{t('what_would_you_like_to_discuss')}<select name="intent" className={field}>{['request_a_configuration_quote','purchasing_and_delivery_times','technical_selection_advice'].map(k=><option key={k}>{t(k)}</option>)}</select></label><label className="block text-sm font-medium">{t('project_requirements')}<textarea name="message" rows={4} maxLength={3000} placeholder={u.placeholder} className={field}/></label><label className="flex items-start gap-3 text-xs leading-6 text-slate-500"><input name="privacy" type="checkbox" required className="mt-1.5 accent-blue-700"/><span>{t('i_have_read_the')}<a href={`/${locale}/privacy`} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{t('privacy_policy')}</a>{t('and_agree_to_the_use_of_my_information_to_handle_this_enquiry')}</span></label>{status==='error'&&<p role="alert" className="rounded-lg bg-red-50 p-3 text-sm leading-6 text-red-700">{error}</p>}<button type="submit" disabled={status==='sending'} className={`${action} w-full`}>{status==='sending'?t('submitting'):t('submit_enquiry')}<ArrowRight size={17}/></button><p className="text-center text-xs leading-5 text-slate-500">{t('confirm_configuration_price_and_delivery_before_ordering_no_paym')}</p></fieldset></>}
      </form></div></section>
    <div className={`${wrap} py-10`}><Link href={`/${locale}/drones/dji`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">{u.related}<ArrowRight size={16}/></Link></div><DjiFullVideo slug={p.slug} locale={locale}/><Footer />
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-slate-200 bg-white px-5 py-3 lg:hidden"><p className="min-w-0 text-xs font-semibold">{p.name}</p><a href="#inquiry" className={`${action} shrink-0`}>{t('get_a_quote')}<ArrowUpRight size={15}/></a></div>
  </main>;
}
