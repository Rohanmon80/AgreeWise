import express from "express";
import upload from "../middleware/upload.js";
import {
  analyze,
  analyzePDF,
} from "../controllers/analyzeController.js";

const router = express.Router();

router.post("/", analyze);

router.post(
  "/pdf",
  upload.single("pdf"),
  analyzePDF
);

export default router;