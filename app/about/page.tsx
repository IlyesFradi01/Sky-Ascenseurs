export default function AboutPage() {
  return (
    <main className="bg-[#fff] min-h-screen pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl shadow-lg mt-16">
        <div>
          <span className="text-[#fdbb2c] text-sm font-bold">How It Started</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Dream is
            <br/>Global Learning Transformation
          </h1>
          <p className="text-gray-700 mb-4 text-base md:text-lg">
            SKY Elevators was founded by passionate engineers and innovators. Our mission is to make vertical mobility safer, smarter, and accessible for all. With relentless dedication, we strive to revolutionize building transportation.
          </p>
          {/* Stats Block */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex flex-col p-4 rounded-xl bg-[#f5f7fb] min-w-[110px] shadow-md">
              <span className="text-2xl font-bold text-gray-900">3.5</span>
              <span className="text-xs text-gray-600">Years Experience</span>
            </div>
            <div className="flex flex-col p-4 rounded-xl bg-[#f5f7fb] min-w-[110px] shadow-md">
              <span className="text-2xl font-bold text-gray-900">23</span>
              <span className="text-xs text-gray-600">Project Challenge</span>
            </div>
            <div className="flex flex-col p-4 rounded-xl bg-[#f5f7fb] min-w-[110px] shadow-md">
              <span className="text-2xl font-bold text-gray-900">830+</span>
              <span className="text-xs text-gray-600">Positive Reviews</span>
            </div>
            <div className="flex flex-col p-4 rounded-xl bg-[#f5f7fb] min-w-[110px] shadow-md">
              <span className="text-2xl font-bold text-gray-900">100K</span>
              <span className="text-xs text-gray-600">Trusted Users</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/tt.jpg" alt="Hero" className="rounded-2xl shadow-xl w-full max-w-md object-cover" />
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto mt-16 rounded-3xl bg-white px-4 py-12 shadow-lg">
        <span className="text-[#fdbb2c] text-sm font-bold ">Meet the Team</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Dedicated Team of Experts</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {[
            { name: 'Sarah Johnson', role: 'Project Manager', img: 'https://i.pravatar.cc/160?img=47' },
            { name: 'Ahmed Benali', role: 'Lead Engineer', img: 'https://i.pravatar.cc/160?img=22' },
            { name: 'Emily Chen', role: 'QA Specialist', img: 'https://i.pravatar.cc/160?img=57' },
            { name: 'Hugo Martins', role: 'Field Technician', img: 'https://i.pravatar.cc/160?img=15' },
            { name: 'Mariam Diallo', role: 'Customer Success', img: 'https://i.pravatar.cc/160?img=65' },
            { name: 'Luca Rossi', role: 'Installation Lead', img: 'https://i.pravatar.cc/160?img=31' },
          ].map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center bg-[#e9f1ff] p-5 rounded-2xl shadow-lg"
            >
              <img
                src={member.img}
                alt={`${member.name} – ${member.role}`}
                className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-md mb-3"
                loading="lazy"
              />
              <p className="text-sm font-semibold text-gray-900">{member.name}</p>
              <p className="text-xs text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision/Mission Section */}
      <section className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 gap-8 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <span className="text-[#fdbb2c] text-xs font-semibold">Our Vision</span>
          <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">Empowering Lives Through Technology</h3>
          <p className="text-gray-700">We aim to empower lives through accessible, high-quality vertical solutions. Our vision is a world with safer, smarter mobility for all.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <span className="text-[#fdbb2c] text-xs font-semibold">Our Mission</span>
          <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">Innovation for All, Everywhere</h3>
          <p className="text-gray-700">We commit to leading innovation, safety, and customer focus in everything we do, driving progress in mobility and building technology.</p>
        </div>
      </section>

 <br/>
    </main>
  );
}
