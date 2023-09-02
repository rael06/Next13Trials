import { NextRequest, NextResponse } from "next/server";

const revalidationDates: Record<string, number> = {};

export async function revalidate(
  request: NextRequest,
  { maxAgeMs }: { maxAgeMs: number }
) {
  if (process.env.NODE_ENV === "development") {
    console.warn("revalidate middleware is not supported in development");
    return NextResponse.next();
  }

  const lastRevalidationDate = revalidationDates[request.nextUrl.pathname] || 0;
  if (lastRevalidationDate < Date.now() - maxAgeMs) {
    revalidationDates[request.nextUrl.pathname] = Date.now();
    await fetch(
      `${request.nextUrl.protocol}//${request.nextUrl.host}/api/revalidate?secret=${process.env.APPLICATION_PRIVATE_KEY}&path=${request.nextUrl.pathname}`
    );
    return NextResponse.next();
  }
}
