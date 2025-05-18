import React from "react";
import promo from "../../assets/promo.png"; // Replace with a suitable About image
import { ArrowRight } from "lucide-react";

const AboutHero = () => {
  return (
    <section className='relative bg-white py-16 px-6 sm:px-12 lg:px-20 overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <img
          src={promo}
          alt='About Background'
          className='w-full h-full object-cover opacity-30'
        />
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-4xl mx-auto text-center'>
        <h1 className='text-4xl sm:text-5xl font-extrabold text-black leading-tight mb-6'>
          About BP-SHOP
        </h1>
        <p className='text-base sm:text-lg text-gray-900 font-light mb-8'>
          We’re more than a brand — we're a mission to bring quality,
          innovation, and community to everything we create. Dive into our
          journey and discover why people shop with us.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
