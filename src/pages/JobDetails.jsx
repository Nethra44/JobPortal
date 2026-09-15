import {
  ArrowLeft,
  Bookmark,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  MapPin,
  Share2,
  Sparkles,
  Users,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const jobs = {
  1: {
    company: "Zoho",
    role: "Software Developer",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    mode: "On-site",
    experience: "0–2 years",
    salary: "₹6–10 LPA",
    posted: "2 days ago",
    applicants: "124 applicants",
    description:
      "We are looking for a motivated Software Developer to join our engineering team. You will work on scalable applications, collaborate with experienced developers, and contribute to products used by customers around the world.",
    responsibilities: [
      "Design, develop and maintain reliable software applications.",
      "Write clean, maintainable and efficient code.",
      "Work closely with developers, designers and product teams.",
      "Debug issues and improve application performance.",
      "Participate in code reviews and technical discussions.",
    ],
    requirements: [
      "Strong programming fundamentals.",
      "Knowledge of Java or another object-oriented programming language.",
      "Understanding of SQL and relational databases.",
      "Good problem-solving and analytical skills.",
      "Ability to work effectively in a team.",
    ],
    skills: ["Java", "SQL", "Spring Boot", "REST API", "Git"],
  },

  2: {
    company: "Freshworks",
    role: "Associate Software Engineer",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    mode: "Hybrid",
    experience: "0–2 years",
    salary: "₹5–9 LPA",
    posted: "4 days ago",
    applicants: "98 applicants",
    description:
      "Join our engineering team and help build customer-focused software products. This role provides an opportunity to work with modern technologies and learn from experienced engineers.",
    responsibilities: [
      "Develop and test application features.",
      "Collaborate with engineering and product teams.",
      "Investigate and resolve software issues.",
      "Write unit tests and maintain technical documentation.",
      "Participate in agile development practices.",
    ],
    requirements: [
      "Knowledge of programming fundamentals.",
      "Basic understanding of data structures and algorithms.",
      "Knowledge of databases and SQL.",
      "Good communication and problem-solving skills.",
    ],
    skills: ["Java", "JavaScript", "SQL", "REST API", "Git"],
  },

  3: {
    company: "TCS",
    role: "Graduate Software Engineer",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    mode: "Hybrid",
    experience: "0–1 years",
    salary: "₹4.5–7 LPA",
    posted: "1 week ago",
    applicants: "210 applicants",
    description:
      "We are seeking graduate engineers who are passionate about technology and problem solving. You will work with engineering teams to develop, test and maintain enterprise applications.",
    responsibilities: [
      "Develop application modules according to requirements.",
      "Analyze and resolve technical problems.",
      "Write and maintain application code.",
      "Work with databases and APIs.",
      "Participate in testing and deployment activities.",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field.",
      "Strong programming fundamentals.",
      "Basic knowledge of SQL and databases.",
      "Good analytical and communication skills.",
    ],
    skills: ["Java", "SQL", "DSA", "Git", "REST API"],
  },

  4: {
    company: "Cognizant",
    role: "Programmer Analyst",
    location: "Coimbatore, Tamil Nadu",
    type: "Full-time",
    mode: "Hybrid",
    experience: "0–2 years",
    salary: "₹5–8 LPA",
    posted: "3 days ago",
    applicants: "156 applicants",
    description:
      "Work with technology teams to design, develop and maintain enterprise software solutions while gaining hands-on experience with modern development practices.",
    responsibilities: [
      "Develop and maintain software applications.",
      "Analyze business and technical requirements.",
      "Write clean and testable code.",
      "Collaborate with cross-functional teams.",
      "Support application testing and troubleshooting.",
    ],
    requirements: [
      "Strong programming knowledge.",
      "Understanding of object-oriented programming.",
      "Basic SQL knowledge.",
      "Strong analytical and problem-solving skills.",
    ],
    skills: ["Java", "SQL", "OOP", "Git", "Spring"],
  },
};

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [saved, setSaved] = useState(false);
  const [applied, setApplied] = useState(false);

  const job = jobs[id] || jobs[1];

  const handleApply = () => {
    setApplied(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/")}
            className="text-xl font-bold tracking-tight text-slate-950"
          >
            Job<span className="text-blue-600">Connect</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/jobs")}
              className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-950 sm:block"
            >
              Find Jobs
            </button>

            <button
              onClick={() => navigate("/seeker/dashboard")}
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Dashboard
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back */}
        <button
          onClick={() => navigate("/jobs")}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-950"
        >
          <ArrowLeft size={17} />
          Back to jobs
        </button>

        {/* Job Header */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-xl font-bold text-white">
                {job.company.charAt(0)}
              </div>

              <div>
                <p className="mb-1 text-sm font-medium text-blue-600">
                  {job.company}
                </p>

                <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  {job.role}
                </h1>

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    {job.location}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <BriefcaseBusiness size={16} />
                    {job.type}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock3 size={16} />
                    {job.experience}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Users size={16} />
                    {job.applicants}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setSaved(!saved)}
                className={`flex h-11 w-11 items-center justify-center rounded-xl border transition ${
                  saved
                    ? "border-blue-200 bg-blue-50 text-blue-600"
                    : "border-slate-200 text-slate-500 hover:bg-slate-50"
                }`}
              >
                <Bookmark size={19} fill={saved ? "currentColor" : "none"} />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50">
                <Share2 size={18} />
              </button>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600">
              {job.mode}
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600">
              {job.experience}
            </span>

            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
              {job.salary}
            </span>
          </div>
        </section>

        {/* Main Content */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Left */}
          <div className="space-y-6">
            <ContentSection title="About the role">
              <p className="leading-7 text-slate-600">{job.description}</p>
            </ContentSection>

            <ContentSection title="Responsibilities">
              <ul className="space-y-3">
                {job.responsibilities.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </ul>
            </ContentSection>

            <ContentSection title="Requirements">
              <ul className="space-y-3">
                {job.requirements.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </ul>
            </ContentSection>

            <ContentSection title="Skills">
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ContentSection>
          </div>

          {/* Right */}
          <aside className="space-y-6">
            {/* Apply Card */}
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Estimated compensation
              </p>

              <p className="mt-1 text-2xl font-bold text-slate-950">
                {job.salary}
              </p>

              <div className="mt-5">
                <button
                  onClick={handleApply}
                  disabled={applied}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                    applied
                      ? "cursor-default bg-emerald-100 text-emerald-700"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {applied ? (
                    <>
                      <CheckCircle2 size={18} />
                      Application Submitted
                    </>
                  ) : (
                    "Apply Now"
                  )}
                </button>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                Your profile and resume will be shared with the recruiter.
              </p>
            </div>

            {/* AI Match */}
            <div className="rounded-2xl bg-slate-950 p-6 text-white shadow-sm">
              <div className="flex items-center gap-2">
                <Sparkles size={18} />
                <p className="font-semibold">JobConnect Match</p>
              </div>

              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold">82%</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Strong match for your profile
                  </p>
                </div>

                <div className="h-12 w-12 rounded-full border-4 border-blue-500 flex items-center justify-center">
                  <span className="text-xs font-bold">82</span>
                </div>
              </div>

              <div className="mt-5 space-y-2 text-sm text-slate-300">
                <p>✓ Java experience matches</p>
                <p>✓ SQL skills match</p>
                <p>✓ Experience level matches</p>
              </div>
            </div>

            {/* Company */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                  <Building2 size={20} className="text-slate-700" />
                </div>

                <div>
                  <p className="font-semibold text-slate-950">{job.company}</p>
                  <p className="text-sm text-slate-500">Technology company</p>
                </div>
              </div>

              <button className="mt-5 w-full rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                View company profile
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function ContentSection({ title, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
      <h2 className="text-lg font-bold text-slate-950">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function ListItem({ children }) {
  return (
    <li className="flex gap-3 text-sm leading-6 text-slate-600">
      <CheckCircle2 size={18} className="mt-1 shrink-0 text-blue-600" />
      <span>{children}</span>
    </li>
  );
}

export default JobDetails;
