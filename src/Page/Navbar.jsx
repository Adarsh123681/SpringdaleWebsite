import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="w-screen flex flex-col lg:flex-row justify-center items-center p-5 bg-pink-200 text-black relative">
        <div className="">
          {/* <img src="/logo.png" alt="School Logo" className="h-10 mr-2" /> */}
          <h1 className=" font-bold text-3xl lg:w-[70rem]">Springdale Public School
          </h1>
        </div>
        <div className=" flex md:flex space-x-2 mt-3">
          <Link to="/" className=" mx-3 text-[1.2rem] lg:text-[1.5rem] hover:text-gray-300">Home</Link>

          <Link to="/about" className=" mx-3 text-[1.2rem] lg:text-[1.5rem] hover:text-gray-300">About</Link>
          {/* <div className=" mx-3 text-[1.2rem] lg:text-[1.5rem]">
            <button
              onClick={toggleDropdown}
              className="text-black  mx-3 text-[1.2rem] lg:text-[1.5rem]  flex items-center"
            >
              Academics <span className=" mx-3 text-[1.5remx-3 m] ml-1.5</span>
            </button>
            {isDropdownOpen && (
              <ul className=" mx-3 text-[1.2rem] lg:text-[1.5rem] absolute bg-gray-900 text-white mt-2 rounded shadow-md">
                <li className=" mx-3 text-[1.2rem] lg:text-[1.5rem] py-2 px-4 hover:bg-gray-800">
                  <Link to="/academics/curriculum">Curriculum</Link>
                </li>
                <li className=" mx-3 text-[1.2rem] lg:text-[1.5rem] py-2 px-4 hover:bg-gray-800">
                  <Link to="/academics/subjects">Subjects</Link>
                </li>
                <li className=" mx-3 text-[1.2rem] lg:text-[1.5rem] py-2 px-4 hover:bg-gray-800">
                  <Link to="/academics/methodologies">Methodologies</Link>
                </li>
              </ul>
            )}
          </div> */}

          <Link to="/academics" className=" mx-3 text-[1.2rem] lg:text-[1.5rem] hover:text-gray-300">Academics</Link>
          <Link to="/admissions" className=" mx-3 text-[1.2rem] lg:text-[1.5rem] hover:text-gray-300">Admissions</Link>
          <Link to="/faculty" className=" mx-3 text-[1.2rem] lg:text-[1.5rem] hover:text-gray-300">Faculty</Link>
          <Link to="/students" className=" mx-3 text-[1.2rem] lg:text-[1.5rem] hover:text-gray-300">Students</Link>
          <Link to="/gallery" className=" mx-3 text-[1.2rem] lg:text-[1.5rem] hover:text-gray-300">Gallery</Link>
          <Link to="/contact" className=" mx-3 text-[1.2rem] lg:text-[1.5rem] hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;


