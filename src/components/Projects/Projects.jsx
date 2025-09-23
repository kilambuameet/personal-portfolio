const projectsData = [
  {
    title: "Glosifi Web",
    description:
      "A web platform for booking appointments quickly and efficiently.",
    technologies: ["React", "Vite", "CSS"],
    liveDemo: "https://glosifi.com/",
    // sourceCode: "https://github.com/username/glosifi-web",
  },
  {
    title: "TextUtils",
    description: "A utility app to manipulate and analyze text with ease.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    liveDemo: "https://github.com/kilambuameet/textutis",
    // sourceCode: "https://github.com/username/personal-website",
  },
  {
    title: "Sansa Chocolate",
    description: "A website showcasing products for a chocolate brand.",
    technologies: ["HTML", "SASS", "CSS", "JavaScript"],
    liveDemo: "https://github.com/kilambuameet/sansachocolates",
    // sourceCode: "https://github.com/username/plugin-repo",
  },
  {
    title: "Movie Explorer",
    description:
      "A React + Vite app to search and explore movies using the TMDB API, built with Tailwind CSS.",
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "React Query",
      "Tailwind CSS",
    ],
    liveDemo: "https://kilambuameet.github.io/Movie-Explorer/",
    // sourceCode: "https://github.com/username/plugin-repo",
  },
  {
    title: "Amira Care World",
    description:
      "A responsive website for beauty services and parlor bookings.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://www.amiracare.com.np/",
    // sourceCode: "https://github.com/username/plugin-repo",
  },
  {
    title: "Shantaj Beauty and Spa",
    description: "A website for parlor and beauty service bookings.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://www.shantaj.com.np/",
    // sourceCode: "https://github.com/username/plugin-repo",
  },
];

const Projects = () => {
  return (
    <section
      className="md:py-16 py-10 bg-slate-50 mt-10 scroll-mt-10"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <h2 className="md:text-4xl text-2xl font-bold text-center text-slate-800  font-mono">
          My Projects
        </h2>
        <hr className="w-28 mx-auto border-t-2 border-black my-3" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-12 mt-5">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:ring-indigo-200 transition duration-300"
            >
              <h3 className="md:text-2xl text-lg font-semibold text-indigo-600 mb-3">
                {project.title}
              </h3>

              <p className="text-slate-700 mb-4">{project.description}</p>

              <div className="mb-5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-indigo-600 text-white text-sm font-medium px-2 py-1 rounded-full mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Live Demo
                </a>
                {/* <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Source Code
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
