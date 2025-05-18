import React from "react";
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section id='mission-vision' className='bg-gray-50 py-16 px-6 lg:px-20'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-4xl font-extrabold text-gray-800 mb-12'>
          Our Mission & Vision
        </h2>

        <div className='grid md:grid-cols-2 gap-12 text-left'>
          {/* Mission */}
          <div className='p-8 rounded-xl shadow-md bg-white hover:shadow-xl transition duration-300 group'>
            <div className='flex items-center gap-4 mb-4 '>
              <div className='bg-red-100 p-3 rounded-full transition-transform duration-300 group-hover:scale-110'>
                <Target className='text-red-600 w-7 h-7' />
              </div>
              <h3 className='text-2xl font-semibold text-gray-800'>
                Our Mission
              </h3>
            </div>
            <p className='text-gray-600 text-base leading-relaxed'>
              At BP-Shop, our mission is to empower every customer by delivering
              high-quality products, dependable service, and seamless shopping
              experiences. We are dedicated to making shopping smarter, not
              harder, by prioritizing convenience, transparency, and customer
              satisfaction at every step. Through innovation and a
              customer-first mindset, we aim to build lasting relationships
              founded on trust, value, and accessibility—ensuring that every
              purchase adds real meaning and ease to our customers' lives.
            </p>
          </div>

          {/* Vision */}
          <div className='p-8 rounded-xl shadow-md bg-white hover:shadow-xl transition duration-300 group'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='bg-blue-100 p-3 rounded-full transition-transform duration-300 group-hover:scale-110'>
                <Eye className='text-blue-600 w-7 h-7' />
              </div>
              <h3 className='text-2xl font-semibold text-gray-800'>
                Our Vision
              </h3>
            </div>
            <p className='text-gray-600 text-base leading-relaxed'>
              We envision becoming a trusted global brand that seamlessly blends
              style, affordability, and innovation to enrich the lives of every
              customer. By continuously pushing the boundaries of design and
              technology, we strive to deliver products and experiences that
              inspire confidence, reflect individuality, and offer exceptional
              value. Our commitment is to create a lasting connection with our
              customers worldwide—building a community where quality meets
              accessibility, and every interaction sparks joy and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
