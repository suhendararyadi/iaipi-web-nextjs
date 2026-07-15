import { getHashnodePosts } from '@/utils/hashnodeApi'

export const revalidate = 3600

// Server-side news source: the blog's public Hashnode RSS feed.
export async function GET() {
  const posts = await getHashnodePosts()
  return Response.json({ posts })
}
