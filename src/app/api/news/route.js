import { fetchHashnode } from '@/utils/hashnodeApi'

// Always run fresh while diagnosing (no caching) so /api/news shows the live result.
export const dynamic = 'force-dynamic'

// Server-side proxy for the Hashnode blog. Running the GraphQL request on the
// server avoids browser CORS issues. Returns `debug` info to help diagnose empty
// responses.
export async function GET() {
  const { posts, debug } = await fetchHashnode()
  return Response.json({ posts, debug })
}
