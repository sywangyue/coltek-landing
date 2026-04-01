'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Radio, HandMetal, Video, Monitor, Smartphone, BarChart3 } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import WorkflowSteps from '@/components/shared/WorkflowSteps';
import TechHighlights from '@/components/shared/TechHighlights';

const EASE = [0.25, 0.1, 0.25, 1] as const;
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: d, ease: EASE } },
});

const HW_ICONS = [Radio, HandMetal, Video];
const SW_ICONS = [Monitor, Smartphone, BarChart3];

function HardwareCard({ name, tagline, specs, iconIdx, delay }: { name: string; tagline: string; specs: string[]; iconIdx: number; delay: number }) {
  const Icon = HW_ICONS[iconIdx % HW_ICONS.length];
  return (
    <motion.div
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group bg-white border border-border rounded-[8px] overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
    >
      <div className="h-40 bg-[#F1F5F9] flex flex-col items-center justify-center gap-2 group-hover:scale-[1.01] transition-transform duration-300">
        <Icon size={32} className="text-primary/50" />
        <span className="text-xs text-foreground-muted/60">{name}</span>
      </div>
      <div className="p-5">
        <h4 className="font-display font-bold text-foreground mb-0.5">{name}</h4>
        <p className="text-sm text-foreground-muted mb-3">{tagline}</p>
        <div className="flex flex-wrap gap-1.5">
          {specs.map((s, i) => (
            <span key={i} className="text-xs bg-background-alt border border-border rounded-full px-2.5 py-0.5 text-foreground-muted">
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SoftwareCard({ name, desc, iconIdx, delay }: { name: string; desc: string; iconIdx: number; delay: number }) {
  const Icon = SW_ICONS[iconIdx % SW_ICONS.length];
  return (
    <motion.div
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white border border-border rounded-[8px] p-4 flex gap-3 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
    >
      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <Icon size={18} className="text-primary" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground mb-0.5">{name}</p>
        <p className="text-xs text-foreground-muted leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function AirspaceProducts() {
  const t = useTranslations('airspaceProducts');

  const hwKeys = ['fixedArray', 'portable', 'opticalPod'] as const;
  const swKeys = ['command', 'mobile', 'analytics'] as const;

  const hw = hwKeys.map((k, idx) => ({
    name:    t(`hardware.${k}.name`),
    tagline: t(`hardware.${k}.tagline`),
    iconIdx: idx,
    specs:   ['spec0','spec1','spec2','spec3']
               .map((s) => {
                 try { return t(`hardware.${k}.${s}` as Parameters<typeof t>[0]); }
                 catch { return ''; }
               })
               .filter(Boolean),
  }));

  const sw = swKeys.map((k, i) => ({
    name: t(`software.${k}.name`),
    desc: t(`software.${k}.desc`),
    idx:  i,
  }));

  const steps = [0,1,2,3].map((i) => ({
    label: t(`workflow.step${i}.label` as Parameters<typeof t>[0]),
    desc:  t(`workflow.step${i}.desc`  as Parameters<typeof t>[0]),
  }));

  const techItems = [0,1,2,3,4].map((i) =>
    t(`techHighlights.item${i}` as Parameters<typeof t>[0])
  );

  return (
    <section id="airspace-products" className="bg-background-alt py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, ease:EASE }} className="mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t('label')}</span>
          <SectionTitle title={t('title')} subtitle={t('subtitle')} withAccent />
        </motion.div>

        <h3 className="font-display text-lg font-bold text-foreground mb-5">{t('hardware.sectionTitle')}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {hw.map((p, i) => <HardwareCard key={i} {...p} delay={i * 0.1} />)}
        </div>

        <h3 className="font-display text-lg font-bold text-foreground mb-5">{t('software.sectionTitle')}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {sw.map((s, i) => <SoftwareCard key={i} name={s.name} desc={s.desc} iconIdx={s.idx} delay={i * 0.08} />)}
        </div>

        <WorkflowSteps
          title={t('workflow.title')}
          steps={steps}
          accentFrom="#7C3AED"
          accentTo="#6D28D9"
        />

        <TechHighlights
          title={t('techHighlights.title')}
          items={techItems}
          dotColor="#7C3AED"
        />
      </div>
    </section>
  );
}
