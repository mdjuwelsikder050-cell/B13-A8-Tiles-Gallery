import { Suspense } from "react";
import TilesBrowser from "@/components/TilesBrowser";

export const metadata = { title: "All Tiles" };

export default function AllTilesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">The Gallery</p>
        <h1 className="text-4xl font-bold">All Tiles</h1>
      </div>
      <Suspense fallback={<div className="flex justify-center py-20"><span className="loading loading-spinner loading-lg text-primary" /></div>}>
        <TilesBrowser />
      </Suspense>
    </section>
  );
}
