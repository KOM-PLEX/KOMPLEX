import api from "../../config/axios";
import { AIResponse, AIHistoryResponse } from "../../types/content/ai";

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

// Get AI chat history
export const getAiHistory = async (
  page: number = 1,
  limit: number = 20
): Promise<AIHistoryResponse> => {
  try {
    const response = await api.get<AIHistoryResponse>("/me/ai", {
      params: {
        page,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching AI history:", error);
    throw new Error("Failed to get AI history");
  }
};
