import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"; // Icons for social links

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left side: Branding/Name */}
          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <h2 className="text-3xl font-bold">Ameet Kilambu</h2>
            <p className="text-gray-400 mt-2">Associate Frontend Developer</p>
          </div>

          {/* Middle: Social links */}
          <div className="flex space-x-6 mb-6 lg:mb-0">
            <a
              href="https://github.com/kilambuameet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/amit-kilambu-987481b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/am_teyy_?igsh=MTl0aGpsYThrOW9paA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-colors"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="mailto:amitkilambu8@gmail.com"
              className="text-white hover:text-red-500 transition-colors"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>

          {/* Right side: Copyright */}
          <div className="text-center lg:text-right text-gray-400">
            <p>&copy; 2024 Ameet Kilambu. All Rights Reserved.</p>
            <p>Designed & Built with 💙 by Ameet Kilambu</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
