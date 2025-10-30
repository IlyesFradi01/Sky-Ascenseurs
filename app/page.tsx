import Hero from './components/Hero';
import Services from './components/Services';
import TestimonialSlider from './components/TestimonialSlider';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* Wave Divider */}
      <div aria-hidden="true" className="overflow-hidden -mb-1">
        <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0h1440v30c-220 40-440-20-720 10S220 70 0 30V0z" fill="#428bca" />
        </svg>
      </div>
      <Services />
      <TestimonialSlider />
      <Contact />
    </main>
  );
}
