import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, User, Search, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full shadow-md bg-gradient-to-r from-[#f99c73] to-[#f2f2f2] transition-all duration-300'>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-centerc sticky-top'>
        {/* Logo */}
        <Link to='/' className='flex items-center space-x-2'>
          <img
            src={logo}
            alt='Logo'
            className='h-14 w-14 object-cover rounded-t-3xl shadow-md transition-transform duration-300 hover:scale-105'
          />
          <span className='text-xl font-extrabold text-[#274354] tracking-wide'>
            BP-SHOP
          </span>
        </Link>

        <SearchBar />

        {/* Desktop Nav & Icons */}
        <div className='hidden md:flex items-center space-x-7'>
          {["/", "/products", "/about", "/contact"].map((path, idx) => (
            <NavLink
              key={idx}
              to={path}
              className={({ isActive }) =>
                `text-md font-semibold tracking-wide transition duration-200 hover:text-[#f99c73] ${
                  isActive
                    ? "text-[#f99c73] underline underline-offset-4"
                    : "text-[#274354]"
                }`
              }>
              {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
            </NavLink>
          ))}
          <Link to='/cart' className='hover:scale-110 transition'>
            <ShoppingBag className='w-5 h-5 text-[#274354]' />
          </Link>
          <Link to='/account'>
            <User className='w-6 h-6 text-white rounded-full bg-[#274354] p-1 shadow hover:scale-105 transition' />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className='md:hidden text-[#274354]'>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* 
      Mobile Search */}
      {/* <div className='md:hidden px-4 pb-3'>
        <div className='bg-white flex items-center rounded-full shadow px-4 py-2 w-full'>
          <Search className='w-4 h-4 text-gray-500 mr-2' />
          <input
            type='text'
            placeholder='Search Products'
            className='outline-none w-full text-sm text-[#274354]'
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden px-4 pb-4 space-y-3'>
          {["/", "/products", "/about", "/contact"].map((path, idx) => (
            <NavLink
              key={idx}
              to={path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-semibold tracking-wide hover:text-[#f99c73] transition ${
                  isActive
                    ? "text-[#f99c73] underline underline-offset-4"
                    : "text-[#274354]"
                }`
              }>
              {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
            </NavLink>
          ))}
          <div className='flex space-x-4 pt-2'>
            <Link to='/cart'>
              <ShoppingBag className='w-5 h-5 text-[#274354]' />
            </Link>
            <Link to='/account'>
              <User className='w-6 h-6 text-white rounded-full bg-[#274354] p-1' />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
