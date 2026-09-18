"use client";

import Link from "next/link";
import { MessageCircle, Repeat2, Heart, Share } from "lucide-react";
import { Tweet } from "@/types/tweet";
import Avatar from "@/components/ui/Avatar";
import { formatDate, formatCount, getTweetImages } from "@/lib/utils";

interface TweetResultProps {
  tweet: Tweet;
}

export default function TweetResult({ tweet }: TweetResultProps) {
  return (
    <article className="border-b border-gray-200 px-4 py-4 transition hover:bg-gray-50">
      <div className="flex gap-3">
        <Link href={`/profile/${tweet.author.username}`}>
          <Avatar
            src={tweet.author.avatar}
            alt={tweet.author.name}
            size="md"
          />
        </Link>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <Link
              href={`/profile/${tweet.author.username}`}
              className="font-bold hover:underline"
            >
              {tweet.author.name}
            </Link>

            <span className="text-gray-500">
              @{tweet.author.username}
            </span>

            <span className="text-gray-500">·</span>

            <span className="text-gray-500">
              {formatDate(tweet.createdAt)}
            </span>
          </div>

          <Link href={`/post/${tweet._id}`}>
            {tweet.text && (
              <p className="mt-1 whitespace-pre-wrap break-words text-[15px] leading-5">
                {tweet.text}
              </p>
            )}

            {getTweetImages(tweet).length > 0 && (
              <div className="mt-3">
                <div
                  className={`grid gap-1 overflow-hidden rounded-2xl ${
                    getTweetImages(tweet).length === 1
                      ? "grid-cols-1"
                      : "grid-cols-2"
                  }`}
                >
                  {getTweetImages(tweet).slice(0, 4).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Tweet image ${index + 1}`}
                      className="max-h-[350px] w-full object-cover"
                    />
                  ))}
                </div>
              </div>
            )}
          </Link>

          <div className="mt-3 flex max-w-[500px] justify-between text-gray-500">
            <div className="flex items-center gap-2">
              <MessageCircle size={18} />
              <span className="text-sm">
                {formatCount(tweet.replies?.length ?? 0)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Repeat2 size={18} />
              <span className="text-sm">
                {formatCount(tweet.reposts?.length ?? 0)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Heart size={18} />
              <span className="text-sm">
                {formatCount(tweet.likes?.length ?? 0)}
              </span>
            </div>

            <Share size={18} />
          </div>
        </div>
      </div>
    </article>
  );
}
