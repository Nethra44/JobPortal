import {
  Bell,
  Bookmark,
  BriefcaseBusiness,
  ChevronRight,
  FileText,
  Home,
  LogOut,
  Menu,
  Search,
  Settings,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SeekerDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const applications = [
    {
      company: "Zoho",
      role: "Software Engineer",
      location: "Chennai",
      date: "Sep 14, 2026",
      status: "Under Review",
      logo: "Z",
    },
    {
      company: "Freshworks",
      role: "Frontend Developer",
      location: "Chennai",
      date: "Sep 11, 2026",
      status: "Shortlisted",
      logo: "F",
    },
    {
      company: "TCS",
      role: "Graduate Engineer Trainee",
      location: "Bangalore",
      date: "Sep 08, 2026",
      status: "Applied",
      logo: "T",
    },
  ];

  const recommendedJobs = [
    {
      id: 1,
      company: "Zoho",
      role: "Software Engineer",
      location: "Chennai",
      salary: "₹6–10 LPA",
      match: "94%",
      skills: ["Java", "SQL", "DSA"],
    },
    {
      id: 2,
      company: "Cognizant",
      role: "Java Developer",
      location: "Chennai",
      salary: "₹5–9 LPA",
      match: "89%",
      skills: ["Java", "Spring Boot", "SQL"],
    },
    {
      id: 3,
      company: "Freshworks",
      role: "Frontend Developer",
      location: "Chennai",
      salary: "₹5–9 LPA",
      match: "82%",
      skills: ["React", "JavaScript", "CSS"],
    },
  ];

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-800 bg-slate-950 text-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-slate-800 px-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-950">
              <BriefcaseBusiness size={18} />
            </div>

            <span className="text-xl font-bold tracking-tight">
              Job<span className="text-blue-400">Connect</span>
            </span>
          </button>

          <button
            onClick={closeSidebar}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Profile */}
        <div className="border-b border-slate-800 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold">
              N
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Nethra</p>
              <p className="truncate text-xs text-slate-400">Job Seeker</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <p className="px-3 pb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
            Workspace
          </p>

          <SidebarItem
            icon={<Home size={18} />}
            label="Dashboard"
            active
            onClick={() => navigate("/seeker/dashboard")}
          />

          <SidebarItem
            icon={<Search size={18} />}
            label="Find Jobs"
            onClick={() => navigate("/jobs")}
          />

          <SidebarItem icon={<FileText size={18} />} label="My Resume" />

          <SidebarItem
            icon={<BriefcaseBusiness size={18} />}
            label="Applications"
          />

          <SidebarItem icon={<Bookmark size={18} />} label="Saved Jobs" />

          <p className="mt-8 px-3 pb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
            Account
          </p>

          <SidebarItem icon={<User size={18} />} label="My Profile" />

          <SidebarItem icon={<Settings size={18} />} label="Settings" />
        </nav>

        {/* Bottom */}
        <div className="border-t border-slate-800 p-3">
          <button
            onClick={() => navigate("/")}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <div className="lg:pl-64">
        {/* TOP NAVBAR */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur sm:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
            >
              <Menu size={22} />
            </button>

            <div>
              <p className="text-xs font-medium text-slate-400">
                Job Seeker Workspace
              </p>

              <h1 className="text-lg font-bold text-slate-950">Dashboard</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50">
              <Bell size={18} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-600" />
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-1.5 pr-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-xs font-bold text-white">
                N
              </div>

              <span className="hidden text-sm font-semibold sm:block">
                Nethra
              </span>
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          {/* ================= WELCOME ================= */}
          <section className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium text-blue-600">
              </p>

              <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Welcome back,
              </h2>

              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                Here’s an overview of your job search activity.
              </p>
            </div>

            <button
              onClick={() => navigate("/jobs")}
              className="flex w-fit items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              <Search size={17} />
              Find Jobs
            </button>
          </section>

          {/* ================= PROFILE COMPLETION ================= */}
          <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[1fr_auto]">
              <div className="p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <User size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950">
                      Complete your profile
                    </h3>

                    <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500">
                      A complete profile helps recruiters understand your skills
                      and improves your job recommendations.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      Profile completion
                    </span>

                    <span className="text-sm font-bold text-slate-950">
                      80%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[80%] rounded-full bg-blue-600" />
                  </div>
                </div>
              </div>

              <div className="flex items-center border-t border-slate-200 bg-slate-50 p-6 lg:w-56 lg:border-l lg:border-t-0">
                <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-200 hover:text-blue-600">
                  Complete profile
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </section>

          {/* ================= STATS ================= */}
          <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <DashboardStat
              icon={<BriefcaseBusiness size={20} />}
              label="Applications"
              value="12"
              description="3 this week"
            />

            <DashboardStat
              icon={<Bookmark size={20} />}
              label="Saved Jobs"
              value="8"
              description="2 added recently"
            />

            <DashboardStat
              icon={<Sparkles size={20} />}
              label="Shortlisted"
              value="5"
              description="2 new updates"
            />

            <DashboardStat
              icon={<FileText size={20} />}
              label="Resume Score"
              value="82"
              suffix="/100"
              description="Good — improve skills"
            />
          </section>

          {/* ================= TWO COLUMN ================= */}
          <section className="mt-8 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
            {/* APPLICATIONS */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <div>
                  <h3 className="font-bold text-slate-950">
                    Recent applications
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Track your latest job applications.
                  </p>
                </div>

                <button className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
                  View all
                  <ChevronRight size={15} />
                </button>
              </div>

              <div className="divide-y divide-slate-100">
                {applications.map((application) => (
                  <ApplicationRow
                    key={`${application.company}-${application.role}`}
                    application={application}
                  />
                ))}
              </div>
            </div>

            {/* RESUME INSIGHTS */}
            <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-400">
                  <Sparkles size={21} />
                </div>

                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  82 / 100
                </span>
              </div>

              <h3 className="mt-6 text-lg font-bold">Resume insights</h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Your resume has a strong foundation. A few improvements could
                make it more effective for technical roles.
              </p>

              <div className="mt-6 space-y-3">
                <Insight text="Add measurable project results" />
                <Insight text="Highlight Spring Boot experience" />
                <Insight text="Improve technical skill keywords" />
              </div>

              <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-50">
                Review resume
                <ChevronRight size={16} />
              </button>
            </div>
          </section>

          {/* ================= RECOMMENDED JOBS ================= */}
          <section className="mt-8">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Recommended for you
                </p>

                <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
                  Jobs matching your profile
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Based on your skills and career interests.
                </p>
              </div>

              <button
                onClick={() => navigate("/jobs")}
                className="hidden items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-600 sm:flex"
              >
                Explore all
                <ArrowIcon />
              </button>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              {recommendedJobs.map((job) => (
                <RecommendedJob
                  key={job.id}
                  job={job}
                  onClick={() => navigate(`/jobs/${job.id}`)}
                />
              ))}
            </div>
          </section>

          {/* ================= CAREER TOOLS ================= */}
          <section className="mt-8">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                Career tools
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Tools designed to help you prepare for your next opportunity.
              </p>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <CareerTool
                icon={<FileText size={21} />}
                title="Resume Analyzer"
                description="Analyze your resume and identify areas for improvement."
              />

              <CareerTool
                icon={<Sparkles size={21} />}
                title="Skill Gap Analysis"
                description="Find the skills you should learn for your target roles."
              />

              <CareerTool
                icon={<BriefcaseBusiness size={21} />}
                title="Interview Practice"
                description="Prepare for technical and HR interviews with guided practice."
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

/* ================= SIDEBAR ITEM ================= */

function SidebarItem({ icon, label, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
        active
          ? "bg-white text-slate-950"
          : "text-slate-400 hover:bg-slate-800 hover:text-white"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

/* ================= DASHBOARD STAT ================= */

function DashboardStat({ icon, label, value, suffix, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
          {icon}
        </div>
      </div>

      <p className="mt-5 text-sm font-medium text-slate-500">{label}</p>

      <p className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
        {value}
        {suffix && (
          <span className="text-sm font-semibold text-slate-400">{suffix}</span>
        )}
      </p>

      <p className="mt-1 text-xs text-slate-400">{description}</p>
    </div>
  );
}

/* ================= APPLICATION ================= */

function ApplicationRow({ application }) {
  return (
    <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
          {application.logo}
        </div>

        <div>
          <h4 className="text-sm font-bold text-slate-950">
            {application.role}
          </h4>

          <p className="mt-1 text-xs text-slate-500">
            {application.company} · {application.location}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Applied {application.date}
          </p>
        </div>
      </div>

      <StatusBadge status={application.status} />
    </div>
  );
}

/* ================= STATUS ================= */

function StatusBadge({ status }) {
  const styles = {
    "Under Review": "bg-amber-50 text-amber-700",
    Shortlisted: "bg-emerald-50 text-emerald-700",
    Applied: "bg-blue-50 text-blue-700",
  };

  return (
    <span
      className={`w-fit rounded-full px-3 py-1.5 text-xs font-semibold ${
        styles[status] || "bg-slate-100 text-slate-600"
      }`}
    >
      {status}
    </span>
  );
}

/* ================= INSIGHT ================= */

function Insight({ text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />

      <p className="text-sm text-slate-300">{text}</p>
    </div>
  );
}

/* ================= RECOMMENDED JOB ================= */

function RecommendedJob({ job, onClick }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
            {job.company.charAt(0)}
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">{job.company}</p>

            <h4 className="mt-0.5 font-bold text-slate-950">{job.role}</h4>
          </div>
        </div>

        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
          {job.match}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
        <span>{job.location}</span>
        <span>{job.salary}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
          >
            {skill}
          </span>
        ))}
      </div>

      <button
        onClick={onClick}
        className="mt-5 flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
      >
        View job
        <ChevronRight size={15} />
      </button>
    </div>
  );
}

/* ================= CAREER TOOL ================= */

function CareerTool({ icon, title, description }) {
  return (
    <button className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      <h4 className="mt-5 font-bold text-slate-950">{title}</h4>

      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>

      <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-600">
        Open tool
        <ChevronRight size={15} />
      </span>
    </button>
  );
}

/* ================= ARROW ================= */

function ArrowIcon() {
  return <ChevronRight size={16} />;
}

export default SeekerDashboard;
