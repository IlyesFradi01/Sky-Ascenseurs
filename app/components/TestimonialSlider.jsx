"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const testimonials = [
  {
    id: 1,
    name: "Williamson",
    role: "Web Developer",
    img: "https://www.hubspot.com/hubfs/Testimonial-lead-gen-1.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.",
  },
  {
    id: 2,
    name: "Kristina",
    role: "Web Designer",
    img: "https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.",
  },
  {
    id: 3,
    name: "Steve Thomas",
    role: "Web Developer",
    img: "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.",
  },
  {
    id: 4,
    name: "Miranda Joy",
    role: "Web Designer",
    img: "https://images.ctfassets.net/vztl6s0hp3ro/4nq58wgJiVZ46Q8aTKNwaD/b42784c0664f0322c08a108cd2a4ee69/7_types_of_employee_testimonials_to_attract_the_best_candidates.webp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    { breakpoint: 1000, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
  appendDots: dots => (
    <div style={{ marginTop: 12 }}>
      <ul className="!flex !justify-center !gap-2">{dots}</ul>
    </div>
  ),
  customPaging: () => (
    <span className="block w-8 h-2 rounded-full bg-white border-2 border-[#428bca] transition-all" />
  ),
};

export default function TestimonialSlider() {
  return (
    <div className="bg-[#428bca] py-12">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={t.id}>
              <div className="testimonial relative bg-white text-center px-8 pb-20 pt-12 mb-24 mx-2 rounded-xl shadow-lg" style={{ margin: '0 15px 80px', minHeight: 440, boxShadow: "0 4px 32px rgba(66,139,202,0.2)" }}>
                {/* ::before and ::after triangles */}
                <div className="absolute left-0 bottom-[-40px]" style={{width:0, height:0, borderTop: '50px solid #fff', borderRight: '250px solid transparent'}} />
                <div className="absolute right-0 bottom-[-40px]" style={{width:0, height:0, borderTop: '50px solid #fff', borderLeft: '250px solid transparent'}} />
                {/* Blue Quote Icon */}
                <span className="text-[80px] text-[#428bca] opacity-70 block mb-4">
                  <i className="fa fa-quote-left"></i>
                </span>
                <p className="text-gray-600 text-left text-[15px] mb-6 opacity-80 description">{t.text}</p>
                {/* Avatar and TRIANGLE-NAME/ROLE (styled like Owl demo) */}
                <div className="absolute left-0 right-0 bottom-[-138px] flex flex-col items-center testimonial-content">
                  <div className="w-24 h-24 rounded-full border-2 border-white shadow-[0_0_2px_2px_#428bca] overflow-hidden mb-20 relative z-10">
                    <img src={t.img} alt={t.name} className="object-cover w-full h-full" />
                  </div>
                  {/* Triangle and text */}
                  <div className="w-32 h-0 relative z-20">
                    <div className="mx-auto flex flex-col items-center justify-center" style={{
                      width: 0,
                      height: 0,
                      borderLeft: '64px solid transparent',
                      borderRight: '64px solid transparent',
                      borderTop: '38px solid #428bca',
                    }}>
                      <div className="absolute left-1/2 top-3 -translate-x-1/2 flex flex-col items-center w-28">
                        <span className="text-white font-bold text-[15px] whitespace-nowrap leading-tight">{t.name}</span>
                        <span className="text-white text-[13px] whitespace-nowrap font-medium leading-tight">{t.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
