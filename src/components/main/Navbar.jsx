import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/hometutorx.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const token = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Find Tutor", path: "/findtutor" },
    { title: "About", path: "/about" },
    { title: "Become a Tutor", path: "/tutorsection" },
    { title: "Study Material", path: "/studymaterials" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              src={Logo}
              alt="Home Tutor Logo"
              className="w-52 h-auto ml-0 md:ml-6" // Adjusted for responsiveness
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            <ul className="flex items-center space-x-4 xl:space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-semibold text-sm xl:text-lg hover:text-blue-600 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Sign In Button */}
            <Link
              to={`${
                token
                  ? userData?.role === "1"
                    ? "/studentdashboard"
                    : userData?.role === "2"
                    ? "/tutordashboard"
                    : "/dashboard"
                  : "/login"
              }`}
              className="px-4 sm:px-6 py-2 bg-blue-600 text-white text-sm xl:text-base rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              {`${
                userData !== null
                  ? userData?.role === "3"
                    ? "Admin"
                    : userData.fullName
                  : "Get Started"
              }`}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white mobile-menu-container">
            <div className="flex flex-col">
              <div className="flex justify-between items-center px-4 py-3 border-b">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <img src={Logo} alt="Logo" className="w-52" />
                </Link>
                <button
                  className="p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <ul className="px-4 py-2">
                  {navLinks.map((link) => (
                    <li key={link.path} className="border-b">
                      <Link
                        to={link.path}
                        className="block py-3 sm:py-4 text-sm sm:text-base hover:text-blue-600 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4">
                <Link
                  to={`${
                    token
                      ? userData?.role === "1"
                        ? "/studentdashboard"
                        : userData?.role === "2"
                        ? "/tutordashboard"
                        : "/dashboard"
                      : "/login"
                  }`}
                  className="block w-full py-2 sm:py-3 text-center bg-blue-600 text-white text-sm sm:text-base rounded-full hover:bg-blue-700 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {`${
                    userData !== null
                      ? userData?.role === "3"
                        ? "Admin"
                        : userData.fullName
                      : "Get Started"
                  }`}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
