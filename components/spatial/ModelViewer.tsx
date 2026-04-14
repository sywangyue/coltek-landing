'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { RotateCcw, Maximize2 } from 'lucide-react';
import type { Viewer as GS3DViewer } from '@mkkellogg/gaussian-splats-3d';

// Proxy route: keeps Supabase token server-side, bypasses browser CORS
const MODEL_URL = '/api/splat';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<GS3DViewer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let viewer: GS3DViewer | null = null;
    let disposed = false;

    (async () => {
      const GaussianSplats3D = await import('@mkkellogg/gaussian-splats-3d');
      if (disposed) return;

      // Standard initialization — let the Viewer manage its own renderer/canvas
      viewer = new GaussianSplats3D.Viewer({
        rootElement: container,
        sharedMemoryForWorkers: false,
        gpuAcceleratedSort: false,
        showLoadingUI: false,
        logLevel: GaussianSplats3D.LogLevel.None,
        antialias: false,
        dpr: Math.min(window.devicePixelRatio, 1.5),
      });

      viewerRef.current = viewer;

      try {
        await viewer.addSplatScene(MODEL_URL, {
          format: GaussianSplats3D.SceneFormat.Ply,
          splatAlphaRemovalThreshold: 5,
          showLoadingUI: false,
          progressiveLoad: false,
          // SuperSplat exports with inverted Y-axis vs Three.js convention
          // 180° rotation around X-axis: quaternion (x,y,z,w) = [1,0,0,0]
          rotation: [1, 0, 0, 0],
        });

        if (!disposed) {
          setLoading(false);
          viewer.start();
        }
      } catch (err) {
        console.error('[ModelViewer] Failed to load splat scene:', err);
        if (!disposed) setLoading(false);
      }
    })();

    return () => {
      disposed = true;
      viewerRef.current = null;

      if (viewer) {
        try {
          viewer.dispose();
        } catch {
          // ignore dispose errors
        }
      }
    };
  }, []);

  const handleReset = useCallback(() => {
    viewerRef.current?.controls?.reset();
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
      className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden h-[300px] md:h-[500px]"
    >
      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 pointer-events-none">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-gray-500 text-sm">{loadingText}</span>
        </div>
      )}

      {/* Top info bar */}
      {(title || category) && (
        <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
          {category && (
            <span className="bg-primary/80 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
              {category}
            </span>
          )}
          {title && (
            <span className="text-gray-700 text-sm font-medium bg-white/80 px-2 py-0.5 rounded backdrop-blur-sm">
              {title}
            </span>
          )}
        </div>
      )}

      {/* Instruction */}
      <div className="absolute bottom-12 left-3 text-gray-500 text-xs bg-white/80 px-2 py-1 rounded z-10 backdrop-blur-sm">
        {instruction}
      </div>

      {/* Controls */}
      <div className="absolute bottom-3 right-3 flex gap-2 z-10">
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-lg transition-colors"
        >
          <RotateCcw size={12} /> {resetLabel}
        </button>
        <button
          onClick={handleFullscreen}
          className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-lg transition-colors"
        >
          <Maximize2 size={12} /> {fullscreenLabel}
        </button>
      </div>
    </div>
  );
}
