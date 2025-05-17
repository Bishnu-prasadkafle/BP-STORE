import React from "react";

const AboutUs = () => {
  return (
    <div
      className='relative bg-cover bg-center bg-no-repeat  flex items-center justify-center text-white'
      style={{
        backgroundImage: `url('')`,
      }}>
      {/* Overlay for dark effect */}
      <div className='absolute inset-0 bg-black bg-opacity-60 z-0'></div>

      {/* About Us Content */}
      <div className='relative z-10 p-8 max-w-3xl text-center'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6'>About Us</h1>
        <p className='text-lg md:text-xl leading-relaxed'>
          Welcome to our platform! We are dedicated to providing the best
          service and user experience. Our mission is to empower users through
          innovative technology and reliable support. Thank you for being a part
          of our journey.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
