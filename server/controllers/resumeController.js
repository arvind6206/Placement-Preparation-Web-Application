import Resume from "../models/Resume.js";

export const uploadResume = async (req, res) => {
  const filePath = `/uploads/${req.file.filename}`;
  const resume = await Resume.create({ userId: req.user._id, fileUrl: filePath });
  res.json(resume);
};
