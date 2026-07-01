import { analyzeAgreement } from "../services/geminiService.js";
import { extractPDFText } from "../utils/pdfParser.js";

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