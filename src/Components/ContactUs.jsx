import React, { useState } from 'react';

function ContactUs() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email)
    console.log(formData); // For testing purposes
  };

  return (

    <div className="container pt-10">
      <h2 className="text-4xl font-bold mb-10 text-center">Contact Us</h2>
      <div className="flex mx-2 items-center justify-center m-auto flex-col md:flex-row ">
        <div className="w-[39rem] mx-16 text-2xl hidden md:block flex justify-start items-start">
          <p className='my-2'>School Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Codes</p>
          <p>Phone:+1 (123) 456-7890</p>
          <p className='my-2'>Email: info@springdale.ed</p>
        </div>
        <div className='w-[30rem]'>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block  text-[1.5rem] mb-2">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block   text-[1.5rem] font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full p-5  leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block   text-sm font-bold mb-2">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="shadow appearance-none border rounded w-full p  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <button type="submit" className="bg-pink-500 hover:bg-pink-700 font-bold p-5 rounde w-[30rem]">Submit</button>
          </form>
        </div>

      </div>
      <div className='mt-5 mx-0 w-screen '>
        {/* Google Map iframe */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d75747.2999450396!2d72.84801079934438!3d19.21969687066951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1722219554069!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>
  );
}

export default ContactUs;
