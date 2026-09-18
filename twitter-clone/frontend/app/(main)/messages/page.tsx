"use client";

import { useEffect, useState } from "react";

import MainLayout from "@/components/layout/MainLayout";
import ConversationList from "@/components/messages/ConversationList";
import ChatWindow from "@/components/messages/ChatWindow";
import Loader from "@/components/ui/Loader";

import api from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";
import { useSocket } from "@/hooks/useSocket";

import { Conversation } from "@/types/message";

export default function MessagesPage() {
  const { user } = useAuth();

  useSocket();

  const [conversations, setConversations] =
    useState<Conversation[]>([]);

  const [selected, setSelected] =
    useState<Conversation | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchConversations = async () => {
      try {
        const { data } = await api.get(
          "/messages/conversations"
        );

        setConversations(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, [user]);

  return (
    <MainLayout>
      <div className="flex h-screen">
        {loading ? (
          <Loader />
        ) : (
          <>
            <ConversationList
              conversations={conversations}
              currentUserId={user?._id || ""}
              selectedId={selected?._id}
              onSelect={setSelected}
            />

            <ChatWindow
              conversation={selected}
              currentUserId={user?._id || ""}
            />
          </>
        )}
      </div>
    </MainLayout>
  );
}