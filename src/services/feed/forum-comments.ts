import { ForumComment } from "@/types/content/forums";
import api from "@/config/axios";

// Get comments for a forum post
export const getForumComments = async (
    forumId: string
  ): Promise<ForumComment[]> => {
    try {
      const response = await api.get(
        `/feed/forum_comments/${forumId}`
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching forum comments:", error);
      throw new Error("Failed to fetch forum comments");
    }
  };
  
  