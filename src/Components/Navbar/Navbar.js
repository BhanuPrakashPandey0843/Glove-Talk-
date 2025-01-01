// Navbar.jsx
import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import logo from "../../assets/images/logo.png"; // Import local logo image

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
      ${isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo} // Using local logo image
            alt="Beast Boxing Logo"
            className="h-16 drop-shadow-lg transform transition-transform hover:rotate-12 hover:scale-110"
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-10 text-base font-medium uppercase tracking-wide text-white ml-auto">
          {[
            "Home",
            "About",
            "Our Team",
            "Gallery",
            "Career",
          ].map((item, index) => (
            <li
              key={index}
              className="hover:text-red-500 transition transform hover:translate-y-1 hover:scale-105 hover:rotate-3 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Contact Us Button */}
        <a
          href="/"
          className="hidden md:inline-block bg-red-500 hover:bg-red-600 transition px-6 py-3 ml-6 rounded-lg shadow-lg font-semibold text-base uppercase transform hover:scale-110 hover:rotate-2 text-white"
        >
          Contact Us
        </a>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white text-2xl transform transition-transform hover:rotate-90 hover:scale-110">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
