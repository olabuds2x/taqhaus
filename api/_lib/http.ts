export function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  })
}

/** Public site origin for Stripe redirect URLs. */
export function siteOrigin(request: Request): string {
  const fromEnv = process.env.PUBLIC_SITE_URL
  if (fromEnv) return fromEnv.replace(/\/$/, '')
  return new URL(request.url).origin
}

export async function readJson<T>(request: Request): Promise<Partial<T>> {
  try {
    const body = await request.json()
    return body && typeof body === 'object' ? (body as Partial<T>) : {}
  } catch {
    return {}
  }
}
