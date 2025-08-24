// src/components/Projects.js
import React from "react";

const projects = [
  {
    title: "GradeFalcon — Optical Marking System",
    description: [
      "Developed an AI-assisted web platform to automate grading by scanning OMR sheets using OpenCV and image processing.",
      "Built instructor dashboards that visualize student performance and trends with interactive charts.",
      "Designed a scalable architecture integrating React frontend, Flask APIs, PostgreSQL database, and Dockerized deployment.",
      "Improved grading efficiency by reducing manual workload and minimizing evaluation errors.",
    ],
    tech: ["React", "Flask", "OpenCV", "PostgreSQL", "Docker"],
  },

  {
    title: "HCI Course Project — Collaborative Design & Usability Study",
    description: [
      "Led a usability-focused project in Human-Computer Interaction, aimed at solving the ‘fat finger’ problem in touch interfaces.",
      "Created paper prototypes, wireframes, and high-fidelity designs; iterated with structured user tests.",
      "Synthesized feedback to deliver an interface prioritizing accessibility, error reduction, and smoother mobile interaction.",
    ],
    tech: ["HCI", "User Research", "Prototyping", "Usability Testing"],
  },

  {
    title: "AI-Powered Mental Health & Productivity Tracker",
    description: [
      "Built an AI-driven platform for mood tracking and productivity analysis with personalized recommendations.",
      "Implemented chatbot-based daily sentiment check-ins (text/optional voice) and correlated productivity metrics with mood trends.",
      "Designed dashboards to visualize emotional cycles, focus patterns, and early burnout signals with privacy-first controls.",
    ],
    tech: ["React / Streamlit", "Firebase / Node / Flask", "OpenAI/HuggingFace", "Pandas", "Plotly"],
  },

  {
    title: "VisionFlow Suite — Multi-Stream Object Detection API & Evaluation",
    description: [
      "Developed a FastAPI service to manage multiple live video streams (webcam or file) with real-time object detection.",
      "Exposed endpoints to start/stop/list streams and a WebSocket channel for live frames.",
      "Implemented evaluation toolkit for object detection: IoU, precision/recall, AP per class, and mAP across classes.",
      "Compared detection performance across model families (incl. YOLOv7) with CSV reports and PR curves.",
    ],
    tech: ["Python", "FastAPI", "OpenCV", "WebSockets", "scikit-learn", "TensorFlow/PyTorch", "YOLOv7", "Pandas"],
  },

  {
    title: "Personal Portfolio Website",
    description: [
      "A modern, responsive portfolio showcasing projects, skills, and experience with smooth animations and a dark aesthetic.",
      "Single-column card layout, sticky navigation, and scroll-to-top for a focused reading flow.",
      "Continuously updated with recruiter-friendly content and section refinements.",
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

      {/* Single-column layout to match Experience */}
      <div className="grid grid-cols-1 gap-8">
        {projects.map((p, idx) => (
          <article
            key={idx}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg ring-1 ring-gray-700 transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Hover glow */}
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

