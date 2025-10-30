const services = [
  { title: 'Installation', desc: 'Survey, design and turnkey installation of new elevators.' },
  { title: 'Maintenance', desc: 'Preventive and corrective plans, 24/7 on‑call depending on contract.' },
  { title: 'Modernization', desc: 'Cabin refresh, mechanism upgrades and code compliance.' },
  { title: 'Support', desc: 'Technical support, audits and genuine spare parts.' },
];

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{s.title}</h2>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}


