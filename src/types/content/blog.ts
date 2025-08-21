import { Media } from "./media";

export interface Blog {
  id: number;
  username: string;
  title: string;
  type: string;
  topic: string;
  description: string;
  viewCount: number;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  media: Media[];
}
