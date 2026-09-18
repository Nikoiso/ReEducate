import Link from "next/link";
import Avatar from "../ui/Avatar";
import { Tweet } from "@/types/tweet";
import { formatDate } from "@/lib/utils";

export default function ReplyCard({
  tweet,
}: {
  tweet: Tweet;
}) {
  return (
    <div className="border-b border-gray-200 px-4 py-3">
      <div className="flex gap-3">
        <Avatar
          src={tweet.author.avatar}
          alt={tweet.author.name}
        />

        <div>
          <div className="flex gap-1">
            <Link
              href={`/profile/${tweet.author.username}`}
              className="font-bold"
            >
              {tweet.author.name}
            </Link>

            <span className="text-gray-500">
              @{tweet.author.username}
            </span>

            <span className="text-gray-500">
              · {formatDate(tweet.createdAt)}
            </span>
          </div>

          <p className="mt-1">
            {tweet.text}
          </p>
        </div>
      </div>
    </div>
  );
}