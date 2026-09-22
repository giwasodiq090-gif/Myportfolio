const About = () => {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Who I Am</h2>
        </div>

        <div className="grid items-center gap-10 sm:gap-12 md:grid-cols-2">
          {/* About image */}
          <div className="flex justify-center">
            <div className="h-64 w-64 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-xl sm:h-72 sm:w-72 md:h-80 md:w-80">
              <img
                src="/images/portpic.jpeg"
                alt="Giwa Sodiq"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* About text */}
          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">
              Frontend Developer & Web Designer
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8">
              I'm Giwa Sodiq, a frontend developer passionate about building
              modern and responsive web applications. I enjoy turning ideas and
              designs into clean, functional and user-friendly websites.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              I work with technologies such as React, JavaScript, Tailwind CSS
              and Next.js. I'm constantly learning new technologies and
              improving my development skills.
            </p>

            {/* Stats */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 text-center sm:text-left">
                <h4 className="text-2xl font-bold text-blue-400">1+</h4>
                <p className="mt-1 text-sm text-slate-400">Years Learning</p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 text-center sm:text-left">
                <h4 className="text-2xl font-bold text-blue-400">10+</h4>
                <p className="mt-1 text-sm text-slate-400">Projects</p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-900 p-4 text-center sm:text-left">
                <h4 className="text-2xl font-bold text-blue-400">5+</h4>
                <p className="mt-1 text-sm text-slate-400">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
