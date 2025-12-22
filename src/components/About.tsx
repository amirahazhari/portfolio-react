import { Sparkles, Users, Palette, Award, Code, Layers } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design from research to final mockups.'
  },
  {
    icon: Code,
    title: 'Front-End Dev',
    description: 'Clean, performant code with modern frameworks.'
  },
  {
    icon: Layers,
    title: 'Design Systems',
    description: 'Scalable systems bridging design and development.'
  },
  {
    icon: Sparkles,
    title: 'Prototyping',
    description: 'Interactive prototypes and production-ready code.'
  }
];

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-black text-white">
      <div className="max-w-[980px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6">
            Where design meets development.
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm Amirah Azhari, a hybrid designer-developer who bridges the gap between beautiful 
            interfaces and clean code. I design with development in mind and build with design precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="text-center"
              >
                <Icon className="text-white mx-auto mb-4" size={40} strokeWidth={1.5} />
                <h3 className="text-lg mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{skill.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm mb-4">Design Tools</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-5 py-2 bg-white/10 text-white text-sm rounded-full backdrop-blur-sm">Figma</span>
            <span className="px-5 py-2 bg-white/10 text-white text-sm rounded-full backdrop-blur-sm">Miro</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">Development Stack</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-5 py-2 bg-white/10 text-white text-sm rounded-full backdrop-blur-sm">HTML</span>
            <span className="px-5 py-2 bg-white/10 text-white text-sm rounded-full backdrop-blur-sm">CSS</span>
            <span className="px-5 py-2 bg-white/10 text-white text-sm rounded-full backdrop-blur-sm">JavaScript</span>
            <span className="px-5 py-2 bg-white/10 text-white text-sm rounded-full backdrop-blur-sm">React</span>
            <span className="px-5 py-2 bg-white/10 text-white text-sm rounded-full backdrop-blur-sm">Next.js</span>
            <span className="px-5 py-2 bg-white/10 text-white text-sm rounded-full backdrop-blur-sm">TypeScript</span>
            <span className="px-5 py-2 bg-white/10 text-white text-sm rounded-full backdrop-blur-sm">Git</span>
          </div>
        </div>
      </div>
    </section>
  );
}