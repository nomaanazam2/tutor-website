import {
  ArrowRight,
  AtSign,
  BookOpen,
  Calendar,
  ChevronDown,
  Lock,
  Mail,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import Section from "../../utility/Section";

const ContactFormCard = () => {
  const FORM_ENDPOINT = "https://formspree.io/f/xdkrvnpp";

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    grade: "Class 1-4",
    board: "IGCSE",
    customBoard: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const { name, email, message } = formValues;
    const isValid =
      name.trim().length > 0 &&
      email.trim().length > 0 &&
      email.includes("@") &&
      message.trim().length > 0;

    setIsFormValid(isValid);
  }, [formValues]);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full">
      {/* --- HEADER SECTION --- */}
      <div className="bg-slate-900 p-6 md:p-8 text-white">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
            <Mail size={24} className="text-indigo-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Write to me directly</h3>
            <p className="text-slate-400 text-sm mt-1">
              Fill out the form below and I'll get back to you.
            </p>
          </div>
        </div>
      </div>

      {/* --- FORM SECTION --- */}
      <div className="p-6 md:p-8 bg-white flex-1">
        <form action={FORM_ENDPOINT} method="POST" className="space-y-6">
          <div className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Student Name
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors pointer-events-none">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all"
                  placeholder="e.g. Sarah Jones"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors pointer-events-none">
                  <AtSign size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all"
                  placeholder="sarah@example.com"
                />
              </div>
            </div>

            {/* Grade & Board Grid */}
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Grade
                </label>
                <div className="relative group">
                  <select
                    name="grade"
                    value={formValues.grade}
                    onChange={handleChange}
                    className="w-full appearance-none pl-4 pr-10 py-3 rounded-lg border border-slate-200 text-slate-900 bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all cursor-pointer"
                  >
                    <option>Class 1-4</option>
                    <option>Class 5-7</option>
                    <option>Class 8-10</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-indigo-600 transition-colors"
                    size={16}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Board
                </label>
                <div className="relative group">
                  <select
                    name="board"
                    value={formValues.board}
                    onChange={handleChange}
                    className="w-full appearance-none pl-4 pr-10 py-3 rounded-lg border border-slate-200 text-slate-900 bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all cursor-pointer"
                  >
                    <option>IGCSE</option>
                    <option>NSW</option>
                    <option>VCAA</option>
                    <option>CBSE</option>
                    <option>Other</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-indigo-600 transition-colors"
                    size={16}
                  />
                </div>
              </div>
            </div>

            {/* Conditional Input */}
            {formValues.board === "Other" && (
              <div className="animate-in slide-in-from-top-2 fade-in duration-300">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Which Board?{" "}
                  <span className="text-slate-400 font-normal ml-1">
                    (Optional)
                  </span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    <BookOpen size={18} />
                  </div>
                  <input
                    type="text"
                    name="customBoard"
                    value={formValues.customBoard}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-indigo-200 bg-indigo-50/30 text-slate-900 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all"
                    placeholder="e.g. IB MYP, ICSE"
                  />
                </div>
              </div>
            )}

            {/* Message Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                How can I help you?
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-3.5 text-slate-400 group-focus-within:text-indigo-600 transition-colors pointer-events-none">
                  <MessageSquare size={18} />
                </div>
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all resize-none"
                  placeholder="Tell me about your goals or struggles..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full font-bold py-3.5 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2
                      ${
                        isFormValid
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-md transform hover:-translate-y-0.5"
                          : "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                      }`}
          >
            {isFormValid ? (
              <>
                Send Message <Send size={18} />
              </>
            ) : (
              <>
                Fill all fields to Send <Lock size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

const ContactSection = () => {
  // --- CAL.COM INITIALIZATION ---
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === "init") {
            let api = function () {
              p(api, arguments);
            };
            let namespace = ar[1];
            api.q = api.q || [];
            typeof namespace === "string"
              ? (cal.ns[namespace] = api) && p(api, ar)
              : p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "30min", { origin: "https://cal.com" });

    window.Cal.ns["30min"]("ui", {
      styles: { branding: { brandColor: "#4F46E5" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <Section id="book" className="py-24 bg-indigo-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-10">
        <div className="w-96 h-96 rounded-full bg-indigo-400 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Improve Your Grades
          </h2>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            Choose the path that works best for you. Schedule a free demo
            immediately or send me a detailed query.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* --- LEFT COLUMN: INSTANT BOOKING & CONTACT INFO --- */}
          <div className="space-y-6">
            {/* 1. The Booking Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-indigo-100 flex flex-col h-full">
              <div className="mb-6">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Fastest Option
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-3">
                  Book a Free Demo
                </h3>
                <p className="text-slate-500 mt-2">
                  Pick a time slot that suits you. We’ll meet on Google Meet for
                  a 30-minute math demo lesson.
                </p>
              </div>

              {/* Cal.com Trigger Button */}
              <button
                data-cal-namespace="30min"
                data-cal-link="samra-siddiqui-7v0duq/30min"
                data-cal-config='{"layout":"month_view"}'
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 group"
              >
                <Calendar className="group-hover:-translate-y-0.5 transition-transform" />
                Schedule Slot Now
                <ArrowRight className="opacity-60 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm font-semibold text-slate-800 mb-4">
                  Direct Contact Channels:
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/917302652421"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-slate-600 hover:text-green-600 transition-colors p-3 hover:bg-green-50 rounded-lg group"
                  >
                    <MessageCircle size={20} className="text-green-500" />
                    <span className="font-medium">Connect on WhatsApp</span>
                  </a>
                  <div className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-colors p-3 hover:bg-indigo-50 rounded-lg">
                    <Phone size={20} className="text-indigo-600" />
                    <span className="font-medium">+91 7302652421</span>
                  </div>
                  <a
                    href="mailto:samrasddq77@gmail.com"
                    className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-colors p-3 hover:bg-indigo-50 rounded-lg"
                  >
                    <Mail size={20} className="text-indigo-500" />
                    <span className="font-medium">samrasddq77@gmail.com</span>
                  </a>
                  {/* <a
                      href="https://linkedin.com/in/samrasiddiqui"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors p-3 hover:bg-blue-50 rounded-lg"
                    >
                      <Linkedin size={20} className="text-blue-500" />
                      <span className="font-medium">Connect on LinkedIn</span>
                    </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: EMAIL INQUIRY FORM --- */}
          <ContactFormCard />
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
