import type { UserSummary } from "./user";
export type TweetAuthor = UserSummary;
export interface Tweet { _id: string; text: string; image?: string; images?: string[]; author: TweetAuthor; likes: Array<string | UserSummary>; reposts: Array<string | UserSummary>; replies?: Array<string | Tweet>; parentPost?: string | null; createdAt: string; updatedAt: string; }
export interface PaginatedPostsResponse { page: number; posts: Tweet[]; }
