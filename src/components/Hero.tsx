import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { cubicBezier } from "motion";
import { useRef } from "react";
import characterImg from "../assets/char.png";

export function Hero() {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll motion ONLY affects text column
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);


  const containerVariants = {
    hidden: {},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      //scale: 0.96,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      //scale: 1,
      transition: {
        duration: 1.2,
        ease: cubicBezier(0.16, 1, 0.3, 1),
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="pt-24 pb-64 px-6 min-h-screen flex items-center justify-center bg-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-radial-soft" />

        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-purple-100/50 rounded-full blur-[100px] opacity-60"
        />

        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] bg-blue-100/50 rounded-full blur-[100px] opacity-60"
        />

        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] bg-gray-100/80 rounded-full blur-[120px] opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">

          {/* LEFT: Text */}
          <motion.div
            style={{ y,opacity }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center text-left"
          >
            <div className="overflow-hidden mb-6">
            <motion.h1
              variants={itemVariants}
              className="text-center text-left text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-gray-900 leading-[1.05]"
            >
              <span className="block">Design meets code.</span>
          
              <span className="block text-center text-left text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-300% animate-gradient-sm mt-4">
                Perfectly.
              </span>
            </motion.h1>
          </div>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl text-gray-400 max-w-3xl mb-12 mx-auto lg:mx-0"
            >
              UI/UX Designer & Front-End Developer crafting experiences from concept
              to production.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-start justify-center gap-4 mb-16"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#work"
                className="px-8 py-3 bg-indigo-700 text-white rounded-full text-sm shadow-lg shadow-indigo-700/20"
              >
                View my work
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 text-indigo-700 bg-white/50 border border-indigo-100 rounded-full text-sm backdrop-blur-sm"
              >
                Get in touch
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="text-sm space-y-4">
              <div className="uppercase tracking-wider text-gray-400 font-bold">
                Tools & Technologies
              </div>
              <div className="flex flex-wrap justify-start justify-center gap-x-8 gap-y-6 text-gray-500">
                {["Figma", "Miro", "React", "TypeScript", "HTML", "CSS", "JavaScript"].map(
                  (tool) => (
                    <span key={tool}>{tool}</span>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Character */}
          <div className="hidden lg:flex justify-center relativelg:mt-0">
            {/* Shadow */}
            <motion.div
              
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            />

            <div className="relative w-[300px] sm:w-[380px] lg:w-[450px]">
              {/* Decorative circle behind */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.6, 0.5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-purple-100 to-blue-50 rounded-full blur-3xl -z-10"
              />

            {/* Character */}
            <motion.img
              src={characterImg}
              alt="Illustrated character"
              className="relative z-10 -mt-40 w-fit md:w-[280px] lg:w-[320px] object-contain drop-shadow-2xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{
                opacity: 1,
                y: [0, -6, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.8,
                  delay: 0.6,
                  ease: cubicBezier(0.16, 1, 0.3, 1),
                },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
             {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8, ease: cubicBezier(0.16, 1, 0.3, 1) }}
                className="absolute bottom-24 -left-30 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/60"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Status</p>
                    <p className="text-sm font-semibold text-gray-900">Open to work</p>
                  </div>
                </div>
              </motion.div>
          </div>
         
        </div>
      </div>
 </div>
      {/* Scroll indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        href="#work"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-40 hover:opacity-100 transition-opacity z-20"
      >
        <ArrowDown className="w-5 h-5 text-gray-400" />
      </motion.a>
    </section>
  );
}
