import api from "@/config/axios";
import { VideoPost, VideoComment } from "@/types/content/videos";

const API_BASE_URL = "http://localhost:6969";

// Get all videos
export const getAllVideos = async (): Promise<VideoPost[]> => {
  try {
    const response = await api.get<VideoPost[]>(`${API_BASE_URL}/videos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all videos:", error);
    throw new Error("Failed to fetch videos");
  }
};

// Get video by ID
export const getVideoById = async (id: string): Promise<VideoPost> => {
  try {
    const response = await api.get<VideoPost>(`${API_BASE_URL}/videos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching video by ID:", error);
    throw new Error("Failed to fetch video");
  }
};

// Create a new video
export const createVideo = async (
  videoData: Partial<VideoPost>
): Promise<VideoPost> => {
  try {
    const response = await api.post<VideoPost>(
      `${API_BASE_URL}/videos`,
      videoData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating video:", error);
    throw new Error("Failed to create video");
  }
};

// Update a video
export const updateVideo = async (
  id: string,
  videoData: Partial<VideoPost>
): Promise<VideoPost> => {
  try {
    const response = await api.put<VideoPost>(
      `${API_BASE_URL}/videos/${id}`,
      videoData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating video:", error);
    throw new Error("Failed to update video");
  }
};

// Delete a video
export const deleteVideo = async (id: string): Promise<void> => {
  try {
    await api.delete(`${API_BASE_URL}/videos/${id}`);
  } catch (error) {
    console.error("Error deleting video:", error);
    throw new Error("Failed to delete video");
  }
};

// Like/unlike a video
export const toggleVideoLike = async (
  id: string,
  isLiked: boolean
): Promise<void> => {
  try {
    const endpoint = isLiked ? "unlike" : "like";
    await api.patch(`${API_BASE_URL}/videos/${id}/${endpoint}`);
  } catch (error) {
    console.error("Error toggling video like:", error);
    throw new Error("Failed to update video like status");
  }
};

// Save/unsave a video
export const toggleVideoSave = async (
  id: string,
  isSaved: boolean
): Promise<void> => {
  try {
    const endpoint = isSaved ? "unsave" : "save";
    await api.patch(`${API_BASE_URL}/videos/${id}/${endpoint}`);
  } catch (error) {
    console.error("Error toggling video save:", error);
    throw new Error("Failed to update video save status");
  }
};

// USER CONTENT VIDEOS

// Get user's own videos
export const getUserVideos = async (): Promise<VideoPost[]> => {
  try {
    const response = await api.get<VideoPost[]>(
      `${API_BASE_URL}/user-content/videos`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user videos:", error);
    throw new Error("Failed to fetch user videos");
  }
};

// Get user's own video by ID
export const getUserVideoById = async (id: string): Promise<VideoPost> => {
  try {
    const response = await api.get<VideoPost>(
      `${API_BASE_URL}/user-content/videos/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user video:", error);
    throw new Error("Failed to fetch user video");
  }
};

// Get user's video history
export const getUserVideoHistory = async (): Promise<VideoPost[]> => {
  try {
    const response = await api.get<VideoPost[]>(
      `${API_BASE_URL}/user-content/video_history`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching video history:", error);
    throw new Error("Failed to fetch video history");
  }
};

// Delete video from history
export const deleteVideoFromHistory = async (
  historyId: string
): Promise<void> => {
  try {
    await api.delete(`${API_BASE_URL}/video_history/${historyId}`);
  } catch (error) {
    console.error("Error deleting video from history:", error);
    throw new Error("Failed to delete video from history");
  }
};

// VIDEO COMMENTS

// Get comments for a video
export const getVideoComments = async (
  videoId: string
): Promise<VideoComment[]> => {
  try {
    const response = await api.get<VideoComment[]>(
      `${API_BASE_URL}/video_comments/${videoId}`
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
      `${API_BASE_URL}/video_comments/${videoId}`,
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
    await api.patch(`${API_BASE_URL}/video_comments/${commentId}/${endpoint}`);
  } catch (error) {
    console.error("Error toggling video comment like:", error);
    throw new Error("Failed to update video comment like status");
  }
};

// VIDEO REPLIES

// Get replies for a video comment
export const getVideoReplies = async (
  commentId: number
): Promise<VideoComment[]> => {
  try {
    const response = await api.get<VideoComment[]>(
      `${API_BASE_URL}/video_replies/${commentId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching video replies:", error);
    throw new Error("Failed to fetch video replies");
  }
};

// Create a reply to a video comment
export const createVideoReply = async (
  commentId: number,
  description: string
): Promise<VideoComment> => {
  try {
    const response = await api.post<VideoComment>(
      `${API_BASE_URL}/video_replies/${commentId}`,
      {
        description,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating video reply:", error);
    throw new Error("Failed to create video reply");
  }
};

// Like/unlike a video reply
export const toggleVideoReplyLike = async (
  replyId: number,
  isLiked: boolean
): Promise<void> => {
  try {
    const endpoint = isLiked ? "unlike" : "like";
    await api.patch(`${API_BASE_URL}/video_replies/${replyId}/${endpoint}`);
  } catch (error) {
    console.error("Error toggling video reply like:", error);
    throw new Error("Failed to update video reply like status");
  }
};

// VIDEO EXERCISES

// Get exercises for a video
export const getVideoExercises = async (
  videoId: string
): Promise<unknown[]> => {
  try {
    const response = await api.get<unknown[]>(
      `${API_BASE_URL}/videos/${videoId}/exercise`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching video exercises:", error);
    throw new Error("Failed to fetch video exercises");
  }
};

// Update video exercises
export const updateVideoExercises = async (
  videoId: string,
  exercises: unknown[]
): Promise<void> => {
  try {
    await api.put(`${API_BASE_URL}/videos/${videoId}/exercise`, {
      questions: exercises,
    });
  } catch (error) {
    console.error("Error updating video exercises:", error);
    throw new Error("Failed to update video exercises");
  }
};
