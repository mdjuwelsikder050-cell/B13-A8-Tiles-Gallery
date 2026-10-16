"use client";
import { useEffect, useState } from "react";
import TileCard from "./TileCard";

export default function TilesBrowser() {
  const [query, setQuery] = useState("");
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Debounced fetch from the server API on every keystroke pause.
  useEffect(() => {
    const controller = new AbortController();
 // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/tiles?q=${encodeURIComponent(query)}`, { signal: controller.signal });
        if (!res.ok) throw new Error("Failed to load tiles");
        setTiles(await res.json());
        setError("");
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 250);
    return () => { clearTimeout(t); controller.abort(); };
  }, [query]);

  return (
    <>
      <label className="input input-lg mx-auto mb-10 flex w-full max-w-2xl items-center gap-3 border-base-300 bg-base-100 shadow-sm">
        <svg className="h-5 w-5 opacity-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" strokeLinecap="round" /></svg>
        <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tiles by title…" className="grow" aria-label="Search tiles by title" />
      </label>

      {error && <div role="alert" className="alert alert-error mx-auto mb-6 max-w-xl">{error}</div>}

      {loading ? (
        <div className="flex justify-center py-20"><span className="loading loading-spinner loading-lg text-primary" /></div>
      ) : tiles.length === 0 ? (
        <p className="py-20 text-center text-lg opacity-70">No tiles match “{query}”.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tiles.map((t) => <TileCard key={t.id} tile={t} cta="Details" />)}
        </div>
      )}
    </>
  );
}
