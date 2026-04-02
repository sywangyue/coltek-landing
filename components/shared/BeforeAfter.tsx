'use client';

import { useRef, useState, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface Panel {
  label: string;
  bg: string;          // tailwind bg class or inline style
  icon: React.ReactNode;
}

interface Props {
  title: string;
  before: Panel;
  after: Panel;
  height?: string;
}

export default function BeforeAfter({ title, before, after, height = 'h-72 md:h-96' }: Props) {
  const [pos, setPos] = useState(50); // percent from left
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  return (
    <div className="mt-16">
      <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">{title}</h3>
      <div
        ref={containerRef}
        className={`relative overflow-hidden rounded-[16px] select-none cursor-col-resize ${height}`}
        onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
        onMouseMove={(e) => { if (dragging.current) move(e.clientX); }}
        onMouseUp={() => { dragging.current = false; }}
        onMouseLeave={() => { dragging.current = false; }}
        onTouchStart={(e) => { dragging.current = true; move(e.touches[0].clientX); }}
        onTouchMove={(e) => { if (dragging.current) move(e.touches[0].clientX); }}
        onTouchEnd={() => { dragging.current = false; }}
      >
        {/* After panel (full) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" style={{ background: after.bg }}>
          {after.icon}
          <span className="text-sm font-medium text-foreground/70">{after.label}</span>
        </div>

        {/* Before panel (clipped) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)`, background: before.bg }}
        >
          {before.icon}
          <span className="text-sm font-medium text-foreground/70">{before.label}</span>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
          style={{ left: `${pos}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg pointer-events-none z-10"
          style={{
            left: `${pos}%`,
            background: 'linear-gradient(135deg, #8B5CF6, #34D399)',
          }}
        >
          <ChevronsLeftRight size={18} className="text-white" />
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-black/40 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm pointer-events-none">
          {before.label}
        </div>
        <div className="absolute top-3 right-3 bg-black/40 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm pointer-events-none">
          {after.label}
        </div>
      </div>
    </div>
  );
}
