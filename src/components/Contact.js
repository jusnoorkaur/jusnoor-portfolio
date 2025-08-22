import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center text-green-500 mb-10">Contact</h2>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-lg mb-6">
          I'd love to connect with like-minded professionals, collaborate on projects, or explore new opportunities.
          Feel free to reach out to me through any of the channels below!
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 text-green-500">
            <FaEnvelope className="text-xl" />
            <a href="mailto:jusnoorkaursachdeva@gmail.com" className="text-white hover:underline">
              jusnoorkaursachdeva@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-3 text-green-500">
            <FaLinkedin className="text-xl" />
            <a
              href="https://www.linkedin.com/in/jusnoor-kaur-sachdeva-b53a18209"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center justify-center gap-3 text-green-500">
            <FaGithub className="text-xl" />
            <a
              href="https://github.com/JusnoorKaur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              github.com/JusnoorKaur
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
;
