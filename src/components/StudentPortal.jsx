import React, { useState } from "react";
import {
  X,
  User,
  BookOpen,
  Clock,
  FileText,
  CheckCircle,
  AlertCircle,
  LogOut,
  ChevronRight,
  Video,
  Download,
} from "lucide-react";

// --- MOCK DATA (This simulates your database) ---
const STUDENT_DATA = {
  name: "Sarah Johnson",
  grade: "Grade 10 (IGCSE)",
  nextClass: "Thursday, 4:00 PM",
  progress: 65,
  assignments: [
    {
      id: 1,
      title: "Quadratic Equations Set A",
      due: "Oct 24",
      status: "Pending",
      priority: "High",
    },
    {
      id: 2,
      title: "Trig Identities Worksheet",
      due: "Oct 20",
      status: "Submitted",
      priority: "Low",
    },
    {
      id: 3,
      title: "Algebra Basics Quiz",
      due: "Oct 15",
      status: "Graded (A)",
      priority: "Low",
    },
  ],
  sessions: [
    {
      id: 101,
      date: "Oct 18",
      topic: "Intro to Trigonometry",
      notes: "Available",
      recording: "Available",
    },
    {
      id: 102,
      date: "Oct 15",
      topic: "Solving Quadratics",
      notes: "Available",
      recording: "Expired",
    },
    {
      id: 103,
      date: "Oct 12",
      topic: "Linear Inequalities",
      notes: "Available",
      recording: "Available",
    },
  ],
  lessonPlan: [
    { module: "Number Theory", status: "Completed" },
    { module: "Algebra & Graphs", status: "In Progress" },
    { module: "Geometry", status: "Upcoming" },
    { module: "Mensuration", status: "Upcoming" },
  ],
};

const StudentPortal = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("overview"); // overview, assignments, sessions

  if (!isOpen) return null;

  // --- LOGIN LOGIC ---
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple demo validation
    if (email && password) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter any email and password for the demo!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab("overview");
    setEmail("");
    setPassword("");
  };

  // --- RENDER: LOGIN SCREEN ---
  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
          >
            <X size={24} />
          </button>

          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-600">
              <User size={32} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Student Login
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              Access your assignments and class recordings.
            </p>

            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-lg border border-slate-200 focus:border-indigo-500 outline-none"
                  placeholder="student@demo.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded-lg border border-slate-200 focus:border-indigo-500 outline-none"
                  placeholder="••••••••"
                />
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-indigo-200">
                Sign In
              </button>
            </form>

            <div className="mt-6 p-3 bg-blue-50 text-blue-700 text-xs rounded border border-blue-100">
              <strong>Demo Hint:</strong> Enter any email/password to see the
              dashboard!
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDER: DASHBOARD ---
  return (
    <div className="fixed inset-0 z-[100] bg-slate-50 flex flex-col animate-in slide-in-from-bottom-10">
      {/* Top Bar */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
            S
          </div>
          <div>
            <h1 className="font-bold text-slate-900 leading-tight">
              Student Portal
            </h1>
            <p className="text-xs text-slate-500">
              Welcome back, {STUDENT_DATA.name}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="text-slate-500 hover:text-red-600 flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <LogOut size={18} />{" "}
            <span className="hidden sm:inline">Logout</span>
          </button>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <nav className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col p-4 gap-2">
          <NavItem
            icon={<User size={20} />}
            label="Overview"
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
          />
          <NavItem
            icon={<FileText size={20} />}
            label="Assignments"
            active={activeTab === "assignments"}
            onClick={() => setActiveTab("assignments")}
            count={1}
          />
          <NavItem
            icon={<Clock size={20} />}
            label="Session History"
            active={activeTab === "sessions"}
            onClick={() => setActiveTab("sessions")}
          />
          <NavItem
            icon={<BookOpen size={20} />}
            label="Lesson Plan"
            active={activeTab === "lessons"}
            onClick={() => setActiveTab("lessons")}
          />
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-5xl mx-auto">
            {/* OVERVIEW TAB */}
            {activeTab === "overview" && (
              <div className="space-y-8 animate-in fade-in">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                    <p className="text-indigo-100 text-sm font-medium mb-1">
                      Next Live Session
                    </p>
                    <h3 className="text-2xl font-bold mb-4">
                      {STUDENT_DATA.nextClass}
                    </h3>
                    <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all">
                      <Video size={16} /> Join Class Link
                    </button>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <p className="text-slate-500 text-sm font-medium mb-1">
                      Syllabus Progress
                    </p>
                    <div className="flex items-end gap-2 mb-2">
                      <h3 className="text-3xl font-bold text-slate-800">
                        {STUDENT_DATA.progress}%
                      </h3>
                      <span className="text-sm text-green-500 font-bold mb-1.5">
                        +5% this week
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${STUDENT_DATA.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-center items-center text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-3">
                      <AlertCircle size={24} />
                    </div>
                    <h3 className="font-bold text-slate-800">
                      1 Assignment Due
                    </h3>
                    <button
                      onClick={() => setActiveTab("assignments")}
                      className="text-indigo-600 text-sm font-semibold mt-2 hover:underline"
                    >
                      View Details
                    </button>
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4">
                    Recent Sessions
                  </h3>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                    {STUDENT_DATA.sessions.slice(0, 2).map((session) => (
                      <SessionRow key={session.id} session={session} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ASSIGNMENTS TAB */}
            {activeTab === "assignments" && (
              <div className="space-y-6 animate-in fade-in">
                <h2 className="text-2xl font-bold text-slate-800">
                  Homework & Assignments
                </h2>
                <div className="grid gap-4">
                  {STUDENT_DATA.assignments.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-bold text-slate-800">
                            {item.title}
                          </h4>
                          {item.priority === "High" &&
                            item.status === "Pending" && (
                              <span className="text-[10px] font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-full uppercase">
                                Due Soon
                              </span>
                            )}
                        </div>
                        <p className="text-sm text-slate-500">
                          Due Date: {item.due}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <StatusBadge status={item.status} />
                        {item.status === "Pending" ? (
                          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
                            Upload
                          </button>
                        ) : (
                          <button className="px-4 py-2 bg-slate-100 text-slate-600 text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors">
                            View Feedback
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SESSIONS TAB */}
            {activeTab === "sessions" && (
              <div className="space-y-6 animate-in fade-in">
                <h2 className="text-2xl font-bold text-slate-800">
                  Session History & Recordings
                </h2>
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  {STUDENT_DATA.sessions.map((session) => (
                    <SessionRow key={session.id} session={session} />
                  ))}
                </div>
              </div>
            )}

            {/* LESSONS TAB */}
            {activeTab === "lessons" && (
              <div className="space-y-6 animate-in fade-in">
                <h2 className="text-2xl font-bold text-slate-800">
                  Your Learning Path
                </h2>
                <div className="relative pl-8 border-l-2 border-indigo-100 space-y-8">
                  {STUDENT_DATA.lessonPlan.map((lesson, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline Dot */}
                      <div
                        className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white shadow-sm ${
                          lesson.status === "Completed"
                            ? "bg-green-500"
                            : lesson.status === "In Progress"
                            ? "bg-indigo-600"
                            : "bg-slate-300"
                        }`}
                      ></div>

                      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold text-slate-800">
                            {lesson.module}
                          </h4>
                          <span
                            className={`text-xs font-bold px-2 py-1 rounded-full ${
                              lesson.status === "Completed"
                                ? "bg-green-100 text-green-700"
                                : lesson.status === "In Progress"
                                ? "bg-indigo-100 text-indigo-700"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            {lesson.status}
                          </span>
                        </div>
                        <p className="text-sm text-slate-500">
                          {lesson.status === "In Progress"
                            ? "Current Focus: Quadratic Formula & Graphs"
                            : "Standard IGCSE Curriculum Module"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const NavItem = ({ icon, label, active, onClick, count }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-all ${
      active
        ? "bg-indigo-50 text-indigo-700"
        : "text-slate-600 hover:bg-slate-50"
    }`}
  >
    <div className="flex items-center gap-3">
      {icon}
      <span>{label}</span>
    </div>
    {count && (
      <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
        {count}
      </span>
    )}
  </button>
);

const SessionRow = ({ session }) => (
  <div className="p-5 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row justify-between sm:items-center gap-4">
    <div>
      <div className="flex items-center gap-3 mb-1">
        <span className="font-mono text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">
          {session.date}
        </span>
        <h4 className="font-bold text-slate-800">{session.topic}</h4>
      </div>
      <p className="text-xs text-slate-500">Duration: 60 mins • IGCSE Math</p>
    </div>
    <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 text-xs font-semibold text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-lg transition-colors">
        <Download size={14} /> Notes
      </button>
      <button
        disabled={session.recording === "Expired"}
        className={`flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg border transition-colors ${
          session.recording === "Expired"
            ? "text-slate-300 border-slate-100 cursor-not-allowed"
            : "text-slate-700 border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
        }`}
      >
        <Video size={14} />{" "}
        {session.recording === "Expired" ? "Expired" : "Watch Replay"}
      </button>
    </div>
  </div>
);

const StatusBadge = ({ status }) => {
  const styles = {
    Pending: "bg-orange-100 text-orange-700",
    Submitted: "bg-blue-100 text-blue-700",
    "Graded (A)": "bg-green-100 text-green-700",
  };
  return (
    <span
      className={`text-xs font-bold px-3 py-1 rounded-full ${
        styles[status] || "bg-slate-100"
      }`}
    >
      {status}
    </span>
  );
};

export default StudentPortal;
