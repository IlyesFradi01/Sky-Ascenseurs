export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 border-t border-gray-200 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Mission */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-[#428bca]">SKY Ascenseurs</h2>
          <p className="text-base">Premium elevator solutions for modern buildings. Innovation meets reliability in every ride.</p>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold mb-3">Pages</h3>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            <li><a href="/" className="hover:text-[#428bca] transition">Accueil</a></li>
            <li><a href="/services" className="hover:text-[#428bca] transition">Services</a></li>
            <li><a href="/portfolio" className="hover:text-[#428bca] transition">Projets</a></li>
            <li><a href="/downloads" className="hover:text-[#428bca] transition">Catalogues</a></li>
            <li><a href="/about" className="hover:text-[#428bca] transition">À propos</a></li>
            <li><a href="/faq" className="hover:text-[#428bca] transition">FAQ</a></li>
            <li><a href="/contact" className="hover:text-[#428bca] transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources & Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:info@skyascenseurs.com" className="hover:text-[#428bca]">info@skyascenseurs.com</a></li>
            <li>Phone: <a href="tel:+15551234567" className="hover:text-[#428bca]">+1 (555) 123-4567</a></li>
            <li>Address: 123 Elevator Street, Sky City, SC 12345</li>
          </ul>
        </div>
        
      </div>
      <div className="bg-gray-100 text-gray-800 border-t border-gray-200 mt-1 pt-7 pb-7">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 max-w-7xl mx-auto">
          <div>
            © {new Date().getFullYear()} SKY Ascenseurs. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-[#428bca]">Privacy Policy</a>
            <a href="#" className="hover:text-[#428bca]">Cookie Policy</a>
            <a href="#" className="hover:text-[#428bca]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


