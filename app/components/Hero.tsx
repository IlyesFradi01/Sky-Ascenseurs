'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FLOOR_CONFIG } from './floorConfig';

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

const MIN_DING_INTERVAL_MS = 450;

export default function Hero() {
  const [heroSrc, setHeroSrc] = useState<string>('/image-slider02.jpg');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [currentFloor, setCurrentFloor] = useState('hero');
  const audioCtxRef = useRef<AudioContext | null>(null);
  const soundEnabledRef = useRef(false);
  const lastAnnouncedFloorRef = useRef<string | null>(null);
  const lastSoundTimeRef = useRef(0);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const ensureAudioContext = useCallback(async () => {
    if (typeof window === 'undefined') return null;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      await audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  const playDing = useCallback(async () => {
    const ctx = await ensureAudioContext();
    if (!ctx) return;

    const playChime = (frequency: number, startTime: number, duration = 0.9) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, startTime);

      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.35, startTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(gain).connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + duration);
    };

    const now = ctx.currentTime;
    playChime(987.77, now); // Single elevator ding
  }, [ensureAudioContext]);


  useEffect(() => {
    soundEnabledRef.current = soundEnabled;
  }, [soundEnabled]);

  useEffect(() => {
    const handleHumToggle = (event: Event) => {
      const detail = (event as CustomEvent<{ enabled: boolean }>).detail;
      if (typeof detail?.enabled !== 'boolean') return;
      if (soundEnabledRef.current === detail.enabled) return;
      setSoundEnabled(detail.enabled);
    };

    window.addEventListener('toggle-hum', handleHumToggle as EventListener);
    return () => window.removeEventListener('toggle-hum', handleHumToggle as EventListener);
  }, []);

  useEffect(() => {
    const handleFloorEvent = (event: Event) => {
      const detail = (event as CustomEvent<{ floor: string }>).detail;
      const floor = detail?.floor;
      if (!floor) return;

      setCurrentFloor(floor);

      if (lastAnnouncedFloorRef.current === floor) return;
      lastAnnouncedFloorRef.current = floor;

      if (!soundEnabledRef.current) return;

      const now = performance.now();
      if (now - lastSoundTimeRef.current < MIN_DING_INTERVAL_MS) return;
      lastSoundTimeRef.current = now;

      playDing();
    };

    window.addEventListener('elevator-floor-change', handleFloorEvent as EventListener);
    return () => window.removeEventListener('elevator-floor-change', handleFloorEvent as EventListener);
  }, [playDing]);

  const indicatorFloors = FLOOR_CONFIG;
  const nextFloor = indicatorFloors[1];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white py-20 sm:py-28">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroSrc}
          alt="Modern lobby for SKY Ascenseurs"
          fill
          priority
          className="object-cover"
          quality={90}
          onError={() => setHeroSrc('/image-slider02.jpg')}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/90" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] items-center">
          <div className="space-y-8 text-center lg:text-right lg:max-w-3xl mx-auto lg:mx-0">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-300">Next stop · Comfort</p>
            <div className="lg:ml-auto space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                Sky Ascenseurs
              </h1>
              <h2 className="text-lg sm:text-2xl md:text-3xl text-white/80 font-semibold">
                We prioritize your comfort above anything else
              </h2>
              <p className="text-base sm:text-lg text-white/70 max-w-2xl lg:ml-auto">
                Tailored elevator journeys for residences, commercial landmarks, and premium hospitality spaces—engineered to move
                smoothly across every floor of your day.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:justify-end">
              <button
                onClick={() => scrollToSection('about')}
                className="bg-[#428bca] hover:bg-[#357abd] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:translate-y-[-2px] shadow-xl shadow-[#428bca]/40"
              >
                Take the Ride
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="border border-white/30 hover:border-white hover:bg-white/10 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all backdrop-blur"
              >
                Explore Floors
              </button>
            </div>

         
          </div>

          
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        initial={{ y: 0 }}
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to Floor 1"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="drop-shadow-lg">
          <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}

