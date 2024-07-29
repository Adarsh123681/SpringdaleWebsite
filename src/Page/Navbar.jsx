import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center p-5 bg-pink-200 text-black relative">
        <div className="flex justify-center items-center m-auto">
          <img src="https://imgs.search.brave.com/YCR1TjpjKmHQRGvxt2DAvoBf8rZbYEg3ukK42KDGftw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Ny83Ny9QYWxtZGFs/ZV9IaWdoX1NjaG9v/bF8oY3Jlc3QpLmpw/Zy8yMjBweC1QYWxt/ZGFsZV9IaWdoX1Nj/aG9vbF8oY3Jlc3Qp/LmpwZw" alt="School Logo" className=" w-h h-10 mr-2 border rounded-full shadow-pink-300 shadow-2xl" />
          <h1 className=" font-bold text-3xl lg:w-[70rem] text-center">Springdale Public School
          </h1>
        </div>
        <div className=" flex md:flex space-x-2 mt-3">
          <Link to="/" className=" mx-3 text-[1.2rem] lg:text-[1.2rem] hover:text-gray-300">Home</Link>

          <Link to="/about" className=" mx-3 text-[1.2rem] lg:text-[1.2rem] hover:text-gray-300">About</Link>
        
          <Link to="/academics" className=" mx-3 text-[1.2rem] lg:text-[1.2rem] hover:text-gray-300">Academics</Link>
          <Link to="/admissions" className=" mx-3 text-[1.2rem] lg:text-[1.2rem] hover:text-gray-300">Admissions</Link>
          <Link to="/faculty" className=" mx-3 text-[1.2rem] lg:text-[1.2rem] hover:text-gray-300">Faculty</Link>
          <Link to="/students" className=" mx-3 text-[1.2rem] lg:text-[1.2rem] hover:text-gray-300">Students</Link>
          <Link to="/gallery" className=" mx-3 text-[1.2rem] lg:text-[1.2rem] hover:text-gray-300">Gallery</Link>
          <Link to="/contact" className=" mx-3 text-[1.2rem] lg:text-[1.2rem] hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;


