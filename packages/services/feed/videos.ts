import api from "../../config/axios";
import { VideoPost } from "../../types/content/videos";

// Get all videos
export const getAllVideos = async (): Promise<{
  data: VideoPost[];
  hasMore: boolean;
}> => {
  try {
    const response = await api.get<{ data: VideoPost[]; hasMore: boolean }>(
      `/feed/videos`
    );
    return {
      data: response.data.data,
      hasMore: response.data.hasMore,
    };
  } catch (error) {
    console.error("Error fetching all videos:", error);
    throw new Error("Failed to fetch videos");
  }
};

// Get video by ID
export const getVideoById = async (id: string): Promise<VideoPost> => {
  try {
    const response = await api.get<{ data: VideoPost }>(`/feed/videos/${id}`);
    return response.data.data;
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

// Get recommended videos based on current video
export const getRecommendedVideos = async (
  userId: number,
  videoId: number,
  limit: number = 5,
  offset: number = 0
): Promise<VideoPost[]> => {
  try {
    const response = await api.get<{ data: VideoPost[] }>(
      `/feed/videos/${videoId}/recommended?limit=${limit}&offset=${offset}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching recommended videos:", error);
    throw new Error("Failed to fetch recommended videos");
  }
};
