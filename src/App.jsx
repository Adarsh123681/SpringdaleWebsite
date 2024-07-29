import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Page/Navbar';
import Home from "./Components/Home";
import About from "./Components/About"
import Admission from "./Components/Admission"
import Students from "./Components/Students"
import Faculty from './Components/Faculty'
import Gallery from "./Components/Gallery"
import ContactUs from "./Components/ContactUs"
import Academics from './Components/Academics';

import Footer from './Page/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes for other pages */}
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admission />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
