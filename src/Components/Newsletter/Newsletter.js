import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import newsletter from './newsletter.png';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out', // Easing function
      once: true, // Only animate once
    });
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your subscription logic here
    setSubscriptionStatus('Subscribed successfully!');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div
        className="w-full sm:w-96 md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto flex flex-col justify-center items-center px-8 text-center rounded-2xl shadow-xl transition-transform transform hover:scale-105"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center">
          <img
            src={newsletter}
            alt="Email Icon"
            className="w-32 h-32 mb-6 transition-transform transform hover:scale-110"
            data-aos="zoom-in"
          />
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4"
            data-aos="fade-right"
          >
            Join Our Community!
          </h2>
          <p
            className="text-gray-700 mb-8 text-base sm:text-lg lg:text-xl leading-relaxed"
            data-aos="fade-left"
          >
            Join our community at Beast Boxing Community.
          </p>
          <form onSubmit={handleSubscribe} className="w-full">
            <div
              className="w-full max-w-md flex flex-col sm:flex-row mx-auto"
              data-aos="flip-up"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg sm:rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 mb-4 sm:mb-0"
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-3 rounded-lg sm:rounded-r-lg hover:bg-red-600 transition duration-300"
              >
                Subscribe
              </button>
            </div>
            {subscriptionStatus && (
              <p className="text-green-500 mt-4">{subscriptionStatus}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
