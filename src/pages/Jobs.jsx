import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Bookmark,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";

import jobsData from "../data/jobs";

function Jobs() {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("All");
  const [workMode, setWorkMode] = useState("All");
  const [experience, setExperience] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const [savedJobs, setSavedJobs] = useState(() => {
    try {
      const stored = localStorage.getItem("jobconnect_saved_jobs");

      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [mobileFilters, setMobileFilters] = useState(false);

  /* ============================================================
     SAVE JOBS TO LOCAL STORAGE
  ============================================================ */

  useEffect(() => {
    localStorage.setItem("jobconnect_saved_jobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  /* ============================================================
     FILTER + SORT
  ============================================================ */

  const filteredJobs = useMemo(() => {
    let results = jobsData.filter((job) => {
      const skills = Array.isArray(job.skills) ? job.skills : [];

      const searchableText = `
        ${job.title || ""}
        ${job.company || ""}
        ${job.location || ""}
        ${skills.join(" ")}
      `.toLowerCase();

      const keywordMatch =
        keyword.trim() === "" ||
        searchableText.includes(keyword.trim().toLowerCase());

      const locationMatch =
        location.trim() === "" ||
        (job.location || "")
          .toLowerCase()
          .includes(location.trim().toLowerCase());

      const typeMatch = jobType === "All" || job.type === jobType;

      const modeMatch = workMode === "All" || job.mode === workMode;

      const experienceMatch =
        experience === "All" || job.experience === experience;

      return (
        keywordMatch &&
        locationMatch &&
        typeMatch &&
        modeMatch &&
        experienceMatch
      );
    });

    if (sortBy === "Salary: High to Low") {
      results = [...results].sort(
        (a, b) => getSalaryValue(b.salary) - getSalaryValue(a.salary),
      );
    }

    if (sortBy === "Salary: Low to High") {
      results = [...results].sort(
        (a, b) => getSalaryValue(a.salary) - getSalaryValue(b.salary),
      );
    }

    return results;
  }, [keyword, location, jobType, workMode, experience, sortBy]);

  /* ============================================================
     SAVE / UNSAVE
  ============================================================ */

  const toggleSave = (id) => {
    setSavedJobs((current) =>
      current.includes(id)
        ? current.filter((jobId) => jobId !== id)
        : [...current, id],
    );
  };

  /* ============================================================
     CLEAR FILTERS
  ============================================================ */

  const clearFilters = () => {
    setKeyword("");
    setLocation("");
    setJobType("All");
    setWorkMode("All");
    setExperience("All");
    setSortBy("Newest");
  };

  const activeFilterCount = [
    jobType !== "All",
    workMode !== "All",
    experience !== "All",
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900">
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/")}
            className="group flex shrink-0 items-center gap-2.5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
              <BriefcaseBusiness size={19} />
            </div>

            <span className="text-lg font-bold tracking-tight sm:text-xl">
              Job<span className="text-blue-600">Connect</span>
            </span>
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            <button
              onClick={() => navigate("/")}
              className="text-sm font-medium text-slate-500 transition hover:text-slate-950"
            >
              Home
            </button>

            <button className="relative text-sm font-semibold text-slate-950">
              Find Jobs
              <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-blue-600" />
            </button>

            <button className="text-sm font-medium text-slate-500 transition hover:text-slate-950">
              Companies
            </button>

            <button className="text-sm font-medium text-slate-500 transition hover:text-slate-950">
              Career Tools
            </button>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/saved-jobs")}
              className="relative hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-950 sm:flex"
            >
              <Bookmark
                size={17}
                fill={savedJobs.length > 0 ? "currentColor" : "none"}
              />

              <span>Saved</span>

              {savedJobs.length > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 text-[10px] font-bold text-white">
                  {savedJobs.length}
                </span>
              )}
            </button>

            <button
              onClick={() => navigate("/login")}
              className="hidden px-3 py-2 text-sm font-semibold text-slate-600 transition hover:text-slate-950 sm:block"
            >
              Sign in
            </button>

            <button
              onClick={() => navigate("/register")}
              className="group flex items-center gap-2 rounded-xl bg-slate-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg sm:px-4"
            >
              <span>Post a Job</span>

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          SEARCH HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl" />

          <div className="absolute -left-40 bottom-[-250px] h-[450px] w-[450px] rounded-full bg-slate-100 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="max-w-3xl animate-[fadeUp_.6s_ease-out]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
              <Sparkles size={14} />
              Explore opportunities
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Find work that
              <span className="block text-blue-600">moves you forward.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Search opportunities by role, skills and location. Find the right
              position and take the next step in your career.
            </p>
          </div>

          {/* SEARCH */}

          <div className="relative mt-8 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/60 transition duration-300 hover:shadow-2xl hover:shadow-slate-200/70">
            <div className="grid gap-2 lg:grid-cols-[1.2fr_0.9fr_auto]">
              {/* Keyword */}

              <div className="flex min-w-0 items-center gap-3 rounded-xl border border-transparent bg-slate-50 px-4 py-3 transition focus-within:border-blue-200 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50">
                <Search size={20} className="shrink-0 text-slate-400" />

                <div className="min-w-0 flex-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Search
                  </label>

                  <input
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Job title, skills or company"
                    className="mt-0.5 w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>

                {keyword && (
                  <button
                    onClick={() => setKeyword("")}
                    className="rounded-full p-1 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              {/* Location */}

              <div className="flex min-w-0 items-center gap-3 rounded-xl border border-transparent bg-slate-50 px-4 py-3 transition focus-within:border-blue-200 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50">
                <MapPin size={20} className="shrink-0 text-slate-400" />

                <div className="min-w-0 flex-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Location
                  </label>

                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City or location"
                    className="mt-0.5 w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>

                {location && (
                  <button
                    onClick={() => setLocation("")}
                    className="rounded-full p-1 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              {/* Search button */}

              <button
                onClick={() => {
                  document.getElementById("job-results")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
              >
                Search jobs
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </div>

          {/* Popular searches */}

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <span className="font-semibold text-slate-400">Popular:</span>

            {["Software Engineer", "Java Developer", "Data Analyst"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setKeyword(item)}
                  className="font-medium text-slate-600 transition hover:text-blue-600"
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          RESULTS
      ====================================================== */}

      <main
        id="job-results"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      >
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-bold tracking-tight text-slate-950">
                {filteredJobs.length} jobs found
              </h2>

              {activeFilterCount > 0 && (
                <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-bold text-blue-600">
                  {activeFilterCount} active
                </span>
              )}
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Opportunities matching your search
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileFilters(true)}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 md:hidden"
            >
              <SlidersHorizontal size={16} />
              Filters
              {activeFilterCount > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-4 pr-10 text-sm font-semibold text-slate-700 shadow-sm outline-none transition hover:border-slate-300 focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
              >
                <option>Newest</option>
                <option>Salary: High to Low</option>
                <option>Salary: Low to High</option>
              </select>

              <ChevronDown
                size={15}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-7 lg:grid-cols-[250px_minmax(0,1fr)]">
          {/* FILTER SIDEBAR */}

          <aside
            className={`fixed inset-0 z-50 ${
              mobileFilters ? "block" : "hidden"
            } lg:static lg:block`}
          >
            <div
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileFilters(false)}
            />

            <div className="absolute left-0 top-0 h-full w-[300px] overflow-y-auto bg-white p-5 shadow-2xl lg:static lg:h-auto lg:w-auto lg:rounded-2xl lg:border lg:border-slate-200 lg:p-5 lg:shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal size={17} className="text-blue-600" />

                    <h2 className="font-bold text-slate-950">Filters</h2>
                  </div>

                  <p className="mt-1 text-xs text-slate-400">
                    Refine your search
                  </p>
                </div>

                <button
                  onClick={() => setMobileFilters(false)}
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 lg:hidden"
                >
                  <X size={19} />
                </button>
              </div>

              <FilterGroup title="Job type">
                {["All", "Full-time", "Part-time", "Internship"].map(
                  (option) => (
                    <FilterOption
                      key={option}
                      label={option}
                      active={jobType === option}
                      onClick={() => setJobType(option)}
                    />
                  ),
                )}
              </FilterGroup>

              <FilterGroup title="Work mode">
                {["All", "On-site", "Hybrid", "Remote"].map((option) => (
                  <FilterOption
                    key={option}
                    label={option}
                    active={workMode === option}
                    onClick={() => setWorkMode(option)}
                  />
                ))}
              </FilterGroup>

              <FilterGroup title="Experience">
                {["All", "0-1 years", "0–2 years", "1-3 years", "Fresher"].map(
                  (option) => (
                    <FilterOption
                      key={option}
                      label={option}
                      active={experience === option}
                      onClick={() => setExperience(option)}
                    />
                  ),
                )}
              </FilterGroup>

              <button
                onClick={() => {
                  clearFilters();
                  setMobileFilters(false);
                }}
                className="mt-2 w-full rounded-xl border border-slate-200 py-2.5 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Clear all filters
              </button>
            </div>
          </aside>

          {/* JOB LIST */}

          <section className="min-w-0 space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <article
                  key={job.id}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm opacity-0 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-6"
                  style={{
                    animation: `fadeUp .45s ease-out ${index * 70}ms forwards`,
                  }}
                >
                  {job.featured && (
                    <div className="absolute left-0 right-0 top-0 h-0.5 bg-blue-600" />
                  )}

                  <div className="flex gap-4">
                    <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-sm transition duration-300 group-hover:scale-105 group-hover:bg-blue-600 sm:flex">
                      {(job.company || "JC").slice(0, 2).toUpperCase()}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <button
                              onClick={() => navigate(`/jobs/${job.id}`)}
                              className="text-left text-lg font-bold tracking-tight text-slate-950 transition group-hover:text-blue-600 sm:text-xl"
                            >
                              {job.title}
                            </button>

                            {job.featured && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-600">
                                <Sparkles size={11} />
                                Featured
                              </span>
                            )}
                          </div>

                          <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm">
                            <span className="font-semibold text-slate-700">
                              {job.company}
                            </span>

                            <span className="text-slate-300">•</span>

                            <span className="flex items-center gap-1 text-slate-500">
                              <MapPin size={14} />
                              {job.location}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => toggleSave(job.id)}
                          aria-label={
                            savedJobs.includes(job.id)
                              ? "Remove saved job"
                              : "Save job"
                          }
                          className={`group/save relative shrink-0 rounded-xl p-2.5 transition duration-300 ${
                            savedJobs.includes(job.id)
                              ? "bg-blue-50 text-blue-600"
                              : "text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                          }`}
                        >
                          <Bookmark
                            size={19}
                            className="transition duration-300 group-hover/save:scale-110"
                            fill={
                              savedJobs.includes(job.id)
                                ? "currentColor"
                                : "none"
                            }
                          />

                          {savedJobs.includes(job.id) && (
                            <span className="absolute inset-0 rounded-xl border border-blue-200 animate-[ping_.7s_ease-out]" />
                          )}
                        </button>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <Tag>{job.type}</Tag>
                        <Tag>{job.mode}</Tag>
                        <Tag>{job.experience}</Tag>
                      </div>

                      <div className="mt-5 border-t border-slate-100 pt-4">
                        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Salary
                              </p>

                              <p className="mt-0.5 text-sm font-bold text-slate-900">
                                {job.salary || "Not disclosed"}
                              </p>
                            </div>

                            <div className="hidden h-8 w-px bg-slate-200 sm:block" />

                            <div className="flex items-center gap-1.5 text-sm text-slate-500">
                              <Clock3 size={14} />
                              {job.posted || "Recently posted"}
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-3">
                            <div className="hidden items-center gap-2 xl:flex">
                              {(Array.isArray(job.skills) ? job.skills : [])
                                .slice(0, 2)
                                .map((skill) => (
                                  <span
                                    key={skill}
                                    className="text-xs font-medium text-slate-500"
                                  >
                                    #{skill}
                                  </span>
                                ))}
                            </div>

                            <button
                              onClick={() => navigate(`/jobs/${job.id}`)}
                              className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-600 sm:w-auto"
                            >
                              View details
                              <ArrowRight
                                size={15}
                                className="transition-transform duration-300 group-hover/btn:translate-x-1"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 xl:hidden">
                          {(Array.isArray(job.skills) ? job.skills : []).map(
                            (skill) => (
                              <span
                                key={skill}
                                className="text-xs font-medium text-slate-400"
                              >
                                #{skill}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <EmptyState onClear={clearFilters} />
            )}
          </section>
        </div>
      </main>

      {/* MOBILE FILTER BAR */}

      {mobileFilters && (
        <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-slate-200 bg-white p-3 shadow-2xl lg:hidden">
          <button
            onClick={() => setMobileFilters(false)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3 text-sm font-bold text-white transition hover:bg-blue-600"
          >
            <Check size={17} />
            Apply filters
          </button>
        </div>
      )}

      {/* FOOTER */}

      <footer className="mt-10 border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 JobConnect. All rights reserved.</p>

          <p>Built for better career connections.</p>
        </div>
      </footer>

      {/* ANIMATIONS */}

      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(14px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes ping {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }

            100% {
              transform: scale(1.35);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

/* ============================================================
   SALARY HELPER
============================================================ */

function getSalaryValue(salary) {
  if (!salary) return 0;

  const match = String(salary).match(/\d+(\.\d+)?/);

  return Number(match?.[0] || 0);
}

/* ============================================================
   FILTER GROUP
============================================================ */

function FilterGroup({ title, children }) {
  return (
    <div className="mb-7">
      <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
        {title}
      </h3>

      <div className="space-y-1">{children}</div>
    </div>
  );
}

/* ============================================================
   FILTER OPTION
============================================================ */

function FilterOption({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition duration-200 ${
        active
          ? "bg-blue-50 font-semibold text-blue-700"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
      }`}
    >
      <span>{label}</span>

      <span
        className={`flex h-4 w-4 items-center justify-center rounded-full border transition ${
          active
            ? "border-blue-600 bg-blue-600"
            : "border-slate-300 group-hover:border-slate-400"
        }`}
      >
        {active && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
      </span>
    </button>
  );
}

/* ============================================================
   TAG
============================================================ */

function Tag({ children }) {
  return (
    <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-blue-100 hover:bg-blue-50 hover:text-blue-600">
      {children}
    </span>
  );
}

/* ============================================================
   EMPTY STATE
============================================================ */

function EmptyState({ onClear }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center shadow-sm">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
        <Search size={23} />
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-950">
        No matching jobs
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
        We couldn't find opportunities matching your current search. Try a
        different keyword, location or filter.
      </p>

      <button
        onClick={onClear}
        className="mt-6 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
      >
        Clear search
      </button>
    </div>
  );
}

export default Jobs;
