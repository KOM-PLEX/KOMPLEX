import api from "@/config/axios";
import { VideoComment } from "@/types/content/videos";

// Get replies for a video comment
export const getVideoReplies = async (
  commentId: number
): Promise<VideoComment[]> => {
  try {
    const response = await api.get<VideoComment[]>(
      `/feed/video_replies/${commentId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching video replies:", error);
    throw new Error("Failed to fetch video replies");
  }
};


