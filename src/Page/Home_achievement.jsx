import React, { useState } from "react"
import data from "../assets/Achievement_data/data"

const Home_achievement = () => {

  const [item, setItem] = useState(data)
  return (
    <>
      <div className="achievements">
        <h2 className="text-3xl font-bold mb-4 p-2 text-center">Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {item.map((achievement, index) => (
            <div key={index} className="achievement-card bg-white p-4 rounded-lg shadow-md shadow-pink-300 border-pink-200 border">
              <img src={achievement.image} alt={achievement.name} className="w-full h-80 object-cover rounded-lg mb-4" />
              <h3 className="text-3xl font-bold">{achievement.name}</h3>
              <p className="text-2xl">{achievement.achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home_achievement