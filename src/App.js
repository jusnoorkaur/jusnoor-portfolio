import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills"; // merged version
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import { FaDownload } from "react-icons/fa"; // for the download button
import "./index.css";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 pt-24 pb-16 max-w-7xl mx-auto space-y-10 md:space-y-0">
        {/* Image Slide In Left */}
        <div className="md:w-1/2 flex justify-center animate-slide-in-left">
          <img
            src="/images/jusnoor.jpg"
            alt="Jusnoor Kaur Sachdeva"
            className="w-[300px] md:w-[370px] h-auto rounded-3xl shadow-2xl transition-transform duration-700 ease-in-out hover:scale-105"
          />
        </div>

        {/* Text Slide In Right */}
        <div className="md:w-1/2 text-center md:text-left animate-slide-in-right">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Hi, I’m Jusnoor Kaur Sachdeva
          </h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            A driven Computer Science graduate from the University of British Columbia with a deep passion
            for building impactful digital products using AI, frontend precision, and backend strength. I'm currently
            seeking exciting opportunities in software development and tech innovation where I can grow, collaborate,
            and contribute meaningfully to teams solving real-world problems.
          </p>

          {/* Buttons container */}
          <div className="flex justify-center md:justify-start space-x-4">
            {/* View Resume */}
            <a
              href="/Resume_JusnoorKaurSachdeva.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition"
            >
              View Resume
            </a>

            {/* Download Resume */}
            <a
              href="/Resume_JusnoorKaurSachdeva.pdf"
              download="JusnoorKaurSachdeva_Resume.pdf"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition flex items-center space-x-2"
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="w-full bg-gray-800 py-4 shadow-md sticky top-0 z-50">
        <div className="flex justify-center space-x-6 text-white text-sm md:text-base">
          <a href="#about" className="hover:text-green-400 transition">About</a>
          <a href="#projects" className="hover:text-green-400 transition">Projects</a>
          <a href="#experience" className="hover:text-green-400 transition">Experience</a>
          <a href="#skills" className="hover:text-green-400 transition">Skills & Tech Stack</a>
          <a href="#contact" className="hover:text-green-400 transition">Contact</a>
        </div>
      </nav>

      {/* Sections */}
      <main>
        <About />
        <Projects />
        <Experience />
        <Skills /> {/* merged Skills + Tech Stack */}
        <Contact />
      </main>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
