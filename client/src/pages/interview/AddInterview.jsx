import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function AddInterview() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    company: "",
    role: "",
    date: "",
    type: "On-Campus",
    salary: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
  const existing = JSON.parse(localStorage.getItem("interviews") || "[]");

  const newEntry = {
    id: Date.now(),
    ...form
  };

  existing.push(newEntry);

  localStorage.setItem("interviews", JSON.stringify(existing));

  navigate(`/interviews/${newEntry.id}`); // 👈 redirect to detail page
};


  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-10">
        <h2 className="text-2xl font-bold mb-6">Add Interview</h2>

        <div className="bg-white p-6 rounded-xl shadow space-y-4 max-w-xl">

          <input name="company" type="text" placeholder="Company Name"
            value={form.company} onChange={handleChange}
            className="border p-3 w-full rounded-lg" />

          <input name="role" type="text" placeholder="Role (e.g. SDE Intern)"
            value={form.role} onChange={handleChange}
            className="border p-3 w-full rounded-lg" />

          <input name="date" type="date"
            value={form.date} onChange={handleChange}
            className="border p-3 w-full rounded-lg" />

          <select name="type" value={form.type} onChange={handleChange}
            className="border p-3 w-full rounded-lg">
            <option>On-Campus</option>
            <option>Off-Campus</option>
          </select>

          <input name="salary" type="text" placeholder="Package (Optional)"
            value={form.salary} onChange={handleChange}
            className="border p-3 w-full rounded-lg" />

          <button onClick={handleSave}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition">
            Save Interview
          </button>
        </div>
      </div>
    </div>
  );
}
