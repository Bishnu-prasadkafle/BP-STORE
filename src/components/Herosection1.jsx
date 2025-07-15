import React, { useState, useEffect } from "react";
import { ChevronDown, MapPin, Calendar, Users, Star } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // High-quality mountain adventure images with proper URLs
  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1609224584184-893bc7157d54?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9scGF8ZW58MHx8MHx8fDA%3D",
      title: "Shey phoksundo National Lake",
      subtitle: "Explore the pristine wilderness of Dolpo",
      description:
        "Experience the untouched beauty of Shey Phoksundo National Lake",
      badge: "🏞️ SHEY PHOKSUNDO",
    },
    {
      image:
        "https://images.unsplash.com/photo-1536308998534-ca7106a1d1f1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RXZlcmVzdCUyMEJzZSUyMGNhbXAlMjB0cmVrfGVufDB8fDB8fHww",
      title: "Everest Base Camp Trek",
      subtitle: "Challenge yourself on world-class trekking routes",
      description: "Experience the thrill of Everest Base Camp trekking",
      badge: " EVEREST BASE CAMP",
    },
    {
      image:
        "https://publisher-publish.s3.eu-central-1.amazonaws.com/pb-nepalitimes/swp/asv65r/media/20231220101216_3118f9e6682550f26b2746d82efdc6165ec3528210783ddda3997e2505368559.webp",
      title: "World Second Highest bungy jump",
      subtitle: "Experience the thrill of a lifetime",
      description: "Leap into adventure with our expert guides",
      badge: "🏞️ BUNGEE JUMPING",
    },
    {
      image:
        "https://images.unsplash.com/photo-1635348917097-14b1362caeeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlsaWNobyUyMGxha2V8ZW58MHx8MHx8fDA%3D",
      title: "Highest altitude lake in the world",
      subtitle: "Discover the serene beauty of the world's highest lakes",
      description: "Explore the breathtaking landscapes of Tilicho Lake",
      badge: "🏞️ TILICHO LAKE",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  return (
    <div className='relative h-screen w-full overflow-hidden'>
      {/* Background Slides */}
      <div className='absolute inset-0'>
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}>
            <div
              className='absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105'
              style={{
                backgroundImage: `url(${slide.image})`,
                animation:
                  index === currentSlide ? "slowZoom 5s ease-out" : "none",
              }}
            />
            <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60' />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className='relative z-10 flex flex-col justify-center items-center h-full text-white px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-4xl mx-auto'>
          {/* Badge */}
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6 animate-fadeInUp'>
            {heroSlides[currentSlide].badge}
          </div>

          {/* Main Title */}
          <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fadeInUp animation-delay-200'>
            <span className='block text-white drop-shadow-lg'>
              {heroSlides[currentSlide].title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className='text-xl sm:text-2xl lg:text-3xl font-light mb-4 text-white/90 animate-fadeInUp animation-delay-400'>
            {heroSlides[currentSlide].subtitle}
          </p>

          {/* Description */}
          <p className='text-lg sm:text-xl mb-8 text-white/80 max-w-2xl mx-auto animate-fadeInUp animation-delay-600'>
            {heroSlides[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fadeInUp animation-delay-800'>
            <button className='bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto'>
              Book Your Adventure
            </button>
            <button className='bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto'>
              View All Tours
            </button>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-1000'>
            <div className='text-center'>
              <div className='flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mx-auto mb-2'>
                <MapPin className='w-6 h-6 text-white' />
              </div>
              <div className='text-2xl font-bold text-white'>250+</div>
              <div className='text-sm text-white/80'>Destinations</div>
            </div>
            <div className='text-center'>
              <div className='flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mx-auto mb-2'>
                <Users className='w-6 h-6 text-white' />
              </div>
              <div className='text-2xl font-bold text-white'>50K+</div>
              <div className='text-sm text-white/80'>Happy Travelers</div>
            </div>
            <div className='text-center'>
              <div className='flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mx-auto mb-2'>
                <Calendar className='w-6 h-6 text-white' />
              </div>
              <div className='text-2xl font-bold text-white'>15+</div>
              <div className='text-sm text-white/80'>Years Experience</div>
            </div>
            <div className='text-center'>
              <div className='flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mx-auto mb-2'>
                <Star className='w-6 h-6 text-white' />
              </div>
              <div className='text-2xl font-bold text-white'>4.9/5</div>
              <div className='text-sm text-white/80'>Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div className='flex flex-col items-center text-white/80'>
          <span className='text-sm mb-2'>Scroll to explore</span>
          <ChevronDown className='w-6 h-6' />
        </div>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className='absolute bottom-8 right-8 flex space-x-2'>
        {heroSlides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
          opacity: 0;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        @media (max-width: 640px) {
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
