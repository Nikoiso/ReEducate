import Link from "next/link";
import Avatar from "@/components/ui/Avatar";
import type { User } from "@/types/user";
export default function UserResult({ user }: { user: User }) { return <Link href={`/profile/${user.username}`} className="flex gap-3 border-b border-gray-200 px-4 py-3 hover:bg-gray-50"><Avatar src={user.avatar} alt={user.name} /><div><p className="font-bold">{user.name}</p><p className="text-gray-500">@{user.username}</p>{user.bio && <p className="mt-1 text-sm">{user.bio}</p>}</div></Link>; }
