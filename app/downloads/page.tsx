const files = [
  { name: 'General Catalogue 2025 (PDF)', href: '/brochures/catalogue-2025.pdf', size: '8.2 MB' },
  { name: 'Residential Brochure (PDF)', href: '/brochures/residential.pdf', size: '3.4 MB' },
  { name: 'Commercial Brochure (PDF)', href: '/brochures/commercial.pdf', size: '4.1 MB' },
];

export default function DownloadsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900">Downloads</h1>
      <ul className="space-y-4">
        {files.map((f) => (
          <li key={f.href} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-5 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{f.name}</p>
              <p className="text-gray-600 text-sm">{f.size}</p>
            </div>
            <a
              href={f.href}
              className="w-full sm:w-auto text-center px-5 py-2 rounded-full bg-[#428bca] hover:bg-[#357abd] text-white transition"
            >
              Download
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-gray-600 text-sm">Place your PDFs in <code className="font-mono">public/brochures</code>.</p>
    </main>
  );
}


