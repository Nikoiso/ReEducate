"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import MainLayout from "@/components/layout/MainLayout";
import SearchBar from "@/components/search/SearchBar";
import UserResult from "@/components/search/UserResult";
import TweetResult from "@/components/search/TweetResult";
import Loader from "@/components/ui/Loader";
import api from "@/lib/api";
import { User } from "@/types/user";
import { Tweet } from "@/types/tweet";

export default function ExplorePage() {
  const params = useSearchParams();
  const query = params.get("q");

  const [users, setUsers] = useState<User[]>([]);
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) { const timer = window.setTimeout(() => { setUsers([]); setTweets([]); }, 0); return () => window.clearTimeout(timer); }

    const search = async () => {
      try {
        setLoading(true);

        const [usersResponse, postsResponse] = await Promise.all([
          api.get<User[]>(`/users/search?q=${encodeURIComponent(query)}`),
          api.get<Tweet[]>(`/posts/search?q=${encodeURIComponent(query)}`),
        ]);
        setUsers(usersResponse.data);
        setTweets(postsResponse.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    search();
  }, [query]);

  return (
    <MainLayout>
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white px-4 py-2">
        <SearchBar />
      </div>

      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold">
          Explore
        </h1>
      </div>

      {loading && <Loader />}

      {users.map((user) => (
        <UserResult
          key={user._id}
          user={user}
        />
      ))}
      {tweets.map((tweet) => <TweetResult key={tweet._id} tweet={tweet} />)}
    </MainLayout>
  );
}
