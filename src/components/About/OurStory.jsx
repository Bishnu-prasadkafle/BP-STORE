import React from "react";
import storyImage from "../../assets/imagep.png"; // ✅ Make sure image exists in this path

const milestones = [
  { year: "2022", event: "Founded in Kawasoti, Nepal" },
  { year: "2023", event: "Reached 1,000 Orders" },
  { year: "2024", event: "Launched Fashion & Electronics Categories" },
  { year: "2025", event: "5,000+ Happy Customers" },
  { year: "2025", event: "Team Expanded to 15 Members" },
];

const OurStory = () => {
  return (
    <section className='w-full bg-white py-10 px-4 md:px-10'>
      <div className='max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        <div>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>Our Story</h2>
          <p className='text-gray-700 text-lg leading-relaxed'>
            Founded in the heart of Kawasoti, BP-Shop began with a simple
            mission: to make online shopping smarter, not harder. From humble
            beginnings, we've grown into a trusted destination for thousands of
            happy customers seeking quality, affordability, and style.
          </p>
          <p className='text-gray-700 text-lg mt-4'>
            We believe in making every purchase meaningful — whether it’s
            fashion, electronics, or everyday essentials. Our story is one of
            community, convenience, and continuous improvement.
          </p>
        </div>

        <div className='w-full h-full'>
          <img
            src={storyImage}
            alt='Our Story'
            className='w-full rounded-xl shadow-lg'
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
