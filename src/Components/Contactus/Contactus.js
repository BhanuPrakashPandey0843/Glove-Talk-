import React, { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contactus = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "7a282ada-7399-4bba-8ba9-c67e3db33b05");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        event.target.reset();
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contactus-container relative z-10 bg-white px-4 md:px-8 lg:px-16 py-10">
      <div
        className="grid lg:grid-cols-2 gap-8 md:gap-10 mx-auto max-w-6xl w-full shadow-xl rounded-xl text-[#333] font-[sans-serif]"
        data-aos="fade-up"
      >
        {/* Left Section */}
        <div className="space-y-6 px-6 md:px-10" data-aos="fade-right">
          <h2 className="text-lg md:text-xl font-semibold text-red-500 tracking-wider uppercase">
            Contact Us
          </h2>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight text-gray-800">
            Got a Question? <br />
            <span className="text-red-500">Hit us up.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            For any inquiries or opportunities, contact Beast Boxing to join us
            in shaping the future of boxing and empowering athletes to achieve
            success both in and out of the ring.
          </p>
          {/* Email Section */}
          <div className="mt-6" data-aos="zoom-in">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Email</h2>
            <ul className="flex items-center space-x-4">
              <div className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="#007bff"
                  viewBox="0 0 479.058 479.058"
                >
                  <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                </svg>
              </div>
              <a
                href="mailto:beastboxingofficial@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-[#007bff] hover:underline hover:text-blue-600"
              >
                <strong>Email Us</strong>
              </a>
            </ul>
          </div>
          {/* Social Media Section */}
          <div className="mt-6" data-aos="zoom-in-up">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Follow Us</h2>
            <ul className="flex space-x-4">
              <li className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-200">
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={24} color="#007bff" />
                </a>
              </li>
              <li className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-200">
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} color="#007bff" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Right Section - Form */}
        <div
          className="flex flex-col justify-center px-6 md:px-10"
          data-aos="fade-left"
        >
          <h2 className="text-lg md:text-xl font-semibold text-red-500 tracking-wider uppercase">
            Send a Message
          </h2>
          <form className="space-y-6 mt-4" onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              aria-label="Your Name"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <input
              type="email"
              name="email"
              aria-label="Your Email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <textarea
              rows="4"
              name="message"
              aria-label="Your Message"
              placeholder="Your Message"
              className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <button
              type="submit"
              className="bg-red-500 text-white font-semibold rounded-md py-2 hover:bg-red-600 transition duration-300 w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
