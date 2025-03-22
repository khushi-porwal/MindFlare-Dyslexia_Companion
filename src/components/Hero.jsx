import React from 'react';
import backgroundimage from "../assets/backgroundimage.png";
import Empowering from "../assets/Empowering .png";
import footerbrain from "../assets/footerbrain.png";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-20 py-10">
      <div className="relative w-full max-w-7xl h-[80vh] sm:h-[70vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <img 
          src={backgroundimage} 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
        />

        {/* Rotating Empowering Image with Brain Inside */}
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
          <div className="relative w-[150px] mt-50 sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto animate-spin-custom">
            <img 
              src={Empowering} 
              alt="Empowering" 
              className="w-full h-full object-contain"
            />
            {/* Brain Inside Empowering */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[50px] sm:w-[70px] md:w-[90px] lg:w-[100px] h-auto animate-spin-reverse">
                <img 
                  src={footerbrain} 
                  alt="Brain Icon" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="absolute top-10 sm:top-16 md:top-20 left-6 sm:left-12 md:left-20 lg:left-28 z-10 p-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight tracking-tight">
            DYSLEXIA<br />COMPANION
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg leading-relaxed mt-4">
            Your all-in-one solution for dyslexia – from early screening to personalized improvement strategies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;