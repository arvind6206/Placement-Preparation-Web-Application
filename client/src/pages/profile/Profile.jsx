// src/pages/profile/Profile.jsx
import Sidebar from "../../components/Sidebar";
import { useAuth } from "../../hooks/useAuth";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 bg-gray-50 p-6">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>

        <div className="bg-white rounded-xl shadow p-6 max-w-xl">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center text-3xl font-bold text-white">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <div>
              <h2 className="text-lg font-semibold">{user?.name}</h2>
              <p className="text-gray-500 text-sm">{user?.email}</p>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <p className="pb-2 border-b">Account Created: <strong>Recently</strong></p>
            <p className="pt-3">User Type: <strong>Student</strong></p>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-blue-50 text-xs text-blue-800">
            <strong>AI Placeholder:</strong>  
            Future enhancements like career suggestions, resume scoring & interview readiness analysis will appear here.
          </div>
        </div>
      </div>
    </div>
  );
}
