import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const prompts = [
  // Service 1: Payor Contracting & Renegotiation
  {
    filename: "service1-1.png",
    prompt: "High-end, professional, enterprise-grade editorial photo of professionals reviewing financial or contract data on laptops and screens. Executive-level corporate consulting firm setting. Clean, modern, minimal. Natural lighting, soft shadows. Neutral color palette with white, gray, and navy tones. Subtle depth of field. Horizontal landscape, clean composition with negative space. No text, no logos."
  },
  {
    filename: "service1-2.png",
    prompt: "High-end, professional, enterprise-grade editorial photo of a focused discussion between two diverse executives analyzing charts and reports. Executive-level corporate consulting firm setting. Clean, modern, minimal. Natural lighting, soft shadows. Neutral color palette with white, gray, and navy tones. Subtle depth of field. Horizontal landscape, clean composition with negative space. No text, no logos."
  },
  {
    filename: "service1-3.png",
    prompt: "High-end, professional, enterprise-grade editorial photo of a clean desk setup with documents, analytics, and contract review materials. Executive-level corporate consulting firm setting. Clean, modern, minimal. Natural lighting, soft shadows. Neutral color palette with white, gray, and navy tones. Subtle depth of field. Horizontal landscape, clean composition with negative space. No text, no logos."
  },
  // Service 2: Credentialing Services
  {
    filename: "service2-1.png",
    prompt: "High-end, professional, enterprise-grade editorial photo of a close-up of organized paperwork and digital application workflows. Executive-level corporate consulting firm setting. Clean, modern, minimal. Natural lighting, soft shadows. Neutral color palette with white, gray, and navy tones. Subtle depth of field. Horizontal landscape, clean composition with negative space. No text, no logos."
  },
  {
    filename: "service2-2.png",
    prompt: "High-end, professional, enterprise-grade editorial photo of a diverse professional working on enrollment or application forms on a laptop. Executive-level corporate consulting firm setting. Clean, modern, minimal. Natural lighting, soft shadows. Neutral color palette with white, gray, and navy tones. Subtle depth of field. Horizontal landscape, clean composition with negative space. No text, no logos."
  },
  {
    filename: "service2-3.png",
    prompt: "High-end, professional, enterprise-grade editorial photo of administrative precision — documents, forms, structured process visuals on a clean desk. Executive-level corporate consulting firm setting. Clean, modern, minimal. Natural lighting, soft shadows. Neutral color palette with white, gray, and navy tones. Subtle depth of field. Horizontal landscape, clean composition with negative space. No text, no logos."
  },
  // Service 3: Strategic Advisory
  {
    filename: "service3-1.png",
    prompt: "High-end, professional, enterprise-grade editorial photo of an executive team reviewing dashboards and performance metrics on large screens. Executive-level corporate consulting firm setting. Clean, modern, minimal. Natural lighting, soft shadows. Neutral color palette with white, gray, and navy tones. Subtle depth of field. Horizontal landscape, clean composition with negative space. No text, no logos."
  },
  {
    filename: "service3-2.png",
    prompt: "High-end, professional, enterprise-grade editorial photo of a strategic discussion in a modern conference room with charts and visualizations. Executive-level corporate consulting firm setting. Clean, modern, minimal. Natural lighting, soft shadows. Neutral color palette with white, gray, and navy tones. Subtle depth of field. Horizontal landscape, clean composition with negative space. No text, no logos."
  },
  {
    filename: "service3-3.png",
    prompt: "High-end, professional, enterprise-grade editorial photo of leadership-level collaboration — confident, composed diverse professionals in a high-end office. Executive-level corporate consulting firm setting. Clean, modern, minimal. Natural lighting, soft shadows. Neutral color palette with white, gray, and navy tones. Subtle depth of field. Horizontal landscape, clean composition with negative space. No text, no logos."
  }
];

async function generateImages() {
  for (const item of prompts) {
    console.log(`Generating ${item.filename}...`);
    try {
      const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: item.prompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '16:9',
        },
      });
      
      const base64EncodeString = response.generatedImages[0].image.imageBytes;
      const buffer = Buffer.from(base64EncodeString, 'base64');
      fs.writeFileSync(path.join(process.cwd(), 'public', item.filename), buffer);
      console.log(`Saved ${item.filename}`);
    } catch (e) {
      console.error(`Error generating ${item.filename}:`, e);
    }
  }
}

generateImages();
