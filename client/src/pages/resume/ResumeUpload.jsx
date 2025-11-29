// src/pages/resume/ResumeUpload.jsx
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { uploadResume } from "../../services/resumeService";
import { UploadCloud, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const navigate = useNavigate()

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      setStatus("⚠ Please select a file before uploading.");
      return;
    }

    setStatus("⏳ Uploading...");

    try {
      await uploadResume(file);
      setStatus("✅ Resume uploaded successfully!");
    } catch (err) {
      setStatus(`❌ Upload failed: ${err?.message || "Something went wrong."}`);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      <Sidebar />

      <main className="flex-1 p-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Manage Your Resume</h1>

          <button
            onClick={() => navigate("/resume/create")}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            + Create New Resume
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Upload Box */}
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="xl:col-span-2 border-2 border-dashed border-gray-300 rounded-2xl bg-white p-10 flex flex-col justify-center items-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
          >
            <UploadCloud className="w-14 h-14 text-gray-600 mb-4" />

            <p className="text-lg font-semibold">Upload Resume</p>
            <p className="text-sm text-gray-500 mt-1">
              Drag & drop your file here or click to browse
            </p>

            <input
              type="file"
              id="resumeUpload"
              className="hidden"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <label
              htmlFor="resumeUpload"
              className="mt-6 px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition cursor-pointer"
            >
              {file ? "Change File" : "Upload"}
            </label>

            {status && (
              <p className="mt-4 text-sm font-medium text-gray-700 text-center">
                {status}
              </p>
            )}
          </div>

          {/* Preview Panel */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
            <Eye className="w-10 h-10 text-gray-500 mb-3" />
            <p className="text-sm text-gray-500 text-center">
              Upload or create a resume to see a preview.
            </p>
          </div>
        </div>

        {/* Future AI Suggestions */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">
            AI Suggestions (Coming Soon)
          </h2>

          <div className="bg-white p-5 rounded-2xl shadow-md border flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">Improve Wording</p>
              <p className="text-sm text-gray-600">
                Example: Rewrite weak points into stronger bullet points.
              </p>
            </div>

            <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              Apply Suggestion
            </button>
          </div>
        </div>

        {/* Final Submit */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubmit}
            disabled={!file}
            className={`px-6 py-3 rounded-lg text-white font-semibold transition ${
              file
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Save Resume
          </button>
        </div>
      </main>
    </div>
  );
}
