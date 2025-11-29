export default function Input({ label, type = "text", value, onChange, placeholder }) {
    return (
      <div>
        <label className="text-sm font-medium">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
        />
      </div>
    );
  }
  