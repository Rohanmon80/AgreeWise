import mammoth from "mammoth";

export async function extractDOCXText(buffer) {
  const result = await mammoth.extractRawText({
    buffer,
  });

  return result.value;
}