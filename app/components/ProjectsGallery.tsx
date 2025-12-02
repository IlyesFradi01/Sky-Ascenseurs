'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryItems = [
  { src: '/template.webp', label: 'Skyline Atrium', location: 'Casablanca, MA' },
  { src: '/tt.jpg', label: 'Azure Tower', location: 'Rabat, MA' },
  { src: '/image-slider02.jpg', label: 'Harbor Hub', location: 'Tanger, MA' },
];

export default function ProjectsGallery() {
  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl">
          <p className="tracking-[0.4em] uppercase text-sm text-blue-200 mb-4">Floor 4</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Projects Gallery</h2>
          <p className="text-xl text-slate-200">
            Signature installations that redefine lobbies, rooftops, and service cores. Each ride is calibrated for the building&apos;s unique rhythm.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.figure
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
            >
              <Image
                src={item.src}
                alt={item.label}
                width={500}
                height={600}
                className="h-96 w-full object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                priority={index === 0}
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent p-6 flex flex-col justify-end">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-200/80">🛗 Project</p>
                <h3 className="text-2xl font-semibold mt-2">{item.label}</h3>
                <p className="text-slate-200">{item.location}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}


