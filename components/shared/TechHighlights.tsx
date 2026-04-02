'use client';

import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1] as const;

interface Props {
  title: string;
  items: string[];
  dotColor?: string;
}

export default function TechHighlights({ title, items, dotColor = '#34D399' }: Props) {
  return (
    <div className="mt-12">
      <h3 className="font-display text-lg font-bold text-foreground mb-5">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.07, ease: EASE }}
            className="flex items-center gap-2 bg-background-alt border border-border rounded-full px-4 py-2"
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: dotColor }} />
            <span className="text-sm text-foreground">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
