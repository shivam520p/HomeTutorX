import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCog,
  faSignOutAlt,
  faUserGraduate,
  faChalkboardTeacher,
  faBook,
  faUser,
  faCreditCard,
  faPlusCircle,
  faCalendar,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import ProfileSettings from "../../Dashboard/Tutor/ProfileSettings";
import EducationSettings from "../../Dashboard/Tutor/EducationSettings";
import ExperienceDetails from "../../Dashboard/Tutor/ExperienceDetails";
import CertificationDetails from "../../Dashboard/Tutor/CertificationDetails";
import ChangePassword from "../../Dashboard/Tutor/ChangePassword";
import AllLeads from "../Admin/Users/AllLeads";
import SubscriptionCards from "../Admin/SubscriptionCards";
import TutorLeadView from "./TutorLeadView";
import toast from "react-hot-toast";
import { TutorContext } from "../../auth/TutorHandling/TutorProvider";
import DefaultImg from "../../assets/images/default_mentor_image.png";

const TutorDashboard = () => {
  const navigate = useNavigate();
  const { tutorName, getTutorDetails } = useContext(TutorContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [handleLink, setHandleLink] = useState("allLeads");

  useEffect(() => {
    getTutorDetails();
  }, []);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLinkClick = (link) => {
    setHandleLink(link);
    handleDrawerToggle(); // Close the sidebar
  };

  const drawer = (
    <div className="flex flex-col h-full">
      <div>
        <div className="text-xl font-bold border-brounded-md flex items-center justify-start gap-2">
          <img
            src={tutorName?.avatar || DefaultImg}
            alt=""
            className="w-12 h-12 border object-fill rounded-full"
          />
          <h1 className="">{tutorName?.fullName}</h1>
        </div>
        <ul className="space-y-2 py-5 cursor-pointer">
          <li
            className="flex items-center p-2 hover:bg-white hover:text-black rounded-md"
            onClick={() => handleLinkClick("allLeads")}
          >
            <FontAwesomeIcon icon={faCalendar} className="mr-3" />
            <span>All Leads</span>
          </li>
          <li
            className="flex items-center p-2 hover:bg-white hover:text-black rounded-md"
            onClick={() => handleLinkClick("tutorleadview")}
          >
            <FontAwesomeIcon icon={faPlusCircle} className="mr-3" />
            <span>Your Leads</span>
          </li>
          <li
            className="flex items-center p-2 hover:bg-white hover:text-black rounded-md"
            onClick={() => handleLinkClick("profilesettings")}
          >
            <FontAwesomeIcon icon={faUser} className="mr-3" />
            <span>Profile Settings</span>
          </li>
          <li
            className="flex items-center p-2 hover:bg-white hover:text-black rounded-md"
            onClick={() => handleLinkClick("educationsettings")}
          >
            <FontAwesomeIcon icon={faUserGraduate} className="mr-3" />
            <span>Education Details</span>
          </li>
          <li
            className="flex items-center p-2 hover:bg-white hover:text-black rounded-md"
            onClick={() => handleLinkClick("experiencesettings")}
          >
            <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-3" />
            <span>Experience Details</span>
          </li>
          <li
            className="flex items-center p-2 hover:bg-white hover:text-black rounded-md"
            onClick={() => handleLinkClick("certificationsettings")}
          >
            <FontAwesomeIcon icon={faBook} className="mr-3" />
            <span>Certification Details</span>
          </li>

          <li
            className="flex items-center p-2 hover:bg-white hover:text-black rounded-md"
            onClick={() => handleLinkClick("subscription")}
          >
            <FontAwesomeIcon icon={faCreditCard} className="mr-3" />
            <span>Subscription Plans</span>
          </li>

          <li className="relative">
            <div
              className="flex items-center p-2 hover:bg-white hover:text-black rounded-md cursor-pointer"
              onClick={() => handleLinkClick("changepassword")}
            >
              <FontAwesomeIcon icon={faCog} className="mr-3" />
              <span>Change Password</span>
            </div>
          </li>
          <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
            <button
              onClick={() => {
                localStorage.clear();
                navigate("/");
                toast.success("Logout Successfully...!!");
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen w-full">
      {/* Mobile Drawer - Updated with transition */}
      <div
        className={`fixed inset-0 z-10 md:hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            mobileOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={handleDrawerToggle}
        ></div>

        {/* Drawer Panel */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {drawer}
        </div>
      </div>

      {/* Desktop Drawer */}
      <div className="hidden md:block">
        <div className="w-64 bg-blue-800 text-white p-4 h-full fixed">
          {drawer}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Header */}
        <header className="bg-blue-800 text-white p-4 flex items-center justify-between">
          <button className="text-white md:hidden" onClick={handleDrawerToggle}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="text-xl font-bold">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Link>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          {handleLink === "profilesettings" && <ProfileSettings />}
          {handleLink === "educationsettings" && <EducationSettings />}
          {handleLink === "experiencesettings" && <ExperienceDetails />}
          {handleLink === "certificationsettings" && <CertificationDetails />}
          {handleLink === "tutorleadview" && <TutorLeadView />}
          {handleLink === "changepassword" && <ChangePassword />}
          {handleLink === "allLeads" && <AllLeads />}
          {handleLink === "subscription" && <SubscriptionCards />}
        </main>
      </div>
    </div>
  );
};

export default TutorDashboard;
