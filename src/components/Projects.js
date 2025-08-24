// components/Projects.js
import React from "react";

const projects = [
  {
    title: "GradeFalcon – Optical Marking System",
    description: [
      "An AI-based web application that streamlines the grading process by scanning OMR sheets using OpenCV and image processing techniques.",
      "Built with React, Node.js, Flask, PostgreSQL, and Docker.",
      "Integrated analytics dashboard with visual insights for instructors.",
    ],
    tech: ["React", "Flask", "OpenCV", "PostgreSQL", "Docker"],
  },
  {
    title: "AI-Powered Mental Health & Productivity Tracker",
    description: [
      "Designed a platform to help youth combat burnout and anxiety by tracking mood and productivity in real time.",
      "Implemented AI-powered sentiment check-ins using chatbots and optional voice input.",
      "Correlated mood with productivity and highlighted emotional cycles.",
      "Built dashboards for weekly insights and personalized wellness recommendations.",
      "Focused on privacy-first approach with user control over tracked data.",
    ],
    tech: [
      "React / Streamlit",
      "Node.js",
      "Firebase",
      "OpenAI GPT",
      "HuggingFace Transformers",
      "Plotly",
    ],
  },
  {
    title: "Multi-Stream Object Detection API",
    description: [
      "Developed a FastAPI-based system to manage multiple video streams for object detection.",
      "Implemented endpoints to start, stop, and list streams with support for webcams or video files.",
      "Integrated WebSockets for live streaming and real-time frame handling.",
      "Extended the project with evaluation tasks: IoU calculation, precision/recall metrics, precision-recall curves, AP per class, and mAP across classes.",
      "Compared detection performance across multiple YOLOv7 model sizes.",
    ],
    tech: ["Python", "FastAPI", "OpenCV", "YOLOv7", "WebSockets"],
  },
  {
    title: "Personal Portfolio Website",
    description: [
      "A modern, responsive personal portfolio showcasing projects, skills, and experiences.",
      "Built with React and Tailwind CSS, featuring smooth animations, reusable components, and a dark theme.",
      "Continuously updated with new features and deployed for accessibility across devices.",
    ],
    tech: ["React", "Tailwind CSS", "Vite"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-8 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-10">
        Projects
      </h2>

      {/* Single-column layout */}
      <div className="grid grid-cols-1 gap-8">
        {projects.map((p, idx) => (
          <article
            key={idx}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg ring-1 ring-gray-700 transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-green-500/10 via-transparent to-transparent" />

            <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>

            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
              {p.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-2">
              {p.tech.map((t, i) => (
                <li
                  key={i}
                  className="text-xs uppercase tracking-wide bg-gray-700/60 text-gray-200 px-3 py-1 rounded-full"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
