// components/Skills.js
import React from "react";
import {
  FaReact,
  FaPython,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiOpencv,
  SiJavascript,
  SiExpress,
  SiNodedotjs,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiMysql,
  SiSqlite,
  SiCplusplus,
  SiJunit5,
  SiPytest,
  SiGithubactions,
  SiJenkins,
  SiAmazonwebservices,
  SiGooglecloud,
} from "react-icons/si";

const Skills = () => {
  const items = [
    { icon: <FaReact size={50} />, label: "React" },
    { icon: <SiTailwindcss size={50} />, label: "Tailwind CSS" },
    { icon: <SiJavascript size={50} />, label: "JavaScript" },
    { icon: <FaPython size={50} />, label: "Python" },
    { icon: <SiExpress size={50} />, label: "Express.js" },
    { icon: <SiNodedotjs size={50} />, label: "Node.js" },
    { icon: <SiPandas size={50} />, label: "Pandas" },
    { icon: <SiNumpy size={50} />, label: "NumPy" },
    { icon: <SiScikitlearn size={50} />, label: "Scikit-learn" },
    { icon: <SiTensorflow size={50} />, label: "TensorFlow" },
    { icon: <SiOpencv size={50} />, label: "OpenCV" },
    { icon: <SiPostgresql size={50} />, label: "PostgreSQL" },
    { icon: <SiMysql size={50} />, label: "MySQL" },
    { icon: <SiSqlite size={50} />, label: "SQLite" },
    { icon: <FaDocker size={50} />, label: "Docker" },
    { icon: <SiCplusplus size={50} />, label: "C++" },
    { icon: <SiJunit5 size={50} />, label: "JUnit" },
    { icon: <SiPytest size={50} />, label: "PyTest" },
    { icon: <FaGitAlt size={50} />, label: "Git/GitHub" },
    { icon: <SiGithubactions size={50} />, label: "GitHub Actions" },
    { icon: <SiJenkins size={50} />, label: "Jenkins" },
    { icon: <SiAmazonwebservices size={50} />, label: "AWS (Basics)" },
    { icon: <SiGooglecloud size={50} />, label: "Google Cloud" },
  ];

  return (
    <section id="skills" className="px-8 py-20 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-10">
        Skills & Tech Stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-gray-300">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:text-green-400 transform transition duration-300 hover:scale-110"
          >
            {item.icon}
            <p className="mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
