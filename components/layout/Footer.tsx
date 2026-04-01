import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { MapPin, Phone } from 'lucide-react';
import CookieResetButton from './CookieResetButton';

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const locale = useLocale();

  const quickLinks = [
    { labelKey: 'spatial', href: `/${locale}/#spatial` },
    { labelKey: 'airspace', href: `/${locale}/#airspace` },
    { labelKey: 'aiHardware', href: `/${locale}/#ai-hardware` },
    { labelKey: 'news', href: `/${locale}/#news` },
    { labelKey: 'about', href: `/${locale}/#about` },
    { labelKey: 'contact', href: `/${locale}/#contact` },
  ] as const;

  return (
    <footer className="bg-background-alt border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left: Logo + description */}
          <div>
            <span className="font-display text-2xl font-bold gradient-brand-text block mb-3">
              COLTEK
            </span>
            <p className="text-sm text-foreground-muted leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-4">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.labelKey}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-primary transition-colors"
                  >
                    {tn(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-4">
              {t('contactInfo')}
            </h3>
            <div className="space-y-4">
              {/* Coltek */}
              <div>
                <p className="text-sm font-medium text-foreground">{t('coltek')}</p>
                <div className="flex items-start gap-1.5 mt-1">
                  <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground-muted">{t('coltekAddress')}</p>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <Phone size={14} className="text-primary shrink-0" />
                  <a
                    href="tel:+4915120266740"
                    className="text-sm text-foreground-muted hover:text-primary transition-colors"
                  >
                    {t('coltekPhone')}
                  </a>
                </div>
              </div>
              {/* Sunova */}
              <div>
                <p className="text-sm font-medium text-foreground">{t('sunova')}</p>
                <div className="flex items-start gap-1.5 mt-1">
                  <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground-muted">{t('sunovaAddress')}</p>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <Phone size={14} className="text-primary shrink-0" />
                  <a
                    href="tel:+31645402151"
                    className="text-sm text-foreground-muted hover:text-primary transition-colors"
                  >
                    {t('sunovaPhone')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-foreground-muted">{t('copyright')}</p>
          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}/privacy`}
              className="text-xs text-foreground-muted hover:text-primary transition-colors"
            >
              {t('privacy')}
            </Link>
            <Link
              href={`/${locale}/impressum`}
              className="text-xs text-foreground-muted hover:text-primary transition-colors"
            >
              {t('impressum')}
            </Link>
            <CookieResetButton label={t('cookies')} />
          </div>
        </div>
      </div>
    </footer>
  );
}
