import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();

export async function GET() {
  const count = (await redis.get<number>("pdf:download_count")) ?? 0;
  return NextResponse.json({ count });
}
