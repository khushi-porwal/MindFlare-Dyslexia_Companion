import React from "react";
import { motion } from "framer-motion";
import { Asterisk, Linkedin } from "lucide-react";
import sujal from "../assets/sujal.jpg";
import khushi from "../assets/khushi.jpg";
import aditi from "../assets/aditi.jpg";
import satyam from "../assets/satyam.jpg";

function App() {
  const teamMembers = [
    {
      name: "Sujal Sharma",
      role: "Backend &M.D",
      image: sujal,
      linkdin: "https://www.linkedin.com/in/sujal-sharma-742673207/"
    },
    {
      name: "Khushi Porwal",
      role: "Fronted & API",
      image: khushi,
      linkdin: "https://www.linkedin.com/in/khushi-porwal-5531b2286/"
    },
    {
      name: "Aditi Mishra",
      role: "Fronted & API",
      image: aditi,
      linkdin: "https://www.linkedin.com/in/aditi-mishra-a441a12a6/"
    },
    {
      name: "Satyam Yadav",
      role: "Backend &M.D",
      image: satyam,
      linkdin: "https://www.linkedin.com/in/satyyamyadav?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
    },
  ];

  const lineVariants = {
    hidden: { width: "0%" },
    visible: { width: "100%", transition: { duration: 5} }, // Increased duration to 2 seconds
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-20">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Your Dedicated<br />
              Dyslexia Support Team
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-8 md:mb-12">
              Our team of experts is dedicated to transforming the learning
              journey for individuals with dyslexia. With a blend of technology,
              research, and personalized strategies, we empower learners to
              enhance their reading, writing, and comprehension skills
              effectively.
            </p>

            {/* Animated Lines */}
            <div className="space-y-6 md:space-y-8">
              {[
                "AI-Powered Dyslexia Screening",
                "Personalized Learning Programs",
                "Assistive Technology Solutions",
              ].map((text, index) => (
                <div
                  key={index}
                  className="group relative pb-3 text-lg sm:text-xl cursor-pointer"
                >
                  <span className="transition-colors duration-300 group-hover:text-blue-600">
                    {text}
                  </span>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={lineVariants}
                    className="absolute bottom-0 left-0 h-[3px] bg-black group-hover:bg-blue-600"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-[280px] h-[340px] sm:w-[400px] sm:h-[480px] md:w-[500px] md:h-[600px]">
              <div className="absolute inset-0 bg-gray-100 rounded-[150px] sm:rounded-[200px] md:rounded-[300px] transform -rotate-6"></div>
              <div className="absolute inset-0 overflow-hidden rounded-[150px] sm:rounded-[200px] md:rounded-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                  alt="Student studying"
                  className="w-full h-full object-cover transform rotate-6"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 md:-bottom-8 md:-left-8">
                <Asterisk className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-black animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="rounded-3xl overflow-hidden mb-4 transition-transform duration-500 hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
              </div>
              <div className="flex items-center justify-center gap-2">
                <a 
                  href={member.linkdin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 group-hover:text-blue-600"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <h3 className="font-semibold text-base sm:text-lg transition-colors duration-300 group-hover:text-blue-600">
                  {member.name}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
