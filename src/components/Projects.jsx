const Projects = () => {
  const projects = [
    {
      title: "Learnify",
      description:
        "An online learning platform where users can explore courses, search and filter courses, add courses to a wishlist, and manage enrolled courses.",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      image: "/images/learnscreen.png",
      live: "https://learnify-git-main-giwasodiq090-gifs-projects.vercel.app/",
    },
    {
      title: "ÉLANÉ",
      description:
        "A luxury fragrance e-commerce platform featuring product browsing, product details, shopping cart functionality, and secure Paystack payment integration.",
      technologies: ["Next.js", "Tailwind CSS", "JavaScript", "Paystack"],
      image: "/images/elane.png",
      live: "https://elane-jomb9wabt-giwasodiq090-gifs-projects.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern and responsive personal portfolio website designed to showcase my skills, projects, and experience as a frontend developer.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
      image: null,
      live: "#",
    },
    {
      title: "Course Finder",
      description:
        "A responsive course discovery interface with search, category filtering, course cards, and a clean user-friendly design.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      image: null,
      live: "#",
    },
  ];

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            My Work
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Here are some of the projects I have built while developing my
            frontend development skills.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              {/* Project preview */}
              <div className="h-44 overflow-hidden bg-slate-800 sm:h-52">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-5xl font-bold text-blue-500">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Project information */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-bold sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400 sm:mt-4 sm:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold transition hover:bg-blue-700 sm:w-auto"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
