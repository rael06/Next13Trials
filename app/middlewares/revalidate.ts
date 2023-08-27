import { NextRequest } from "next/server";

const revalidationDates: Record<string, number> = {};

export async function revalidate(
  request: NextRequest,
  { maxAgeMs }: { maxAgeMs: number }
) {
  const lastRevalidationDate = revalidationDates[request.nextUrl.pathname] || 0;
  if (lastRevalidationDate < Date.now() - maxAgeMs) {
    revalidationDates[request.nextUrl.pathname] = Date.now();
    await fetch(
      `${request.nextUrl.protocol}//${request.nextUrl.host}/api/revalidate?secret=my_secret_token&path=${request.nextUrl.pathname}`
    );
    return;
  }
}
