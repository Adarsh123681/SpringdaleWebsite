import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from "../assets/SlideData/data"

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const [ele, setEle] = useState(data)
  return (
    <Slider {...settings}>
      {
        !ele ? (
          <h1>Data is not available </h1>
        )
          :
          (
            ele.map((item, index) => {
              const { image, title, description } = item
              return (
                <>
                  <div key={title} className="relative">
                    <img src={image} className="w-full h-screen object-cover" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-black/50">
                      <h2 className="text-3xl font-bold text-pink-300 w-[43rem] lg:w-[60rem] text-center py-2 ">{title}</h2>
                      <p className="text-lg text-white">{description}</p>
                      <button type="button" className="text-white text-2xl  bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full p-3 text-center m-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"><a href="https://www.youtube.com//ELQO-PHCIxc?si=5YEdQCLbUxQPIQ2b">Watch and Explore</a></button>
                    </div>
                  </div>
                </>
              )
            })
          )
      }
    </Slider>
  )
}

export default Header