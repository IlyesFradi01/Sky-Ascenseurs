'use client';

import { motion } from 'framer-motion';

const productLines = [
  {
    title: 'Passenger + Mixed-Use Elevators',
    description: 'Architectural finishes and AI-assisted traffic control for high-rise lobbies and premium residences.',
    bullets: ['Custom cabin design studio', 'Destination dispatch ready', 'Energy regeneration module'],
  },
  {
    title: 'Freight & Service Lifts',
    description: 'Heavy-duty cars engineered for logistics cores, hotels, and hospitals with 24/7 diagnostics.',
    bullets: ['4,500 kg payload options', 'Smart sway mitigation', 'Durable honeycomb flooring'],
  },
  {
    title: 'Panoramic + Boutique Capsules',
    description: 'Glass capsules and hybrid scenic elevators that turn vertical transport into an experience.',
    bullets: ['360° laminated glazing', 'Mag-lev inspired lighting', 'Dynamic ride profiling'],
  },
];

export default function ProductsSolutions() {
  return (
    <section id="products" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl">
          <p className="tracking-[0.4em] uppercase text-sm text-blue-300/70 mb-4">Floor 2</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Products & Solutions</h2>
          <p className="text-xl text-slate-200">
            We design vertical mobility ecosystems that blend precision engineering with signature aesthetics. Modular cores, plug-and-play IoT, and maintenance-first thinking from day one.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {productLines.map((line, index) => (
            <motion.article
              key={line.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-white/10 p-8 flex flex-col gap-6 shadow-2xl shadow-black/30"
            >
              <header>
                <div className="text-sm uppercase tracking-[0.3em] text-blue-300/80">Line {index + 1}</div>
                <h3 className="text-2xl font-semibold mt-3">{line.title}</h3>
                <p className="text-slate-300 mt-2">{line.description}</p>
              </header>
              <ul className="space-y-3 text-sm text-slate-200">
                {line.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


