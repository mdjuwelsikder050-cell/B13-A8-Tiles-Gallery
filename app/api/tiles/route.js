import { NextResponse } from "next/server";
import { getAllTiles } from "@/lib/tiles";

export function GET(request) {
  const q = new URL(request.url).searchParams.get("q") ?? "";
  return NextResponse.json(getAllTiles(q));
}
