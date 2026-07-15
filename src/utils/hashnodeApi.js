// src/utils/hashnodeApi.js
//
// Hashnode retired free GraphQL API access on 2026-05-13 (reads now require a Pro
// plan). We instead read the blog's public RSS feed, which is free and served
// from the blog's own domain. Output shape is kept identical to the previous
// GraphQL version so consumers (News component, homepage) need no changes.

import { parseStringPromise } from 'xml2js';

const RSS_URL = 'https://news.iaipersisgarut.ac.id/rss.xml';

function stripHtml(html = '') {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function firstImage(html = '') {
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m ? m[1] : null;
}

function readTimeFromHtml(html = '') {
  const words = stripHtml(html).split(' ').filter(Boolean).length;
  const min = Math.max(1, Math.ceil(words / 200));
  return `${min} min read`;
}

function firstString(value) {
  if (!value) return null;
  const v = Array.isArray(value) ? value[0] : value;
  return typeof v === 'string' ? v : null;
}

function mapItem(item) {
  const contentHtml = firstString(item['content:encoded']) || '';
  const descHtml = firstString(item.description) || '';
  const enclosureUrl = item.enclosure?.[0]?.$?.url || null;
  const link = firstString(item.link) || '#';
  const slug = link.split('/').filter(Boolean).pop() || link;
  const brief = stripHtml(descHtml) || stripHtml(contentHtml).slice(0, 200);

  return {
    title: firstString(item.title) || 'Tanpa Judul',
    brief,
    slug,
    dateAdded: item.pubDate?.[0] ? new Date(item.pubDate[0]) : new Date(),
    coverImage: enclosureUrl || firstImage(contentHtml) || firstImage(descHtml) || null,
    link,
    category: firstString(item.category) || 'Berita',
    readTime: contentHtml ? readTimeFromHtml(contentHtml) : null,
  };
}

// Returns { posts, debug }. `debug` explains an empty result (used by /api/news).
export async function fetchHashnode() {
  try {
    const response = await fetch(RSS_URL, {
      headers: { Accept: 'application/rss+xml, application/xml, text/xml' },
      next: { revalidate: 3600 }, // cache 1 hour (server-side ISR)
    });

    if (!response.ok) {
      return { posts: [], debug: { stage: 'http-error', status: response.status } };
    }

    const xml = await response.text();
    const parsed = await parseStringPromise(xml, { explicitArray: true, trim: true });
    const items = parsed?.rss?.channel?.[0]?.item;

    if (!items || items.length === 0) {
      return { posts: [], debug: { stage: 'no-items', snippet: xml.slice(0, 200) } };
    }

    const posts = items.slice(0, 6).map(mapItem);
    return { posts, debug: { stage: 'ok', count: posts.length } };
  } catch (error) {
    return { posts: [], debug: { stage: 'threw', message: String(error) } };
  }
}

export async function getHashnodePosts() {
  const { posts } = await fetchHashnode();
  return posts;
}
