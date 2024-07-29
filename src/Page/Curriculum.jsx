import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Curiiculum() {
  const [isPrimaryExpanded, setIsPrimaryExpanded] = useState(false);
  const [isSecondaryExpanded, setIsSecondaryExpanded] = useState(false);
  const [isSeniorSecondaryExpanded, setIsSeniorSecondaryExpanded] = useState(false);
  const [isScienceStreamExpanded, setIsScienceStreamExpanded] = useState(false);
  const [isCommerceStreamExpanded, setIsCommerceStreamExpanded] = useState(false);

  const curriculumData = {
    primary: {
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Art', 'Physical Education'],
      description: 'Our primary curriculum focuses on building a strong foundation in literacy, numeracy, and social skills. We emphasize experiential learning and creativity to foster holistic development.'
    },
    secondary: {
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Physical Education', 'Art'],
      description: 'The secondary curriculum expands on primary education, introducing subjects like computer science and preparing students for higher education. We balance academic rigor with extracurricular activities.'
    },
    seniorSecondary: {
      science: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer Science', 'English'],
      commerce: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English'],
      description: 'Our senior secondary curriculum offers specialized streams to cater to students\' interests. Both Science and Commerce streams provide a strong foundation for future studies.'
    }
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="myStyle w-screen h-screen relative">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold text-pink-500">Nurturing Future Leaders</h1>
            <p className="mt-4 text-2xl">Empowering Minds, Shaping Tomorrow</p>
          </motion.div>
        </div>
      </section>


      {/* Curriculum Section */}
      <section className="py-12">
        <h2 className="text-5xl font-bold text-center mb-8">Our Curriculum</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row bg-white rounded-lg p-6"
          >
            <img src="https://plus.unsplash.com/premium_photo-1663099230808-ff36ef2545fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Primary Curriculum" className="w-[50rem] h-[30rem]  object-cover" />
            <div className="md:ml-8 p-4">
              <h3 className="text-2xl font-bold mb-4">Primary (Grades 1-5)</h3>
              <button onClick={() => setIsPrimaryExpanded(!isPrimaryExpanded)} className="text-pink-500 font-medium text-2xl">
                {isPrimaryExpanded ? 'See-less' : 'Expand'}
              </button>
              <div className={`${isPrimaryExpanded ? 'block' : 'hidden'}`}>
              <p className='text-[1.3rem]'>{curriculumData.primary.description}</p>
                <ul className="list-disc pl-6">
                  {curriculumData.primary.subjects.map((subject, index) => (
                    <li key={index}>
                      <span className="text-pink-500">{index + 1}.</span> {subject}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row bg-white rounded-lg p-6"
          >
            <img src="https://media.istockphoto.com/id/525409809/photo/teacher-and-students-in-classroom-during-lesson.webp?b=1&s=170667a&w=0&k=20&c=z-TiwxC_DEC3Rmr4_n-cCzufwAyGIydkkpTkrwBrq9E=" alt="Secondary Curriculum" className="w-[50rem] h-[30rem] object-cover" />
            <div className="md:ml-8 p-4">
              <h3 className="text-2xl font-bold mb-4">Secondary (Grades 6-10)</h3>
              <button onClick={() => setIsSecondaryExpanded(!isSecondaryExpanded)} className="text-pink-500 font-medium text-2xl">
                {isSecondaryExpanded ? 'See less' : 'Expand'}
              </button>
              <div className={`${isSecondaryExpanded ? 'block' : 'hidden'}`}>
                <p className='text-[1.3rem]'>{curriculumData.secondary.description}</p>
                <ul className="list-disc pl-6">
                  {curriculumData.secondary.subjects.map((subject, index) => (
                    <li className='text-2xl my-2' key={index}>{subject}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row bg-white rounded-lg p-6 float-right"
          >
            <img src="https://media.istockphoto.com/id/525409809/photo/teacher-and-students-in-classroom-during-lesson.webp?b=1&s=170667a&w=0&k=20&c=z-TiwxC_DEC3Rmr4_n-cCzufwAyGIydkkpTkrwBrq9E=" alt="Senior Secondary Curriculum" className="w-[50rem] h-[30rem] object-cover" />
            <div className="md:ml-8 p-4">
              <h3 className="text-2xl font-bold mb-4">Senior Secondary (Grades 11-12)</h3>
              <button onClick={() => setIsSeniorSecondaryExpanded(!isSeniorSecondaryExpanded)} className="text-pink-500 font-medium text-2xl">
                {isSeniorSecondaryExpanded ? 'Seeless' : 'Expand'}
              </button>
              <div className={`${isSeniorSecondaryExpanded ? 'block' : 'hidden'}`}>
              <p className='text-[1.3rem]'>{curriculumData.seniorSecondary.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4>Science Stream</h4>
                    <button onClick={() => setIsScienceStreamExpanded(!isScienceStreamExpanded)} className="text-pink-500 font-medium text-2xl">
                      {isScienceStreamExpanded ? 'Seeless' : 'Expand'}
                    </button>
                    <div className={`${isScienceStreamExpanded ? 'block' : 'hidden'}`}>
                      <ul>
                        {curriculumData.seniorSecondary.science.map((subject, index) => (
                          <li className='text-2xl my-2' key={index}>{subject}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4>Commerce Stream</h4>
                    <button onClick={() => setIsCommerceStreamExpanded(!isCommerceStreamExpanded)} className="text-pink-500 font-medium text-2xl">
                      {isCommerceStreamExpanded ? 'Seeless' : 'Expand'}
                    </button>
                    <div className={`${isCommerceStreamExpanded ? 'block' : 'hidden'} text-3xl`}>
                      <ul>
                        {curriculumData.seniorSecondary.commerce.map((subject, index) => (
                          <li className='text-2xl my-2' key={index}>{subject}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

  
      
    </div>
  );
}

export default Curiiculum;
