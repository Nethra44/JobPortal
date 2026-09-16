import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BriefcaseBusiness,
  Clock3,
  MapPin,
  Search,
  Trash2,
} from "lucide-react";

const jobsData = [
  {
    id: 1,
    company: "Zoho",
    role: "Software Engineer",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    mode: "On-site",
    experience: "0-2 years",
    salary: "₹6 - ₹10 LPA",
    posted: "2 days ago",
    skills: ["Java", "Spring Boot", "SQL"],
  },
  {
    id: 2,
    company: "Freshworks",
    role: "Backend Developer",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    mode: "Hybrid",
    experience: "1-3 years",
    salary: "₹8 - ₹14 LPA",
    posted: "3 days ago",
    skills: ["Java", "REST API", "PostgreSQL"],
  },
  {
    id: 3,
    company: "TCS",
    role: "Java Developer",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    mode: "Hybrid",
    experience: "0-2 years",
    salary: "₹5 - ₹9 LPA",
    posted: "1 day ago",
    skills: ["Java", "Spring", "MySQL"],
  },
  {
    id: 4,
    company: "Cognizant",
    role: "Associate Software Engineer",
    location: "Coimbatore, Tamil Nadu",
    type: "Full-time",
    mode: "On-site",
    experience: "0-1 years",
    salary: "₹4.5 - ₹7 LPA",
    posted: "5 days ago",
    skills: ["Java", "SQL", "Git"],
  },
  {
    id: 5,
    company: "Accenture",
    role: "Application Developer",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    mode: "Hybrid",
    experience: "1-3 years",
    salary: "₹7 - ₹12 LPA",
    posted: "4 days ago",
    skills: ["Java", "Spring Boot", "AWS"],
  },
  {
    id: 6,
    company: "Wipro",
    role: "Graduate Engineer Trainee",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    mode: "On-site",
    experience: "0-1 years",
    salary: "₹4 - ₹6 LPA",
    posted: "6 days ago",
    skills: ["Java", "SQL", "DSA"],
  },
  {
    id: 7,
    company: "Infosys",
    role: "System Engineer",
    location: "Pune, Maharashtra",
    type: "Full-time",
    mode: "Hybrid",
    experience: "0-2 years",
    salary: "₹4.5 - ₹7 LPA",
    posted: "1 week ago",
    skills: ["Java", "Python", "SQL"],
  },
  {
    id: 8,
    company: "Razorpay",
    role: "Software Development Engineer",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    mode: "On-site",
    experience: "1-3 years",
    salary: "₹10 - ₹18 LPA",
    posted: "2 days ago",
    skills: ["Java", "Spring Boot", "PostgreSQL"],
  },
];

function SavedJobs() {
  const navigate = useNavigate();

  const [savedIds, setSavedIds] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem("jobconnect_saved_jobs") || "[]",
    );

    setSavedIds(stored);
  }, []);

  const savedJobs = jobsData.filter((job) => savedIds.includes(job.id));

  const removeSavedJob = (id) => {
    const updated = savedIds.filter((jobId) => jobId !== id);

    setSavedIds(updated);

    localStorage.setItem("jobconnect_saved_jobs", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2.5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-blue-600 group-hover:shadow-lg">
              <BriefcaseBusiness size={19} />
            </div>

            <span className="text-lg font-bold tracking-tight sm:text-xl">
              Job<span className="text-blue-600">Connect</span>
            </span>
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            <button
              onClick={() => navigate("/")}
              className="text-sm font-medium text-slate-500 transition hover:text-slate-950"
            >
              Home
            </button>

            <button
              onClick={() => navigate("/jobs")}
              className="text-sm font-medium text-slate-500 transition hover:text-slate-950"
            >
              Find Jobs
            </button>

            <button className="text-sm font-semibold text-slate-950">
              Saved Jobs
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/seeker/dashboard")}
              className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              Dashboard
            </button>

            <button
              onClick={() => navigate("/jobs")}
              className="hidden items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg sm:flex"
            >
              Find Jobs
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* Back */}
        <button
          onClick={() => navigate("/jobs")}
          className="group mb-7 flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-950"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to jobs
        </button>

        {/* HEADER */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 px-6 py-8 text-white shadow-xl shadow-slate-200/50 sm:px-9 sm:py-10">
          <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <Bookmark size={22} />
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Saved jobs
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
              Keep track of opportunities you're interested in and come back
              when you're ready to apply.
            </p>

            <div className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200">
              {savedJobs.length} {savedJobs.length === 1 ? "job" : "jobs"} saved
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="mt-8">
          {savedJobs.length > 0 ? (
            <div className="space-y-4">
              {savedJobs.map((job, index) => (
                <article
                  key={job.id}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 sm:p-6"
                  style={{
                    animation: `fadeUp .45s ease-out ${index * 80}ms both`,
                  }}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="flex gap-4">
                    {/* Logo */}
                    <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white transition duration-300 group-hover:bg-blue-600 sm:flex">
                      {job.company.slice(0, 2).toUpperCase()}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <button
                            onClick={() => navigate(`/jobs/${job.id}`)}
                            className="text-left text-lg font-bold tracking-tight text-slate-950 transition group-hover:text-blue-600 sm:text-xl"
                          >
                            {job.role}
                          </button>

                          <p className="mt-1 text-sm font-semibold text-slate-600">
                            {job.company}
                          </p>
                        </div>

                        <button
                          onClick={() => removeSavedJob(job.id)}
                          aria-label="Remove saved job"
                          className="group/remove rounded-xl p-2.5 text-blue-600 transition duration-300 hover:bg-red-50 hover:text-red-500"
                        >
                          <Bookmark
                            size={19}
                            fill="currentColor"
                            className="transition duration-300 group-hover/remove:scale-110"
                          />
                        </button>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {job.location}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Clock3 size={14} />
                          {job.posted}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <Tag>{job.type}</Tag>
                        <Tag>{job.mode}</Tag>
                        <Tag>{job.experience}</Tag>
                      </div>

                      <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Salary
                          </p>

                          <p className="mt-0.5 text-sm font-bold text-slate-900">
                            {job.salary}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
                            >
                              #{skill}
                            </span>
                          ))}

                          <button
                            onClick={() => navigate(`/jobs/${job.id}`)}
                            className="group/button ml-auto flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-600"
                          >
                            View job
                            <ArrowRight
                              size={15}
                              className="transition-transform duration-300 group-hover/button:translate-x-1"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Bookmark size={27} />
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-950">
                No saved jobs yet
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                When you find a job you're interested in, save it here so you
                can easily come back to it later.
              </p>

              <button
                onClick={() => navigate("/jobs")}
                className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg"
              >
                <Search size={16} />
                Explore jobs
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          )}
        </section>
      </main>

      <footer className="mt-10 border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 JobConnect. All rights reserved.</p>
          <p>Built for better career connections.</p>
        </div>
      </footer>

      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-600">
      {children}
    </span>
  );
}

export default SavedJobs;
