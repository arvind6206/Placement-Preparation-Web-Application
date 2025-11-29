# Placement-Preparation-Web-Application

A full-stack application designed to help students practice aptitude, coding, HR questions, manage interviews, track progress, and upload resumes — all in one place.

📌 Features
Module	Features
🔐 Authentication	Login, Register, Protected Routes
📊 Dashboard	Displays recent activity, interview stats, latest mock score
🧠 Practice Rounds	Aptitude, Coding, HR Behavioral rounds with MCQs + typing questions
🎯 Test Evaluation	Auto scoring + summary report after completion
📝 Resume Section	Upload resume, preview, (future AI suggestions placeholder)
💼 Interview Tracker	Add interview details, view history, store important info
⚙️ Profiles & Settings	User profile with name initials, settings panel
🏗 Tech Stack
Frontend

React.js (Vite)

Tailwind CSS

React Router DOM

Axios

Lucide Icons

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

Multer (for file upload)

📂 Folder Structure
📦 placement-preparation-app
 ┣ 📁 client
 ┃ ┣ 📁 src
 ┃ ┃ ┣ components/
 ┃ ┃ ┣ pages/
 ┃ ┃ ┣ services/
 ┃ ┃ ┣ AppRouter.jsx
 ┃ ┃ ┣ App.jsx
 ┣ 📁 server
 ┃ ┣ src/
 ┃ ┃ ┣ controllers/
 ┃ ┃ ┣ models/
 ┃ ┃ ┣ routes/
 ┃ ┃ ┣ middleware/
 ┃ ┃ ┣ server.js
 ┣ README.md
 ┣ package.json
⚙️ Environment Variables

Create a .env file in your server folder and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


Create a .env file in the client folder if needed:

VITE_API_URL=http://localhost:5000
▶️ Setup & Run
1️⃣ Clone the repository
git clone https://github.com/arvind6206/Placement-Preparation-Web-Application.git
cd Placement-Preparation-Web-Application

2️⃣ Install dependencies
Backend:
cd server
npm install

Frontend:
cd client
npm install

3️⃣ Run the app

Backend:

npm start


Frontend:

npm run dev

📍 Future Enhancements

🤖 AI Resume Analyzer (ATS Score, Keyword Suggestions)

📈 Analytics Dashboard with User Progress

💾 Cloud Resume Parser

👥 Mock Interview Question Generator

🧠 AI-Powered test difficulty adjustment

🤝 Contributing

Contributions are welcome!
Please open an issue or submit a pull request.

📄 License

This project is open-source under the MIT License.

❤️ Acknowledgments

Built with passion to help students prepare confidently for placements.
