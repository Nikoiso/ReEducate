"use client";

import MainLayout from "@/components/layout/MainLayout";
import TweetComposer from "@/components/tweet/TweetComposer";
import TweetCard from "@/components/tweet/TweetCard";
import Loader from "@/components/ui/Loader";
import EmptyState from "@/components/ui/EmptyState";
import { useState } from "react";
import { useTweets } from "@/hooks/useTweets";
import api from "@/lib/api";

export default function HomePage() {
  const {
    tweets,
    loading,
    refreshTweets,
  } = useTweets();
  const [feed, setFeed] = useState<"all" | "following">("all");
  const [feedTweets, setFeedTweets] = useState(tweets);

  const selectFeed = async (nextFeed: "all" | "following") => {
    setFeed(nextFeed);
    if (nextFeed === "all") {
      await refreshTweets();
      return;
    }
    try {
      const { data } = await api.get("/posts/following");
      setFeedTweets(data.posts);
    } catch (error) {
      console.error("Unable to load following feed", error);
    }
  };

  const displayedTweets = feed === "following" ? feedTweets : tweets;

  const handleLike = async (id: string) => {
    try {
      await api.post(`/posts/${id}/like`);
      refreshTweets();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRepost = async (id: string) => {
    try {
      await api.post(`/posts/${id}/repost`);
      refreshTweets();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="flex h-[53px]">
          <button onClick={() => void selectFeed("all")} className="relative flex-1 font-bold">
            For you

            <span className="absolute bottom-0 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-[#1d9bf0]" />
          </button>

          <button onClick={() => void selectFeed("following")} className={feed === "following" ? "flex-1 font-bold" : "flex-1 text-gray-500"}>
            Following
          </button>
        </div>
      </header>

      <TweetComposer onCreated={refreshTweets} />

      {loading ? (
        <Loader />
      ) : displayedTweets.length === 0 ? (
        <EmptyState
          title="No posts yet"
          description="Be the first person to post something."
        />
      ) : (
        displayedTweets.map((tweet) => (
          <TweetCard
            key={tweet._id}
            tweet={tweet}
            onLike={() => handleLike(tweet._id)}
            onRepost={() =>
              handleRepost(tweet._id)
            }
          />
        ))
      )}
    </MainLayout>
  );
}
