"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Used only for internal navigation
import reading from "../assets/reading.png";
import writtingassistant from "../assets/writtingassistant.png";
import memorysequence from "../assets/memorysequence.png";

function ChallengesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const challenges = [
    {
      title: "READING ASSISTANT",
      image: reading,
      link: "https://docs.google.com/document/d/1SY8ar7OoFWa08ZatbHbCekzSmVhOsw-b/edit?usp=drivesdk&ouid=114926821838661693647&rtpof=true&sd=true", // External link
    },
    {
      title: "WRITING ASSISTANT",
      image: writtingassistant,
      link: "https://docs.google.com/document/d/1T-lZ9GNoYJO-FQpZapsHVBA6zGmpwB37/edit?tab=t.0", // External link
    },
    {
      title: "SEQUENCING ASSISTANT",
      image: memorysequence,
      link: "https://docs.google.com/document/d/1T7zZ1jErHnfExMCNkC6qJVo9qWkPz7MG/edit?tab=t.0", // External link
    },
  ];

  return (
    <div id="solutions" className="py-16 px-4 bg-white">
      <h2 className="text-4xl font-bold font-poppins text-center mb-12">OUR CHALLENGES</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            className="relative bg-black text-white rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer"
            initial={{ y: 0 }}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2 },
            }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            style={{
              minHeight: "250px",
              transition: "all 0.3s ease",
            }}
          >
            <img src={challenge.image} alt={challenge.title} className="w-35 h-35 mx-auto mb-4" />
            <h3 className="text-xl font-bold">{challenge.title}</h3>

            {hoveredCard === index && (
              <motion.div
                className="absolute inset-0 bg-gray-800 bg-opacity-50 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <a href={challenge.link} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="px-6 py-2 bg-white text-black rounded-md font-medium"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Learn More
                  </motion.button>
                </a>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Internal Navigation to Solutions */}
      <div className="flex justify-center mt-12">
        <Link to="/solution">
          <motion.button
            className="px-10 py-3 border-2 border-black rounded-full text-black font-bold text-lg relative overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="relative z-10">SOLUTION</span>
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <ChallengesSection />
    </div>
  );
}
