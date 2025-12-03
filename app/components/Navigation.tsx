'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type LanguageOption = {
  code: string;
  label: string;
  countryCode: string;
};

const languages: LanguageOption[] = [
  { code: 'en', label: 'English', countryCode: 'gb' },
  { code: 'fr', label: 'Français', countryCode: 'fr' },
  { code: 'ar', label: 'العربية', countryCode: 'sa' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Projects' },
  { href: '/downloads', label: 'Catalogs' },
  { href: '/contact', label: 'Contact' },
];

const FALLBACK_FLAG_URL = (countryCode: string) => `https://flagcdn.com/w40/${countryCode}.png`;
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState(languages[0].code);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [flagUrls, setFlagUrls] = useState<Record<string, string>>({});
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleHumEvent = (event: Event) => {
      const detail = (event as CustomEvent<{ enabled: boolean }>).detail;
      if (typeof detail?.enabled === 'boolean') {
        setSoundEnabled(detail.enabled);
      }
    };

    window.addEventListener('toggle-hum', handleHumEvent as EventListener);
    return () => window.removeEventListener('toggle-hum', handleHumEvent as EventListener);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const fetchFlags = async () => {
      const entries = await Promise.all(
        languages.map(async (option) => {
          try {
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${option.countryCode}`);
            if (!response.ok) throw new Error('Failed to load flag');
            const data = await response.json();
            const flag = data?.[0]?.flags?.svg ?? data?.[0]?.flags?.png;
            if (flag) {
              return [option.code, flag] as const;
            }
          } catch (error) {
            console.warn(`Unable to fetch flag for ${option.label}`, error);
          }
          return [option.code, FALLBACK_FLAG_URL(option.countryCode)] as const;
        }),
      );

      if (!cancelled) {
        setFlagUrls(Object.fromEntries(entries));
      }
    };

    fetchFlags();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const previousOverflow = document.body.style.overflow;
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = previousOverflow || '';
    }
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  const handleSoundToggle = () => {
    const nextValue = !soundEnabled;
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('toggle-hum', { detail: { enabled: nextValue } }));
    }
  };

  const selectedLanguage = languages.find((lang) => lang.code === language) ?? languages[0];

  const getFlagSrc = (code: string) => {
    const lang = languages.find((item) => item.code === code);
    if (!lang) return undefined;
    return flagUrls[code] ?? FALLBACK_FLAG_URL(lang.countryCode);
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
          
          <div className="hidden md:flex flex-1 items-center justify-end">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-900 hover:text-[#428bca] px-3 py-2 text-sm font-medium transition-colors">
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                className="bg-[#428bca] hover:bg-[#357abd] text-white px-8 py-3 rounded-full text-sm font-medium transition-colors shadow-sm"
              >
                Quote
              </a>
              <div className="flex items-center gap-3 ml-8">
                <div className="relative" ref={languageMenuRef}>
                  <button
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded={languageMenuOpen}
                    onClick={() => setLanguageMenuOpen((prev) => !prev)}
                    className="flex items-center gap-2 bg-white/80 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:border-[#428bca] focus:outline-none focus:ring-2 focus:ring-[#428bca]/40"
                  >
                    {selectedLanguage && (
                      <div className="relative h-5 w-7 overflow-hidden rounded-sm bg-gray-100">
                        <Image
                          src={getFlagSrc(selectedLanguage.code) ?? FALLBACK_FLAG_URL(selectedLanguage.countryCode)}
                          alt={`${selectedLanguage.label} flag`}
                          fill
                          sizes="28px"
                        />
                      </div>
                    )}
                    <span>{selectedLanguage?.label ?? 'Language'}</span>
                    <svg
                      className={`h-4 w-4 transition-transform ${languageMenuOpen ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {languageMenuOpen && (
                    <div
                      className="absolute right-0 z-50 mt-2 w-48 rounded-xl border border-gray-100 bg-white p-2 shadow-xl"
                      role="listbox"
                      aria-activedescendant={language}
                    >
                      {languages.map((option) => (
                        <button
                          key={option.code}
                          type="button"
                          role="option"
                          aria-selected={language === option.code}
                          onClick={() => {
                            setLanguage(option.code);
                            setLanguageMenuOpen(false);
                          }}
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition hover:bg-gray-50 ${
                            language === option.code ? 'bg-gray-50 text-[#428bca]' : 'text-gray-800'
                          }`}
                        >
                          <div className="relative h-4 w-6 overflow-hidden rounded-sm bg-gray-100">
                            <Image
                              src={getFlagSrc(option.code) ?? FALLBACK_FLAG_URL(option.countryCode)}
                              alt={`${option.label} flag`}
                              fill
                              sizes="24px"
                            />
                          </div>
                          <span>{option.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleSoundToggle}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition bg-transparent ${
                    soundEnabled
                      ? 'border-emerald-400 text-emerald-700'
                      : 'border-gray-200 text-gray-700 hover:border-[#428bca] hover:text-[#428bca]'
                  }`}
                >
                  <span className="text-lg">{soundEnabled ? '🔊' : '🔇'}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-900 hover:text-[#428bca] p-2 transition"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 z-40 border-t border-gray-100 bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-4 py-6 space-y-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full px-4 py-3 text-base font-semibold text-center text-white bg-[#428bca] hover:bg-[#357abd] transition"
              >
                Get a Quote
              </a>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="language-select" className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Language
                </label>
                <div className="mt-2 relative">
                  <select
                    id="language-select"
                    value={language}
                    onChange={(event) => setLanguage(event.target.value)}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#428bca]/40"
                  >
                    {languages.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                type="button"
                onClick={handleSoundToggle}
                className={`w-full flex items-center justify-between rounded-2xl px-4 py-3 border text-sm font-medium transition ${
                  soundEnabled ? 'border-emerald-400 text-emerald-700' : 'border-gray-200 text-gray-700'
                }`}
              >
                <span>Travel sound</span>
                <span className="text-lg">{soundEnabled ? '🔊' : '🔇'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

