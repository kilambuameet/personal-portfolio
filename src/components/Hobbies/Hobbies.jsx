import React from 'react';
import { FaFootballBall, FaHiking, FaMusic, FaTableTennis } from 'react-icons/fa'; // Icons for hobbies

const hobbiesData = [
  {
    name: "Football",
    icon: <FaFootballBall className="text-blue-600 text-4xl" />,
    description: "I enjoy playing football and keeping up with matches whenever I can."
  },
  {
    name: "Indoor Cricket",
    icon: <FaTableTennis className="text-blue-600 text-4xl" />,
    description: "I love indoor cricket, it keeps me active and competitive."
  },
  {
    name: "Trekking",
    icon: <FaHiking className="text-blue-600 text-4xl" />,
    description: "Trekking is my way of connecting with nature. It's always an adventure!"
  },
  {
    name: "Singing",
    icon: <FaMusic className="text-blue-600 text-4xl" />,
    description: "Singing is my passion. It brings me joy and helps me express myself."
  }
];

const Hobbies = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Hobbies & Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbiesData.map((hobby, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
              <div className="mb-4">{hobby.icon}</div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">{hobby.name}</h3>
              <p className="text-gray-600">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
