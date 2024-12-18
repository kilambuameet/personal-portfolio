import React from "react";

const projectsData = [
  {
    title: "Glosifi Web",
    description: "A web platform for financial insights and analysis.",
    technologies: ["React", "Vite", "CSS"],
    liveDemo: "https://example.com/glosifi-web", // Replace with actual link
    sourceCode: "https://github.com/username/glosifi-web",
  },
  {
    title: "Personal Website",
    description:
      "My personal portfolio website showcasing my projects and skills.",
    technologies: ["React", "Vite", "JavaScript"],
    liveDemo: "https://example.com/personal-website", // Replace with actual link
    sourceCode: "https://github.com/username/personal-website",
  },
  {
    title: "Advanced Login Customizer Plugin",
    description: "A WordPress plugin for customizing login pages with ease.",
    technologies: ["WordPress", "PHP", "CSS"],
    liveDemo: "https://example.com/plugin-demo", // Replace with actual link
    sourceCode: "https://github.com/username/plugin-repo",
  },
];

const Projects = () => {
  return (
    <section className="py-12 bg-gray-100 mt-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-blue-600 text-white text-sm font-medium px-2 py-1 rounded mr-2 mb-2"
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
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
