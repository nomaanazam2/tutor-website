import React, { useState } from "react";
import {
  X,
  Clock,
  Sun,
  Moon,
  CheckCircle,
  Play,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

const TimeReadingModal = ({ handleClose }) => {
  const [demoTime, setDemoTime] = useState({ h: 3, m: 0 });
  const [quizStep, setQuizStep] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState(null); // 'correct' | 'wrong'

  const quizQuestions = [
    { h: 2, m: 0, options: ["2:00", "12:10", "12:02"], correct: "2:00" },
    { h: 4, m: 30, options: ["5:30", "6:20", "4:30"], correct: "4:30" },
    { h: 10, m: 15, options: ["10:00", "10:15", "10:12"], correct: "10:15" },
  ];

  const handleQuizAnswer = (answer) => {
    if (answer === quizQuestions[quizStep].correct) {
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
        {/* Header - Aligned with Website Theme */}
        <div className="bg-indigo-600 p-6 flex justify-between items-center shrink-0">
          <div className="text-white">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Clock className="text-yellow-300" size={32} />
              Time Master (Grades 1-3)
            </h2>
            <p className="text-indigo-100 text-sm opacity-90 font-medium">
              Learn to read the clock like a pro!
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
          {/* 1. THE BASICS (Hands) */}
          <section className="flex flex-col md:flex-row gap-8 items-center border-b border-slate-100 pb-8">
            <div className="flex-1">
              <span className="text-indigo-600 font-bold tracking-wider text-xs uppercase mb-2 block">
                Step 1: The Basics
              </span>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Meet the Hands
              </h3>
              <div className="space-y-4">
                <div className="bg-red-50 p-5 rounded-2xl border border-red-100 flex items-center gap-5 hover:shadow-md transition-shadow">
                  <div className="w-16 h-2 bg-red-500 rounded-full shadow-sm"></div>
                  <div>
                    <h4 className="font-bold text-red-700 text-lg">
                      Short Red Hand
                    </h4>
                    <p className="text-sm text-slate-600">
                      I am slow. I tell you the{" "}
                      <strong className="text-red-600 uppercase">Hour</strong>.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 flex items-center gap-5 hover:shadow-md transition-shadow">
                  <div className="w-24 h-2 bg-blue-500 rounded-full shadow-sm"></div>
                  <div>
                    <h4 className="font-bold text-blue-700 text-lg">
                      Long Blue Hand
                    </h4>
                    <p className="text-sm text-slate-600">
                      I am fast! I tell you the{" "}
                      <strong className="text-blue-600 uppercase">
                        Minutes
                      </strong>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Aid */}
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-inner">
              <AnalogClock hour={3} minute={0} showLabels={true} size={200} />
            </div>
          </section>

          {/* 2. READING RULES */}
          <section className="grid md:grid-cols-2 gap-6">
            {/* O'Clock Rule */}
            <div className="bg-white p-6 rounded-2xl border border-indigo-100 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sun size={40} className="text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">
                  Rule 1
                </span>{" "}
                The "O'Clock" (:00)
              </h3>
              <div className="flex items-center gap-4">
                <AnalogClock hour={9} minute={0} size={80} />
                <p className="text-sm text-slate-600 leading-relaxed">
                  When the <strong className="text-blue-600">Blue Hand</strong>{" "}
                  is on{" "}
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded font-bold">
                    12
                  </span>
                  , it is the start of a new hour.
                  <br />
                  <br />
                  <span className="text-slate-400 text-xs">Example: 9:00</span>
                </p>
              </div>
            </div>

            {/* Half Past Rule */}
            <div className="bg-white p-6 rounded-2xl border border-indigo-100 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Moon size={40} className="text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm">
                  Rule 2
                </span>{" "}
                "Half Past" (:30)
              </h3>
              <div className="flex items-center gap-4">
                <AnalogClock hour={4} minute={30} size={80} />
                <p className="text-sm text-slate-600 leading-relaxed">
                  When the <strong className="text-blue-600">Blue Hand</strong>{" "}
                  is on{" "}
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded font-bold">
                    6
                  </span>
                  , it is half-way through.
                  <br />
                  <br />
                  <span className="text-slate-400 text-xs">Example: 4:30</span>
                </p>
              </div>
            </div>
          </section>

          {/* 3. INTERACTIVE PRACTICE (Solving) */}
          <section className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-2">
                <HelpCircle className="text-indigo-500" /> Can you read the
                time?
              </h3>
              <p className="text-slate-500 text-sm">
                Look at the clock and click the correct button!
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-full shadow-xl mb-8 ring-4 ring-indigo-50">
                <AnalogClock
                  hour={quizQuestions[quizStep].h}
                  minute={quizQuestions[quizStep].m}
                  size={180}
                />
              </div>

              {quizFeedback === "correct" ? (
                <div className="animate-bounce bg-green-100 text-green-700 px-8 py-4 rounded-xl font-bold text-xl flex items-center gap-2">
                  <CheckCircle /> Correct! Great Job!
                </div>
              ) : quizFeedback === "wrong" ? (
                <div className="animate-shake bg-red-100 text-red-700 px-8 py-4 rounded-xl font-bold text-xl">
                  Try Again!
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                  {quizQuestions[quizStep].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleQuizAnswer(opt)}
                      className="bg-white border-2 border-indigo-100 hover:border-indigo-500 hover:bg-indigo-50 text-slate-700 font-bold py-4 rounded-xl text-xl transition-all transform hover:-translate-y-1 shadow-sm"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* 4. ACTIVITY: A Day in Life */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Activity: Samra's Schedule
            </h3>
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-indigo-100 -z-10 rounded-full hidden md:block"></div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    t: "7:00",
                    title: "Wake Up",
                    h: 7,
                    m: 0,
                    icon: <Sun size={20} className="text-orange-500" />,
                  },
                  {
                    t: "12:30",
                    title: "Lunch Time",
                    h: 12,
                    m: 30,
                    icon: <Clock size={20} className="text-green-500" />,
                  },
                  {
                    t: "4:00",
                    title: "Math Class",
                    h: 4,
                    m: 0,
                    icon: <Play size={20} className="text-indigo-500" />,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-2xl border border-slate-100 shadow-lg flex flex-col items-center text-center group hover:border-indigo-200 transition-colors"
                  >
                    <div className="mb-3 bg-slate-50 rounded-full p-2">
                      <AnalogClock hour={item.h} minute={item.m} size={80} />
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      {item.icon}
                      <span className="font-bold text-slate-800">
                        {item.title}
                      </span>
                    </div>
                    <span className="bg-indigo-50 text-indigo-700 font-mono font-bold px-3 py-1 rounded text-sm">
                      {item.t}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. PLAYGROUND */}
          <section className="bg-indigo-900 text-white rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Interactive Playground
                </h3>
                <p className="text-indigo-200 mb-6">
                  Click any button to move the clock hands instantly.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setDemoTime({ h: 2, m: 0 })}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-colors border border-white/10"
                  >
                    Show 2:00
                  </button>
                  <button
                    onClick={() => setDemoTime({ h: 5, m: 30 })}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-colors border border-white/10"
                  >
                    Show 5:30
                  </button>
                  <button
                    onClick={() => setDemoTime({ h: 8, m: 0 })}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-colors border border-white/10"
                  >
                    Show 8:00
                  </button>
                  <button
                    onClick={() => setDemoTime({ h: 11, m: 30 })}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-colors border border-white/10"
                  >
                    Show 11:30
                  </button>
                </div>
              </div>
              <div className="bg-white p-6 rounded-full shadow-2xl">
                <AnalogClock hour={demoTime.h} minute={demoTime.m} size={180} />
                <div className="text-center mt-4 font-mono text-2xl font-bold text-slate-800">
                  {demoTime.h}:{demoTime.m === 0 ? "00" : demoTime.m}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// --- INTERNAL SVG CLOCK COMPONENT (Unchanged logic, just standardized) ---
const AnalogClock = ({ hour, minute, size = 160, showLabels = false }) => {
  const center = size / 2;
  const radius = size / 2 - 10;
  const minuteAngle = minute * 6;
  const hourAngle = (hour % 12) * 30 + minute * 0.5;

  return (
    <div style={{ width: size, height: size }} className="relative">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="white"
          stroke="#e2e8f0"
          strokeWidth={size > 100 ? 4 : 2}
        />
        {[...Array(12)].map((_, i) => {
          const rotation = (i + 1) * 30;
          return (
            <g key={i} transform={`rotate(${rotation} ${center} ${center})`}>
              <line
                x1={center}
                y1={15}
                x2={center}
                y2={size > 100 ? 25 : 20}
                stroke="#cbd5e1"
                strokeWidth={size > 100 ? 3 : 2}
              />
              {showLabels && size > 100 && [3, 6, 9, 12].includes(i + 1) && (
                <text
                  x={center}
                  y={40}
                  fontSize="14"
                  fontWeight="bold"
                  fill="#64748b"
                  textAnchor="middle"
                  transform={`rotate(-${rotation} ${center} ${40})`}
                >
                  {i + 1}
                </text>
              )}
            </g>
          );
        })}
        <line
          x1={center}
          y1={center}
          x2={center}
          y2={size * 0.2}
          stroke="#3b82f6"
          strokeWidth={size > 100 ? 4 : 3}
          strokeLinecap="round"
          transform={`rotate(${minuteAngle} ${center} ${center})`}
        />
        <line
          x1={center}
          y1={center}
          x2={center}
          y2={size * 0.35}
          stroke="#ef4444"
          strokeWidth={size > 100 ? 6 : 4}
          strokeLinecap="round"
          transform={`rotate(${hourAngle} ${center} ${center})`}
        />
        <circle cx={center} cy={center} r={size > 100 ? 5 : 3} fill="#1e293b" />
      </svg>
      {showLabels && (
        <>
          <div
            className="absolute top-14 right-0 text-[10px] font-bold text-red-500 bg-white px-1 shadow-sm border border-red-100 rounded"
            style={{
              top: "90px",
              right: "-29px",
            }}
          >
            Hour
          </div>
          <div
            className="text-[10px] font-bold text-blue-500 bg-white px-1 shadow-sm border border-blue-100 rounded"
            style={{
              display: "block",
              position: "absolute",
              top: "-12px",
              right: "77px",
            }}
          >
            Minute
          </div>
        </>
      )}
    </div>
  );
};

export default TimeReadingModal;
