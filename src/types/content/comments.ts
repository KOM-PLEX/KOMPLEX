import { Media } from "./media";

export interface Comment {
    id: number;
    userId: number;
    description: string;
    createdAt: string;
    updatedAt: string;
    media: Media[];
    username: string;
    isLike: boolean;
  }