
import React from 'react'
import Achievement from '../Page/Achievement';
import Navbar from '../Page/Navbar'
import Header from '../Page/Header'
import HomeBody from '../Page/HomeBody'
import ContactUs from './ContactUs'
import Faculty from './Faculty'
import Home_achievement from '../Page/Home_achievement';

const Home = () => {
  return (
    <>
      <Header />

      {/* our Story */}
      <div className="history ">
        <div className="content w-1/2 m-auto h-[22rem]">
          <h2 className="text-4xl font-bold text-center my-10">OUR STORY</h2>
          <p className="text-gray-700 text-2xl mb-10 text-center">
            Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, doloremque dolorem? Asperiores rem quos hic velit ut veniam repellendus doloribus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae tempora neque soluta ex sed illum, debitis quam aliquid dignissimos!
          </p>
        </div>
      </div>
      <HomeBody />
      <Home_achievement />
      <ContactUs />
    </>
  )
}

export default Home