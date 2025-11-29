import { Eye, FileText } from "lucide-react";
import AlgebraMistakesModal from "../resources/Mistakes";
import TrigonometryModal from "../resources/Trigonometry";
import ExamAnxietyModal from "../resources/Wellness";
import Section from "../../utility/Section";
import { useState } from "react";

const Resources = () => {
  const [openTrigo, setOpenTrigo] = useState(false);
  const [openWellness, setopenWellness] = useState(false);
  const [openMistakes, setopenMistakes] = useState(false);
  const resourceObj = useMemo(() => {
    return [
      {
        key: "trigo",
        title: "Trigonometry Grade 10 Formula Sheet",
        type: "Cheatsheet",
      },
      { key: "exam", title: "Exam Anxiety Buster Guide", type: "Wellness" },
      {
        key: "mistakes",
        title: "10 Common Algebra Mistakes",
        type: "Guide",
      },
    ];
  }, []);

  const handleClick = (key) => {
    if (key === "trigo") {
      setOpenTrigo((prev) => !prev);
    }
    if (key === "exam") {
      setopenWellness((prev) => !prev);
    }
    if (key === "mistakes") {
      setopenMistakes((prev) => !prev);
    }
  };
  return (
    <Section id="resources" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Free Study Resources
          </h2>
          <p className="mt-4 text-slate-600">
            Download these free guides to help you study smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resourceObj.map((res, i) => (
            <div
              key={res.key}
              className="group bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 cursor-pointer flex flex-col"
              onClick={() => handleClick(res.key)}
            >
              {/* Header: Icon & Tag */}
              <div className="flex justify-between items-start mb-5">
                <div className="bg-indigo-50 p-3.5 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <FileText size={24} />
                </div>
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {res.type}
                </span>
              </div>

              {/* Content */}
              <h4 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors">
                {res.title}
              </h4>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                A concise guide to help you revise quickly before exams.
              </p>

              {/* Action Buttons (Improved) */}
              <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-3">
                {/* Primary 'View' Button */}
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-100 group-hover:shadow-indigo-200">
                  <Eye size={18} /> View Guide
                </button>

                {/* Secondary 'Download' Button */}
                {/* <button
                    className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 rounded-lg transition-all"
                    title="Download PDF"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents opening the modal when clicking download
                      // Add download logic here
                    }}
                  >
                    <Download size={20} />
                  </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <TrigonometryModal setOpen={setOpenTrigo} open={openTrigo} />
      <ExamAnxietyModal setOpen={setopenWellness} open={openWellness} />
      <AlgebraMistakesModal setOpen={setopenMistakes} open={openMistakes} />
    </Section>
  );
};

export default Resources;
