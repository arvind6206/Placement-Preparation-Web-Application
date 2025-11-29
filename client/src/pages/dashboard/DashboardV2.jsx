import { useEffect, useState } from "react";
import { Bell, Search, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function DashboardV2() {
  const [openMenu, setOpenMenu] = useState(false);
  const [interviews, setInterviews] = useState([]);
  const navigate = useNavigate();

  // Fetch user (from login)
  const user = JSON.parse(localStorage.getItem("user")) || { name: "User" };

  // Extract initials
  const initials = user.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  // Load saved interviews
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("interviews") || "[]");
    setInterviews(stored);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      <Sidebar />

      {/* MAIN */}
      <main className="flex-1 px-10 py-6">

        {/* TOP BAR */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">PrepMate</h1>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search companies, roles..."
                className="pl-10 pr-4 py-2 w-96 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 text-gray-500" />
            </div>

            <Bell className="cursor-pointer w-6 h-6 text-gray-600 hover:text-black" />

            {/* Profile */}
            <div className="relative">
              <div
                onClick={() => setOpenMenu(!openMenu)}
                className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold cursor-pointer hover:opacity-90 transition"
              >
                {initials}
              </div>

              {openMenu && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg border rounded-lg w-44 text-sm overflow-hidden">
                  <button
                    onClick={() => {
                      setOpenMenu(false);
                      navigate("/profile");
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </button>

                  <button
                    onClick={() => {
                      setOpenMenu(false);
                      navigate("/settings");
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Settings
                  </button>

                  <button
                    onClick={() => {
                      localStorage.removeItem("user");
                      navigate("/");
                    }}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[ 
            { label: "Recent Interviews", value: interviews.length || 0 }, 
            { label: "Upcoming Mock", value: "Dec 15, 2023" }, 
            { label: "Latest Score", value: "89%" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 border border-gray-200"
            >
              <p className="text-gray-500 text-sm">{item.label}</p>
              <p className="text-3xl font-bold mt-2">{item.value}</p>
              <button className="text-sm text-blue-600 hover:underline mt-3">
                View
              </button>
            </div>
          ))}
        </div>

        {/* INTERVIEW LIST */}
        <div className="flex justify-between items-center mt-10">
          <h2 className="text-xl font-semibold">My Interviews</h2>
          <button
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => navigate("/interviews/add")}
          >
            <Plus size={18} /> Add Interview
          </button>
        </div>

        {/* Interview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {interviews.length === 0 ? (
            <p className="text-gray-500">No interviews added yet.</p>
          ) : (
            interviews.map((interview) => (
              <div
                key={interview.id}
                onClick={() => navigate(`/interviews/${interview.id}`)}
                className="cursor-pointer bg-white border rounded-xl p-5 shadow hover:shadow-xl hover:scale-[1.02] transition"
              >
                <div className="h-24 bg-gray-200 rounded-lg mb-4"></div>

                <h3 className="font-semibold text-lg capitalize">
                  {interview.role}
                </h3>

                <p className="text-sm text-gray-500">
                  {interview.company} • {interview.date}
                </p>

                <span className="mt-3 inline-block bg-gray-200 px-3 py-1 rounded-full text-xs">
                  {interview.type}
                </span>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
