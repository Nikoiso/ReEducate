import Avatar from "../ui/Avatar";
import { Notification } from "@/types/notification";

export default function NotificationCard({
  notification,
}: {
  notification: Notification;
}) {
  const text = {
    like: "liked your post",
    follow: "followed you",
    reply: "replied to your post",
    repost: "reposted your post",
  };

  return (
    <div
      className={`flex gap-3 border-b border-gray-200 px-4 py-4 ${
        !notification.read ? "bg-blue-50" : ""
      }`}
    >
      <Avatar
        src={notification.sender.avatar}
        alt={notification.sender.name}
      />

      <div>
        <p>
          <b>{notification.sender.name}</b>{" "}
          {text[notification.type]}
        </p>

        <p className="text-sm text-gray-500">
          @{notification.sender.username}
        </p>
      </div>
    </div>
  );
}