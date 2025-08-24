// src/components/Contact.js
import React, { useRef, useState } from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvgbpwop"; 

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    const fd = new FormData(formRef.current);
    const name = fd.get("from_name")?.toString().trim();
    const email = fd.get("reply_to")?.toString().trim();
    const message = fd.get("message")?.toString().trim();
    const hp = fd.get("_hp");

    if (hp) return; // honeypot
    if (!name || !email || !message) {
      setStatus({ type: "error", msg: "Please fill in all fields." });
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: fd,
      });

      if (res.ok) {
        setStatus({ type: "success", msg: "Thanks! Your message has been sent." });
        formRef.current.reset();
      } else {
        setStatus({ type: "error", msg: "Could not send right now. Please try again later." });
      }
    } catch {
      setStatus({ type: "error", msg: "Network error. Please try again later." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-8 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-10">
        Contact
      </h2>

      <div className="grid grid-cols-1 gap-8">
        <article className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg ring-1 ring-gray-700">
          <p className="text-gray-300 mb-6">
            I’m open to software roles, internships, and collaboration. Send me a message and I’ll get back to you.
          </p>

          <div className="flex items-center gap-5 mb-8">
            <a href="mailto:jusnoorsachdeva5@gmail.com" className="flex items-center gap-2 hover:text-green-400 transition">
              <FaEnvelope /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/jusnoor-kaur-sachdeva-b53a18209"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/jusnoorkaur"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <FaGithub /> GitHub
            </a>
          </div>

          <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
            <input type="text" name="_hp" className="hidden" tabIndex="-1" autoComplete="off" />

            <div>
              <label className="block text-sm mb-2 text-gray-200" htmlFor="from_name">Name</label>
              <input
                id="from_name" name="from_name" type="text"
                className="w-full rounded-lg bg-gray-800 border border-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-200" htmlFor="reply_to">Email</label>
              <input
                id="reply_to" name="reply_to" type="email"
                className="w-full rounded-lg bg-gray-800 border border-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-200" htmlFor="message">Message</label>
              <textarea
                id="message" name="message" rows="5"
                className="w-full rounded-lg bg-gray-800 border border-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="How can I help?"
                required
              />
            </div>

            {status.msg && (
              <div className={`text-sm ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>
                {status.msg}
              </div>
            )}

            <button
              type="submit" disabled={submitting}
              className={`inline-flex justify-center items-center rounded-lg bg-green-600 hover:bg-green-500 text-white font-medium px-6 py-3 transition ${
                submitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </article>
      </div>
    </section>
  );
};

export default Contact;
