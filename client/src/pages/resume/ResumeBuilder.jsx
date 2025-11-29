import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";

const templates = [
  {
    id: 1,
    name: "Modern Professional",
    preview: "https://via.placeholder.com/300x400?text=Template+1"
  },
  {
    id: 2,
    name: "Minimal Clean",
    preview: "https://via.placeholder.com/300x400?text=Template+2"
  },
  {
    id: 3,
    name: "Creative Portfolio",
    preview: "https://via.placeholder.com/300x400?text=Template+3"
  }
];

export default function ResumeBuilder() {
  const navigate = useNavigate();

  const selectTemplate = (template) => {
    navigate("/resume/edit", { state: { template } });
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      <Sidebar />

      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold">Choose a Resume Template</h1>
        <p className="text-gray-600 mt-1">Select a template to start building your resume.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {templates.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => selectTemplate(t)}
            >
              <img
                src={t.preview}
                className="rounded-md w-full h-64 object-cover border"
                alt={t.name}
              />

              <p className="mt-4 text-center font-semibold">{t.name}</p>

              <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Use This Template
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
