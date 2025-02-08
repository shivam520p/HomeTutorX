import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";
import toast from "react-hot-toast";
import BookTutor from "../models/BookTutor";

const AllClasses = () => {
  const { allClasses, getAllClasses, setPopUp, popUp } =
    useContext(AdminContext);

  useEffect(() => {
    getAllClasses();
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
      <div className="py-4 px-4">
        <motion.div
          onClick={() => {
            setPopUp(true);
          }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-3 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allClasses.map((classItem, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative">
                <motion.img
                  src={classItem.image}
                  alt={classItem.title}
                  className="w-full h-48 sm:h-56 md:h-32 object-cover object-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold">
                  {classItem?.className}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center py-6 md:py-10 space-x-4"
        >
          <button
            onClick={() => {
              toast.error("No more classes are available");
            }}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300"
          >
            <svg
              className="w-6 h-6 text-gray-600"
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
          <button
            onClick={() => {
              toast.error("No more classes are available");
            }}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300"
          >
            <svg
              className="w-6 h-6 text-gray-600"
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
      {popUp && <BookTutor />}
    </>
  );
};

export default AllClasses;
