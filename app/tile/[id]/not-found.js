import Link from "next/link";
export default function TileNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-4 text-center">
      <h1 className="text-3xl font-bold">Tile not found</h1>
      <p className="opacity-70">We couldn’t find a tile with that ID.</p>
      <Link href="/all-tiles" className="btn btn-primary">Browse all tiles</Link>
    </div>
  );
}
