import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tutors from "../findtutor/Tutors";
import AboutImg1 from "../../assets/images/Blogs4.jpg";
import AllSubjects from "../courses/AllSubjects";
import AllClasses from "../courses/AllClasses";
import AllLanguages from "../courses/AllLanguage";
import TitleSection from "./TitleSection";
import BookTutor from "../models/BookTutor";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";

const HeroSection = () => {
  const { allImages, getAllImages, popUp, setPopUp } = useContext(AdminContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [allImages.length]);

  useEffect(() => {
    getAllImages();
  }, []);

  const [activeTab, setActiveTab] = useState("subjects");
  const tabs = [
    { id: "subjects", label: "Subjects", component: AllSubjects },
    { id: "classes", label: "Classes", component: AllClasses },
    { id: "languages", label: "Languages", component: AllLanguages },
  ];

  return (
    <>
      <div className="container mx-auto mt-24 lg:my-24 px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center md:items-start justify-between py-5 md:py-10 gap-10">
        {/* Left Column */}
        <motion.div
          className="space-y-6 w-full md:w-1/2 h-[400px] md:h-[500px] flex flex-col items-center md:items-start justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 text-blue-600"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            <span className="text-2xl">• Mission for HomeTutorX</span>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-700 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Transforming <span className="text-orange-500">Education</span>{" "}
            <br />
            for a Better <span className="text-blue-600">Tomorrow</span>
          </motion.h1>

          <motion.p
            className="text-gray-600 text-base md:text-xl px-4 md:pr-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            At HomeTutorX, we strive to make education accessible, engaging, and
            empowering for learners of all ages. By connecting students with
            skilled tutors, we aim to revolutionize the way knowledge is shared,
            fostering success and confidence at every step.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a
              onClick={() => {
                setPopUp(true);
              }}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Courses
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>
            <motion.button
              onClick={() => {
                setPopUp(true);
              }}
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Class
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="relative overflow-hidden w-full md:w-1/2 h-[500px] rounded-xl hidden md:block"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <motion.img
              key={currentImageIndex}
              src={allImages[currentImageIndex]?.imageUrl || AboutImg1}
              alt={`Image ${currentImageIndex}`}
              className="rounded-xl w-full h-[500px] bg-cover bg-center"
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              exit={{ x: -100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Tutors Section */}
      <Tutors />

      {/* Subject, Class, and Language Section */}
      <div className="container mx-auto px-4" id="courses">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center pb-8 md:pb-12">
          Tutors According to Your Needs
        </h1>
        <div className="flex flex-col sm:flex-row w-full sm:w-2/3 mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`border-2 py-2 md:py-3 mb-2 sm:mb-0 w-full sm:w-1/3 transition-colors font-semibold text-sm md:text-base ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 hover:bg-blue-50"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-4 md:mt-6">
          {tabs.map(
            (tab) => activeTab === tab.id && <tab.component key={tab.id} />
          )}
        </div>
      </div>

      <TitleSection />
      {popUp && <BookTutor />}
    </>
  );
};

export default HeroSection;
