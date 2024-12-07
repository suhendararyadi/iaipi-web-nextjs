// src/pages/api/rss.js
export default async function handler(req, res) {
    try {
      const response = await fetch('https://iaipi-garut.hashnode.dev/rss.xml', {
        headers: {
          'Accept': 'application/rss+xml'
        }
      });
      const data = await response.text();
      
      res.setHeader('Content-Type', 'application/xml');
      res.status(200).send(data);
    } catch (error) {
      console.error('Error fetching RSS:', error);
      res.status(500).json({ error: 'Failed to fetch RSS feed' });
    }
  }