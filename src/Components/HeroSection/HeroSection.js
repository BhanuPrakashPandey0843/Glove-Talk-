import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://wallpaperaccess.com/full/113299.jpg" 
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
          <h1 className="text-3xl lg:text-5xl font-bold">
            Championing Fighters, <br />
            <span className="text-red-600">Building Legends Worldwide.</span>
          </h1>
          <p className="mt-4 text-base lg:text-lg leading-relaxed">
            Join us on a journey to train and promote the next generation of
            boxing champions.
          </p>
          <a
            href="/"
            className="mt-6 inline-block bg-red-600 px-5 py-2 rounded-md text-base font-medium hover:bg-red-700 transition"
          >
            Get Started
          </a>
        </motion.div>
      </div>

      {/* Slanted Base */}
      <div className="absolute bottom-0 w-full h-20 bg-black">
        <div
          className="w-full h-full bg-white"
          style={{
            clipPath: "polygon(0 100%, 100% 2%, 100% 100%)", 
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
