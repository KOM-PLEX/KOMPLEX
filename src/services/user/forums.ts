import api from "@/config/axios";
import { ForumPost } from "@/types/content/forums";

export const getUserForums = async (userId: string): Promise<ForumPost[]> => {
  try {
    const response = await api.get<{ data: ForumPost[] }>(
      `/users/${userId}/forums`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user forums:", error);
    throw new Error("Failed to fetch user forums");
  }
};
