import api from "@/config/axios";

interface AIResponse {
  prompt: string;
  data: string;
}

// Call AI service
export const callAiAndWriteToHistory = async (
  prompt: string,
  language: string
): Promise<AIResponse> => {
  try {
    const response = await api.post<AIResponse>("/me/ai", {
      prompt,
      language,
    });
    return response.data;
  } catch (error) {
    console.error("Error calling AI:", error);
    throw new Error("Failed to get AI response");
  }
};
