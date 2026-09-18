export interface UserSummary { _id: string; name: string; username: string; avatar?: string; }
export interface User extends UserSummary { bio?: string; coverImage?: string; followers: Array<string | UserSummary>; following: Array<string | UserSummary>; }
export interface AuthResponse { token: string; user: User | { id: string; name: string; username: string; avatar?: string; bio?: string }; }
