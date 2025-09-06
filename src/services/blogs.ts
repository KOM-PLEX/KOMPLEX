import { Blog } from "@/types/content/blogs";
import api from "@/config/axios";

const API_BASE_URL = "http://localhost:6969";

// Get all blog posts
export const getAllBlogs = async (): Promise<{
  blogs: Blog[];
  hasMore: boolean;
}> => {
  try {
    const response = await api.get(`${API_BASE_URL}/blogs`);
    return {
      blogs: response.data.blogsWithMedia,
      hasMore: response.data.hasMore,
    };
  } catch (error) {
    console.error("Error fetching all blogs:", error);
    throw new Error("Failed to fetch blog posts");
  }
};

// Get a single blog post by ID
export const getBlogById = async (
  id: string
): Promise<Blog & { isSaved: boolean }> => {
  try {
    const response = await api.get(`${API_BASE_URL}/blogs/${id}`);
    return response.data.blogWithMedia;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw new Error("Failed to fetch blog post");
  }
};

// Save/unsave a blog post
export const toggleBlogSave = async (
  id: string,
  isSaved: boolean
): Promise<void> => {
  try {
    const endpoint = isSaved ? "unsave" : "save";
    await api.patch(`${API_BASE_URL}/user-content/blogs/${id}/${endpoint}`);
  } catch (error) {
    console.error("Error toggling blog save:", error);
    throw new Error("Failed to update blog save status");
  }
};

// Create a new blog post
export const createBlog = async (blogData: Partial<Blog>): Promise<Blog> => {
  try {
    const response = await api.post(`${API_BASE_URL}/blogs`, blogData);
    return response.data.newBlog;
  } catch (error) {
    console.error("Error creating blog:", error);
    throw new Error("Failed to create blog post");
  }
};

// Update a blog post
export const updateBlog = async (
  id: string,
  blogData: Partial<Blog>
): Promise<Blog> => {
  try {
    const response = await api.put(`${API_BASE_URL}/blogs/${id}`, blogData);
    return response.data.updatedBlog;
  } catch (error) {
    console.error("Error updating blog:", error);
    throw new Error("Failed to update blog post");
  }
};

// Delete a blog post
export const deleteBlog = async (id: string): Promise<void> => {
  try {
    await api.delete(`${API_BASE_URL}/user-content/blogs/${id}`);
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw new Error("Failed to delete blog post");
  }
};

// Get user's saved blogs
export const getSavedBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await api.get(
      `${API_BASE_URL}/user-content/blogs/saved`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching saved blogs:", error);
    throw new Error("Failed to fetch saved blogs");
  }
};

// Get user's own blogs
export const getUserBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await api.get(
      `${API_BASE_URL}/user-content/blogs/my-blogs`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user blogs:", error);
    throw new Error("Failed to fetch user blogs");
  }
};
