import { ForumReply } from "@/types/content/forums";
import api from "@/config/axios";

// Get replies for a forum comment
export const getForumReplies = async (
  commentId: number
): Promise<ForumReply[]> => {
  try {
    const response = await api.get(`/feed/forum-replies/${commentId}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching forum replies:", error);
    throw new Error("Failed to fetch forum replies");
  }
};
