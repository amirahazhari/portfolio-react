import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CaseStudies } from './components/CaseStudies';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CaseStudyDetail } from './components/CaseStudyDetail';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<number | null>(null);

  const handleViewDetail = (id: number) => {
    setSelectedCaseStudy(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    setSelectedCaseStudy(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedCaseStudy !== null) {
    return (
      <div className="min-h-screen bg-white">
        <main>
          <CaseStudyDetail caseStudyId={selectedCaseStudy} onBack={handleBackToPortfolio} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CaseStudies onViewDetail={handleViewDetail} />
        <About />
        <Contact />
      </main>
    </div>
  );
}
