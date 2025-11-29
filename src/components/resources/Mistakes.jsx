import React, { useState } from "react";
import {
  X,
  Eye,
  Download,
  XCircle,
  CheckCircle,
  AlertTriangle,
  Calculator,
} from "lucide-react";

const AlgebraMistakesModal = ({ handleClose = () => {} }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div
        className="bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 p-6 flex justify-between items-center shrink-0">
          <div className="text-white">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <AlertTriangle className="text-red-500" size={28} />
              The "Forbidden" List
            </h2>
            <p className="text-slate-400 text-sm">
              Memorize these so you never make them.
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
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 text-slate-700 custom-scrollbar bg-slate-50">
          {/* Mistake 1: The Freshman's Dream */}
          <MistakeBlock
            number="1"
            title="The Invisible Middle Term"
            desc="When squaring a bracket, you CANNOT just square the inside terms."
            wrong="(x + 3)² = x² + 9"
            right="(x + 3)² = x² + 6x + 9"
            note="Remember: (x+3)² means (x+3)(x+3). Do FOIL expansion!"
          />

          {/* Mistake 2: Cancellation */}
          <MistakeBlock
            number="2"
            title="Illegal Cancellation"
            desc="You cannot cancel terms that are 'glued' by addition or subtraction."
            wrong={
              <div className="inline-flex items-center gap-2 font-mono text-lg">
                <div className="flex flex-col items-center leading-none">
                  <span className="border-b border-red-400 px-1 pb-1">
                    x + 2
                  </span>
                  <span className="pt-1">2</span>
                </div>
                <span>= x + 1</span>
              </div>
            }
            right={
              <div className="inline-flex items-center gap-2 font-mono text-lg text-slate-400 italic">
                Cannot simplify
              </div>
            }
            note="Think of the fraction bar as a locked gate. You can only cancel factors (multiplication), not terms (addition)."
          />

          {/* Mistake 3: Negative Distribution */}
          <MistakeBlock
            number="3"
            title="The Negative Intruder"
            desc="When multiplying a bracket by a negative, it flips EVERY sign inside."
            wrong="-3(x - 2) = -3x - 2"
            right="-3(x - 2) = -3x + 6"
            note="The negative belongs to the 3. It hits both the x AND the -2."
          />

          {/* Mistake 4: Squaring Negatives */}
          <MistakeBlock
            number="4"
            title="The Calculator Trap"
            desc="Calculators follow BEDMAS strictly. Typing -3² gives -9, which is often wrong for substitution."
            wrong="If x = -3, then x² = -9"
            right="If x = -3, then x² = (-3)² = 9"
            note="Always put negative numbers in (brackets) when substituting."
          />

          {/* Mistake 5: Zero Powers */}
          <MistakeBlock
            number="5"
            title="The Power of Zero"
            desc="Anything to the power of 0 is 1, not 0."
            wrong="5x⁰ = 0  OR  5x⁰ = 1"
            right="5x⁰ = 5(1) = 5"
            note="Only the x is raised to 0, not the 5 attached to it."
          />

          {/* Mistake 6: Unlike Terms */}
          <MistakeBlock
            number="6"
            title="The Mixing Bowl"
            desc="You cannot add 'apples' and 'oranges'. Variables with different powers or letters don't mix."
            wrong="3x + 2y = 5xy"
            right={<span className="italic">3x + 2y (Stays same)</span>}
            note="Think of x as cats and y as dogs. 3 cats + 2 dogs is just 3 cats and 2 dogs."
          />

          {/* Mistake 7: Rooting Sums */}
          <MistakeBlock
            number="7"
            title="The Root Trap"
            desc="Square roots do not distribute over addition or subtraction."
            wrong="√(x² + 9) = x + 3"
            right={<span className="italic">√(x² + 9) (Cannot split)</span>}
            note="Try numbers: √(16+9) = √25 = 5. But √16 + √9 = 4+3 = 7. They are different!"
          />

          {/* Mistake 8: The Fraction Split */}
          <MistakeBlock
            number="8"
            title="Broken Fractions"
            desc="You cannot split a denominator. The denominator divides the *whole* numerator."
            wrong={
              <div className="inline-flex items-center gap-2 font-mono text-lg">
                <div className="flex flex-col items-center leading-none">
                  <span className="border-b border-red-400 px-1 pb-1">1</span>
                  <span className="pt-1">a + b</span>
                </div>
                <span>=</span>
                <div className="flex flex-col items-center leading-none">
                  <span className="border-b border-red-400 px-1 pb-1">1</span>
                  <span className="pt-1">a</span>
                </div>
                <span>+</span>
                <div className="flex flex-col items-center leading-none">
                  <span className="border-b border-red-400 px-1 pb-1">1</span>
                  <span className="pt-1">b</span>
                </div>
              </div>
            }
            right={<span className="italic">Cannot split denominator</span>}
            note="1/(2+2) = 1/4. But 1/2 + 1/2 = 1. Clearly different."
          />

          {/* Mistake 9: Power Confusion */}
          <MistakeBlock
            number="9"
            title="Power Overload"
            desc="When multiplying matching bases, ADD the powers. Don't multiply them."
            wrong="x² · x³ = x⁶"
            right="x² · x³ = x⁵"
            note="x² means x·x. x³ means x·x·x. Total is 5 x's multiplying."
          />

          {/* Mistake 10: Inequality Flip */}
          <MistakeBlock
            number="10"
            title="The Silent Flip"
            desc="When you multiply or divide an inequality by a negative number, the sign MUST flip."
            wrong="-2x > 4 → x > -2"
            right="-2x > 4 → x < -2"
            note="Think: 4 > 2. Divide by -1. -4 is NOT > -2. It flips to -4 < -2."
          />
        </div>
      </div>
    </div>
  );
};

// Helper Component for the Comparison Block
const MistakeBlock = ({ number, title, desc, wrong, right, note }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
    {/* Header */}
    <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
        #{number}
      </div>
      <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
    </div>

    {/* Description */}
    <div className="px-6 py-4 text-slate-600 text-sm">{desc}</div>

    {/* Comparison Grid */}
    <div className="grid grid-cols-2 text-center border-t border-b border-slate-100 divide-x divide-slate-100">
      <div className="p-4 bg-red-50/50 flex flex-col items-center justify-center h-full">
        <div className="flex items-center justify-center gap-2 mb-2 text-red-600 font-bold text-xs uppercase tracking-wide">
          <XCircle size={14} /> The Mistake
        </div>
        <div className="font-mono text-red-700 font-bold text-lg break-words w-full">
          {wrong}
        </div>
      </div>

      <div className="p-4 bg-green-50/50 flex flex-col items-center justify-center h-full">
        <div className="flex items-center justify-center gap-2 mb-2 text-green-600 font-bold text-xs uppercase tracking-wide">
          <CheckCircle size={14} /> The Fix
        </div>
        <div className="font-mono text-green-700 font-bold text-lg break-words w-full">
          {right}
        </div>
      </div>
    </div>

    {/* Footer Note */}
    <div className="bg-slate-50 px-6 py-3 text-xs text-slate-500 flex items-start gap-2">
      <div className="mt-0.5 shrink-0">
        <Calculator size={12} />
      </div>
      <span className="italic">{note}</span>
    </div>
  </div>
);

export default AlgebraMistakesModal;
