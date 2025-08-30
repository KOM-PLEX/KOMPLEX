import { Comment } from "./comments";

export interface VideoPost {
  id: number;
  userId: number;
  title: string;
  description: string;
  duration: number;
  videoUrl: string;
  thumbnailUrl: string;
  videoUrlForDeletion: string;
  thumbnailUrlForDeletion: string;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
  username: string;
  isSave: boolean;
  isLike: boolean;
  likeCount: number;
  saveCount: number;
}

export interface VideoComment extends Comment {
  videoId: number;
}

export interface VideoHistory {
  id: number;
  videoId: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  thumbnailUrl: string;
}
