import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Eye,
  EyeOff,
  UserRound,
  Building2,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("seeker");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === "recruiter") {
      navigate("/recruiter/dashboard");
      return;
    }

    navigate("/seeker/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Branding */}
        <div className="hidden bg-slate-950 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-950">
              <BriefcaseBusiness size={19} />
            </div>

            <span className="text-xl font-bold">JobConnect</span>
          </div>

          <div className="max-w-lg">
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Start your journey
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight">
              Build your profile.
              <br />
              Find your opportunity.
            </h1>

            <p className="mt-6 leading-7 text-slate-400">
              Create your JobConnect account and discover opportunities matched
              to your skills, experience, and career goals.
            </p>

            <div className="mt-8 space-y-4">
              <Benefit text="Discover relevant job opportunities" />

              <Benefit text="Track your applications in one place" />

              <Benefit text="Build a professional career profile" />
            </div>
          </div>

          <p className="text-sm text-slate-600">© 2026 JobConnect</p>
        </div>

        {/* Register */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="mb-10 flex items-center gap-2.5 lg:hidden">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-white">
                <BriefcaseBusiness size={19} />
              </div>

              <span className="text-xl font-bold">JobConnect</span>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Join JobConnect and take the next step in your career.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Full name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    required
                    minLength={6}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 pr-11 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Confirm password
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    required
                    minLength={6}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 pr-11 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="mb-3 block text-sm font-semibold">
                  I am joining as
                </label>

                <div className="grid grid-cols-2 gap-3">
                  {/* Job Seeker */}
                  <RoleCard
                    active={role === "seeker"}
                    onClick={() => setRole("seeker")}
                    icon={<UserRound size={20} />}
                    title="Job Seeker"
                    description="Find jobs"
                  />

                  {/* Recruiter */}
                  <RoleCard
                    active={role === "recruiter"}
                    onClick={() => setRole("recruiter")}
                    icon={<Building2 size={20} />}
                    title="Recruiter"
                    description="Hire talent"
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-slate-300"
                />

                <p className="text-xs leading-5 text-slate-500">
                  I agree to the JobConnect terms of service and privacy policy.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Create account
                <ArrowRight size={17} />
              </button>
            </form>

            {/* Login */}
            <p className="mt-8 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================
   BENEFIT
========================= */

function Benefit({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
        <Check size={13} />
      </div>

      <span className="text-sm text-slate-400">{text}</span>
    </div>
  );
}

/* =========================
   ROLE CARD
========================= */

function RoleCard({ active, onClick, icon, title, description }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex flex-col items-start rounded-lg border p-4 text-left transition ${
        active
          ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
          : "border-slate-300 bg-white hover:border-slate-400"
      }`}
    >
      <div
        className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${
          active ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
        }`}
      >
        {icon}
      </div>

      <span className="text-sm font-semibold text-slate-900">{title}</span>

      <span className="mt-1 text-xs text-slate-500">{description}</span>

      {active && (
        <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
          <Check size={12} />
        </div>
      )}
    </button>
  );
}

export default Register;
