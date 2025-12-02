import React from 'react';
import Marquee from 'react-fast-marquee';

const items = [
  <img src="https://www.shutterstock.com/image-vector/elevator-modern-minimal-corporate-logo-260nw-2017558352.jpg" alt="Partner 1" style={{ height: 140, width: 'auto', margin: '0 36px', borderRadius: 12 }} />, 
  <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/17979025-modele-de-logo-d-entreprise-de-construction-d-ascenseur-couleur-plate-gratuit-vectoriel.jpg" alt="Partner 2" style={{ height: 140, width: 'auto', margin: '0 36px', borderRadius: 12 }} />, 
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvjmchjV-9ISFvtKaD6S_SrIr5W2vEO3l3A&s" alt="Partner 3" style={{ height: 140, width: 'auto', margin: '0 36px', borderRadius: 12 }} />,
  <img src="https://cdn4.vectorstock.com/i/1000x1000/66/88/lift-and-elevator-logo-design-minimal-logotype-vector-48196688.jpg" alt="Partner 4" style={{ height: 140, width: 'auto', margin: '0 36px', borderRadius: 12 }} />,
  <img src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/abstract-elevator-logo-template-gv6e7db53478ae.webp" alt="Partner 5" style={{ height: 140, width: 'auto', margin: '0 36px', borderRadius: 12 }} />,
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6tWIa618ASA9jyWA81VGMabzlnc3ZwbZqPQ&s" alt="Partner 6" style={{ height: 140, width: 'auto', margin: '0 36px', borderRadius: 12 }} />,
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1wyFm16BR9zKeIiazICaw-65jsPIjzpqcQ&s" alt="Partner 7" style={{ height: 140, width: 'auto', margin: '0 36px', borderRadius: 12 }} />,
  <img src="https://cdn4.vectorstock.com/i/1000x1000/66/88/lift-and-elevator-logo-design-minimal-logotype-vector-48196688.jpg" alt="Partner 4" style={{ height: 140, width: 'auto', margin: '0 36px', borderRadius: 12 }} />,

];

const Partenaire = () => {
  return (
    <section className="w-full bg-[#f5f7fa] py-20">
      <div className="max-w-full mx-auto px-9 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#428bca]">Our Partners</h2>
        <Marquee pauseOnHover speed={50} gradient={false} className="py-4">
          {items.map((logo, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center">{logo}</div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Partenaire;
