import api from "@/config/axios";
import { ForumPost, ForumComment, ForumReply } from "@/types/content/forums";

const API_BASE_URL = "http://localhost:6969";

// Get all forum posts
export const getAllForums = async (): Promise<{
  forums: ForumPost[];
  hasMore: boolean;
}> => {
  try {
    const response = await api.get(`${API_BASE_URL}/forums`);
    return {
      forums: response.data.forumsWithMedia,
      hasMore: response.data.hasMore || false,
    };
  } catch (error) {
    console.error("Error fetching all forums:", error);
    throw new Error("Failed to fetch forum posts");
  }
};

// Get a single forum post by ID
export const getForumById = async (id: string): Promise<ForumPost> => {
  try {
    const response = await api.get(`${API_BASE_URL}/forums/${id}`);
    return response.data.forum;
  } catch (error) {
    console.error("Error fetching forum post:", error);
    throw new Error("Failed to fetch forum post");
  }
};

// Create a new forum post
export const createForum = async (
  forumData: Partial<ForumPost>
): Promise<ForumPost> => {
  try {
    const response = await api.post(`${API_BASE_URL}/forums`, forumData);
    return response.data.newForum;
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
    const response = await api.put(`${API_BASE_URL}/forums/${id}`, forumData);
    return response.data.updatedForum;
  } catch (error) {
    console.error("Error updating forum:", error);
    throw new Error("Failed to update forum post");
  }
};

// Delete a forum post
export const deleteForum = async (id: string): Promise<void> => {
  try {
    await api.delete(`${API_BASE_URL}/forums/${id}`);
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
    await api.patch(`${API_BASE_URL}/forums/${id}/${endpoint}`);
  } catch (error) {
    console.error("Error toggling forum like:", error);
    throw new Error("Failed to update forum like status");
  }
};

// Get user's own forum posts
export const getUserForums = async (): Promise<ForumPost[]> => {
  try {
    const response = await api.get(`${API_BASE_URL}/forums`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user forums:", error);
    throw new Error("Failed to fetch user forums");
  }
};

// Get user's own forum post by ID
export const getUserForumById = async (id: string): Promise<ForumPost> => {
  try {
    const response = await api.get(`${API_BASE_URL}/forums/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user forum:", error);
    throw new Error("Failed to fetch user forum");
  }
};

// FORUM COMMENTS

// Get comments for a forum post
export const getForumComments = async (
  forumId: string
): Promise<ForumComment[]> => {
  try {
    const response = await api.get(
      `${API_BASE_URL}/forum_comments/${forumId}`
    );
    return response.data.commentsWithMedia;
  } catch (error) {
    console.error("Error fetching forum comments:", error);
    throw new Error("Failed to fetch forum comments");
  }
};

// Create a comment on a forum post
export const createForumComment = async (
  forumId: string,
  description: string
): Promise<ForumComment> => {
  try {
    const response = await api.post(
      `${API_BASE_URL}/forum_comments/${forumId}`,
      {
        description,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating forum comment:", error);
    throw new Error("Failed to create forum comment");
  }
};

// Like/unlike a forum comment
export const toggleForumCommentLike = async (
  commentId: number,
  isLiked: boolean
): Promise<void> => {
  try {
    const endpoint = isLiked ? "unlike" : "like";
    await api.patch(
      `${API_BASE_URL}/forum_comments/${commentId}/${endpoint}`
    );
  } catch (error) {
    console.error("Error toggling forum comment like:", error);
    throw new Error("Failed to update forum comment like status");
  }
};

// FORUM REPLIES

// Get replies for a forum comment
export const getForumReplies = async (
  commentId: number
): Promise<ForumReply[]> => {
  try {
    const response = await api.get(
      `${API_BASE_URL}/forum_replies/${commentId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching forum replies:", error);
    throw new Error("Failed to fetch forum replies");
  }
};

// Create a reply to a forum comment
export const createForumReply = async (
  commentId: number,
  description: string
): Promise<ForumReply> => {
  try {
    const response = await api.post(
      `${API_BASE_URL}/forum_replies/${commentId}`,
      {
        description,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating forum reply:", error);
    throw new Error("Failed to create forum reply");
  }
};

// Like/unlike a forum reply
export const toggleForumReplyLike = async (
  replyId: number,
  isLiked: boolean
): Promise<void> => {
  try {
    const endpoint = isLiked ? "unlike" : "like";
    await api.patch(`${API_BASE_URL}/forum_replies/${replyId}/${endpoint}`);
  } catch (error) {
    console.error("Error toggling forum reply like:", error);
    throw new Error("Failed to update forum reply like status");
  }
};
