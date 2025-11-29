import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema({
  userId: String,
  company: String,
  role: String,
  package: String,
  date: Date,
  status: String
}, { timestamps: true });

export default mongoose.model("Interview", interviewSchema);
