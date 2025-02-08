import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPen,
  faSignOutAlt,
  faCaretDown,
  faCaretRight,
  faList,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import AllStudent from "./Users/AllStudent";
import AllTutor from "./Users/AllTutor";
import AllSubjects from "./Courses/AllSubjects";
import AllClasses from "./Courses/AllClasses";
import AllLanguage from "./Courses/AllLanguage";
import WriteContent from "./WriteContent";
import ContactForm from "./Users/ContactForm";
import AllLeads from "./Users/AllLeads";
import Subscription from "./Subscription";
import PlanInformation from "./PlanInformation";
import UploadFiles from "./Users/UploadFiles";
import StudySection1 from "../../components/studymaterials/StudySection1";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";
import AddMedia from "./Users/AddMedia";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { handleLink, setHandleLink } = useContext(AdminContext);
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState(null);
  const toggleSection = (section) => {
    setExpandedItems((prevState) => (prevState === section ? null : section));
  };

  const menuItems = [
    {
      title: "Inquiries",
      icon: faList,
      handleLink: "contactForm",
    },
    {
      title: "Lead Management",
      icon: faList,
      subItems: [
        { title: "All Lead", handleLink: "allLeads" },
        // { title: "Create Lead", handleLink: "allLeads" },
      ],
      sectionKey: "leadManagement",
    },
    {
      title: "Subscription",
      icon: faList,
      subItems: [
        { title: "Subscription Plans", handleLink: "subscription" },
        { title: "Subscription Info", handleLink: "planInformation" },
      ],
      sectionKey: "subscription",
    },
    {
      title: "Users",
      icon: faList,
      subItems: [
        { title: "All Student", handleLink: "allstudents" },
        { title: "All Tutor", handleLink: "alltutors" },
      ],
      sectionKey: "users",
    },
    {
      title: "All Subject",
      icon: faList,
      subItems: [
        { title: "All Subject", handleLink: "allsubjects" },
        { title: "All Classes", handleLink: "allclasses" },
        { title: "All Language", handleLink: "alllanguages" },
      ],
      sectionKey: "courses",
    },
    {
      title: "Study Materials",
      icon: faList,
      subItems: [
        { title: "Uploaded Material", handleLink: "uploadedmaterials" },
        { title: "Upload Material", handleLink: "studyMaterials" },
        { title: "Add Media", handleLink: "addmedia" },
      ],
      sectionKey: "studyMaterials",
    },
    {
      title: "Write Content",
      icon: faPen,
      handleLink: "writeContent",
    },
  ];

  const drawer = (
    <div className="flex flex-col max-h-screen">
      <div className="py-2 text-2xl font-bold px-3 md:px-0">Admin Panel</div>
      <ul className="space-y-2 py-5 cursor-pointer">
        {menuItems.map((item, index) => (
          <li key={index}>
            <div
              className="flex items-center p-2 hover:bg-white hover:text-black rounded-md cursor-pointer"
              onClick={() =>
                item.subItems
                  ? toggleSection(item.sectionKey)
                  : (setHandleLink(item.handleLink), setMobileOpen(false))
              }
            >
              <FontAwesomeIcon icon={item.icon || faList} className="mr-3" />
              <span>{item.title}</span>
              {item.subItems && (
                <FontAwesomeIcon
                  icon={
                    expandedItems === item.sectionKey
                      ? faCaretDown
                      : faCaretRight
                  }
                  className="ml-auto"
                />
              )}
            </div>

            {item.subItems && expandedItems === item.sectionKey && (
              <ul className="pl-8 space-y-2">
                {item.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="flex items-center p-2 hover:bg-white hover:text-black rounded-md"
                    onClick={() => {
                      setHandleLink(subItem.handleLink);
                      setMobileOpen(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faList} className="mr-3" />
                    <span>{subItem.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="-mt-3">
        <ul>
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
    <div className="flex h-screen w-full ">
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
          onClick={() => setMobileOpen(false)}
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
      <div className="flex-1 flex flex-col md:ml-64 ">
        {/* Header */}
        <header className="bg-blue-800 text-white p-4 flex items-center justify-between">
          <button
            className="text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
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
        <main>
          {handleLink === "addmedia" && <AddMedia />}
          {handleLink === "contactForm" && <ContactForm />}
          {handleLink === "allLeads" && <AllLeads />}
          {handleLink === "subscription" && <Subscription />}
          {handleLink === "planInformation" && <PlanInformation />}
          {handleLink === "allstudents" && <AllStudent />}
          {handleLink === "alltutors" && <AllTutor />}
          {handleLink === "allsubjects" && <AllSubjects />}
          {handleLink === "allclasses" && <AllClasses />}
          {handleLink === "alllanguages" && <AllLanguage />}
          {handleLink === "uploadedmaterials" && <StudySection1 />}
          {handleLink === "studyMaterials" && <UploadFiles />}
          {handleLink === "writeContent" && <WriteContent />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
