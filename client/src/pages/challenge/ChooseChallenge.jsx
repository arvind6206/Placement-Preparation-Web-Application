import Sidebar from "../../components/Sidebar";
import { Brain, Code2, UserCheck } from "lucide-react";

export default function ChooseChallenge() {
  const categories = [
    {
      title: "Aptitude Round",
      icon: <Brain className="w-7 h-7 text-blue-400" />,
      tags: ["Quantitative Analysis", "Logical Reasoning", "Verbal Ability"],
    },
    {
      title: "Coding Round",
      icon: <Code2 className="w-7 h-7 text-teal-400" />,
      tags: ["Data Structures", "Algorithms", "System Design"],
    },
    {
      title: "HR & Behavioral",
      icon: <UserCheck className="w-7 h-7 text-indigo-400" />,
      tags: ["Behavioral Questions", "Judgement", "Resume-based"],
    },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <main className="flex-1 px-12 py-10">
        <h1 className="text-4xl font-bold">Choose Your Challenge</h1>
        <p className="text-gray-400 mt-2">
          Select a round to start your practice session.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-[#111] border border-gray-800 p-6 rounded-2xl hover:scale-[1.02] transition-all cursor-pointer shadow-xl"
            >
              <div className="mb-4">{cat.icon}</div>

              <h2 className="text-xl font-semibold mb-3">{cat.title}</h2>

              <div className="flex flex-wrap gap-2 mb-4">
                {cat.tags.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center gap-2 mt-5">
                <button className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-semibold transition">
                  Start Practice
                </button>

                <button className="w-full py-2 rounded-xl bg-gray-800 border border-gray-700 hover:bg-gray-700 text-sm font-semibold transition">
                  Custom
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
