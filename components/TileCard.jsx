import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/tiles";

export default function TileCard({ tile, cta = "View Details" }) {
  return (
    <article className="tile-card group card overflow-hidden border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <figure className="aspect-square overflow-hidden bg-base-200">
        <Image src={tile.image} alt={tile.title} width={400} height={400} className="h-full w-full object-cover" unoptimized />
      </figure>
      <div className="card-body gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="card-title text-lg leading-tight">{tile.title}</h3>
          <span className="badge badge-outline badge-sm capitalize">{tile.category}</span>
        </div>
        <p className="text-sm font-semibold text-primary">{formatPrice(tile)}</p>
        <div className="card-actions pt-1">
          <Link href={`/tile/${tile.id}`} className="btn btn-primary btn-sm w-full">{cta}</Link>
        </div>
      </div>
    </article>
  );
}
