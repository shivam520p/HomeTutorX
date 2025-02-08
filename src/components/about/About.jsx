import React from "react";
import FeatureList from "../about/FeatureList";
import About1 from "../../assets/images/About1.jpg"
import AboutImg1 from "../../assets/images/Blogs4.jpg";
import AboutImg2 from "../../assets/images/blogs5.jpg";
import FeatureList2 from "../about/FeatureList2";
import AboutCards from "../about/AboutCards";
import { motion } from "framer-motion";
import FeatureList3 from "./FeatureList3";

export const AboutPage = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-20 lg:mt-24 px-2 sm:px-4 bg-blue-50"
      >
        <div className="container mx-auto flex flex-col justify-center items-center gap-5 py-16">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold text-gray-700"
          >
            About
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center items-center gap-2 text-lg"
          >
            <a href="/">
              <i className="fa-solid fa-house mr-2"></i>Home
            </a>
            <em>
              <i className="fa-solid fa-chevron-right"></i>
            </em>
            <a href="/about" className="text-amber-500">
              About
            </a>
          </motion.div>
        </div>
      </motion.section>
      <section className="w-full">
        <div className="container mx-auto flex flex-col gap-5 md:gap-10 px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-5 flex flex-col items-center justify-center md:flex-row gap-0 lg:gap-10"
          >
            {/* Left Side Container */}
            <div className="w-full md:w-1/2 h-full flex flex-col lg:p-8 p-2">
              <div className="p-5">
                <span className="text-blue-500 text-2xl font-normal">
                  -- Our Promise --
                </span>
                <h1 className="lg:text-3xl text-2xl font-semibold tracking-wider py-2">
                  Transforming Education for a Better Tomorrow
                </h1>
                <p className="lg:text-base text-sm text-slate-500 tracking-wide py-4">
                  At HomeTutorX, we strive to make education accessible,
                  engaging, and empowering for learners of all ages. By
                  connecting students with skilled tutors, we aim to
                  revolutionize the way knowledge is shared, fostering success
                  and confidence at every step.
                </p>
                <span className="text-primary text-2xl font-normal">
                  Our Core Values
                </span>
                <FeatureList />
              </div>
            </div>

            {/* Right Side Container */}
            <div className="w-full md:w-1/2 h-full lg:p-10 p-4 pt-0">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                src={AboutImg1}
                alt="Mission Image"
                className="object-cover bg-center h-full w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-5 flex flex-col items-center justify-center md:flex-row gap-0 lg:gap-10"
          >
            {/* Left Side Container */}
            <div className="w-full md:w-1/2 h-full lg:p-10 p-4 pt-0">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                src={AboutImg2}
                alt="Vision Image"
                className="object-cover bg-center h-full w-full"
              />
            </div>

            {/* Right Side Container */}
            <div className="w-full md:w-1/2 h-full flex flex-col lg:p-8 p-2">
              <div className="p-5 pt-0">
                <span className="text-blue-500 text-2xl font-normal">
                  -- Our Vision --
                </span>
                <h1 className="lg:text-3xl text-2xl font-semibold tracking-wider py-2">
                  Shaping a Future of Limitless Learning
                </h1>
                <p className="lg:text-base text-sm text-slate-500 tracking-wide py-4">
                  At HomeTutorX, our vision is to build a world where learning
                  knows no boundaries, where every student has access to the
                  best tutors, and every tutor can inspire students across the
                  globe. We aim to create a future where education is
                  personalized, accessible, and a powerful tool for lifelong
                  success.
                </p>
                <span className="text-primary text-2xl font-normal">
                  What Drives Us
                </span>
                <FeatureList2 />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center md:flex-row gap-0 lg:gap-10"
          >
            {/* Left Side Container */}
            <div className="w-full md:w-1/2 h-full flex flex-col lg:p-8 p-2">
              <div className="p-5">
                <span className="text-blue-500 text-2xl font-normal">
                  -- Key Achievements --
                </span>
                <h1 className="lg:text-3xl text-2xl font-semibold tracking-wider py-2">
                  Our Commitment to Excellence
                </h1>
                <p className="lg:text-base text-sm text-slate-500 tracking-wide">
                  At HomeTutorX, our dedication to providing exceptional
                  education is reflected in our key achievements. These
                  milestones showcase our ongoing efforts to maintain high
                  standards, innovation, and continuous improvement in
                  everything we do:
                </p>
                <FeatureList3 />
              </div>
            </div>

            {/* Right Side Container */}
            <div className="w-full md:w-1/2 h-full p-4 pt-0">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                src={About1}
                alt="Mission Image"
                className="object-cover bg-center h-full w-full"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center lg:p-10 p-5 gap-4"
        >
          <span className="text-cyan-500 text-2xl font-normal">
            -- Experienced tutors --
          </span>
          <h1 className="lg:text-4xl text-2xl text-center font-semibold tracking-wider">
            Meet Our Expert Tutors at HomeTutorX
          </h1>
          <p className="text-m text-slate-500 tracking-wide max-w-xl text-center">
            At HomeTutorX, we connect you with a carefully selected group of
            top-tier tutors who are passionate about unlocking every student’s
            potential. Our experienced educators are dedicated to creating
            personalized learning experiences that drive success, confidence,
            and lifelong skills.
          </p>
        </motion.div>
        <AboutCards />

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center lg:p-10 p-5 gap-4"
        >
          <span className="text-2xl font-normal text-green-600">
            -- Key Achievements --
          </span>
          <h1 className="lg:text-4xl text-2xl font-bold tracking-widest">
            Our Commitment to Excellence
          </h1>
          <p className="text-m text-slate-500 tracking-wide">
            These figures highlight our ongoing efforts to maintain high
            standards <br /> and continuous improvement in all we do.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto lg:py-10 w-full"
          >
            <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:px-5">
              <div className="bg-slate-400 rounded-lg flex flex-col items-center justify-center p-6 shadow-md cursor-pointer">
                <div className="bg-slate-300 w-16 h-16 rounded-full flex items-center justify-center mb-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 2v20m10-10H2"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white">40+</h3>
                <p className="text-gray-300">Active subjects</p>
              </div>

              <div className="bg-slate-400 rounded-lg flex flex-col items-center justify-center lg:p-6 p-2 shadow-md cursor-pointer">
                <div className="bg-slate-300 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white">124,234</h3>
                <p className="text-gray-300">Students enrolled</p>
              </div>

              <div className="bg-slate-400 rounded-lg flex flex-col items-center justify-center p-6 shadow-md cursor-pointer">
                <div className="bg-slate-300 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 12v4m0-2H8m8-2l-4-4m0 0l-4 4"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white">500+</h3>
                <p className="text-gray-300">Tutors available</p>
              </div>

              <div className="bg-slate-400 rounded-lg flex flex-col items-center justify-center p-6 shadow-md cursor-pointer">
                <div className="bg-slate-300 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 17l-5 3 1-5-4-4 5-1 2-5 2 5 5 1-4 4 1 5-5-3z"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white">56,234</h3>
                <p className="text-gray-300">5 star reviews</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container mt-5 px-2 sm:px-4"
          >
            <h1 className="lg:text-4xl text-2xl font-semibold text-center tracking-wider -mb-10">
              What Our Users Are Saying
            </h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10 lg:pt-10 pt-5">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">
                  We have tried several tutoring platforms, but none compare to
                  Lernen. The tutors are top-notch, and the booking process is
                  incredibly smooth.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">Arlene M</h3>
                    <p className="text-sm text-gray-500">Agile District</p>
                  </div>
                  <div className="text-yellow-500 flex">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">
                  Lernen has been a game-changer for our students. The variety
                  of tutors and ease of booking sessions make it a breeze for
                  parents and students alike.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">Marvin M</h3>
                    <p className="text-sm text-gray-500">Tutoring Specialist</p>
                  </div>
                  <div className="text-yellow-500 flex">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">
                  Lernen is a fantastic resource for our students. The diverse
                  range of tutors ensures that we can find the perfect match for
                  each student's needs.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">Devon L</h3>
                    <p className="text-sm text-gray-500">Classroom Teacher</p>
                  </div>
                  <div className="text-yellow-500 flex">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">
                  Lernen is a dependable and effective tool for our agency,
                  offering knowledgeable and dedicated tutors.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">Ronald R</h3>
                    <p className="text-sm text-gray-500">
                      Educational Consultant
                    </p>
                  </div>
                  <div className="text-yellow-500 flex">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">
                  Our experience with Lernen has been outstanding. The platform
                  is user-friendly, and the tutors are highly qualified.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">Darlene R</h3>
                    <p className="text-sm text-gray-500">Academic Advisor</p>
                  </div>
                  <div className="text-yellow-500 flex">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">
                  We’re delighted with Lernen. Its top-notch tutors and
                  user-friendly platform have greatly boosted our students.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">Courtney H</h3>
                    <p className="text-sm text-gray-500">School Counselor</p>
                  </div>
                  <div className="text-yellow-500 flex">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div> */}
      </section>
    </>
  );
};

export default AboutPage;
