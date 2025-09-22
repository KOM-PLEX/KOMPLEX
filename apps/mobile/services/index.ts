import api from "@/configs/axios";

// Import all service creators
import { createAuthService } from "@core-services/auth";
import { createUploadService } from "@core-services/upload";

// Feed services
import { createFeedBlogService } from "@core-services/feed/blogs";
import { createFeedExerciseService } from "@core-services/feed/exercises";
import { createFeedForumService } from "@core-services/feed/forums";
import { createFeedVideoService } from "@core-services/feed/videos";
import { createFeedForumCommentService } from "@core-services/feed/forum-comments";
import { createFeedForumReplyService } from "@core-services/feed/forum-replies";
import { createFeedVideoCommentService } from "@core-services/feed/video-comments";
import { createFeedVideoReplyService } from "@core-services/feed/video-replies";
import { createFeedSearchBlogService } from "@core-services/feed/search/blogs";
import { createFeedSearchForumService } from "@core-services/feed/search/forums";
import { createFeedSearchVideoService } from "@core-services/feed/search/videos";

// Me services
import { createMeBlogService } from "@core-services/me/blogs";
import { createMeAiService } from "@core-services/me/ai";
import { createMeExerciseService } from "@core-services/me/exercises";
import { createMeFollowService } from "@core-services/me/follow";
import { createMeForumService } from "@core-services/me/forums";
import { createMeForumCommentService } from "@core-services/me/forum-comments";
import { createMeForumReplyService } from "@core-services/me/forum-replies";
import { createMeVideoService } from "@core-services/me/videos";
import { createMeVideoCommentService } from "@core-services/me/video-comments";
import { createMeVideoReplyService } from "@core-services/me/video-replies";
import { createMeVideoHistoryService } from "@core-services/me/video-history";

// User services
import { createUserBlogService } from "@core-services/user/blogs";
import { createUserForumService } from "@core-services/user/forums";
import { createUserProfileService } from "@core-services/user/profile";
import { createUserVideoService } from "@core-services/user/videos";

// Create service instances with the axios instance
export const authService = createAuthService(api);
export const uploadService = createUploadService(api);

// Feed services
export const feedBlogService = createFeedBlogService(api);
export const feedExerciseService = createFeedExerciseService(api);
export const feedForumService = createFeedForumService(api);
export const feedVideoService = createFeedVideoService(api);
export const feedForumCommentService = createFeedForumCommentService(api);
export const feedForumReplyService = createFeedForumReplyService(api);
export const feedVideoCommentService = createFeedVideoCommentService(api);
export const feedVideoReplyService = createFeedVideoReplyService(api);
export const feedSearchBlogService = createFeedSearchBlogService(api);
export const feedSearchForumService = createFeedSearchForumService(api);
export const feedSearchVideoService = createFeedSearchVideoService(api);

// Me services
export const meBlogService = createMeBlogService(api);
export const meAiService = createMeAiService(api);
export const meExerciseService = createMeExerciseService(api);
export const meFollowService = createMeFollowService(api);
export const meForumService = createMeForumService(api);
export const meForumCommentService = createMeForumCommentService(api);
export const meForumReplyService = createMeForumReplyService(api);
export const meVideoService = createMeVideoService(api);
export const meVideoCommentService = createMeVideoCommentService(api);
export const meVideoReplyService = createMeVideoReplyService(api);
export const meVideoHistoryService = createMeVideoHistoryService(api);

// User services
export const userBlogService = createUserBlogService(api);
export const userForumService = createUserForumService(api);
export const userProfileService = createUserProfileService(api);
export const userVideoService = createUserVideoService(api);
