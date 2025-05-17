import React from "react";
import {
  Truck,
  ShieldCheck,
  Headphones,
  ShoppingBag,
  DollarSign,
  RotateCcw,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <ShoppingBag className='w-10 h-10 text-orange-500' />,
    title: "Wide Product Selection",
    desc: "From fashion to electronics, find everything you need in one place.",
  },
  {
    icon: <Truck className='w-10 h-10 text-orange-500' />,
    title: "Fast & Reliable Delivery",
    desc: "We ensure your orders arrive quickly and safely at your doorstep.",
  },
  {
    icon: <DollarSign className='w-10 h-10 text-orange-500' />,
    title: "Affordable Prices",
    desc: "Competitive pricing without compromising on quality.",
  },
  {
    icon: <ShieldCheck className='w-10 h-10 text-orange-500' />,
    title: "Secure Payments",
    desc: "Encrypted and secure payment gateways you can trust.",
  },
  {
    icon: <Headphones className='w-10 h-10 text-orange-500' />,
    title: "24/7 Support",
    desc: "Need help? Our support team is always available to assist you.",
  },
  {
    icon: <RotateCcw className='w-10 h-10 text-orange-500' />,
    title: "Easy Returns",
    desc: "Change of mind? We offer easy returns and quick refunds.",
  },
];

const WhyShopWithUs = () => {
  return (
    <section className='w-full bg-white py-16 px-4 md:px-10'>
      <div className='max-w-7xl mx-auto text-center mb-14'>
        <motion.h2
          className='text-4xl font-bold text-gray-900'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Why Shop With Us?
        </motion.h2>
        <motion.p
          className='text-gray-600 mt-4 text-lg'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          Experience seamless shopping with benefits tailored for you.
        </motion.p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className='bg-gray-50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border hover:border-orange-500'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}>
            <div className='flex justify-center mb-4'>{feature.icon}</div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              {feature.title}
            </h3>
            <p className='text-gray-600'>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyShopWithUs;
