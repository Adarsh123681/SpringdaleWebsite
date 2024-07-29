import item from "../assets/faculty_data/data"
import React, { useState } from 'react';
import Slider from 'react-slick';

const Faculty = ({ position, image, experience, title, degree }) => {
  const [data, setData] = useState(item);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className=" text-black">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-2  lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold   ">Our team</h2>
            <p className="font-light  sm:text-xl">Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptate magnam ducimus id culpa, quae totam velit libero ipsa cupiditate laborum sequi consequatur unde dolor quasi, officia nisi officiis blanditiis harum sapiente enim asperiores. Dicta sequi provident quod.</p>
          </div>
        </div>
        <Slider {...settings}>
          {data.map((member, index) => {
            const { image, experience, title, degree, position } = member
            return (
              <>
                <div className="facilities mt-8 h-[54rem]">
                  <div key={index} className="border-[.1rem] mx-2 border-pink-400 rounded-lg shadow-pink-300 shadow-2xl p-2">
                    <img src={image} alt={title} className='w-[30rem] h-[25rem] m-auto   ' />  
                    <h3 className="text-center text-[2rem] font-semibold mt-5">{title}</h3>
                    <p className="text-center text-xl  w-[25rem] m-auto ">{position}</p>
                    <p className="text-center text-xl  w-[25rem] m-auto ">{degree}</p>
                    <p className="text-center text-xl  w-[25rem] m-auto ">{experience}</p>

                  </div>
                </div>
              </>
            )
          }
          )
          }
        </Slider >
      </section>
    </>
  )
}

export default Faculty






