import {
  BlobError,
  BlobPreconditionFailedError,
  get,
  put,
} from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

const COUNTER_PATH = "site-stats/visits.json";
const VISITOR_COOKIE = "caj_visitor_counted";
const ONE_YEAR = 60 * 60 * 24 * 365;

type StoredCounter = {
  count: number;
  updatedAt: string;
};

async function readCounter() {
  const result = await get(COUNTER_PATH, {
    access: "private",
    useCache: false,
  });

  if (!result || result.statusCode !== 200) {
    return null;
  }

  const data = (await new Response(result.stream).json()) as StoredCounter;

  return {
    count: Number.isFinite(data.count) ? Math.max(0, Math.trunc(data.count)) : 0,
    etag: result.blob.etag,
  };
}

async function incrementCounter() {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const current = await readCounter();
    const count = (current?.count ?? 0) + 1;

    try {
      await put(
        COUNTER_PATH,
        JSON.stringify({ count, updatedAt: new Date().toISOString() } satisfies StoredCounter),
        {
          access: "private",
          addRandomSuffix: false,
          allowOverwrite: Boolean(current),
          contentType: "application/json",
          cacheControlMaxAge: 60,
          ...(current ? { ifMatch: current.etag } : {}),
        },
      );

      return count;
    } catch (error) {
      const canRetry =
        error instanceof BlobPreconditionFailedError ||
        (!current && error instanceof BlobError);

      if (!canRetry || attempt === 4) {
        throw error;
      }
    }
  }

  throw new Error("No fue posible actualizar el contador de visitas.");
}

export async function GET(request: NextRequest) {
  try {
    const alreadyCounted = request.cookies.has(VISITOR_COOKIE);
    const current = alreadyCounted ? await readCounter() : null;
    const count = alreadyCounted ? (current?.count ?? 0) : await incrementCounter();
    const response = NextResponse.json(
      { count },
      { headers: { "Cache-Control": "private, no-store" } },
    );

    if (!alreadyCounted) {
      response.cookies.set(VISITOR_COOKIE, "1", {
        httpOnly: true,
        maxAge: ONE_YEAR,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
    }

    return response;
  } catch (error) {
    console.error("No fue posible consultar el contador de visitas.", error);
    return NextResponse.json(
      { error: "Contador temporalmente no disponible." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
