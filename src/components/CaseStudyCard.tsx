import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  };
}

interface CaseStudyCardProps {
  study: CaseStudy;
  onViewDetail?: (id: number) => void;
}

export function CaseStudyCard({ study, onViewDetail }: CaseStudyCardProps) {
  return (
    <article className="group">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={study.id % 2 === 0 ? 'lg:order-2' : ''}
        >
          <p className="text-sm text-orange-600 mb-2 tracking-wide uppercase">
            {study.category}
          </p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900 mb-4">
            {study.title}
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            {study.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex w-fit items-center gap-8 p-6 bg-gray-50 rounded-2xl mb-8">
            <div>
              <div className="text-3xl text-gray-900 mb-1">{study.metrics.value}</div>
              <div className="text-sm text-gray-600">{study.metrics.label}</div>
            </div>
          </div>

          <button
            onClick={() => onViewDetail?.(study.id)}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm group/btn"
          >
            View case study
            <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className={study.id % 2 === 0 ? 'lg:order-1' : ''}
        >
          {study.id === 1 ? (
            // MYenergySTats - Apple-style presentation
            <div className="relative">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-8">
                {/* Browser Chrome */}
                <motion.div
                  className="bg-white rounded-t-lg overflow-hidden shadow-2xl"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Browser Controls */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  {/* Browser Content */}
                  <div className="bg-white overflow-hidden">
                    <motion.img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-auto object-contain"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          ) : study.id === 2 ? (
            // Alpha Gas - Laptop mockup
            <div className="relative">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-8 sm:p-12 flex items-center justify-center">
                {/* Laptop Frame */}
                <motion.div
                  className="relative w-full"
                  whileHover={{ y: -8, rotateX: 5 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                >
                  {/* Screen */}
                  <div className="relative bg-gray-900 rounded-t-xl p-2 shadow-2xl">
                    {/* Bezel */}
                    <div className="bg-black rounded-lg overflow-hidden border-[6px] border-gray-900">
                      <div className="aspect-[16/10] bg-white overflow-hidden">
                        <motion.img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0, scale: 1.1 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="relative h-2 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg shadow-lg"></div>
                  {/* Laptop Bottom */}
                  <div className="relative -mt-1">
                    <div className="h-1.5 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-2xl mx-8 shadow-xl"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          ) : (
            // Other case studies - original style
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-50">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          )}
        </motion.div>
      </div>
    </article>
  );
}