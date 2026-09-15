import {
  ArrowLeft,
  Bookmark,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  MapPin,
  Send,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function JobDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            onClick={() => navigate("/jobs")}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950"
          >
            <ArrowLeft size={18} />
            Back to jobs
          </button>

          <div className="flex items-center gap-2 font-bold text-slate-950">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-white">
              <BriefcaseBusiness size={18} />
            </div>
            JobConnect
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Job Header */}
        <section className="rounded-2xl border border-slate-200 bg-white p-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl font-bold text-slate-700">
                Z
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-500">Zoho</p>

                <h1 className="mt-1 text-2xl font-bold text-slate-950">
                  Software Engineer
                </h1>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    Chennai, Tamil Nadu
                  </span>

                  <span className="flex items-center gap-2">
                    <BriefcaseBusiness size={16} />
                    Full-time
                  </span>

                  <span>0–2 years</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="rounded-lg border border-slate-200 p-3 text-slate-600 hover:bg-slate-50">
                <Bookmark size={20} />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("application")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 rounded-lg bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                <Send size={17} />
                Apply now
              </button>
            </div>
          </div>

          <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-3">
            <div>
              <p className="text-xs text-slate-400">Salary</p>
              <p className="mt-1 font-semibold text-slate-900">₹6–10 LPA</p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Experience</p>
              <p className="mt-1 font-semibold text-slate-900">0–2 years</p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Posted</p>
              <p className="mt-1 flex items-center gap-2 font-semibold text-slate-900">
                <Clock3 size={15} />2 days ago
              </p>
            </div>
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_330px]">
          {/* Description */}
          <section className="rounded-2xl border border-slate-200 bg-white p-7">
            <h2 className="text-lg font-bold text-slate-950">
              Job description
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              We are looking for a motivated Software Engineer to join our
              engineering team. You will work on scalable applications, develop
              backend services and collaborate with engineers to build reliable
              software.
            </p>

            <h3 className="mt-8 font-bold text-slate-950">Responsibilities</h3>

            <ul className="mt-4 space-y-3">
              {[
                "Develop and maintain scalable backend applications.",
                "Build and integrate REST APIs.",
                "Write clean, maintainable and testable code.",
                "Work with databases and optimize queries.",
                "Collaborate with frontend and product teams.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-slate-600"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-slate-700"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-bold text-slate-950">Required skills</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Java", "Spring Boot", "REST API", "SQL", "Git"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </section>

          {/* Apply Card */}
          <aside
            id="application"
            className="h-fit rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h2 className="text-lg font-bold text-slate-950">
              Apply for this job
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Submit your application and let the recruiter know you're
              interested.
            </p>

            <label className="mt-6 block text-sm font-semibold text-slate-700">
              Full name
            </label>

            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
            />

            <label className="mt-4 block text-sm font-semibold text-slate-700">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
            />

            <label className="mt-4 block text-sm font-semibold text-slate-700">
              Resume
            </label>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="mt-2 w-full rounded-lg border border-slate-200 p-2 text-sm"
            />

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 py-3 font-semibold text-white hover:bg-slate-800">
              <Send size={17} />
              Submit application
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default JobDetails;
