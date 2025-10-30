'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('hero')} className="text-2xl font-bold text-gray-900 hover:text-[#428bca] transition-colors">
              SKY <span className="text-[#428bca]">ASCENSEURS</span>
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-gray-700 hover:text-[#428bca] px-3 py-2 text-sm font-medium transition-colors">Accueil</a>
              <a href="/services" className="text-gray-700 hover:text-[#428bca] px-3 py-2 text-sm font-medium transition-colors">Services</a>
              <a href="/portfolio" className="text-gray-700 hover:text-[#428bca] px-3 py-2 text-sm font-medium transition-colors">Projets</a>
              <a href="/downloads" className="text-gray-700 hover:text-[#428bca] px-3 py-2 text-sm font-medium transition-colors">Catalogues</a>
              <a href="/about" className="text-gray-700 hover:text-[#428bca] px-3 py-2 text-sm font-medium transition-colors">À propos</a>
              <a href="/faq" className="text-gray-700 hover:text-[#428bca] px-3 py-2 text-sm font-medium transition-colors">FAQ</a>
              <a href="/contact" className="bg-[#428bca] hover:bg-[#357abd] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">Contact / Devis</a>
            </div>
          </div>

          <div className="md:hidden">
            <button className="text-gray-900 hover:text-[#428bca] p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

