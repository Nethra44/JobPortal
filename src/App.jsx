import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import SeekerDashboard from "./pages/seeker/Dashboard";
import RecruiterDashboard from "./pages/recruiter/Dashboard";
import SavedJobs from "./pages/SavedJobs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />

        {/* Job Seeker Dashboard */}
        <Route path="/seeker/dashboard" element={<SeekerDashboard />} />
        <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
        <Route path="/saved-jobs" element={<SavedJobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
