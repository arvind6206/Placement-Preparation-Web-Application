import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-6 bg-white rounded-xl shadow">📊 Tests Completed: 2</div>
          <div className="p-6 bg-white rounded-xl shadow">⏳ Upcoming Tests: 1</div>
          <div className="p-6 bg-white rounded-xl shadow">📁 Resume Score: 72%</div>
        </div>
      </div>
    </div>
  );
}
