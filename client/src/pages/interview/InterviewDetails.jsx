import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { ChevronLeft } from "lucide-react";

const topicsList = [
  { title: "Data Structures & Algorithms", tag: "Core" },
  { title: "System Design", tag: "Core" },
  { title: "Behavioral Questions", tag: "Important" },
  { title: "Object-Oriented Design", tag: "Core" },
];

export default function InterviewDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [interview, setInterview] = useState(null);
  const [activeTab, setActiveTab] = useState("topics");

  // Load interview details safely
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("interviews") || "[]");
    const found = stored.find((item) => String(item.id) === String(id));
    setInterview(found || false);
  }, [id]);

  // If not found
  if (interview === false) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 p-10">
          <h2 className="text-xl font-semibold">❌ Interview Not Found</h2>
          <button
            onClick={() => navigate("/interviews")}
            className="mt-4 px-5 py-2 text-white bg-blue-600 rounded-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!interview) return <div className="p-10">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-10">
        {/* BACK BUTTON */}
        <button
          className="flex items-center gap-2 text-gray-600 hover:text-black mb-6"
          onClick={() => navigate("/interviews")}
        >
          <ChevronLeft size={20} /> Back to Interviews
        </button>

        {/* HEADER CARD */}
        <div className="bg-white p-6 rounded-xl shadow border mb-10">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-gray-500 text-sm">Logo</span>
            </div>

            <div>
              <h2 className="text-3xl font-bold">{interview.company} — {interview.role}</h2>
              <p className="text-gray-500">{interview.type} • {interview.salary || "No package"}</p>
              <p className="text-gray-400 text-sm mt-1">Interview Date: {interview.date}</p>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition">
              Start Full Mock
            </button>
            <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              Practice Rounds
            </button>
            <button className="px-5 py-2 rounded-lg border hover:bg-gray-100 transition">
              Add Note
            </button>
          </div>
        </div>

        {/* TABS */}
        <div className="flex gap-6 border-b text-gray-600 mb-6">
          <button
            className={`pb-3 ${
              activeTab === "topics" ? "border-b-2 border-blue-600 text-black font-medium" : ""
            }`}
            onClick={() => setActiveTab("topics")}
          >
            Topics Required
          </button>

          <button
            className={`pb-3 ${
              activeTab === "questions" ? "border-b-2 border-blue-600 text-black font-medium" : ""
            }`}
            onClick={() => setActiveTab("questions")}
          >
            Past Questions
          </button>

          <button
            className={`pb-3 ${
              activeTab === "tips" ? "border-b-2 border-blue-600 text-black font-medium" : ""
            }`}
            onClick={() => setActiveTab("tips")}
          >
            Candidate Tips
          </button>
        </div>

        {/* TAB CONTENT */}
        {activeTab === "topics" && (
          <div className="space-y-4 max-w-3xl">
            {topicsList.map((item, index) => (
              <div key={index} className="bg-white border p-4 rounded-xl shadow hover:shadow-lg transition flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="text-gray-800">{item.title}</span>
                </div>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-200">{item.tag}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "questions" && (
          <p className="text-gray-500 italic">📌 Past questions will appear here in future updates.</p>
        )}

        {activeTab === "tips" && (
          <p className="text-gray-500 italic">💡 Tips and suggestions for interview preparation will appear here.</p>
        )}
      </main>
    </div>
  );
}
