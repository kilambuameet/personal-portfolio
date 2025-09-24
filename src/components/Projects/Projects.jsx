import glosifiWeb from "../../assets/glosifi-web.png";
import weatherApp from "../../assets/weather-app.png";
import shantajWeb from "../../assets/shantaj-web.png";
import movieExplorer from "../../assets/movie-explorer.png";
import blog from "../../assets/blog.png";
import React, { useState } from "react";

const projectsData = [
  {
    title: "Glosifi Web",
    description:
      "Glosifi Web is a comprehensive online platform that enables users to easily book appointments for various services. Built with React and Vite, the platform ensures a fast and responsive user experience, while clean CSS styling enhances usability. Users can manage schedules, view service details, and receive confirmations seamlessly, making appointment booking simple and efficient.",
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "React Query",
      "Tailwind CSS",
    ],
    liveDemo: "https://glosifi.com/",
    screenshot: glosifiWeb,
    category: "Web Platform",
  },
  {
    title: "Movie Explorer",
    description:
      "Movie Explorer is a dynamic and responsive web application built with React, TypeScript, Vite, and Tailwind CSS, enabling users to search and discover movies using the TMDB API. The app provides real-time search, detailed movie information including posters, release dates, and overviews, as well as a curated list of popular movies. It combines a sleek UI with efficient performance, making it easy and enjoyable to explore the world of movies from any device.",
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "React Query",
      "Tailwind CSS",
    ],
    liveDemo: "https://kilambuameet.github.io/Movie-Explorer/",
    screenshot: movieExplorer,
    category: "Entertainment App",
  },
  {
    title: "Blog Page",
    description:
      "A responsive multipage blog built with React, TypeScript, and Tailwind CSS, featuring post listing with pagination, detailed post pages, and smooth navigation using React Router. Posts are fetched from a free API (DummyJSON), and each post displays title, body, views, reactions, and tags. The UI includes modern card layouts, hover effects, and responsive design for mobile and desktop.",
    technologies: ["React", "Axios", "Vite", "Tailwind CSS", "TypeScript"],
    liveDemo: "https://kilambuameet.github.io/posts",
    screenshot: blog,
    category: "Blog App",
  },
  {
    title: "Weather App",
    description:
      "A responsive web application built with React + Vite and Tailwind CSS that allows users to check real-time weather conditions for any city. It fetches data from a weather API and displays temperature, humidity, wind speed, and weather icons, providing a simple and intuitive interface for quick weather updates.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    liveDemo: "https://kilambuameet.github.io/weather-app/",
    screenshot: weatherApp,
    category: "Weather App",
  },
  {
    title: "Shantaj Beauty and Spa",
    description:
      "Shantaj Beauty and Spa is a professional website developed to showcase the services of a beauty and wellness center. Built with React, Vite, Tailwind CSS, and JavaScript, the site features an elegant design, detailed service descriptions, online booking capabilities, and client testimonials. Its responsive layout ensures a smooth experience across devices, helping the business engage with clients and attract new customers effectively through an online presence.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://www.shantaj.com.np/",
    screenshot: shantajWeb,
    category: "Business Website",
  },
];

const Projects = () => {
  const [expandedTechs, setExpandedTechs] = React.useState({});
  const [showFull, setShowFull] = useState(false);

  const toggleTechExpansion = (index) => {
    setExpandedTechs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <section
      className="md:py-20 py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 mt-10 scroll-mt-10"
      id="projects"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <h2 className="md:text-4xl text-2xl font-bold text-center text-slate-800  font-mono">
          My Projects
        </h2>
        <hr className="w-28 mx-auto border-t-2 border-black my-3" />
        {/* <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:mt-12 mt-5">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20"
            >
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-indigo-600 text-xs font-semibold rounded-full shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.screenshot}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 backdrop-blur-sm text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    View Live
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                  {project.title}
                </h3>

                <div className="mb-5">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {showFull
                      ? project.description
                      : `${project.description.slice(0, 120)}...`}
                  </p>
                  <button
                    className="text-blue-500 text-xs font-medium hover:underline"
                    onClick={() => setShowFull(!showFull)}
                  >
                    {showFull ? "See Less" : "See More"}
                  </button>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(expandedTechs[index]
                    ? project.technologies
                    : project.technologies.slice(0, 3)
                  ).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-medium rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <button
                      onClick={() => toggleTechExpansion(index)}
                      className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer border border-slate-200 hover:border-slate-300"
                    >
                      {expandedTechs[index]
                        ? "Show less"
                        : `+${project.technologies.length - 3} more`}
                    </button>
                  )}
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-200 group/link"
                  >
                    Explore Project
                    <svg
                      className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>

                  {/* <div className="flex items-center gap-2 text-slate-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div> */}
                </div>
              </div>

              {/* Decorative Element */}
              {/* <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div> */}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">
            Interested in working together? Let's create something amazing!
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Let's Talk
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
