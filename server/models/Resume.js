import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  userId: { type: String },
  fileUrl: String,
}, { timestamps: true });

export default mongoose.model("Resume", resumeSchema);
