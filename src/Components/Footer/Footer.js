import { FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Slanted Top Background */}
      <div
        className="absolute top-0 left-0 w-full h-32 bg-black"
        style={{
          clipPath: "polygon(0 0, 600% 0, 600% 80%, 0% 600%)", 
        }}
      ></div>

      {/* Content Section */}
      <div className="relative z-10 py-16">
        {/* Header Section */}
        <div className="text-center mb-12 px-6">
          <h2 className="text-xl md:text-3xl font-bold tracking-wide mb-4">
            READY TO ELEVATE YOUR BOXING PROMOTION <br />
            TO THE NEXT LEVEL?{" "}
            <span className="text-red-500 underline cursor-pointer">
              LET'S CONNECT!
            </span>
          </h2>
          <div className="flex justify-center items-center space-x-2">
            <FaEnvelope className="text-red-500 text-3xl" />
            <span className="font-medium text-lg">aboxinglab@gmail.com</span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Pages */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-bold text-lg uppercase text-red-500">Pages</h3>
            <ul className="space-y-2">
              <li className="hover:text-red-500 cursor-pointer">Home</li>
              <li className="hover:text-red-500 cursor-pointer">About</li>
              <li className="hover:text-red-500 cursor-pointer">Our Team</li>
              <li className="hover:text-red-500 cursor-pointer">Career</li>
            </ul>
          </div>

          {/* What We Do */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-bold text-lg uppercase text-red-500">
              What We Do
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-red-500 cursor-pointer">Organize Events</li>
              <li className="hover:text-red-500 cursor-pointer">Train Students</li>
              <li className="hover:text-red-500 cursor-pointer">Marketing</li>
              <li className="hover:text-red-500 cursor-pointer">User Guide</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center space-y-6">
            <h3 className="font-bold text-lg uppercase text-red-500">
              Connect with Us
            </h3>
            <div className="flex justify-center space-x-6">
              <FaLinkedin className="text-3xl hover:text-red-500 transition cursor-pointer" />
              <FaInstagram className="text-3xl hover:text-red-500 transition cursor-pointer" />
              <FaEnvelope className="text-3xl hover:text-red-500 transition cursor-pointer" />
              <FaWhatsapp className="text-3xl hover:text-red-500 transition cursor-pointer" />
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-bold text-lg uppercase text-red-500">Contact</h3>
            <p className="text-sm">
              Email: <span className="text-red-500">aboxinglab@gmail.com</span>
            </p>
            <p className="text-sm">Phone: +1 234 567 890</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-sm">
            &copy; Beast Boxing 2024, All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4 text-sm mt-4">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">
              Terms and Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
