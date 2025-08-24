// src/components/Projects.js
import React from "react";

const projects = [
  {
    title: "GradeFalcon — Optical Marking System",
    description: [
      "Developed an AI-assisted web platform to automate grading by scanning OMR sheets using OpenCV and image processing.",
      "Built instructor dashboards that visualize student performance and trends with interactive charts.",
      "Designed a scalable architecture integrating React frontend, Flask APIs, PostgreSQL database, and Dockerized deployment.",
      "Improved grading efficiency by reducing manual workload and minimizing errors in evaluation.",
    ],
    tech: ["React", "Flask", "OpenCV", "PostgreSQL", "Docker"],
  },

  {
    title: "HCI Course Project — Collaborative Design & Usability Study",
    description: [
      "Led a usability-focused project in Human-Computer Interaction, aimed at solving the ‘fat finger’ problem in touch interfaces.",
      "Designed low-fidelity paper prototypes, wireframes, and high-fidelity digital prototypes.",
      "Conducted iterative usability tests and gathered feedback from diverse users to refine design decisions.",
      "Delivered a redesigned interface prioritizing accessibility, error reduction, and smoother interaction in mobile contexts.",
    ],
    tech: ["HCI", "User Research", "Prototyping", "Usability Testing"],
  },

  {
    title: "Personal Portfolio Website",
    description: [
      "Created a fully responsive, recruiter-focused portfolio website to showcase projects, skills, and professional experience.",
      "Implemented smooth animations, sticky navigation, and a scroll-to-top feature for enhanced UX.",
      "Optimized for ATS alignment and mobile-first design, ensuring accessibility across devices.",
      "Continuously evolving with new projects and sections tailored for hiring managers.",
    ],
    tech: ["React", "Tailwind CSS"],
  },

  {
    title: "AI-Powered Mental Health & Productivity Tracker",
    description: [
      "Built an AI-driven platform for mood tracking and productivity analysis with personalized recommendations.",
      "Integrated chatbot-based daily sentiment check-ins using GPT/HuggingFace APIs and optional voice input.",
      "Correlated productivity metrics (calendar, screen time, app usage) with mood trends to identify burnout signals.",
      "Designed interactive dashboards in Plotly/Streamlit to visualize emotional cycles and focus patterns.",
      "Implemented privacy-first data handling with user control over tracking and sharing.",
    ],
    tech: [
      "React / Streamlit",
      "Firebase / Node / Flask",
      "OpenAI/HuggingFace",
      "Pandas",
      "Plotly",
      "Google Calendar API",
    ],
  },

  {
    title: "VisionFlow Suite — Multi-Stream Object Detection API & Evaluation",
    description: [
      "Developed a FastAPI-based service for managing multiple live video streams (webcam or file) with real-time object detection.",
      "Built WebSocket endpoints for streaming frames, enabling scalable multi-stream monitoring.",
      "Implemented image classification pipelines with CNN, VGG16, ResNet, Inception, and SVM, trained on public datasets.",
      "Created evaluation toolkit for object detection models with IoU, precision, recall, AP, and mAP metrics.",
      "Generated visualizations (PR curves, confusion matrices) and CSV reports to compare performance across models.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "WebSockets",
      "OpenCV",
      "scikit-learn",
      "TensorFlow/PyTorch",
      "YOLOv7",
      "Pandas",
      "Matplotlib/Plotly",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-8 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, idx) => (
          <article
            key={idx}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg ring-1 ring-gray-700 transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-green-500/10 via-transparent to-transparent" />

            <h3 className="text-xl font-semibold text-white mb-3">
              {p.title}
            </h3>

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
