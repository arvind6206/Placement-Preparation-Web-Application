import { useState } from "react";
import { hrQuestions } from "../../data/questions";
import Sidebar from "../../components/Sidebar";

export default function HRPractice() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(hrQuestions.length).fill(""));
  const [submitted, setSubmitted] = useState(false);

  const q = hrQuestions[current];

  const handleChange = (e) => {
    const updated = [...answers];
    updated[current] = e.target.value;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (current < hrQuestions.length - 1) {
      setCurrent((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl shadow text-center max-w-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">🎉 Test Completed!</h2>
            <p className="text-gray-600 text-lg mb-4">
              Thank you for completing the HR round.
            </p>

            <button
              onClick={() => window.location.href = "/tests"}
              className="mt-4 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Back to Practice
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      <Sidebar />

      <main className="flex-1 px-8 py-6">
        <h2 className="text-2xl font-semibold mb-4">HR / Behavioral Round</h2>

        <div className="bg-white p-6 rounded-xl shadow-md border max-w-3xl">
          <p className="text-lg font-medium mb-4">{q.question}</p>

          <textarea
            value={answers[current]}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg h-32 resize-none outline-blue-500"
            placeholder="Type your response..."
          ></textarea>

          {/* Navigation Buttons */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={current === 0}
              className={`px-4 py-2 rounded-lg text-sm border ${
                current === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-50"
              }`}
            >
              Previous
            </button>

            {current === hrQuestions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-700"
              >
                Submit Test
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-lg text-sm border hover:bg-gray-50"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
