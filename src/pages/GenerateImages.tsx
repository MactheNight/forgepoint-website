import { useState, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export default function GenerateImages() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio?.hasSelectedApiKey) {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasKey(selected);
      } else {
        // If not in AI Studio environment, assume key is available via env
        setHasKey(true);
      }
    };
    checkKey();
  }, []);

  const selectKey = async () => {
    if (window.aistudio?.openSelectKey) {
      await window.aistudio.openSelectKey();
      // Assume success after triggering
      setHasKey(true);
    }
  };

  const generate = async () => {
    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const prompts = [
        "High-end corporate photography of two professionals reviewing healthcare financial data. Medical billing charts, CPT codes, and reimbursement dashboards visible on a laptop or large monitor. Documents referencing insurance or payors on the desk. Mood: Strategic, analytical, revenue-focused. Executive consulting aesthetic (McKinsey/Bain level), clean, minimal, professional. Subtle healthcare context (not clinical). Natural lighting, neutral tones (white, gray, navy), slightly desaturated for a premium feel. Horizontal landscape, negative space. No overly posed expressions, no clinical/surgical scenes, no generic corporate scenes.",
        "High-end corporate photography of a professional managing healthcare provider enrollment and credentialing workflows. Forms referencing providers, licenses, or insurance enrollment visible. Clean, structured documentation on a minimal desk. Subtle indicators of healthcare administration. Mood: Precision, compliance, process-driven. Executive consulting aesthetic (McKinsey/Bain level), clean, minimal, professional. Subtle healthcare context (not clinical). Natural lighting, neutral tones (white, gray, navy), slightly desaturated for a premium feel. Horizontal landscape, negative space. No overly posed expressions, no clinical/surgical scenes, no generic corporate scenes.",
        "High-end corporate photography of an executive team reviewing healthcare performance and growth strategy in a conference room. Dashboards referencing patient volume, revenue, or service lines displayed on a screen. Healthcare-related charts or KPIs visible. Mood: Leadership, growth, executive decision-making. Executive consulting aesthetic (McKinsey/Bain level), clean, minimal, professional. Subtle healthcare context (not clinical). Natural lighting, neutral tones (white, gray, navy), slightly desaturated for a premium feel. Horizontal landscape, negative space. No overly posed expressions, no clinical/surgical scenes, no generic corporate scenes."
      ];

      const newImages: string[] = [];

      for (const prompt of prompts) {
        const response = await ai.models.generateContent({
          model: 'gemini-3.1-flash-image-preview',
          contents: {
            parts: [{ text: prompt }],
          },
          config: {
            // @ts-ignore
            imageConfig: {
              aspectRatio: "16:9",
            }
          },
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            newImages.push(`data:image/jpeg;base64,${part.inlineData.data}`);
          }
        }
      }

      setImages(newImages);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred. If you see 'Requested entity was not found', please select your API key again.");
      if (err.message?.includes("Requested entity was not found")) {
        setHasKey(false);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 pt-24 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-navy">Generate Services Images</h1>
      <p className="mb-8 text-gray-600">
        This tool uses Gemini 3.1 Flash Image Preview to generate high-end, professional images for the Services page.
        Because this requires a paid Gemini model, you must select your own API key first.
      </p>

      {!hasKey ? (
        <button 
          onClick={selectKey}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
        >
          Select API Key
        </button>
      ) : (
        <button 
          onClick={generate} 
          disabled={loading}
          className="bg-navy text-white px-6 py-3 rounded disabled:opacity-50 hover:bg-charcoal transition-colors"
        >
          {loading ? "Generating Images (This may take a minute)..." : "Generate 3 Images"}
        </button>
      )}
      
      {error && <div className="text-red-500 mt-4 p-4 bg-red-50 rounded border border-red-200">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {images.map((img, i) => (
          <div key={i} className="border p-4 rounded shadow-sm bg-white">
            <h3 className="font-bold mb-2 text-navy">Image {i + 1}</h3>
            <img src={img} alt={`Generated ${i + 1}`} className="w-full h-auto rounded" />
            <a 
              href={img} 
              download={`service-${i + 1}.jpg`}
              className="block text-center mt-4 bg-gray-100 text-navy font-semibold py-2 rounded hover:bg-gray-200 transition-colors"
            >
              Download Image
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
