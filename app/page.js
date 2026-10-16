import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import TileCard from "@/components/TileCard";
import { getFeaturedTiles, getAllTiles } from "@/lib/tiles";

export default function Home() {
  const featured = getFeaturedTiles(4);
  const newest = getAllTiles().at(-1);
  const marqueeItems = [
    `New Arrivals: ${newest.title}`,
    "Weekly Feature: Modern Geometric Patterns",
    "Join the Community of tile lovers",
    "Free design inspiration every week",
  ];
  const mosaic = getAllTiles().slice(0, 9);

  return (
    <>
      {/* Banner */}
      <section className="grout-bg relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 lg:py-24">
          <div>
            <p className="animate__animated animate__fadeIn mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">Tilehouse Gallery</p>
            <h1 className="animate__animated animate__fadeInUp text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Discover Your Perfect <span className="text-primary italic">Aesthetic</span>
            </h1>
            <p className="animate__animated animate__fadeInUp animate__delay-1s mt-5 max-w-lg text-lg opacity-80">
              From sun-baked terracotta to polished marble — explore tiles that turn every floor and wall into a statement.
            </p>
            <div className="animate__animated animate__fadeInUp animate__delay-1s mt-8 flex flex-wrap gap-3">
              <Link href="/all-tiles" className="btn btn-primary btn-lg">Browse Now</Link>
              <Link href="/register" className="btn btn-outline btn-lg">Join the Community</Link>
            </div>
          </div>

          <div className="animate__animated animate__zoomIn mx-auto grid w-full max-w-md grid-cols-3 gap-2 rotate-2">
            {mosaic.map((t) => (
              <div key={t.id} className="aspect-square overflow-hidden rounded-sm shadow-md">
                <Image src={t.image} alt="" width={200} height={200} className="h-full w-full object-cover" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Handpicked</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Featured Tiles</h2>
          </div>
          <Link href="/all-tiles" className="link link-primary font-medium">See all tiles →</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((t) => <TileCard key={t.id} tile={t} />)}
        </div>
      </section>
    </>
  );
}
