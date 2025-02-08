import { motion } from "framer-motion";
import { useState } from "react";
import Testimonial1 from "../../assets/images/testimonial-img1.png";
import Testimonial2 from "../../assets/images/testimonial-img2.png";

const Features6 = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      image: Testimonial1,
      text: "Signing up for courses at EduAll was quite possibly of the best choice I've made for my vocation. The adaptability of the internet learning stage permitted me to learn at my own speed while adjusting my work",
      author: "John Doe",
      role: "UX/UI Designer",
      rating: 4.5,
    },
    {
      image: Testimonial2,
      text: "Signing up for courses at EduAll was quite possibly of the best choice I've made for my vocation. The adaptability of the internet learning stage permitted me to learn at my own speed while adjusting my work",
      author: "Hye Doe",
      role: "Developer",
      rating: 4.5,
    },
    // Add more testimonials here
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-5 sm:my-10 py-8 sm:py-16 px-4 bg-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 items-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <motion.div
              key={currentTestimonial}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full h-full rounded-lg overflow-hidden"
            >
              <motion.img
                src={testimonials[currentTestimonial].image}
                alt="Students studying"
                className="w-full h-auto object-cover"
                whileHover={{ filter: "brightness(1.1)" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 px-2 sm:px-4"
          >
            <motion.div 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-blue-600 mb-2 text-base sm:text-lg font-semibold"
            >
              What Our Students Say
            </motion.div>
            <motion.h2 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            >
              Testimonials from Happy Learners for EduAll
            </motion.h2>
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="text-gray-600 mb-4 text-base sm:text-lg"
            >
              16+ million Students are already learning on EduAll Platform
            </motion.p>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="flex gap-1 text-yellow-400 mb-4"
            >
              {[...Array(5)].map((_, index) => (
                <motion.span 
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  ⭐
                </motion.span>
              ))}
            </motion.div>
            <motion.blockquote 
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-base sm:text-lg mb-6"
            >
              {testimonials[currentTestimonial].text}
            </motion.blockquote>
            <motion.div 
              className="font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {testimonials[currentTestimonial].author}
            </motion.div>
            <motion.div 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {testimonials[currentTestimonial].role}
            </motion.div>

            <motion.div 
              className="flex gap-4 mt-6 sm:mt-8 justify-center md:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )
                }
                className="p-2 rounded-full border hover:bg-gray-100"
              >
                ←
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev === testimonials.length - 1 ? 0 : prev + 1
                  )
                }
                className="p-2 rounded-full border hover:bg-gray-100"
              >
                →
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Features6;