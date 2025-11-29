import Interview from "../models/Interview.js";

export const addInterview = async (req, res) => {
  const interview = await Interview.create({ ...req.body, userId: req.user._id });
  res.json(interview);
};

export const getInterviews = async (req, res) => {
  const data = await Interview.find({ userId: req.user._id });
  res.json(data);
};
