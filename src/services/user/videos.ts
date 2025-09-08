import api from "@/config/axios";
import { VideoPost } from "@/types/content/videos";

export const getUserVideos = async (userId: string): Promise<VideoPost[]> => {
  try {
    const response = await api.get<{ data: VideoPost[] }>(
      `/users/${userId}/videos`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user videos:", error);
    throw new Error("Failed to fetch user videos");
  }
};
