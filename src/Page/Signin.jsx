import React, { useState } from 'react'

const Signin = () => {
   
        const [isOpen, setIsOpen] = useState(false);

      toggleMenu = () => {
        setIsOpen(!isOpen);
  };

      return (
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="/" className="text-white text-2xl font-bold">Logo</a>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="/" className="text-white">Home</a>
              <a href="/" className="text-white">About</a>
              <a href="/" className="text-white">Services</a>
              <a href="/" className="text-white">Contact</a>
            </div>
            <div className="md:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  ) : (
                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                  )}
                </svg>
              </button>
            </div>
          </div>
          {/* Dropdown menu */}
          {isOpen && (
            <div className="md:hidden mt-2">
              <a href="/" className="block text-white py-2 px-4">Home</a>
              <a href="/" className="block text-white py-2 px-4">About</a>
              <a href="/" className="block text-white py-2 px-4">Services</a>
              <a href="/" className="block text-white py-2 px-4">Contact</a>
            </div>
          )}
        </div>
      </nav>
  
  )
}

export default Signin