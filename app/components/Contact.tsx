'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Let's Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ready to elevate your building? Contact us for a free consultation</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:border-[#428bca] focus:outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:border-[#428bca] focus:outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:border-[#428bca] focus:outline-none transition-colors" placeholder="+1 (555) 123-4567" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:border-[#428bca] focus:outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-[#428bca] hover:bg-[#357abd] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">Send Message</button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-md">
              <div className="flex items-center gap-4"><div className="text-3xl">📞</div><div><h3 className="text-xl font-semibold text-gray-900">Phone</h3><p className="text-gray-600">+1 (555) 123-4567</p></div></div>
            </div>
            <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-md">
              <div className="flex items-center gap-4"><div className="text-3xl">✉️</div><div><h3 className="text-xl font-semibold text-gray-900">Email</h3><p className="text-gray-600">info@skyascenseurs.com</p></div></div>
            </div>
            <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-md">
              <div className="flex items-center gap-4"><div className="text-3xl">📍</div><div><h3 className="text-xl font-semibold text-gray-900">Address</h3><p className="text-gray-600">123 Elevator Street<br />Sky City, SC 12345</p></div></div>
            </div>
            <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-md">
              <div className="flex items-center gap-4"><div className="text-3xl">🕐</div><div><h3 className="text-xl font-semibold text-gray-900">Business Hours</h3><p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p></div></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

