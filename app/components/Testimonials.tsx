"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Smith",
    role: "Property Manager",
    quote:
      "Flawless installation and on-time delivery. Our building has never been more accessible.",
    avatar: "/testimonials/img-1.jpg",
  },
  {
    name: "Sarah Bennett",
    role: "Hotel Director",
    quote:
      "Responsive and professional maintenance. Zero critical downtime for 2 years.",
    avatar: "/testimonials/img-2.jpg",
  },
  {
    name: "Omar Idrissi",
    role: "Architect",
    quote:
      "Attentive team, premium finish and full compliance. A trusted partner.",
    avatar: "/testimonials/img-3.jpg",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    appendDots: (dots: any) => (
      <div style={{ marginTop: 12 }}>
        <ul style={{ margin: 0 }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <span className="block w-8 h-2 rounded-full bg-[#fff] border-2 border-[#bd986b] transition-all" />
    ),
  };

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#bd986b] overflow-x-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <div key={idx}>
              <div className="relative bg-white rounded-xl px-6 py-12 max-w-xl mx-auto shadow-[0_4px_40px_rgba(189,152,107,0.32)] overflow-visible testimonial-card">
                {/* Gold Quote Icon */}
                <div className="flex justify-center -mt-14 mb-6">
                  <svg className="w-14 h-14 text-[#bd986b] opacity-70" fill="currentColor" viewBox="0 0 48 48">
                    <path d="M20,42h-8V30c0-8.8,7.2-16,16-16v8C27.2,24,22,29.2,20,36V42z M44,42h-8V30c0-8.8,7.2-16,16-16v8C51.2,24,46,29.2,44,36 V42z"/>
                  </svg>
                </div>
                {/* Quote */}
                <p className="text-lg mb-8 text-gray-700 font-medium px-2">{t.quote}</p>
                {/* User Info */}
                <div className="flex flex-col items-center mt-8">
                  <div className="w-20 h-20 rounded-full bg-[#daad86] shadow-lg flex items-center justify-center overflow-hidden border-4 border-white -mt-12 mb-3">
                    {t.avatar ? (
                      <img src={t.avatar} alt={t.name} className="object-cover w-full h-full" />
                    ) : (
                      <span className="text-3xl font-bold text-white">{getInitials(t.name)}</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#bd986b] mt-1 mb-0.5">{t.name}</h3>
                  <span className="text-sm text-[#ffd9b8] font-medium">{t.role}</span>
                </div>
                {/* Wavy bottom using ::before (styled in global CSS or below) */}
                <div className="absolute -bottom-8 left-0 w-full h-8" aria-hidden="true">
                  <svg viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M400 0C350 40 50 40 0 0V40H400V0Z" fill="#fff" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}


