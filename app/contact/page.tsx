'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent. Thank you!');
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900">Contact</h1>

      <div className="grid lg:grid-cols-2 gap-12">
        <form onSubmit={submit} className="space-y-6 p-8 rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Full name</label>
            <input className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-[#428bca] focus:outline-none" required
              value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-[#428bca] focus:outline-none" required
                value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Phone</label>
              <input className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-[#428bca] focus:outline-none"
                value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
            <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-[#428bca] focus:outline-none" required
              value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
          </div>
          <button className="w-full bg-[#428bca] hover:bg-[#357abd] text-white px-8 py-4 rounded-full font-semibold">Send</button>
        </form>

        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=10.60%2C35.81%2C10.67%2C35.84&layer=mapnik&marker=35.8256%2C10.6360"
              className="w-full h-[380px]"
              loading="lazy"
            />
          </div>
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-700">
              Address: Sidi Abdelahmid - Sousse, 4061 Sousse, Tunisia
              <br />Email: contact@sky-ascenseurs.com
              <br />Phone: +216 97 233 337
              <br />Hours: Mon–Sat 8:00–18:00, Sunday closed
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}


