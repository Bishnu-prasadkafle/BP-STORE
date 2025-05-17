import React from "react";
import { motion } from "framer-motion";
import { Milestone } from "lucide-react";

const timelineData = [
  { year: "2022", event: "Founded in Kawasoti" },
  { year: "2023", event: "1,000+ Orders Completed" },
  { year: "2024", event: "Launched Fashion & Tech" },
  { year: "2025", event: "5,000+ Customers & Growing" },
];

const CompanyTimeline = () => {
  return (
    <section className='bg-white py-16 px-4 md:px-10'>
      <h2 className='text-4xl font-bold text-center text-gray-900 mb-14'>
        Company Timeline
      </h2>

      <div className=''>
        <div className='flex items-center space-x-10 md:space-x-20 relative px-2 pb-10'>
          {/* Horizontal Line */}
          <div className='absolute top-10 left-0 right-0 h-1 bg-orange-500 z-0' />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className='relative z-10 flex flex-col items-center min-w-[180px]'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}>
              <div className='w-12 h-12 flex items-center justify-center rounded-full bg-white border-4 border-orange-500 shadow-md mb-3'>
                <Milestone className='text-orange-500 w-6 h-6' />
              </div>
              <p className='text-lg font-semibold text-gray-800'>{item.year}</p>
              <p className='text-sm text-gray-600 text-center mt-1'>
                {item.event}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
