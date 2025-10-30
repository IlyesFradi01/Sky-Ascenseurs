export default function FAQPage() {
  const items = [
    {
      q: 'What services do you provide?',
      a: 'Installation, maintenance, modernization and assistance for residential and commercial elevators.',
    },
    {
      q: 'Do you handle emergencies?',
      a: 'Yes, an on‑call team is available 24/7 for troubleshooting depending on your contract.',
    },
    {
      q: 'Do you offer maintenance contracts?',
      a: 'Multiple plans (preventive, corrective, full) tailored to your needs and budget.',
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900">FAQ</h1>
      <div className="space-y-4">
        {items.map((it, i) => (
          <details key={i} className="group border border-gray-200 rounded-xl p-6 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-gray-900">
              {it.q}
              <span className="ml-4 text-[#428bca] group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">{it.a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}


