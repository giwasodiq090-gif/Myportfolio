const Skills = () => {
  const skills = [
    {
      name: "HTML",
      level: "Advanced",
      description: "Semantic and accessible web structure.",
    },
    {
      name: "CSS",
      level: "Advanced",
      description: "Responsive layouts and modern styling.",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      description: "Interactive and dynamic web applications.",
    },
    {
      name: "React",
      level: "Intermediate",
      description: "Reusable components and modern React applications.",
    },
    {
      name: "Tailwind CSS",
      level: "Intermediate",
      description: "Fast and responsive UI development.",
    },
    {
      name: "Next.js",
      level: "Intermediate",
      description: "Full-stack React applications and routing.",
    },
  ];

  return (
    <section id="skills" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            My Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Technologies I Use
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Here are some of the technologies and tools I use to
            build modern and responsive web applications.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500 sm:p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 sm:mb-5">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {skill.name}
                </h3>

                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                  {skill.level}
                </span>
              </div>

              <p className="text-sm leading-7 text-slate-400 sm:text-base">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;