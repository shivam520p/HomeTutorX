import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TutorSlider = () => {
  const slidersData = [
    { id: 1, name: "Room A", image: "image1.jpg", text: "Cozy room with a great view." },
    { id: 2, name: "Room B", image: "image2.jpg", text: "Spacious room with modern amenities." },
    { id: 3, name: "Room C", image: "image3.jpg", text: "Affordable room for students." },
    { id: 4, name: "Room D", image: "image1.jpg", text: "Cozy room with a great view." },
    { id: 5, name: "Room E", image: "image2.jpg", text: "Spacious room with modern amenities." },
    { id: 6, name: "Room F", image: "image3.jpg", text: "Affordable room for students." },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidersData.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [slidersData.length]);

  const visibleSlides = [
    slidersData[currentSlide % slidersData.length],
    slidersData[(currentSlide + 1) % slidersData.length],
    slidersData[(currentSlide + 2) % slidersData.length],
  ];

  return (
    <div className="container mx-auto relative px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleSlides.map((slider, index) => (
          <motion.a
            key={slider.id}
            className={`roomCard border border-gray-300 rounded-lg shadow-md cursor-pointer p-2`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: index === 1 ? 1 : 0.2,
              scale: index === 1 ? 1 : 0.95,
              y: 0
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="rounded-xl relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img
                src={slider.image}
                alt={slider.name}
                className="w-full h-48 object-cover rounded-xl"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.div 
              className="text-sm mt-2 flex justify-between items-center"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-semibold block">{slider.name}</span>
            </motion.div>
            <motion.div 
              className="text-sm text-lighttext"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p>{slider.text}</p>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default TutorSlider;
