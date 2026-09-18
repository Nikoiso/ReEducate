"use client";

import { useEffect, useState } from "react";

import MainLayout from "@/components/layout/MainLayout";
import NotificationCard from "@/components/notifications/NotificationCard";
import Loader from "@/components/ui/Loader";
import api from "@/lib/api";
import { Notification } from "@/types/notification";

export default function NotificationsPage() {
  const [notifications, setNotifications] =
    useState<Notification[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await api.get(
          "/notifications"
        );

        setNotifications(data);
        await api.put("/notifications/read");
        setNotifications((current) => current.map((notification) => ({ ...notification, read: true })));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <MainLayout>
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 px-4 py-3 backdrop-blur">
        <h1 className="text-xl font-bold">
          Notifications
        </h1>
      </header>

      {loading ? (
        <Loader />
      ) : (
        notifications.map((notification) => (
          <NotificationCard
            key={notification._id}
            notification={notification}
          />
        ))
      )}
    </MainLayout>
  );
}
