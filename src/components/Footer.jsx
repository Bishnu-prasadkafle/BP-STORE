import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-zinc-900 text-white w-full'>
      <div className='max-w-7xl  px-4 py-3 grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Logo & Description */}
        <div>
          <h2 className='text-xl font-bold text-red-500'>BP–SHOP</h2>
          <p className='text-sm mt-2 text-gray-300'>
            Specializes in providing high-quality, stylish products for your
            wardrobe.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className='text-lg font-semibold mb-2'>CONTACT</h3>
          <ul className='text-sm space-y-2 text-gray-300'>
            <li className='flex items-start gap-2'>
              <MapPin className='w-4 h-4 mt-1' />
              Kawasoti–02, Nawalpur, Gandaki Province
            </li>
            <li className='flex items-center gap-2'>
              <Phone className='w-4 h-4' />
              9805688705
            </li>
            <li className='flex items-center gap-2'>
              <Mail className='w-4 h-4' />
              bpshopaccessories@gmail.com
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-semibold mb-2'>QUICK LINK</h3>
          <ul className='text-sm space-y-1 text-gray-300'>
            <li>
              <a href='#' className='hover:text-red-400'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-400'>
                Products
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-400'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-400'>
                Contact
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-400'>
                Add to Cart
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className='text-lg font-semibold mb-2'>FOLLOW US</h3>
          <div className='flex gap-4 mt-1'>
            <a href='#' className='text-blue-500 hover:scale-110 transition'>
              <Facebook />
            </a>
            <a href='#' className='text-blue-400 hover:scale-110 transition'>
              <Twitter />
            </a>
            <a href='#' className='text-pink-500 hover:scale-110 transition'>
              <Instagram />
            </a>
            <a href='#' className='text-red-600 hover:scale-110 transition'>
              <Youtube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className='border-t border-gray-700 py-4 text-center text-sm text-gray-400'>
        ©2025 <span className='text-red-500 font-semibold'>BP–SHOP</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
