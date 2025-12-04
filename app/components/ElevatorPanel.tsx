'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { FLOOR_CONFIG } from './floorConfig';

const MANUAL_SCROLL_RELEASE_THRESHOLD = 0.6;
const MANUAL_SCROLL_TIMEOUT = 2000;
const AUTO_SCROLL_ACTIVATE_THRESHOLD = 0.55;

const LAST_FLOOR_ID = FLOOR_CONFIG[FLOOR_CONFIG.length - 1]?.id ?? null;

export default function ElevatorPanel() {
  const [activeFloor, setActiveFloor] = useState<string>('hero');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const currentActiveRef = useRef<string>('hero');
  const manualTargetRef = useRef<string | null>(null);
  const manualTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleFloorChange = (floorId: string) => {
    if (typeof window === 'undefined') return;
    const section = document.getElementById(floorId);
    if (!section) return;

    manualTargetRef.current = floorId;
    if (manualTimeoutRef.current) {
      clearTimeout(manualTimeoutRef.current);
    }
    manualTimeoutRef.current = setTimeout(() => {
      manualTargetRef.current = null;
    }, MANUAL_SCROLL_TIMEOUT);

    currentActiveRef.current = floorId;
    setActiveFloor(floorId);
    window.dispatchEvent(new CustomEvent('elevator-floor-change', { detail: { floor: floorId } }));

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const thresholds = Array.from({ length: 11 }, (_, index) => index / 10);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (!visible.length) return;

        const mostVisible = visible.reduce((prev, current) =>
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        );

        const id = mostVisible.target.id;
        if (!id) return;

        if (manualTargetRef.current) {
          if (id !== manualTargetRef.current) {
            return;
          }

          if (mostVisible.intersectionRatio < MANUAL_SCROLL_RELEASE_THRESHOLD) {
            return;
          }

          manualTargetRef.current = null;
          if (manualTimeoutRef.current) {
            clearTimeout(manualTimeoutRef.current);
            manualTimeoutRef.current = null;
          }
        }

        const activationThreshold =
          LAST_FLOOR_ID && id === LAST_FLOOR_ID ? Math.min(0.35, AUTO_SCROLL_ACTIVATE_THRESHOLD) : AUTO_SCROLL_ACTIVATE_THRESHOLD;

        if (mostVisible.intersectionRatio < activationThreshold) {
          return;
        }

        if (currentActiveRef.current === id) return;

        currentActiveRef.current = id;
        setActiveFloor(id);
        window.dispatchEvent(new CustomEvent('elevator-floor-change', { detail: { floor: id } }));
      },
      {
        threshold: thresholds,
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    FLOOR_CONFIG.forEach((floor) => {
      const el = document.getElementById(floor.id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => {
      if (manualTimeoutRef.current) {
        clearTimeout(manualTimeoutRef.current);
      }
      observer.disconnect();
    };
  }, []);

  const progress = useMemo(() => {
    const index = FLOOR_CONFIG.findIndex((floor) => floor.id === activeFloor);
    return ((index >= 0 ? index : 0) / (FLOOR_CONFIG.length - 1)) * 100;
  }, [activeFloor]);

  return (
    <aside className="hidden xl:block fixed right-6 top-1/2 -translate-y-1/2 z-30">
      <div className="w-25 rounded-[32px] bg-slate-900/80 backdrop-blur-lg border border-white/10 shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-white/10">
        
          <div className="mt-4 flex items-center justify-between text-white">
            <span className="text-4xl font-semibold ml-4">{FLOOR_CONFIG.find((floor) => floor.id === activeFloor)?.number ?? '0'}</span>
            <div className="flex gap-3">
             
            </div>
          </div>
          <div className="mt-4 h-1 rounded-full bg-white/10">
            <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 transition-all" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto no-scrollbar divide-y divide-white/5">
          {FLOOR_CONFIG.map((floor) => {
            const isActive = floor.id === activeFloor;
            return (
              <button
                key={floor.id}
                onClick={() => handleFloorChange(floor.id)}
                className={`w-full px-6 py-4 text-left transition duration-200 ${
                  isActive ? 'bg-slate-800/90 text-white' : 'text-white/70 hover:bg-slate-800/60'
                }`}
                aria-current={isActive}
              >
                <div className="flex items-center justify-between">
                
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border transition ${
                      isActive ? 'border-blue-300 bg-blue-300/10 text-white' : 'border-white/20 text-white/60'
                    }`}
                  >
                    {floor.number}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}


