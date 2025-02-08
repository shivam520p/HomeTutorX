import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";

const Frequently = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is HomeTutorX? ",
      answer:
        "HomeTutorX is a platform designed to bridge the gap between students and qualified tutors seeking home tuition opportunities. It offers an excellent opportunity for individuals to earn part-time income by sharing their knowledge through personalized tutoring sessions. HomeTutorX is operated by|| Prasad Master Classes ||, a trusted name in education. ",
      isOpen: false,
    },
    {
      question: "What is the process to enroll as a tutor at HomeTutorX?",
      answer:
        "Sign Up on it. Create your Profile for Verification. Connect with Students and Receive Notifications Begin Teaching. Enroll today and start making a difference as a tutor at HomeTutorX!",
      isOpen: false,
    },
    {
      question: "What are the pricing for this Service?",
      answer:
        "At HomeTutorX, we offer flexible membership plans that allow you to view student contact details and connect with them directly. We do not charge any commission from teachers. You can start with our free plan and explore the platform. Upgrade to a membership plan as you grow your teaching network.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : faq.isOpen,
      }))
    );
  };

  return (
    <div className="py-12 flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl"
      >
        <h1 className="text-3xl font-normal pb-8 text-center">Frequently Asked Questions</h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`border-2 rounded-lg overflow-hidden shadow-md ${
                faq.isOpen ? "bg-blue-100" : "hover:bg-blue-50"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                className="flex justify-between items-center px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white w-full"
                onClick={() => toggleFAQ(index)}
                aria-expanded={faq.isOpen}
                aria-controls={`faq-${index}`}
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                <span
                  className={`transform transition-transform duration-200 flex items-center justify-center ${
                    faq.isOpen ? "rotate-180" : ""
                  }`}
                >
                  {faq.isOpen ? (
                    <MinusIcon className="w-6 h-6 text-purple-600" />
                  ) : (
                    <PlusIcon className="w-6 h-6 text-purple-600" />
                  )}
                </span>
              </button>
              {faq.isOpen && (
                <div
                  id={`faq-${index}`}
                  className="px-6 py-4 bg-gray-50 text-gray-600"
                >
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const PlusIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
);

const MinusIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 12H4"
    />
  </svg>
);

export default Frequently;
