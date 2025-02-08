import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is hometutorx.com? ",
      answer:
        "HomeTutorX is an educational platform dedicated to connecting tutors with students in need of personalized home tuition. We provide teaching opportunities and job vacancies for those interested in offering home tuition, while also meeting the demand for skilled tutors to help students succeed academically.",
      isOpen: false,
    },
    {
      question: "How Does it Work? ",
      answer:
        "Tutors register on HomeTutorX, and after completing the verification process, we connect them with students who need tutoring. Once matched, we share the contact details of the students with the tutors, allowing them to communicate directly and begin teaching.",
      isOpen: false,
    },
    {
      question: "What are the charges we need to pay?",
      answer:
        "HomeTutorX is completely free for students. They just need to sign up and fill in their details to help us find suitable tutors in their locality. For tutors, a membership plan is required to access our services and connect with students. ",
      isOpen: false,
    },
    {
      question: "In which cities is HomeTutorX available? ",
      answer:
        "HomeTutorX provides home tuition services in Delhi, NCR, Mumbai, Hyderabad, Jaipur, and Ahmedabad. Our online classes are available across all of India, ensuring that quality education is accessible to students from every corner of the country.",
      isOpen: false,
    },
    {
      question: "How can I start earning?",
      answer:
        "To start earning, simply register as a tutor on HomeTutorX. We will match you with parents seeking home tuition for their children, allowing you to offer your teaching services and begin earning income.",
      isOpen: false,
    },
    {
      question: "What documents are needed for verification? ",
      answer:
        "To complete the verification process, tutors are required to upload the following documents: || A clear photo of themselves || Academic certificates || Proof of residency || Aadhar Card || These documents help us ensure the authenticity and reliability of the tutors on our platform.",
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 flex flex-col items-center bg-blue-50 px-4 sm:px-8"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-normal pb-8 text-center"
      >
        FAQ - Home Tuition
      </motion.h1>

      <div className="w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`border-2 rounded-lg overflow-hidden shadow-md ${
                faq.isOpen ? "bg-blue-100" : "hover:bg-blue-50"
              }`}
            >
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex justify-between items-center px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white w-full"
                onClick={() => toggleFAQ(index)}
                aria-expanded={faq.isOpen}
                aria-controls={`faq-${index}`}
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: faq.isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {faq.isOpen ? (
                    <MinusIcon className="w-6 h-6 text-purple-600" />
                  ) : (
                    <PlusIcon className="w-6 h-6 text-purple-600" />
                  )}
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {faq.isOpen && (
                  <motion.div
                    id={`faq-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-gray-50 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
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

export default FAQ;
