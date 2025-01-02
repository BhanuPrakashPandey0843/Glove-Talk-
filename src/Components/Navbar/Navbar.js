import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import logo from "../../assets/images/logo.png"; // Replace with your logo path

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 shadow-lg ${
        isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Beast Boxing Logo"
            className="h-16 drop-shadow-lg transform transition-transform hover:rotate-12 hover:scale-110"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-base font-medium uppercase tracking-wide text-white">
          {["Home", "About", "Our Team", "Gallery", "Career"].map((item, index) => (
            <li
              key={index}
              className="hover:text-red-500 transition transform hover:translate-y-1 hover:scale-105 cursor-pointer"
            >
              <Link to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>{item}</Link>
            </li>
          ))}
        </ul>

        {/* Contact Us Button */}
        <Link
          to="/contact-us"
          className="hidden md:inline-block bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-lg shadow-lg font-semibold text-base uppercase transform hover:scale-110 text-white"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsSideMenuOpen(true)}
            className="text-white text-3xl focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Side Navbar */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-black text-white z-50 transform transition-transform duration-300 shadow-lg ${
          isSideMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSideMenuOpen(false)}
          className="absolute top-5 right-5 text-3xl text-white"
        >
          <FaTimes />
        </button>

        {/* Side Menu Links */}
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-lg font-medium">
          {["Home", "About", "Our Team", "Gallery", "Career"].map((item, index) => (
            <li
              key={index}
              className="hover:text-red-500 transition transform hover:translate-y-1 hover:scale-110 cursor-pointer"
              onClick={() => setIsSideMenuOpen(false)}
            >
              <Link to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>{item}</Link>
            </li>
          ))}
        </ul>

        {/* Side Menu Contact Button */}
        <Link
          to="/contact-us"
          className="mt-10 bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-lg shadow-lg font-semibold text-base uppercase transform hover:scale-110 text-white block mx-auto text-center"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
