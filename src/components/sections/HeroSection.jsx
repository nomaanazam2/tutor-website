import {
  ArrowRight,
  CheckCircle,
  Globe,
  Video,
  Star,
  ShieldCheck,
} from "lucide-react";

const Hero = ({ onNavigate }) => (
  <header
    id="home"
    className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white"
  >
    {/* Decorative Background Element */}
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
      {/* Left Content */}
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
            <Video size={20} /> Watch Sample Video
          </button>
        </div>

        <div className="pt-4 flex items-center gap-6 text-sm font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={18} />
            <span>MSc in Mathematics</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={18} />
            <span>5+ Years Experience</span>
          </div>
        </div>
      </div>

      {/* Right Content - Profile Card */}
      <div className="relative animate-in slide-in-from-right duration-700 delay-100">
        <div className="aspect-[4/3] rounded-3xl bg-white border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center relative">
          {/* Subtle Grid Background Pattern */}
          <div className="absolute inset-0 bg-indigo-600/5 grid-pattern"></div>

          <div className="text-center p-8 z-10 flex flex-col items-center">
            {/* Profile Image Container */}
            <div className="relative mb-4">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden">
                {/* REPLACE THE SRC BELOW WITH YOUR ACTUAL PROFILE IMAGE URL.
                   If you don't have one online yet, you can put it in the public folder and use "/profile.jpg"
                */}
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Samra Siddiqui"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Verified Badge */}
              <div
                className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow-md"
                title="Verified Tutor"
              >
                <ShieldCheck className="text-blue-500 w-5 h-5 fill-blue-50" />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-slate-800">
              Samra Siddiqui
            </h3>
            <p className="text-indigo-600 font-medium text-lg mt-1">
              Professional Math Tutor
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["IGCSE", "NSW", "VCAA", "Grades 1-10"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-100 rounded-md text-xs font-bold text-slate-600 uppercase tracking-wide border border-slate-200"
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

export default Hero;
