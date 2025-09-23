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
    <section
      className="relative md:py-20 py-12 bg-gradient-to-b from-slate-50 to-white scroll-mt-10"
      id="skills"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-6">
        <h2 className="md:text-4xl text-3xl font-bold text-center text-slate-800 mb-2 font-mono">
          My Skills
        </h2>
        <hr className="w-28 mx-auto border-t-2 border-black my-3" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-12 mt-5">
          {skillsData.map((skillCategory, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg ring-1 ring-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <h3 className="md:text-2xl text-xl font-semibold text-indigo-600 mb-6">
                {skillCategory.category}
              </h3>
              <ul className="list-none space-y-3">
                {skillCategory.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="text-slate-700 md:text-lg text-base flex items-center hover:text-indigo-600 transition-colors duration-300"
                  >
                    <span className="inline-block w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 transform hover:scale-125 transition-transform duration-300"></span>
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
