import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoute from "../components/ProtectRoute";
import TestList from "../pages/test/TestList";
import TestStart from "../pages/test/TestStart"; // <-- added
import ResumeUpload from "../pages/resume/ResumeUpload";
import InterviewList from "../pages/interview/InterviewList";
import InterviewDetails from "../pages/interview/InterviewDetails";
import DashboardV2 from "../pages/dashboard/DashboardV2";
import ChooseChallenge from "../pages/challenge/chooseChallenge";
import AptitudePractice from "../pages/practice/AptitudePractice";
import CodingPractice from "../pages/practice/CodingPractice";
import HRPractice from "../pages/practice/HRPractice";
import ResumeBuilder from "../pages/resume/ResumeBuilder";
import AddInterview from "../pages/interview/AddInterview";
import ProfilePage from "../pages/user/ProfilePage";
import SettingsPage from "../pages/user/SettingPage";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <SettingsPage/>
          </ProtectedRoute>
        }
      />

      <Route
        path="/challenge"
        element={
          <ProtectedRoute>
            <ChooseChallenge />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardV2 />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tests"
        element={
          <ProtectedRoute>
            <TestList />
          </ProtectedRoute>
        }
      />

      {/* ⭐ The Missing Route */}
      <Route
        path="/tests/start"
        element={
          <ProtectedRoute>
            <TestStart />
          </ProtectedRoute>
        }
      />

      <Route path="/practice/aptitude" element={<AptitudePractice />} />
      <Route path="/practice/coding" element={<CodingPractice />} />
      <Route path="/practice/hr" element={<HRPractice />} />

      <Route
        path="/resume"
        element={
          <ProtectedRoute>
            <ResumeUpload />
          </ProtectedRoute>
        }
      />

      <Route
        path="/resume/create"
        element={
          <ProtectedRoute>
            <ResumeBuilder />
          </ProtectedRoute>
        }
      />

      <Route
        path="/interviews"
        element={
          <ProtectedRoute>
            <InterviewList />
          </ProtectedRoute>
        }
      />

      <Route
        path="/interviews/add"
        element={
          <ProtectedRoute>
            <AddInterview />
          </ProtectedRoute>
        }
      />
      <Route
        path="/interviews/:id"
        element={
          <ProtectedRoute>
            <InterviewDetails />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
