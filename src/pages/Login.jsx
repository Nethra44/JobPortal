import { BriefcaseBusiness, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend navigation.
    // Real authentication will be connected later
    // using Spring Boot + JWT.
    navigate("/seeker/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* =========================
            LEFT BRANDING
        ========================== */}
        <div className="hidden bg-slate-950 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-950">
              <BriefcaseBusiness size={19} />
            </div>

            <span className="text-xl font-bold">JobConnect</span>
          </div>

          {/* Branding Content */}
          <div className="max-w-lg">
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Welcome back
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight">
              Your next opportunity
              <br />
              is closer than you think.
            </h1>

            <p className="mt-6 leading-7 text-slate-400">
              Sign in to manage your applications, discover new opportunities,
              and keep your career journey organized.
            </p>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-600">© 2026 JobConnect</p>
        </div>

        {/* =========================
            LOGIN SECTION
        ========================== */}
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
              <h2 className="text-3xl font-bold tracking-tight">Sign in</h2>

              <p className="mt-2 text-sm text-slate-500">
                Welcome back. Enter your details to continue.
              </p>
            </div>

            {/* =========================
                LOGIN FORM
            ========================== */}
            <form onSubmit={handleSubmit} className="space-y-5">
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
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-semibold">Password</label>

                  <button
                    type="button"
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 pr-11 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                  {/* Show / Hide Password */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300"
                />

                <span className="text-sm text-slate-600">Remember me</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Sign in
                <ArrowRight size={17} />
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />

              <span className="text-xs text-slate-400">OR</span>

              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Register Link */}
            <p className="text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Create one
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
