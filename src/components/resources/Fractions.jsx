import React, { useState } from "react";
import {
  X,
  ChevronUp,
  ChevronDown,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Lightbulb,
  Divide,
  Pizza,
} from "lucide-react";

const FractionsModal = ({ handleClose }) => {
  // State for the Pizza Lab
  const [numerator, setNumerator] = useState(1);
  const [denominator, setDenominator] = useState(2);

  // State for Quiz
  const [quizStep, setQuizStep] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState(null);

  const quizQuestions = [
    { n: 1, d: 4, options: ["1/2", "1/4", "3/4"], correct: "1/4" },
    { n: 3, d: 8, options: ["3/8", "5/8", "1/3"], correct: "3/8" },
    { n: 2, d: 3, options: ["1/2", "2/3", "3/2"], correct: "2/3" },
  ];

  const handleQuizAnswer = (ans) => {
    if (ans === quizQuestions[quizStep].correct) {
      setQuizFeedback("correct");
      setTimeout(() => {
        setQuizFeedback(null);
        setQuizStep((prev) => (prev + 1) % quizQuestions.length);
      }, 1500);
    } else {
      setQuizFeedback("wrong");
      setTimeout(() => setQuizFeedback(null), 1000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={handleClose}
    >
      <div
        className="bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Consistent Indigo Theme */}
        <div className="bg-indigo-600 p-6 flex justify-between items-center shrink-0">
          <div className="text-white">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Pizza className="text-yellow-300" size={32} />
              Fraction Mastery
            </h2>
            <p className="text-indigo-100 text-sm opacity-90 font-medium">
              Visualizing, Simplifying & Solving
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-12 text-slate-700 custom-scrollbar">
          {/* 1. VOCABULARY SECTION */}
          <section className="flex flex-col md:flex-row gap-8 items-center border-b border-slate-100 pb-8">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Concept
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Anatomy of a Fraction
                </h3>
              </div>

              <div className="flex items-center gap-8 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="flex flex-col items-center">
                  <div className="bg-white text-indigo-600 font-bold text-4xl w-20 h-20 rounded-xl flex items-center justify-center border-2 border-indigo-100 shadow-sm">
                    3
                  </div>
                  <div className="w-24 h-1.5 bg-slate-300 my-3 rounded-full"></div>
                  <div className="bg-white text-purple-600 font-bold text-4xl w-20 h-20 rounded-xl flex items-center justify-center border-2 border-purple-100 shadow-sm">
                    4
                  </div>
                </div>

                <div className="space-y-6 flex-1">
                  <div className="relative pl-6 border-l-4 border-indigo-400">
                    <h4 className="font-bold text-indigo-700 text-lg">
                      Numerator (North)
                    </h4>
                    <p className="text-sm text-slate-600">
                      The number on top. It shows how many parts we{" "}
                      <strong className="text-indigo-600">HAVE</strong>.
                    </p>
                  </div>
                  <div className="relative pl-6 border-l-4 border-purple-400">
                    <h4 className="font-bold text-purple-700 text-lg">
                      Denominator (Down)
                    </h4>
                    <p className="text-sm text-slate-600">
                      The number on bottom. It shows the{" "}
                      <strong className="text-purple-600">TOTAL</strong> parts
                      in the whole.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Example */}
            <div className="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100 flex flex-col items-center shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Pizza size={120} />
              </div>
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">
                3/4 Pizza
              </span>
              <PizzaSVG numerator={3} denominator={4} size={180} />
            </div>
          </section>

          {/* 2. INTERACTIVE PIZZA LAB */}
          <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 p-6 border-b border-slate-200 text-center">
              <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center gap-2">
                <Lightbulb className="text-yellow-500" /> Interactive Lab
              </h3>
              <p className="text-slate-500 text-sm">
                Change the numbers to slice the pizza!
              </p>
            </div>

            <div className="p-8 flex flex-col md:flex-row gap-12 items-center justify-center">
              {/* Controls */}
              <div className="flex flex-col items-center gap-4">
                {/* Numerator Control */}
                <div className="flex items-center gap-4 bg-indigo-50 p-2 pr-4 rounded-full border border-indigo-100">
                  <button
                    onClick={() => setNumerator(Math.max(0, numerator - 1))}
                    className="w-10 h-10 rounded-full bg-white hover:bg-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm transition-colors"
                  >
                    <ChevronDown size={20} />
                  </button>
                  <div className="text-center w-16">
                    <span className="text-xs font-bold text-indigo-400 block uppercase">
                      Have
                    </span>
                    <span className="text-2xl font-bold text-indigo-700">
                      {numerator}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      setNumerator(Math.min(denominator, numerator + 1))
                    }
                    className="w-10 h-10 rounded-full bg-white hover:bg-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm transition-colors"
                  >
                    <ChevronUp size={20} />
                  </button>
                </div>

                <div className="w-px h-8 bg-slate-300"></div>

                {/* Denominator Control */}
                <div className="flex items-center gap-4 bg-purple-50 p-2 pr-4 rounded-full border border-purple-100">
                  <button
                    onClick={() => {
                      const newDenom = Math.max(1, denominator - 1);
                      setDenominator(newDenom);
                      if (numerator > newDenom) setNumerator(newDenom);
                    }}
                    className="w-10 h-10 rounded-full bg-white hover:bg-purple-100 flex items-center justify-center text-purple-600 shadow-sm transition-colors"
                  >
                    <ChevronDown size={20} />
                  </button>
                  <div className="text-center w-16">
                    <span className="text-xs font-bold text-purple-400 block uppercase">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-purple-700">
                      {denominator}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      setDenominator(Math.min(12, denominator + 1))
                    }
                    className="w-10 h-10 rounded-full bg-white hover:bg-purple-100 flex items-center justify-center text-purple-600 shadow-sm transition-colors"
                  >
                    <ChevronUp size={20} />
                  </button>
                </div>
              </div>

              {/* The Pizza Visual */}
              <div className="relative group cursor-pointer transform hover:scale-105 transition-transform duration-300">
                <PizzaSVG
                  numerator={numerator}
                  denominator={denominator}
                  size={240}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-xl border border-slate-100 text-center">
                  <span className="font-bold text-2xl text-slate-800">
                    {numerator}/{denominator}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. METHODS SECTION */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle size={20} /> Simplifying Fractions
              </h3>
              <p className="text-sm text-green-700 mb-4">
                Make the numbers smaller but keep the value the same!
              </p>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-green-100 flex items-center justify-center gap-4">
                <div className="text-center">
                  <div className="font-bold text-xl text-slate-700">4</div>
                  <div className="h-px w-8 bg-slate-300 mx-auto my-1"></div>
                  <div className="font-bold text-xl text-slate-700">8</div>
                </div>
                <ArrowRight className="text-green-400" />
                <div className="text-xs text-green-600 font-bold bg-green-100 px-2 py-1 rounded">
                  ÷ 4
                </div>
                <ArrowRight className="text-green-400" />
                <div className="text-center">
                  <div className="font-bold text-xl text-green-700">1</div>
                  <div className="h-px w-8 bg-green-300 mx-auto my-1"></div>
                  <div className="font-bold text-xl text-green-700">2</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                <Divide size={20} /> Adding Like Fractions
              </h3>
              <p className="text-sm text-blue-700 mb-4">
                If the bottom numbers (denominators) are the same, just add the
                top!
              </p>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 flex items-center justify-center gap-2 text-lg font-bold text-slate-700">
                <span>1/5</span>
                <span className="text-blue-500">+</span>
                <span>2/5</span>
                <span className="text-blue-500">=</span>
                <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  3/5
                </span>
              </div>
            </div>
          </section>

          {/* 4. ACTIVITY: MINI QUIZ */}
          <section className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <HelpCircle size={100} />
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-2">
                Pop Quiz: Name That Fraction!
              </h3>
              <p className="text-indigo-200 mb-8">
                Look at the pizza and choose the correct fraction.
              </p>

              <div className="flex flex-col items-center">
                <div className="bg-white p-6 rounded-full shadow-2xl mb-8 ring-8 ring-white/10">
                  <PizzaSVG
                    numerator={quizQuestions[quizStep].n}
                    denominator={quizQuestions[quizStep].d}
                    size={140}
                  />
                </div>

                {quizFeedback === "correct" ? (
                  <div className="animate-bounce bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-xl flex items-center gap-2 shadow-lg">
                    <CheckCircle /> Correct! You're a Star!
                  </div>
                ) : quizFeedback === "wrong" ? (
                  <div className="animate-shake bg-red-500 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-lg">
                    Oops! Try Again.
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-4 w-full">
                    {quizQuestions[quizStep].options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleQuizAnswer(opt)}
                        className="bg-white/10 hover:bg-white text-white hover:text-indigo-900 border-2 border-white/20 font-bold py-3 rounded-xl text-xl transition-all transform hover:-translate-y-1"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* 5. FUN FACTS */}
          <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3 flex items-center gap-2">
              <Lightbulb size={20} /> Did You Know?
            </h3>
            <ul className="space-y-2 text-sm text-yellow-900">
              <li className="flex gap-2">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-600 shrink-0"></div>{" "}
                The line in the middle of a fraction is called a{" "}
                <strong>vinculum</strong>. Fancy, right?
              </li>
              <li className="flex gap-2">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-600 shrink-0"></div>{" "}
                Fractions were used by ancient Egyptians to build pyramids!
              </li>
              <li className="flex gap-2">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-600 shrink-0"></div>{" "}
                A decimal is just a fraction in disguise ($0.5$ is the same as
                $1/2$).
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

// --- CUSTOM SVG PIZZA COMPONENT ---
const PizzaSVG = ({ numerator, denominator, size = 200 }) => {
  const center = size / 2;
  const radius = size / 2 - 5;

  const getCoordinatesForPercent = (percent) => {
    const x = center + radius * Math.cos(2 * Math.PI * percent);
    const y = center + radius * Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  const slices = [];

  if (denominator === 1) {
    if (numerator === 1) {
      slices.push(
        <circle
          key="full"
          cx={center}
          cy={center}
          r={radius}
          fill="#facc15"
          stroke="#d97706"
          strokeWidth="2"
        />
      );
    } else {
      slices.push(
        <circle
          key="empty"
          cx={center}
          cy={center}
          r={radius}
          fill="#f1f5f9"
          stroke="#cbd5e1"
          strokeWidth="2"
        />
      );
    }
  } else {
    for (let i = 0; i < denominator; i++) {
      const startPercent = i / denominator;
      const endPercent = (i + 1) / denominator;
      const [startX, startY] = getCoordinatesForPercent(startPercent);
      const [endX, endY] = getCoordinatesForPercent(endPercent);
      const largeArcFlag = endPercent - startPercent > 0.5 ? 1 : 0;
      const pathData = [
        `M ${center} ${center}`,
        `L ${startX} ${startY}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
        `Z`,
      ].join(" ");
      const isFilled = i < numerator;

      slices.push(
        <path
          key={i}
          d={pathData}
          fill={isFilled ? "#facc15" : "#f1f5f9"}
          stroke={isFilled ? "#ca8a04" : "#cbd5e1"}
          strokeWidth="2"
          className="transition-all duration-300 ease-in-out"
        />
      );

      if (isFilled && size > 100) {
        const midPercent = (startPercent + endPercent) / 2;
        const [px, py] = [
          center + radius * 0.6 * Math.cos(2 * Math.PI * midPercent),
          center + radius * 0.6 * Math.sin(2 * Math.PI * midPercent),
        ];
        slices.push(
          <circle
            key={`p-${i}`}
            cx={px}
            cy={py}
            r={size / 25}
            fill="#ef4444"
            opacity="0.7"
          />
        );
      }
    }
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="transform -rotate-90 filter drop-shadow-sm"
    >
      {slices}
    </svg>
  );
};

export default FractionsModal;
