import React from "react";
import { useNavigate } from "react-router";
import promoBg from "../assets/banner1.png"; // Adjust the path if needed

const PromoBanner = () => {
  const navigate = useNavigate();
  return (
    <div className='relative h-[400px] md:h-[300px] rounded m-5 '>
      {/* Background Image */}
      <img
        src={promoBg}
        alt='Accessories Background'
        className='absolute inset-0 w-full h-full object-cover'
      />

      {/* Overlay Content */}
      <div className='absolute inset-0 bg-opacity-100 flex items-center justify-end px-8'>
        <div className='text-white max-w-md   '>
          <p className='text-xl uppercase tracking-widest mb-2'>
            Limited Offer
          </p>
          <h2 className='text-3xl font-bold mb-2 text-black'>
            <span className='text-red-600'>35%</span> Off only this Friday
          </h2>
          <p className='mb-4 text-xl'>and get special gift</p>
          <button
            onClick={() => navigate("/products")}
            className='bg-red-600 px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition'>
            Grab It Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
