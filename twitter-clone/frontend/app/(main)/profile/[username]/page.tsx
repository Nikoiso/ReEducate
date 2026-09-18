"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/lib/api";

import Loader from "@/components/ui/Loader";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileTabs from "@/components/profile/ProfileTabs";
import TweetCard from "@/components/tweet/TweetCard";
import EditProfileModal from "@/components/profile/EditProfileModal";
import MainLayout from "@/components/layout/MainLayout";
import { useAuth } from "@/hooks/useAuth";

import { User } from "@/types/user";
import { Tweet } from "@/types/tweet";

export default function ProfilePage() {
  const { user: currentUser } = useAuth();
  const params = useParams();

  const username = params.username as string;

  const [user, setUser] = useState<User | null>(null);
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (!username) return;

    const loadProfile = async () => {
      try {
        setLoading(true);

        const userResponse = await api.get<User>(`/users/${encodeURIComponent(username)}`);
        const foundUser = userResponse.data;

        setUser(foundUser);
        if (!foundUser) return;

        const postsResponse = await api.get(
          `/posts/user/${foundUser._id}`
        );

        const posts =
          postsResponse.data.posts ?? postsResponse.data;

        setTweets(posts);
      } catch (error) {
        console.error("Profile error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [username]);

  if (loading) {
    return <MainLayout><Loader /></MainLayout>;
  }

  if (!user) {
    return (
      <MainLayout><div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            User not found
          </h1>

          <p className="mt-2 text-gray-500">
            This profile does not exist.
          </p>
        </div>
      </div></MainLayout>
    );
  }

  return (
    <MainLayout><div>
      <ProfileHeader user={user} isOwnProfile={currentUser?._id === user._id} onEdit={() => setEditing(true)} />
      <EditProfileModal open={editing} onClose={() => setEditing(false)} user={user} onUpdated={() => window.location.reload()} />

      <ProfileTabs />

      <div>
        {tweets.length === 0 ? (
          <div className="px-6 py-12 text-center">
            <h2 className="text-xl font-bold">
              No posts yet
            </h2>

            <p className="mt-2 text-gray-500">
              {user.name} hasn&apos;t posted anything yet.
            </p>
          </div>
        ) : (
          tweets.map((tweet) => (
            <TweetCard
              key={tweet._id}
              tweet={tweet}
            />
          ))
        )}
      </div>
    </div></MainLayout>
  );
}
