export interface Media {
  url: string;
  type: "image" | "video";
}

export interface ForumPost {
  id: number;
  userId: number;
  title: string;
  description: string;
  type: "discussion" | "question" | "announcement";
  topic: "math" | "physics" | "chemistry" | "biology" | "general";
  viewCount: number;
  createdAt: string;
  updatedAt: string;
  media: Media[];
  username: string;
  isLike: boolean;
}

export interface TransformedForumPost {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  time: string;
  title: string;
  content: string;
  image?: string[];
  upvotes: number;
  comments: number;
  upvoted: boolean;
  category: string;
}
