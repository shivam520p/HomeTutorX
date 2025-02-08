import React from "react";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <>
      <div className="px-4 py-16 bg-white">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-blue-600 mb-2"
            whileHover={{ scale: 1.05 }}
          >
            Get In Touch
          </motion.div>
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Let Us Help You Succeed
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            At <b>HomeTutorX</b>, we focus on innovation, quality, and
            inclusivity to deliver a seamless learning experience. Whether
            you’re a student or tutor, we’re here to help you reach your full
            potential.
          </motion.p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Office Card */}
          <motion.div
            className="bg-blue-50 p-6 rounded-lg hover:bg-blue-200"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Main Office</h3>
            <p className="text-gray-600 mb-4">
              32-Mawai Sector-9 Vijay Nagar Ghaziabad, 201009
            </p>
            <a
              href="https://maps.app.goo.gl/pGP4vvKNE4PkJF4C9"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Find Location
            </a>
          </motion.div>

          {/* Email Address Card */}
          <motion.div
            className="bg-blue-50 p-6 rounded-lg hover:bg-blue-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Email Address</h3>
            <p className="text-gray-600 mb-2">tutorxhome@gmail.com</p>
            <p className="text-gray-600 mb-2">tutorxhome@gmail.com</p>
            <a
              href="mailto:tutorxhome@gmail.com"
              className="text-blue-600 hover:underline"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Phone Number Card */}
          <motion.div
            className="bg-blue-50 p-6 rounded-lg hover:bg-blue-200"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
            <a
              href="tel:+919718601888"
              className="text-blue-600 hover:underline"
            >
              +91 9718601888
            </a>
            <p className="text-gray-600 mb-2"></p>

            <a
              href="tel:+918882955647"
              className="text-blue-600 hover:underline"
            >
              +91 8882955647
            </a>
            <p className="text-gray-600 mb-2"></p>

            <a
              href="tel:+919625786155"
              className="text-blue-600 hover:underline"
            >
              +91 9625786155
            </a>
            <p className="text-gray-600 mb-2"></p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
