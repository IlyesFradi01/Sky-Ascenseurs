'use client';

import { motion } from 'framer-motion';

const innovations = [
  {
    title: 'Predictive Intelligence Core',
    description: 'Edge-computed diagnostics forecast wear, optimize dispatching, and sync with your BMS.',
    stat: '98%',
    statLabel: 'uptime guarantee',
  },
  {
    title: 'Immersive Cabin Experience',
    description: 'LED kinetic ceilings, adaptive scenting, and haptic call buttons informed by aerospace UX.',
    stat: '4.7s',
    statLabel: 'avg. response time',
  },
  {
    title: 'Carbon-Smart Drive Systems',
    description: 'Regenerative drives return power to the grid and tune regen curves to occupancy trends.',
    stat: '30%',
    statLabel: 'energy recaptured',
  },
];

export default function TechnologyInnovation() {
  return (
    <section id="technology" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl">
          <p className="tracking-[0.4em] uppercase text-sm text-blue-500 mb-4">Floor 3</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">Technology & Innovation</h2>
          <p className="text-xl text-slate-600">
            SKY Ascenseurs blends aerospace-grade hardware with adaptive software services. Every lift learns, adapts,
            and evolves with the building.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {innovations.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="rounded-3xl bg-white shadow-xl border border-blue-100 p-8 flex flex-col gap-6"
            >
              <header className="flex items-center justify-between">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-slate-400">Module {index + 1}</p>
                  <h3 className="text-2xl font-semibold text-slate-900 mt-2">{item.title}</h3>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black text-[#428bca]">{item.stat}</div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">{item.statLabel}</div>
                </div>
              </header>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


