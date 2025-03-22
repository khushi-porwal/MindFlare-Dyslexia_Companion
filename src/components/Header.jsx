import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Aliased Link for scrolling
import { Link as RouterLink } from "react-router-dom"; // Aliased Link for routing
import { Menu, X } from "lucide-react"; // Icons for the mobile menu toggle
import logo from "../assets/logo.png"; // Ensure the path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4 px-10 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Dyslexia Companion Logo" className="h-20" />
      </div>

      {/* Hamburger Menu Button (visible on small screens) */}
      <button 
        className="md:hidden text-black" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Links */}
      <ul className={`md:flex space-x-8 text-black font-medium absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex-col md:flex-row items-center transition-all duration-300 ease-in-out ${isOpen ? "flex" : "hidden"}`}>
        <li className="hover:underline cursor-pointer py-2 md:py-0">
          <ScrollLink to="Hero" smooth={true} duration={500} onClick={() => setIsOpen(false)}>HOME</ScrollLink>
        </li>
        <li className="hover:underline cursor-pointer py-2 md:py-0">
          <ScrollLink to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>ABOUT US</ScrollLink>
        </li>
        <li className="hover:underline cursor-pointer py-2 md:py-0">
          <a href="https://docs.google.com/document/d/1ijhhN9_phiAl7H8zVpNv8KZh6uON0SPdgfHStC9Llg4/edit?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>RESEARCH</a>
        </li>
        <li className="hover:underline cursor-pointer py-2 md:py-0">
          <ScrollLink to="solutions" smooth={true} duration={500} onClick={() => setIsOpen(false)}>SOLUTIONS</ScrollLink>
        </li>
        <li className="hover:underline cursor-pointer py-2 md:py-0">
          <RouterLink to="/SecondContact" onClick={() => setIsOpen(false)}>CONTACT US</RouterLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
