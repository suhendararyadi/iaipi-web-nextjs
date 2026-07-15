import { fetchHashnode } from '@/utils/hashnodeApi'

export const revalidate = 3600

// Server-side news source (Hashnode RSS feed). `debug` is included temporarily to
// confirm the fix and can be removed later.
export async function GET() {
  const { posts, debug } = await fetchHashnode()
  return Response.json({ posts, debug })
}
