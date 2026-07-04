import express from "express";
import upload from "../middleware/upload.js";

import {
  analyze,
  analyzePDF,
  analyzeDOCX,
  analyzeURL,
} from "../controllers/analyzeController.js";

const router = express.Router();

// Text
router.post("/", analyze);

// PDF
router.post(
  "/pdf",
  upload.single("pdf"),
  analyzePDF
);

// DOCX
router.post(
  "/docx",
  upload.single("docx"),
  analyzeDOCX
);

// URL
router.post(
  "/url",
  analyzeURL
);

export default router;