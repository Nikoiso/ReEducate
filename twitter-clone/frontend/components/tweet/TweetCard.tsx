"use client";
import Link from "next/link";
import { Heart, MessageCircle, Repeat2, Trash2 } from "lucide-react";
import Avatar from "../ui/Avatar";
import TweetImage from "./TweetImage";
import { formatCount, formatDate, getTweetImages } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import api from "@/lib/api";
import type { Tweet } from "@/types/tweet";
interface TweetCardProps { tweet: Tweet; onLike?: () => void; onRepost?: () => void; onDelete?: () => void; }
export default function TweetCard({ tweet, onLike, onRepost, onDelete }: TweetCardProps) {
  const { user } = useAuth();
  const isLiked = tweet.likes.some((like) => (typeof like === "string" ? like : like._id) === user?._id);
  const isReposted = tweet.reposts.some((repost) => (typeof repost === "string" ? repost : repost._id) === user?._id);
  const remove = async () => { if (!confirm("Delete this post?")) return; await api.delete(`/posts/${tweet._id}`); onDelete?.(); };
  return (
    <article className="border-b border-gray-200 px-4 py-3 transition hover:bg-gray-50">
      <div className="flex gap-3">
        <Link href={`/profile/${tweet.author.username}`}><Avatar src={tweet.author.avatar} alt={tweet.author.name} /></Link>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <Link href={`/profile/${tweet.author.username}`} className="font-bold hover:underline">{tweet.author.name}</Link>

            <span className="text-gray-500">
              @{tweet.author.username}
            </span>

            <span className="text-gray-500">·</span>

            <span className="text-gray-500">{formatDate(tweet.createdAt)}</span>
            {user?._id === tweet.author._id && <button onClick={() => void remove()} className="ml-auto text-gray-500" aria-label="Delete post"><Trash2 size={16} /></button>}
          </div>

          <p className="mt-1 whitespace-pre-wrap break-words text-[15px] leading-5">
            <Link href={`/post/${tweet._id}`}>{tweet.text}</Link>
          </p>
          <TweetImage images={getTweetImages(tweet)} />
          <div className="mt-3 flex max-w-[425px] justify-between text-gray-500"><Link href={`/post/${tweet._id}`} className="flex items-center gap-1"><MessageCircle size={18} />Reply</Link><button onClick={onRepost} className={isReposted ? "flex items-center gap-1 text-green-600" : "flex items-center gap-1"}><Repeat2 size={18} />{formatCount(tweet.reposts.length)}</button><button onClick={onLike} className={isLiked ? "flex items-center gap-1 text-pink-600" : "flex items-center gap-1"}><Heart size={18} fill={isLiked ? "currentColor" : "none"} />{formatCount(tweet.likes.length)}</button></div>
        </div>
      </div>
    </article>
  );
}
