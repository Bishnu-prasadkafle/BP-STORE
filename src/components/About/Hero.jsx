import React from "react";
import promo from "../../assets/promo.png"; // Your About image

const Hero = () => {
  return (
    <section className='relative bg-white py-12 px-4 sm:py-16 sm:px-12 lg:px-20 overflow-hidden min-h-[60vh] flex flex-col items-center justify-center'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <img
          src={promo}
          alt='About Background'
          className='w-full h-full object-cover opacity-30'
        />
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-3xl mx-auto text-center px-2 sm:px-0'>
        <h1 className='text-3xl sm:text-5xl font-extrabold text-black leading-tight mb-4 sm:mb-6'>
          About BP-SHOP
        </h1>
        <p className='text-sm sm:text-base text-gray-900 font-light mb-6 sm:mb-8'>
          We’re more than a brand — we're a mission to bring quality,
          innovation, and community to everything we create. Dive into our
          journey and discover why people shop with us.
        </p>
      </div>
    </section>
  );
};

export default Hero;
