"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import api from "@/lib/api";
import { User } from "@/types/user";

interface FollowButtonProps {
  user: User;
}

export default function FollowButton({ user }: FollowButtonProps) {
  const { user: currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const isFollowing =
    currentUser?.following?.includes(user._id) ?? false;

  const handleFollow = async () => {
    if (!currentUser || currentUser._id === user._id || loading) return;

    try {
      setLoading(true);

      if (isFollowing) {
        await api.delete(`/users/${user._id}/follow`);
      } else {
        await api.post(`/users/${user._id}/follow`);
      }

      window.location.reload();
    } catch (error) {
      console.error("Follow error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!currentUser || currentUser._id === user._id) {
    return null;
  }

  return (
    <button
      onClick={handleFollow}
      disabled={loading}
      className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
        isFollowing
          ? "border border-gray-300 bg-white text-black hover:border-red-400 hover:bg-red-50 hover:text-red-500"
          : "bg-black text-white hover:bg-gray-800"
      }`}
    >
      {loading ? "Loading..." : isFollowing ? "Following" : "Follow"}
    </button>
  );
}