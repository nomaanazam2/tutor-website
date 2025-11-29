import React from "react";
import { CheckCircle } from "lucide-react";

const FeatureRow = ({ text }) => (
  <div className="flex items-start gap-3">
    <CheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
    <span className="text-slate-700">{text}</span>
  </div>
);

const TimelineItem = ({ role, company, date, desc, isEdu }) => (
  <div className="relative pb-8 last:pb-0">
    <div
      className={`absolute -left-[41px] w-5 h-5 rounded-full border-4 border-white ${
        isEdu ? "bg-green-500" : "bg-indigo-600"
      } shadow`}
    ></div>
    <h4 className="font-bold text-slate-900 text-lg">{role}</h4>
    <div className="flex flex-wrap gap-x-4 text-sm text-slate-500 mb-2 mt-1">
      <span className="font-medium text-indigo-600">{company}</span>
      <span>•</span>
      <span>{date}</span>
    </div>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Experience & Education
            </h2>
            <p className="text-slate-600 mb-8">
              With a strong academic foundation and years of teaching across
              different platforms, I help students bridge the gap between
              confusion and clarity.
            </p>

            <div className="space-y-8 border-l-2 border-indigo-200 pl-8 ml-4">
              <TimelineItem
                role="Online Mathematics Tutor"
                company="TutorX"
                date="Nov 2024 - Present"
                desc="Providing personalized one-on-one sessions for students in Australia & UK (IGCSE, NSW, VCAA). Designing customized assignments to reinforce learning."
              />
              <TimelineItem
                role="Online Mathematics Tutor"
                company="Third Space Global"
                date="Oct 2023 - Oct 2024"
                desc="Explained math concepts to IGCSE students using positive reinforcement. Developed individualized lesson plans and exam strategies."
              />
              <TimelineItem
                role="TGT (Math)"
                company="Spring Dale Public School"
                date="Sept 2020 - Dec 2021"
                desc="Taught middle and secondary school students, managing classroom dynamics and curriculum delivery."
              />
              <TimelineItem
                role="MSc in Mathematics & CS"
                company="Jamia Millia Islamia"
                date="Graduated June 2023"
                desc="Achieved 8.8 CGPA. Advanced coursework in Algebra, Calculus, Data Structures, and Algorithms."
                isEdu
              />
              {/* <TimelineItem
                role="MSc in Mathematics & CS"
                company="Jamia Millia Islamia"
                date="Graduated June 2023"
                desc="Achieved 8.8 CGPA. Advanced coursework in Algebra, Calculus, Data Structures, and Algorithms."
                isEdu
              /> */}
            </div>
          </div>

          <div id="about" className="bg-white p-8 rounded-2xl shadow-lg h-fit">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              My Teaching Philosophy
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I believe every student learns differently. My approach focuses on
              creating a
              <span className="font-semibold text-indigo-600">
                {" "}
                caring and encouraging environment{" "}
              </span>
              where mistakes are seen as learning opportunities.
            </p>

            <div className="space-y-4">
              <FeatureRow text="Personalized 1-on-1 attention" />
              <FeatureRow text="Customized home assignments" />
              <FeatureRow text="Exam strategies" />
              <FeatureRow text="Deep conceptual understanding" />
            </div>

            <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
              <h4 className="font-bold text-indigo-900 mb-2">Why Choose Me?</h4>
              <p className="text-sm text-indigo-800">
                "I don't just teach formulas; I teach how to think
                mathematically. Whether it's algebra or calculus, we break it
                down until it clicks."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
