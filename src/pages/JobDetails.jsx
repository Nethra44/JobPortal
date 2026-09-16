import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  Clock3,
  FileText,
  MapPin,
  Send,
  Share2,
  Sparkles,
  Upload,
  Users,
  X,
} from "lucide-react";

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
    match: 82,
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
    match: 76,
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
    match: 79,
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
    match: 74,
  },
};

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [saved, setSaved] = useState(false);
  const [showApply, setShowApply] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedResume, setSelectedResume] = useState("Resume.pdf");
  const [coverMessage, setCoverMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  const job = jobs[id] || jobs[1];

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareMessage("Job link copied");
    } catch {
      setShareMessage("Link ready to share");
    }

    setTimeout(() => setShareMessage(""), 2000);
  };

  const openApply = () => {
    setStep(1);
    setShowApply(true);
  };

  const closeApply = () => {
    if (!submitting) {
      setShowApply(false);
      setStep(1);
    }
  };

  const handleSubmit = () => {
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setApplicationSubmitted(true);
    }, 1600);
  };

  const closeSuccess = () => {
    setShowApply(false);
    setApplicationSubmitted(false);
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
              <BriefcaseBusiness size={19} />
            </div>

            <span className="text-xl font-bold tracking-tight text-slate-950">
              Job<span className="text-blue-600">Connect</span>
            </span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/jobs")}
              className="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 sm:block"
            >
              Find Jobs
            </button>

            <button
              onClick={() => navigate("/seeker/dashboard")}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* ================= PAGE ================= */}

      <main className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-9 lg:px-8">
        {/* Back */}

        <button
          onClick={() => navigate("/jobs")}
          className="group mb-6 flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-950"
        >
          <ArrowLeft
            size={17}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to jobs
        </button>

        {/* ================= JOB HEADER ================= */}

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-md">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex gap-4 sm:gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-xl font-bold text-white shadow-lg shadow-slate-200">
                  {job.company.charAt(0)}
                </div>

                <div>
                  <p className="mb-1 text-sm font-semibold text-blue-600">
                    {job.company}
                  </p>

                  <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
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

              <div className="relative flex gap-2">
                <button
                  onClick={() => setSaved(!saved)}
                  aria-label="Save job"
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border transition duration-300 hover:-translate-y-0.5 ${
                    saved
                      ? "border-blue-200 bg-blue-50 text-blue-600"
                      : "border-slate-200 text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  <Bookmark size={19} fill={saved ? "currentColor" : "none"} />
                </button>

                <button
                  onClick={handleShare}
                  aria-label="Share job"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  <Share2 size={18} />
                </button>

                {shareMessage && (
                  <div className="absolute right-0 top-14 whitespace-nowrap rounded-lg bg-slate-950 px-3 py-2 text-xs font-medium text-white shadow-xl">
                    {shareMessage}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
              <InfoPill>{job.mode}</InfoPill>

              <InfoPill>{job.experience}</InfoPill>

              <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
                {job.salary}
              </span>

              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600">
                Posted {job.posted}
              </span>
            </div>
          </div>
        </section>

        {/* ================= CONTENT ================= */}

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* LEFT */}

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
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ContentSection>
          </div>

          {/* RIGHT */}

          <aside className="space-y-6">
            {/* Apply Card */}

            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Estimated compensation
              </p>

              <p className="mt-1 text-2xl font-bold text-slate-950">
                {job.salary}
              </p>

              <button
                onClick={openApply}
                className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/30"
              >
                Apply Now
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <div className="mt-4 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2.5 text-xs text-slate-500">
                <ShieldIcon />
                Your application is securely handled.
              </div>
            </div>

            {/* Match */}

            <div className="overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <Sparkles size={17} />
                </div>

                <div>
                  <p className="font-semibold">JobConnect Match</p>
                  <p className="text-xs text-slate-400">
                    Based on your profile
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-4xl font-bold">{job.match}%</p>

                  <p className="mt-1 text-sm text-slate-400">
                    Profile alignment
                  </p>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-blue-500">
                  <span className="text-xs font-bold">{job.match}</span>
                </div>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all duration-1000"
                  style={{ width: `${job.match}%` }}
                />
              </div>

              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <MatchItem>Java skills match</MatchItem>
                <MatchItem>SQL knowledge matches</MatchItem>
                <MatchItem>Experience level matches</MatchItem>
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

      {/* ================= APPLY MODAL ================= */}

      {showApply && (
        <ApplicationModal
          job={job}
          step={step}
          setStep={setStep}
          selectedResume={selectedResume}
          setSelectedResume={setSelectedResume}
          coverMessage={coverMessage}
          setCoverMessage={setCoverMessage}
          submitting={submitting}
          applicationSubmitted={applicationSubmitted}
          onClose={closeApply}
          onSubmit={handleSubmit}
          onSuccess={closeSuccess}
        />
      )}
    </div>
  );
}

/* ================= APPLICATION MODAL ================= */

function ApplicationModal({
  job,
  step,
  setStep,
  selectedResume,
  setSelectedResume,
  coverMessage,
  setCoverMessage,
  submitting,
  applicationSubmitted,
  onClose,
  onSubmit,
  onSuccess,
}) {
  if (applicationSubmitted) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
        <div className="w-full max-w-md animate-[modalEnter_0.25s_ease-out] rounded-3xl bg-white p-8 text-center shadow-2xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
            <CheckCircle2 size={34} className="text-emerald-600" />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-slate-950">
            Application submitted
          </h2>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
            Your application for{" "}
            <span className="font-semibold text-slate-700">{job.role}</span> at{" "}
            <span className="font-semibold text-slate-700">{job.company}</span>{" "}
            has been recorded.
          </p>

          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-left">
            <div className="flex items-center gap-3">
              <FileText size={19} className="text-blue-600" />

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Application status
                </p>

                <p className="text-xs text-emerald-600">
                  Submitted successfully
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onSuccess}
            className="mt-7 w-full rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto animate-[modalEnter_0.25s_ease-out] rounded-3xl bg-white shadow-2xl">
        {/* Modal header */}

        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-5 sm:px-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Apply for position
            </p>

            <h2 className="mt-1 text-lg font-bold text-slate-950">
              {job.role}
            </h2>

            <p className="text-sm text-slate-500">{job.company}</p>
          </div>

          <button
            onClick={onClose}
            disabled={submitting}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={19} />
          </button>
        </div>

        {/* Progress */}

        <div className="border-b border-slate-100 px-6 py-5 sm:px-7">
          <div className="flex items-center">
            <StepIndicator
              number="01"
              label="Resume"
              active={step >= 1}
              current={step === 1}
            />

            <div className="mx-3 h-px flex-1 bg-slate-200" />

            <StepIndicator
              number="02"
              label="Message"
              active={step >= 2}
              current={step === 2}
            />

            <div className="mx-3 h-px flex-1 bg-slate-200" />

            <StepIndicator
              number="03"
              label="Review"
              active={step >= 3}
              current={step === 3}
            />
          </div>
        </div>

        {/* Content */}

        <div className="px-6 py-7 sm:px-7">
          {/* STEP 1 */}

          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold text-slate-950">
                Choose your resume
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Select the resume you want to send with this application.
              </p>

              <button
                onClick={() => setSelectedResume("Resume.pdf")}
                className={`mt-6 flex w-full items-center justify-between rounded-2xl border p-4 text-left transition ${
                  selectedResume === "Resume.pdf"
                    ? "border-blue-300 bg-blue-50/50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                    <FileText size={20} className="text-red-500" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Resume.pdf
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      PDF · Updated recently
                    </p>
                  </div>
                </div>

                {selectedResume === "Resume.pdf" && (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Check size={14} />
                  </div>
                )}
              </button>

              <button
                type="button"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 px-4 py-4 text-sm font-semibold text-slate-600 transition hover:border-blue-300 hover:bg-blue-50/40 hover:text-blue-600"
              >
                <Upload size={17} />
                Upload another resume
              </button>

              <button
                onClick={() => setStep(2)}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Continue
                <ArrowRight size={17} />
              </button>
            </div>
          )}

          {/* STEP 2 */}

          {step === 2 && (
            <div>
              <h3 className="text-xl font-bold text-slate-950">
                Add a message
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Introduce yourself briefly to the recruiter. This step is
                optional.
              </p>

              <div className="mt-6">
                <textarea
                  value={coverMessage}
                  onChange={(e) =>
                    setCoverMessage(e.target.value.slice(0, 500))
                  }
                  rows={7}
                  placeholder="Hi, I'm interested in this opportunity because..."
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                />

                <div className="mt-2 flex justify-between text-xs text-slate-400">
                  <span>Keep it clear and professional.</span>
                  <span>{coverMessage.length}/500</span>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-blue-50 p-4">
                <div className="flex gap-3">
                  <Sparkles
                    size={18}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />

                  <div>
                    <p className="text-sm font-semibold text-blue-900">
                      Quick tip
                    </p>

                    <p className="mt-1 text-xs leading-5 text-blue-700">
                      Mention one relevant skill and why this particular role
                      interests you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Back
                </button>

                <button
                  onClick={() => setStep(3)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Review
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}

          {step === 3 && (
            <div>
              <h3 className="text-xl font-bold text-slate-950">
                Review your application
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Check your details before submitting.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                <ReviewRow
                  label="Position"
                  value={`${job.role} · ${job.company}`}
                />

                <ReviewRow label="Location" value={job.location} />

                <ReviewRow label="Resume" value={selectedResume} />

                <ReviewRow
                  label="Message"
                  value={
                    coverMessage.trim() ? coverMessage : "No additional message"
                  }
                  last
                />
              </div>

              <div className="mt-5 flex gap-3 rounded-xl bg-slate-50 p-4">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />

                <p className="text-xs leading-5 text-slate-500">
                  By submitting, your profile and selected resume will be shared
                  with the recruiter for this position.
                </p>
              </div>

              <div className="mt-7 flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  disabled={submitting}
                  className="flex-1 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Back
                </button>

                <button
                  onClick={onSubmit}
                  disabled={submitting}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Submit Application
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>
        {`
          @keyframes modalEnter {
            from {
              opacity: 0;
              transform: translateY(12px) scale(0.98);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

function StepIndicator({ number, label, active, current }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition ${
          current
            ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
            : active
              ? "bg-blue-50 text-blue-600"
              : "bg-slate-100 text-slate-400"
        }`}
      >
        {number}
      </div>

      <span
        className={`hidden text-xs font-semibold sm:block ${
          active ? "text-slate-700" : "text-slate-400"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function ReviewRow({ label, value, last = false }) {
  return (
    <div
      className={`flex flex-col gap-1 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6 ${
        !last ? "border-b border-slate-100" : ""
      }`}
    >
      <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </span>

      <span className="text-sm leading-6 text-slate-700 sm:max-w-[70%] sm:text-right">
        {value}
      </span>
    </div>
  );
}

function ContentSection({ title, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-md sm:p-7">
      <h2 className="text-lg font-bold text-slate-950">{title}</h2>

      <div className="mt-5">{children}</div>
    </section>
  );
}

function ListItem({ children }) {
  return (
    <li className="group flex gap-3 text-sm leading-6 text-slate-600">
      <CheckCircle2
        size={18}
        className="mt-1 shrink-0 text-blue-600 transition-transform duration-300 group-hover:scale-110"
      />

      <span>{children}</span>
    </li>
  );
}

function InfoPill({ children }) {
  return (
    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600">
      {children}
    </span>
  );
}

function MatchItem({ children }) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle2 size={16} className="text-emerald-400" />
      <span>{children}</span>
    </div>
  );
}

function ShieldIcon() {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100">
      <Check size={12} className="text-emerald-600" />
    </div>
  );
}

export default JobDetails;
