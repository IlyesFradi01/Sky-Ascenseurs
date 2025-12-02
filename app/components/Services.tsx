"use client";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      img: "https://www.sky-ascenseurs.com/upload-bloc_service/medium/icone1.png",
      title: "Installation",
      
    },
    {
      img: "https://www.sky-ascenseurs.com/upload-bloc_service/medium/icone2.png",
      title: "Maintenance",
     
    },
    {
      img: "https://www.sky-ascenseurs.com/upload-bloc_service/medium/icone3.png",
      title: "Renovation",
    
    },
    {
      img: "https://www.sky-ascenseurs.com/upload-bloc_service/medium/icone4.png",
      title: "Assistance",
     
    },
  ];

  return (
    <section id="services-support" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="tracking-[0.4em] uppercase text-sm text-gray-400 mb-4">Floor 5</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Services & Support</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive elevator solutions, maintenance, and concierge-level assistance for every phase of your project.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.18 }}
              className="flex flex-col items-center justify-center text-center w-56 h-56 md:w-60 md:h-60 rounded-full bg-[#428bca] shadow-lg p-6 mb-4"
            >
              <img src={service.img} alt={service.title} className="w-20 h-20 object-contain mb-4 drop-shadow" />
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">{service.title}</h3>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

