'use client';

import { useTranslations } from 'next-intl';
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
function HardwareCard({ name, tagline, specs, delay, href, linkLabel, imageSrc }: {
  name: string; tagline: string; specs: string[]; delay: number; href: string; linkLabel: string; imageSrc?: string;
}) {
  return (
    <motion.div
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group bg-white border border-border rounded-[8px] overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="relative h-40 bg-[#F1F5F9] overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
        {imageSrc ? (
          <Image src={imageSrc} alt={name} fill className="object-contain p-4" sizes="(max-width: 768px) 100vw, 33vw" />
        ) : (
          <div className="h-full flex flex-col items-center justify-center gap-2">
            <ScanLine size={32} className="text-accent/50" />
            <span className="text-xs text-foreground-muted/60">{name}</span>
          </div>
        )}
      </div>
      {/* Info */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h4 className="font-display font-bold text-foreground mb-0.5">{name}</h4>
          <p className="text-sm text-foreground-muted mb-2">{tagline}</p>
          <div className="flex flex-wrap gap-1.5">
            {specs.map((s, i) => (
              <span key={i} className="text-xs bg-background-alt border border-border rounded-full px-2.5 py-0.5 text-foreground-muted">
                {s}
              </span>
            ))}
          </div>
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

/** Keys must match messages in every locale (avoid MISSING_MESSAGE for absent specs). */
const HW_SPEC_KEYS = {
  l2pro: ['spec0', 'spec1', 'spec2', 'spec3', 'spec4'],
  k1: ['spec0', 'spec1', 'spec2', 'spec3'],
  portalcam: ['spec0', 'spec1', 'spec2'],
} as const;

/** Maps component key → lowercase base filename (without extension) in public/images/spatial/ */
const HW_IMAGE_BASES: Record<string, string> = {
  l2pro:     'l2 pro',
  k1:        'k1',
  portalcam: 'portalcam',
};

const HW_LINKS: Record<string, string> = {
  l2pro:    'https://xgrids.com/lixell2pro',
  k1:       'https://xgrids.com/',
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
  const tCommon = useTranslations('common');

  const hwKeys = ['l2pro', 'k1', 'portalcam'] as const satisfies readonly (keyof typeof HW_SPEC_KEYS)[];
  const swKeys = ['studio', 'go', 'lcc', 'revit']   as const;

  const linkLabel = tCommon('viewOnXgrids');

  const hw = hwKeys.map((k) => ({
    name:     t(`hardware.${k}.name`),
    tagline:  t(`hardware.${k}.tagline`),
    specs:    HW_SPEC_KEYS[k].map((s) => t(`hardware.${k}.${s}` as Parameters<typeof t>[0])),
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
    <section id="spatial-products" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, ease:EASE }} className="mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-3">{t('label')}</span>
          <SectionTitle title={t('title')} subtitle={t('subtitle')} withAccent />
        </motion.div>

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
