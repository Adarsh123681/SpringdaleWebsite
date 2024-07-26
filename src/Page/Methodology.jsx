import React from 'react'

const Methodology = () => {
  return (
    <>
      <section className="py-12 grid justify-center">
        <h2 className="text-5xl font-bold text-center mb-8">Our Teaching Methodology</h2>
        <p className="text-center text-2xl md:w-[50rem] m-auto my-5 w-[35rem]">We believe in a holistic approach to education, blending traditional methods with innovative techniques to cater to different learning styles. Our teachers are equipped to provide individualized attention and foster critical thinking.</p>

        {/* method 1  */}
        <div className="">
        <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row justify-center items-center">
            <div className="img">
              <img src="https://media.istockphoto.com/id/1480277406/photo/graduation-group-and-back-view-of-students-celebrate-education-success-behind-of-excited.webp?b=1&s=170667a&w=0&k=20&c=VjQgIGeJIlMh-KTrfLxf14u_0uq7CjpVFlCG4X0snkY=" alt="" srcset="" className='w-[35rem] md:w-[50rem] h-[25rem]' />
            </div>
            <div className="bg-white rounded-lg p-6 flex flex-col justify-end items-center">
              <h1 className='text-3xl w-[50rem] font-semibold my-5 text-center'>Student-Centered Learning</h1>
              <p className='text-2xl w-[35rem] md:w-[50rem] h-[25rem]'>We focus on creating a learning environment where students are actively engaged in their education. Through inquiry-based learning, project-based learning, and collaborative activities, we empower students to become independent thinkers.</p>
            </div>
          </div>


          {/* method 2 */}
          <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row justify-center items-center">
            <div className="img">
              <img src="https://media.istockphoto.com/id/1480277406/photo/graduation-group-and-back-view-of-students-celebrate-education-success-behind-of-excited.webp?b=1&s=170667a&w=0&k=20&c=VjQgIGeJIlMh-KTrfLxf14u_0uq7CjpVFlCG4X0snkY=" alt="" srcset="" className='w-[35rem] md:w-[50rem] h-[25rem]' />
            </div>
            <div className="bg-white rounded-lg p-6 flex flex-col justify-end items-center">
              <h1 className='text-3xl w-[50rem] font-semibold my-2 text-center'>Technology Integration</h1>
              <p className='text-2xl w-[35rem] md:w-[50rem] '>We leverage technology to enhance the learning experience. Our classrooms are equipped with interactive whiteboards, and students have access to online resources and digital tools to support their learning.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Methodology