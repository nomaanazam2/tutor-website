import React, { useState } from "react";
import {
  X,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Search,
  HelpCircle,
  ArrowRight,
  ShieldAlert,
  Bug,
  Flame,
} from "lucide-react";

const CommonMistakesModal = ({ handleClose }) => {
  // --- STATE FOR "SPOT THE BUG" GAME ---
  const [bugStep, setBugStep] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'try_again'

  const bugChallenges = [
    {
      id: 1,
      title: "The Discount Dilemma",
      problem: "A $100 shirt price increases by 10%, then decreases by 10%.",
      steps: [
        { id: "s1", text: "Start Price: $100", isError: false },
        { id: "s2", text: "Increase 10%: $100 + $10 = $110", isError: false },
        { id: "s3", text: "Decrease 10%: $110 - $10 = $100", isError: true },
        { id: "s4", text: "Final Price: $100", isError: false },
      ],
      correction: "The base changed! 10% of $110 is $11. So $110 - $11 = $99.",
      explanation:
        "Percentages always depend on the CURRENT value, not the original starting value.",
    },
    {
      id: 2,
      title: "The Fraction Fumble",
      problem: "Calculate: 1/2 + 1/3",
      steps: [
        { id: "s1", text: "Identify Numerators: 1, 1", isError: false },
        { id: "s2", text: "Add Numerators: 1 + 1 = 2", isError: false },
        { id: "s3", text: "Add Denominators: 2 + 3 = 5", isError: true },
        { id: "s4", text: "Result: 2/5", isError: false },
      ],
      correction: "Result is 5/6. You need a Common Denominator!",
      explanation:
        "Never add denominators! Think about pizza: 1/2 + 1/3 is almost a whole pizza (5/6), but 2/5 is less than half.",
    },
    {
      id: 3,
      title: "The Negative Square",
      problem: "Evaluate: -3²",
      steps: [
        { id: "s1", text: "Identify Base: 3", isError: false },
        { id: "s2", text: "Square the Base: 3 × 3 = 9", isError: false },
        { id: "s3", text: "Apply Negative Sign: -9", isError: false },
        { id: "s4", text: "Wait... shouldn't it be +9?", isError: true }, // The error is the student thinking it's wrong!
      ],
      correction: "Calculator is right! -3² means -(3×3) = -9.",
      explanation:
        "The power only applies to the number it touches. If you want +9, you must write (-3)².",
    },
    {
      id: 4,
      title: "The Cancellation Crime",
      problem: "Simplify: (x + 2) / 2",
      steps: [
        { id: "s1", text: "Write Expression: (x + 2) / 2", isError: false },
        { id: "s2", text: "See '2' on top and bottom", isError: false },
        { id: "s3", text: "Cancel the 2s", isError: true },
        { id: "s4", text: "Result: x + 1", isError: false },
      ],
      correction: "You cannot cancel terms glued by '+' sign.",
      explanation:
        "You can only cancel factors (multiplication). (x+2)/2 cannot be simplified further.",
    },
    {
      id: 5,
      title: "The Invisible One",
      problem: "Simplify: 5x - x",
      steps: [
        { id: "s1", text: "Expression: 5x - x", isError: false },
        { id: "s2", text: "Remove the x", isError: true },
        { id: "s3", text: "Result: 5", isError: false },
      ],
      correction: "Result is 4x. Remember the invisible '1'.",
      explanation:
        "x is actually 1x. So 5x - 1x = 4x. Think '5 apples minus 1 apple'.",
    },
  ];

  const currentBug = bugChallenges[bugStep];

  const handleStepClick = (isError) => {
    if (isError) {
      setFeedback("correct");
      setShowExplanation(true);
    } else {
      setFeedback("try_again");
      setTimeout(() => setFeedback(null), 1500);
    }
  };

  const nextLevel = () => {
    setBugStep((prev) => (prev + 1) % bugChallenges.length);
    setShowExplanation(false);
    setFeedback(null);
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
        {/* Header - Consistent Red/Dark Theme for "Mistakes" */}
        <div className="bg-slate-900 p-6 flex justify-between items-center shrink-0 border-b border-slate-800">
          <div className="text-white">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <ShieldAlert className="text-red-500" size={32} />
              Math Myth Busters
            </h2>
            <p className="text-slate-400 text-sm opacity-90 font-medium ml-1">
              Debugging the Top 10 Student Mistakes
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-white/60 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-12 text-slate-700 custom-scrollbar bg-slate-50">
          {/* 1. GAME SECTION: SPOT THE BUG */}
          <section className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-indigo-600 p-4 border-b border-indigo-700 flex justify-between items-center text-white">
              <h3 className="font-bold flex items-center gap-2 text-lg">
                <Search className="text-yellow-400" /> Detective Mode: Level{" "}
                {bugStep + 1}
              </h3>
              <span className="text-xs bg-indigo-800 px-3 py-1 rounded-full text-indigo-100 font-bold uppercase tracking-wider">
                Click the Error
              </span>
            </div>

            <div className="p-8 grid md:grid-cols-2 gap-10">
              {/* Problem Display */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">
                    {bugStep + 1}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">
                    {currentBug.title}
                  </h4>
                </div>

                <div className="bg-slate-100 p-5 rounded-xl border-l-4 border-indigo-500 shadow-sm mb-8">
                  <span className="font-mono text-lg font-bold text-slate-700">
                    {currentBug.problem}
                  </span>
                </div>

                <div className="space-y-3 relative">
                  {/* Visual Connector Line */}
                  <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-200 -z-10"></div>

                  {currentBug.steps.map((step, idx) => (
                    <button
                      key={step.id}
                      onClick={() =>
                        !showExplanation && handleStepClick(step.isError)
                      }
                      disabled={showExplanation}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-4 group relative overflow-hidden
                        ${
                          showExplanation && step.isError
                            ? "bg-red-50 border-red-200 text-red-800 ring-2 ring-red-200 z-10"
                            : "bg-white border-slate-200 hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5"
                        }
                        ${
                          showExplanation && !step.isError
                            ? "opacity-50 grayscale"
                            : ""
                        }
                      `}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors
                        ${
                          showExplanation && step.isError
                            ? "bg-red-100 text-red-600"
                            : "bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600"
                        }
                      `}
                      >
                        {idx + 1}
                      </div>
                      <span className="font-mono text-sm font-medium">
                        {step.text}
                      </span>

                      {showExplanation && step.isError && (
                        <XCircle
                          size={24}
                          className="text-red-500 ml-auto animate-in zoom-in"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {feedback === "try_again" && (
                  <div className="mt-4 flex items-center justify-center gap-2 text-red-500 font-bold animate-shake bg-red-50 p-3 rounded-lg border border-red-100">
                    <AlertTriangle size={18} /> That step looks fine. Look
                    closer!
                  </div>
                )}
              </div>

              {/* Explanation Panel */}
              <div className="relative">
                <div
                  className={`h-full rounded-3xl p-8 flex flex-col justify-center items-center text-center transition-all duration-500 border border-slate-200
                    ${
                      showExplanation
                        ? "bg-green-50 border-green-200"
                        : "bg-slate-100/50"
                    }`}
                >
                  {showExplanation ? (
                    <div className="animate-in zoom-in slide-in-from-bottom-8 w-full">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm ring-4 ring-white">
                        <CheckCircle size={40} />
                      </div>
                      <h4 className="text-2xl font-bold text-green-800 mb-2">
                        Busted!
                      </h4>
                      <div className="bg-white p-5 rounded-xl border border-green-100 shadow-sm mb-6 text-left">
                        <p className="text-green-700 font-bold mb-2 text-lg">
                          {currentBug.correction}
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {currentBug.explanation}
                        </p>
                      </div>
                      <button
                        onClick={nextLevel}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-green-600/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1"
                      >
                        Next Challenge <ArrowRight size={20} />
                      </button>
                    </div>
                  ) : (
                    <div className="text-slate-400">
                      <Bug size={64} className="mx-auto mb-4 opacity-30" />
                      <h4 className="text-xl font-bold text-slate-500 mb-2">
                        Code Inspector
                      </h4>
                      <p className="max-w-xs mx-auto">
                        Review the steps on the left. Click the line that
                        contains the math error.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* 2. HALL OF SHAME (Myth vs Fact) */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-100 p-2 rounded-lg">
                <Flame className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Hall of Shame
                </h3>
                <p className="text-slate-500 text-sm">
                  The 5 most dangerous traps in math history.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Myth Card 1 */}
              <MythCard
                title="The Order of Ops"
                myth="2 + 3 × 4 = 20"
                fact="2 + 3 × 4 = 14"
                note="Multiply comes before Add!"
              />

              {/* Myth Card 2 */}
              <MythCard
                title="The Unit Trap"
                myth="Area = 2cm × 3m = 6"
                fact="2cm × 300cm = 600"
                note="Convert to matching units first!"
              />

              {/* Myth Card 3 */}
              <MythCard
                title="Dividing by Zero"
                myth="5 ÷ 0 = 0"
                fact="5 ÷ 0 = Error"
                note="Undefined. The universe breaks."
              />

              {/* Myth Card 4 */}
              <MythCard
                title="The Freshman's Dream"
                myth="(a + b)² = a² + b²"
                fact="(a + b)² = a² + 2ab + b²"
                note="Don't forget the middle term!"
              />

              {/* Myth Card 5 */}
              <MythCard
                title="The Root Trap"
                myth="√(a² + b²) = a + b"
                fact="Cannot simplify"
                note="Roots don't split over addition."
              />

              {/* Myth Card 6 (Bonus) */}
              <div className="bg-indigo-600 rounded-2xl p-6 text-white flex flex-col justify-center items-center text-center shadow-lg transform hover:scale-105 transition-transform">
                <ShieldAlert size={48} className="mb-4 text-yellow-300" />
                <h4 className="font-bold text-xl mb-2">Be a Detective!</h4>
                <p className="text-indigo-100 text-sm opacity-90">
                  Always check your answers. If it looks "too easy", it might be
                  a trap.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// --- HELPER COMPONENT ---
const MythCard = ({ title, myth, fact, note }) => (
  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
    <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
      <h4 className="font-bold text-slate-700">{title}</h4>
      <AlertTriangle size={16} className="text-red-400" />
    </div>
    <div className="p-6">
      <div className="mb-4">
        <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-50 px-2 py-1 rounded">
          Myth
        </span>
        <p className="font-mono text-lg line-through text-slate-400 mt-1 decoration-red-400 decoration-2">
          {myth}
        </p>
      </div>
      <div className="mb-4">
        <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest bg-green-50 px-2 py-1 rounded">
          Fact
        </span>
        <p className="font-mono text-lg font-bold text-slate-800 mt-1">
          {fact}
        </p>
      </div>
      <div className="pt-4 border-t border-slate-100">
        <p className="text-xs text-slate-500 italic flex items-center gap-1">
          <HelpCircle size={12} /> {note}
        </p>
      </div>
    </div>
  </div>
);

export default CommonMistakesModal;
