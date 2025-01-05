import React from 'react';
import './HelpSection.css'; // Include custom CSS for animations

const TeamBut = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center bg-green-50 p-8 lg:p-16 overflow-hidden">
      {/* Text Content with Fade-in Animation */}
      <div className="max-w-lg text-center lg:text-left animate-fadeInUp">
        <h2 className="text-3xl lg:text-5xl font-bold">
          <span className="text-red-400">Transform your power and skill at Beast Boxing – where champions are made!</span> 
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Unleash your potential and train like a champion with Beast Boxing – where strength meets discipline and goals turn into achievements!
        </p>
        <button className="mt-6 bg-red-400 text-white py-3 px-6 rounded-full shadow-lg hover:bg-red-500 transform hover:scale-110 transition duration-300 ease-in-out">
          Learn more
        </button>
      </div>

      {/* Illustration with Bounce Animation */}
      <div className="mt-8 lg:mt-0 flex justify-center animate-bounceSlow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-40 h-40 lg:w-56 lg:h-56"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="30" cy="50" r="15" fill="#f87171" />
          <circle cx="70" cy="50" r="15" fill="#f87171" />
          <rect x="30" y="47" width="40" height="6" fill="#fecaca" />
        </svg>
      </div>
    </section>
  );
};

export default TeamBut;
