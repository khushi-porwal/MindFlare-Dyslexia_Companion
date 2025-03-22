import React from "react";
import { Link } from "react-router-dom";
import about from "../assets/about.png";

export default function DyslexiaCompanion() {
  return (
    <div className="p-6 md:p-12 mt-10 bg-white text-gray-900 flex flex-col md:flex-row gap-10">
      <div id="about" className="flex-1">
        <h2 className="text-green-700 font-semibold text-lg uppercase">ABOUT DYSLEXIA COMPANION</h2>
        <h1 className="text-2xl md:text-3xl font-bold mt-2">
          Your <span className="text-black">Trusted</span> Partner in Overcoming <span className="text-black">Dyslexia</span>
        </h1>
        <p className="text-gray-700 mt-4 max-w-2xl">
          At Dyslexia Companion, we’re more than just a tool—we’re your partner in transforming learning.
          Our mission is to empower individuals with dyslexia through innovative screening, personalized
          interventions, and tech-driven support to enhance reading, writing, and comprehension.
        </p>

        <button className="mt-6 px-6 py-3 border border-gray-900 rounded-full text-gray-900 hover:bg-green-600 hover:text-white transition duration-200">
          <Link to="/quiz">Take Assessment</Link>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-black text-white p-6 rounded-lg w-70 h-80 transform transition duration-300 hover:scale-105 hover:bg-black-900">
          <div className="flex justify-center">
            <img src={about} alt="Icon" className="w-24 h-20" />
          </div>
          <h3 className="text-lg font-semibold mt-10 text-center">Precision & Accessibility</h3>
          <p className="text-gray-400 mt-2 text-center">
            AI-powered screening and adaptive learning strategies tailored to individual needs.
          </p>
        </div>

        <div className="bg-black text-white p-6 rounded-lg w-70 h-80 transform transition duration-300 hover:scale-105 hover:bg-black-900">
          <div className="flex justify-center">
            <img src={about} alt="Icon" className="w-24 h-20" />
          </div>
          <h3 className="text-lg font-semibold mt-10 text-center">Commitment to Growth</h3>
          <p className="text-gray-400 mt-2 text-center">
            A comprehensive approach that supports lifelong learning and skill development.
          </p>
        </div>
      </div>
    </div>
  );
}
