import api from "@/config/axios";
import { VideoPost } from "@/types/content/videos";

// Create a new video
export const createVideo = async (
  videoData: Partial<VideoPost>
): Promise<VideoPost> => {
  try {
    const response = await api.post<VideoPost>(`/me/videos`, videoData);
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
    const response = await api.put<VideoPost>(`/me/videos/${id}`, videoData);
    return response.data;
  } catch (error) {
    console.error("Error updating video:", error);
    throw new Error("Failed to update video");
  }
};

// Delete a video
export const deleteVideo = async (id: string): Promise<void> => {
  try {
    await api.delete(`/me/videos/${id}`);
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
    await api.patch(`/me/videos/${id}/${endpoint}`);
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
    await api.patch(`/me/videos/${id}/${endpoint}`);
  } catch (error) {
    console.error("Error toggling video save:", error);
    throw new Error("Failed to update video save status");
  }
};

// USER CONTENT VIDEOS

// Get user's own videos
export const getUserVideos = async (): Promise<VideoPost[]> => {
  try {
    const response = await api.get<VideoPost[]>(`/me/videos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user videos:", error);
    throw new Error("Failed to fetch user videos");
  }
};

// Get user's video history
export const getUserVideoHistory = async (): Promise<VideoPost[]> => {
  try {
    const response = await api.get<VideoPost[]>(`/me/video_history`);
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
    await api.delete(`/me/video_history/${historyId}`);
  } catch (error) {
    console.error("Error deleting video from history:", error);
    throw new Error("Failed to delete video from history");
  }
};

export const updateVideoExercises = async (
  videoId: string,
  exercises: unknown[]
): Promise<void> => {
  try {
    await api.put(`/me/videos/${videoId}/exercise`, {
      questions: exercises,
    });
  } catch (error) {
    console.error("Error updating video exercises:", error);
    throw new Error("Failed to update video exercises");
  }
};
