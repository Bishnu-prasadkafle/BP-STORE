import React from "react";
import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import image1 from "../assets/image1.png";
import FeaturedProducts from "../components/ProductFeartures";
import PromoBanner from "../components/Promobanner";
// import Footer from "../components/Footer";
import UpdateProducts from "../components/Updateproducts";

function Home() {
  const navigate = useNavigate();
  return (
    <div className='bg-white min-h-screen w-full py-10'>
      {/* Hero Section (Left + Right) */}
      <div className='flex flex-col-reverse lg:flex-row items-center justify-between px-15'>
        {/* Left Content */}
        <div className='max-w-xl mt-10 lg:mt-0'>
          <h1 className='font-extrabold text-4xl sm:text-5xl text-black leading-tight mb-4'>
            Shop Smarter, Not Harder!
          </h1>
          <p className='font-light text-gray-600 text-base sm:text-lg mb-6'>
            “Shopping isn't just about buying things — it's about discovering
            something that makes you feel good.”
          </p>

          <button
            onClick={() => navigate("/products")}
            className='group inline-flex items-center gap-2 text-lg bg-red-500 text-white px-6 py-3 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105'>
            Explore Now
            <ArrowRight className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
          </button>
        </div>

        {/* Right Image */}
        <div className='mb-10 lg:mb-0 lg:w-1/2'>
          <img
            src={image1}
            alt='Shop'
            className='w-full max-w-md mx-auto transition-transform duration-500 hover:scale-105'
          />
        </div>
      </div>
      <hr />

      {/* Featured Section */}
      <div>
        <FeaturedProducts />
      </div>
      <div>
        <PromoBanner />
      </div>
      <div>
        <UpdateProducts />
      </div>
    </div>
  );
}

export default Home;
