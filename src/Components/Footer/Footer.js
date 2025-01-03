import { FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          } else {
            entry.target.classList.remove("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Slanted Top Background */}
      <div className="absolute top-0 w-full h-24 bg-black">
        <div
          className="w-full h-full bg-white"
          style={{
            clipPath: "polygon(0 0, 0 100%, 100% 0)",
          }}
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 py-16">
        {/* Header Section */}
        <div className="text-center mb-12 px-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-2xl md:text-4xl font-bold tracking-wide mb-6">
            READY TO ELEVATE YOUR BOXING PROMOTION <br />
            TO THE NEXT LEVEL?{" "}
            <span className="text-red-500 underline cursor-pointer">
              LET'S CONNECT!
            </span>
          </h2>
          <div className="flex justify-center items-center space-x-3">
            <FaEnvelope className="text-red-500 text-4xl" />
            <a
              href="mailto:beastboxingofficial@gmail.com"
              className="font-medium text-xl underline"
            >
              beastboxingofficial@gmail.com
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
          {/* Pages */}
          <div className="space-y-5 text-center md:text-left">
            <h3 className="font-bold text-lg uppercase text-red-500">Pages</h3>
            <ul className="space-y-2">
              {["Home", "About", "Our Team", "Career"].map((page) => (
                <li
                  key={page}
                  className="hover:text-red-500 transition cursor-pointer"
                >
                  {page}
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do */}
          <div className="space-y-5 text-center md:text-left">
            <h3 className="font-bold text-lg uppercase text-red-500">
              What We Do
            </h3>
            <ul className="space-y-2">
              {["Organize Events", "Train Students", "Marketing", "User Guide"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-red-500 transition cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center space-y-8">
            <h3 className="font-bold text-lg uppercase text-red-500">
              Connect with Us
            </h3>
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.linkedin.com/in/beast-boxing-9911aa336/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-4xl hover:text-red-500 transition cursor-pointer" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-4xl hover:text-red-500 transition cursor-pointer" />
              </a>
              <a href="mailto:aboxinglab@gmail.com">
                <FaEnvelope className="text-4xl hover:text-red-500 transition cursor-pointer" />
              </a>
              <a
                href="https://wa.me/917387216572"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-4xl hover:text-red-500 transition cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-5 text-center md:text-left">
            <h3 className="font-bold text-lg uppercase text-red-500">Contact</h3>
            <p className="text-lg">
              Email:{" "}
              <a
                href="mailto:beastboxingofficial@gmail.com"
                className="text-red-500 underline"
              >
                beastboxingofficial@gmail.com
              </a>
            </p>
            <p className="text-lg">
              Phone:{" "}
              <a
                href="tel:+917387216572"
                className="text-red-500 underline"
              >
                +91 7387216572
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
          <p className="text-base">
            &copy; Beast Boxing 2025, All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-6 text-base mt-4">
            {["Privacy Policy", "Terms and Conditions"].map((item) => (
              <span
                key={item}
                className="hover:underline cursor-pointer transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
