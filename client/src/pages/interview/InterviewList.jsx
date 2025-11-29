import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { Plus } from "lucide-react";

export default function InterviewList() {
  const navigate = useNavigate();
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("interviews") || "[]");
    setInterviews(stored);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Interviews</h1>

          <button
            onClick={() => navigate("/interviews/add")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            <Plus size={18} /> Add Interview
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {interviews.length === 0 ? (
            <p className="text-gray-500">No interviews added yet.</p>
          ) : (
            interviews.map((interview) => (
              <div
                key={interview.id}
                onClick={() => navigate(`/interviews/${interview.id}`)}  // 👈 navigate on click
                className="cursor-pointer bg-white p-6 rounded-xl border shadow hover:shadow-xl transition hover:scale-[1.02]"
              >
                <h3 className="font-semibold text-lg mb-1 capitalize">{interview.role}</h3>
                <p className="text-gray-500">{interview.company}</p>
                <p className="text-sm text-gray-400 mt-1">{interview.date}</p>

                <span className="mt-3 inline-block text-xs bg-gray-200 px-3 py-1 rounded-lg">
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
