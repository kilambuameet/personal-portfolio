import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-700 tracking-widest font-sassy">
          AmeetFolio
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-mono">
          {[
            { name: "Home", href: "#home" },
            { name: "Projects", href: "#projects" },
            { name: "Skills", href: "#skills" },
            // { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 hover:text-blue-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
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

      {/* Backdrop + Sliding Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Blurred semi-transparent backdrop */}
          <div
            className="flex-1 bg-black/30 backdrop-blur-sm"
            onClick={toggleMenu}
          />

          {/* Slide-in panel */}
          <div
            className="w-3/4 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-out
                       translate-x-0 flex flex-col p-4 space-y-6 py-10 font-mono"
          >
            {/* Logo */}
            <h1 className="text-3xl font-bold text-blue-700 tracking-widest font-sassy">
              AmeetFolio
            </h1>
            {/* Close button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-700 hover:text-blue-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {[
              { name: "Home", href: "#home" },
              { name: "Projects", href: "#projects" },
              { name: "Skills", href: "#skills" },
              { name: "About", href: "#about" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200 text-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
