import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bookmark,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Clock3,
  MapPin,
  Search,
  SlidersHorizontal,
  X,
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
    featured: true,
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
    featured: false,
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
    featured: true,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: true,
  },
];

function Jobs() {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("All");
  const [workMode, setWorkMode] = useState("All");
  const [experience, setExperience] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [savedJobs, setSavedJobs] = useState([]);
  const [mobileFilters, setMobileFilters] = useState(false);

  const filteredJobs = useMemo(() => {
    let results = jobsData.filter((job) => {
      const keywordMatch =
        keyword.trim() === "" ||
        `${job.role} ${job.company} ${job.skills.join(" ")}`
          .toLowerCase()
          .includes(keyword.toLowerCase());

      const locationMatch =
        location.trim() === "" ||
        job.location.toLowerCase().includes(location.toLowerCase());

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
      results = [...results].sort((a, b) => {
        const salaryA = Number(a.salary.match(/\d+/)?.[0] || 0);
        const salaryB = Number(b.salary.match(/\d+/)?.[0] || 0);
        return salaryB - salaryA;
      });
    }

    if (sortBy === "Salary: Low to High") {
      results = [...results].sort((a, b) => {
        const salaryA = Number(a.salary.match(/\d+/)?.[0] || 0);
        const salaryB = Number(b.salary.match(/\d+/)?.[0] || 0);
        return salaryA - salaryB;
      });
    }

    return results;
  }, [keyword, location, jobType, workMode, experience, sortBy]);

  const toggleSave = (id) => {
    setSavedJobs((current) =>
      current.includes(id)
        ? current.filter((jobId) => jobId !== id)
        : [...current, id],
    );
  };

  const clearFilters = () => {
    setKeyword("");
    setLocation("");
    setJobType("All");
    setWorkMode("All");
    setExperience("All");
    setSortBy("Newest");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-white">
              <BriefcaseBusiness size={18} />
            </div>

            <span className="text-xl font-bold tracking-tight">
              Job<span className="text-blue-600">Connect</span>
            </span>
          </button>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <button onClick={() => navigate("/")}>Home</button>
            <button className="text-slate-950">Find Jobs</button>
            <button>Companies</button>
            <button>Career Tools</button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/login")}
              className="hidden text-sm font-semibold text-slate-700 sm:block"
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

      {/* Search Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="mb-7">
            <p className="mb-2 text-sm font-semibold text-blue-600">
              JOB SEARCH
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Find your next opportunity
            </h1>

            <p className="mt-2 max-w-2xl text-slate-500">
              Search thousands of opportunities from companies hiring across
              technology and other industries.
            </p>
          </div>

          <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-sm md:grid-cols-[1fr_1fr_auto]">
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4">
              <Search size={19} className="text-slate-400" />

              <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Job title, skills or company"
                className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4">
              <MapPin size={19} className="text-slate-400" />

              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City or location"
                className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
              />
            </div>

            <button className="rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Search jobs
            </button>
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-slate-950">
              {filteredJobs.length} jobs found
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Showing opportunities matching your search
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileFilters(true)}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium md:hidden"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

            <div className="relative hidden sm:block">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pl-4 pr-10 text-sm font-medium outline-none"
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

        <div className="grid gap-7 lg:grid-cols-[240px_1fr]">
          {/* Filters */}
          <aside
            className={`fixed inset-0 z-50 ${
              mobileFilters ? "block" : "hidden"
            } lg:static lg:block`}
          >
            <div
              className="absolute inset-0 bg-slate-950/40 lg:hidden"
              onClick={() => setMobileFilters(false)}
            />

            <div className="absolute left-0 top-0 h-full w-[290px] overflow-y-auto bg-white p-5 lg:static lg:h-auto lg:w-auto lg:rounded-xl lg:border lg:border-slate-200 lg:p-5">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal size={18} />
                  <h2 className="font-semibold">Filters</h2>
                </div>

                <button
                  onClick={() => setMobileFilters(false)}
                  className="lg:hidden"
                >
                  <X size={20} />
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
                {["All", "0-1 years", "0-2 years", "1-3 years"].map(
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
                onClick={clearFilters}
                className="mt-4 w-full rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Clear all filters
              </button>
            </div>
          </aside>

          {/* Job List */}
          <section className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <article
                  key={job.id}
                  className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50"
                >
                  <div className="flex gap-4">
                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700 sm:flex">
                      {job.company.slice(0, 2).toUpperCase()}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <button
                            onClick={() => navigate(`/jobs/${job.id}`)}
                            className="text-left text-lg font-bold text-slate-950 transition group-hover:text-blue-600"
                          >
                            {job.role}
                          </button>

                          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
                            <span className="font-medium text-slate-700">
                              {job.company}
                            </span>

                            <span className="hidden sm:inline">•</span>

                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {job.location}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => toggleSave(job.id)}
                          className={`rounded-lg p-2 transition ${
                            savedJobs.includes(job.id)
                              ? "bg-blue-50 text-blue-600"
                              : "text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                          }`}
                        >
                          <Bookmark
                            size={19}
                            fill={
                              savedJobs.includes(job.id)
                                ? "currentColor"
                                : "none"
                            }
                          />
                        </button>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <Tag>{job.type}</Tag>
                        <Tag>{job.mode}</Tag>
                        <Tag>{job.experience}</Tag>
                      </div>

                      <div className="mt-5 flex flex-col justify-between gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                          <span className="font-semibold text-slate-900">
                            {job.salary}
                          </span>

                          <span className="flex items-center gap-1.5 text-slate-500">
                            <Clock3 size={14} />
                            {job.posted}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs font-medium text-slate-500"
                            >
                              #{skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {job.featured && (
                    <div className="mt-4 border-t border-slate-100 pt-3 text-xs font-semibold text-blue-600">
                      Featured opportunity
                    </div>
                  )}
                </article>
              ))
            ) : (
              <div className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                  <Search size={21} className="text-slate-500" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-950">
                  No jobs found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Try changing your search or removing some filters.
                </p>

                <button
                  onClick={clearFilters}
                  className="mt-5 rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Clear filters
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div className="mb-7">
      <h3 className="mb-3 text-sm font-semibold text-slate-950">{title}</h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function FilterOption({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
        active
          ? "bg-blue-50 font-semibold text-blue-700"
          : "text-slate-600 hover:bg-slate-50"
      }`}
    >
      <span>{label}</span>

      {active && <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />}
    </button>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-600">
      {children}
    </span>
  );
}

export default Jobs;
