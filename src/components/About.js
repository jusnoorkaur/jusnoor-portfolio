import React from "react";

const About = () => {
  return (
    <section id="about" className="px-8 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-10">
        About Me
      </h2>

      {/* Single, polished card to match Projects/Experience style */}
      <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 md:p-8 shadow-lg ring-1 ring-gray-700 transition-all hover:-translate-y-1 hover:shadow-2xl">
        {/* subtle hover glow */}
        <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-tr from-green-500/10 via-transparent to-transparent" />

        {/* intro */}
        <p className="text-gray-300 leading-relaxed mb-5">
          I’m <span className="text-white font-semibold">Jusnoor Kaur Sachdeva</span>, a
          Computer Science graduate from the University of British Columbia who loves building
          clean, useful, and AI-enabled software. I enjoy turning ideas into reliable user
          experiences—from intuitive frontends to robust backends.
        </p>

        {/* quick chips */}
        <ul className="flex flex-wrap gap-2 mb-6">
          {[
            "Frontend + Backend",
            "AI/ML Curious",
            "Data-driven",
            "Collaborative",
            "Continuous Learner",
          ].map((t, i) => (
            <li
              key={i}
              className="text-xs uppercase tracking-wide bg-gray-700/60 text-gray-200 px-3 py-1 rounded-full"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* sections */}
        <div className="space-y-4 text-gray-300">
          <div>
            <h3 className="text-white font-semibold mb-1">What I work with</h3>
            <p>
              React, JavaScript/TypeScript, Tailwind CSS, Node/Express, Python (Flask),
              PostgreSQL, OpenCV, Git/GitHub, and modern RESTful patterns. Comfortable
              collaborating in Agile/Scrum and writing clear, maintainable code.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-1">What I’m doing now</h3>
            <p>
              Actively seeking opportunities in <span className="text-white">software development</span>—
              roles where I can ship features end-to-end, contribute to design discussions,
              and bring AI-assisted capabilities to real products. I’m also polishing projects
              like <span className="text-white">GradeFalcon</span> and an{" "}
              <span className="text-white">AI-powered wellbeing/productivity tracker</span>.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-1">What I want to build</h3>
            <p>
              Human-centered tools that are fast, accessible, and trustworthy—whether that’s a
              well-designed UI, a resilient API, or an AI feature that actually helps. I’m excited
              by teams that value mentorship, code quality, and thoughtful product decisions.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-1">Beyond code</h3>
            <p>
              I care about good documentation, friendly DX, and shipping iteratively. Outside of work,
              I enjoy exploring new frameworks, reading about UX/AI trends, and contributing to
              communities that help more people enter tech.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
