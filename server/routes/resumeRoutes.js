import express from "express";
import multer from "multer";
import { uploadResume } from "../controllers/resumeController.js";
import { protect } from "../middleware/authMiddleware.js";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/upload", protect, upload.single("resume"), uploadResume);

export default router;
