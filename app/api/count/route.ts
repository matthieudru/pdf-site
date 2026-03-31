import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const redis = Redis.fromEnv();
  const count = (await redis.get<number>("pdf:download_count")) ?? 0;
  return NextResponse.json({ count });
}
