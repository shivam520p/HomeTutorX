import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Grid layout for Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">HomeTutorX</h3>
            <p className="text-lg">
              32, Mawai Sector-9 Vijay Nagar Ghaziabad, 201009
              <br />
              43, Karhera Mohan Nagar Ghaziabad, 201007
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start md:items-end justify-start">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/findtutor" className="hover:underline">
                  Find Tutor
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/tutorsection" className="hover:underline">
                  Become a Tutor
                </a>
              </li>
            </ul>
          </div>

          {/* Availability */}
          <div className="flex flex-col items-start lg:items-end justify-start">
            <h3 className="text-xl font-bold mb-4">Availability</h3>
            <ul className="space-y-2">
              <li>
                <a href="/findtutor" className="hover:underline">
                  All Tutors
                </a>
              </li>
              <li>
                <a href="/studymaterials" className="hover:underline">
                  Study Materials
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://prasadmasterclasses.com/"
                  className="hover:underline"
                >
                  Test Series
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start md:items-end justify-start">
            <h3 className="text-xl md:text-3xl font-bold mb-4">Contact Us</h3>

            <ul className="space-y-2 text-lg">
              <li className="flex items-center justify-start gap-2">
                <FaPhoneAlt />
                <a href="tel:+919718601888" className="hover:underline">
                  +91 9718601888
                </a>
              </li>
              <li className="flex items-center justify-start gap-2">
                <FaPhoneAlt />
                <a href="tel:+918882955647" className="hover:underline">
                  +91 8882955647
                </a>
              </li>
              <li className="flex items-center justify-start gap-2">
                <FaPhoneAlt />
                <a href="tel:+919625786155" className="hover:underline">
                  +91 9625786155
                </a>
              </li>
              {/* <li className="flex items-center justify-start gap-2">
              <FaEnvelope />
              <a href="mailto:tutorxhome@gmail.com" className="hover:underline">
                tutorxhome@gmail.com
              </a>
            </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-4 pt-4 text-center">
          <p className="text-lg">
            Copyright © 2024 NeraSoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
