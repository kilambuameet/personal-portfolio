import {
  FaFootballBall,
  FaHiking,
  FaMusic,
  FaTableTennis,
} from "react-icons/fa";

const hobbiesData = [
  {
    name: "Football",
    icon: <FaFootballBall className="text-indigo-600 text-4xl" />,
    description:
      "I enjoy playing football and keeping up with matches whenever I can.",
  },
  {
    name: "Indoor Cricket",
    icon: <FaTableTennis className="text-indigo-600 text-4xl" />,
    description: "I love indoor cricket, it keeps me active and competitive.",
  },
  {
    name: "Trekking",
    icon: <FaHiking className="text-indigo-600 text-4xl" />,
    description:
      "Trekking is my way of connecting with nature. It's always an adventure!",
  },
  {
    name: "Singing",
    icon: <FaMusic className="text-indigo-600 text-4xl" />,
    description:
      "Singing is my passion. It brings me joy and helps me express myself.",
  },
];

const Hobbies = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12 font-mono">
          Hobbies & Interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbiesData.map((hobby, index) => (
            <div
              key={index}
              className="bg-white shadow-sm ring-1 ring-slate-200 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:ring-indigo-200 transition duration-300"
            >
              <div className="mb-4">{hobby.icon}</div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
                {hobby.name}
              </h3>
              <p className="text-slate-700">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
