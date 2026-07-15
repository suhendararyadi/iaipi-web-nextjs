import { fetchHashnode } from '@/utils/hashnodeApi'

export const revalidate = 3600

// Server-side proxy for the Hashnode blog. `debug` is included temporarily to
// confirm the fix; can be dropped later.
export async function GET() {
  const { posts, debug } = await fetchHashnode()
  return Response.json({ posts, debug })
}
