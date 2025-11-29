import { ChevronDown, ChevronUp } from "lucide-react";
import Section from "../../utility/Section";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      q: "Do you teach one-on-one or in groups?",
      a: "I specialize in 1-on-1 private tutoring to ensure personalized attention. I can arrange small group sessions (max 3 students) upon request.",
    },
    {
      q: "Which platform do you use for classes?",
      a: "I use Zoom or Google Meet combined with a digital whiteboard. You will receive a PDF of the notes after every class.",
    },
    {
      q: "Do you offer trial classes?",
      a: "Yes! I offer a free 30-minute demo session where we can discuss your goals and I can demonstrate my teaching style.",
    },
    {
      q: "How do I pay?",
      a: "Payments can be made via Bank Transfer or PayPal. Fees are usually collected monthly in advance.",
    },
  ];

  return (
    <Section id="faq" className="bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center p-5 hover:bg-slate-50 transition-colors text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-800">{faq.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-indigo-600" />
                ) : (
                  <ChevronDown className="text-slate-400" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
