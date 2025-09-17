import React from "react";

const projectsData = [
  {
    title: "Glosifi Web",
    description: "A web platform to book an appointment.",
    technologies: ["React", "Vite", "CSS"],
    liveDemo: "https://glosifi.com/",
    // sourceCode: "https://github.com/username/glosifi-web",
  },
  {
    title: "TextUtils",
    description: "A utility app to manipulate and analyze text",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    liveDemo: "https://github.com/kilambuameet/textutis",
    // sourceCode: "https://github.com/username/personal-website",
  },
  {
    title: "Sansa Chocolate",
    description: "A website for a chocolate brand.",
    technologies: ["HTML", "SASS", "CSS", "JavaScript"],
    liveDemo: "https://github.com/kilambuameet/sansachocolates",
    // sourceCode: "https://github.com/username/plugin-repo",
  },
  {
    title: "Amira Care World",
    description: "A website for parlor and beauty services.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://www.amiracare.com.np/",
    // sourceCode: "https://github.com/username/plugin-repo",
  },
  {
    title: "Shantaj Beauty and Spa",
    description: "A website for parlor and beauty services.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://www.shantaj.com.np/",
    // sourceCode: "https://github.com/username/plugin-repo",
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-slate-50 mt-10" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12 font-mono">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:ring-indigo-200 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">
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
