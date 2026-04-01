'use client';

import { Suspense, useRef, useMemo, useCallback } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { RotateCcw, Maximize2 } from 'lucide-react';

// ── Procedural building point cloud ──────────────────────────────────────────
function BuildingCloud() {
  const { positions, colors } = useMemo(() => {
    const pts: number[] = [];
    const cols: number[] = [];

    const purple = new THREE.Color('#7C3AED');
    const green  = new THREE.Color('#10B981');

    const addPoint = (x: number, y: number, z: number) => {
      const t = (y + 0.5) / 5.5; // normalise 0-1
      const c = purple.clone().lerp(green, t);
      pts.push(x, y, z);
      cols.push(c.r, c.g, c.b);
    };

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    // --- Ground floor outline ---
    for (let i = 0; i < 400; i++) {
      const side = Math.floor(Math.random() * 4);
      if (side === 0) addPoint(rand(-3, 3),   rand(-0.5, 0), -2);
      else if (side === 1) addPoint(rand(-3, 3), rand(-0.5, 0),  2);
      else if (side === 2) addPoint(-3, rand(-0.5, 0), rand(-2, 2));
      else                 addPoint( 3, rand(-0.5, 0), rand(-2, 2));
    }

    // --- Wall faces ---
    for (let i = 0; i < 2000; i++) {
      const side = Math.floor(Math.random() * 4);
      const h = rand(0, 4);
      if (side === 0) addPoint(rand(-3, 3), h, -2);
      else if (side === 1) addPoint(rand(-3, 3), h,  2);
      else if (side === 2) addPoint(-3, h, rand(-2, 2));
      else                 addPoint( 3, h, rand(-2, 2));
    }

    // --- Window grid (front face) ---
    for (let wx = -2; wx <= 2; wx += 1.4) {
      for (let wy = 0.5; wy <= 3.5; wy += 1) {
        for (let i = 0; i < 30; i++) {
          addPoint(wx + rand(-0.25, 0.25), wy + rand(-0.2, 0.2), -2.01 + rand(-0.05, 0.05));
        }
      }
    }

    // --- Roof (triangular pitch) ---
    for (let i = 0; i < 800; i++) {
      const x = rand(-3.2, 3.2);
      const z = rand(-2.2, 2.2);
      // ridge at y=5, eaves at y=4
      const ridge = 5;
      const eave  = 4;
      const slope = eave + (ridge - eave) * (1 - Math.abs(z) / 2.2);
      addPoint(x, slope + rand(-0.06, 0.06), z);
    }

    return {
      positions: new Float32Array(pts),
      colors:    new Float32Array(cols),
    };
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={positions.length / 3} />
        <bufferAttribute attach="attributes-color"    args={[colors,    3]} count={colors.length    / 3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors sizeAttenuation depthWrite={false} />
    </points>
  );
}

// ── OrbitControls wrapper that exposes reset ──────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Controls({ controlsRef }: { controlsRef: React.RefObject<any> }) {
  return (
    <OrbitControls
      ref={controlsRef}
      minDistance={4}
      maxDistance={22}
      enableDamping
      dampingFactor={0.08}
    />
  );
}

// ── Scene ─────────────────────────────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Scene({ controlsRef }: { controlsRef: React.RefObject<any> }) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <BuildingCloud />
      <Controls controlsRef={controlsRef} />
    </>
  );
}

// ── Public component ──────────────────────────────────────────────────────────
interface ModelViewerProps {
  instruction: string;
  loadingText: string;
  resetLabel: string;
  fullscreenLabel: string;
  title?: string;
  category?: string;
}

export default function ModelViewer({
  instruction,
  loadingText,
  resetLabel,
  fullscreenLabel,
  title,
  category,
}: ModelViewerProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const controlsRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleReset = useCallback(() => {
    controlsRef.current?.reset();
  }, []);

  const handleFullscreen = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-gray-900 rounded-[16px] overflow-hidden h-[300px] md:h-[500px]"
    >
      <Suspense
        fallback={
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="text-gray-400 text-sm">{loadingText}</span>
          </div>
        }
      >
        <Canvas
          camera={{ position: [8, 5, 10], fov: 55 }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, alpha: false }}
          style={{ background: '#111827' }}
        >
          <Scene controlsRef={controlsRef} />
        </Canvas>
      </Suspense>

      {/* Top info bar */}
      {(title || category) && (
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {category && (
            <span className="bg-primary/80 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
              {category}
            </span>
          )}
          {title && (
            <span className="text-white/80 text-sm font-medium backdrop-blur-sm bg-black/20 px-2 py-0.5 rounded">
              {title}
            </span>
          )}
        </div>
      )}

      {/* Instruction */}
      <div className="absolute bottom-12 left-3 text-gray-400 text-xs backdrop-blur-sm bg-black/20 px-2 py-1 rounded">
        {instruction}
      </div>

      {/* Controls */}
      <div className="absolute bottom-3 right-3 flex gap-2">
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 rounded-lg transition-colors backdrop-blur-sm"
        >
          <RotateCcw size={12} /> {resetLabel}
        </button>
        <button
          onClick={handleFullscreen}
          className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 rounded-lg transition-colors backdrop-blur-sm"
        >
          <Maximize2 size={12} /> {fullscreenLabel}
        </button>
      </div>
    </div>
  );
}
