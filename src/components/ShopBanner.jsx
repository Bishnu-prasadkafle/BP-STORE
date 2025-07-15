import React from "react";
import { ShoppingBag, ArrowRightCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ShopBanner = () => {
  return (
    <section className='relative bg-gradient-to-br from-green-100 to-emerald-50 overflow-hidden py-16 px-6 sm:px-12 lg:px-24 rounded-3xl shadow-lg mb-16'>
      <div className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center lg:text-left'>
          <h2 className='text-4xl sm:text-5xl font-bold text-emerald-900 mb-4 leading-tight'>
            Gear Up for Your Next{" "}
            <span className='text-emerald-600'>Adventure</span>
          </h2>
          <p className='text-lg text-emerald-700 max-w-xl mb-6'>
            Discover premium trekking gear — boots, jackets, backpacks & more.
            Everything you need for an epic journey.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href='#'
            className='inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:from-emerald-600 hover:to-green-600 transition-all'>
            <ShoppingBag className='w-5 h-5' />
            Shop Now
            <ArrowRightCircle className='w-5 h-5' />
          </motion.a>
        </motion.div>

        {/* Gear Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}>
          <img
            src='https://images.unsplash.com/photo-1485809052957-5113b0ff51af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJla2tpbmclMjBnZWFycyUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D'
            alt='Trekking Gear'
            className='rounded-2xl shadow-xl w-full max-w-md'
          />
        </motion.div>
      </div>

      {/* Decorative Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.2, scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className='absolute top-6 left-6 text-emerald-300'>
        <Sparkles className='w-12 h-12' />
      </motion.div>
    </section>
  );
};

export default ShopBanner;
