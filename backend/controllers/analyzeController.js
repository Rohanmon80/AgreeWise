import { analyzeAgreement } from "../services/geminiService.js";
import { extractPDFText } from "../utils/pdfParser.js";
import { extractDOCXText } from "../utils/docxParser.js";
import { extractURLText } from "../utils/urlParser.js";

// ----------------------
// TEXT
// ----------------------
export const analyze = async (req, res) => {
  try {
    const { agreement } = req.body;

    if (!agreement) {
      return res.status(400).json({
        success: false,
        message: "Agreement text is required",
      });
    }

    const result = await analyzeAgreement(agreement);

    res.json({
      success: true,
      result,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ----------------------
// PDF
// ----------------------
export const analyzePDF = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "PDF file is required",
      });
    }

    const pdfText = await extractPDFText(req.file.buffer);

    const result = await analyzeAgreement(pdfText);

    res.json({
      success: true,
      result,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ----------------------
// DOCX
// ----------------------
export const analyzeDOCX = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "DOCX file is required",
      });
    }

    const docText = await extractDOCXText(req.file.buffer);

    const result = await analyzeAgreement(docText);

    res.json({
      success: true,
      result,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ----------------------
// URL
// ----------------------
export const analyzeURL = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "URL is required",
      });
    }

    const websiteText = await extractURLText(url);

    const result = await analyzeAgreement(websiteText);

    res.json({
      success: true,
      result,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};