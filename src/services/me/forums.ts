import { ForumPost } from "@/types/content/forums";
import api from "@/config/axios";

// Create a new forum post
export const createForum = async (
  forumData: Partial<ForumPost>
): Promise<ForumPost> => {
  try {
    const response = await api.post(`/me/forums`, forumData);
    return response.data.data;
  } catch (error) {
    console.error("Error creating forum:", error);
    throw new Error("Failed to create forum post");
  }
};

// Update a forum post
export const updateForum = async (
  id: string,
  forumData: Partial<ForumPost>
): Promise<ForumPost> => {
  try {
    const response = await api.put(`/me/forums/${id}`, forumData);
    return response.data.data;
  } catch (error) {
    console.error("Error updating forum:", error);
    throw new Error("Failed to update forum post");
  }
};

// Delete a forum post
export const deleteForum = async (id: string): Promise<void> => {
  try {
    await api.delete(`/me/forums/${id}`);
  } catch (error) {
    console.error("Error deleting forum:", error);
    throw new Error("Failed to delete forum post");
  }
};

// Like/unlike a forum post
export const toggleForumLike = async (
  id: string,
  isLiked: boolean
): Promise<void> => {
  try {
    const endpoint = isLiked ? "unlike" : "like";
    await api.patch(`/me/forums/${id}/${endpoint}`);
  } catch (error) {
    console.error("Error toggling forum like:", error);
    throw new Error("Failed to update forum like status");
  }
};

// Get user's own forum posts
export const getUserForums = async (): Promise<ForumPost[]> => {
  try {
    const response = await api.get(`/me/forums`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user forums:", error);
    throw new Error("Failed to fetch user forums");
  }
};

// Get user's own forum post by ID
export const getUserForumById = async (id: string): Promise<ForumPost> => {
  try {
    const response = await api.get(`/me/forums/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user forum:", error);
    throw new Error("Failed to fetch user forum");
  }
};
