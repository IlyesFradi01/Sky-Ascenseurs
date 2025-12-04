'use client';

import { useEffect, useState } from 'react';
import { FLOOR_CONFIG } from './floorConfig';

export default function FloorBeaconRail() {
  const [activeFloor, setActiveFloor] = useState<string>('hero');

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ floor: string }>).detail;
      if (detail?.floor) {
        setActiveFloor(detail.floor);
      }
    };

    window.addEventListener('elevator-floor-change', handler as EventListener);
    return () => window.removeEventListener('elevator-floor-change', handler as EventListener);
  }, []);

  const scrollToFloor = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <aside className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-4 text-white mix-blend-difference pointer-events-none">
      <span className="uppercase tracking-[0.5em] text-xs opacity-70">Floors</span>
      <div className="flex flex-col gap-3">
        {FLOOR_CONFIG.map((floor) => {
          const isActive = floor.id === activeFloor;
          return (
            <button
              key={floor.id}
              onClick={() => scrollToFloor(floor.id)}
              className="flex items-center gap-2 text-left"
              aria-current={isActive}
              aria-label={`Go to floor ${floor.number} ${floor.label}`}
              style={{ pointerEvents: 'auto' }}
            >
              <span
                className={`h-px w-3 transition-all duration-300 ${isActive ? 'bg-cyan-200 scale-x-125' : 'bg-white/40'}`}
                aria-hidden
              ></span>
              <span
                className={`text-lg font-semibold tracking-[0.2em] transition ${
                  isActive ? 'text-white' : 'text-white/60'
                }`}
              >
                {floor.number}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}


