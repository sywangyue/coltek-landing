'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import HeroContent from './HeroContent';

// Dynamic import for Three.js — avoids SSR issues
const ParticleCloud = dynamic(() => import('./ParticleCloud'), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(16,185,129,0.08) 100%)',
      }}
    />
  ),
});

function ScrollIndicator() {
  function scrollToNext() {
    const el = document.getElementById('spatial');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <button
      onClick={scrollToNext}
      aria-label="Scroll down"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-50 hover:opacity-80 transition-opacity"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={28} className="text-foreground-muted" />
      </motion.div>
    </button>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Particle background layer */}
      <ParticleCloud />

      {/* Content layer */}
      <HeroContent />

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}
