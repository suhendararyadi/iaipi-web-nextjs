// src/utils/hashnodeApi.js

const GQL_ENDPOINT = 'https://gql.hashnode.com';
const PUBLICATION_HOST = 'news.iaipersisgarut.ac.id';

export async function getHashnodePosts() {
  const query = `
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

  try {
    const response = await fetch(GQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();

    if (!data || !data.publication || !data.publication.posts) {
      console.warn('Invalid Hashnode API response');
      return [];
    }

    const posts = data.publication.posts.edges.map(({ node }) => ({
      title: node.title,
      brief: node.brief,
      slug: node.slug,
      dateAdded: new Date(node.publishedAt),
      coverImage: node.coverImage ? node.coverImage.url : null,
      link: node.url,
      category: node.tags && node.tags.length > 0 ? node.tags[0].name : 'Berita',
      readTime: `${node.readTimeInMinutes} min read`
    }));

    return posts;

  } catch (error) {
    console.error('Error fetching Hashnode posts:', error);
    return [];
  }
}