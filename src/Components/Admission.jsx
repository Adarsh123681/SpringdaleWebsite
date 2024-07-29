import React, { useState } from 'react'
import { motion } from 'framer-motion'


const Admission = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleChange = () => {

  }
  return (
    <>
      <div className="container">
        {/* Hero Section */}
        <section className="hero myStyle1 w-screen h-screen relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center  ">
            <motion.div   initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }} className="text-center text-white" >
              <h1 className="text-5xl font-bold text-pink-500">Admissions Open</h1>
              <p className="mt-4 text-xl">Enroll Your Child Today</p>
            </motion.div>
          </div>
        </section>

        {/* Admissions Process */}
        <section className="py-12 w-screen m-auto11111">
          <h2 className="text-3xl font-bold text-center mb-8">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto">
            <div className="bg-white rounded-lg p-6 border border-pink-200 shadow-lg shadow-pink-200">
              <h2 className='text-semibold text-2xl p-4 m-2'>Step 1: Download Application Form</h2>
              <p className=' text-[1.3rem] px-4 m-2'>Download the admission form from our website or collect it from the school office.</p>
              <button className="bg-pink-500 text-white p-4 mx-4 rounded" download="https://cdn.pixabay.com/photo/2015/04/15/21/06/cricket-724615_640.jpg">Download Form</button>
            </div>
            <div className="bg-white rounded-lg p-6 border border-pink-200 shadow-lg shadow-pink-200">
              <h2 className='text-semibold text-2xl p-4 m-2'>Step 2: Fill Application Form</h2>
              <p className=' text-[1.3rem] px-4 m-2'>Download the admission form from our website or collect it from the school office.</p>
              <button className="bg-pink-500 text-white p-4 mx-4 rounded" onClick={handleFormOpen}>Fill Form</button>
            </div>
          </div>
        </section>

        {/* ... other sections */}

        {/* Application Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-900">
            <div className="w-[30rem] rounded-lg p-8 bg-pink-200 border border-pink-100 shadow-md shadow-pink-100">
              <h2 className="text-2xl font-bold mb-4">Application Form</h2>
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2 text-2xl">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-400 rounded py-2 px-3 w-full" />

              {/* Form fields here */}

              <label htmlFor="email" className="block text-gray-700 font-bold mb-2 text-2xl">email</label>
              <input type="text" id="email" email="email" value={formData.email} onChange={handleChange} className="border border-gray-400 rounded py-2 px-3 w-full" />

              <label htmlFor="password" className="block text-gray-700 font-bold mb-2 text-2xl">password</label>
              <input type="text" id="password" password="password" value={formData.password} onChange={handleChange} className="border border-gray-400 rounded py-2 px-3 w-full" />


              <label htmlFor="password" className="block text-gray-700 font-bold mb-2 text-2xl">password</label>
              <input type="text" id="password" password="password" value={formData.password} onChange={handleChange} className="border border-gray-400 rounded py-2 px-3 w-full" />



              <label htmlFor="password" className="block text-gray-700 font-bold mb-2 text-2xl">password</label>
              <input type="text" id="password" password="password" value={formData.password} onChange={handleChange} className="border border-gray-400 rounded py-2 px-3 w-full" />



              <label htmlFor="password" className="block text-gray-700 font-bold mb-2 text-2xl">password</label>
              <input type="text" id="password" password="password" value={formData.password} onChange={handleChange} className="border border-gray-400 rounded py-2 px-3 w-full" />



              <button onClick={handleFormClose} className="bg-pink-700 p-4  my-4  text-white rounded">Close</button>
              <button onClick={handleFormClose} className="bg-pink-700 p-4  my-4 mx-2 text-white rounded">Submit</button>
            </div>
          </div>
        )}

        {/* Admission Criteria */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Admission Criteria</h2>
          <p className='text-semibold text-2xl p-4 m-2 bg-pink-200'>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border border-pink-200 shadow-lg shadow-pink-200">
              <h2 className='text-semibold text-2xl p-4 m-2'>Eligibility Criteria</h2>
              <ul>
                <li className=' text-[1.3rem] px-4 m-2'>Age eligibility as per the grade</li>
                <li className=' text-[1.3rem] px-4 m-2'>Previous academic records</li>
                <li className=' text-[1.3rem] px-4 m-2'>Other relevant criteria</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-pink-200 shadow-lg shadow-pink-200">
              <h2 className='text-semibold text-2xl p-4 m-2'>Admission Process</h2>
              <p className='text-semibold text-xl p-4 m-2'>Get detailed admission process information from here :   <button className="bg-pink-500 text-white p-2 mx-4 rounded" onClick={handleFormOpen}>ADMISION PROCESS</button></p>
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Important Dates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border border-pink-200 shadow-lg shadow-pink-200">
              <h2 className='text-semibold text-2xl p-4 m-2'>Key Dates</h2>
              <ul>
                <li className=' text-[1.3rem] px-4 m-2'>Admission Form Availability: March 1st</li>
                <li className=' text-[1.3rem] px-4 m-2'>Last Date for Submission: March 31st</li>
                <li className=' text-[1.3rem] px-4 m-2'>Entrance Test: April 15th</li>
                <li className=' text-[1.3rem] px-4 m-2'>Announcement of Results: April 30th</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-pink-200 shadow-lg shadow-pink-200">
              <h2 className='text-semibold text-2xl p-4 m-2'>Contact Information</h2>
              <p className='text-semibold text-2xl p-4 m-2'>For inquiries, please contact the admissions office at:</p>
              <p className='text-semibold text-2xl p-4 m-2'>Phone: +91-1234567890</p>
              <p className='text-semibold text-2xl p-4 m-2'>Email: info@springdale.edu</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Admission