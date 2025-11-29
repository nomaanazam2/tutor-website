import { Award, BookOpen, Globe } from "lucide-react";
import Section from "../../utility/Section";

const CurriculumCard = ({ title, icon, desc }) => (
  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const Curriculum = () => (
  <Section id="curriculum" className="bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900">
          Expertise Across Global Boards
        </h2>
        <p className="mt-4 text-slate-600 text-lg">
          Whether you are in London, Melbourne, or Delhi, I have the specific
          curriculum experience to help you succeed.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <CurriculumCard
          title="IGCSE Board"
          icon={<Globe className="w-8 h-8 text-blue-500" />}
          desc="Comprehensive preparation for International GCSE mathematics (Core & Extended). focusing on past papers and marking schemes."
        />
        <CurriculumCard
          title="Australian Boards"
          icon={<Award className="w-8 h-8 text-green-500" />}
          desc="Specialized tutoring for NSW Board and Victoria's VCAA standards. Deep focus on Math Methods and conceptual clarity."
        />
        <CurriculumCard
          title="Foundational Math"
          icon={<BookOpen className="w-8 h-8 text-purple-500" />}
          desc="Building strong basics for Primary and Middle school students (Class 1 - 8) to remove fear of Algebra and Geometry."
        />
      </div>
    </div>
  </Section>
);

export default Curriculum;
