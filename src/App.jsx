import React, { useState, useEffect, useMemo } from "react";
import { Menu, X } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import StudentPortal from "./components/StudentPortal";
import VideoModal from "./utility/VideoModal";
import Hero from "./components/sections/HeroSection";
import Curriculum from "./components/sections/CurriculumSection";
import Pricing from "./components/sections/PricingSection";
import Resources from "./components/sections/ResourceSection";
import VideoSection from "./components/sections/VideoSection";
import FAQ from "./components/sections/FAQSection";
import ContactSection from "./components/sections/BookingSection";
import Footer from "./components/sections/FooterSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import Reviews from "./components/sections/Reviews";
/**
 * ==========================================
 * UTILITY COMPONENTS
 * ==========================================
 */

// 2. WHATSAPP FLOATING BUTTON
// const WhatsAppButton = () => {
//   // Replace with your actual number: Country Code + Number (No spaces/dashes)
//   // Example: 919876543210
//   const PHONE = "919876543210";
//   const TEXT = "Hi Samra, I'm interested in Math tutoring.";

//   return (
//     <a
//       href={`https://wa.me/${PHONE}?text=${encodeURIComponent(TEXT)}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center gap-2 group"
//     >
//       <MessageCircle size={28} fill="white" />
//       <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-bold">
//         Connect on WhatsApp
//       </span>
//     </a>
//   );
// };

/**
 * ==========================================
 * SIDE-NAV
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

  const navLinks2 = [
    { name: "Experience", id: "experience" },
    { name: "Curriculum", id: "curriculum" },
    { name: "Pricing", id: "pricing" },
    { name: "Resources", id: "resources" },
    { name: "FAQ", id: "faq" },
  ];
  const navLinks = [
    { name: "Curriculum", id: "curriculum" },
    { name: "About", id: "experience" },
    { name: "Reviews", id: "reviews" },
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

        <div className="hidden tablet:flex items-center space-x-6">
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
            Book Free Demo
          </button>
        </div>

        <button
          className="tablet:hidden text-slate-600 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="tablet:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
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
      <ExperienceSection />
      <Reviews />
      <Pricing />
      <VideoSection onPlayVideo={setActiveVideo} />
      <Resources />
      <ContactSection />
      <FAQ />
      <Footer onNavigate={scrollToSection} />

      {/* <WhatsAppButton /> */}
      {/* <StudentPortal isOpen={true} onClose={() => {}} /> */}
    </div>
  );
};

export default App;
