const projectsData = [
  {
    title: "Glosifi Web",
    description:
      "Glosifi Web is a comprehensive online platform that enables users to easily book appointments for various services. Built with React and Vite, the platform ensures a fast and responsive user experience, while clean CSS styling enhances usability. Users can manage schedules, view service details, and receive confirmations seamlessly, making appointment booking simple and efficient.",
    technologies: ["React", "Vite", "CSS"],
    liveDemo: "https://glosifi.com/",
    // sourceCode: "https://github.com/username/glosifi-web",
  },
  {
    title: "TextUtils",
    description:
      "TextUtils is a versatile utility application designed to help users manipulate and analyze text in multiple ways. Built using React and Tailwind CSS, it allows operations such as converting text cases, removing extra spaces, counting words and characters, and more. The intuitive interface ensures that users can quickly process and transform text for a variety of purposes, from academic writing to content creation.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    liveDemo: "https://github.com/kilambuameet/textutis",
    // sourceCode: "https://github.com/username/personal-website",
  },
  {
    title: "Sansa Chocolate",
    description:
      "Sansa Chocolate is a beautifully designed website for a chocolate brand, created to showcase products and engage customers. Built with HTML, SASS, CSS, and JavaScript, the website features interactive elements, product galleries, and smooth navigation. It emphasizes brand aesthetics while providing an enjoyable browsing experience, making it easy for users to learn about products and connect with the brand online.",
    technologies: ["HTML", "SASS", "CSS", "JavaScript"],
    liveDemo: "https://github.com/kilambuameet/sansachocolates",
    // sourceCode: "https://github.com/username/plugin-repo",
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
    // sourceCode: "https://github.com/username/plugin-repo",
  },
  {
    title: "Amira Care World",
    description:
      "Amira Care World is a fully responsive website designed for a beauty parlor and wellness services, built with React, Vite, Tailwind CSS, and JavaScript. It allows users to explore various services, view detailed information, and book appointments directly through the website. The clean layout, smooth navigation, and mobile-friendly design ensure an accessible and pleasant user experience for all visitors, effectively promoting the business online.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://www.amiracare.com.np/",
    // sourceCode: "https://github.com/username/plugin-repo",
  },
  {
    title: "Shantaj Beauty and Spa",
    description:
      "Shantaj Beauty and Spa is a professional website developed to showcase the services of a beauty and wellness center. Built with React, Vite, Tailwind CSS, and JavaScript, the site features an elegant design, detailed service descriptions, online booking capabilities, and client testimonials. Its responsive layout ensures a smooth experience across devices, helping the business engage with clients and attract new customers effectively through an online presence.",
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
