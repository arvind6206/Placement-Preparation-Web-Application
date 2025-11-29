import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { Brain, Code2, MessageCircle } from "lucide-react";

const categories = [
  { 
    id: 1, 
    name: "Aptitude Round", 
    desc: "Quant, logical, verbal reasoning", 
    color: "border-blue-500", 
    icon: <Brain className="w-6 h-6 text-blue-600" />,
    gradient: "bg-blue-50"
  },
  { 
    id: 2, 
    name: "Coding Round", 
    desc: "DSA, problem solving, patterns", 
    color: "border-green-500", 
    icon: <Code2 className="w-6 h-6 text-green-600" />,
    gradient: "bg-green-50"
  },
  { 
    id: 3, 
    name: "HR / Behavioural", 
    desc: "Situational & HR questions", 
    color: "border-pink-500", 
    icon: <MessageCircle className="w-6 h-6 text-pink-600" />,
    gradient: "bg-pink-50"
  },
];

export default function TestList() {
  const navigate = useNavigate();

  const handleStart = (cat) => {
    navigate("/tests/start", { state: { category: cat.name } });
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <Sidebar />

      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold">Practice Rounds</h1>
        <p className="text-gray-600 mt-1">
          Choose a round to start your placement preparation practice.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`group cursor-pointer rounded-2xl bg-white shadow-md border-t-4 ${cat.color} hover:shadow-xl transition-all duration-300`}
            >
              <div className={`rounded-t-2xl h-3 ${cat.gradient}`} />

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {cat.icon}
                  <h3 className="text-lg font-semibold">{cat.name}</h3>
                </div>

                <p className="text-sm text-gray-500 mb-6">{cat.desc}</p>

                <button
                  onClick={() => handleStart(cat)}
                  className="w-full py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-[1.03]"
                >
                  Start Practice
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
