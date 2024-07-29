import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import data from "../assets/facitlities_data/data"
const About = () => {
  const [facilities, setFacilities] = useState(data);

  // useEffect(() => {
  //   // Fetch facility data from an API or local source
  //   const fetchFacilities = async () => {
  //     const response = await fetch(/* API endpoint or path to data */);
  //     const data = await response.json();
  //     setFacilities(data);
  //   };

  //   fetchFacilities();
  // }, []);

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

    // about
    <section className="about">
      <div className="myStyle2 banner relative  w-screen h-screen bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center  ">
          <h1 className="text-5xl font-bold text-center text-pink-500">Welcome to Springdale Public School</h1>
          <p className="mt-4 text-3xl text-white">Nurturing young minds for a brighter future.</p>
        </div>
      </div>


      {/* history */}
      <div className="container mx-auto px-4">

           <div className="img-headng w-30 h-30 m-5"> <img src="https://i0.wp.com/preprimary.noelschool.org.in/wp-content/uploads/2021/12/194-1947972_our-vision-mission-vision-and-mission-icon-hd.png?resize=800%2C445" alt="" srcset="" className="mx-auto w-[40rem] h-[20rem]" /></div>
        <div className="mission-vision flex flex-col md:flex-row gap-8 mt-8">
      
          {/* mession vision */}
          <div className="mission flex-1">
            <div className="img relative">
              <img src="https://i0.wp.com/www.vidyadhirajamvk.org/wp-content/uploads/2023/07/mission-vidhyadhiraja.jpg?fit=1000%2C650&ssl=1" />
              <div className="overlay absolute top-0 left-0 w-fit h-full flex items-center justify-center bg-black/50">
                <h2 className="text-white text-4xl text-center ">Mission  <p className=" text-2xl m-4"> To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p></h2>
                <div className="content">
                </div>
              </div>

            </div>
          </div>

          {/* vision */}
          <div className="vision flex-1">
            <div className="img relative">
              <img src="https://static.wixstatic.com/media/508759_b8d332384b704ee19eddf0bc00d3b8aa~mv2.jpg/v1/fill/w_792,h_521,al_c,lg_1,q_85/508759_b8d332384b704ee19eddf0bc00d3b8aa~mv2.jpg" />
              <div className="overlay absolute top-0 left-0 w-fit h-full flex items-center justify-center bg-black/50">
                <h2 className="text-white text-4xl text-center ">Vision  <p className=" text-2xl m-4">
                  To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
                </p></h2>
              </div>
            </div>

          </div>
        </div>

      </div>



      <div className="principal-message text-center my-16">

        <img class="rounded-full w-[20rem] h-[20rem] m-auto p-5 object-cover" src="https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2023/08/150A0389-scaled-e1692771621249.jpg" alt="image description" />

        <h2 className="font-bold text-4xl">Principal's Message</h2>
        <p className='text-2xl py-5'>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
      </div>

      <div className="facilities mt-8">
        <h2 className="text-3xl font-bold text-center my-5">Our Facilities</h2>
        <Slider {...settings}>
          {facilities.map((facility, index) => (
            <div key={index} className="facility-card">
              <img src={facility.image} alt={facility.title} className='w-[30rem] h-[20rem] m-auto' />
              <h3 className="text-center text-[1.5rem] font-semibold">{facility.title}</h3>
              <p className="text-center text-xl my-5 w-[25rem] m-auto ">{facility.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
``
export default About;
