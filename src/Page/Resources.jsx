import React from 'react'

const Resources = () => {
  return (
     <>
     <section className="py-12 grid items-center justify-center">
        <h2 className="text-5xl font-bold text-center mb-8">Educational Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6">
            <img src="https://media.istockphoto.com/id/1480277406/photo/graduation-group-and-back-view-of-students-celebrate-education-success-behind-of-excited.webp?b=1&s=170667a&w=0&k=20&c=VjQgIGeJIlMh-KTrfLxf14u_0uq7CjpVFlCG4X0snkY=" alt="" srcset="" className='w-[50rem] h-[30rem]' />
            <h1 className='text-2xl w-[30rem] font-semibold my-2'>Library</h1>
            <p className='text-2xl w-[30rem]'>Our well-stocked library provides a wide range of books, journals, and digital resources to support student research and independent learning.</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <img src="https://media.istockphoto.com/id/1480277406/photo/graduation-group-and-back-view-of-students-celebrate-education-success-behind-of-excited.webp?b=1&s=170667a&w=0&k=20&c=VjQgIGeJIlMh-KTrfLxf14u_0uq7CjpVFlCG4X0snkY=" alt="" srcset="" className='w-[50rem] h-[30rem]' />
            <h1 className='text-2xl w-[30rem] font-semibold my-2'>Digital Learning Platforms</h1>
            <p className='text-2xl w-[30rem]'>We utilize online platforms for interactive learning, assessments, and communication between teachers and students.</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <img src="https://media.istockphoto.com/id/1480277406/photo/graduation-group-and-back-view-of-students-celebrate-education-success-behind-of-excited.webp?b=1&s=170667a&w=0&k=20&c=VjQgIGeJIlMh-KTrfLxf14u_0uq7CjpVFlCG4X0snkY=" alt="" srcset="" className='w-[50rem] h-[30rem]' />
            <h1 className='text-2xl w-[30rem] font-semibold my-2'>Laboratory and Workshops</h1>
            <p className='text-2xl w-[30rem]'>Our science and computer laboratories provide hands-on learning experiences. We also organize workshops and guest lectures to enrich students' knowledge.</p>
          </div>
          {/* Add more resource sections as needed */}
        </div>
      </section>
     </>
  )
}

export default Resources