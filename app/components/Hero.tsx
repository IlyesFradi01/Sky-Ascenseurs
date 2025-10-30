'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image-slider02.jpg"
          alt="Modern glass elevator"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white">Elevate Your</span>
            <br />
            <span className="text-[#428bca]">Experience</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Premium elevator solutions for modern buildings. Innovation meets reliability in every ride.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#428bca] hover:bg-[#357abd] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all backdrop-blur-sm"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
      {/* Animated Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        initial={{ y: 0 }}
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        onClick={() => scrollToSection('services')}
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="drop-shadow-lg">
          <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
}
