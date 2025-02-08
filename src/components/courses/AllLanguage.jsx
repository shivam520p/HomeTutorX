import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";
import toast from "react-hot-toast";

const AllLanguage = () => {
  const { allLanguage, getAllLanguage } = useContext(AdminContext);
  useEffect(() => {
    getAllLanguage();
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="py-5 px-4">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allLanguage.map((language, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="p-5 md:p-10">
                <h3 className="text-sm md:text-base lg:text-lg font-semibold text-center">
                  {language.languageName}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center items-center gap-4 mt-8 md:mt-12"
        >
          <button onClick={()=>{toast.error("No more languages are available")}} className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300 active:scale-95">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button onClick={()=>{toast.error("No more languages are available")}} className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300 active:scale-95">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-gray-600"
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
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default AllLanguage;
