export async function getHashnodePosts() {
    const query = `
      query GetUserArticles {
        user(username: "iaipi-garut") {  // Pastikan ini sudah diganti dengan username Anda
          publication {
            posts(page: 0) {
              title
              brief
              slug
              dateAdded
              coverImage
            }
          }
        }
      }
    `;
  
    try {
      console.log('Sending request to Hashnode API...') // Debug log
      const response = await fetch('https://api.hashnode.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
  
      const result = await response.json()
      console.log('API Response:', result) // Debug log
  
      if (result.errors) {
        console.error('GraphQL Errors:', result.errors)
        return []
      }
  
      return result.data?.user?.publication?.posts || []
    } catch (error) {
      console.error('Error fetching Hashnode posts:', error)
      return []
    }
  }