import { User } from "./user";

export interface Notification {
  _id: string;
  type: "like" | "follow" | "reply" | "repost";
  sender: User;
  read: boolean;
  createdAt: string;
}