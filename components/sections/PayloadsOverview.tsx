'use client';
import {getWissonCopy} from '@/lib/wisson-copy';
import {useLocale} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
export default function PayloadsOverview(){const locale=useLocale();const w=getWissonCopy(locale);return  <section id="payloads" className="bg-background-alt py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div className="max-w-2xl"><p className="mb-4 text-xs font-semibold tracking-widest text-accent">{w(9)}</p><SectionTitle title={w(82)} withAccent/><p className="mt-5 text-base leading-8 text-foreground-muted">{w(83)}</p></div><Link href={`/${locale}/payloads`} className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary">{w(84)}<ArrowRight size={16}/></Link></div><div className="grid gap-6 md:grid-cols-2">{[
      {name:'YunScan001',type:w(85),description:w(86),image:'/images/payloads/yunscan/on-m400.png',href:`/${locale}/payloads/yunscan`,fit:'object-contain p-6',tags:[w(87),w(88)]},
      {name:w(89),type:w(90),description:w(91),image:'/images/payloads/wisson-p3/facade-hero.jpg',href:`/${locale}/payloads/wisson-p3`,fit:'object-cover',tags:[w(92),w(93)]},
    ].map(product=><Link key={product.name} href={product.href} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg focus-visible:outline-primary"><div className="relative aspect-[16/9] overflow-hidden bg-white"><Image src={product.image} alt={product.name} fill sizes="(max-width:767px) 100vw,50vw" className={product.fit}/></div><div className="flex flex-1 flex-col border-t border-border p-6 sm:p-8"><p className="text-xs font-semibold tracking-wider text-primary">{product.type}</p><h3 className="mt-3 text-2xl font-semibold">{product.name}</h3><p className="mt-4 text-sm leading-7 text-foreground-muted">{product.description}</p><ul className="my-6 flex flex-wrap gap-2">{product.tags.map(tag=><li key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-foreground-muted">{tag}</li>)}</ul><span className="mt-auto flex items-center justify-between border-t border-border pt-5 text-sm font-semibold text-primary">{w(94)}<ArrowRight size={18} className="transition-transform group-hover:translate-x-1"/></span></div></Link>)}</div></div></section>;


}
