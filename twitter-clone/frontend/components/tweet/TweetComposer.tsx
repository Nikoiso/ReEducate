"use client";

import { useState } from "react";
import Avatar from "../ui/Avatar";
import Button from "../ui/Button";
import api from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";

export default function TweetComposer({
  onCreated,
}: {
  onCreated?: () => void;
}) {
  const { user } = useAuth();

  const [text, setText] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!text.trim() && images.length === 0) return;

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("text", text);

      if (images[0]) formData.append("image", images[0]);

      await api.post("/posts", formData);

      setText("");
      setImages([]);

      onCreated?.();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-b border-gray-200 px-4 py-4">
      <div className="flex gap-3">
        <Avatar src={user?.avatar} />

        <div className="min-w-0 flex-1">
          <textarea
            value={text}
            onChange={(event) =>
              setText(event.target.value)
            }
            placeholder="What is happening?!"
            rows={3}
            maxLength={280}
            className="w-full resize-none border-none bg-transparent pt-2 text-xl outline-none placeholder:text-gray-500"
          />

          {images.length > 0 && (
            <div className="mb-3 grid grid-cols-2 gap-1 overflow-hidden rounded-2xl">
              {images.map((image) => (
                <img
                  key={image.name}
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="max-h-60 w-full object-cover"
                />
              ))}
            </div>
          )}

          <div className="flex items-center justify-between border-t border-gray-100 pt-3">
            <label className="cursor-pointer text-xl text-[#1d9bf0]">
              ▧

              <input
                type="file"
                accept="image/*"
                multiple
                hidden
                onChange={(event) => {
                  const files = Array.from(
                    event.target.files || []
                  ).slice(0, 1);

                  setImages(files);
                }}
              />
            </label>

            <Button
              disabled={
                loading ||
                (!text.trim() && images.length === 0)
              }
              onClick={handleSubmit}
              className="px-5 py-2"
            >
              {loading ? "Posting..." : "Post"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
