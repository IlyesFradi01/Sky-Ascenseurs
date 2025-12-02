import Hero from './components/Hero';
import Services from './components/Services';
import TestimonialSlider from './components/TestimonialSlider';
import Contact from './components/Contact';
import CTASection from './components/CTASection';
import Partenaire from './components/Partenaire';
import About from './components/About';
import ProductsSolutions from './components/ProductsSolutions';
import TechnologyInnovation from './components/TechnologyInnovation';
import ProjectsGallery from './components/ProjectsGallery';
import ElevatorPanel from './components/ElevatorPanel';
import FloorBeaconRail from './components/FloorBeaconRail';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <FloorBeaconRail />
      <ElevatorPanel />
      <Hero />
      {/* Wave Divider */}
      <div aria-hidden="true" className="overflow-hidden -mb-1">
        <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0h1440v30c-220 40-440-20-720 10S220 70 0 30V0z" fill="#428bca" />
        </svg>
      </div>
      <About />
      <ProductsSolutions />
      <TechnologyInnovation />
      <ProjectsGallery />
      <Services />
      <TestimonialSlider />
      <Partenaire />
      <Contact />
      <CTASection />
    </main>
  );
}
