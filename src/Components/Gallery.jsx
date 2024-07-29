import React, { useState } from 'react'
import { data } from "../assets/Gallery_data/data"


const Gallery = () => {
  const [buttons, setButtons] = useState([
    "Exhibition", "Sports", "Library", "Cultural", "Classroom"
  ])
  const [filter, setFilter] = useState('all');

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredData = data.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (

    <>
      {/* banner */}
      <div className="banner w-screen h-60 relative">
        <img src="https://lh4.googleusercontent.com/proxy/3d3YHSBJCCHi7zfS5G_qW61O1Jw50JmoQtYHE9jW2tDojrqZ1LjIWJctv6WlRDCdX6DWwbDyrlANtp06D3Z-1VWspg0g0lsxccPh2H-c9VkVl2r79NivBHh-ttk05w_QJuAAX4raW0rNJ1w" alt="" className="w-full h-60 object-cover" /> 
      </div>
      
      {/* videos */}
      <div className="md:flex m-5 justify-center">
 
        <iframe width="390" height="315" src="https://www.youtube.com/embed/ELQO-PHCIxc?si=5YEdQCLbUxQPIQ2b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>



      {/* images - button*/}

      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {
          buttons.map((btn) => {
            return (
              <button type="button" className="text-white hover:text-white border border-pink-600 bg-white hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-pink-500 dark:text-pink -500 dark:hover:text-white dark:hover:bg-pink-500 dark:bg-gray-900 dark:focus:ring-pink-800" onClick={() =>
                handleFilter(`${btn.toLowerCase()}`)
              }>{btn}</button>
            )

          })
        }
      </div>
      {/* content - images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          filteredData.map((filteredImage) => {
            return (
              <>
                <div>
                  <img src={filteredImage.image} alt="" className="w-[30rem] h-[30rem] rounded-lg m-auto my-5 p-5" />
                  <h1 className='text-2xl w-[35rem] m-auto text-center'>{filteredImage.title} - {filteredImage.description}</h1>
                </div>
              </>
            )
          })
        }

      </div>
    </>

  )
}

export default Gallery