// src/utils/hashnodeApi.js
import { parseString } from 'xml2js';
import { promisify } from 'util';

const parseXMLPromise = promisify(parseString);

export async function getHashnodePosts() {
  try {
    const response = await fetch('/api/rss');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const xmlData = await response.text();

    if (!xmlData || xmlData.trim() === '') {
      console.warn('Empty RSS feed response');
      return [];
    }

    const result = await parseXMLPromise(xmlData);
    
    if (!result || !result.rss || !result.rss.channel || !result.rss.channel[0] || !result.rss.channel[0].item) {
      console.warn('Invalid RSS feed structure');
      return [];
    }
    
    const items = result.rss.channel[0].item;

    const posts = items.map(item => ({
      title: item.title[0].replace(/<!\[CDATA\[|\]\]>/g, ''),
      brief: item.description[0].replace(/<!\[CDATA\[|\]\]>/g, ''),
      slug: item.link[0].split('/').pop(),
      dateAdded: new Date(item['pubDate'][0]),
      coverImage: item['hashnode:coverImage'] ? item['hashnode:coverImage'][0] : null,
      link: item.link[0]
    }));

    return posts;

  } catch (error) {
    console.error('Error fetching RSS feed:', error.message || error);
    return [];
  }
}