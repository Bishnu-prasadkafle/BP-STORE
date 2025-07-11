import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const BagpackCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const bagpackSlides = [
    {
      id: 1,
      title: "BACKPACKS FOR YOUR NEXT ADVENTURE",
      subtitle: "Explore the wilderness with premium gear",
      buttonText: "SHOP NOW",
      bags: [
        {
          src: "https://images.unsplash.com/photo-1600180758890-6e9ce5c94f6e",
          alt: "Orange hiking backpack",
          brand: "OSPREY",
          color: "Sunset Orange"
        },
        {
          src: "https://images.unsplash.com/photo-1559511260-15f6c74c13e7",
          alt: "Navy trekking backpack",
          brand: "DEUTER",
          color: "Deep Navy"
        },
        {
          src: "https://images.unsplash.com/photo-1586854381507-35d5d1ef70d3",
          alt: "Grey adventure backpack",
          brand: "GREGORY",
          color: "Storm Grey"
        },
        {
          src: "https://images.unsplash.com/photo-1600180759102-bc2b5089a2a5",
          alt: "Purple mountain backpack",
          brand: "OSPREY",
          color: "Royal Purple"
        },
        {
          src: "https://images.unsplash.com/photo-1573496788812-9e8cb004072b",
          alt: "Green duffel bag",
          brand: "PATAGONIA",
          color: "Forest Green"
        }
      ]
    },
    {
      id: 2,
      title: "URBAN EXPLORER COLLECTION",
      subtitle: "Perfect for city adventures and daily commutes",
      buttonText: "EXPLORE COLLECTION",
      bags: [
        {
          src: "https://images.unsplash.com/photo-1600180759157-25e8a4073ba0",
          alt: "Urban backpack",
          brand: "PEAK DESIGN",
          color: "Charcoal Black"
        },
        {
          src: "https://images.unsplash.com/photo-1610382765978-9932fbb7ddf6",
          alt: "Tech backpack",
          brand: "BELLROY",
          color: "Midnight Blue"
        },
        {
          src: "https://images.unsplash.com/photo-1594225757010-f7d8dc7e17e7",
          alt: "Minimalist backpack",
          brand: "HERSCHEL",
          color: "Stone Grey"
        },
        {
          src: "https://images.unsplash.com/photo-1612817153934-0dd2ed03fbb8",
          alt: "Leather backpack",
          brand: "TUMI",
          color: "Cognac Brown"
        },
        {
          src: "https://images.unsplash.com/photo-1573496788983-5171a7cbb6e4",
          alt: "Laptop backpack",
          brand: "INCASE",
          color: "Space Grey"
        }
      ]
    }
  ];

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bagpackSlides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, bagpackSlides.length]);

  const currentSlideData = bagpackSlides[currentSlide];

  return (
    <div className="relative w-full h-[550px] md:h-[650px] overflow-hidden">
      {/* Mountain Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1508264165352-258db2ebd59b"
          alt="Mountain Background"
          className="w-full h-full object-cover"
        />
        {/* Reduced overlay opacity for better image visibility */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-8">
        {/* Text Section */}
        <div className="flex-1 max-w-lg space-y-6 text-white drop-shadow-lg mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
            {currentSlideData.title}
          </h1>
          <p className="text-lg md:text-xl font-medium">{currentSlideData.subtitle}</p>
          <button className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg rounded-md">
            {currentSlideData.buttonText}
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Bag Images - Enhanced visibility */}
        <div className="flex-1 flex items-center justify-center lg:justify-end relative z-20">
          <div className="flex items-end justify-center space-x-2 md:space-x-4 lg:space-x-6 relative">
            {currentSlideData.bags.map((bag, index) => (
              <div
                key={index}
                className="relative transform transition-all duration-700 hover:scale-110 hover:z-30"
                style={{ 
                  transform: `translateY(${index % 2 === 0 ? '0px' : '-20px'})` 
                }}
              >
                {/* Enhanced image container with better shadows and borders */}
                <div className="relative group">
                  <img
                    src={`${bag.src}?w=400&h=500&fit=crop&auto=format`}
                    alt={bag.alt}
                    className="w-20 h-28 sm:w-24 sm:h-32 md:w-32 md:h-40 lg:w-36 lg:h-44 xl:w-40 xl:h-48 object-cover rounded-lg shadow-2xl border-4 border-white/90 bg-white transition-all duration-300 group-hover:border-white"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback image if original fails to load
                      e.target.src = `https://via.placeholder.com/400x500/cccccc/666666?text=${bag.brand}`;
                    }}
                  />
                  
                  {/* Improved label with better contrast */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full">
                    <div className="text-center text-xs sm:text-sm text-white bg-black/80 backdrop-blur-sm rounded-md px-2 py-1 border border-white/20 shadow-lg">
                      <div className="font-semibold">{bag.brand}</div>
                      <div className="text-white/90">{bag.color}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {bagpackSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlay(false);
              setTimeout(() => setIsAutoPlay(true), 8000);
            }}
            className={`h-3 rounded-full transition-all duration-300 border border-white/40 ${
              index === currentSlide
                ? 'bg-white w-8 shadow-lg'
                : 'bg-white/60 hover:bg-white/80 w-3'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BagpackCarousel;