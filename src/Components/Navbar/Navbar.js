import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Beast Boxing Logo"
              className="h-16 drop-shadow-lg transform transition-transform hover:rotate-12 hover:scale-110"
            />
            <span className="text-white text-2xl font-bold tracking-wide transform transition-transform hover:scale-110">
              Beast Boxing
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-10 text-base font-medium uppercase tracking-wide text-white">
            {[
              { name: "Home", href: "/home" },
              { name: "About", href: "/about" },
              { name: "Our Team", href: "/our-team" },
              { name: "Gallery", href: "/gallery" },
              { name: "Career", href: "/career" },
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-red-400 transition transform hover:translate-y-1 hover:scale-105 cursor-pointer"
              >
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>

          {/* Contact Us Button */}
          <a
            href="/contact-us"
            className="hidden md:inline-block bg-red-400 hover:bg-red-500 transition px-6 py-3 rounded-lg shadow-lg font-semibold text-base uppercase transform hover:scale-110 text-white"
          >
            Contact Us
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsSideMenuOpen(true)}
              className="text-white text-3xl focus:outline-none"
              aria-label="Open menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

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
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        {/* Side Menu Links */}
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-lg font-medium">
          {[
            { name: "Home", href: "/home" },
            { name: "About", href: "/about" },
            { name: "Our Team", href: "/our-team" },
            { name: "Gallery", href: "/gallery" },
            { name: "Career", href: "/career" },
          ].map((item, index) => (
            <li
              key={index}
              className="hover:text -red-400 transition transform hover:translate-y-1 hover:scale-110 cursor-pointer"
              onClick={() => {
                setIsSideMenuOpen(false);
                window.location.href = item.href; // Navigate to the selected page
              }}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* Side Menu Contact Button */}
        <a
          href="/contact-us"
          className="mt-10 bg-red-400 hover:bg-red-500 transition px-6 py-3 rounded-lg shadow-lg font-semibold text-base uppercase transform hover:scale-110 text-white block mx-auto text-center"
          onClick={() => setIsSideMenuOpen(false)} // Close the menu on click
        >
          Contact Us
        </a>
      </div>
    </>
  );
};

export default Navbar;