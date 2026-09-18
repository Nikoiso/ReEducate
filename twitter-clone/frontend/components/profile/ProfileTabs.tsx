"use client";

const tabs = [
  "Posts",
  "Replies",
  "Media",
  "Likes",
];

export default function ProfileTabs() {
  return (
    <div className="mt-4 flex border-b border-gray-200">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className="relative flex-1 py-4 font-medium hover:bg-gray-100"
        >
          {tab}

          {index === 0 && (
            <span className="absolute bottom-0 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-[#1d9bf0]" />
          )}
        </button>
      ))}
    </div>
  );
}