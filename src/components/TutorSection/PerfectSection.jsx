import React from "react";
import { motion } from "framer-motion";
import tutorEm from "../../assets/images/TutorEmp.jpg";
import { useNavigate } from "react-router-dom";

const PerfectSection = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <section className="max-w-7xl mx-auto px-4 lg:py-16 py-8 overflow-hidden">
      {/* Top buttons section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
      >
        <div className="text-center lg:border-r-2 border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Looking for Tutor?</h2>
          <button
            onClick={() => {
              if (userData) {
                navigate("/findtutor");
              } else {
                navigate("/register");
              }
            }}
            className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Find Now
          </button>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Looking for Students?</h2>
          <button
            onClick={() => {
              if (userData) {
                navigate("/");
              } else {
                navigate("/register");
              }
            }}
            className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Create free profile
          </button>
        </div>
      </motion.div>

      {/* Main content section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 gap-4 items-center px-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="lg:text-4xl text-2xl font-semibold text-gray-800">
            The Perfect Tuition Teacher
          </h2>
          <p className="lg:text-lg text-sm text-gray-600 leading-relaxed">
            What makes a tuition teacher truly perfect? While being{" "}
            <b>highly qualified</b> and <b>experienced</b> is important, there
            are other crucial factors to consider. At <b>HomeTutorX</b>, we go
            beyond just qualifications and fees. We also look at{" "}
            <b>availability</b> in your area, the teacher's ability to{" "}
            <b>understand your child's unique needs</b>, and ensure a thorough{" "}
            <b>background check</b> for peace of mind.
          </p>
          <p className="lg:text-lg text-sm text-gray-600 leading-relaxed">
            An important factor is finding a teacher who is{" "}
            <b> kind and approachable.</b> An understanding teacher will
            recognize your child’s learning style and pace, adjusting their
            methods to make lessons more effective.
          </p>
          <p className="lg:text-base text-sm text-gray-600 leading-relaxed">
            With <b>HomeTutorX</b>, you get the <b>freedom to choose</b> the
            best tutor from thousands of options, ensuring that you find the
            right fit for your child's needs. Unlike offline tuition services,{" "}
            <b>HomeTutorX</b> gives you the flexibility to select the perfect
            teacher for your child’s success.
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
            Find Students Now
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center w-full"
        >
          <img
            src={tutorEm}
            alt="Tutor illustration"
            className="max-w-full w-auto h-auto object-contain rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PerfectSection;
