import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateImage(prompt: string, filename: string) {
  console.log(`Generating ${filename}...`);
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: prompt,
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const buffer = Buffer.from(part.inlineData.data, 'base64');
        const filepath = path.join(process.cwd(), 'public', filename);
        fs.mkdirSync(path.dirname(filepath), { recursive: true });
        fs.writeFileSync(filepath, buffer);
        console.log(`Saved ${filename}`);
      }
    }
  } catch (e) {
    console.error(`Failed to generate ${filename}:`, e);
  }
}

async function main() {
  const p1 = "High-end corporate photography of two senior professionals reviewing financial data together in a modern, clean office. Focused discussion over a laptop showing charts and analytics. Clean, modern, minimal aesthetic, neutral tones of white, gray, and navy. Natural lighting, subtle depth of field, negative space. Calm, confident, professional consulting style. Realistic, executive-level setting.";
  const p2 = "High-end corporate photography of a professional working meticulously at a minimal, clean desk in a modern office. Working on a laptop with structured forms, neatly organized documents nearby. Clean, modern, minimal aesthetic, neutral tones of white, gray, and navy. Natural lighting, subtle depth of field, negative space. Precision, compliance, process-driven mood. Realistic, executive-level setting.";
  const p3 = "High-end corporate photography of a small executive team in a modern conference room. One person presenting performance dashboards on a screen, others engaged in strategic discussion. Clean, modern, minimal aesthetic, neutral tones of white, gray, and navy. Natural lighting, subtle depth of field, negative space. Leadership, strategy, growth mood. Realistic, executive-level setting.";

  await generateImage(p1, 'service-contracting.png');
  await generateImage(p2, 'service-credentialing.png');
  await generateImage(p3, 'service-advisory.png');
}

main().catch(console.error);
