"use client";

import Avatar from "../ui/Avatar";
import Button from "../ui/Button";
import FollowButton from "./FollowButton";
import { User } from "@/types/user";

interface Props {
  user: User;
  isOwnProfile: boolean;
  onEdit?: () => void;
}

export default function ProfileHeader({
  user,
  isOwnProfile,
  onEdit,
}: Props) {
  return (
    <div>
      <div className="h-[200px] bg-gray-300">
        {user.coverImage && (
          <img
            src={user.coverImage}
            alt=""
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div className="relative px-4">
        <div className="-mt-16 flex items-end justify-between">
          <Avatar
            src={user.avatar}
            alt={user.name}
            size="lg"
          />

          {isOwnProfile ? (
            <Button
              onClick={onEdit}
              className="bg-white text-black ring-1 ring-gray-300 hover:bg-gray-100"
            >
              Edit profile
            </Button>
          ) : (
            <FollowButton user={user} />
          )}
        </div>

        <div className="mt-3">
          <h1 className="text-xl font-bold">
            {user.name}
          </h1>

          <p className="text-gray-500">
            @{user.username}
          </p>

          {user.bio && (
            <p className="mt-3 whitespace-pre-wrap">
              {user.bio}
            </p>
          )}

          <div className="mt-3 flex gap-5">
            <span>
              <b>{user.following.length}</b>{" "}
              <span className="text-gray-500">
                Following
              </span>
            </span>

            <span>
              <b>{user.followers.length}</b>{" "}
              <span className="text-gray-500">
                Followers
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
