'use client';

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const STORAGE_KEY = 'cookie-consent';
const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function CookieBanner() {
  const t = useTranslations('cookies');
  const locale = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = (value: 'all' | 'necessary') => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="flex-1 text-sm text-foreground-muted leading-relaxed">
              {t('message')}{' '}
              <Link
                href={`/${locale}/privacy`}
                className="text-primary hover:underline"
              >
                {t('learnMore')}
              </Link>
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <Button variant="secondary" size="sm" onClick={() => accept('necessary')}>
                {t('necessaryOnly')}
              </Button>
              <Button variant="primary" size="sm" onClick={() => accept('all')}>
                {t('acceptAll')}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
