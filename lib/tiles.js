import tiles from "@/data/tiles.json";

export function getAllTiles(query = "") {
  const q = query.trim().toLowerCase();
  if (!q) return tiles;
  return tiles.filter((t) => t.title.toLowerCase().includes(q));
}

export function getFeaturedTiles(n = 4) {
  return tiles.slice(0, n);
}

export function getTileById(id) {
  return tiles.find((t) => t.id === id) ?? null;
}

export function formatPrice(tile) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: tile.currency }).format(tile.price);
}


