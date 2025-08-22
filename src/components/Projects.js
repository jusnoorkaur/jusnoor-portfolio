// components/Projects.js
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="px-8 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-10">
        Projects
      </h2>
      <div className="space-y-12 text-left text-gray-300 leading-relaxed">

        <div>
          <h3 className="text-xl font-semibold text-white">GradeFalcon - Optical Marking System</h3>
          <p>
            An AI-based web application that streamlines the grading process by scanning OMR sheets
            using OpenCV and image processing techniques. Built with React, Node.js, Flask, PostgreSQL, and Docker.
            Integrated analytics dashboard with visual insights for instructors.
          </p>
          <p className="mt-2"><strong className="text-green-400">Tech Stack:</strong> React, Flask, OpenCV, PostgreSQL, Docker</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">Personal Portfolio Website</h3>
          <p>
            A dynamic, modern portfolio site built with Tailwind CSS and React, showcasing projects,
            skills, and experience with smooth animations and responsive design. Tailored for hiring audiences.
          </p>
          <p className="mt-2"><strong className="text-green-400">Tech Stack:</strong> React, Tailwind CSS, Vite</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">COSC 441 – Solving the Fat Finger Problem</h3>
          <p>
            Developed an HCI research project that proposed offset touch and magnification techniques 
            to solve the "fat finger" problem in mobile touch interfaces. Conducted user studies, 
            evaluated performance metrics, and demonstrated improved accuracy and usability.
          </p>
          <p className="mt-2"><strong className="text-green-400">Tech Stack:</strong> JavaScript, HTML/CSS, Android SDK, SPSS (data analysis)</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">AI Resume Generator for UBC Job Board</h3>
          <p>
            Developed an AI-driven platform that assists students in generating tailored resumes for different job postings
            by extracting keywords and job requirements. Built using GPT APIs and Node.js backend with frontend forms.
          </p>
          <p className="mt-2"><strong className="text-green-400">Tech Stack:</strong> Node.js, GPT-3 API, React, Express</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">COVID-19 Data Visualization Dashboard</h3>
          <p>
            Designed a dashboard to track COVID-19 cases using open APIs. Implemented interactive graphs 
            using D3.js and Chart.js, with filtering options by country/region and trend predictions 
            using regression models. Shared with classmates as part of a data visualization project 
            for awareness and learning.
          </p>
          <p className="mt-2"><strong className="text-green-400">Tech Stack:</strong> React, D3.js, Chart.js, REST APIs</p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
