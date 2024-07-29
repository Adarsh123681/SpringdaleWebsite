import React from 'react'
import Slider from 'react-slick';
const HomeBody = () => {

  const latestNotice = [
    {
      title: 'Important Notice: School Closure',
      description: 'Due to unforeseen circumstances, the school will be closed on [date].',
      date: '2024-07-25'
    }
  ];

  const latestAlert = [{
    title: 'Urgent Alert: Bus Schedule Change',
    description: 'There is a change in the bus schedule effective [date].',
    date: '2024-07-24'
  }];

  const newsData = [
    {
      image: 'https://media.istockphoto.com/id/678860582/photo/three-young-nerds-with-thinking-caps.jpg?s=612x612&w=0&k=20&c=VGxwiGxatspIoDi-fyBsEmzCEaD_3CPAV8xL2wdMHIA=',
      title: 'News 1',
      content: 'Brief description of news 1'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2012/02/27/17/00/academic-17470_640.jpg',
      title: 'News 2',
      content: 'Brief description of news 2'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2012/02/27/17/00/academic-17470_640.jpg',
      title: 'News 3',
      content: 'Brief description of news 3'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      2
      {/* notice and alert */}
      <div className="w-screen text-black bg-white text-2xl">
        <div className="container m-auto">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <aside className="sidebar w-full md:w-1/2 bg-gray-100 p-4">
              <section className="p-4">
                <div className="container mx-auto">
                  <h3 className="font-bold mb-2 text-2xl">Notice</h3>
                  <ul className="space-y-4">
                    {latestNotice.map((notice, index) => (
                      <li key={index} className="border-b border-gray-200 pb-2">
                        <h4 className="font-semibold">{notice.title}</h4>
                        <p>{notice.description}</p>
                        <p className="text-[1.3rem]">Date: {notice.date}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
              {/* alert */}
              <section className="p-4">
                <div className="container mx-auto flex flex-col">
                  <h3 className="  font-bold mb-2 text-red-600 text-2xl">Alert</h3>
                  <ul className="space-y-4">
                    {latestAlert.map((alert, index) => (
                      <li key={index} className="border-b border-gray-200 pb-2">
                        <h4 className="font-semibold  text-red-600 ">{alert.title}</h4>
                        <p>{alert.description}</p>
                        <p className="text-[1.3rem]">Date: {alert.date}</p>
                      </li>
                    ))}
                    <div className="container my-10 4 h-[15rem]">
                      {/* Admission Alert Banner */}
                      <div className="bg-pink-500 text-white p-4 mb-4 ">
                        <div className="flex justify-between items-center">
                          <p className="text-[6xl] font-bold">Admission Alert:</p>
                          <a href="/admissions" className="text-[3xl] font-bold underline text-black m-3">Apply Now</a>
                        </div>
                        <p className="text-2xl">Admissions open for the academic year 2023-2024. Limited seats available.</p>
                      </div>

                    </div>
                  </ul>
                </div>
              </section>
            </aside>
            <main className="flex-1 -mt-20">
              <aside className="sidebar w-[50rem] h-[40rem] bg-gray-100 p-4">
                <div className="news-slider">
                  <Slider {...settings}>
                    {newsData.map((news, index) => (
                      <div key={index} className="news-item ">
                        <img src={news.image} alt={news.title} className="w-full object-cover mb-2 h-[30rem]" />
                        <h3 className="text-4xl font-bold m-3">{news.title}</h3>
                        <p className="text-2xl m-3">{news.content}</p>
                      </div>
                    ))}
                  </Slider>
                </div>

              </aside>
            </main>
          </div>
          {/* addmissionalert */}

          <div className="w-screen h-[40rem] felx justify-center items-center my-10">
          <h3 class="mb-5 text-4xl font-medium text-gray-900 text-center my-16">Why To Choose Us</h3>
          <div className="flex flex-col lg:flex-row justify-center items-center m-4 ">
            <img src="https://cdn.pixabay.com/photo/2015/08/05/13/55/children-876543_640.jpg" alt="image description" className='h-[20rem] lg:h-[30rem]'/>
            <div className="w-[40rem] lg:w-[50rem] m-5 ">
               <p className='grid justify-end items-end '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet deleniti eum, sint quisquam magnam distinctio debitis praesentium, harum voluptates laboriosam id quia. Incidunt dolores voluptatem autem quae minima numquam pariatur eaque necessitatibus corrupti, impedit odio explicabo tempore, cum beatae.</p>
            </div>
          </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default HomeBody