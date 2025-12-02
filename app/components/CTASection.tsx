'use client';

import React from 'react';

const CTASection = () => {
  const handleScroll = (id: string) => {
    if (typeof window !== 'undefined') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-r from-[#428bca]/95 to-[#357abd]/90 text-white flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to take the next step?</h2>
        <p className="text-xl md:text-2xl mb-6">Contact us today or learn more about our elevator solutions for your building.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button
            onClick={() => handleScroll('contact')}
            className="bg-white text-[#428bca] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Us
          </button>
          <button
            onClick={() => handleScroll('about')}
            className="border-2 border-white hover:bg-white hover:text-[#428bca] px-8 py-4 rounded-full text-lg font-semibold transition-all backdrop-blur-sm"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
