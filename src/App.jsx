import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Video,
  Star,
  Calendar,
  GraduationCap,
  CheckCircle,
  Menu,
  X,
  Mail,
  Linkedin,
  ArrowRight,
  Globe,
  Award,
  Play,
  XCircle,
  Download,
  FileText,
  Phone,
  MessageCircle,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Eye,
} from "lucide-react";

import TrigonometryModal from "./components/Trigonometry";
import ExamAnxietyModal from "./components/Wellness";
import AlgebraMistakesModal from "./components/Mistakes";
/**
 * ==========================================
 * UTILITY COMPONENTS
 * ==========================================
 */

// 1. VIDEO MODAL (Popup Player)
const VideoModal = ({ videoId, onClose }) => {
  if (!videoId) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-slate-900/90 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-black w-full max-w-4xl aspect-video relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-500 z-10 transition-colors bg-black/50 rounded-full p-1"
        >
          <XCircle size={32} />
        </button>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

// 2. WHATSAPP FLOATING BUTTON
const WhatsAppButton = () => {
  // Replace with your actual number: Country Code + Number (No spaces/dashes)
  // Example: 919876543210
  const PHONE = "919876543210";
  const TEXT = "Hi Samra, I'm interested in Math tutoring.";

  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(TEXT)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center gap-2 group"
    >
      <MessageCircle size={28} fill="white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-bold">
        Chat on WhatsApp
      </span>
    </a>
  );
};

// 3. SECTION WRAPPER
const Section = ({ id, className, children }) => (
  <section id={id} className={`py-20 ${className}`}>
    {children}
  </section>
);

/**
 * ==========================================
 * SUB-SECTIONS (COMPONENTS)
 * ==========================================
 */

const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    onNavigate(id);
  };

  const navLinks = [
    { name: "Experience", id: "experience" },
    { name: "Curriculum", id: "curriculum" },
    { name: "Pricing", id: "pricing" },
    { name: "Resources", id: "resources" },
    { name: "FAQ", id: "faq" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavClick("home")}
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
            S
          </div>
          <span
            className={`text-xl font-bold tracking-tight ${
              isScrolled ? "text-slate-900" : "text-slate-800"
            }`}
          >
            MathWithSamra
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.id)}
              className="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("book")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-indigo-500/30 active:scale-95"
          >
            Book Demo
          </button>
        </div>

        <button
          className="md:hidden text-slate-600 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.id)}
              className="text-left text-slate-600 font-medium py-3 border-b border-slate-50"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("book")}
            className="bg-indigo-600 text-white py-4 rounded-xl font-bold text-center w-full shadow-md"
          >
            Book Demo
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ onNavigate }) => (
  <header
    id="home"
    className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white"
  >
    <div className="absolute top-0 right-0 -z-10 opacity-5">
      <svg width="600" height="600" viewBox="0 0 200 200">
        <path
          fill="#4F46E5"
          d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-17.9,86.9,-3.3C83.8,11.4,74.7,25.1,65.2,37.6C55.7,50.1,45.7,61.4,33.5,69.5C21.3,77.6,6.9,82.4,-7,81.3C-20.9,80.2,-34.3,73.1,-46.8,65.1C-59.3,57.1,-70.9,48.2,-78.6,36.5C-86.3,24.8,-90.1,10.3,-88.3,-3.5C-86.5,-17.3,-79.1,-30.4,-69.3,-41.2C-59.5,-52,-47.3,-60.5,-34.7,-68.5C-22.1,-76.5,-9.1,-84,2.8,-88.9C14.7,-93.7,29.4,-96,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 animate-in slide-in-from-left duration-700">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 text-sm font-bold shadow-sm">
          <Globe size={16} />
          <span>Teaching students in UK, Australia & India</span>
        </div>
        <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
          Master Mathematics with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Confidence
          </span>
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
          Personalized online tutoring specializing in IGCSE, NSW, and
          Victoria’s VCAA boards. Expert guidance for Grades 1 to 10.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => onNavigate("book")}
            className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1"
          >
            Book Your Free Demo <ArrowRight size={20} />
          </button>
          <button
            onClick={() => onNavigate("videos")}
            className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 hover:border-indigo-200 transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <Video size={20} /> Watch Sample Class
          </button>
        </div>

        <div className="pt-4 flex items-center gap-6 text-sm font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={18} />
            <span>MSc in Mathematics</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={18} />
            <span>4+ Years Experience</span>
          </div>
        </div>
      </div>

      <div className="relative animate-in slide-in-from-right duration-700 delay-100">
        <div className="aspect-[4/3] rounded-3xl bg-white border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center relative">
          <div className="absolute inset-0 bg-indigo-600/5 grid-pattern"></div>
          <div className="text-center p-8 z-10">
            <div className="w-28 h-28 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl text-white">
              <GraduationCap size={56} />
            </div>
            <h3 className="text-3xl font-bold text-slate-800">
              Samra Siddiqui
            </h3>
            <p className="text-indigo-600 font-medium text-lg mt-2">
              Professional Math Tutor
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["IGCSE", "NSW", "VCAA", "Grades 1-10"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-100 rounded-md text-xs font-bold text-slate-600 uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Curriculum = () => (
  <Section id="curriculum" className="bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900">
          Expertise Across Global Boards
        </h2>
        <p className="mt-4 text-slate-600 text-lg">
          Whether you are in London, Melbourne, or Delhi, I have the specific
          curriculum experience to help you succeed.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <CurriculumCard
          title="IGCSE Board"
          icon={<Globe className="w-8 h-8 text-blue-500" />}
          desc="Comprehensive preparation for International GCSE mathematics (Core & Extended). focusing on past papers and marking schemes."
        />
        <CurriculumCard
          title="Australian Boards"
          icon={<Award className="w-8 h-8 text-green-500" />}
          desc="Specialized tutoring for NSW Board and Victoria's VCAA standards. Deep focus on Math Methods and conceptual clarity."
        />
        <CurriculumCard
          title="Foundational Math"
          icon={<BookOpen className="w-8 h-8 text-purple-500" />}
          desc="Building strong basics for Primary and Middle school students (Class 1 - 8) to remove fear of Algebra and Geometry."
        />
      </div>
    </div>
  </Section>
);

const CurriculumCard = ({ title, icon, desc }) => (
  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

// --- NEW PRICING SECTION ---
const Pricing = () => (
  <Section id="pricing" className="bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900">
          Transparent & Affordable Rates
        </h2>
        <p className="mt-4 text-slate-600">
          Invest in your child's education with clear, per-hour pricing. No
          hidden fees.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Primary */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="bg-green-100 w-fit px-3 py-1 rounded-full text-xs font-bold text-green-700 mb-4">
            PRIMARY
          </div>
          <h3 className="text-xl font-bold text-slate-800">Grades 1 - 4</h3>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-extrabold text-slate-900">$8</span>
            <span className="text-slate-500">/ hour</span>
          </div>
          <p className="mt-4 text-slate-600 text-sm">
            Fun, engaging lessons to build love for numbers and basic logic.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> Basic
              Arithmetic
            </li>
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> Logic
              Building
            </li>
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> Homework
              Help
            </li>
          </ul>
        </div>

        {/* Middle School */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="w-fit px-3 py-1 rounded-full text-xs font-bold mb-4 bg-yellow-400 text-indigo-900">
            MIDDLE SCHOOL
          </div>
          <h3 className="text-xl font-bold text-slate-800">Grades 5 - 7</h3>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-extrabold text-slate-900">$10</span>
            <span className="text-slate-500">/ hour</span>
          </div>
          <p className="mt-4 text-slate-600 text-sm">
            Solidifying algebra and geometry concepts before high school.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> Algebra
              Basics
            </li>
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> Geometry &
              Mensuration
            </li>
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> Word
              Problems
            </li>
          </ul>
        </div>

        {/* Middle - Featured */}
        {/* <div className="bg-indigo-600 p-8 rounded-2xl shadow-xl border border-indigo-500 transform md:-translate-y-4 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-indigo-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            MOST POPULAR
          </div>
          <div className="bg-indigo-500 w-fit px-3 py-1 rounded-full text-xs font-bold text-white mb-4">
            MIDDLE SCHOOL
          </div>
          <h3 className="text-xl font-bold text-white">Grades 5 - 7</h3>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-extrabold text-white">$10</span>
            <span className="text-indigo-200">/ hour</span>
          </div>
          <p className="mt-4 text-indigo-100 text-sm">
            Solidifying algebra and geometry concepts before high school.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-indigo-50">
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-yellow-400" /> Algebra
              Basics
            </li>
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-yellow-400" /> Geometry &
              Mensuration
            </li>
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-yellow-400" /> Word
              Problems
            </li>
          </ul>
        </div> */}

        {/* High School */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
          <div className="bg-purple-100 w-fit px-3 py-1 rounded-full text-xs font-bold text-purple-700 mb-4">
            HIGH SCHOOL
          </div>
          <h3 className="text-xl font-bold text-slate-800">Grades 8 - 10</h3>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-extrabold text-slate-900">$12</span>
            <span className="text-slate-500">/ hour</span>
          </div>
          <p className="mt-4 text-slate-600 text-sm">
            Exam-focused preparation for IGCSE, CBSE, and Australian Boards.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> Past Paper
              Solving
            </li>
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> Advanced
              Trigonometry
            </li>
            <li className="flex gap-2">
              <CheckCircle size={16} className="text-indigo-600" /> Exam
              Strategies
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Section>
);

// --- NEW RESOURCES SECTION ---
const Resources = () => {
  const [openTrigo, setOpenTrigo] = useState(false);
  const [openWellness, setopenWellness] = useState(false);
  const [openMistakes, setopenMistakes] = useState(false);
  const resourceObj = useMemo(() => {
    return [
      {
        key: "trigo",
        title: "Trigonometry Grade 10 Formula Sheet",
        type: "PDF Guide",
      },
      { key: "exam", title: "Exam Anxiety Buster Guide", type: "Wellness" },
      {
        key: "mistakes",
        title: "5 Common Algebra Mistakes",
        type: "Cheatsheet",
      },
    ];
  }, []);

  const handleClick = (key) => {
    if (key === "trigo") {
      setOpenTrigo((prev) => !prev);
    }
    if (key === "exam") {
      setopenWellness((prev) => !prev);
    }
    if (key === "mistakes") {
      setopenMistakes((prev) => !prev);
    }
  };
  return (
    <Section id="resources" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Free Study Resources
          </h2>
          <p className="mt-4 text-slate-600">
            Download these free guides to help you study smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resourceObj.map((res, i) => (
            <div
              key={res.key}
              className="group bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 cursor-pointer flex flex-col"
              onClick={() => handleClick(res.key)}
            >
              {/* Header: Icon & Tag */}
              <div className="flex justify-between items-start mb-5">
                <div className="bg-indigo-50 p-3.5 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <FileText size={24} />
                </div>
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {res.type}
                </span>
              </div>

              {/* Content */}
              <h4 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors">
                {res.title}
              </h4>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                A concise guide to help you revise quickly before exams.
              </p>

              {/* Action Buttons (Improved) */}
              <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-3">
                {/* Primary 'View' Button */}
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-100 group-hover:shadow-indigo-200">
                  <Eye size={18} /> View Guide
                </button>

                {/* Secondary 'Download' Button */}
                {/* <button
                  className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 rounded-lg transition-all"
                  title="Download PDF"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents opening the modal when clicking download
                    // Add download logic here
                  }}
                >
                  <Download size={20} />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <TrigonometryModal setOpen={setOpenTrigo} open={openTrigo} />
      <ExamAnxietyModal setOpen={setopenWellness} open={openWellness} />
      <AlgebraMistakesModal setOpen={setopenMistakes} open={openMistakes} />
    </Section>
  );
};

const VideoSection = ({ onPlayVideo }) => (
  <Section id="videos" className="bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Sample Lessons</h2>
        <p className="mt-4 text-slate-400">
          Watch short clips to understand my teaching methodology.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Pass real YouTube IDs here */}
        <VideoCard
          title="Algebra Basics"
          duration="10:00"
          videoId="NybHckSEQBI"
          level="Middle School"
          onClick={onPlayVideo}
        />
        <VideoCard
          title="IGCSE Trigonometry"
          duration="8:45"
          videoId="Pub0e1Qe1Dk"
          level="IGCSE / Class 10"
          onClick={onPlayVideo}
        />
        <VideoCard
          title="Calculus Limits"
          duration="6:15"
          videoId="RiCc7LmnkRM"
          level="High School"
          onClick={onPlayVideo}
        />
      </div>
    </div>
  </Section>
);

const VideoCard = ({ title, duration, videoId, level, onClick }) => (
  <div
    className="group cursor-pointer bg-slate-800 rounded-xl overflow-hidden hover:bg-slate-700 transition-colors"
    onClick={() => onClick(videoId)}
  >
    <div className="relative aspect-video bg-black/50 overflow-hidden">
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        alt="Video thumbnail"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
          <Play size={24} className="text-indigo-600 ml-1" />
        </div>
      </div>
      <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-bold">
        {duration}
      </div>
    </div>
    <div className="p-4">
      <h4 className="font-semibold text-lg text-white group-hover:text-indigo-400 transition-colors mb-1">
        {title}
      </h4>
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
        {level}
      </span>
    </div>
  </div>
);

// --- NEW FAQ SECTION ---
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

const ContactForm = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const FORM_ENDPOINT = "https://formspree.io/f/YOUR_UNIQUE_ID_HERE";
  const CALENDLY_URL = "https://calendly.com/YOUR_USERNAME/30min";

  return (
    <Section id="book" className="bg-indigo-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Book Your Free Demo Session
        </h2>
        <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
          Ready to improve your grades? Fill out this form or book a slot
          directly.
        </p>

        <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-2xl max-w-lg mx-auto text-left">
          <form action={FORM_ENDPOINT} method="POST" className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Student Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                placeholder="Enter student name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                placeholder="Enter email address"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Grade/Year
                </label>
                <div className="relative">
                  <select
                    name="grade"
                    className="w-full appearance-none bg-slate-50 text-slate-700 px-4 py-3.5 pr-10 rounded-xl border border-slate-200 outline-none transition-all cursor-pointer focus:bg-white focus:border-indigo-500 hover:border-indigo-300"
                  >
                    <option>Class 1-4</option>
                    <option>Class 5-7</option>
                    <option>Class 8-10</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronDown size={20} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Preferred Board
                </label>
                <div className="relative">
                  <select
                    name="board"
                    className="w-full appearance-none bg-slate-50 text-slate-700 px-4 py-3.5 pr-10 rounded-xl border border-slate-200 outline-none transition-all cursor-pointer focus:bg-white focus:border-indigo-500 hover:border-indigo-300"
                  >
                    <option>IGCSE</option>
                    <option>NSW</option>
                    <option>VCAA</option>
                    <option>CBSE</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronDown size={20} />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsCalendlyOpen(true)}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-md transition-all mt-2"
            >
              Request Slot via Calendly
            </button>
            <div className="text-center text-slate-400 text-sm my-2">
              - OR -
            </div>
            <button
              type="submit"
              className="w-full bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-bold py-3 rounded-lg transition-all"
            >
              Send Email Inquiry
            </button>
          </form>
        </div>
      </div>

      {isCalendlyOpen && (
        <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white w-full max-w-4xl h-[80vh] relative rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsCalendlyOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-red-50 text-slate-600 hover:text-red-600 p-2 rounded-full transition-colors shadow-sm"
            >
              <X size={24} />
            </button>
            <iframe
              src={CALENDLY_URL}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Select a Date & Time"
            ></iframe>
          </div>
        </div>
      )}
    </Section>
  );
};

// --- IMPROVED FOOTER WITH CONTACT INFO ---
const Footer = ({ onNavigate }) => (
  <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4 text-white">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold">
              S
            </div>
            <span className="text-xl font-bold">MathWithSamra</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Empowering students globally with personalized mathematics
            education. Transforming anxiety into achievement from Deoband to the
            World.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {["Experience", "Curriculum", "Pricing", "Resources", "FAQ"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition-colors"
                  onClick={() => onNavigate(item.toLowerCase())}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Contact & Connect</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-indigo-500" />
              <a
                href="mailto:tutor@samrasiddiqui.com"
                className="hover:text-white"
              >
                tutor@samrasiddiqui.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-indigo-500" />
              <span className="hover:text-white">+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin size={18} className="text-indigo-500" />
              <a
                href="https://linkedin.com/in/samrasiddiqui"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                LinkedIn Profile
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={18} className="text-indigo-500" />
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                WhatsApp Chat
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 text-center text-sm flex flex-col md:flex-row justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} Samra Siddiqui. All rights reserved.
        </p>
        <p className="mt-2 md:mt-0 text-slate-600">Teaching Grades 1 - 10</p>
      </div>
    </div>
  </footer>
);

/**
 * ==========================================
 * MAIN APP COMPONENT
 * ==========================================
 */

const App = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />

      <Navbar onNavigate={scrollToSection} />
      <Hero onNavigate={scrollToSection} />
      <Curriculum />
      <Pricing />
      <Resources />
      <VideoSection onPlayVideo={setActiveVideo} />
      <FAQ />
      <ContactForm />
      <Footer onNavigate={scrollToSection} />

      <WhatsAppButton />
    </div>
  );
};

export default App;
