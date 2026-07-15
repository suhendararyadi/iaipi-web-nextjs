// src/utils/hashnodeApi.js

const GQL_ENDPOINT = 'https://gql.hashnode.com';
const PUBLICATION_HOST = 'news.iaipersisgarut.ac.id';

const QUERY = `
  query {
    publication(host: "${PUBLICATION_HOST}") {
      posts(first: 6) {
        edges {
          node {
            title
            brief
            slug
            publishedAt
            url
            coverImage {
              url
            }
            readTimeInMinutes
            tags {
              name
              slug
            }
          }
        }
      }
    }
  }
`;

function mapPosts(edges) {
  return edges.map(({ node }) => ({
    title: node.title,
    brief: node.brief,
    slug: node.slug,
    dateAdded: new Date(node.publishedAt),
    coverImage: node.coverImage ? node.coverImage.url : null,
    link: node.url,
    category: node.tags && node.tags.length > 0 ? node.tags[0].name : 'Berita',
    readTime: `${node.readTimeInMinutes} min read`,
  }));
}

// Returns { posts, debug }. `debug` explains why posts is empty (used by /api/news
// while diagnosing). Sends a browser-like User-Agent because Hashnode sits behind
// Cloudflare and can reject requests without one.
export async function fetchHashnode() {
  try {
    const response = await fetch(GQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent':
          'Mozilla/5.0 (compatible; iaipi-web/1.0; +https://iaipersisgarut.ac.id)',
      },
      body: JSON.stringify({ query: QUERY }),
      // Bypass fetch cache while diagnosing so we always see the live result.
      cache: 'no-store',
    });

    const text = await response.text();

    let json;
    try {
      json = JSON.parse(text);
    } catch {
      return {
        posts: [],
        debug: {
          stage: 'json-parse-failed',
          status: response.status,
          ok: response.ok,
          snippet: text.slice(0, 300),
        },
      };
    }

    if (json.errors) {
      return {
        posts: [],
        debug: { stage: 'graphql-errors', status: response.status, errors: json.errors },
      };
    }

    const edges = json?.data?.publication?.posts?.edges;
    if (!edges) {
      return {
        posts: [],
        debug: {
          stage: 'no-edges',
          status: response.status,
          hasData: !!json.data,
          hasPublication: !!json?.data?.publication,
          snippet: text.slice(0, 300),
        },
      };
    }

    return { posts: mapPosts(edges), debug: { stage: 'ok', status: response.status, count: edges.length } };
  } catch (error) {
    return { posts: [], debug: { stage: 'fetch-threw', message: String(error) } };
  }
}

export async function getHashnodePosts() {
  const { posts } = await fetchHashnode();
  return posts;
}
