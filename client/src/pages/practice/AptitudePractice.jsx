import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { aptitudeQuestions } from "../../data/questions";

export default function AptitudePractice() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState(Array(aptitudeQuestions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const q = aptitudeQuestions[current];

  const handleNext = () => {
    if (current < aptitudeQuestions.length - 1) {
      setCurrent((prev) => prev + 1);
      setSelected(answers[current + 1] || null); // FIX → Reset answer
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleOptionSelect = (option) => {
    setSelected(option);
    const updated = [...answers];
    updated[current] = option;
    setAnswers(updated);
  };

  if (submitted) {
    const score = answers.filter((a, i) => a === aptitudeQuestions[i].answer).length;

    return (
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold mb-2">🎉 Test Completed</h2>
            <p className="text-gray-600 mb-4">Thanks for taking the test.</p>
            <p className="text-3xl font-semibold text-blue-600">
              Score: {score} / {aptitudeQuestions.length}
            </p>

            <a
              href="/tests"
              className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Back to Practice
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold mb-4">Aptitude Practice</h2>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-3">{q.question}</h3>

          <div className="flex flex-col gap-3">
            {q.options.map((opt, index) => (
              <label
                key={index}
                className={`p-3 border rounded-lg cursor-pointer ${
                  selected === opt ? "bg-blue-50 border-blue-500" : "hover:bg-gray-50"
                }`}
                onClick={() => handleOptionSelect(opt)}
              >
                {opt}
              </label>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            {current === aptitudeQuestions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Submit Test
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="border px-6 py-2 rounded-lg hover:bg-gray-50"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
