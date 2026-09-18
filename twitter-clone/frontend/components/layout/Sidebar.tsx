"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

const navigation = [
  {
    name: "Home",
    icon: "⌂",
    href: "/home",
  },
  {
    name: "Explore",
    icon: "⌕",
    href: "/explore",
  },
  {
    name: "Notifications",
    icon: "♧",
    href: "/notifications",
  },
  {
    name: "Messages",
    icon: "✉",
    href: "/messages",
  },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  return (
    <aside className="sticky top-0 hidden h-screen w-[275px] shrink-0 px-3 lg:block">
      <div className="flex h-full flex-col">
        <div className="px-3 py-3">
          <Link
            href="/home"
            className="flex h-12 w-12 items-center justify-center rounded-full text-3xl font-bold transition hover:bg-gray-100"
          >
            𝕏
          </Link>
        </div>

        <nav className="flex flex-col">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-5 rounded-full px-4 py-3 text-xl transition hover:bg-gray-100"
            >
              <span className="w-7 text-center">{item.icon}</span>

              <span>{item.name}</span>
            </Link>
          ))}

          <Link
            href={user ? `/profile/${user.username}` : "/home"}
            className="flex items-center gap-5 rounded-full px-4 py-3 text-xl transition hover:bg-gray-100"
          >
            <span className="w-7 text-center">♙</span>
            <span>Profile</span>
          </Link>
        </nav>

        <button className="mt-5 w-full rounded-full bg-black py-3.5 text-lg font-bold text-white transition hover:bg-gray-800">
          Post
        </button>

        <button onClick={logout} className="mt-auto mb-4 flex items-center gap-3 rounded-full p-3 text-left hover:bg-gray-100">
          <div className="h-10 w-10 rounded-full bg-gray-300" />

          <div className="min-w-0">
            <p className="truncate font-bold">{user?.name}</p>
            <p className="truncate text-gray-500">@{user?.username}</p>
          </div>

          <span className="ml-auto">•••</span>
        </button>
      </div>
    </aside>
  );
}
