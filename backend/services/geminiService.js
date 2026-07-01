import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function analyzeAgreement(agreementText) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are AgreeWise AI.

Analyze the following agreement.

IMPORTANT:
Return ONLY valid JSON.
Do NOT use markdown.
Do NOT use \`\`\`json.
Do NOT explain anything.

Return exactly in this format:

{
  "summary":"",
  "privacy":[],
  "hidden_clauses":[],
  "risks":[],
  "collected_data":[],
  "shared_data":[],
  "recommendation":"",
  "safety_score":0
}

Agreement:

${agreementText}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    let text = response.text().trim();

    // Remove markdown if Gemini still adds it
    text = text
      .replace(/^```json/i, "")
      .replace(/^```/, "")
      .replace(/```$/, "")
      .trim();

    // Convert JSON string into object
    const json = JSON.parse(text);

    return json;

  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
}