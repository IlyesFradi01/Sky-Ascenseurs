'use client';

import { useState } from 'react';

const filters = ['All', 'Residential', 'Commercial', 'Modernization'];

const projects = [
  { id: 1, title: 'Haussmann Residence', type: 'Residential', img: '/window.svg' },
  { id: 2, title: 'Business Center', type: 'Commercial', img: '/globe.svg' },
  { id: 3, title: 'Hotel Upgrade', type: 'Modernization', img: '/file.svg' },
  { id: 4, title: 'Glass Tower', type: 'Commercial', img: '/vercel.svg' },
];

export default function PortfolioPage() {
  const [active, setActive] = useState('All');

  const visible = active === 'All' ? projects : projects.filter((p) => p.type === active);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Projects</h1>

      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 rounded-full border transition ${
              active === f ? 'bg-[#428bca] border-[#428bca] text-white' : 'border-gray-300 text-gray-700 hover:border-[#428bca] hover:text-[#428bca]'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((p) => (
          <div key={p.id} className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <img src={p.img} alt={p.title} className="h-16 w-16 opacity-70" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="text-gray-600">{p.type}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


