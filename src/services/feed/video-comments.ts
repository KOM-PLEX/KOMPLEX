import api from "@/config/axios";
import { VideoComment } from "@/types/content/videos";

// Get comments for a video
export const getVideoComments = async (
  videoId: string
): Promise<VideoComment[]> => {
  try {
    const response = await api.get<VideoComment[]>(
      `/feed/video_comments/${videoId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching video comments:", error);
    throw new Error("Failed to fetch video comments");
  }
};

// Create a comment on a video
export const createVideoComment = async (
  videoId: string,
  description: string
): Promise<VideoComment> => {
  try {
    const response = await api.post<VideoComment>(
      `/feed/video_comments/${videoId}`,
      {
        description,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating video comment:", error);
    throw new Error("Failed to create video comment");
  }
};

// Like/unlike a video comment
export const toggleVideoCommentLike = async (
  commentId: number,
  isLiked: boolean
): Promise<void> => {
  try {
    const endpoint = isLiked ? "unlike" : "like";
    await api.patch(`/feed/video_comments/${commentId}/${endpoint}`);
  } catch (error) {
    console.error("Error toggling video comment like:", error);
    throw new Error("Failed to update video comment like status");
  }
};