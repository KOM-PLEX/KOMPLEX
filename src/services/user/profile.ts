import api from "@/config/axios";

export interface User {
  id: number;
  uid: string;
  username: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string | null;
  isAdmin: boolean;
  isVerified: boolean;
  isSocial: boolean;
  email: string;
  phone: string;
  profileImage: string;
  profileImageKey: string | null;
  createdAt: string;
  updatedAt: string;
  // Additional fields for UI
  bio?: string;
  location?: string;
  isFollowing?: boolean;
  followersCount?: number;
  followingCount?: number;
  stats?: {
    blogs: number;
    videos: number;
    forums: number;
    exercises: number;
  };
}

export const getUserProfile = async (userId: string): Promise<User> => {
  try {
    const response = await api.get<{ data: User }>(`/users/${userId}/profile`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw new Error("Failed to fetch user profile");
  }
};

export const followUser = async (userId: string): Promise<void> => {
  try {
    await api.post(`/users/${userId}/follow`);
  } catch (error) {
    console.error("Error following user:", error);
    throw new Error("Failed to follow user");
  }
};

export const unfollowUser = async (userId: string): Promise<void> => {
  try {
    await api.delete(`/users/${userId}/follow`);
  } catch (error) {
    console.error("Error unfollowing user:", error);
    throw new Error("Failed to unfollow user");
  }
};
