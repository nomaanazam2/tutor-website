import { ChevronDown, ChevronUp, Eye, FileText } from "lucide-react";
import AlgebraMistakesModal from "../resources/Mistakes";
import TrigonometryModal from "../resources/Trigonometry";
import ExamAnxietyModal from "../resources/Wellness";
import TimeReadingModal from "../resources/Time";

import Section from "../../utility/Section";
import { useState } from "react";

const Resources = () => {
  const [activeKey, setActiveKey] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const resourceObj = useMemo(() => {
    return [
      {
        key: "trigo",
        title: "Trigonometry Grade 10 Formula Sheet",
        type: "Cheatsheet",
        desc: "Complete SOH CAH TOA, Sine/Cosine Rules & Exact Values table.",
      },
      {
        key: "exam",
        title: "Exam Anxiety Buster Guide",
        type: "Wellness",
        desc: "Breathing techniques and grounding strategies to stay calm.",
      },
      {
        key: "mistakes",
        title: "10 Common Algebra Mistakes",
        type: "Guide",
        desc: "Stop losing easy marks! The 'Forbidden Rules' you must avoid.",
      },
      {
        key: "timeGuide",
        title: "Time Master (Grades 1-3)",
        type: "Guide",
        desc: "Learn to read the clock like a pro!",
      },
    ];
  }, []);

  const INITIAL_LIMIT = 3;
  const visibleResources = showAll
    ? resourceObj
    : resourceObj.slice(0, INITIAL_LIMIT);
  const handleClose = () => setActiveKey(null);

  const renderSelectedResource = () => {
    switch (activeKey) {
      case "trigo":
        return <TrigonometryModal handleClose={handleClose} />;

      case "exam":
        return <ExamAnxietyModal handleClose={handleClose} />;

      case "mistakes":
        return <AlgebraMistakesModal handleClose={handleClose} />;

      case "timeGuide":
        return <TimeReadingModal handleClose={handleClose} />;
    }
  };

  return (
    <Section id="resources" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Free Study Resources
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            View these free guides to help you study smarter. New resources
            added weekly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleResources.map((res) => (
            <div
              key={res.key}
              className="group bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 cursor-pointer flex flex-col h-full"
              onClick={() => setActiveKey(res.key)}
            >
              <div className="flex justify-between items-start mb-5">
                <div className="bg-indigo-50 p-3.5 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <FileText size={24} />
                </div>
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {res.type}
                </span>
              </div>

              <div className="flex-grow">
                <h4 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors line-clamp-2">
                  {res.title}
                </h4>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed line-clamp-3">
                  {res.desc}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-3">
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-100 group-hover:shadow-indigo-200">
                  <Eye size={18} /> View Guide
                </button>
              </div>
            </div>
          ))}
        </div>

        {resourceObj.length > INITIAL_LIMIT && (
          <div className="mt-12 text-center animate-in fade-in">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-full transition-colors"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={20} />
                </>
              ) : (
                <>
                  View All Resources <ChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {renderSelectedResource()}
    </Section>
  );
};

export default Resources;
