'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SocialIconRow from '@/components/shared/SocialIconRow';

export default function SocialBar() {
  const t = useTranslations('social');

  return (
    <section className="bg-white py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-5">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-widest text-foreground-muted"
        >
          {t('title')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <SocialIconRow size="md" />
        </motion.div>
      </div>
    </section>
  );
}
