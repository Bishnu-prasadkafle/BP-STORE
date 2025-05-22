import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showPolicy, setShowPolicy] = useState(false);

  const togglePolicy = () => setShowPolicy((prev) => !prev);

  return (
    <footer className='bg-zinc-900 text-white w-full mt-10'>
      <div className='max-w-8xl px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Logo */}
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
          <h3 className='text-lg font-semibold mb-2'>QUICK LINKS</h3>
          <ul className='text-sm space-y-1 text-gray-300'>
            <li>
              <Link to='/' className='hover:text-red-400'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/products' className='hover:text-red-400'>
                Products
              </Link>
            </li>
            <li>
              <Link to='/about' className='hover:text-red-400'>
                About
              </Link>
            </li>
            <li>
              <Link to='/contact' className='hover:text-red-400'>
                Contact
              </Link>
            </li>
            <li>
              <Link to='/cart' className='hover:text-red-400'>
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Social + Toggle Policy */}
        <div>
          <h3 className='text-lg font-semibold mb-2'>FOLLOW US</h3>
          <div className='flex gap-4 mt-1 mb-4'>
            <a href='#' className='text-blue-500'>
              <Facebook />
            </a>
            <a href='#' className='text-blue-400'>
              <Twitter />
            </a>
            <a href='#' className='text-pink-500'>
              <Instagram />
            </a>
            <a href='#' className='text-red-500'>
              <Youtube />
            </a>
          </div>

          {/* Toggle Button */}
          {/* <button
            onClick={togglePolicy}
            className='text-sm underline hover:text-red-400 mt-4'>
            {showPolicy ? "Hide Terms & Policies" : "View Terms & Policies"}
          </button> */}
          {/* 
          Policy Content
          {showPolicy && (
            <div className='mt-4 text-xs text-gray-300 space-y-2 max-h-40 overflow-y-auto'>
              <p>
                📌 By using this website, you agree to our terms and conditions.
              </p>
              <p>📦 Returns must be made within 7 days of delivery.</p>
              <p>🔒 Your data is secured with industry-standard encryption.</p>
              <p>
                🛍️ Prices and offers are subject to change without prior notice.
              </p>
              <p>
                📧 For complaints or feedback, please email us at:
                bpshopaccessories@gmail.com
              </p>
            </div>
          )} */}

          <Link to={"/Policies"}>Terms and Conditions</Link>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className='bg-zinc-800 text-center py-3 text-xs text-gray-400'>
        &copy; 2025 BP–SHOP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
