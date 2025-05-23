import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout();
    navigate("/account");
  };

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/products", label: "PRODUCTS" },
    { to: "/about", label: "ABOUT" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <header className='sticky top-0 z-50 w-full shadow-md bg-gradient-to-r from-[#f99c73] to-[#f2f2f2] transition-all duration-300'>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
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

        {/* Desktop Search */}
        <div className='hidden md:block'>
          <SearchBar />
        </div>

        {/* Desktop Nav & Icons */}
        <div className='hidden md:flex items-center space-x-7'>
          {navLinks.map(({ to, label }, idx) => (
            <NavLink
              key={idx}
              to={to}
              className={({ isActive }) =>
                `text-md font-semibold tracking-wide transition duration-200 hover:text-[#f99c73] ${
                  isActive
                    ? "text-[#f99c73] underline underline-offset-4"
                    : "text-[#274354]"
                }`
              }>
              {label}
            </NavLink>
          ))}

          <Link to='/cart' className='hover:scale-110 transition'>
            <ShoppingBag className='w-5 h-5 text-[#274354]' />
          </Link>

          {/* User Dropdown */}
          {user ? (
            <div className='relative'>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className='focus:outline-none'>
                <User className='w-6 h-6 text-white bg-green-600 p-1 rounded-full cursor-pointer hover:scale-105 transition' />
              </button>

              {dropdownOpen && (
                <div className='absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50'>
                  {/* <Link
                    to='/profile'
                    onClick={() => setDropdownOpen(false)}
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    Profile
                  </Link> */}
                  <Link to='/signup'></Link>

                  <Link
                    to='/cart'
                    onClick={() => setDropdownOpen(false)}
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    Cart
                  </Link>
                  <button
                    onClick={() => {
                      handleLogOut();
                      setDropdownOpen(false);
                    }}
                    className='w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100'>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to='/account' title='Login'>
              <User className='w-6 h-6 text-white bg-[#274354] p-1 rounded-full hover:scale-105 transition' />
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className='md:hidden text-[#274354]'>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className='md:hidden px-4 pb-4 space-y-3'>
          <SearchBar />
          {navLinks.map(({ to, label }, idx) => (
            <NavLink
              key={idx}
              to={to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-semibold tracking-wide hover:text-[#f99c73] transition ${
                  isActive
                    ? "text-[#f99c73] underline underline-offset-4"
                    : "text-[#274354]"
                }`
              }>
              {label}
            </NavLink>
          ))}
          <div className='flex space-x-4 pt-2'>
            <Link to='/cart'>
              <ShoppingBag className='w-5 h-5 text-[#274354]' />
            </Link>
            {user ? (
              <button onClick={handleLogOut}>
                <User className='w-6 h-6 text-white bg-red-500 p-1 rounded-full' />
              </button>
            ) : (
              <Link to='/account'>
                <User className='w-6 h-6 text-white bg-[#274354] p-1 rounded-full' />
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
