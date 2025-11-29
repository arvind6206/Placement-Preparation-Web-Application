// src/pages/test/TestStart.jsx

import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import { submitTestResult } from "../../services/testService";
import { aptitudeQuestions, codingQuestions, hrQuestions } from "../../data/questions";

export default function TestStart() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const category = state?.category || "Practice Round";

  // Select correct question group
  const questionSet =
    category === "Aptitude Round"
      ? aptitudeQuestions
      : category === "Coding Round"
      ? codingQuestions
      : hrQuestions;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questionSet.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const currentQ = questionSet[currentIndex];

  // Handle option selection
  const handleOptionClick = (idx) => {
    const updated = [...answers];
    updated[currentIndex] = idx;
    setAnswers(updated);
  };

  // Navigation
  const handleNext = () => {
    if (currentIndex < questionSet.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Submit test
  const handleSubmit = async () => {
    let score = answers.filter((a, i) => a === questionSet[i].correctIndex).length;

    await submitTestResult({
      category,
      score,
      totalQuestions: questionSet.length,
      timeTaken: "10:00",
      answers,
    });

    setShowResult(true);
  };

  // ----------------------------------
  // RESULT SCREEN UI
  // ----------------------------------

  if (showResult) {
    let score = answers.filter((a, i) => a === questionSet[i].correctIndex).length;
    let wrong = questionSet.length - score;
    let percentage = Math.round((score / questionSet.length) * 100);

    return (
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />

        <main className="flex-1 p-10">
          <h1 className="text-2xl font-bold">Test Results: {category}</h1>
          <p className="text-gray-500 mb-6">
            Here's a detailed breakdown of your performance.
          </p>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            {/* Score Box */}
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <p className="text-gray-500 text-sm mb-2">OVERALL SCORE</p>
              <h2 className="text-4xl font-bold text-gray-800">
                {score} <span className="text-gray-400">/ {questionSet.length}</span>
              </h2>
              <p className="text-xl font-semibold text-blue-600 mt-3">{percentage}%</p>
              <p className="text-sm text-green-600 font-medium mt-2">
                {percentage >= 80
                  ? "🔥 Excellent!"
                  : percentage >= 50
                  ? "👍 Good Effort!"
                  : "💪 Keep Practicing!"}
              </p>
            </div>

            {/* Correct */}
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <p className="text-gray-500 text-sm mb-1">Correct Answers</p>
              <h2 className="text-3xl font-bold text-green-600">{score}</h2>
            </div>

            {/* Wrong */}
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <p className="text-gray-500 text-sm mb-1">Incorrect Answers</p>
              <h2 className="text-3xl font-bold text-red-500">{wrong}</h2>
            </div>
          </div>

          {/* Recommended Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Strength Bar */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-lg font-semibold mb-4">Performance Summary</h2>
              <p className="text-gray-700 mb-2">Your progress based on this round:</p>

              <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
                <div
                  className="bg-blue-600 h-full rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-lg font-semibold mb-4">Next Practice Steps</h2>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => navigate("/tests")}
                  className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
                >
                  Take Another Practice Test
                </button>

                <button
                  onClick={() => navigate("/dashboard")}
                  className="w-full py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                >
                  Go to Dashboard
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ----------------------------------
  // NORMAL TEST SCREEN UI
  // ----------------------------------

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 bg-gray-50 p-6 flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold">{category}</h2>
            <p className="text-gray-500 text-sm">
              Question {currentIndex + 1} of {questionSet.length}
            </p>
          </div>

          <div className="px-4 py-2 rounded-full bg-white shadow text-sm font-medium">
            ⏱ Time Left: 10:00
          </div>
        </div>

        {/* Question Box */}
        <div className="bg-white rounded-xl shadow p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold mb-4">{currentQ.question}</h3>

          {/* Options Rendering */}
          <div className="flex flex-col gap-3 mb-6">
            {currentQ.options &&
              currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  className={`text-left px-4 py-3 border rounded-lg text-sm transition ${
                    answers[currentIndex] === idx
                      ? "border-blue-600 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleOptionClick(idx)}
                >
                  {opt}
                </button>
              ))}
          </div>

          {/* Navigation */}
          <div className="mt-auto flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-lg text-sm border ${
                currentIndex === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-50"
              }`}
            >
              Previous
            </button>

            <div className="flex gap-2">
              {currentIndex < questionSet.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-lg text-sm border hover:bg-gray-50"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Submit Test
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
