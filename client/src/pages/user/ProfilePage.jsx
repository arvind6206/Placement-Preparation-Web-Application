export default function ProfilePage() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>

      <div className="bg-white p-6 rounded-xl shadow w-96">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
}
