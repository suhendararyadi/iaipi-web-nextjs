// src/utils/hashnodeApi.js

// NOTE: trailing slash is required. Posting to 'https://gql.hashnode.com' (no slash)
// triggers a redirect that turns the POST into a GET, which returns the GraphQL
// playground HTML instead of JSON. The official endpoint is the slashed URL.
const GQL_ENDPOINT = 'https://gql.hashnode.com/';
const PUBLICATION_HOST = 'news.iaipersisgarut.ac.id';

// `id` is included so Hashnode's Stellate CDN can invalidate this query's cache
// correctly when posts change.
const QUERY = `
  query {
    publication(host: "${PUBLICATION_HOST}") {
      posts(first: 6) {
        edges {
          node {
            id
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

// Returns { posts, debug }. `debug` explains an empty result (used by /api/news).
export async function fetchHashnode() {
  try {
    const response = await fetch(GQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query: QUERY }),
      next: { revalidate: 3600 }, // cache 1 hour (server-side ISR)
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
          contentType: response.headers.get('content-type'),
          snippet: text.slice(0, 200),
        },
      };
    }

    if (json.errors) {
      return { posts: [], debug: { stage: 'graphql-errors', errors: json.errors } };
    }

    const edges = json?.data?.publication?.posts?.edges;
    if (!edges) {
      return {
        posts: [],
        debug: { stage: 'no-edges', hasPublication: !!json?.data?.publication },
      };
    }

    return { posts: mapPosts(edges), debug: { stage: 'ok', count: edges.length } };
  } catch (error) {
    return { posts: [], debug: { stage: 'fetch-threw', message: String(error) } };
  }
}

export async function getHashnodePosts() {
  const { posts } = await fetchHashnode();
  return posts;
}
