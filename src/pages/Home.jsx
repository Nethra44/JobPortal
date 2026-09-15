import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const featuredJobs = [
    {
      id: 1,
      company: "Zoho",
      role: "Software Engineer",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      experience: "0–2 years",
      salary: "₹6–10 LPA",
      skills: ["Java", "SQL", "DSA"],
    },
    {
      id: 2,
      company: "Freshworks",
      role: "Frontend Developer",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      experience: "0–2 years",
      salary: "₹5–9 LPA",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      id: 3,
      company: "TCS",
      role: "Graduate Engineer Trainee",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "Fresher",
      salary: "₹4–7 LPA",
      skills: ["Java", "SQL", "Problem Solving"],
    },
  ];

  const companies = [
    { name: "Zoho", jobs: "24 open roles" },
    { name: "Freshworks", jobs: "18 open roles" },
    { name: "TCS", jobs: "42 open roles" },
    { name: "Cognizant", jobs: "31 open roles" },
  ];

  const stats = [
    { value: "10K+", label: "Job opportunities" },
    { value: "2K+", label: "Hiring companies" },
    { value: "50K+", label: "Active candidates" },
    { value: "95%", label: "Profile completion rate" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white">
              <BriefcaseBusiness size={19} />
            </div>

            <span className="text-xl font-bold tracking-tight">
              Job<span className="text-blue-600">Connect</span>
            </span>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => navigate("/jobs")}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              Find Jobs
            </button>

            <a
              href="#companies"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              Companies
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              How it works
            </a>

            <a
              href="#career-tools"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              Career Tools
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/login")}
              className="hidden px-4 py-2 text-sm font-semibold text-slate-700 transition hover:text-slate-950 sm:block"
            >
              Sign in
            </button>

            <button
              onClick={() => navigate("/register")}
              className="rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Post a Job
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-slate-200/60 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
            {/* LEFT */}
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
                <Sparkles size={14} className="text-blue-600" />
                Smarter way to find your next opportunity
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl">
                Your next opportunity
                <span className="block text-blue-600">starts here.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Discover jobs that match your skills, build a stronger profile,
                and connect with companies looking for people like you.
              </p>

              {/* SEARCH */}
              <div className="mt-9 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/50">
                <div className="grid gap-2 md:grid-cols-[1fr_0.8fr_auto]">
                  <div className="flex items-center gap-3 rounded-xl px-4 py-3">
                    <Search size={20} className="text-slate-400" />

                    <div className="w-full">
                      <label className="block text-xs font-semibold text-slate-500">
                        What are you looking for?
                      </label>

                      <input
                        type="text"
                        placeholder="Job title, skills or keywords"
                        className="mt-1 w-full border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl px-4 py-3">
                    <MapPin size={20} className="text-slate-400" />

                    <div className="w-full">
                      <label className="block text-xs font-semibold text-slate-500">
                        Location
                      </label>

                      <input
                        type="text"
                        placeholder="City or remote"
                        className="mt-1 w-full border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => navigate("/jobs")}
                    className="flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
                  >
                    Search
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                <span>Popular:</span>

                <button
                  onClick={() => navigate("/jobs")}
                  className="font-medium text-slate-700 hover:text-blue-600"
                >
                  Software Engineer
                </button>

                <button
                  onClick={() => navigate("/jobs")}
                  className="font-medium text-slate-700 hover:text-blue-600"
                >
                  Java Developer
                </button>

                <button
                  onClick={() => navigate("/jobs")}
                  className="font-medium text-slate-700 hover:text-blue-600"
                >
                  Data Analyst
                </button>
              </div>
            </div>

            {/* RIGHT RECOMMENDATION CARD */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Recommended for you
                    </p>

                    <h2 className="mt-1 text-lg font-bold text-slate-950">
                      Based on your profile
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Zap size={20} />
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                        Z
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-950">
                          Software Engineer
                        </h3>

                        <p className="text-sm text-slate-500">Zoho · Chennai</p>
                      </div>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      Strong match
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Java", "SQL", "DSA"].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-sm font-semibold text-slate-700">
                      ₹6–10 LPA
                    </span>

                    <button
                      onClick={() => navigate("/jobs/1")}
                      className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      View role
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-emerald-600"
                  />

                  <p className="text-sm leading-5 text-slate-600">
                    Complete your profile to unlock more relevant job
                    recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 px-6 py-10 md:grid-cols-4 lg:px-8">
            {stats.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </section>

        {/* ================= FEATURED JOBS ================= */}
        <section id="jobs" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Featured opportunities
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                  Roles worth exploring
                </h2>

                <p className="mt-3 max-w-xl text-slate-500">
                  Explore opportunities from companies actively looking for
                  skilled professionals.
                </p>
              </div>

              <button
                onClick={() => navigate("/jobs")}
                className="flex w-fit items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600"
              >
                View all jobs
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {featuredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onClick={() => navigate(`/jobs/${job.id}`)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= COMPANIES ================= */}
        <section
          id="companies"
          className="border-y border-slate-200 bg-slate-50 py-20"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Companies
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                Build your career with the right team
              </h2>

              <p className="mt-3 text-slate-500">
                Discover companies hiring across engineering, product,
                analytics, design and business roles.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {companies.map((company) => (
                <button
                  key={company.name}
                  onClick={() => navigate("/jobs")}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700 transition group-hover:bg-blue-50 group-hover:text-blue-600">
                    {company.name.charAt(0)}
                  </div>

                  <h3 className="mt-5 font-bold text-slate-950">
                    {company.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">{company.jobs}</p>

                  <span className="mt-5 flex items-center gap-1 text-sm font-semibold text-blue-600">
                    Explore jobs
                    <ChevronRight size={15} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section id="how-it-works" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Simple process
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                From profile to opportunity
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-slate-500">
                Everything you need to move from searching for a job to
                confidently applying.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              <Step
                number="01"
                icon={<Users size={22} />}
                title="Create your profile"
                description="Showcase your education, skills, experience and career interests in one professional profile."
              />

              <Step
                number="02"
                icon={<Search size={22} />}
                title="Discover relevant jobs"
                description="Search and filter opportunities based on role, skills, experience and location."
              />

              <Step
                number="03"
                icon={<CheckCircle2 size={22} />}
                title="Apply with confidence"
                description="Track applications, manage saved roles and use career tools to improve your profile."
              />
            </div>
          </div>
        </section>

        {/* ================= CAREER TOOLS ================= */}
        <section id="career-tools" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  Career tools
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  More than a job board.
                </h2>

                <p className="mt-5 max-w-lg leading-7 text-slate-400">
                  JobConnect is designed to help candidates understand where
                  they stand, improve their profiles and make better career
                  decisions.
                </p>

                <button
                  onClick={() => navigate("/register")}
                  className="mt-8 flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
                >
                  Create your profile
                  <ArrowRight size={17} />
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <ToolCard
                  icon={<BriefcaseBusiness size={21} />}
                  title="Resume Workspace"
                  description="Keep your resume ready for every application."
                />

                <ToolCard
                  icon={<Sparkles size={21} />}
                  title="Profile Insights"
                  description="Understand strengths and areas that need improvement."
                />

                <ToolCard
                  icon={<Search size={21} />}
                  title="Job Matching"
                  description="Discover opportunities aligned with your skills."
                />

                <ToolCard
                  icon={<ShieldCheck size={21} />}
                  title="Application Tracking"
                  description="Keep every application organized in one place."
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <BriefcaseBusiness size={18} />
                </div>

                <span className="text-xl font-bold">
                  Job<span className="text-blue-600">Connect</span>
                </span>
              </button>

              <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
                A modern platform connecting talented people with meaningful
                career opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-950">Candidates</h3>

              <div className="mt-4 space-y-3 text-sm text-slate-500">
                <button
                  onClick={() => navigate("/jobs")}
                  className="block hover:text-blue-600"
                >
                  Find Jobs
                </button>

                <button
                  onClick={() => navigate("/register")}
                  className="block hover:text-blue-600"
                >
                  Create Profile
                </button>

                <button
                  onClick={() => navigate("/login")}
                  className="block hover:text-blue-600"
                >
                  Sign in
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-950">Employers</h3>

              <div className="mt-4 space-y-3 text-sm text-slate-500">
                <button
                  onClick={() => navigate("/register")}
                  className="block hover:text-blue-600"
                >
                  Post a Job
                </button>

                <button
                  onClick={() => navigate("/register")}
                  className="block hover:text-blue-600"
                >
                  Create Company
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row">
            <p>© 2026 JobConnect. All rights reserved.</p>

            <p>Built for better career connections.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Stat({ value, label }) {
  return (
    <div className="px-5 text-center first:pl-0 last:pr-0">
      <p className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {value}
      </p>

      <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

function JobCard({ job, onClick }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
            {job.company.charAt(0)}
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">{job.company}</p>

            <h3 className="mt-0.5 font-bold text-slate-950">{job.role}</h3>
          </div>
        </div>

        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
          {job.type}
        </span>
      </div>

      <div className="mt-6 space-y-2.5 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          {job.location}
        </div>

        <div className="flex items-center gap-2">
          <BriefcaseBusiness size={16} />
          {job.experience}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        <span className="text-sm font-semibold text-slate-700">
          {job.salary}
        </span>

        <button
          onClick={onClick}
          className="flex items-center gap-1 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >
          View job
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

function Step({ number, icon, title, description }) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-7">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          {icon}
        </div>

        <span className="text-sm font-bold text-slate-300">{number}</span>
      </div>

      <h3 className="mt-7 text-lg font-bold text-slate-950">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}

function ToolCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-slate-700 hover:bg-slate-800">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-blue-400">
        {icon}
      </div>

      <h3 className="mt-5 font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}

export default Home;
