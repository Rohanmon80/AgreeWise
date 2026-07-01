import pdf from "pdf-parse";

export async function extractPDFText(buffer) {
  const data = await pdf(buffer);

  return data.text;
}