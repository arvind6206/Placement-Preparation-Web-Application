// src/components/Sidebar.jsx
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, FileCheck, Briefcase, LogOut, FileText } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Sidebar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navItemClass = (path) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer ${
      location.pathname === path
        ? "bg-blue-50 text-blue-600 font-semibold"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <div className="w-64 bg-white shadow-lg p-6 flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-blue-600">PrepMate 🚀</h2>

      <ul className="flex flex-col gap-2 text-sm">
        <Link to="/dashboard" className={navItemClass("/dashboard")}>
          <LayoutDashboard size={18} /> Dashboard
        </Link>

        <Link to="/tests" className={navItemClass("/tests")}>
          <FileCheck size={18} /> Practice / Tests
        </Link>

        <Link to="/resume" className={navItemClass("/resume")}>
          <FileText size={18} /> Resume
        </Link>

        <Link to="/interviews" className={navItemClass("/interviews")}>
          <Briefcase size={18} /> Interviews
        </Link>
      </ul>

      <button
        onClick={handleLogout}
        className="mt-auto flex items-center gap-2 text-red-500 hover:bg-red-50 px-3 py-2 rounded-lg text-sm"
      >
        <LogOut size={18} /> Logout
      </button>
    </div>
  );
}
