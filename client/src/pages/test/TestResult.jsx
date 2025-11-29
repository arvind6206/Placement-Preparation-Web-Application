import Sidebar from "../../components/Sidebar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function TestResult() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const {
    category,
    score,
    totalQuestions,
    correctAnswers,
    wrongAnswers,
    timeTaken
  } = state || {};

  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-2">
          Test Results: {category}
        </h1>
        <p className="text-gray-600 mb-6">
          Here's a detailed breakdown of your performance.
        </p>

        {/* Result Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Score Box */}
          <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-center items-center">
            <h3 className="text-gray-500 text-sm mb-2">OVERALL SCORE</h3>
            <h2 className="text-4xl font-bold">
              {score} / {totalQuestions}
            </h2>

            <div className="w-32 mt-4">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  textColor: "#2563EB",
                  pathColor: "#2563EB",
                  trailColor: "#E5E7EB",
                })}
              />
            </div>

            <p className="text-blue-600 font-semibold mt-3">
              {percentage >= 70 ? "Excellent Work!" : "Keep Improving!"}
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-500 text-sm">Correct Answers</p>
              <h2 className="text-2xl font-bold text-green-600">{correctAnswers}</h2>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-500 text-sm">Incorrect Answers</p>
              <h2 className="text-2xl font-bold text-red-500">{wrongAnswers}</h2>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-500 text-sm">Time Taken</p>
              <h2 className="text-xl font-bold">{timeTaken}</h2>
            </div>
          </div>
        </div>

        {/* Next Actions */}
        <div className="bg-white p-6 rounded-xl shadow max-w-xl">
          <h2 className="text-lg font-semibold mb-4">Next Steps</h2>

          <button
            onClick={() => navigate("/tests")}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
          >
            Practice More
          </button>
        </div>
      </main>
    </div>
  );
}
