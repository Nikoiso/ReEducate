"use client";

interface TweetActionsProps {
  likes: number;
  replies: number;
  reposts: number;
}

export default function TweetActions({
  likes,
  replies,
  reposts,
}: TweetActionsProps) {
  return (
    <div className="mt-3 flex max-w-[425px] justify-between text-gray-500">
      <button className="group flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full group-hover:bg-blue-50 group-hover:text-[#1d9bf0]">
          💬
        </span>
        <span className="text-sm">{replies}</span>
      </button>

      <button className="group flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full group-hover:bg-green-50 group-hover:text-green-500">
          🔁
        </span>
        <span className="text-sm">{reposts}</span>
      </button>

      <button className="group flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full group-hover:bg-pink-50 group-hover:text-pink-500">
          ♡
        </span>
        <span className="text-sm">{likes}</span>
      </button>

      <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-blue-50 hover:text-[#1d9bf0]">
        ↗
      </button>
    </div>
  );
}