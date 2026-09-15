import {
  ArrowUpRight,
  Bell,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  Plus,
  Search,
  Settings,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecruiterDashboard() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const jobs = [
    {
      title: "Java Backend Developer",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      applicants: 42,
      shortlisted: 8,
      status: "Active",
    },
    {
      title: "Frontend Developer",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      applicants: 31,
      shortlisted: 5,
      status: "Active",
    },
    {
      title: "Software Engineer Intern",
      location: "Remote",
      type: "Internship",
      applicants: 67,
      shortlisted: 12,
      status: "Active",
    },
  ];

  const applicants = [
    {
      name: "Arun Kumar",
      role: "Java Backend Developer",
      score: 92,
      status: "Shortlisted",
      initials: "AK",
    },
    {
      name: "Priya Sharma",
      role: "Frontend Developer",
      score: 88,
      status: "Review",
      initials: "PS",
    },
    {
      name: "Rahul Raj",
      role: "Software Engineer Intern",
      score: 84,
      status: "Shortlisted",
      initials: "RR",
    },
    {
      name: "Kavin S",
      role: "Java Backend Developer",
      score: 79,
      status: "Review",
      initials: "KS",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col bg-[#071426] text-white transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
              <BriefcaseBusiness size={20} />
            </div>

            <div className="text-left">
              <p className="text-lg font-bold tracking-tight">JobConnect</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Recruiter
              </p>
            </div>
          </button>

          <button className="lg:hidden" onClick={() => setMobileOpen(false)}>
            <X size={21} />
          </button>
        </div>

        <div className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
            Workspace
          </p>

          <nav className="space-y-1">
            <SidebarItem
              icon={<LayoutDashboard size={18} />}
              label="Overview"
              active
            />

            <SidebarItem
              icon={<BriefcaseBusiness size={18} />}
              label="Manage Jobs"
            />

            <SidebarItem icon={<Plus size={18} />} label="Post a Job" />

            <SidebarItem icon={<Users size={18} />} label="Applicants" />

            <SidebarItem icon={<FileText size={18} />} label="Shortlisted" />
          </nav>

          <p className="mb-3 mt-8 px-3 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
            Company
          </p>

          <nav className="space-y-1">
            <SidebarItem
              icon={<Building2 size={18} />}
              label="Company Profile"
            />

            <SidebarItem icon={<Settings size={18} />} label="Settings" />
          </nav>
        </div>

        <div className="border-t border-white/10 p-4">
          <div className="mb-4 flex items-center gap-3 rounded-xl bg-white/5 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold">
              JD
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">John Recruiter</p>
              <p className="truncate text-xs text-slate-400">
                Talent Acquisition
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <LogOut size={18} />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="lg:pl-72">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur md:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
            >
              <Menu size={21} />
            </button>

            <div>
              <p className="text-sm text-slate-500">Recruiter workspace</p>
              <h1 className="text-lg font-bold text-slate-900">
                Recruitment Overview
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-50">
              <Bell size={19} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-600" />
            </button>

            <div className="hidden h-9 w-px bg-slate-200 sm:block" />

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
              JD
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1500px] p-5 md:p-8">
          {/* Welcome */}
          <section className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-sm font-medium text-blue-600">
                Good evening, John
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Find the right people.
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Manage your hiring pipeline, review applicants and keep your
                recruitment process moving.
              </p>
            </div>

            <button className="flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
              <Plus size={18} />
              Post a new job
            </button>
          </section>

          {/* Stats */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <DashboardStat
              icon={<BriefcaseBusiness size={20} />}
              label="Active Jobs"
              value="8"
              change="+2 this month"
            />

            <DashboardStat
              icon={<Users size={20} />}
              label="Total Applicants"
              value="184"
              change="+24 this week"
            />

            <DashboardStat
              icon={<FileText size={20} />}
              label="Shortlisted"
              value="32"
              change="+8 this week"
            />

            <DashboardStat
              icon={<Building2 size={20} />}
              label="Interviews"
              value="14"
              change="+4 this week"
            />
          </section>

          {/* Main Grid */}
          <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
            {/* Jobs */}
            <div className="rounded-2xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between border-b border-slate-100 p-5">
                <div>
                  <h3 className="font-bold text-slate-900">Active jobs</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Your currently published positions
                  </p>
                </div>

                <button className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
                  View all
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="divide-y divide-slate-100">
                {jobs.map((job) => (
                  <JobRow key={job.title} job={job} />
                ))}
              </div>
            </div>

            {/* Recruitment Pipeline */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-bold">Hiring pipeline</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Candidate distribution
                  </p>
                </div>

                <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-700">
                  <ArrowUpRight size={18} />
                </button>
              </div>

              <div className="space-y-5">
                <PipelineItem
                  label="New Applicants"
                  value="184"
                  percentage="100%"
                />

                <PipelineItem
                  label="Under Review"
                  value="96"
                  percentage="52%"
                />

                <PipelineItem label="Shortlisted" value="32" percentage="17%" />

                <PipelineItem label="Interview" value="14" percentage="8%" />

                <PipelineItem label="Offer" value="5" percentage="3%" />
              </div>
            </div>
          </section>

          {/* Applicants */}
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white">
            <div className="flex flex-col justify-between gap-4 border-b border-slate-100 p-5 md:flex-row md:items-center">
              <div>
                <h3 className="font-bold text-slate-900">Recent applicants</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Candidates who recently applied to your jobs
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 sm:flex">
                  <Search size={15} className="text-slate-400" />
                  <input
                    placeholder="Search applicants"
                    className="w-40 bg-transparent text-xs outline-none"
                  />
                </div>

                <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50">
                  View all
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-100 text-left text-xs text-slate-400">
                    <th className="px-5 py-4 font-medium">Candidate</th>
                    <th className="px-5 py-4 font-medium">Applied for</th>
                    <th className="px-5 py-4 font-medium">Match</th>
                    <th className="px-5 py-4 font-medium">Status</th>
                    <th className="px-5 py-4 font-medium"></th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {applicants.map((applicant) => (
                    <ApplicantRow key={applicant.name} applicant={applicant} />
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Bottom Cards */}
          <section className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-[#071426] p-6 text-white">
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                    Recruitment insight
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Your strongest candidate pool
                  </h3>
                </div>

                <div className="rounded-xl bg-white/10 p-3">
                  <Users size={20} />
                </div>
              </div>

              <p className="max-w-lg text-sm leading-6 text-slate-300">
                Most applicants for your Java roles currently match the core
                technical requirements. Review shortlisted candidates first to
                speed up your hiring process.
              </p>

              <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-300">
                Review candidates
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Company profile
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    Complete your company profile
                  </h3>
                </div>

                <div className="rounded-xl bg-slate-100 p-3">
                  <Building2 size={20} />
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-xs">
                  <span className="font-medium text-slate-600">
                    Profile completion
                  </span>
                  <span className="font-bold text-blue-600">72%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[72%] rounded-full bg-blue-600" />
                </div>
              </div>

              <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
                Complete profile
                <ChevronRight size={16} />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

/* ---------------- Components ---------------- */

function SidebarItem({ icon, label, active = false }) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
        active
          ? "bg-blue-600 text-white"
          : "text-slate-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function DashboardStat({ icon, label, value, change }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-slate-100 p-2.5 text-slate-700">
          {icon}
        </div>

        <ArrowUpRight size={17} className="text-slate-300" />
      </div>

      <p className="mt-5 text-sm text-slate-500">{label}</p>

      <div className="mt-1 flex items-end justify-between">
        <p className="text-2xl font-bold tracking-tight">{value}</p>

        <span className="text-xs font-medium text-emerald-600">{change}</span>
      </div>
    </div>
  );
}

function JobRow({ job }) {
  return (
    <div className="flex flex-col gap-4 p-5 transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
          <BriefcaseBusiness size={19} />
        </div>

        <div>
          <h4 className="text-sm font-bold text-slate-900">{job.title}</h4>

          <p className="mt-1 text-xs text-slate-500">
            {job.location} · {job.type}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6 text-xs">
        <div>
          <p className="font-bold text-slate-900">{job.applicants}</p>
          <p className="mt-1 text-slate-400">Applicants</p>
        </div>

        <div>
          <p className="font-bold text-slate-900">{job.shortlisted}</p>
          <p className="mt-1 text-slate-400">Shortlisted</p>
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1.5 font-semibold text-emerald-600">
          {job.status}
        </span>
      </div>
    </div>
  );
}

function PipelineItem({ label, value, percentage }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">{label}</span>

        <span className="text-xs font-semibold text-slate-500">{value}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600"
          style={{
            width: percentage,
          }}
        />
      </div>
    </div>
  );
}

function ApplicantRow({ applicant }) {
  return (
    <tr className="transition hover:bg-slate-50">
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
            {applicant.initials}
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              {applicant.name}
            </p>

            <p className="mt-1 text-xs text-slate-400">Recently applied</p>
          </div>
        </div>
      </td>

      <td className="px-5 py-4 text-sm text-slate-600">{applicant.role}</td>

      <td className="px-5 py-4">
        <span className="font-bold text-slate-900">{applicant.score}%</span>
      </td>

      <td className="px-5 py-4">
        <StatusBadge status={applicant.status} />
      </td>

      <td className="px-5 py-4 text-right">
        <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
          <ChevronRight size={17} />
        </button>
      </td>
    </tr>
  );
}

function StatusBadge({ status }) {
  const styles =
    status === "Shortlisted"
      ? "bg-emerald-50 text-emerald-600"
      : "bg-amber-50 text-amber-600";

  return (
    <span
      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${styles}`}
    >
      {status}
    </span>
  );
}

export default RecruiterDashboard;
