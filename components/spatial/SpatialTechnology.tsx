import {Radar, Orbit, ScanEye, Combine, Code2} from 'lucide-react';

const icons = [Radar, Orbit, ScanEye, Combine, Code2];

export default function SpatialTechnology({title, items}: {title: string; items: string[]}) {
  return <section aria-label={title} className="relative mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-[#f5f7fb] p-6 sm:p-9">
    <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-blue-200/50 p-10"><div className="h-full w-full rounded-full border border-blue-200/60 p-10"><div className="h-full w-full rounded-full border border-blue-200/70"/></div></div>
    <div className="relative mb-7 flex items-center gap-5 sm:mb-9">
      <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{title}</h3>
      <div aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-blue-300 to-transparent"/>
    </div>
    <ol className="relative grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item, i) => {
        const Icon = icons[i % icons.length];
        return <li key={item} className={`flex items-center gap-5 border-t border-slate-200 py-5 sm:block sm:px-5 sm:py-6 lg:border-t-0 lg:py-0 ${i ? 'lg:border-l' : 'lg:pl-0'} ${i === items.length-1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
          <div className="flex shrink-0 items-center justify-between gap-5 sm:mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200/80 bg-white text-blue-600"><Icon size={27} strokeWidth={1.4} aria-hidden="true"/></div>
            <span aria-hidden="true" className="hidden font-mono text-xs tracking-wider text-slate-400 sm:block">{String(i+1).padStart(2,'0')}</span>
          </div>
          <p className="text-sm font-medium leading-6 text-slate-700 sm:min-h-12">{item}</p>
        </li>;
      })}
    </ol>
  </section>;
}
