import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();

export async function POST() {
  await redis.incr("pdf:download_count");
  return NextResponse.json({ ok: true });
}
