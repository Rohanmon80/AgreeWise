import { analyzeAgreement } from "../services/geminiService.js";

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