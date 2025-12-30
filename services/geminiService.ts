
import { GoogleGenAI, Type } from "@google/genai";
import { Friend, ActivityIdea } from "../types";

export async function generateActivities(friends: Friend[]): Promise<ActivityIdea[]> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const bios = friends.map(f => `${f.name}: ${f.bio}`).join('\n');
  const prompt = `We are a group of 10 friends reuniting after 2 years. Here are our mini bios:\n${bios}\n\nSuggest 5 unique and fun gathering activities that would suit this specific group. Include a title, short description, duration, and vibes (e.g. "Chill", "Competitive").`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              duration: { type: Type.STRING },
              vibes: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ["title", "description", "duration", "vibes"]
          }
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating activities:", error);
    return [];
  }
}

export async function generateGiftIdeas(giver: Friend, receiver: Friend): Promise<string[]> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Secret Santa Time! ${giver.name} is buying a gift for ${receiver.name}. 
  About ${receiver.name}: ${receiver.bio}. 
  Suggest 3 thoughtful, creative gift ideas under $50 based on their bio. Be specific and fun.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating gift ideas:", error);
    return ["A personalized mug", "A nice scented candle", "A local craft snack basket"];
  }
}
