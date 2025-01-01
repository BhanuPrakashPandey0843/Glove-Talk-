import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="./hero-bg.jpg" // Replace with your hero background image
          alt="Hero Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl lg:text-6xl font-bold">
            Championing Fighters, <br />
            <span className="text-red-600">Building Legends Worldwide.</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl leading-relaxed">
            Join us on a journey to train and promote the next generation of
            boxing champions.
          </p>
          <a
            href="/"
            className="mt-8 inline-block bg-red-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;