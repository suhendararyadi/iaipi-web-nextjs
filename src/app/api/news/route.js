// TEMPORARY single-probe diagnostic: one POST to gql.hashnode.com/, capture the
// final URL (redirect detection) and all response headers (server identity).
export const dynamic = 'force-dynamic'

const ENDPOINT = 'https://gql.hashnode.com/'
const BODY = JSON.stringify({
  query:
    'query{publication(host:"news.iaipersisgarut.ac.id"){posts(first:2){edges{node{id title}}}}}',
})

export async function GET() {
  try {
    const r = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: BODY,
      cache: 'no-store',
    })
    const text = await r.text()
    const headers = {}
    r.headers.forEach((v, k) => {
      headers[k] = v
    })
    return Response.json({
      status: r.status,
      finalUrl: r.url,
      redirected: r.redirected,
      contentType: r.headers.get('content-type'),
      headers,
      snippet: text.slice(0, 300),
    })
  } catch (e) {
    return Response.json({ error: String(e) })
  }
}
