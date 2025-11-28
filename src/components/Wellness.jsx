import React, { useState, useEffect } from "react";
import {
  X,
  Heart,
  Wind,
  Sun,
  Clock,
  Brain,
  Eye,
  Download,
  ShieldCheck,
  Smile,
} from "lucide-react";

const ExamAnxietyModal = ({ setOpen = () => {}, open = false }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  const [breathState, setBreathState] = useState("Inhale"); // Inhale, Hold, Exhale

  // --- BREATHING ANIMATION LOGIC ---
  useEffect(() => {
    if (!open) return;

    // Simple Box Breathing Cycle (4s In, 4s Hold, 4s Out)
    const cycle = () => {
      setBreathState("Inhale");
      setTimeout(() => {
        setBreathState("Hold");
        setTimeout(() => {
          setBreathState("Exhale");
        }, 4000);
      }, 4000);
    };

    cycle(); // Start immediately
    const interval = setInterval(cycle, 12000); // 4+4+4 = 12s cycle
    return () => clearInterval(interval);
  }, [open]);

  return (
    <>
      {/* --- POPUP MODAL --- */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div
            className="bg-white w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-6 flex justify-between items-center shrink-0">
              <div className="text-white">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Sun className="animate-spin-slow" size={28} />
                  Exam Anxiety Buster
                </h2>
                <p className="text-orange-50 text-sm opacity-90">
                  Take a deep breath. You've got this.
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 md:p-8 space-y-10 text-slate-700 custom-scrollbar">
              {/* 1. INTERACTIVE BREATHING WIDGET */}
              <section className="flex flex-col items-center justify-center py-4 mb-6">
                <h3 className="text-lg font-bold text-slate-700 mb-14 flex items-center gap-2">
                  <Wind className="text-blue-400" /> Let's Breathe Together
                </h3>

                <div className="relative flex items-center justify-center w-48 h-48">
                  {/* Outer Pulsing Circle */}
                  <div
                    className={`absolute inset-0 bg-blue-100 rounded-full transition-transform duration-[4000ms] ease-in-out ${
                      breathState === "Inhale"
                        ? "scale-150 opacity-100"
                        : "scale-100 opacity-50"
                    }`}
                  ></div>

                  {/* Inner Circle */}
                  <div className="relative z-10 w-40 h-40 bg-white border-4 border-blue-200 rounded-full flex flex-col items-center justify-center shadow-sm">
                    <span className="text-2xl font-bold text-blue-500 transition-all duration-500">
                      {breathState}
                    </span>
                    <span className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold">
                      {breathState === "Inhale"
                        ? "Fill Lungs"
                        : breathState === "Hold"
                        ? "Stay Still"
                        : "Release"}
                    </span>
                  </div>
                </div>
              </section>

              {/* 2. THE 5-4-3-2-1 GROUNDING TECHNIQUE */}
              <section className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-green-500" /> Panic Attack? Try
                  Grounding.
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  If your mind goes blank, stop solving. Look around the room
                  and find:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {[
                    {
                      num: 5,
                      text: "Things you can SEE",
                      color: "bg-red-100 text-red-700",
                    },
                    {
                      num: 4,
                      text: "Things you can TOUCH",
                      color: "bg-orange-100 text-orange-700",
                    },
                    {
                      num: 3,
                      text: "Things you can HEAR",
                      color: "bg-yellow-100 text-yellow-700",
                    },
                    {
                      num: 2,
                      text: "Things you can SMELL",
                      color: "bg-green-100 text-green-700",
                    },
                    {
                      num: 1,
                      text: "Thing you can TASTE",
                      color: "bg-blue-100 text-blue-700",
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className={`${item.color} p-3 rounded-xl text-center`}
                    >
                      <span className="block text-2xl font-bold mb-1">
                        {item.num}
                      </span>
                      <span className="text-[10px] uppercase font-bold leading-tight block">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. DURING THE EXAM STRATEGIES */}
              <section>
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Brain className="text-purple-500" /> In The Exam Hall
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <StrategyCard
                    title="The Brain Dump"
                    icon={<Download size={20} className="text-indigo-500" />}
                    desc="The second you get your paper, flip to the back (rough sheet) and write down every formula you are scared of forgetting. Now you don't have to hold them in your head!"
                  />
                  <StrategyCard
                    title="The 2-Minute Scan"
                    icon={<Eye size={20} className="text-indigo-500" />}
                    desc="Don't start Q1 immediately. Scan the paper. Find the easy questions first. Solving 2 easy questions builds momentum and kills anxiety."
                  />
                  <StrategyCard
                    title="The Skipping Stone"
                    icon={<Smile size={20} className="text-indigo-500" />}
                    desc="Stuck on a hard question? Don't fight it. Circle it, skip it, and come back later. Fighting it drains your confidence battery."
                  />
                  <StrategyCard
                    title="Watch Your Posture"
                    icon={<Clock size={20} className="text-indigo-500" />}
                    desc="Anxiety makes us hunch. Sit up straight, drop your shoulders away from your ears. Physical space creates mental space."
                  />
                </div>
              </section>

              {/* Footer Note */}
              <div className="text-center bg-indigo-50 p-6 rounded-2xl">
                <p className="text-indigo-900 font-medium italic">
                  "Your grades do not define your worth. You have prepared well.
                  Trust yourself."
                </p>
                <p className="text-indigo-600 text-sm mt-2 font-bold">
                  - Samra
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Helper Component for the Strategy Cards
const StrategyCard = ({ title, icon, desc }) => (
  <div className="flex gap-4 items-start p-4 rounded-xl border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all bg-white">
    <div className="bg-slate-50 p-2.5 rounded-lg shrink-0">{icon}</div>
    <div>
      <h4 className="font-bold text-slate-800 text-sm mb-1">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default ExamAnxietyModal;
