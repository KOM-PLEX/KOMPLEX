import api from "../../config/axios";
import { Blog } from "../../types/content/blogs";

export const getUserBlogs = async (userId: string): Promise<Blog[]> => {
  try {
    const response = await api.get<{ data: Blog[] }>(`/users/${userId}/blogs`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user blogs:", error);
    throw new Error("Failed to fetch user blogs");
  }
};
