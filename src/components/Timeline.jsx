import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    title: "Registration",
  },
  {
    title: "Form Assessment",
  },
  {
    title: "Analysis and Screening",
  },
  {
    title: "Solutions",
  },
  {
    title: "Games",
  },
  {
    title: "Practices",
  },
];

const Timeline = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 relative overflow-hidden">
      <motion.h2 
        className="text-center text-6xl mt-6 font-bold font-poppins mb-6 no-underline"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Timeline
      </motion.h2>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-black h-full"></div>
      {events.map((event, idx) => (
        <div 
          key={idx} 
          className={`flex flex-col sm:flex-row items-center w-full mb-6 relative ${idx % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
        >
          <div className="w-full sm:w-1/2 p-4 text-center">
            <motion.div 
              className="bg-white p-4 shadow-lg rounded-lg w-full max-w-xs sm:max-w-md transition-transform transform hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >                  
              <h3 className="text-lg font-semibold no-underline">{event.title}</h3>
            </motion.div>
          </div>
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-black rounded-full border-4 border-white"
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
