import { LaptopMinimal , ChartColumnBig, Handshake , MonitorCog  } from 'lucide-react';
import idCard from "../assets/id-card.png";

const skills = [
  {
    icon: ChartColumnBig,
    title: 'Business Analysis',
    description: 'Translate business needs into actionable requirements and solutions.'
  },
  {
    icon: Handshake ,
    title: 'Stakeholder Collaboration',
    description: 'Facilitate communication between business and technical teams for successful project delivery.'
  },
  {
    icon: MonitorCog ,
    title: 'Solution Design',
    description: 'Analyze complex problems and design effective digital solutions that meet business objectives.'
  },
  {
    icon: LaptopMinimal ,
    title: 'Technical Understanding',
    description: 'Bridge business and technology by understanding technical constraints and possibilities to deliver optimal solutions.'
  }
];

const tools = [
  "Business Analysis",
  "Banking & Fintech",
  "Requirements Gathering",
  "Stakeholder Management",
  "Process Improvement",
  "SQL",
  "UAT",
  "Miro",
  "Figma",
  "Jira",
  "Azure DevOps",
  "Agile Methodologies",
];


export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-black text-white relative overflow-hidden">
      <div className="max-w-[980px] mx-auto">
        
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
  
  {/* LEFT: Image */}
  <div className="flex justify-center lg:justify-start">
    <div className="relative">
      <img
        src={idCard} // replace with your image path
        alt="Amirah ID Card"
        className="w-[260px] sm:w-[300px] lg:w-[340px]"
      />
    </div>
  </div>

  {/* RIGHT: Text */}
  <div className="text-center lg:text-left">
    <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-8 leading-tight">
      <span className="block">Turning business problems into</span>
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
        digital solutions.
      </span>
    </h2>

    <p className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-10">
      I'm Amirah Azhari, a Business Analyst who thinks like a developer and designs like a designer. I specialize in banking, digital transformation, and product development, bridging the gap between business needs and technical solutions.
    </p>    
  </div>

</div>
        {/* Skills Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="
                        rounded-3xl
                        bg-gradient-to-b from-white/[0.08] to-white/[0.02]
                        border border-white/10
                        p-8
                        shadow-[0_20px_40px_rgba(0,0,0,0.5)]
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                        transition-all duration-300
                        hover:border-white/20
                        hover:translate-y-2
                        "

              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 transition group-hover:bg-white/15">
                  <Icon className="text-purple-300" size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

        {/* Toolkit */}
        <div className="text-center">
          <p className="text-xs tracking-widest text-gray-500 mb-10">
           WHAT I BRING
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <span
                key={tool}
                className="
                  px-5 py-2
                  rounded-full
                  bg-white/5
                  border border-white/10
                  text-sm text-gray-300
                  backdrop-blur
                "
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}