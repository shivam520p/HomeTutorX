import React from "react";
import { motion } from "framer-motion";
import TS1 from "../../assets/images/TS1.jpg";
import TS2 from "../../assets/images/TS2.jpg";
import TS3 from "../../assets/images/TS3.jpg";
import TS4 from "../../assets/images/TS4.jpg";

const HowWorks = () => {
  const workData = [
    {
      question: "Student Posts Requirement.",
      answer:
        "Students share their tutor requirements on the HomeTutorX platform.",
      image: TS1,
    },
    {
      question: "Match with Students",
      answer:
        "Based on your expertise, you’ll be matched with students seeking your help.",
      image: TS2,
    },
    {
      question: "Start Teaching",
      answer:
        "Once matched, you can begin offering personalized tutoring sessions, either online or in-person.",
      image: TS3,
    },
    {
      question: "Flexible Scheduling",
      answer: "Set your own hours and teach at your convenience.",
      image: TS4,
    },
  ];

  return (
    <>
      <div className="p-6 container mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-normal text-center mb-6"
        >
          How It Works for Teachers at HomeTutorX
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {workData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-4 shadow-md rounded-lg text-center border flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.question}
                className="w-24 border border-primary rounded-lg"
              />
              <h5 className="font-semibold mt-4">{item.question}</h5>
              <p className="text-gray-600 mt-2 text-sm">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HowWorks;
