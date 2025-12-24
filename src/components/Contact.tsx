import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-[980px] mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight text-gray-900 mb-6">
          Let's create something
          <br />
          extraordinary.
        </h2>
        <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a project in mind? Let's talk.
        </p>

          <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:amirahazharii97@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-700 text-white rounded-full text-sm shadow-lg shadow-purple-900/10"
            >
              <Mail size={18} />
          amirahazharii97@gmail.com
            </motion.a>
          

        <div className="flex justify-center gap-8 pt-12 border-gray-200">
          <a
            href="www.linkedin.com/in/amirah-zulaikha-azhari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} strokeWidth={1.5} />
          </a>
          <a
            href="https://github.com/amirahazhari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} strokeWidth={1.5} />
          </a>
        </div>

        <p className="text-gray-400 text-xs mt-12 tracking-wide">
          © 2025 Amirah Azhari
        </p>
      </div>
    </section>
  );
}