export default function About() {
  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '25+', label: 'Years Experience' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Elevating Standards for <span className="text-[#428bca]">Craftsmanship</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With over 25 years of experience, SKY Ascenseurs has been at the forefront of the elevator industry. We combine cutting-edge technology with unmatched craftsmanship to deliver solutions that exceed expectations.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our commitment to quality, safety, and innovation has made us a trusted partner for residential and commercial projects across the country.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#428bca] rounded-full"></div>
                <span className="text-gray-700">Fully certified and compliant with all safety regulations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#428bca] rounded-full"></div>
                <span className="text-gray-700">Expert team of engineers and technicians</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#428bca] rounded-full"></div>
                <span className="text-gray-700">Sustainable and energy-efficient solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#428bca] rounded-full"></div>
                <span className="text-gray-700">Comprehensive warranty and support</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl border border-gray-200 bg-white shadow-md">
                <div className="text-5xl md:text-6xl font-bold text-[#428bca] mb-2">{stat.value}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

