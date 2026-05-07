'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ScanLine, Monitor, Smartphone, Cloud, Puzzle, ExternalLink } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import WorkflowSteps from '@/components/shared/WorkflowSteps';
import TechHighlights from '@/components/shared/TechHighlights';

const EASE = [0.25, 0.1, 0.25, 1] as const;
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: d, ease: EASE } },
});

// Hardware card
function HardwareCard({ name, tagline, desc, delay, href, linkLabel, imageSrc }: {
  name: string; tagline: string; desc: string; delay: number; href: string; linkLabel: string; imageSrc?: string;
}) {
  return (
    <motion.div
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group bg-white border border-border rounded-[8px] overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="relative h-40 bg-[#F1F5F9] overflow-hidden rounded-t-lg">
        {imageSrc ? (
          <Image src={imageSrc} alt={name} fill className="object-contain p-4 transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
        ) : (
          <div className="h-full flex flex-col items-center justify-center gap-2 transition-transform duration-300 group-hover:scale-105">
            <ScanLine size={32} className="text-accent/50" />
            <span className="text-xs text-foreground-muted/60">{name}</span>
          </div>
        )}
      </div>
      {/* Info */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h4 className="font-display font-bold text-foreground mb-0.5">{name}</h4>
          <p className="text-sm font-medium text-foreground-muted mb-2">{tagline}</p>
          <p className="text-sm text-foreground-muted leading-relaxed">{desc}</p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 self-start text-xs font-semibold text-accent border border-accent/40 rounded-full px-3 py-1 hover:bg-accent/5 transition-colors duration-200"
        >
          {linkLabel}
          <ExternalLink size={11} />
        </a>
      </div>
    </motion.div>
  );
}

// Software card
const SW_ICONS = [Monitor, Smartphone, Cloud, Puzzle];
function SoftwareCard({ name, desc, iconIdx, delay, href, linkLabel }: {
  name: string; desc: string; iconIdx: number; delay: number; href: string; linkLabel: string;
}) {
  const Icon = SW_ICONS[iconIdx % SW_ICONS.length];
  return (
    <motion.div
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white border border-border rounded-[8px] p-4 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
    >
      <div className="flex gap-3">
        <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
          <Icon size={18} className="text-accent" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground mb-0.5">{name}</p>
          <p className="text-xs text-foreground-muted leading-relaxed">{desc}</p>
        </div>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 self-start text-xs font-semibold text-accent border border-accent/40 rounded-full px-3 py-1 hover:bg-accent/5 transition-colors duration-200"
      >
        {linkLabel}
        <ExternalLink size={11} />
      </a>
    </motion.div>
  );
}

/** Maps component key → lowercase base filename (without extension) in public/images/spatial/ */
const HW_IMAGE_BASES: Record<string, string> = {
  l2pro:     'l2 pro',
  k1:        'k1',
  portalcam: 'portalcam',
};

const HW_LINKS: Record<string, string> = {
  l2pro:    'https://xgrids.com/lixell2pro',
  k1:       'https://xgrids.com/intl/lixelk1',
  portalcam:'https://xgrids.com/',
};

const SW_LINKS: Record<string, string> = {
  studio: 'https://xgrids.com/lixelstudio',
  go:     'https://xgrids.com/',
  lcc:    'https://xgrids.com/',
  revit:  'https://xgrids.com/',
};

export default function SpatialProducts({ imageMap = {} }: { imageMap?: Record<string, string> }) {
  const t = useTranslations('spatialProducts');
  const locale = useLocale();
  const tCommon = useTranslations('common');

  const hwKeys = ['l2pro', 'k1', 'portalcam'] as const;
  const swKeys = ['studio', 'go', 'lcc', 'revit'] as const;

  const linkLabel = tCommon('viewOnXgrids');

  const hw = hwKeys.map((k) => ({
    name:     t(`hardware.${k}.name`),
    tagline:  t(`hardware.${k}.tagline`),
    desc:     t(`hardware.${k}.desc` as Parameters<typeof t>[0]),
    href:     HW_LINKS[k],
    imageSrc: imageMap[HW_IMAGE_BASES[k]],
  }));

  const sw = swKeys.map((k, i) => ({
    name: t(`software.${k}.name`),
    desc: t(`software.${k}.desc`),
    idx:  i,
    href: SW_LINKS[k],
  }));

  const steps = [0,1,2,3].map((i) => ({
    label: t(`workflow.step${i}.label` as Parameters<typeof t>[0]),
    desc:  t(`workflow.step${i}.desc`  as Parameters<typeof t>[0]),
  }));

  const techItems = [0,1,2,3,4].map((i) =>
    t(`techHighlights.item${i}` as Parameters<typeof t>[0])
  );

  return (
    <section id="spatial-products" className="bg-white pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, ease:EASE }} className="mb-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-3">{t('label')}</span>
          <SectionTitle title={t('title')} subtitle={t('subtitle')} withAccent />
        </motion.div>

        {/* NEW: Lixel K2 Featured Banner */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-border relative" style={{background: 'url(/images/spatial/products/k2/kv-hero.jpg) center top/cover no-repeat', minHeight: '340px'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="flex flex-col lg:flex-row items-end gap-0 relative z-10 min-h-[340px]">
            {/* Text side - pushed to bottom */}
            <div className="flex-1 p-8 lg:p-10 pb-10 self-end">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent text-white uppercase tracking-widest">
                  {locale === 'zh' ? '全新发布' : locale === 'de' ? 'Neu' : locale === 'nl' ? 'Nieuw' : 'New Release'}
                </span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">XGRIDS · Lixel K2</span>
              </div>
              <p className="text-gray-200 leading-relaxed mb-5 max-w-md text-sm">
                {locale === 'zh'
                  ? 'XGRIDS 推出的轻量化空间扫描仪，专为真实环境设计——兼顾采集效率、易用性与输出质量。精度达 1 cm 以内，内置 RTK，支持实时彩色点云输出。'
                  : locale === 'de'
                  ? 'Der leichte Raumscanner von XGRIDS für reale Einsatzbedingungen — ausgewogen in Erfassungseffizienz, Benutzerfreundlichkeit und Ergebnisqualität. Ingenieurgenauigkeit unter 1 cm, mit integriertem RTK und Echtzeit-Farbpunktwolken.'
                  : locale === 'nl'
                  ? 'De lichtgewicht ruimtescanner van XGRIDS voor gebruik in de praktijk — een balans tussen vastlegefficiëntie, gebruiksgemak en outputkwaliteit. Technische nauwkeurigheid binnen 1 cm, met ingebouwde RTK en realtime gekleurde puntenwolken.'
                  : "XGRIDS' lightweight spatial scanner built for real-world conditions — balancing capture efficiency, ease of use, and deliverable quality. Engineering-grade accuracy within 1 cm, with built-in RTK and real-time colorized point clouds."
                }
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  '≤ 1 cm Accuracy',
                  'Built-in RTK',
                  '200K pts/s',
                  'IP54',
                  '1,200 g',
                ].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-gray-600 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://www.xgrids.com/intl/lixelk2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-[8px] hover:bg-accent/90 transition-colors"
              >
                {locale === 'zh' ? '了解更多 →' : locale === 'de' ? 'Mehr erfahren →' : locale === 'nl' ? 'Meer informatie →' : 'Learn More →'}
              </a>
            </div>
            {/* Image side - product visible in background KV */}
            <div className="lg:w-[320px]" />
          </div>
        </div>

        {/* Hardware */}
        <h3 className="font-display text-lg font-bold text-foreground mb-5">{t('hardware.sectionTitle')}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {hw.map((p, i) => <HardwareCard key={i} {...p} delay={i * 0.1} linkLabel={linkLabel} />)}
        </div>

        {/* Software */}
        <h3 className="font-display text-lg font-bold text-foreground mb-5">{t('software.sectionTitle')}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {sw.map((s, i) => <SoftwareCard key={i} name={s.name} desc={s.desc} iconIdx={s.idx} delay={i * 0.08} href={s.href} linkLabel={linkLabel} />)}
        </div>

        {/* Workflow */}
        <WorkflowSteps
          title={t('workflow.title')}
          steps={steps}
          accentFrom="#8B5CF6"
          accentTo="#34D399"
        />

        {/* Tech highlights */}
        <TechHighlights
          title={t('techHighlights.title')}
          items={techItems}
          dotColor="#34D399"
        />
      </div>
    </section>
  );
}
