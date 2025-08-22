import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center text-green-500 mb-10">About</h2>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-lg mb-4">
          Hello! I'm Jusnoor Kaur Sachdeva, a Computer Science graduate from the University of British Columbia.
          I'm passionate about leveraging technology to create impactful digital experiences.
          With a strong foundation in software engineering and a growing interest in artificial intelligence,
          I enjoy building full-stack applications and solving real-world problems through code.
        </p>
        <p className="text-lg mb-4">
          Beyond the screen, I find joy in exploring creative design solutions, staying up-to-date with the latest in tech,
          and collaborating on projects that promote innovation and accessibility.
          Whether it's backend architecture or crafting sleek user interfaces,
          I strive to blend logic and empathy in everything I build.
        </p>
        <p className="text-lg">
          I’m currently looking for opportunities that allow me to grow, contribute meaningfully, and work with teams
          that value curiosity, creativity, and impact.
        </p>
      </div>
    </section>
  );
};

export default About;
