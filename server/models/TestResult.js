import mongoose from "mongoose";

const testResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  category: String,
  score: Number,
  totalQuestions: Number,
  timeTaken: String,
  answers: Array,
}, { timestamps: true });

export default mongoose.model("TestResult", testResultSchema);
