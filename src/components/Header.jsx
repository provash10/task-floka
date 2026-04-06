import React, { useState } from 'react';
import { Link } from 'react-router';
import CustomIcon from './custom/customIcon/customIcon';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 md:px-8 py-4 bg-white shadow-sm">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <Link to="https://floka.casethemes.net/">
          <img
            className="w-28 h-auto"
            src="https://floka.casethemes.net/wp-content/uploads/2025/05/Logo.png"
            alt="Floka Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="hover:text-gray-700 transition">Home</a>
          <a href="/" className="hover:text-gray-700 transition">Pages</a>
          <a href="/" className="hover:text-gray-700 transition">Portfolio</a>
          <a href="/" className="hover:text-gray-700 transition">Blog</a>
        </div>

        {/* Contact + Custom Icon */}
        <div className="hidden md:flex items-center gap-2">
          <p className="text-sm">info@floka.com</p>
          <CustomIcon />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3">
          <a href="/" className="hover:text-gray-700 transition">Home</a>
          <a href="/" className="hover:text-gray-700 transition">Pages</a>
          <a href="/" className="hover:text-gray-700 transition">Portfolio</a>
          <a href="/" className="hover:text-gray-700 transition">Blog</a>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-sm">info@floka.com</p>
            <CustomIcon />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
