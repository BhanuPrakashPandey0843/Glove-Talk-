import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyStorySection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-100 p-8 space-y-8 md:space-y-0 md:space-x-8">
      {/* Image Section */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-start">
        <img
          src="https://via.placeholder.com/500" // Replace with your image URL
          alt="My Story"
          className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        {/* Red Line */}
        <div className="border-t-4 border-red-500 w-16 mb-4 mx-auto md:mx-0"></div>

        {/* Heading */}
        <h2 className="text-black text-4xl font-bold mb-4">MY STORY</h2>

        {/* Subheading */}
        <h3 className="text-gray-800 text-2xl font-medium mb-4">
          How We Started Our Business
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Our journey began with a simple idea and a lot of passion. From humble
          beginnings to where we are today, every step has been fueled by
          determination and innovation. Discover how we transformed our vision
          into reality.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate('/about-us')}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transform hover:translate-y-[-2px] transition-all duration-300"
        >
          About Us
        </button>
      </div>
    </div>
  );
};

export default MyStorySection;
