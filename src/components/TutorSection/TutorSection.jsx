import React, { useContext, useState } from "react";
import RecentClass from "./RecentClass";
import HowWorks from "./HowWorks";
import Frequently from "./Frequently";
// import TutorSlider from "./TutorSlider";
import PerfectSection from "./PerfectSection";
import FAQ from "./FAQ";
import { motion } from "framer-motion";
import { DataProvider } from "../../auth/user/UserVerification";

const TutorSection = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const {
    tutorRegisterData,
    tutorOtp,
    otpVisible,
    tutorLoginData,
    tutorHandleChange,
    tutorSubmitRegister,
    tutorHandleOtp,
    tutorSubmitOtp,
    tutorLoginHandleChange,
    tutorLoginSubmit,
  } = useContext(DataProvider);
  return (
    <>
      <section className="mt-20 lg:mt-24 px-4 bg-blue-50">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5 py-8 sm:py-12 lg:py-16 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 text-center">Become a Tutor</h1>
          <div className="flex justify-center items-center gap-2 text-lg">
            <a href="/">
              <i className="fa-solid fa-house mr-2"></i>Home
            </a>
            <em>
              <i className="fa-solid fa-chevron-right"></i>
            </em>
            <a href="/tutorsection" className="text-amber-500">
              Become a Tutor
            </a>
          </div>
        </div>
      </section>
      <div className="container mx-auto lg:py-16 py-8 px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-5xl font-normal text-center mb-8 sm:mb-12"
        >
          Providing Home Tuition Opportunities
        </motion.h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 px-4 sm:px-6">
            <div className="space-y-6 sm:space-y-8 lg:space-y-16 shiv relative">
              {/* Steps */}
              {[
                "Become an Educator",
                "Impart Your Knowledge",
                "Flexible Hours",
                "Earn Additional Income",
              ].map((text, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-center space-x-4 relative"
                  key={index}
                >
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl z-10">
                    {["👨‍🏫", "📖", "🕒", "💸"][index]}
                  </div>
                  <p className="text-lg lg:text-xl font-semibold">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3 border-2 border-gray-800 p-4 sm:p-6 rounded-lg shadow-md mx-auto max-w-md"
            id="tutor-form"
          >
            {/* Toggle Buttons */}
            <div className="text-center mb-6 flex flex-col sm:flex-row justify-center gap-2">
              <button
                onClick={() => setIsRegistering(false)}
                className={`px-4 py-2 text-sm sm:text-base rounded-lg sm:rounded-l-lg sm:rounded-r-none ${
                  !isRegistering
                    ? "bg-blue-500 text-white"
                    : "bg-blue-200 text-gray-700"
                }`}
              >
                Login to Your Profile
              </button>
              <button
                onClick={() => setIsRegistering(true)}
                className={`px-4 py-2 text-sm sm:text-base rounded-lg sm:rounded-r-lg sm:rounded-l-none ${
                  isRegistering
                    ? "bg-blue-500 text-white"
                    : "bg-blue-200 text-gray-700"
                }`}
              >
                Register as a Tutor
              </button>
            </div>

            {/* Form */}
            {isRegistering ? (
              // Registration Form
              <form
                className="space-y-4"
                onSubmit={otpVisible ? tutorSubmitOtp : tutorSubmitRegister}
              >
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={tutorRegisterData.fullName}
                    onChange={tutorHandleChange}
                    className="w-full border rounded-lg p-2 focus:outline-primary"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={tutorRegisterData.email}
                    onChange={tutorHandleChange}
                    className="w-full border rounded-lg p-2 focus:outline-primary"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="mobile"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={tutorRegisterData.mobile}
                    onChange={tutorHandleChange}
                    className="w-full border rounded-lg p-2 focus:outline-primary"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="Password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={tutorRegisterData.password}
                    onChange={tutorHandleChange}
                    className="w-full border rounded-lg p-2 focus:outline-primary"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {otpVisible && (
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="Password"
                    >
                      Enter OTP
                    </label>
                    <input
                      type="text"
                      name="otp"
                      value={tutorOtp.otp}
                      onChange={tutorHandleOtp}
                      className="w-full border rounded-lg p-2 focus:outline-primary"
                      placeholder="Enter OTP"
                      required
                    />
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:shadow-md transition duration-300 hover:bg-blue-600"
                >
                  Register Now
                </button>
              </form>
            ) : (
              // Login Form
              <form className="space-y-4" onSubmit={tutorLoginSubmit}>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={tutorLoginData.email}
                    onChange={tutorLoginHandleChange}
                    className="w-full border rounded-lg p-2 focus:outline-primary"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={tutorLoginData.password}
                    onChange={tutorLoginHandleChange}
                    className="w-full border rounded-lg p-2 focus:outline-primary"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 hover:shadow-md"
                >
                  Login Now
                </button>
              </form>
            )}

            {/* Link to switch */}
            <p className="text-center mt-4 text-sm">
              {isRegistering ? (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setIsRegistering(false)}
                    className="text-blue-500 hover:underline"
                  >
                    Sign In here!
                  </button>
                </>
              ) : (
                <>
                  New to the platform?{" "}
                  <button
                    onClick={() => setIsRegistering(true)}
                    className="text-blue-500 hover:underline"
                  >
                    Register here!
                  </button>
                </>
              )}
            </p>
          </motion.div>
        </div>
      </div>

      {/*  */}

      <RecentClass />
      <HowWorks />
      <Frequently />
      {/* <TutorSlider /> */}
      <PerfectSection />
      <FAQ />
    </>
  );
};

export default TutorSection;
