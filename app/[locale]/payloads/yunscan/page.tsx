'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import {
  ArrowRight, Radar, ScanSearch, MapPin, MonitorSmartphone, FileCheck, Plug,
  PartyPopper, Siren, Plane, Factory, Landmark,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// ── Easing (framer-motion v12 compatible) ────────────────────────────────────
const EASE = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, delay, ease: EASE },
});

// Icons follow the order of the items in messages (payloads.yunscan.*)
const FEATURE_ICONS = [Radar, ScanSearch, MapPin, MonitorSmartphone, FileCheck, Plug];
const SCENARIO_ICONS = [PartyPopper, Siren, Plane, Factory, Landmark];

// ── Types ────────────────────────────────────────────────────────────────────
interface Highlight { value: string; label: string }
interface TextItem { title: string; desc: string }
interface AppItem extends TextItem { image: string }

function SectionHeading({ title, desc }: { title: string; desc?: string }) {
  return (
    <motion.div {...fadeUp()} className="mb-10 text-center max-w-2xl mx-auto">
      <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">{title}</h2>
      {desc && <p className="text-foreground-muted leading-relaxed">{desc}</p>}
    </motion.div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function YunScanPage() {
  const t = useTranslations('payloads');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const highlights = t.raw('yunscan.highlights') as Highlight[];
  const features = t.raw('yunscan.features.items') as TextItem[];
  const appItems = t.raw('yunscan.app.items') as AppItem[];
  const scenarios = t.raw('yunscan.scenarios.items') as TextItem[];
  const specRows = t.raw('yunscan.specs.rows') as [string, string][];
  const contactHref = `/${locale}/#contact`;

  return (
    <main>
      <Navbar />

      {/* ── A. Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-white pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-foreground-muted mb-8">
            <Link href={`/${locale}/`} className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${locale}/payloads`} className="hover:text-primary transition-colors">{tNav('payloads')}</Link>
            <span>/</span>
            <span className="text-foreground font-medium">YunScan001</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                {t('yunscan.label')}
              </span>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-3">YunScan001</h1>
              <p className="text-lg font-medium text-foreground mb-5">{t('yunscan.subtitle')}</p>
              <p className="text-foreground-muted leading-relaxed mb-8">{t('yunscan.description')}</p>
              <Link
                href={contactHref}
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-[8px] hover:bg-primary-dark transition-colors"
              >
                {t('yunscan.cta')} <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="relative bg-[#F1F5F9] rounded-2xl aspect-[4/3]"
            >
              <Image
                src="/images/payloads/yunscan/on-m400.png"
                alt="YunScan001 mounted on a DJI Matrice 400"
                fill
                priority
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          {/* Key numbers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                {...fadeUp(i * 0.06)}
                className="bg-background-alt border border-border rounded-[12px] px-5 py-6 text-center"
              >
                <p className="font-display text-2xl lg:text-3xl font-bold text-primary mb-1">{h.value}</p>
                <p className="text-sm text-foreground-muted">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── B. Core capabilities ─────────────────────────────────────────── */}
      <section className="py-20 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('yunscan.features.title')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => {
              const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
              return (
                <motion.div
                  key={f.title}
                  {...fadeUp(i * 0.06)}
                  className="bg-white border border-border rounded-[12px] p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── C. Controller app ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('yunscan.app.title')} desc={t('yunscan.app.desc')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {appItems.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.08)}>
                <div className="relative aspect-[16/10] rounded-[12px] overflow-hidden border border-border bg-[#F1F5F9] mb-4">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── D. Application scenarios ─────────────────────────────────────── */}
      <section className="py-20 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('yunscan.scenarios.title')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {scenarios.map((s, i) => {
              const Icon = SCENARIO_ICONS[i % SCENARIO_ICONS.length];
              return (
                <motion.div
                  key={s.title}
                  {...fadeUp(i * 0.06)}
                  className="bg-white border border-border rounded-[12px] p-5"
                >
                  <Icon size={22} className="text-accent mb-3" />
                  <h3 className="font-display text-base font-bold text-foreground mb-1.5">{s.title}</h3>
                  <p className="text-sm text-foreground-muted leading-snug">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── E. Specifications ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('yunscan.specs.title')} />
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 items-start">
            <motion.div {...fadeUp()} className="relative bg-[#F1F5F9] rounded-2xl aspect-square lg:sticky lg:top-28">
              <Image
                src="/images/payloads/yunscan/module.png"
                alt="YunScan001 detection module"
                fill
                className="object-contain p-10"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </motion.div>
            <motion.div {...fadeUp(0.08)} className="border border-border rounded-[12px] overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {specRows.map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? 'bg-background-alt' : 'bg-white'}>
                      <th scope="row" className="text-left font-semibold text-foreground px-5 py-3 align-top w-[40%]">{k}</th>
                      <td className="text-foreground-muted px-5 py-3">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── F. Contact CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-background-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">{t('yunscan.contact.title')}</h2>
            <p className="text-foreground-muted leading-relaxed mb-8">{t('yunscan.contact.desc')}</p>
            <Link
              href={contactHref}
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-[8px] hover:bg-primary-dark transition-colors"
            >
              {t('yunscan.contact.button')} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
