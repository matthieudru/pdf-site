import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST() {
  const redis = Redis.fromEnv();
  await redis.incr("pdf:download_count");
  return NextResponse.json({ ok: true });
}
