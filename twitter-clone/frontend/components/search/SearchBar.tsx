"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const submit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!value.trim()) return;

    router.push(
      `/explore?q=${encodeURIComponent(value)}`
    );
  };

  return (
    <form onSubmit={submit}>
      <div className="flex h-[44px] items-center rounded-full bg-gray-100 px-4">
        <span className="mr-3 text-gray-500">⌕</span>

        <input
          value={value}
          onChange={(event) =>
            setValue(event.target.value)
          }
          placeholder="Search"
          className="w-full bg-transparent outline-none"
        />
      </div>
    </form>
  );
}