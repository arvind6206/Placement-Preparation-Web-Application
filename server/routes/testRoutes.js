import express from "express";
import { submitTest, getUserTests } from "../controllers/testController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/submit", protect, submitTest);
router.get("/history", protect, getUserTests);

export default router;
