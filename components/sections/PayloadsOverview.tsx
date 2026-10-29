'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Radar, Drone, Cable, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';

const EASE = [0.25, 0.1, 0.25, 1] as const;

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: EASE } },
});

const HIGHLIGHTS = [
  { icon: Radar, key: 'airborne'    as const },
  { icon: Drone, key: 'platform'    as const },
  { icon: Cable, key: 'integration' as const },
];

export default function PayloadsOverview() {
  const t = useTranslations('payloads.overview');
  const locale = useLocale();
  const router = useRouter();

  if(locale==='zh') return <section id="payloads" className="bg-background-alt py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div className="max-w-2xl"><p className="mb-4 text-xs font-semibold tracking-widest text-accent">无人机负载</p><SectionTitle title="为不同任务，选择合适的负载。" withAccent/><p className="mt-5 text-base leading-8 text-foreground-muted">从空中侦测到建筑清洁，为现有飞行平台拓展任务能力。按应用选择产品系列，再确认平台适配与设备配置。</p></div><Link href="/zh/payloads" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary">查看全部负载 <ArrowRight size={16}/></Link></div><div className="grid gap-6 md:grid-cols-2">{[
      {name:'YunScan001',type:'侦测负载',description:'面向空中无人机侦测任务，将侦测能力随飞行平台带入作业区域。',image:'/images/payloads/yunscan/on-m400.png',href:'/zh/payloads/yunscan',fit:'object-contain p-6',tags:['机载无人机侦测','DJI M400 适配']},
      {name:'WISSON 万勋 P3',type:'清洁负载',description:'面向建筑立面清洗，以柔韧清洗负载连接空中执行与地面供水。',image:'/images/payloads/wisson-p3/facade-hero.jpg',href:'/zh/payloads/wisson-p3',fit:'object-cover',tags:['柔韧清洗系统','空地协同配置']},
    ].map(product=><Link key={product.name} href={product.href} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg focus-visible:outline-primary"><div className="relative aspect-[16/9] overflow-hidden bg-white"><Image src={product.image} alt={product.name} fill sizes="(max-width:767px) 100vw,50vw" className={product.fit}/></div><div className="flex flex-1 flex-col border-t border-border p-6 sm:p-8"><p className="text-xs font-semibold tracking-wider text-primary">{product.type}</p><h3 className="mt-3 text-2xl font-semibold">{product.name}</h3><p className="mt-4 text-sm leading-7 text-foreground-muted">{product.description}</p><ul className="my-6 flex flex-wrap gap-2">{product.tags.map(tag=><li key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-foreground-muted">{tag}</li>)}</ul><span className="mt-auto flex items-center justify-between border-t border-border pt-5 text-sm font-semibold text-primary">了解产品<ArrowRight size={18} className="transition-transform group-hover:translate-x-1"/></span></div></Link>)}</div></div></section>;

  return (
    <section id="payloads" className="bg-background-alt py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          Desktop: image left, text right  (opposite of the DJI section above)
          Mobile:  image on top, text below
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Right: Text content (Desktop order-2, Mobile order-2) ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="order-2 lg:order-2"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              {t('label')}
            </span>

            <SectionTitle
              title={t('title')}
              subtitle={t('subtitle')}
              withAccent
              className="mb-4"
            />

            <p className="text-foreground-muted leading-relaxed mb-8 mt-4">
              {t('description')}
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {HIGHLIGHTS.map(({ icon: Icon, key }, i) => (
                <motion.div
                  key={key}
                  variants={fadeUp(i * 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white border border-border rounded-[8px] p-4 hover:-translate-y-1 transition-transform duration-200"
                >
                  <Icon size={22} className="text-accent mb-2" />
                  <p className="text-sm font-semibold text-foreground mb-0.5">
                    {t(`highlights.${key}.title`)}
                  </p>
                  <p className="text-xs text-foreground-muted leading-relaxed">
                    {t(`highlights.${key}.desc`)}
                  </p>
                </motion.div>
              ))}
            </div>

            <Button variant="primary" size="md" onClick={() => router.push(`/${locale}/payloads`)}>
              {t('cta')} <ArrowRight size={16} />
            </Button>
          </motion.div>

          {/* ── Left: Product image (Desktop order-1, Mobile order-1) ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative order-1 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-[16px] bg-white overflow-hidden border border-border">
              <Image
                src="/images/payloads/yunscan/on-m400.png"
                alt="YunScan001 on a DJI Matrice 400"
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative gradient accent */}
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-10 -z-10"
              style={{ background: 'linear-gradient(135deg, #8B5CF6, #34D399)' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
