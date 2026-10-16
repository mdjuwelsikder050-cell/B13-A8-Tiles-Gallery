import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireSession } from "@/lib/session";
import { getTileById, formatPrice } from "@/lib/tiles";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const tile = getTileById(id);
  return { title: tile?.title ?? "Tile not found" };
}

export default async function TileDetailsPage({ params }) {
  const { id } = await params;
  await requireSession(`/tile/${id}`);
  const tile = getTileById(id);
  if (!tile) notFound();

  const specs = [
    ["Category", tile.category],
    ["Material", tile.material],
    ["Dimensions", tile.dimensions],
    ["Price", formatPrice(tile)],
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <Link href="/all-tiles" className="link mb-6 inline-block text-sm">← Back to all tiles</Link>
      <div className="grid gap-10 md:grid-cols-2">
        {/* Left: visual */}
        <div className="animate__animated animate__fadeIn overflow-hidden rounded-box border border-base-300 bg-base-200 shadow-md">
          <Image src={tile.image} alt={tile.title} width={900} height={900} priority unoptimized className="aspect-square w-full object-cover" />
        </div>

        {/* Right: details */}
        <div className="animate__animated animate__fadeInRight">
          <div className="mb-3 flex items-center gap-2">
            <span className={`badge ${tile.inStock ? "badge-success" : "badge-error"}`}>{tile.inStock ? "In stock" : "Out of stock"}</span>
          </div>
          <h1 className="text-4xl font-bold">{tile.title}</h1>
          <p className="mt-1 text-sm opacity-70">Created by <span className="font-semibold">{tile.creator}</span></p>

          <h2 className="mt-6 text-lg font-semibold">Style description</h2>
          <p className="mt-1 leading-relaxed opacity-85">{tile.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {tile.tags.map((tag) => <span key={tag} className="badge badge-lg badge-outline border-secondary text-secondary">{tag}</span>)}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-box border border-base-300 bg-base-300">
            {specs.map(([k, v]) => (
              <div key={k} className="bg-base-100 p-4">
                <dt className="text-xs uppercase tracking-wider opacity-60">{k}</dt>
                <dd className="mt-1 font-semibold capitalize">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
