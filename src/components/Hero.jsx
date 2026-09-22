import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pt-20 sm:px-6 sm:pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 sm:gap-12 md:grid-cols-2">
        {/* Left side */}
        <div className="text-center md:text-left">
          <p className="mb-3 text-base font-medium text-blue-400 sm:mb-4 sm:text-lg">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Giwa Sodiq
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-slate-300 sm:mt-4 sm:text-2xl">
            Frontend Developer
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8 md:mx-0">
            I build modern, responsive and user-friendly websites using React,
            JavaScript, Tailwind CSS and Next.js.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4 md:justify-start">
            <a
              href="#projects"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold transition hover:bg-blue-700 sm:w-auto"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="w-full rounded-lg border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-blue-500 hover:text-blue-400 sm:w-auto"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-7 flex flex-wrap justify-center gap-4 sm:mt-8 sm:gap-5 md:justify-start">
            <a
              href="https://github.com/giwasodiq090-gif"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition hover:text-blue-400 sm:text-base"
            >
              GitHub
            </a>

            <a
              href="https://x.com/giwa_savage_00?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition hover:text-blue-400 sm:text-base"
            >
              𝕏 (Twitter)
            </a>

            <a
              href="https://www.instagram.com/savage45141?stkn=OTJ0eHo3eTA1OWh5&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition hover:text-pink-400 sm:text-base"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="flex justify-center">
          <div className="h-56 w-56 overflow-hidden rounded-full border-8 border-blue-600 shadow-2xl sm:h-72 sm:w-72 md:h-80 md:w-80">
            <img
              src="/images/portpic.jpeg"
              alt="Giwa Sodiq"
              className="h-full w-full scale-100 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 sm:bottom-8"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;