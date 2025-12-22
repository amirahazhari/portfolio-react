import {
  ArrowLeft,
  Calendar,
  Users,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import Slider from "react-slick";
import myEnergyStatsImage from "figma:asset/ea00ecdce7c71ed6234c143c54b8bf03b9c8a960.png";
import alphaGasImage from "figma:asset/e5ae8665297468404097a1757879e34ff57a93c2.png";
import energyPortalChallengeImage from "figma:asset/92df1da562eb40e2b829386889af3e9e9cb5abe2.png";
import energyPortalUserProblemImage from "figma:asset/7700dfc2a59ae8af9eec700cec3816f5158c83c2.png";
import energyPortalSolutionImage from "figma:asset/c50669d3b9d7d84a6fa68ecceb2c7ae89d3737a3.png";
import alphaGasChallengeImage from "figma:asset/fa368677f572a8e376ff6d8dd216213d5b2e0089.png";
import alphaGasUserProblemImage from "figma:asset/4f2c09875affd58572fbdd991249d47a2a065294.png";
import alphaGasOutcomeImage from "figma:asset/b76450c7249c31a45b1137ec51e4e3b4ff62eaf9.png";
import alphaGasHighlightComparison from "figma:asset/8458487d2656248abaa908a9976fc9a310039145.png";
import alphaGasHighlightDashboard from "figma:asset/5db28f03828737f3da9e0a0f8e17a195263c8130.png";
import energyPortalHighlightMobile from "figma:asset/af0b282e9b9d06d8f09bf4ca898d6c6e9ff30c2a.png";
import energyPortalHighlightNews from "figma:asset/542080eee6f1ba2940a8146391d1bf0e37309a68.png";
import energyPortalHighlightChart from "figma:asset/040c68ac26a6a0eff857021596e67892119e71a9.png";

interface CaseStudyDetailProps {
  caseStudyId: number;
  onBack: () => void;
}

const caseStudyData: Record<number, any> = {
  1: {
    id: 1,
    title: "MYenergySTats",
    category: "Energy Portal",
    description:
      "Malaysia's comprehensive energy information portal, simplifying complex usage data into meaningful insights for everyday users.",
    image: myEnergyStatsImage,
    //video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    tags: [
      "UI/UX",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Liferay",
    ],
    role: "UI/UX Designer & Front-End Developer",
    timeline: "1 year",
    team: "10 people",
    overview:
      "This project aimed to transform the existing Energy Portal into a cleaner, more intuitive platform. Users needed a seamless way to access and understand energy data, and the goal was to simplify the experience while enhancing usability and responsiveness.",
    highlights: [
      {
        title: "Built for smooth, seamless interaction.",
        image: energyPortalHighlightNews,
      },
      {
        title: "Simplified with intuitive, responsive design.",
        image: energyPortalHighlightMobile,
        fit: "contain",
      },
      {
        title: "Dynamic charts powered by clean, modular code.",
        image: energyPortalHighlightChart,
      },
    ],
    challengeImage: energyPortalChallengeImage,
    challengeHeadline: "Data Scattered. Insights lost.",
    challengeDescription:
      "We needed to bring all energy information into a single, intuitive platform that makes sense at a glance.",
    challenge:
      "Users struggled to understand their energy consumption patterns due to complex data presentation and lack of clear visualizations. The existing system was overwhelming with technical jargon and difficult to navigate.",
    userProblemImage: energyPortalUserProblemImage,
    userProblemHeadline:
      "Users were overwhelmed by complex data.",
    userProblemDescription:
      "They needed clarity, speed, and simplicity — a dashboard that tells the story without extra effort.",
    solutionHeadline:
      "A responsive, human-centered energy dashboard.",
    solutionSubtext:
      "Built for focus, featuring smooth navigation and responsive, interactive dashboards.",
    solutionImage: energyPortalSolutionImage,
    solution:
      "I designed and developed a clean, user-friendly dashboard with intuitive data visualizations, clear navigation, and simplified language. The interface uses progressive disclosure to present complex information in digestible chunks.",
    impact: [
      {
        metric: "30%",
        label: "Increase in user engagement",
      },
      {
        metric: "45%",
        label: "Reduction in support tickets",
      },
      {
        metric: "4.6/5",
        label: "User satisfaction rating",
      },
    ],
  },
  2: {
    id: 2,
    title: "Alpha Gas",
    category: "Engineering Operations Platform",
    description:
      "An internal gas operations platform designed to simplify complex engineering workflows through clear, efficient UI/UX.",
    image: alphaGasImage,
    // video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    tags: [
      "Design System",
      "UI/UX",
      "User Research",
      "Prototyping",
    ],
    role: "Lead UI/UX Designer",
    timeline: "2 years",
    team: "6 people",
    highlights: [
      {
        title:
          "Built for clarity, speed, and effortless navigation.",
        image: alphaGasHighlightDashboard,
      },
      {
        title:
          "From wireframes to final build — refined at every detail.",
        image: alphaGasHighlightComparison,
      },
      {
        title:
          "Intuitive design that feels natural, powerful, and reliable.",
        image: alphaGasHighlightDashboard,
      },
    ],
    challengeHeadline: "Fragmented Systems. Planning slowed.",
    challengeDescription:
      "Operations were scattered across multiple tools, making decision-making inefficient.",
    challengeImage: alphaGasChallengeImage,
    challenge:
      "Engineering teams were using multiple disconnected systems, leading to inefficiencies, data silos, and increased error rates. The existing tools were not designed with user experience in mind, making daily operations cumbersome.",
    userProblemImage: alphaGasUserProblemImage,
    userProblemHeadline: "Manual Processes. Insights missing.",
    userProblemDescription:
      "Planners struggled to access key information and relied on manual workflows.",
    solutionHeadline: "Interactive Dashboards. UX redesigned.",
    solutionSubtext:
      "Research, wireframes, prototypes, and responsive interfaces simplified workflows and visualized data clearly.",
    solutionImage: alphaGasImage,
    solution:
      "I conducted extensive user research with engineering teams to understand their workflows and pain points. The solution involved creating a unified platform with a comprehensive design system, streamlined navigation, and role-based interfaces tailored to different user types.",
    outcomeHeadline: "Unified Platform. Smarter Decisions.",
    outcomeDescription:
      "Users can now plan faster, reduce errors, and make informed choices at a glance.",
    outcomeImage: alphaGasOutcomeImage,
    impact: [
      {
        metric: "4.8/5",
        label: "User satisfaction score",
      },
      {
        metric: "60%",
        label: "Time saved on daily tasks",
      },
      {
        metric: "85%",
        label: "Reduction in user errors",
      },
    ],
  },
};

export function CaseStudyDetail({
  caseStudyId,
  onBack,
}: CaseStudyDetailProps) {
  const study = caseStudyData[caseStudyId];

  if (!study) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    customPaging: () => (
      <div className="custom-dot w-2 h-2 rounded-full bg-gray-300 transition-all duration-300 mt-4" />
    ),
  };

  return (
    <div className="min-h-screen bg-white relative">
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <style>{`
        .slick-dots li { width: auto; height: auto; margin: 0 4px; }
        .slick-dots li button { width: auto; height: auto; padding: 0; }
        .slick-dots li button:before { display: none; }
        .slick-dots li.slick-active .custom-dot { width: 24px; background-color: #ea580c; }
      `}</style>
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-6 left-6 z-50"
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-all text-sm text-gray-700"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </button>
      </motion.div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="text-sm text-orange-600 mb-4 tracking-wide uppercase">
              {study.category}
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-tight text-gray-900 mb-6 leading-[1.05]">
              {study.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mb-12 leading-relaxed">
              {study.description}
            </p>

            {/* Project Meta */}
            <div className="flex flex-wrap gap-8 mb-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Users size={18} className="text-gray-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    Role
                  </div>
                  <div className="text-sm text-gray-900">
                    {study.role}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Calendar
                    size={18}
                    className="text-gray-600"
                  />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    Timeline
                  </div>
                  <div className="text-sm text-gray-900">
                    {study.timeline}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Wrench size={18} className="text-gray-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    Team Size
                  </div>
                  <div className="text-sm text-gray-900">
                    {study.team}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className="relative w-full mx-auto rounded-2xl overflow-hidden"
          >
            {study.video ? (
              <video
                src={study.video}
                className="w-full h-auto transform scale-105"
                autoPlay
                loop
                muted
                playsInline
                poster={study.image}
              />
            ) : (
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-auto block"
                loading="eager"
              />
            )}
          </motion.div>

          {/* Project Highlights */}
          {study.highlights && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
              className="mt-32 mb-10"
            >
              <div className="max-w-[1000px] mx-auto pb-12 px-4">
                <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-12 text-left font-bold">
                  Project Highlights
                </h2>
                <Slider {...settings}>
                  {study.highlights.map(
                    (highlight: any, index: number) => (
                      <div
                        key={index}
                        className="px-1 focus:outline-none outline-none"
                      >
                        <div className="mb-6 text-center">
                          <h3 className="text-xl font-medium text-gray-700">
                            {highlight.title}
                          </h3>
                        </div>
                        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50">
                          <img
                            src={highlight.image}
                            alt={highlight.title}
                            className="w-full h-full object-contain"
                            loading="eager"
                          />
                        </div>
                      </div>
                    ),
                  )}
                </Slider>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* View Prototype Button */}
      <div className="sticky top-6 z-40 flex justify-center pointer-events-none -mt-10 mb-10">
        <a
          href={
            study.id === 1
              ? "https://myenergystats.st.gov.my/"
              : "https://www.figma.com/proto/ydwV957I5nFkUk926OJ4W2/AlphaGas-Phase-2?page-id=0%3A1&node-id=811-189531&viewport=174%2C354%2C0.06&t=vvO8529CGsTyWonG-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3221%3A304788"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-all text-sm text-gray-700"
        >
          {study.id === 1 ? "View Portal" : "View Prototype"}
        </a>
      </div>

      {/* Challenge */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2 className="text-sm font-bold text-orange-500 tracking-wide uppercase text-center mb-8">
              What was the business problem?
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center leading-tight mb-8">
              {study.challengeHeadline ||
                "Data Scattered. Insights lost."}
            </h3>
            <p className="text-xl sm:text-2xl text-gray-400 text-center leading-relaxed max-w-2xl mx-auto mb-16">
              {study.challengeDescription ||
                "We needed to bring all energy information into a single, intuitive platform that makes sense at a glance."}
            </p>

            {study.challengeImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
                className="relative max-w-[1000px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-800 mb-32"
              >
                <img
                  src={study.challengeImage}
                  alt="Challenge visual"
                  className="w-full h-auto"
                />
              </motion.div>
            )}

            {study.userProblemHeadline && (
              <>
                <h2 className="text-sm font-bold text-orange-500 tracking-wide uppercase text-center mb-8">
                  What was the user problem?
                </h2>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center leading-tight mb-8">
                  {study.userProblemHeadline}
                </h3>
                <p className="text-xl sm:text-2xl text-gray-400 text-center leading-relaxed max-w-2xl mx-auto mb-16">
                  {study.userProblemDescription}
                </p>

                {study.userProblemImage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.2,
                    }}
                    className="relative max-w-[1000px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
                  >
                    <img
                      src={study.userProblemImage}
                      alt="User problem visual"
                      className="w-full h-auto"
                    />
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-center"
          >
            <h2 className="text-sm font-bold text-orange-600 tracking-wide uppercase mb-8">
              The Solution
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
              {study.solutionHeadline ||
                "A responsive, human-centered energy dashboard."}
            </h3>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16">
              {study.solutionSubtext || study.solution}
            </p>

            {study.solutionImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
                className="relative max-w-[1000px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
              >
                <img
                  src={study.solutionImage}
                  alt="Solution dashboard"
                  className="w-full h-auto"
                />
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold text-orange-500 tracking-wide uppercase mb-8">
              What was the outcome?
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
              {study.outcomeHeadline || "Impact"}
            </h3>
            {study.outcomeDescription && (
              <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-16">
                {study.outcomeDescription}
              </p>
            )}

            {study.outcomeImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
                className="relative max-w-[1000px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-800 mb-16"
              >
                <img
                  src={study.outcomeImage}
                  alt="Outcome visual"
                  className="w-full h-auto"
                />
              </motion.div>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {study.impact.map((item: any, index: number) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.1,
                }}
                className="text-center p-8"
              >
                <div className="text-5xl sm:text-6xl text-white mb-4">
                  {item.metric}
                </div>
                <div className="text-gray-400">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900 mb-8">
              Technologies Used
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {study.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-6 py-3 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-6">
              Interested in working together?
            </h2>
            <a
              href="#contact"
              onClick={onBack}
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all text-sm"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}