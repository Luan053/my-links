import { redis } from "@/lib/db";
import { NextResponse } from "next/server";

const RATE_LIMIT_WINDOW_MS = 1 * 60 * 1000;
const MAX_REQUESTS = 50;

async function rateLimiter(req) {
  const ip = req.headers.get("x-forwarded-for") || req.ip || "localhost";
  const redisKey = `rate_limit:${ip}`;

  const currentCount = await redis.incr(redisKey);

  if (currentCount === 1) {
    await redis.expire(redisKey, RATE_LIMIT_WINDOW_MS / 1000);
  }

  if (currentCount > MAX_REQUESTS) {
    throw new Error("Muitas requisições. Tente novamente em 1 minuto.");
  }
}

export async function GET(req) {
  try {
    await rateLimiter(req);

    const views = await redis.incr("page_views");
    return NextResponse.json({ views });
  } catch (error) {
    console.error("Erro ao obter visualizações:", error);
    return NextResponse.json(
      { error: error.message || "Falha ao obter visualizações" },
      { status: 429 }
    );
  }
}
