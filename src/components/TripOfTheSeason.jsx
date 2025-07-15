import React from "react";
import { MapPin, Mountain, Calendar, ArrowRight } from "lucide-react";

const TripOfTheSeason = () => {
  return (
    <div className='relative bg-gradient-to-br from-emerald-50 to-green-50 py-16'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <img
          src='https://images.unsplash.com/photo-1560428798-735f16905de6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG11c3RhbmclMjBuZXBhbHxlbnwwfHwwfHx8MA%3D%3D'
          alt='Mustang Nepal'
          className='w-full h-full object-cover opacity-40'
        />
      </div>

      {/* Overlay Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-12'>
        <div className='bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-emerald-200 flex flex-col lg:flex-row items-center justify-between gap-10'>
          {/* Text Content */}
          <div className='max-w-2xl'>
            <span className='text-sm uppercase font-semibold text-emerald-600 tracking-widest'>
              Trip of the Season
            </span>
            <h2 className='text-4xl lg:text-5xl font-bold text-emerald-900 mt-2 mb-4'>
              Explore the Hidden Kingdom of Mustang
            </h2>
            <p className='text-lg text-emerald-800 mb-6'>
              Journey through the ancient land of Lo Manthang. Discover Tibetan
              culture, dramatic desert landscapes, and sacred caves – a surreal
              experience in Nepal's rain-shadow region.
            </p>

            <div className='flex items-center gap-6 mb-6 text-emerald-700 font-medium'>
              <div className='flex items-center gap-2'>
                <MapPin className='w-5 h-5 text-emerald-600' />
                <span>Mustang, Nepal</span>
              </div>
              <div className='flex items-center gap-2'>
                <Mountain className='w-5 h-5 text-emerald-600' />
                <span>Altitude: 3,810m</span>
              </div>
            </div>

            <button className='inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold px-6 py-3 rounded-full hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-md'>
              <Calendar className='w-5 h-5' />
              <span>Explore More</span>
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </button>
          </div>

          {/* Highlight Card or Poster */}
          <div className='w-full lg:w-[400px]'>
            <img
              src='https://images.unsplash.com/photo-1592731056711-b3101e30584b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzdGFuZyUyMG5lcGFsfGVufDB8fDB8fHww'
              alt='Mustang Trip Poster'
              className='rounded-2xl shadow-lg object-cover w-full h-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripOfTheSeason;
