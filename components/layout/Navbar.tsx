'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

const LOCALES = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'nl', label: 'Dutch' },
  { code: 'zh', label: '中文' },
];

type DropdownItem = {
  children?: DropdownItem[];
  labelKey: string;
  descKey: string;
  href: string;
};

type NavItem = {
  labelKey: string;
  href: string;
  dropdown?: DropdownItem[];
};

function PayloadSubmenu({sub, mobile=false, close}:{sub:DropdownItem;mobile?:boolean;close:()=>void}) {
  const t=useTranslations('nav');
  const [open,setOpen]=useState(false);
  const id=`payload-submenu-${mobile?'mobile':'desktop'}`;
  return <div className="relative" onMouseEnter={()=>!mobile&&setOpen(true)} onMouseLeave={()=>!mobile&&setOpen(false)} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setOpen(false)}} onKeyDown={e=>{if(e.key==='Escape'){e.stopPropagation();setOpen(false);e.currentTarget.querySelector('button')?.focus()}}}>
    <div className="flex items-center rounded-lg hover:bg-background-alt">
      <Link href={sub.href} onClick={close} className="min-w-0 flex-1 px-4 py-3"><span className="block text-sm font-medium">{t(sub.labelKey)}</span>{!mobile&&<span className="mt-0.5 block text-xs text-foreground-muted">{t(sub.descKey)}</span>}</Link>
      <button type="button" aria-label={t(sub.labelKey)} aria-expanded={open} aria-controls={id} onClick={()=>setOpen(!open)} className="mr-2 rounded-lg p-2 text-foreground-muted hover:bg-primary/10 focus-visible:outline-primary">{mobile?<ChevronDown size={16} className={open?'rotate-180':''}/>:<ChevronRight size={16}/>}</button>
    </div>
    {open&&<div id={id} className={mobile?'ml-5 border-l border-border pl-2':'absolute left-full top-0 w-64 pl-2'}><div className={mobile?'py-1':'rounded-2xl border border-border bg-white p-1 shadow-lg'}>{sub.children?.map(child=><Link key={child.labelKey} href={child.href} onClick={close} className="block rounded-xl px-4 py-3 hover:bg-background-alt focus-visible:outline-primary"><span className="block text-sm font-medium">{t(child.labelKey)}</span><span className="mt-1 block text-xs text-foreground-muted">{t(child.descKey)}</span></Link>)}</div></div>}
  </div>;
}

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const langRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navItems: NavItem[] = [
    {
      labelKey: 'spatial',
      href: `/${locale}/spatial/xgrids`,
      dropdown: [
        { labelKey: 'xgrids', descKey: 'xgridsDesc', href: `/${locale}/spatial/xgrids` },
      ],
    },
    {
      labelKey: 'airspace',
      href: `/${locale}/airspace/droneguard`,
      dropdown: [
        { labelKey: 'droneguard', descKey: 'droneguardDesc', href: `/${locale}/airspace/droneguard` },
      ],
    },
    {
      labelKey: 'drones',
      href: `/${locale}/drones/dji`,
      dropdown: [
        { labelKey: 'dji', descKey: 'djiDesc', href: `/${locale}/drones/dji` },
        { labelKey: 'payloads', descKey: 'payloadsDesc', href: `/${locale}/payloads`, children: [
          {labelKey:'yunscan',descKey:'yunscanDesc',href:`/${locale}/payloads/yunscan`},
          ...(locale==='zh'?[{labelKey:'wissonP3',descKey:'wissonP3Desc',href:'/zh/payloads/wisson-p3'}]:[]),
        ] },
      ],
    },
    { labelKey: 'aiHardware', href: `/${locale}/#ai-hardware` },
    { labelKey: 'download', href: `/${locale}/download` },
    { labelKey: 'about', href: `/${locale}/#about` },
    { labelKey: 'news', href: `/${locale}/news` },
    { labelKey: 'contact', href: `/${locale}/#contact` },
  ];

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/') || '/');
    setLangOpen(false);
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}/`} className="flex items-center">
            <Image
              src="/images/logo/Logo.png"
              alt="Coltek"
              width={160}
              height={40}
              className="h-9 w-auto sm:h-10"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.labelKey}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.labelKey)}
                onMouseLeave={() => setActiveDropdown(null)}
                onFocus={() => item.dropdown && setActiveDropdown(item.labelKey)}
                onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setActiveDropdown(null)}}
                onKeyDown={e=>{if(e.key==='Escape')setActiveDropdown(null)}}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-2.5 py-2 text-sm font-medium text-foreground hover:text-primary rounded-lg transition-colors whitespace-nowrap"
                >
                  {t(item.labelKey as Parameters<typeof t>[0])}
                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.labelKey ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.labelKey && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 w-64 bg-white rounded-[16px] shadow-lg border border-border p-1"
                      >
                        {item.dropdown.map((sub) => sub.children ? <PayloadSubmenu key={sub.labelKey} sub={sub} close={()=>setActiveDropdown(null)}/> : (
                          <Link
                            key={sub.labelKey}
                            href={sub.href}
                            className="block px-4 py-3 hover:bg-background-alt transition-colors"
                          >
                            <div className="text-sm font-medium text-foreground">
                              {t(sub.labelKey as Parameters<typeof t>[0])}
                            </div>
                            <div className="text-xs text-foreground-muted mt-0.5">
                              {t(sub.descKey as Parameters<typeof t>[0])}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Lang switcher + mobile toggle */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-lg transition-colors"
                aria-label="Switch language"
              >
                <Globe size={16} />
                <span className="uppercase hidden sm:inline">{locale}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-1 w-40 bg-white rounded-[16px] shadow-lg border border-border overflow-hidden"
                  >
                    {LOCALES.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => switchLocale(l.code)}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-background-alt ${
                          locale === l.code
                            ? 'text-primary font-medium'
                            : 'text-foreground'
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile hamburger */}
            <button
              className="xl:hidden p-2 rounded-lg hover:bg-background-alt transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <div key={item.labelKey}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.labelKey ? null : item.labelKey
                          )
                        }
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-foreground hover:bg-background-alt rounded-lg transition-colors"
                      >
                        {t(item.labelKey as Parameters<typeof t>[0])}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            mobileExpanded === item.labelKey ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.labelKey && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="overflow-hidden pl-4"
                          >
                            {item.dropdown.map((sub) => sub.children ? <PayloadSubmenu key={sub.labelKey} sub={sub} mobile close={()=>setMobileOpen(false)}/> : (
                              <Link
                                key={sub.labelKey}
                                href={sub.href}
                                className="block px-4 py-2.5 text-sm text-foreground-muted hover:text-primary transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {t(sub.labelKey as Parameters<typeof t>[0])}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-foreground hover:bg-background-alt rounded-lg transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t(item.labelKey as Parameters<typeof t>[0])}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Lang Switcher */}
              <div className="pt-4 border-t border-border">
                <p className="px-4 text-xs font-semibold uppercase tracking-wide text-foreground-muted mb-2">
                  Language
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {LOCALES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        switchLocale(l.code);
                        setMobileOpen(false);
                      }}
                      className={`px-4 py-2.5 text-sm rounded-lg border transition-colors ${
                        locale === l.code
                          ? 'border-primary text-primary bg-primary/5 font-medium'
                          : 'border-border text-foreground hover:border-primary/50'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
