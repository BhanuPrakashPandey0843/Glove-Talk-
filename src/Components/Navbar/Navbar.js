// Navbar.jsx
import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 shadow-lg backdrop-filter \
      ${isScrolled ? "bg-black/70 backdrop-blur-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center transform transition-transform hover:scale-110">
          <img
            src="../assets/logo.png" // Replace with your logo URL
            alt="Beast Boxing Logo"
            className="h-12 drop-shadow-lg"
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wider text-white">
          {[
            "Home",
            "About",
            "Our Team",
            "Gallery",
            "Career",
          ].map((item, index) => (
            <li
              key={index}
              className="hover:text-red-500 transition hover:scale-105 transform cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Contact Us Button */}
        <a
          href="/"
          className="hidden md:inline-block bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-full shadow-lg font-semibold text-sm uppercase transform hover:scale-105 text-white"
        >
          Contact Us
        </a>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white text-2xl transform transition-transform hover:rotate-90">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
