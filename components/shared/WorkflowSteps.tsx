'use client';

import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1] as const;

export interface WorkflowStep { label: string; desc: string; }

interface Props {
  title: string;
  steps: WorkflowStep[];
  accentFrom?: string;
  accentTo?: string;
}

export default function WorkflowSteps({
  title,
  steps,
  accentFrom = '#7C3AED',
  accentTo   = '#10B981',
}: Props) {
  return (
    <div className="mt-16">
      <h3 className="font-display text-xl font-bold text-foreground mb-8 text-center">{title}</h3>

      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-start gap-0">
        {steps.map((step, i) => (
          <div key={i} className="flex-1 flex items-start gap-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.12, ease: EASE }}
              className="flex-1 flex flex-col items-center text-center px-2"
            >
              {/* Circle + line row */}
              <div className="flex items-center w-full mb-4">
                {/* Leading line (not on first) */}
                {i > 0 && (
                  <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1, originX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.12, ease: EASE }}
                    className="flex-1 h-px border-t-2 border-dashed border-border"
                  />
                )}
                {/* Number circle */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})` }}
                >
                  {i + 1}
                </div>
                {/* Trailing line (not on last) */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1, originX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i + 0.5) * 0.12, ease: EASE }}
                    className="flex-1 h-px border-t-2 border-dashed border-border"
                  />
                )}
              </div>
              <p className="text-sm font-semibold text-foreground mb-1">{step.label}</p>
              <p className="text-xs text-foreground-muted leading-relaxed">{step.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="md:hidden space-y-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }}
            className="flex items-start gap-4"
          >
            <div className="flex flex-col items-center">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                style={{ background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})` }}
              >
                {i + 1}
              </div>
              {i < steps.length - 1 && <div className="w-px flex-1 min-h-[24px] border-l-2 border-dashed border-border mt-1" />}
            </div>
            <div className="pb-4">
              <p className="text-sm font-semibold text-foreground mb-0.5">{step.label}</p>
              <p className="text-xs text-foreground-muted">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
