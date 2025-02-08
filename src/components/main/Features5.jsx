import React from 'react';
import { motion } from 'framer-motion';
import Choose1 from '../../assets/images/choose-us-img1.png';
import Choose2 from '../../assets/images/choose-us-img2.png';

const Features5 = () => {
  return (
    <section className="py-8 md:py-10 px-4 w-full overflow-x-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div
            className="w-full"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-600 text-base md:text-lg font-semibold">--Why Choose Us--</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 md:mb-6">
              Our Commitment to Excellence,
              <br className="hidden md:block" />
              Learn, Grow & Success.
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
              We are passionate about transforming lives through education. Founded with a vision to make learning accessible to all, we believe in the power of knowledge to...
            </p>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-center gap-2 text-lg">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <span><i class="fa-solid fa-check-double mr-2 text-blue-600"></i>9/10 Average Satisfaction Rate</span>
                </motion.div>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <span><i class="fa-solid fa-check-double mr-2 text-blue-600"></i>96% Completitation Rate</span>
                </motion.div>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <span><i class="fa-solid fa-check-double mr-2 text-blue-600"></i>Friendly Environment & Expert Teacher</span>
                </motion.div>
              </div>
            </div>

            <motion.button
              className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="relative h-[400px] md:h-[500px] lg:h-[600px] mt-8 lg:mt-0 w-full"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full">
              <motion.img 
                src={Choose1} 
                alt="Students studying" 
                className="rounded-lg absolute w-3/4 md:w-2/3 h-auto right-0 top-10"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              />
              <motion.img 
                src={Choose2} 
                alt="Students studying" 
                className="rounded-lg absolute w-3/4 md:w-2/3 h-auto left-0 top-0"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              />
              
              {/* Stats Overlay */}
              <motion.div 
                className="absolute top-4 md:top-8 right-2 md:right-4 bg-white p-3 md:p-4 rounded-lg shadow-lg text-sm md:text-base"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <div className="text-amber-500">⭐</div>
                  <div>
                    <div className="font-bold">4.6 (2.4k)</div>
                    <div className="text-sm text-gray-600">AVG Reviews</div>
                  </div>
                </div>
              </motion.div>

              {/* Enrolled Students */}
              <motion.div 
                className="absolute bottom-4 md:bottom-8 right-2 md:right-4 bg-white p-3 md:p-4 rounded-lg shadow-lg text-sm md:text-base"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-sm">36k+ Enrolled Students</div>
                <div className="flex -space-x-2 mt-2">
                  {/* Add avatar images here */}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features5;
