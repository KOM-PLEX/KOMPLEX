import { VideoHistory } from "@/types/content/videos";
import api from "@/config/axios";

// Get user's video history
export const getUserVideoHistory = async (): Promise<VideoHistory[]> => {
  try {
    const response = await api.get<{ data: VideoHistory[] }>(`/me/video-history`);
    return response.data.data;
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
    await api.delete(`/me/video-history/${historyId}`);
  } catch (error) {
    console.error("Error deleting video from history:", error);
    throw new Error("Failed to delete video from history");
  }
};
