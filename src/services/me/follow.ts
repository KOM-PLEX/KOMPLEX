import api from "@/config/axios";

export const followUser = async (userId: number): Promise<void> => {
  const response = await api.post(`/me/follow/follow/${userId}`);
  return response.data;
};

export const unfollowUser = async (userId: number): Promise<void> => {
  const response = await api.post(`/me/follow/unfollow/${userId}`);
  return response.data;
};
