import React, { useContext } from "react";
import waveBg from "../../assets/images/wave-bg.png";
import { motion } from "framer-motion";
import { PageContext } from "../../auth/PagesHandle/PageProvider";

const ContectForm = () => {
  const { contactForm, contactHandleChange, contactHandleSubmit } =
    useContext(PageContext);
  return (
    <>
      <section className="py-8 md:py-16 relative">
        <img
          src={waveBg}
          alt="wave-bg"
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />

        <div className="container mx-auto px-4 md:px-8 lg:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side content */}
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <div className="mb-6">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-blue-500 text-lg md:text-xl"
                >
                  Contact Us
                </motion.span>
                <motion.h2
                  whileHover={{ scale: 1.02 }}
                  className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-700"
                >
                  Have questions or need assistance? We're here to help!
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 text-sm md:text-base"
                >
                  At <b>HomeTutorX</b>, we’re committed to making education accessible
                  to all. With a passion for transforming lives through
                  knowledge, we believe that learning opens doors to endless
                  opportunities and helps shape a successful future for every
                  learner.
                </motion.p>
              </div>
            </motion.div>

            {/* Right side form */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 bg-white rounded-lg p-4 mx-0 md:mx-4 lg:mx-20 shadow-lg mt-8 lg:mt-0"
            >
              <div className="p-4 md:p-6 bg-blue-50 rounded-lg">
                <motion.h2
                  whileHover={{ scale: 1.02 }}
                  className="text-xl md:text-2xl font-bold mb-6 border-dashed border-b-2 border-gray-200 pb-2"
                >
                  Get In Touch
                </motion.h2>

                <form onSubmit={contactHandleSubmit}>
                  <div className="mb-4">
                    <motion.label
                      whileHover={{ scale: 1.02 }}
                      className="block text-gray-700 mb-2 text-sm md:text-base"
                    >
                      Name
                    </motion.label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      type="text"
                      name="fullName"
                      value={contactForm.fullName}
                      onChange={contactHandleChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-base"
                      placeholder="Enter Name..."
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <motion.label
                      whileHover={{ scale: 1.02 }}
                      className="block text-gray-700 mb-2 text-sm md:text-base"
                    >
                      Email
                    </motion.label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={contactHandleChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-base"
                      placeholder="Enter Email..."
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <motion.label
                      whileHover={{ scale: 1.02 }}
                      className="block text-gray-700 mb-2 text-sm md:text-base"
                    >
                      Subject
                    </motion.label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      type="text"
                      name="subject"
                      value={contactForm.subject}
                      onChange={contactHandleChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-base"
                      placeholder="Enter Your Subject..."
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <motion.label
                      whileHover={{ scale: 1.02 }}
                      className="block text-gray-700 mb-2 text-sm md:text-base"
                    >
                      Message
                    </motion.label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      name="message"
                      value={contactForm.message}
                      onChange={contactHandleChange}
                      className="w-full px-3 md:px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 h-24 md:h-32 text-sm md:text-base"
                      placeholder="Enter Your Message..."
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-1/2 bg-blue-600 text-white py-2 md:py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
                    type="submit"
                  >
                    Send Message<i className="fa-solid fa-arrow-right ml-2"></i>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContectForm;
