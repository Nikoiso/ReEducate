"use client";
import ConversationItem from "./ConversationItem";
import type { Conversation } from "@/types/message";
interface Props { conversations: Conversation[]; currentUserId: string; selectedId?: string; onSelect: (conversation: Conversation) => void; }
export default function ConversationList({ conversations, currentUserId, selectedId, onSelect }: Props) {
  return <aside className="w-full shrink-0 border-r border-gray-200 md:w-[320px]"><h1 className="border-b border-gray-200 px-4 py-4 text-xl font-bold">Messages</h1>{conversations.length ? conversations.map((conversation) => <ConversationItem key={conversation._id} conversation={conversation} currentUserId={currentUserId} active={selectedId === conversation._id} onClick={() => onSelect(conversation)} />) : <p className="p-4 text-gray-500">No conversations yet.</p>}</aside>;
}
