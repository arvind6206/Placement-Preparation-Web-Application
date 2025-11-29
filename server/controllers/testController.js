import TestResult from "../models/TestResult.js";

export const submitTest = async (req, res) => {
  const result = await TestResult.create({ ...req.body, userId: req.user._id });
  res.json(result);
};

export const getUserTests = async (req, res) => {
  const tests = await TestResult.find({ userId: req.user._id });
  res.json(tests);
};
