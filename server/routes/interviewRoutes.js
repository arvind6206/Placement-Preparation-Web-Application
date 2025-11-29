import express from "express";
import { addInterview, getInterviews } from "../controllers/interviewController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", protect, addInterview);
router.get("/all", protect, getInterviews);

export default router;
