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
    numberOfFollowers: number;
    numberOfFollowing: number;
    totalLikesAndSaves: number;
    // Additional fields for UI
    bio?: string;
    location?: string;
    isFollowing?: boolean;
    stats?: {
      blogs: number;
      videos: number;
      forums: number;
      exercises: number;
    };
  }