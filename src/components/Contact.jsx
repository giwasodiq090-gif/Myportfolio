import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus({
      type: "sending",
      message: "Sending your message...",
    });

    emailjs
      .sendForm(
        "service_a94i74l",
        "template_v4ol2mo",
        e.target,
        {
          publicKey: "cKNU-tuVgpW58EGrl",
        }
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "Message sent successfully! I'll get back to you soon.",
          });

          e.target.reset();

          // Remove success message after 5 seconds
          setTimeout(() => {
            setStatus({
              type: "",
              message: "",
            });
          }, 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);

          setStatus({
            type: "error",
            message: "Something went wrong. Please try again.",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Get In Touch
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Contact Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Have a project in mind or want to work together? Feel free
            to send me a message.
          </p>
        </div>

        {/* Contact content */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">

          {/* Contact information */}
          <div>
            <h3 className="text-xl font-bold sm:text-2xl">
              Let's Work Together
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              I'm always interested in learning about new projects,
              ideas, and opportunities. Send me a message and I'll get
              back to you.
            </p>

            <div className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">

              <div>
                <p className="text-sm text-slate-500">
                  Email
                </p>

                <a
                  href="mailto:your@email.com"
                  className="mt-1 block break-all text-blue-400 hover:text-blue-300 sm:break-normal"
                >
                  giwasodiq090@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Phone
                </p>

                <p className="mt-1 text-slate-300">
                  +234 813 665 6490
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Location
                </p>

                <p className="mt-1 text-slate-300">
                  Lagos, Nigeria
                </p>
              </div>

            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={sendEmail}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl sm:p-6"
          >

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Name
              </label>

              <input
                id="name"
                name="from_name"
                type="text"
                placeholder="Your name"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 sm:text-base"
              />
            </div>

            {/* Email */}
            <div className="mt-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email
              </label>

              <input
                id="email"
                name="from_email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 sm:text-base"
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 sm:text-base"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={status.type === "sending"}
              className="mt-6 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status.type === "sending"
                ? "Sending..."
                : "Send Message"}
            </button>

            {/* Status message */}
            {status.message && (
              <div
                className={`mt-4 rounded-lg border px-4 py-3 text-center text-sm ${
                  status.type === "success"
                    ? "border-green-500/30 bg-green-500/10 text-green-400"
                    : status.type === "error"
                    ? "border-red-500/30 bg-red-500/10 text-red-400"
                    : "border-blue-500/30 bg-blue-500/10 text-blue-400"
                }`}
              >
                {status.message}
              </div>
            )}

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;