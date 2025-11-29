// src/pages/test/TestReport.jsx
import { useLocation, Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function TestReport() {
  const { state } = useLocation();
  const score = state?.score || 0;
  const total = state?.totalQuestions || 0;
  const percent = total ? Math.round((score / total) * 100) : 0;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-50 p-6">
        <h1 className="text-2xl font-bold mb-4">Test Report</h1>

        <div className="bg-white rounded-xl shadow p-6 max-w-lg">
          <p className="text-gray-500 mb-2 text-sm">Overall Performance</p>

          <div className="flex items-center gap-8 mb-6">
            <div className="relative flex items-center justify-center h-28 w-28">
              <div className="absolute inset-0 rounded-full bg-blue-50" />
              <div className="relative h-24 w-24 rounded-full bg-white shadow flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600">{percent}%</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p>
                Score: <span className="font-semibold">{score}</span> / {total}
              </p>
              <p>
                Time Taken: <span className="font-semibold">{state?.timeTaken || "—"}</span>
              </p>
              <p className="text-gray-500">
                {percent >= 70
                  ? "Great job! You are on track for placements."
                  : "Keep practicing to improve your consistency."}
              </p>
            </div>
          </div>

          <Link
            to="/tests"
            className="inline-flex items-center text-sm text-blue-600 hover:underline"
          >
            ← Back to Practice
          </Link>
        </div>
      </div>
    </div>
  );
}
