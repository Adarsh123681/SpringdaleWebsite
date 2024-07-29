import React, { useRef, useEffect, useState } from 'react';
import { data } from "../assets/activities_data/data";
import Achievement from '../Page/Achievement';

function Students() {
  const activitiesRef = useRef(null);
  const clubsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const activitiesTop = activitiesRef.current.offsetTop;
      const clubsTop = clubsRef.current.offsetTop;
      const windowHeight = window.innerHeight;

      if (window.scrollY > activitiesTop - windowHeight / 2) {
        activitiesRef.current.classList.add('active');
      } else {
        activitiesRef.current.classList.remove('active');
      }

      if (window.scrollY > clubsTop - windowHeight / 2) {
        clubsRef.current.classList.add('active');
      } else {
        clubsRef.current.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [extradata, setExtradata] = useState(data);
  const [clubdata, setClubs] = useState(data);

  return (
    <>
      <div className="container ">
        {/* Video Background */}
        <div className="relative w-screen h-screen bg-cover bg-center bg-blend-darken">
          <video autoPlay loop muted className="w-full h-full object-cover bg-blend-darken">
            <source src="https://media.istockphoto.com/id/1071486906/video/elementary-school-kids-run-from-camera-in-school-corridor.mp4?s=mp4-640x640-is&k=20&c=IG9-1UtgfjaUQS2V-yyE8lfh13FbxD9O6qQZHXVJFzY=" />
          </video>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center  bg-black/50">
            <h1 className="text-5xl font-bold text-white">Life at Springdale</h1>
          </div>
        </div>

        {/* Activities and Clubs Sections (Grid) */}
        <div className="grid gap-4">
          <div ref={activitiesRef} className="rounded-lg p-8">
            <h2 className="text-3xl text-center font-bold mb-4">Extracurricular Activities</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {extradata.extracurricularActivities.map((ele, index) => {
                const { name, image } = ele;
                return (
                  <li key={index} className="flex flex-col items-center justify-center">
                    <img src={image} alt={name} className="w-[20rem] h-[20rem] rounded-2xl  mb-2" />
                    <p className="text-center text-3xl">{name}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div ref={clubsRef} className= " rounded-lg p-8">
            <h2 className="text-3xl text-center font-bold mb-4">Clubs and Societies</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {clubdata.clubs.map((element, index) => {
                const { name, image } = element;
                return (
                  <li key={index} className="flex flex-col items-center justify-center">
                    <img src={image} alt={name} className="w-[20rem] h-[20rem] rounded-2xl  mb-2" />
                    <p className="text-center">{name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Achievement/>
      </div>
    </>
  );
}

export default Students;
