'use client';
import {useRef, useState, type FormEvent} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {ArrowRight, Check, Mail} from 'lucide-react';
const wrap='mx-auto max-w-7xl px-5 sm:px-8';
const action = 'inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary';
const field = 'mt-2 w-full min-w-0 rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20';


const p={name:'WISSON Orion AP3-P3'};
const u={enquiryTitle:'一起确认你的 P3 清洗方案',enquiryIntro:'告诉我们建筑材质、作业高度与面积、现有无人机和供水条件，我们将与你确认设备配置、报价与交付。',selected:'咨询产品',none:'P3 柔韧系留清洗系统',placeholder:'例如：玻璃幕墙、预计清洗高度和面积、现有无人机型号、供水条件，以及希望了解的配置。',inquiry:'项目咨询'};
export default function WissonP3Inquiry(){
const locale=useLocale();const t=useTranslations('matrice400');
const enquiryChoice=null;
const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle');
const [error,setError]=useState('');const sending=useRef(false);
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
          interests: ['payloads'], products: { payloads: [p.name] }, locale,
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


return (    <section id="inquiry" className="scroll-mt-36 bg-[#f7f8fa] py-16 sm:py-20"><div className={`${wrap} grid gap-10 lg:grid-cols-2`}><div><h2 className="text-3xl font-semibold sm:text-4xl">{u.enquiryTitle}</h2><p className="mt-5 max-w-lg text-sm leading-7 text-slate-600">{u.enquiryIntro}</p><div className="mt-7 border-t border-slate-300 pt-5"><p className="text-lg font-semibold">{p.name}</p><p className="mt-3 text-xs leading-6 text-slate-500">{u.selected}</p><p data-testid="selected-enquiry" className="mt-1 text-sm font-medium">{enquiryChoice||u.none}</p></div><a href="mailto:support@sunova-innovation.nl" className="mt-8 inline-flex max-w-full items-center gap-2 break-all text-sm text-primary"><Mail size={17} className="shrink-0"/>support@sunova-innovation.nl</a></div>
      <form onSubmit={submit} data-testid="product-enquiry" aria-label={`${p.name} — ${u.inquiry}`} className="min-w-0 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
        {status==='success'?<div role="status" className="py-14 text-center"><Check size={36} className="mx-auto mb-5 text-emerald-600"/><h3 className="text-xl font-semibold">{t('enquiry_submitted')}</h3><p className="mt-3 text-sm leading-7 text-slate-500">{t('we_will_contact_you_at_the_email_address_provided')}<br/>{t('to_confirm_the_configuration_and_quotation_this_is_not_yet_an_or')}</p></div>:<><h3 className="mb-5 text-lg font-semibold">{t('request_your_project_quotation')}</h3><fieldset disabled={status==='sending'} className="space-y-5 disabled:opacity-60"><div className="grid gap-4 sm:grid-cols-2"><label className="min-w-0 text-sm font-medium">{t('name')}<input name="name" required maxLength={80} autoComplete="name" className={field}/></label><label className="min-w-0 text-sm font-medium">{t('company_name')}<input name="company" required maxLength={160} autoComplete="organization" className={field}/></label></div><label className="block text-sm font-medium">{t('email_address')}<input name="email" type="email" required maxLength={254} autoComplete="email" className={field}/></label><div className="grid gap-4 sm:grid-cols-2"><label className="min-w-0 text-sm font-medium">{t('quantity')}<input name="quantity" type="number" min="1" max="999" step="1" required defaultValue="1" className={field}/></label><label className="min-w-0 text-sm font-medium">{t('delivery_country_region')}<input name="region" autoComplete="country-name" maxLength={100} className={field}/></label></div><label className="block text-sm font-medium">{t('what_would_you_like_to_discuss')}<select name="intent" className={field}>{['request_a_configuration_quote','purchasing_and_delivery_times','technical_selection_advice'].map(k=><option key={k}>{t(k)}</option>)}</select></label><label className="block text-sm font-medium">{t('project_requirements')}<textarea name="message" rows={4} maxLength={3000} placeholder={u.placeholder} className={field}/></label><label className="flex items-start gap-3 text-xs leading-6 text-slate-500"><input name="privacy" type="checkbox" required className="mt-1.5 accent-blue-700"/><span>{t('i_have_read_the')}<a href={`/${locale}/privacy`} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">{t('privacy_policy')}</a>{t('and_agree_to_the_use_of_my_information_to_handle_this_enquiry')}</span></label>{status==='error'&&<p role="alert" className="rounded-lg bg-red-50 p-3 text-sm leading-6 text-red-700">{error}</p>}<button type="submit" disabled={status==='sending'} className={`${action} w-full`}>{status==='sending'?t('submitting'):t('submit_enquiry')}<ArrowRight size={17}/></button><p className="text-center text-xs leading-5 text-slate-500">{t('confirm_configuration_price_and_delivery_before_ordering_no_paym')}</p></fieldset></>}
      </form></div></section>
);
}
