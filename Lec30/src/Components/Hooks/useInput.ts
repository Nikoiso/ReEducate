import { useEffect, useState } from "react";

export function useInput() {
  const [value, setValue] = useState<string>("");
  const [show, setShow] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = value.trim()
          ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(value)}`
          : `https://api.tvmaze.com/shows`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();
        setShow(value.trim() ? data : data.slice(0, 20));
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, [value]);

  return { value, setValue, show, loading, error };
}
