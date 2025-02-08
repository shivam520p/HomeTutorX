import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/main/Navbar";
import HeroSection from "../components/main/HeroSection";
import Footer from "../components/main/Footer";
import About from "../components/about/About";
import TutorSection from "../components/TutorSection/TutorSection";
import Contact from "../components/contact/Contact";
import { FindTutor } from "../components/findtutor/FindTutor";
import GetStarted from "../components/user/GetStarted";
import Register from "../components/user/Register";
import TutorDetails from "../components/findtutor/TutorDetails";
import Dashboard from "../Dashboard/Admin/Dashboard";
import TutorDashboard from "../Dashboard/Tutor/TutorDashboard";
import StudentDashboard from "../Dashboard/Student/StudentDashboard";
import StudyMaterials from "../components/studymaterials/StudyMaterials";

export const BrowserRoute = () => {
  const location = useLocation();
  const isLocation= location.pathname ==='/dashboard' || location.pathname ==='/tutordashboard' || location.pathname ==='/studentdashboard';
  return (
    <>
      {!isLocation && <Navbar />}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/findtutor" element={<FindTutor />} />
        <Route path="/instructordetails" element={<TutorDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutorsection" element={<TutorSection />} />
        <Route path="/studymaterials" element={<StudyMaterials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reset-password/:token" element={<GetStarted />} />
        <Route path="/login" element={<GetStarted />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tutordashboard" element={<TutorDashboard />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
      </Routes>
      {!isLocation && <Footer />}
    </>
  );
};
