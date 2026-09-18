"use client";

import { useState } from "react";

interface Props {
  onSend: (text: string) => void;
}

export default function MessageInput({
  onSend,
}: Props) {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;

    onSend(text.trim());

    setText("");
  };

  return (
    <div className="flex gap-2 border-t border-gray-200 p-3">
      <input
        value={text}
        onChange={(event) =>
          setText(event.target.value)
        }
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            submit();
          }
        }}
        placeholder="Start a new message"
        className="flex-1 rounded-full bg-gray-100 px-4 py-3 outline-none"
      />

      <button
        onClick={submit}
        className="rounded-full bg-[#1d9bf0] px-5 font-bold text-white"
      >
        Send
      </button>
    </div>
  );
}