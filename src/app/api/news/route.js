import { getHashnodePosts } from '@/utils/hashnodeApi'

// Revalidate the cached response every hour (server-side ISR)
export const revalidate = 3600

// Server-side proxy for the Hashnode blog.
// Running the GraphQL request on the server avoids browser CORS issues and
// lets the `revalidate` fetch option actually take effect.
export async function GET() {
  try {
    const posts = await getHashnodePosts()
    return Response.json(
      { posts },
      {
        headers: {
          'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
        },
      }
    )
  } catch (error) {
    console.error('Error in /api/news route:', error)
    return Response.json({ posts: [] }, { status: 200 })
  }
}
