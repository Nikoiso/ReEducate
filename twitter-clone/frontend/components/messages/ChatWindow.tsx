"use client";

import { useEffect, useState } from "react";

import MessageInput from "./MessageInput";
import MessageBubble from "./MessageBubble";
import Avatar from "../ui/Avatar";

import api from "@/lib/api";
import { socket } from "@/lib/socket";

import {
  Conversation,
  Message,
} from "@/types/message";

interface Props {
  conversation: Conversation | null;
  currentUserId: string;
}

export default function ChatWindow({
  conversation,
  currentUserId,
}: Props) {
  const [messages, setMessages] = useState<Message[]>(
    []
  );

  useEffect(() => {
    if (!conversation) return;

    const fetchMessages = async () => {
      try {
        const { data } = await api.get(
          `/messages/${conversation._id}`
        );

        setMessages(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();

    socket.emit(
      "joinConversation",
      conversation._id
    );

    const handleMessage = (message: Message) => {
      if (
        message.conversation === conversation._id
      ) {
        setMessages((prev) => [
          ...prev,
          message,
        ]);
      }
    };

    socket.on("newMessage", handleMessage);

    return () => {
      socket.off("newMessage", handleMessage);
    };
  }, [conversation]);

  if (!conversation) {
    return (
      <div className="hidden flex-1 items-center justify-center md:flex">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Select a message
          </h2>

          <p className="mt-2 text-gray-500">
            Choose a conversation to start chatting.
          </p>
        </div>
      </div>
    );
  }

  const otherUser = conversation.participants.find(
    (user) => user._id !== currentUserId
  );

  const sendMessage = (text: string) => {
    socket.emit("sendMessage", {
      conversationId: conversation._id,
      text,
    });
  };

  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center gap-3 border-b border-gray-200 px-4 py-3">
        <Avatar
          src={otherUser?.avatar}
          alt={otherUser?.name}
        />

        <div>
          <p className="font-bold">
            {otherUser?.name}
          </p>

          <p className="text-sm text-gray-500">
            @{otherUser?.username}
          </p>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-4">
        {messages.map((message) => (
          <MessageBubble
            key={message._id}
            message={message}
            currentUserId={currentUserId}
          />
        ))}
      </div>

      <MessageInput onSend={sendMessage} />
    </div>
  );
}