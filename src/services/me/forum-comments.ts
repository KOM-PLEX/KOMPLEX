import api from "@/config/axios";
import { ForumComment } from "@/types/content/forums";

// Create a comment on a forum post
export const createForumComment = async (
    forumId: string,
    description: string
  ): Promise<ForumComment> => {
    try {
      const response = await api.post(
        `/me/forum_comments/${forumId}`,
        {
          description,
        }
      );
      return response.data.data;
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
        `/me/forum_comments/${commentId}/${endpoint}`
      );
    } catch (error) {
      console.error("Error toggling forum comment like:", error);
      throw new Error("Failed to update forum comment like status");
    }
  };