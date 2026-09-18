"use client";

export default function RightSidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-[350px] px-6 xl:block">
      <div className="pt-1">
        <div className="flex h-[42px] items-center rounded-full bg-gray-100 px-4">
          <span className="mr-3 text-gray-500">⌕</span>

          <input
            placeholder="Search"
            className="w-full bg-transparent outline-none placeholder:text-gray-500"
          />
        </div>

        <section className="mt-4 overflow-hidden rounded-2xl bg-gray-100">
          <h2 className="px-4 pt-4 text-xl font-bold">
            What’s happening
          </h2>

          <div className="cursor-pointer px-4 py-4 hover:bg-gray-200">
            <p className="text-sm text-gray-500">Trending</p>
            <p className="font-bold">#NextJS</p>
            <p className="text-sm text-gray-500">12.4K posts</p>
          </div>

          <div className="cursor-pointer px-4 py-4 hover:bg-gray-200">
            <p className="text-sm text-gray-500">Trending</p>
            <p className="font-bold">#React</p>
            <p className="text-sm text-gray-500">8,320 posts</p>
          </div>

          <div className="cursor-pointer px-4 py-4 hover:bg-gray-200">
            <p className="text-sm text-gray-500">Trending</p>
            <p className="font-bold">#TypeScript</p>
            <p className="text-sm text-gray-500">6,104 posts</p>
          </div>

          <button className="w-full px-4 py-4 text-left text-[#1d9bf0] hover:bg-gray-200">
            Show more
          </button>
        </section>

        <section className="mt-4 overflow-hidden rounded-2xl bg-gray-100">
          <h2 className="px-4 pt-4 text-xl font-bold">
            Who to follow
          </h2>

          {["Nika", "Giorgi", "Ana"].map((name) => (
            <div
              key={name}
              className="flex items-center gap-3 px-4 py-4 hover:bg-gray-200"
            >
              <div className="h-10 w-10 rounded-full bg-gray-300" />

              <div className="min-w-0 flex-1">
                <p className="font-bold">{name}</p>
                <p className="truncate text-gray-500">
                  @{name.toLowerCase()}
                </p>
              </div>

              <button className="rounded-full bg-black px-4 py-2 font-bold text-white">
                Follow
              </button>
            </div>
          ))}
        </section>
      </div>
    </aside>
  );
}