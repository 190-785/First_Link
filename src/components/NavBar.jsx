import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import if you're using React Router

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuIconPath = isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16";

  return (
    <nav className="bg-[#433878] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Link Rule
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
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
                d={menuIconPath}
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0`}
          style={{ transition: 'all 0.3s ease-in-out' }} 
        >
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
