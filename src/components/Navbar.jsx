import React, { useState } from "react";
import { MapPin, Menu, X, Phone, Mail } from "lucide-react";
import logozooming from "../assets/logozooming.jpg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/destinations", label: "DESTINATIONS" },
    { to: "/tour-packages", label: "TOUR PACKAGES" },
    { to: "/blog", label: "BLOG" },
    { to: "/why-us", label: "WHY US" },
    { to: "/about", label: "ABOUT US" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className='bg-gradient-to-r from-gray-400 to-gray-600 text-white py-2 px-4 text-sm border-b border-emerald-600'>
        <div className='max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-y-2'>
          <div className='flex flex-wrap items-center gap-6'>
            <div className='flex items-center gap-2 hover:text-emerald-100 transition-colors'>
              <Phone className='w-4 h-4' />
              <span className='font-medium'>+977-9805868705</span>
            </div>
            <div className='flex items-center gap-2 hover:text-emerald-100 transition-colors'>
              <Mail className='w-4 h-4' />
              <span className='font-medium'>nzooming@gmail.com</span>
            </div>
          </div>
          <div className='hidden sm:flex items-center gap-2 text-sm font-medium'>
            <span className='text-emerald-100'>🌍</span>
            <span>Explore Nepal with Us</span>
            <span className='text-emerald-300'>|</span>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Navbar Main */}
      <header className='sticky top-0 z-50 w-full bg-gradient-to-r from-emerald-800 to-green-900 border-b border-emerald-700 shadow-lg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3'>
          <div className='flex items-center justify-between gap-4'>
            {/* Logo */}
            <div className='flex items-center space-x-3 group cursor-pointer'>
              <div className='h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden shadow-lg ring-2 ring-emerald-400 group-hover:ring-emerald-200 transition-all'>
                <img
                  src={logozooming}
                  alt='Zooming Nature Logo'
                  className='object-cover w-full h-full group-hover:scale-110 transition-transform duration-300'
                />
              </div>
              <div>
                <span className='text-xl sm:text-2xl font-bold text-white block tracking-tight'>
                  ZOOMING NATURE
                </span>
                <span className='text-sm text-emerald-200 font-medium'>
                  Premium Travel Experiences
                </span>
              </div>
            </div>

            {/* Search Bar */}
            <div className='flex-1 hidden md:flex max-w-md mx-4'>
              <div className='relative w-full'>
                <input
                  type='text'
                  placeholder='Search destinations...'
                  className='w-full px-5 py-2.5 pl-10 text-sm rounded-full border border-emerald-500 bg-white placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition'
                />
                <MapPin className='absolute left-3 top-2.5 w-4 h-4 text-emerald-500' />
              </div>
            </div>

            {/* Right Buttons */}
            <div className='hidden md:flex items-center gap-4'>
              <a
                href='/gears-shop'
                className='text-sm font-semibold text-white border-2 border-emerald-400 px-5 py-2 rounded-full hover:bg-emerald-700 transition-all'>
                Gears Shopping
              </a>
              <button className='bg-gradient-to-r from-emerald-600 to-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:from-emerald-700 hover:to-green-800 transition-all'>
                My Bookings
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='md:hidden text-white p-2 rounded-lg hover:bg-emerald-700 transition'>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Nav Links */}
        <div className='hidden md:flex justify-center gap-2 pb-3 border-t border-emerald-700 pt-3'>
          {navLinks.map(({ to, label }, idx) => (
            <a
              key={idx}
              href={to}
              className='text-sm text-white font-medium px-3 py-1.5 rounded hover:bg-emerald-700 hover:text-emerald-100 transition'>
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='md:hidden bg-gradient-to-b from-emerald-800 to-green-900 border-t border-emerald-700 shadow-lg'>
            <div className='p-4 space-y-4'>
              {/* Search Bar */}
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search destinations...'
                  className='w-full px-5 py-3 pl-10 text-sm rounded-full border border-emerald-500 bg-white placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition'
                />
                <MapPin className='absolute left-3 top-3.5 w-4 h-4 text-emerald-500' />
              </div>

              {/* Nav Links */}
              <div className='space-y-2'>
                {navLinks.map(({ to, label }, idx) => (
                  <a
                    key={idx}
                    href={to}
                    onClick={() => setMobileMenuOpen(false)}
                    className='block text-sm text-white font-semibold px-4 py-3 rounded hover:bg-emerald-700 transition'>
                    {label}
                  </a>
                ))}
              </div>

              {/* Actions */}
              <div className='pt-4 border-t border-emerald-700 space-y-3'>
                <a
                  href='/gears-shop'
                  className='block text-center text-white font-semibold border border-emerald-400 px-5 py-2 rounded-full hover:bg-emerald-700 transition'>
                  Gears Shopping
                </a>
                <button className='w-full bg-gradient-to-r from-emerald-600 to-green-700 text-white px-6 py-2 rounded-full font-semibold hover:from-emerald-700 hover:to-green-800 transition'>
                  My Bookings
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
