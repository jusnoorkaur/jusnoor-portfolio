// components/Skills.js
import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="px-8 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-10">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-gray-300">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">JavaScript</div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">React.js</div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">Node.js</div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">Express.js</div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">Python</div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">Flask</div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">OpenCV</div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">PostgreSQL</div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">Docker</div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">Tailwind CSS</div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">Git & GitHub</div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">REST APIs</div>
      </div>
    </section>
  );
};

export default Skills;
