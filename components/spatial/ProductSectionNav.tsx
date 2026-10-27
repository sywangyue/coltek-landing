'use client';

import {useEffect, useRef, useState} from 'react';

export default function ProductSectionNav({items, label}: {items: string[][]; label: string}) {
  const [active, setActive] = useState('');
  const nav = useRef<HTMLElement>(null);
  const ids = items.map(([id]) => id).join('|');

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const threshold = (nav.current?.getBoundingClientRect().bottom ?? 128) + 24;
      let current = '';
      for (const id of ids.split('|')) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= threshold) current = id;
      }
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, {passive: true});
    window.addEventListener('resize', schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [ids]);

  useEffect(() => {
    const link = nav.current?.querySelector<HTMLAnchorElement>('[aria-current="location"]');
    const container = link?.parentElement;
    if (link && container) {
      const left = link.offsetLeft - container.offsetLeft;
      if (left < container.scrollLeft || left + link.offsetWidth > container.scrollLeft + container.clientWidth) {
        container.scrollTo({left: left - (container.clientWidth - link.offsetWidth) / 2, behavior: 'instant'});
      }
    }
  }, [active]);

  return <nav ref={nav} aria-label={label} className="sticky top-16 z-30 border-b border-slate-200 bg-white">
    <div className="relative mx-auto flex max-w-7xl overflow-x-auto px-6 py-2 sm:px-10">
      {items.map(([id, title]) => <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined}
        onClick={() => setActive(id)}
        className={`flex-1 whitespace-nowrap rounded-lg px-4 py-3 text-center text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${active === id ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'}`}>
        {title}
      </a>)}
    </div>
  </nav>;
}
