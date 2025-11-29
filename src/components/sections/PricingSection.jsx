import { CheckCircle } from "lucide-react";
import Section from "../../utility/Section";

const Pricing = () => (
  <Section id="pricing" className="bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900">
          Transparent & Affordable Rates
        </h2>
        <p className="mt-4 text-slate-600">
          Invest in your child's education with clear, per-hour pricing. No
          hidden fees.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Primary */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="bg-green-100 w-fit px-3 py-1 rounded-full text-xs font-bold text-green-700 mb-4">
            PRIMARY
          </div>
          <h3 className="text-xl font-bold text-slate-800">Grades 1 - 4</h3>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-extrabold text-slate-900">$8</span>
            <span className="text-slate-500">/ hour</span>
          </div>
          <p className="mt-4 text-slate-600 text-sm">
            Fun, engaging lessons to build love for numbers and basic logic.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> One-to-One
              Session
            </li>
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> Weekly Home
              Assignment
            </li>
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> Monthly
              Assessment
            </li>
          </ul>
        </div>

        {/* Middle School */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="w-fit px-3 py-1 rounded-full text-xs font-bold mb-4 bg-yellow-400 text-indigo-900">
            MIDDLE SCHOOL
          </div>
          <h3 className="text-xl font-bold text-slate-800">Grades 5 - 7</h3>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-extrabold text-slate-900">$10</span>
            <span className="text-slate-500">/ hour</span>
          </div>
          <p className="mt-4 text-slate-600 text-sm">
            Solidifying algebra and geometry concepts before high school.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> One-to-One
              Session
            </li>
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> Weekly Home
              Assignment
            </li>
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> Monthly
              Assessment
            </li>
          </ul>
        </div>

        {/* Middle - Featured */}
        {/* <div className="bg-indigo-600 p-8 rounded-2xl shadow-xl border border-indigo-500 transform md:-translate-y-4 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-indigo-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              MOST POPULAR
            </div>
            <div className="bg-indigo-500 w-fit px-3 py-1 rounded-full text-xs font-bold text-white mb-4">
              MIDDLE SCHOOL
            </div>
            <h3 className="text-xl font-bold text-white">Grades 5 - 7</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-white">$10</span>
              <span className="text-indigo-200">/ hour</span>
            </div>
            <p className="mt-4 text-indigo-100 text-sm">
              Solidifying algebra and geometry concepts before high school.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-indigo-50">
              <li className="flex gap-2">
                <CheckCircle size={16} className="text-yellow-400" /> Algebra
                Basics
              </li>
              <li className="flex gap-2">
                <CheckCircle size={16} className="text-yellow-400" /> Geometry &
                Mensuration
              </li>
              <li className="flex gap-2">
                <CheckCircle size={16} className="text-yellow-400" /> Word
                Problems
              </li>
            </ul>
          </div> */}

        {/* High School */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="bg-purple-100 w-fit px-3 py-1 rounded-full text-xs font-bold text-purple-700 mb-4">
            HIGH SCHOOL
          </div>
          <h3 className="text-xl font-bold text-slate-800">Grades 8 - 10</h3>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-extrabold text-slate-900">$12</span>
            <span className="text-slate-500">/ hour</span>
          </div>
          <p className="mt-4 text-slate-600 text-sm">
            Exam-focused preparation for IGCSE, CBSE, and Australian Boards.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> One-to-One
              Session
            </li>
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> Weekly Home
              Assignment
            </li>
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> Monthly
              Assessment
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Section>
);

export default Pricing;
