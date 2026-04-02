'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { RotateCcw, Maximize2 } from 'lucide-react';
import type { Viewer as GS3DViewer } from '@mkkellogg/gaussian-splats-3d';
import * as THREE from 'three';

const MODEL_URL =
  'https://jkxpnxzgoejjsmeaehhf.supabase.co/storage/v1/object/sign/sunnova/historic%20indoor.compressed.ply?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NWMyODAxMi1jMjYxLTQ0N2UtODdiMC04OWRhNzI5MjYwMWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzdW5ub3ZhL2hpc3RvcmljIGluZG9vci5jb21wcmVzc2VkLnBseSIsImlhdCI6MTc3NTAzODA2MiwiZXhwIjoxODA2NTc0MDYyfQ.T55F01eAq1lewwJjjXo30QlgORZsU4ZZiWoq7YQH094';

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
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create our own renderer so we can control the clear color (white background).
    // Passing it to the Viewer sets usingExternalRenderer=true, which prevents the
    // viewer from trying to remove our rootElement from document.body on dispose.
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0xffffff, 1);
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Resize observer — the viewer won't do this when we supply an external renderer.
    const resizeObserver = new ResizeObserver(() => {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    });
    resizeObserver.observe(container);

    let viewer: GS3DViewer | null = null;
    let disposed = false;

    (async () => {
      const GaussianSplats3D = await import('@mkkellogg/gaussian-splats-3d');
      if (disposed) return;

      viewer = new GaussianSplats3D.Viewer({
        renderer,
        rootElement: container,
        sharedMemoryForWorkers: false,
        gpuAcceleratedSort: false,
        showLoadingUI: false,
        logLevel: GaussianSplats3D.LogLevel.None,
      });

      viewerRef.current = viewer;

      try {
        // Must pass format explicitly: the URL has a query-string (?token=…) so
        // path.endsWith('.ply') returns false and the viewer throws "format not supported".
        await viewer.addSplatScene(MODEL_URL, {
          format: GaussianSplats3D.SceneFormat.Ply,
          splatAlphaRemovalThreshold: 5,
          showLoadingUI: false,
          progressiveLoad: true,
        });

        if (!disposed) {
          setLoading(false);
          viewer.start();
        }
      } catch (err) {
        // Log to console so errors are visible during development, then hide loading.
        console.error('[ModelViewer] Failed to load splat scene:', err);
        if (!disposed) setLoading(false);
      }
    })();

    return () => {
      disposed = true;
      viewerRef.current = null;
      resizeObserver.disconnect();

      // Dispose viewer first (stops animation loop, releases GPU splat resources).
      if (viewer) {
        viewer.dispose().catch(() => {});
      }

      // Dispose our renderer and remove its canvas.
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      rendererRef.current = null;
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
