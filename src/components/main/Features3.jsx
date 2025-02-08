import React from "react";
import { motion } from "framer-motion";
import About1 from "../../assets/images/about-img1.png";
import About2 from "../../assets/images/about-img2.png";
import Icon1 from "../../assets/images/about-img1(1).png";
import Icon2 from "../../assets/images/about-img2(1).png";
import CEO from "../../assets/images/ceo-img.png";

const Features3 = () => {
  return (
    <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-8xl overflow-hidden">
      <div className="flex flex-wrap items-center">
        <motion.div
          className="w-full lg:w-1/2 mb-12 lg:mb-0 px-2 sm:px-6 lg:px-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.img
              src={About1}
              alt="Students studying"
              className="rounded-lg w-full lg:w-1/2 h-auto max-w-xl mx-auto lg:mx-0"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 0.96 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />

            <motion.img
              src={About2}
              alt="Student in library"
              className="rounded-lg w-1/2 ml-auto absolute top-16 sm:top-28 right-0 hidden sm:block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            />

            {/* Stats boxes */}
            <motion.div
              className="absolute top-0 right-0 flex flex-col sm:flex-row items-center gap-4 sm:gap-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-blue-500 text-white p-3 sm:p-5 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold">16+</div>
                <div className="text-sm">Years of experience</div>
              </motion.div>
              <motion.div
                className="bg-navy-800 text-white p-3 sm:p-5 bg-gray-700 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold">3.2k</div>
                <div className="text-sm">Years of experience</div>
              </motion.div>
            </motion.div>

            {/* Discount badge */}
            <motion.div
              className="absolute top-1/4 left-0 bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-r-lg hidden sm:block"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="font-bold">20% OFF</div>
              <div className="text-sm">For All Courses</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side content */}
        <motion.div
          className="w-full lg:w-1/2 lg:pl-8 xl:pl-12 px-4 sm:px-6 lg:px-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-blue-600 font-semibold mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Education
          </motion.div>
          <motion.h2
            className="text-4xl font-bold mb-6 text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The Place Where You Can Achieve
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Welcome to EduAll, where learning knows no bounds. Whether you're a
            student, professional, or lifelong learner...
          </motion.p>

          {/* Mission section */}
          <motion.div className="flex flex-col sm:flex-row items-start mb-6 gap-6">
            <div className="mr-0 sm:mr-6 mb-4 sm:mb-0">
              <img src={Icon1} alt="Mission" className="w-12 h-12 mx-auto sm:mx-0" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-700">Our Mission</h3>
              <p className="text-gray-600">
                Driven by a team of dedicated educators, technologists, and
                visionaries, we strive to create a supportive
              </p>
            </div>
          </motion.div>

          {/* Vision section */}
          <motion.div className="flex flex-col sm:flex-row items-start mb-8 gap-6">
            <div className="mr-0 sm:mr-6 mb-4 sm:mb-0">
              <img src={Icon2} alt="Vision" className="w-16 h-16 mx-auto sm:mx-0" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-700">Our Vision</h3>
              <p className="text-gray-600">
                A professional seeking to upskill, or a lifelong learner
                exploring new horizons, we're here to accompany you every step
                of the way.
              </p>
            </div>
          </motion.div>

          {/* CTA and CEO section */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="w-full sm:w-auto bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center justify-center sm:mr-6 hover:bg-gray-900 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
            <motion.div
              className="flex items-center justify-center sm:justify-start w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={CEO}
                alt="CEO"
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <div className="font-semibold">Adam McCoy</div>
                <div className="text-sm text-gray-600">CEO Of Company</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features3;
