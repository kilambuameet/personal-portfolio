import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialCards = () => {
  return (
    <>
      <div className="container mx-auto text-center mt-10">
        {/* Heading */}
        <div className="text-4xl font-bold mb-6">
          <h1>Connect With Me</h1>
        </div>

        {/* Social Cards */}
        <div className="flex flex-wrap justify-center gap-6 w-[90%] m-auto">
          {/* Facebook Card */}
          <div className="flex items-center gap-3 p-4 bg-gray-200 rounded-xl shadow-md w-64 hover:bg-gray-300 transition-all duration-300">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              <FaFacebook size={30} />
            </a>
            <p className="font-medium">Facebook</p>
          </div>

          {/* Twitter Card */}
          <div className="flex items-center gap-3 p-4 bg-gray-200 rounded-xl shadow-md w-64 hover:bg-gray-300 transition-all duration-300">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              <FaTwitter size={30} />
            </a>
            <p className="font-medium">Twitter</p>
          </div>

          {/* Instagram Card */}
          <div className="flex items-center gap-3 p-4 bg-gray-200 rounded-xl shadow-md w-64 hover:bg-gray-300 transition-all duration-300">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500"
            >
              <FaInstagram size={30} />
            </a>
            <p className="font-medium">Instagram</p>
          </div>

          {/* LinkedIn Card */}
          <div className="flex items-center gap-3 p-4 bg-gray-200 rounded-xl shadow-md w-64 hover:bg-gray-300 transition-all duration-300">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700"
            >
              <FaLinkedin size={30} />
            </a>
            <p className="font-medium">LinkedIn</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialCards;
