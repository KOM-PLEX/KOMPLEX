import api from "@/config/axios";
import { VideoPost } from "@/types/content/videos";

// Get all videos
export const getAllVideos = async (): Promise<VideoPost[]> => {
  try {
    const response = await api.get<VideoPost[]>(`/feed/videos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all videos:", error);
    throw new Error("Failed to fetch videos");
  }
};

// Get video by ID
export const getVideoById = async (id: string): Promise<VideoPost> => {
  try {
    const response = await api.get<VideoPost>(`/feed/videos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching video by ID:", error);
    throw new Error("Failed to fetch video");
  }
};

// Get exercises for a video
export const getVideoExercises = async (
  videoId: string
): Promise<unknown[]> => {
  try {
    const response = await api.get<unknown[]>(
      `/feed/videos/${videoId}/exercise`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching video exercises:", error);
    throw new Error("Failed to fetch video exercises");
  }
};
