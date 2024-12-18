import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center">
          {/* <img
            src="/logo.png" // Replace with your logo
            alt="Logo"
            className="h-10 w-10 mr-2"
          /> */}
          <h1 className="text-4xl tracking-widest font-bold text-gray-800 font-sassy">AmeetFolio</h1>
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-8 font-mono">
          <a href="/" className="text-gray-700 hover:text-teal-600 font-medium">
            Home
          </a>
          <a
            href="/services"
            className="text-gray-700 hover:text-teal-600 font-medium"
          >
            Services
          </a>
          <a
            href="/portfolio"
            className="text-gray-700 hover:text-teal-600 font-medium"
          >
            Portfolio
          </a>
          <a
            href="/about"
            className="text-gray-700 hover:text-teal-600 font-medium"
          >
            About Me
          </a>
          <a
            href="/contact"
            className="text-gray-700 hover:text-teal-600 font-medium"
          >
            Contact
          </a>
        </div>

        {/* Dropdown Menu for smaller screens */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-teal-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Links for smaller screens
      <div className="md:hidden flex flex-col items-center space-y-4 py-4">
        <a href="/" className="text-gray-700 hover:text-teal-600 font-medium">
          Home
        </a>
        <a href="/services" className="text-gray-700 hover:text-teal-600 font-medium">
          Services
        </a>
        <a href="/portfolio" className="text-gray-700 hover:text-teal-600 font-medium">
          Portfolio
        </a>
        <a href="/about" className="text-gray-700 hover:text-teal-600 font-medium">
          About Me
        </a>
        <a href="/contact" className="text-gray-700 hover:text-teal-600 font-medium">
          Contact
        </a>
      </div> */}
    </nav>
  );
};

export default NavBar;
