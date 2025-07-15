import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, MapPin } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Lucero",
      location: "USA",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b9f3c8e1?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      rating: 5,
      text: "I work for the Katie Adamson Conservation Fund in Denver, Colorado, as the Technology and Marketing Administrator. Our endangered animal conservation organization has been going to Nepal every year since 2010, and we just returned in November 2016. Raj of Travel Nepal Now is in charge of all aspects of our trip to Nepal, including flights and accommodations. I don't even know where to begin to describe how effective this...",
      trip: "Everest Base Camp Trek",
      date: "November 2016",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      location: "Australia",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      rating: 5,
      text: "The Annapurna Circuit trek was absolutely phenomenal! The guides were incredibly knowledgeable and the accommodations exceeded our expectations. Every detail was perfectly planned, from the mountain views to the cultural experiences in local villages. This trip changed my perspective on adventure travel completely.",
      trip: "Annapurna Circuit Trek",
      date: "March 2023",
    },
    {
      id: 3,
      name: "Michael Chen",
      location: "Canada",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      rating: 5,
      text: "Travel Nepal Now provided the most authentic cultural experience in the Mustang region. The hidden monasteries, ancient caves, and interaction with local Tibetan communities was incredible. The logistics were flawless and the team went above and beyond to ensure our comfort and safety throughout the journey.",
      trip: "Upper Mustang Trek",
      date: "October 2023",
    },
    {
      id: 4,
      name: "Emma Thompson",
      location: "United Kingdom",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      rating: 5,
      text: "From the moment we landed in Kathmandu to our departure, everything was seamless. The Langtang Valley trek offered breathtaking scenery and the cultural immersion was unparalleled. The team's attention to detail and genuine care for our experience made this the trip of a lifetime.",
      trip: "Langtang Valley Trek",
      date: "September 2023",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className='relative bg-gradient-to-br from-emerald-50 to-green-50 py-12'>
      {/* Background Pattern */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-emerald-900/5 bg-[radial-gradient(circle_at_1px_1px,_rgba(16,185,129,0.15)_1px,_transparent_0)] bg-[length:20px_20px]'></div>
      </div>

      <div className='relative z-10 max-w-6xl mx-auto px-6 lg:px-12'>
        {/* Header */}
        <div className='text-center mb-8'>
          <span className='text-sm uppercase font-semibold text-emerald-600 tracking-widest'>
            What Our Travellers Say
          </span>
          <h2 className='text-3xl lg:text-4xl font-bold text-emerald-900 mt-2 mb-3'>
            Testimonials
          </h2>
        </div>

        {/* Stats */}
        <div className='flex justify-center gap-12 mb-8'>
          <div className='text-center'>
            <div className='text-3xl font-bold text-emerald-600 mb-1'>150+</div>
            <div className='text-emerald-800 font-medium text-sm'>REVIEWS</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-emerald-600 mb-1'>190+</div>
            <div className='text-emerald-800 font-medium text-sm'>
              HAPPY TRAVELLERS
            </div>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className='relative bg-white/70 backdrop-blur-lg p-6 lg:p-8 rounded-3xl shadow-xl border border-emerald-200 max-w-4xl mx-auto'>
          {/* Quote Icon */}
          <div className='absolute -top-4 left-6'>
            <div className='bg-gradient-to-r from-emerald-500 to-green-500 p-2 rounded-full shadow-lg'>
              <Quote className='w-5 h-5 text-white' />
            </div>
          </div>

          {/* Current Testimonial */}
          <div className='pt-4'>
            <div className='flex items-center gap-4 mb-4'>
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className='w-12 h-12 rounded-full object-cover border-3 border-emerald-200'
              />
              <div>
                <h3 className='text-lg font-bold text-emerald-900'>
                  {testimonials[currentIndex].name}
                </h3>
                <div className='flex items-center gap-2 text-emerald-700 text-sm'>
                  <MapPin className='w-3 h-3' />
                  <span>{testimonials[currentIndex].location}</span>
                </div>
                <div className='flex items-center gap-1 mt-1'>
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>
            </div>

            <blockquote className='text-base text-emerald-800 leading-relaxed mb-4 italic'>
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className='flex items-center justify-between text-sm text-emerald-600 font-medium'>
              <span>{testimonials[currentIndex].trip}</span>
              <span>{testimonials[currentIndex].date}</span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className='flex items-center justify-between mt-6'>
            <button
              onClick={prevTestimonial}
              className='flex items-center justify-center w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105'>
              <ChevronLeft className='w-5 h-5' />
            </button>

            {/* Dots Indicator */}
            <div className='flex gap-2'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-emerald-500 to-green-500 scale-110"
                      : "bg-emerald-200 hover:bg-emerald-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className='flex items-center justify-center w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105'>
              <ChevronRight className='w-5 h-5' />
            </button>
          </div>
        </div>

        {/* Testimonial Counter */}
        <div className='text-center mt-6 mb-8'>
          <p className='text-emerald-600 font-medium text-sm'>
            {currentIndex + 1} of {testimonials.length} testimonials
          </p>
        </div>

        {/* Action Buttons */}
        <div className='flex justify-center gap-4'>
          <button className='bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold px-6 py-2.5 rounded-full hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-md text-sm'>
            Read all Reviews
          </button>
          <button className='bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold px-6 py-2.5 rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-md text-sm'>
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
