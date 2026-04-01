'use client';

import { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// ---------- Gradient fallback (SSR / low-end) ----------
function GradientFallback() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(16,185,129,0.08) 100%)',
      }}
    />
  );
}

// ---------- Mouse tracker hook ----------
function useMouse() {
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return mouse;
}

// ---------- Particles geometry ----------
interface ParticlesProps {
  count: number;
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}

function Particles({ count, mouseRef }: ParticlesProps) {
  const meshRef = useRef<THREE.Points>(null!);
  const { camera } = useThree();

  // Build geometry once
  const { positions, colors, phases, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    const speeds = new Float32Array(count);

    const purple = new THREE.Color('#7C3AED');
    const green = new THREE.Color('#10B981');

    for (let i = 0; i < count; i++) {
      // Spherical distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 8 + Math.random() * 4; // radius 8-12

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6; // flatten slightly
      positions[i * 3 + 2] = r * Math.cos(phi);

      // 70% purple, 30% green
      const color = Math.random() < 0.7 ? purple : green;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      phases[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.3 + Math.random() * 0.7;
    }

    return { positions, colors, phases, speeds };
  }, [count]);

  // Camera parallax target
  const camTarget = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;

    // Slow Y-axis rotation (0.05-0.1 rad/s)
    meshRef.current.rotation.y = t * 0.07;

    // Floating animation per particle
    const posArray = meshRef.current.geometry.attributes.position
      .array as Float32Array;
    for (let i = 0; i < count; i++) {
      const phase = phases[i];
      const spd = speeds[i];
      posArray[i * 3 + 1] =
        positions[i * 3 + 1] +
        Math.sin(t * spd + phase) * 0.15 +
        Math.cos(t * spd * 0.5 + phase) * 0.1;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;

    // Camera parallax (smooth lerp)
    camTarget.current.x +=
      (mouseRef.current.x * 0.5 - camTarget.current.x) * 0.05;
    camTarget.current.y +=
      (mouseRef.current.y * 0.5 - camTarget.current.y) * 0.05;
    camera.position.x = camTarget.current.x;
    camera.position.y = camTarget.current.y;
    camera.lookAt(0, 0, 0);
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.slice(), 3]}
          count={count}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// ---------- Scene wrapper ----------
function Scene({ count }: { count: number }) {
  const mouseRef = useMouse();

  return (
    <>
      <ambientLight intensity={0.5} />
      <Particles count={count} mouseRef={mouseRef} />
    </>
  );
}

// ---------- Public component ----------
export default function ParticleCloud() {
  const [particleCount, setParticleCount] = useState(3000);

  useEffect(() => {
    const update = () =>
      setParticleCount(window.innerWidth < 768 ? 1200 : 4000);
    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Suspense fallback={<GradientFallback />}>
        <Canvas
          camera={{ position: [0, 0, 18], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <Scene count={particleCount} />
        </Canvas>
      </Suspense>
    </div>
  );
}
