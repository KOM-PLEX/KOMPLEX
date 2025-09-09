import { Blog } from "@/types/content/blogs";
import api from "@/config/axios";

// Save/unsave a blog post
export const toggleBlogSave = async (
  id: string,
  isSaved: boolean
): Promise<void> => {
  try {
    const endpoint = isSaved ? "unsave" : "save";
    await api.patch(`/me/blogs/${id}/${endpoint}`);
  } catch (error) {
    console.error("Error toggling blog save:", error);
    throw new Error("Failed to update blog save status");
  }
};

// Create a new blog post
export const createBlog = async (formData: FormData): Promise<Blog> => {
  try {
    const response = await api.post(`/me/blogs`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error creating blog:", error);
    throw new Error("Failed to create blog post");
  }
};

// Update a blog post
export const updateBlog = async (
  id: string,
  formData: FormData
): Promise<Blog> => {
  try {
    const response = await api.put(`/me/blogs/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error updating blog:", error);
    throw new Error("Failed to update blog post");
  }
};

// Delete a blog post
export const deleteBlog = async (id: string): Promise<void> => {
  try {
    await api.delete(`/me/blogs/${id}`);
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw new Error("Failed to delete blog post");
  }
};

// Get user's saved blogs // TODO: Implement this
// export const getSavedBlogs = async (): Promise<Blog[]> => {
//   try {
//     const response = await api.get(`/me/blogs/saved`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching saved blogs:", error);
//     throw new Error("Failed to fetch saved blogs");
//   }
// };

// Get user's own blogs
export const getUserBlogs = async (): Promise<{
  blogs: Blog[];
}> => {
  try {
    const response = await api.get(`/me/blogs`);
    return { blogs: response.data.data };
  } catch (error) {
    console.error("Error fetching user blogs:", error);
    throw new Error("Failed to fetch user blogs");
  }
};
