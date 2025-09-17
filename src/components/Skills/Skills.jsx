const skillsData = [
  {
    category: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite"],
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
    <section className="py-16 bg-slate-50" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12 font-mono">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillCategory, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md hover:ring-indigo-200 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                {skillCategory.category}
              </h3>
              <ul className="list-none">
                {skillCategory.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="text-slate-700 text-lg mb-2 flex items-center"
                  >
                    <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
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
