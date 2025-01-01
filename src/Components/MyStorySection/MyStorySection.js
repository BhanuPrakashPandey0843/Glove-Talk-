import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import myImage from '../../assets/images/MYSTORY.gif';

const MyStorySection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 200, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-100 p-8 space-y-8 md:space-y-0 md:space-x-8">
      
      <div
        className="md:w-1/2 w-full flex justify-center md:justify-start"
        data-aos="fade-left" 
      >
       <img
      src={myImage}
      alt="My Story"
      className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
    />
      </div>

      {/* Text Section */}
      <div
        className="md:w-1/2 w-full text-center md:text-left"
        data-aos="fade-right" 
      >
        {/* Red Line */}
        <div
          className="border-t-4 border-red-500 w-16 mb-4 mx-auto md:mx-0"
          data-aos="zoom-in" 
        ></div>

        {/* Heading */}
        <h2
          className="text-black text-4xl font-bold mb-4"
          data-aos="fade-down" 
        >
          MY STORY
        </h2>

        {/* Subheading */}
        <h3
          className="text-gray-800 text-2xl font-medium mb-4"
          data-aos="fade-up" 
        >
          How We Started Our Business
        </h3>

        {/* Description */}
        <p
          className="text-gray-600 mb-6 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200" 
        >
          Our journey began with a simple idea and a lot of passion. From humble
          beginnings to where we are today, every step has been fueled by
          determination and innovation. Discover how we transformed our vision
          into reality. Beast Boxing is driven to uplift the sport by providing platforms for talented professional boxers to shine on a national and international level. Our aim is to create not just world-class athletes but also a path for them to achieve financial success through their craft. We ensure that our fighters are trained rigorously, compete in top-tier tournaments, and have the opportunity to earn lucrative incomes through their performances.<br />
          Our mission is to ensure that professional boxers receive the best
          training, guidance, and exposure, enabling them to excel in the sport
          and build successful careers. We work closely with sponsors, trainers,
          and boxing organizations to create a roadmap for our athletes that
          leads not only to victory but also to financial independence. Beast
          Boxing is committed to pushing the boundaries of what’s possible in
          the world of boxing, turning raw talent into global superstars.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate('/about-us')}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transform hover:translate-y-[-2px] transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          About Us
        </button>
      </div>
    </div>
  );
};

export default MyStorySection;
