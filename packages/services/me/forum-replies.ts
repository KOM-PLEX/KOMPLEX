import { ForumReply } from "../../types/content/forums";
import api from "../../config/axios";

export const createForumReply = async (
  commentId: number,
  description: string
): Promise<ForumReply> => {
  try {
    const response = await api.post(`/me/forum-replies/${commentId}`, {
      description,
    });
    return response.data.data;
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
    await api.patch(`/me/forum-replies/${replyId}/${endpoint}`);
  } catch (error) {
    console.error("Error toggling forum reply like:", error);
    throw new Error("Failed to update forum reply like status");
  }
};
