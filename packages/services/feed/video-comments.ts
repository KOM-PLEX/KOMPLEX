import { VideoComment } from "../../types/content/videos";
import api from "../../config/axios";

// Get comments for a video
export const getVideoComments = async (
  videoId: string
): Promise<VideoComment[]> => {
  try {
    const response = await api.get(`/feed/video-comments/${videoId}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching video comments:", error);
    throw new Error("Failed to fetch video comments");
  }
};
