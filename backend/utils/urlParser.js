import axios from "axios";
import * as cheerio from "cheerio";

export async function extractURLText(url) {
  const { data } = await axios.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
  });

  const $ = cheerio.load(data);

  // Remove unwanted elements
  $("script").remove();
  $("style").remove();
  $("noscript").remove();
  $("iframe").remove();
  $("header").remove();
  $("footer").remove();
  $("nav").remove();
  $("svg").remove();
  $("img").remove();

  const text = $("body").text();

  return text
    .replace(/\s+/g, " ")
    .trim();
}