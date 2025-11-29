import React, { useState } from "react";
import {
  X,
  TrendingUp,
  Calculator,
  CheckCircle,
  HelpCircle,
  Activity,
  ArrowDown,
  MoveVertical,
  Divide,
  Layers,
  ArrowRight,
  BookOpen,
} from "lucide-react";

const QuadraticModal = ({ handleClose }) => {
  // --- STATE ---
  const [aValue, setAValue] = useState(1);
  const [quizStep, setQuizStep] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState(null);

  const quizQuestions = [
    {
      q: "What is the standard form of a Quadratic?",
      options: ["y = mx + c", "ax² + bx + c = 0", "πr²"],
      correct: "ax² + bx + c = 0",
    },
    {
      q: "Which part of the formula is the 'Discriminant'?",
      options: ["-b", "2a", "b² - 4ac"],
      correct: "b² - 4ac",
    },
    {
      q: "If the Discriminant is POSITIVE (>0), how many roots?",
      options: ["2 Real Roots", "1 Real Root", "No Real Roots"],
      correct: "2 Real Roots",
    },
    {
      q: "Solve x² - 9 = 0",
      options: ["x = 3", "x = -3", "x = ±3"],
      correct: "x = ±3",
    },
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
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-6 flex justify-between items-center shrink-0">
          <div className="text-white">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="text-yellow-300" size={32} />
              Quadratic Equations
            </h2>
            <p className="text-indigo-100 text-sm opacity-90 font-medium">
              The Ultimate Grade 10 Guide
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
          {/* 1. THE BASICS: ANATOMY */}
          <section className="border-b border-slate-100 pb-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Concept 1
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                What is a Quadratic?
              </h3>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="text-center md:text-left flex-1">
                <p className="text-lg text-slate-700 mb-4">
                  A quadratic equation is any equation that can be rearranged in
                  standard form:
                </p>
                {/* Standard Form Visual */}
                <div className="bg-white px-8 py-5 rounded-2xl border border-indigo-200 shadow-sm inline-block mb-6">
                  <span className="text-3xl md:text-4xl font-mono font-bold tracking-wide">
                    <span className="text-red-500">a</span>x² +{" "}
                    <span className="text-blue-500">b</span>x +{" "}
                    <span className="text-green-500">c</span> = 0
                  </span>
                </div>
                <div className="space-y-3 text-sm text-slate-600 bg-white p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full shrink-0"></div>
                    <span>
                      <strong>a:</strong> The coefficient of x² (Controls
                      width/direction).
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full shrink-0"></div>
                    <span>
                      <strong>b:</strong> The coefficient of x (Controls shift).
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full shrink-0"></div>
                    <span>
                      <strong>c:</strong> The constant term (Y-intercept).
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full md:w-auto">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 w-full text-center">
                  <h4 className="font-bold text-slate-800 text-lg mb-1">
                    Roots
                  </h4>
                  <p className="text-xs text-slate-500">
                    Where the graph crosses the X-axis.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 w-full text-center">
                  <h4 className="font-bold text-slate-800 text-lg mb-1">
                    Vertex
                  </h4>
                  <p className="text-xs text-slate-500">
                    The highest or lowest point.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. INTERACTIVE PARABOLA LAB */}
          <section className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-slate-50 to-white p-6 border-b border-slate-200 text-center">
              <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center gap-2">
                <Activity className="text-indigo-500" /> Interactive Lab: The
                "a" Value
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Slide to see how <strong>'a'</strong> changes the shape!
              </p>
            </div>

            <div className="p-8 flex flex-col md:flex-row gap-12 items-center justify-center">
              <div className="w-full md:w-1/3 space-y-6">
                <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                  <label className="block text-sm font-bold text-indigo-900 mb-3">
                    Value of a: {aValue}
                  </label>
                  <input
                    type="range"
                    min="-3"
                    max="3"
                    step="0.5"
                    value={aValue}
                    onChange={(e) => setAValue(parseFloat(e.target.value))}
                    className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="flex justify-between text-xs text-indigo-500 mt-2 font-bold uppercase tracking-wider">
                    <span>Sad (Maximum)</span>
                    <span>Happy (Minimum)</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div
                    className={`p-3 rounded-lg flex items-center gap-2 ${
                      aValue > 0
                        ? "bg-green-50 text-green-700 border border-green-100"
                        : "text-slate-400"
                    }`}
                  >
                    {aValue > 0 ? (
                      <CheckCircle size={16} />
                    ) : (
                      <div className="w-4" />
                    )}
                    <span>
                      <strong>a {">"} 0:</strong> Opens Up (Min point)
                    </span>
                  </div>
                  <div
                    className={`p-3 rounded-lg flex items-center gap-2 ${
                      aValue < 0
                        ? "bg-green-50 text-green-700 border border-green-100"
                        : "text-slate-400"
                    }`}
                  >
                    {aValue < 0 ? (
                      <CheckCircle size={16} />
                    ) : (
                      <div className="w-4" />
                    )}
                    <span>
                      <strong>a {"<"} 0:</strong> Opens Down (Max point)
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative bg-white border border-slate-200 rounded-2xl shadow-inner p-6">
                <ParabolaSVG a={aValue} />
                <div className="absolute top-4 right-4 bg-slate-100 px-3 py-1.5 rounded-lg text-sm font-mono font-bold text-slate-600 border border-slate-200">
                  y = {aValue}x²
                </div>
              </div>
            </div>
          </section>

          {/* 3. SOLVING METHOD 1: FACTORIZATION */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Method 1
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Factorization (Splitting the Middle)
              </h3>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Layers size={100} />
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="relative">
                  <h4 className="font-bold text-lg text-slate-800 mb-6">
                    Step-by-Step Guide:
                  </h4>
                  {/* Timeline Container */}
                  <div className="relative pl-6 space-y-6">
                    {/* Vertical Line */}
                    <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-200"></div>

                    {[
                      "Find two numbers that multiply to ac (First × Last).",
                      "Check if they ADD up to b (Middle Term).",
                      "Rewrite the equation splitting the middle term.",
                      "Factorize by grouping.",
                    ].map((step, idx) => (
                      <div
                        key={idx}
                        className="relative flex gap-4 text-sm text-slate-600"
                      >
                        <div className="absolute -left-[25px] w-6 h-6 bg-white border-2 border-green-500 text-green-700 rounded-full flex items-center justify-center font-bold text-xs shadow-sm">
                          {idx + 1}
                        </div>
                        <p>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-400 uppercase mb-3">
                    Example Problem
                  </div>
                  <div className="font-mono text-2xl font-bold text-slate-800 mb-6">
                    x² + 5x + 6 = 0
                  </div>

                  <div className="space-y-3 text-sm font-mono text-slate-600">
                    <div className="flex justify-between bg-white p-2 rounded border border-slate-200">
                      <span>Product (1×6) = 6</span>
                      <span>Sum = 5</span>
                    </div>
                    <div className="text-indigo-600 font-bold px-2">
                      Numbers are 2 and 3
                    </div>
                    <div className="px-2">
                      x² +{" "}
                      <span className="text-indigo-600 font-bold bg-indigo-50 px-1 rounded">
                        2x + 3x
                      </span>{" "}
                      + 6 = 0
                    </div>
                    <div className="px-2">x(x + 2) + 3(x + 2) = 0</div>
                    <div className="font-bold text-green-600 bg-green-50 p-2 rounded border border-green-100 text-center text-lg">
                      (x + 2)(x + 3) = 0
                    </div>
                    <div className="text-center text-slate-500 mt-2">
                      Roots: x = -2, x = -3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. SOLVING METHOD 2: FORMULA */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Method 2
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                The Quadratic Formula
              </h3>
            </div>

            <p className="text-slate-600 mb-6">
              Use this when you cannot easily guess the factors. It works for{" "}
              <strong>every</strong> quadratic equation!
            </p>

            <div className="bg-slate-900 text-white p-8 rounded-3xl text-center shadow-lg mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
              <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-6">
                Memorize This
              </p>

              {/* Formula Display */}
              <div className="inline-flex items-center gap-3 font-serif text-3xl md:text-4xl tracking-wide">
                <span>x = </span>
                <div className="flex flex-col items-center">
                  <div className="border-b-2 border-white/80 pb-1 mb-1">
                    -b ± <span className="text-yellow-400">√</span>
                    <span className="border-t border-white/80 ml-1">
                      b² - 4ac
                    </span>
                  </div>
                  <div>2a</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
              <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                <BookOpen size={18} /> Solved Example: 2x² - 4x - 3 = 0
              </h4>
              <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                <div className="bg-white p-2 rounded-lg border border-blue-200 font-mono text-sm shadow-sm">
                  a = 2
                </div>
                <div className="bg-white p-2 rounded-lg border border-blue-200 font-mono text-sm shadow-sm">
                  b = -4
                </div>
                <div className="bg-white p-2 rounded-lg border border-blue-200 font-mono text-sm shadow-sm">
                  c = -3
                </div>
              </div>
              <div className="font-mono text-sm text-slate-700 space-y-3 bg-white p-4 rounded-xl border border-blue-100">
                <p>
                  1. Substitute: <br />x = [-(-4) ± √((-4)² - 4(2)(-3))] / 2(2)
                </p>
                <p>
                  2. Simplify: <br />x = [4 ± √(16 + 24)] / 4
                </p>
                <p>
                  3. Solve: <br />
                  <span className="text-blue-600 font-bold">
                    x = [4 ± √40] / 4
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* 5. DISCRIMINANT GUIDE */}
          <section className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100">
            <h3 className="text-xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
              <ArrowDown size={20} /> Nature of Roots (The Discriminant)
            </h3>
            <p className="text-indigo-700 mb-8 text-sm max-w-2xl">
              The part inside the square root <strong>(b² - 4ac)</strong> tells
              you how many answers there are. We call this the Discriminant (Δ).
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all border border-indigo-50">
                <div className="text-lg font-bold text-green-600 mb-1">
                  {">"} 0
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase mb-4">
                  Positive
                </div>
                <div className="h-20 w-full flex items-center justify-center mb-2">
                  <svg width="80" height="50" viewBox="0 0 80 50">
                    <line
                      x1="0"
                      y1="25"
                      x2="80"
                      y2="25"
                      stroke="#cbd5e1"
                      strokeWidth="2"
                    />
                    <path
                      d="M 10 5 Q 40 60 70 5"
                      fill="none"
                      stroke="#4f46e5"
                      strokeWidth="3"
                    />
                    <circle cx="21" cy="25" r="3" fill="#ef4444" />
                    <circle cx="59" cy="25" r="3" fill="#ef4444" />
                  </svg>
                </div>
                <div className="font-bold text-slate-800">2 Real Roots</div>
                <p className="text-[10px] text-slate-500 mt-1">
                  Graph cuts x-axis twice
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all border border-indigo-50">
                <div className="text-lg font-bold text-blue-600 mb-1">= 0</div>
                <div className="text-xs font-bold text-slate-400 uppercase mb-4">
                  Zero
                </div>
                <div className="h-20 w-full flex items-center justify-center mb-2">
                  <svg width="80" height="50" viewBox="0 0 80 50">
                    <line
                      x1="0"
                      y1="25"
                      x2="80"
                      y2="25"
                      stroke="#cbd5e1"
                      strokeWidth="2"
                    />
                    <path
                      d="M 10 5 Q 40 45 70 5"
                      fill="none"
                      stroke="#4f46e5"
                      strokeWidth="3"
                    />
                    <circle cx="40" cy="25" r="3" fill="#ef4444" />
                  </svg>
                </div>
                <div className="font-bold text-slate-800">1 Real Root</div>
                <p className="text-[10px] text-slate-500 mt-1">
                  Graph touches x-axis
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all border border-indigo-50">
                <div className="text-lg font-bold text-red-600 mb-1">
                  {"<"} 0
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase mb-4">
                  Negative
                </div>
                <div className="h-20 w-full flex items-center justify-center mb-2">
                  <svg width="80" height="50" viewBox="0 0 80 50">
                    <line
                      x1="0"
                      y1="45"
                      x2="80"
                      y2="45"
                      stroke="#cbd5e1"
                      strokeWidth="2"
                    />
                    <path
                      d="M 10 5 Q 40 35 70 5"
                      fill="none"
                      stroke="#4f46e5"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
                <div className="font-bold text-slate-800">No Real Roots</div>
                <p className="text-[10px] text-slate-500 mt-1">
                  Floating in air
                </p>
              </div>
            </div>
          </section>

          {/* 6. WORD PROBLEM (Real World) */}
          <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <BookOpen className="text-indigo-500" /> Real World Problem
            </h3>
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 mb-6 text-center italic text-orange-900">
              "A rocket is launched. Its height <strong>h</strong> at time{" "}
              <strong>t</strong> is given by{" "}
              <span className="font-mono font-bold bg-white px-2 py-1 rounded mx-1">
                h = -5t² + 20t
              </span>
              . When does it hit the ground?"
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
              <div className="bg-slate-50 p-4 rounded-xl">
                <strong className="block text-slate-800 mb-1">
                  Step 1: Translate
                </strong>
                "Hit the ground" means height is zero. <br />
                So, <strong>h = 0</strong>.
              </div>
              <div className="bg-slate-50 p-4 rounded-xl">
                <strong className="block text-slate-800 mb-1">
                  Step 2: Set Equation
                </strong>
                -5t² + 20t = 0
              </div>
              <div className="bg-slate-50 p-4 rounded-xl">
                <strong className="block text-slate-800 mb-1">
                  Step 3: Factorize
                </strong>
                Take out common factor -5t: <br />
                <strong>-5t(t - 4) = 0</strong>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-green-500">
                <strong className="block text-slate-800 mb-1">
                  Step 4: Solve
                </strong>
                t = 0 (Launch) or <strong>t = 4 (Landing)</strong>
              </div>
            </div>
          </section>

          {/* 7. POP QUIZ */}
          <section className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <HelpCircle size={100} />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-2">Final Checkpoint</h3>
              <p className="text-indigo-200 mb-8">
                {quizQuestions[quizStep].q}
              </p>

              {quizFeedback === "correct" ? (
                <div className="bg-green-500 text-white px-6 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 animate-bounce">
                  <CheckCircle size={24} /> Correct! Great job!
                </div>
              ) : quizFeedback === "wrong" ? (
                <div className="bg-red-500 text-white px-6 py-4 rounded-xl font-bold text-lg animate-shake">
                  Try Again!
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {quizQuestions[quizStep].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleQuizAnswer(opt)}
                      className="bg-white/10 hover:bg-white hover:text-indigo-900 font-bold py-4 rounded-xl transition-all transform hover:-translate-y-1 border border-white/20 text-lg"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// --- SVG PARABOLA COMPONENT (Refined) ---
const ParabolaSVG = ({ a }) => {
  const width = 200;
  const height = 200;
  const scale = 8;
  let pathD = "M ";
  for (let x = -10; x <= 10; x += 0.5) {
    const y = a * x * x;
    const svgX = 100 + x * scale;
    const svgY = 100 - y * scale;
    if (svgY >= 0 && svgY <= 200) {
      pathD += `${svgX} ${svgY} L `;
    }
  }
  pathD = pathD.slice(0, -3);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="mx-auto overflow-visible"
    >
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="#f1f5f9"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Axes */}
      <line
        x1="100"
        y1="0"
        x2="100"
        y2="200"
        stroke="#94a3b8"
        strokeWidth="2"
      />
      <line
        x1="0"
        y1="100"
        x2="200"
        y2="100"
        stroke="#94a3b8"
        strokeWidth="2"
      />

      {/* Parabola */}
      {a !== 0 ? (
        <path
          d={pathD}
          fill="none"
          stroke="#4f46e5"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <line
          x1="0"
          y1="100"
          x2="200"
          y2="100"
          stroke="#ef4444"
          strokeWidth="3"
          strokeDasharray="5,5"
        />
      )}

      {/* Vertex */}
      <circle
        cx="100"
        cy="100"
        r="5"
        fill="#4f46e5"
        className="animate-pulse"
      />
    </svg>
  );
};

export default QuadraticModal;
