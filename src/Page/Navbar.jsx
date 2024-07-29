import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-pink-200 text-black">
      <div className="container mx-auto flex flex-row justify-between items-centertext-black py-4">
        <div className="flex items-center">
          <img src="https://imgs.search.brave.com/2aK4Pzer9ajMspalZU9YYms4rn7cD8f2P914EB0i5YQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vYWU3MzUx/MDUtNDk1YS00ODY2/LThlYzctZjc2NGIw/MjRlYzQzL2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0x/JnY9NjM4NDUzMzc3/MzI1NzcwMDAw" alt="School Logo" className="h-10 mr-2" />
          <h1 className="font-bold text-3xl text-black">Springdale Public School</h1>
        </div>
        <div className="lg:flex lg:space-x-4 hidden lg:block">
          <Link to="/" className="hover:text-gray-500 text-black">Home</Link>
          <Link to="/about" className="hover:text-gray-500 text-black">About</Link>
          <Link to="/academics" className="hover:text-gray-500 text-black">Academics</Link>
          <Link to="/admissions" className="hover:text-gray-500 text-black">Admissions</Link>
          <Link to="/faculty" className="hover:text-gray-500 text-black">Faculty</Link>
          <Link to="/students" className="hover:text-gray-500 text-black">Students</Link>
          <Link to="/gallery" className="hover:text-gray-500 text-black">Gallery</Link>
          <Link to="/contact" className="hover:text-gray-500 text-black">Contact</Link>
        </div>
        <button onClick={toggleMenu} className="lg:hidden text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
            <path strokeLinecap="round"
              strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <div className={`fixed top-0 left-0 w-[20rem] h-screen bg-pink-400 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-center justify-center h-full">
            <Link to="/" className="text-black py-4">Home</Link>
            <Link to="/about" className=" text-black py-4">About</Link>
            <Link to="/academics" className=" text-black py-4">Academics</Link>
            <Link to="/admissions" className="  text-black py-4">Admissions</Link>
            <Link to="/faculty" className="  text-black py-4">Faculty</Link>
            <Link to="/students" className="  text-black py-4">Students</Link>
            <Link to="/gallery" className="text-black py-4">Gallery</Link>
            <Link to="/contact" className=" hover:text-gray-400 text-blacktext-black py-4">Contact</Link>
            <button onClick={toggleMenu} className="text-black mt-4">Close</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
