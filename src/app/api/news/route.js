// TEMPORARY DIAGNOSTIC ROUTE — probes gql.hashnode.com from the Vercel server
// with several request variants and reports response headers so we can see who
// is returning HTML instead of JSON. Revert to the clean version once fixed.
export const dynamic = 'force-dynamic'

const ENDPOINT = 'https://gql.hashnode.com'
const QUERY =
  'query{publication(host:"news.iaipersisgarut.ac.id"){posts(first:6){edges{node{title brief slug publishedAt url coverImage{url} readTimeInMinutes tags{name slug}}}}}}'

async function probe(label, url, init) {
  try {
    const r = await fetch(url, { ...init, cache: 'no-store', redirect: 'manual' })
    const text = await r.text()
    let jsonOk = false
    try {
      JSON.parse(text)
      jsonOk = true
    } catch {}
    return {
      label,
      status: r.status,
      finalUrl: r.url,
      redirected: r.redirected,
      jsonOk,
      headers: {
        'content-type': r.headers.get('content-type'),
        server: r.headers.get('server'),
        'cf-ray': r.headers.get('cf-ray'),
        'x-vercel-id': r.headers.get('x-vercel-id'),
        'x-matched-path': r.headers.get('x-matched-path'),
        location: r.headers.get('location'),
      },
      snippet: text.slice(0, 200),
    }
  } catch (e) {
    return { label, error: String(e) }
  }
}

export async function GET() {
  const jsonHeaders = { 'content-type': 'application/json', accept: 'application/json' }

  const [postNoUa, postBrowserUa, getQuery] = await Promise.all([
    probe('POST-default-ua', ENDPOINT, {
      method: 'POST',
      headers: jsonHeaders,
      body: JSON.stringify({ query: QUERY }),
    }),
    probe('POST-browser-ua', ENDPOINT, {
      method: 'POST',
      headers: { ...jsonHeaders, 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) node-fetch' },
      body: JSON.stringify({ query: QUERY }),
    }),
    probe('GET-query', `${ENDPOINT}/?query=${encodeURIComponent(QUERY)}`, {
      headers: { accept: 'application/json' },
    }),
  ])

  return Response.json({ postNoUa, postBrowserUa, getQuery })
}
