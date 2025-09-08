import { Comment } from "./comments";

export interface ExerciseChoice {
  id: number;
  questionId: number;
  text: string;
  isCorrect: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ExerciseQuestion {
  id: number;
  exerciseId: number;
  userId: number | null;
  title: string;
  questionType: string;
  section: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  choices: ExerciseChoice[];
}

export interface VideoExercise {
  id: number;
  videoId: number;
  userId: number;
  duration: number;
  title: string;
  description: string;
  subject: string;
  grade: string;
  createdAt: string;
  updatedAt: string;
  questions: ExerciseQuestion[];
}

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
  exercises?: VideoExercise[];
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
