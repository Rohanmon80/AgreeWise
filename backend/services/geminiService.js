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
You are an AI legal assistant.

Analyze the following agreement.

Return ONLY valid JSON.

Format:

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

    return response.text();
  } catch (error) {
    console.error(error);
    throw error;
  }
}