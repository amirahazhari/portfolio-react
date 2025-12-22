import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';


export function Hero() {
  return (
    <section id="home" className="pt-24 pb-32 px-6 min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Very subtle gradient backdrop - Apple style */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30 pointer-events-none" />

      <div className="max-w-[980px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-gray-900 mb-6 leading-[1.05]">
            Design meets code.
            <br />
            Perfectly.
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto mb-12 leading-snug"
        >
          UI/UX Designer & Front-End Developer crafting experiences from concept to production.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-24"
        >
          <a href="#work" className="inline-flex items-center justify-center px-8 py-3 bg-indigo-700 text-white rounded-full hover:bg-indigo-900 transition-all text-sm">
            View my work
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-indigo-700 hover:text-indigo-900 transition-colors text-sm">
            Get in touch
          </a>
        </motion.div>

        {/* Clean tools display - Apple style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-500 text-sm space-y-3"
        >
          <div className="text-xs uppercase tracking-wider">Tools & Technologies</div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-600">
            <span>Figma</span>
            <span className="text-gray-300">·</span>
            <span>Miro</span>
            <span className="text-gray-300">·</span>
            <span>React</span>
            <span className="text-gray-300">·</span>
            <span>Next.js</span>
            <span className="text-gray-300">·</span>
            <span>TypeScript</span>
            <span className="text-gray-300">·</span>
            <span>HTML</span>
            <span className="text-gray-300">·</span>
            <span>CSS</span>
            <span className="text-gray-300">·</span>
            <span>JavaScript</span>
          </div>
        </motion.div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.a
        href="#work"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-40 hover:opacity-100 transition-opacity"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-5 h-5 text-gray-400" />
      </motion.a>
    </section>
  );
}