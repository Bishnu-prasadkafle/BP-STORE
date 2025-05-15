import React from "react";

const Topbanner = () => {
  return (
    <div className='bg-[#364350] text-[#de7d5c] py-3 px-6 text-sm md:text-base font-medium'>
      <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2'>
        {/* Left: Location and Contact */}
        <div className='flex items-center gap-2'>
          <span>📍 Kawasoti, Nawalpur</span>
          <span> | </span>
          <span>📞 +977-9812345678</span>
        </div>

        {/* Center: Brand Quote */}
        <div className='text-center font-semibold animate-pulse  '>
          🛍️ BP-Shop: Shop smarter, not harder! – Quality, Style &
          Affordability!!
        </div>

        {/* Right: Offer Tag */}
        <div className='bg-white text-[#de7d5c] px-3 py-1 rounded-full font-bold text-xs md:text-sm shadow-md animate-bounce'>
          🎁 35% OFF – this friday and get special gifts!
        </div>
      </div>
    </div>
  );
};

export default Topbanner;
