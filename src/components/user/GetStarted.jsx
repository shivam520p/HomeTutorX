import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import SignInImg from "../../assets/images/account-img.png";
import { DataProvider } from "../../auth/user/UserVerification";
import ForgotPassword from "../models/ForgotPassword";
import AddNewPassword from "../models/AddNewPassword";

const GetStarted = () => {
  const { loginData, loginHandleChange, submitLogin,forPopUp,setForPopUp} =
  useContext(DataProvider);
  const {token}=useParams();
  return (
    <>
      <section className="mt-20 md:mt-24 px-4 bg-blue-50">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5 py-8 md:py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-700 text-center">
            Sign In
          </h1>
          <div className="flex justify-center items-center gap-2 text-base md:text-lg">
            <a href="/">
              <i className="fa-solid fa-house mr-2"></i>Home
            </a>
            <em>
              <i className="fa-solid fa-chevron-right"></i>
            </em>
            <a href="/login" className="text-amber-500">
              Sign In
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white md:px-4 md:py-16">
        <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-50 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/3 py-3 px-3"
          >
            <div className="bg-white px-4 md:px-10 py-8 md:py-12 rounded-lg">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Welcome Back!
              </h1>
              <p className="text-gray-500 mt-2 text-sm md:text-base">
                Sign in to your account and join us
              </p>

              {/* Form */}
              <form action="" onSubmit={submitLogin}>
                <div className="mt-6">
                  <label className="block text-base md:text-lg font-medium text-gray-700">
                    Enter Email ID
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={loginHandleChange}
                    placeholder="Enter Your Email..."
                    className="w-full mt-1 p-2 md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />

                  <label className="block text-base md:text-lg font-medium text-gray-700 mt-4">
                    Enter Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={loginHandleChange}
                    placeholder="Enter Your Password..."
                    className="w-full mt-1 p-2 md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />

                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={() => {
                        setForPopUp(true);
                      }}
                      className="text-base md:text-lg text-orange-500 hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 bg-blue-500 text-white py-2 md:py-3 rounded-lg hover:bg-blue-600 text-sm md:text-base"
                  >
                    Sign In
                  </motion.button>

                  <p className="text-base md:text-lg text-gray-500 text-center mt-4">
                    Don't have an account?{" "}
                    <Link to="/register">
                      <button className="text-blue-500 hover:underline">
                        Sign Up
                      </button>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex items-center justify-center w-full lg:w-1/2"
          >
            <img
              src={SignInImg}
              alt="Welcome Illustration"
              className="max-w-full md:max-w-md"
            />
          </motion.div>
        </div>
      </section>
      {forPopUp && <ForgotPassword />}
      {token && <AddNewPassword token={token}/>}
    </>
  );
};

export default GetStarted;
