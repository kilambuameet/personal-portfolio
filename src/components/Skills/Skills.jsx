import React from "react";

const skillsData = [
  {
    category: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express", "MongoDB", "MySQL"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "WordPress", "Vercel", "Netlify"],
  },
  {
    category: "Other",
    skills: ["Responsive Design", "REST APIs", "Version Control"],
  },
];

const Skills = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillCategory, index) => (
            <div key={index} className="bg-gray-100 shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                {skillCategory.category}
              </h3>
              <ul className="list-none">
                {skillCategory.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 text-lg mb-2 flex items-center"
                  >
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
