import { useState } from "react";
import Input from "./Input";
import { useInput } from "./Hooks/useInput";

export default function Main() {
  const { value, setValue, show, error, loading } = useInput();
  const [category, setCategory] = useState<string>("all");

  const filteredShow = show.filter((data: any) => {
    const item = data.show ? data.show : data;

    if (category === "movies") {
      return (
        item.type?.toLowerCase().includes("movie") || item.type === "Scripted"
      );
    }
    if (category === "series") {
      return (
        item.type === "TV Series" ||
        item.type === "Scripted" ||
        item.type === "Reality"
      );
    }
    if (category === "animation") {
      return (
        item.genres?.includes("Anime") ||
        item.genres?.includes("Animation") ||
        item.type === "Animation"
      );
    }
    return true;
  });

  return (
    <div className="bg-[#10141E] min-h-screen flex flex-col md:flex-row p-0 md:p-8 gap-6 md:gap-9">
      <aside className="w-full md:w-24 h-16 md:h-[90vh] bg-[#161D2F] md:rounded-2xl flex flex-row md:flex-col items-center justify-between px-6 md:px-0 md:py-8 shrink-0 sticky top-0 md:top-8 z-50">
        <a
          href="#"
          onClick={() => setCategory("all")}
          className="cursor-pointer"
        >
          <img src="/Path.png" alt="Logo" className="w-8 h-6 object-contain" />
        </a>

        <nav className="flex flex-row md:flex-col gap-6 md:gap-8">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`transition-opacity ${category === "all" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
          >
            <img
              src="/Shape (2).png"
              alt="Home"
              className="w-5 h-5 object-contain"
            />
          </button>

          <button
            type="button"
            onClick={() => setCategory("movies")}
            className={`transition-opacity ${category === "movies" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
          >
            <img
              src="/Shape (3).png"
              alt="Movies"
              className="w-5 h-5 object-contain"
            />
          </button>

          <button
            type="button"
            onClick={() => setCategory("series")}
            className={`transition-opacity ${category === "series" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
          >
            <img
              src="/Shape (4).png"
              alt="TV Series"
              className="w-5 h-5 object-contain"
            />
          </button>

          <button
            type="button"
            onClick={() => setCategory("animation")}
            className={`transition-opacity ${category === "animation" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
          >
            <img
              src="/Bookmark.png"
              alt="Animation"
              className="w-5 h-5 object-contain"
            />
          </button>
        </nav>

        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden shrink-0">
          <img
            src="/Oval.png"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </aside>
      <main className="flex-1 px-4 md:px-0 text-white">
        <Input value={value} setValue={setValue} />

        {loading && <p className="text-gray-400 mt-4">Loading...</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {!loading && (
          <h1 className="text-xl md:text-3xl font-light my-6 capitalize">
            {value
              ? `Found ${filteredShow.length} results for '${value}'`
              : category === "all"
                ? "Recommended for you"
                : category}
          </h1>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredShow.map((data: any) => {
            const item = data.show ? data.show : data;

            return (
              <div
                key={item.id}
                className="flex flex-col gap-2 cursor-pointer group"
              >
                <div className="w-full aspect-16/10 bg-[#161D2F] rounded-lg overflow-hidden relative">
                  {item.image?.medium ? (
                    <img
                      src={item.image.medium}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                      No Image
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>
                    {item.premiered ? item.premiered.split("-")[0] : "2019"}
                  </span>
                  <span>•</span>
                  <span>{item.genres?.[0] || item.type || "TV"}</span>
                </div>

                <h3 className="font-semibold text-base md:text-lg truncate">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
