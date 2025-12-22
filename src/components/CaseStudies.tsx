import { CaseStudyCard } from './CaseStudyCard';

// src/utils/images.ts
const images = import.meta.glob(
  "../assets/*.{png,gif,jpg,jpeg,webp,svg}",
  { eager: true, import: "default" }
) as Record<string, string>;


export const img = (file: string) => {
  const key = `../assets/${file}`;
  if (!images[key]) {
    console.warn(`Image not found: ${file}`);
  }
  return images[key];
};

const caseStudies = [
  {
    id: 1,
    title: 'MYenergySTats',
    category: 'Energy Portal',
    description: 'A public energy analytics dashboard that simplifies energy usage data into meaningful insights for everyday users. Designed and built with Liferay and React.',
    image: img("my-energy-stats.png"),
    tags: ['UI/UX', 'React', 'JavaScript', 'HTML', 'CSS', 'Liferay'],
    metrics: {
      label: 'Engagement increase',
      value: '30%'
    }
  },
  {
    id: 2,
    title: 'Alpha Gas',
    category: 'Engineering Operations Platform',
    description: 'An internal gas operations platform designed to simplify complex engineering workflows through clear, efficient UI/UX.',
    image: img("e5ae8665297468404097a1757879e34ff57a93c2.png"),
    tags: ['Design System', 'UI/UX', 'User Research', 'Prototyping'],
    metrics: {
      label: 'User Satisfaction',
      value: '4.8/5'
    },

    

  }
];

console.log(
  Object.keys(images).map(path => path.split("/").pop())
);

interface CaseStudiesProps {
  onViewDetail?: (id: number) => void;
}

export function CaseStudies({ onViewDetail }: CaseStudiesProps) {
  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight text-gray-900 mb-4">
            Recent work.
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto">
            Solutions that drive results.
          </p>
        </div>

        <div className="space-y-24">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} onViewDetail={onViewDetail} />
          ))}
        </div>
      </div>
    </section>
  );
}