import React, { useState } from "react"
import { motion } from 'framer-motion';
import data from "../assets/Achievement_data/data"
const Achievement = () => {
  const [item, setItem] = useState(data)

  const studentCouncil = [
    { name: 'Amy Parker', position: 'President', grade: 'Grade 12' },
    { name: 'Rajiv Mehta', position: 'Vice President', grade: 'Grade 11' },
    { name: 'Lisa Wong', position: 'Secretary', grade: 'Grade 10' }
  ];
  return (
    <>
      <div className="achievements w-screen">
        <h2 className="text-3xl font-bold mb-4 p-2 text-center">Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center justify-center ">
          {item.map((achievement, index) => (
            <div key={index} className="achievement-card bg-white p-4 rounded-lg shadow-md shadow-pink-300 m-auto">
              <img src={achievement.image} alt={achievement.name} className="w-full h-80 object-cover rounded-lg mb-4" />
              <h3 className="text-3xl font-bold">{achievement.name}</h3>
              <p className="text-2xl">{achievement.achievement}</p>
            </div>
          ))}
        </div>

        <section className="student-council text-center m-10">
      <h2 className="text-3xl font-bold mb-4 text-center">Student Council</h2>
      <ul className="list-none">
        {studentCouncil.map((member, index) => (
          <motion.li
            key={index}
            className="flex items-center mb-2 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="font-bold text-2xl text-center  ">{member.position}:</span>
            <span className="text-2xl text-center ">{member.name}, {member.grade}</span>
          </motion.li>
        ))}
      </ul>
    </section>
      </div>
    </>
  )
}

export default Achievement