import React, { useState } from "react";
import { X, FileText, ChevronRight, AlertTriangle } from "lucide-react";

const TrigonometryModal = ({ handleClose = () => {} }) => {
  // Helper for simple fractions to keep JSX clean
  const Fraction = ({ top, bottom }) => (
    <span className="inline-flex flex-col items-center align-middle mx-1 text-xs">
      <span className="border-b border-slate-400 w-full text-center px-1">
        {top}
      </span>
      <span className="w-full text-center px-1">{bottom}</span>
    </span>
  );

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-5xl h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-indigo-600 p-4 flex justify-between items-center shrink-0">
          <h2 className="text-white text-xl font-bold flex items-center gap-2">
            <FileText size={24} />
            Grade 10 Trigonometry Mastery
          </h2>
          <button
            onClick={handleClose}
            className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Content (Scrollable) */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 text-slate-700">
          {/* Intro */}
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r">
            <p className="font-semibold text-indigo-900">
              Target Audience: Grade 10 (IGCSE Extended, CBSE, IB MYP)
            </p>
            <p className="text-sm text-indigo-700">
              Focus: Complete Formula List & Concept Review
            </p>
          </div>

          {/* 1. Right Angled Triangles */}
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              1. Right-Angled Triangles (The Foundation)
            </h3>
            <p className="text-sm italic mb-4 text-slate-500">
              Only apply these rules when the triangle has a 90° angle.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Pythagoras */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                <h4 className="font-bold text-indigo-600 mb-2">
                  A. Pythagoras Theorem
                </h4>
                <p className="text-sm mb-3">Used to find a missing side.</p>
                <div className="bg-white p-3 rounded border border-slate-200 text-center font-mono font-bold text-lg mb-2">
                  a² + b² = c²
                </div>
                <ul className="text-sm space-y-1 list-disc list-inside text-slate-600">
                  <li>
                    <strong>c</strong> is always Hypotenuse (opposite 90°)
                  </li>
                  <li>Short side: a² = c² - b²</li>
                </ul>
              </div>

              {/* SOH CAH TOA */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                <h4 className="font-bold text-indigo-600 mb-2">
                  B. Trigonometric Ratios
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="font-bold">Sine (SOH)</span>
                    <span>
                      sin θ = <Fraction top="Opp" bottom="Hyp" />
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                    <span className="font-bold">Cosine (CAH)</span>
                    <span>
                      cos θ = <Fraction top="Adj" bottom="Hyp" />
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold">Tangent (TOA)</span>
                    <span>
                      tan θ = <Fraction top="Opp" bottom="Adj" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Exact Values */}
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              2. Special Angles (Memorize for Non-Calc)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th className="p-3 border border-slate-200">θ</th>
                    <th className="p-3 border border-slate-200">0°</th>
                    <th className="p-3 border border-slate-200">30°</th>
                    <th className="p-3 border border-slate-200">45°</th>
                    <th className="p-3 border border-slate-200">60°</th>
                    <th className="p-3 border border-slate-200">90°</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">
                      sin θ
                    </td>
                    <td className="p-3 border border-slate-200">0</td>
                    <td className="p-3 border border-slate-200">1/2</td>
                    <td className="p-3 border border-slate-200">1/√2</td>
                    <td className="p-3 border border-slate-200">√3/2</td>
                    <td className="p-3 border border-slate-200">1</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">
                      cos θ
                    </td>
                    <td className="p-3 border border-slate-200">1</td>
                    <td className="p-3 border border-slate-200">√3/2</td>
                    <td className="p-3 border border-slate-200">1/√2</td>
                    <td className="p-3 border border-slate-200">1/2</td>
                    <td className="p-3 border border-slate-200">0</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">
                      tan θ
                    </td>
                    <td className="p-3 border border-slate-200">0</td>
                    <td className="p-3 border border-slate-200">1/√3</td>
                    <td className="p-3 border border-slate-200">1</td>
                    <td className="p-3 border border-slate-200">√3</td>
                    <td className="p-3 border border-slate-200 text-red-500 italic">
                      Undef
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Identities */}
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              3. Important Identities
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">Fundamental</h4>
                <p className="mb-1">
                  tan θ = <Fraction top="sin θ" bottom="cos θ" />
                </p>
                <p>sin²θ + cos²θ = 1</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Complementary</h4>
                <p className="mb-1">sin(90 - θ) = cos θ</p>
                <p>cos(90 - θ) = sin θ</p>
              </div>
            </div>
          </section>

          {/* 4. Non-Right Angled */}
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              4. Non-Right Angled Triangles
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h4 className="font-bold text-indigo-600">The Sine Rule</h4>
                <p className="text-xs text-slate-500 mb-2">
                  Use when you have a matching pair (Side a and Angle A)
                </p>
                <div className="flex gap-4 overflow-x-auto font-mono text-sm">
                  <div className="bg-white px-3 py-1 rounded border">
                    <Fraction top="a" bottom="sin A" /> ={" "}
                    <Fraction top="b" bottom="sin B" />
                  </div>
                  <div className="bg-white px-3 py-1 rounded border">
                    <Fraction top="sin A" bottom="a" /> ={" "}
                    <Fraction top="sin B" bottom="b" />
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h4 className="font-bold text-indigo-600">The Cosine Rule</h4>
                <p className="text-xs text-slate-500 mb-2">
                  Use for SAS or SSS
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">
                  <div className="bg-white px-3 py-2 rounded border">
                    a² = b² + c² - 2bc cos A
                  </div>
                  <div className="bg-white px-3 py-2 rounded border">
                    cos A = <Fraction top="b² + c² - a²" bottom="2bc" />
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h4 className="font-bold text-indigo-600">Area of Triangle</h4>
                <p className="text-sm font-mono mt-1">Area = ½ ab sin C</p>
              </div>
            </div>
          </section>

          {/* 5. Word Problems */}
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              5. Word Problems & Bearings
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <ChevronRight
                  className="text-indigo-500 shrink-0 mt-1"
                  size={18}
                />
                <div>
                  <span className="font-bold">Elevation & Depression:</span>{" "}
                  Always measure from the{" "}
                  <span className="underline decoration-indigo-300 decoration-2">
                    Horizontal Line
                  </span>
                  .
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <ChevronRight
                  className="text-indigo-500 shrink-0 mt-1"
                  size={18}
                />
                <div>
                  <span className="font-bold">Bearings Rules:</span>
                  <ol className="list-decimal list-inside ml-2 text-sm text-slate-600 mt-1">
                    <li>Start from North (000°)</li>
                    <li>Measure Clockwise</li>
                    <li>Always use 3 Digits (e.g., 045°)</li>
                  </ol>
                </div>
              </li>
            </ul>
          </section>

          {/* Critical Checks */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <h3 className="text-red-800 font-bold flex items-center gap-2 mb-3">
              <AlertTriangle size={20} /> Critical Exam Checks
            </h3>
            <ul className="space-y-2 text-sm text-red-700">
              <li>
                • <strong>Calculator Mode:</strong> Check your screen! If you
                see 'R' or 'Rad', switch to 'D' or 'Deg'.
              </li>
              <li>
                • <strong>Do NOT use SOH CAH TOA</strong> on non-right angled
                triangles.
              </li>
              <li>
                • <strong>3D Problems:</strong> Always draw the 2D slice
                separately on paper first.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrigonometryModal;
