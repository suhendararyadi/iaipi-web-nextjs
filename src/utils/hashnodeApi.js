// src/utils/hashnodeApi.js
import { parseString } from 'xml2js';
import { promisify } from 'util';

const parseXMLPromise = promisify(parseString);

export async function getHashnodePosts() {
  try {
    console.log('Fetching RSS feed...');
    const response = await fetch('/api/rss');
    const xmlData = await response.text();

    const result = await parseXMLPromise(xmlData);
    const items = result.rss.channel[0].item;

    const posts = items.map(item => ({
      title: item.title[0].replace(/<!\[CDATA\[|\]\]>/g, ''),
      brief: item.description[0].replace(/<!\[CDATA\[|\]\]>/g, ''),
      slug: item.link[0].split('/').pop(),
      dateAdded: new Date(item['pubDate'][0]),
      coverImage: item['hashnode:coverImage'] ? item['hashnode:coverImage'][0] : null,
      link: item.link[0]
    }));

    console.log('Parsed posts:', posts);
    return posts;

  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return [];
  }
}