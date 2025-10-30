export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">About</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        SKY Elevators designs, installs, and maintains vertical mobility solutions for
        residential and commercial buildings. Our mission is to make every ride safe,
        comfortable, and energy‑efficient.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Mission</h2>
          <p className="text-gray-700">Raise safety and accessibility standards with reliable technology.</p>
        </div>
        <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Values</h2>
          <p className="text-gray-700">Excellence, transparency, customer proximity, and compliance with international standards.</p>
        </div>
        <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Team</h2>
          <p className="text-gray-700">Engineers, technicians, and advisors dedicated to delivering successful projects.</p>
        </div>
      </div>
    </main>
  );
}


