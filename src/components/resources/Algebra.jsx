import React, { useState } from "react";
import {
  X,
  Variable,
  Scale,
  Calculator,
  CheckCircle,
  HelpCircle,
  Lightbulb,
  ArrowRight,
  Box,
  Square,
  Circle,
  Triangle,
  Plus,
  Minus,
  Divide,
} from "lucide-react";

const AlgebraBasicsModal = ({ handleClose }) => {
  // --- STATE FOR INTERACTIVE LABS ---
  const [balanceStep, setBalanceStep] = useState(0);
  const [xValue, setXValue] = useState(3);
  const [quizStep, setQuizStep] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState(null);

  const quizQuestions = [
    {
      q: "What is the 'coefficient' in 5x + 2?",
      options: ["5", "x", "2"],
      correct: "5",
    },
    { q: "If x = 4, what is 2x - 3?", options: ["5", "6", "1"], correct: "5" },
    {
      q: "Solve: y + 5 = 12",
      options: ["y = 17", "y = 7", "y = 60"],
      correct: "y = 7",
    },
    { q: "Simplify: 2a + 3a", options: ["5a", "5a²", "6a"], correct: "5a" },
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
        <div className="bg-indigo-600 p-6 flex justify-between items-center shrink-0">
          <div className="text-white">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Variable className="text-yellow-300" size={32} />
              Algebra Adventure (Grades 6-8)
            </h2>
            <p className="text-indigo-100 text-sm opacity-90 font-medium">
              The Ultimate Guide to Expressions & Equations
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
          {/* 1. VISUAL VOCABULARY */}
          <section className="border-b border-slate-100 pb-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Concept 1
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                The Language of Algebra
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Box size={24} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Variable (x)</h4>
                <p className="text-sm text-slate-600">
                  A mystery number hidden in a box. It can change!
                </p>
                <div className="mt-3 bg-white px-3 py-1 rounded border border-slate-200 font-mono text-blue-600 font-bold inline-block">
                  x, y, a, b
                </div>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X size={24} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Coefficient</h4>
                <p className="text-sm text-slate-600">
                  The number attached to the variable. It multiplies it.
                </p>
                <div className="mt-3 bg-white px-3 py-1 rounded border border-slate-200 font-mono text-slate-500 font-bold inline-block">
                  <span className="text-green-600 text-lg">3</span>x
                </div>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-xl">#</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Constant</h4>
                <p className="text-sm text-slate-600">
                  A lonely number without a variable. It never changes.
                </p>
                <div className="mt-3 bg-white px-3 py-1 rounded border border-slate-200 font-mono text-purple-600 font-bold inline-block">
                  5, 10, -2
                </div>
              </div>
            </div>
          </section>

          {/* 2. COMBINING LIKE TERMS (New Section) */}
          <section className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Concept 2
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Combining Like Terms
              </h3>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <p className="text-slate-700 mb-4">
                  You can only add things if they are the{" "}
                  <strong>same "type"</strong>. Think of variables as different
                  shapes.
                </p>
                <ul className="space-y-3 bg-white p-4 rounded-xl border border-orange-200">
                  <li className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <CheckCircle size={18} className="text-green-500" />
                    <span>
                      2 <Square className="inline w-4 h-4 text-blue-500" /> + 3{" "}
                      <Square className="inline w-4 h-4 text-blue-500" /> = 5{" "}
                      <Square className="inline w-4 h-4 text-blue-500" /> (Same
                      Family)
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <X size={18} className="text-red-500" />
                    <span>
                      2 <Square className="inline w-4 h-4 text-blue-500" /> + 3{" "}
                      <Circle className="inline w-4 h-4 text-red-500" /> =
                      Cannot Add (Different Families)
                    </span>
                  </li>
                </ul>
              </div>

              {/* Visual Aid */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-200 text-center">
                <div className="font-mono text-xl text-slate-400 mb-2">
                  Example
                </div>
                <div className="text-2xl font-bold mb-2">
                  <span className="text-blue-600">3x</span> +{" "}
                  <span className="text-red-600">2y</span> +{" "}
                  <span className="text-blue-600">5x</span> -{" "}
                  <span className="text-red-600">y</span>
                </div>
                <ArrowRight className="mx-auto text-slate-300 my-1" />
                <div className="text-3xl font-bold">
                  <span className="text-blue-600">8x</span> +{" "}
                  <span className="text-red-600">y</span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. SUBSTITUTION MACHINE */}
          <section className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Concept 3
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                The Substitution Machine
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-slate-600 mb-4">
                  An expression is like a recipe. <br />
                  <strong className="text-indigo-600">
                    Expression: 2x + 1
                  </strong>{" "}
                  means "Take x, double it, then add 1."
                </p>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Change Value of x:
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={xValue}
                    onChange={(e) => setXValue(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <span className="font-bold text-2xl text-indigo-600 w-8 text-center">
                    {xValue}
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                <div className="font-mono text-lg text-slate-500 mb-2">
                  Calculating...
                </div>
                <div className="text-3xl font-bold text-slate-800">
                  2(<span className="text-indigo-600">{xValue}</span>) + 1 ={" "}
                  <span className="text-green-600 text-4xl ml-2">
                    {2 * xValue + 1}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 4. THE 4 GOLDEN RULES (New Section) */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Cheat Sheet
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                The 4 Golden Rules of Solving
              </h3>
            </div>
            <p className="text-slate-600 mb-6">
              To solve for x, you must get it alone. Use the{" "}
              <strong>Inverse Operation</strong> (the opposite) to remove
              numbers.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
                <div className="text-xs font-bold text-blue-400 uppercase mb-2">
                  If you see
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  <Plus className="inline" />
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase mb-1">
                  You must
                </div>
                <div className="text-xl font-bold text-slate-800">Subtract</div>
              </div>
              <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-center">
                <div className="text-xs font-bold text-red-400 uppercase mb-2">
                  If you see
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  <Minus className="inline" />
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase mb-1">
                  You must
                </div>
                <div className="text-xl font-bold text-slate-800">Add</div>
              </div>
              <div className="bg-green-50 p-4 rounded-xl border border-green-100 text-center">
                <div className="text-xs font-bold text-green-400 uppercase mb-2">
                  If you see
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  <X className="inline" />
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase mb-1">
                  You must
                </div>
                <div className="text-xl font-bold text-slate-800">Divide</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 text-center">
                <div className="text-xs font-bold text-orange-400 uppercase mb-2">
                  If you see
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  <Divide className="inline" />
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase mb-1">
                  You must
                </div>
                <div className="text-xl font-bold text-slate-800">Multiply</div>
              </div>
            </div>
          </section>

          {/* 5. INTERACTIVE EQUATION BALANCER */}
          <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-slate-200 text-center">
              <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center gap-2">
                <Scale className="text-indigo-500" /> The Equation Balancer
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Rule: "Whatever you do to one side, you MUST do to the other."
              </p>
            </div>

            <div className="p-8">
              {/* Visual Scale */}
              <div className="flex justify-center mb-8 relative">
                <div className="w-full max-w-lg h-40 border-b-4 border-slate-800 relative flex items-end justify-between px-12">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-slate-800"></div>

                  {/* Left Pan */}
                  <div className="flex flex-col items-center gap-2 mb-1">
                    <div className="flex items-end gap-1">
                      <div className="w-12 h-12 bg-blue-500 rounded text-white flex items-center justify-center font-bold shadow-md">
                        x
                      </div>
                      <div
                        className={`flex gap-1 transition-all duration-500 ${
                          balanceStep === 1
                            ? "opacity-0 translate-y-10 scale-0"
                            : "opacity-100"
                        }`}
                      >
                        <div className="w-8 h-8 bg-yellow-400 rounded-full text-yellow-800 flex items-center justify-center text-xs font-bold shadow-sm">
                          1
                        </div>
                        <div className="w-8 h-8 bg-yellow-400 rounded-full text-yellow-800 flex items-center justify-center text-xs font-bold shadow-sm">
                          1
                        </div>
                        <div className="w-8 h-8 bg-yellow-400 rounded-full text-yellow-800 flex items-center justify-center text-xs font-bold shadow-sm">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="w-32 h-2 bg-slate-400 rounded-full"></div>
                  </div>

                  {/* Right Pan */}
                  <div className="flex flex-col items-center gap-2 mb-1">
                    <div className="flex items-end gap-1 flex-wrap w-32 justify-center">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 bg-yellow-400 rounded-full text-yellow-800 flex items-center justify-center text-xs font-bold shadow-sm"
                        >
                          1
                        </div>
                      ))}
                      <div
                        className={`flex gap-1 transition-all duration-500 ${
                          balanceStep === 1
                            ? "opacity-0 translate-y-10 scale-0"
                            : "opacity-100"
                        }`}
                      >
                        <div className="w-8 h-8 bg-yellow-400 rounded-full text-yellow-800 flex items-center justify-center text-xs font-bold shadow-sm">
                          1
                        </div>
                        <div className="w-8 h-8 bg-yellow-400 rounded-full text-yellow-800 flex items-center justify-center text-xs font-bold shadow-sm">
                          1
                        </div>
                        <div className="w-8 h-8 bg-yellow-400 rounded-full text-yellow-800 flex items-center justify-center text-xs font-bold shadow-sm">
                          1
                        </div>
                      </div>
                    </div>
                    <div className="w-32 h-2 bg-slate-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="text-center">
                <div className="text-3xl font-mono font-bold text-slate-800 mb-6 tracking-wider">
                  {balanceStep === 0 ? (
                    <span>x + 3 = 7</span>
                  ) : (
                    <span>x = 4</span>
                  )}
                </div>
                {balanceStep === 0 ? (
                  <button
                    onClick={() => setBalanceStep(1)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 flex items-center gap-2 mx-auto"
                  >
                    Subtract 3 from BOTH sides
                  </button>
                ) : (
                  <button
                    onClick={() => setBalanceStep(0)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-3 px-8 rounded-xl transition-all flex items-center gap-2 mx-auto"
                  >
                    Reset Balance
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* 6. WORD PROBLEM DECODER (New Section) */}
          <section className="grid md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Word Problem Decoder
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between bg-white p-3 rounded-lg border border-slate-200">
                  <span className="text-slate-600">
                    A number increased by 5
                  </span>
                  <span className="font-mono font-bold text-indigo-600">
                    x + 5
                  </span>
                </li>
                <li className="flex justify-between bg-white p-3 rounded-lg border border-slate-200">
                  <span className="text-slate-600">
                    The product of 3 and a number
                  </span>
                  <span className="font-mono font-bold text-indigo-600">
                    3x
                  </span>
                </li>
                <li className="flex justify-between bg-white p-3 rounded-lg border border-slate-200">
                  <span className="text-slate-600">5 less than a number</span>
                  <span className="font-mono font-bold text-indigo-600">
                    x - 5
                  </span>
                </li>
              </ul>
            </div>

            {/* Pop Quiz */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <HelpCircle size={80} />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Pop Quiz!</h3>
                <p className="text-indigo-200 text-sm mb-4">
                  {quizQuestions[quizStep].q}
                </p>
                {quizFeedback === "correct" ? (
                  <div className="bg-green-500 text-white px-4 py-3 rounded-lg font-bold flex items-center gap-2">
                    <CheckCircle size={18} /> Correct!
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2">
                    {quizQuestions[quizStep].options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleQuizAnswer(opt)}
                        className="bg-white/10 hover:bg-white hover:text-indigo-900 font-bold py-2 rounded-lg text-sm transition-colors"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AlgebraBasicsModal;
