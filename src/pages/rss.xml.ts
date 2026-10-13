// Feed RSS 2.0 berita terbaru (pengganti news.iaipersisgarut.ac.id/rss.xml).
import type { APIRoute } from "astro";
import { getInfoKampus, mediaSrc, useCacheHint } from "@/lib/cms";
import { getDaftarBerita, kategoriBerita } from "@/lib/berita";

function escapeXml(s: string): string {
	return s
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

export const GET: APIRoute = async (context) => {
	const siteUrl = (context.site ?? context.url).origin;
	const [{ entries, cacheHint }, infoResult] = await Promise.all([getDaftarBerita({ limit: 20 }), getInfoKampus()]);
	useCacheHint(context, cacheHint, infoResult.cacheHint);
	const info = infoResult.info;

	const items = entries
		.filter((b) => b.data.publishedAt)
		.map((b) => {
			const url = `${siteUrl}/berita/${b.id}`;
			const sampul = mediaSrc(b.data.featured_image);
			const kategori = kategoriBerita(b)
				.map((k) => `      <category>${escapeXml(k.label)}</category>`)
				.join("\n");
			return [
				"    <item>",
				`      <title>${escapeXml(b.data.title)}</title>`,
				`      <link>${url}</link>`,
				`      <guid isPermaLink="true">${url}</guid>`,
				`      <pubDate>${new Date(b.data.publishedAt!).toUTCString()}</pubDate>`,
				`      <description>${escapeXml(b.data.excerpt ?? "")}</description>`,
				kategori,
				sampul ? `      <enclosure url="${escapeXml(new URL(sampul, siteUrl).href)}" length="0" type="image/jpeg"/>` : "",
				"    </item>",
			]
				.filter(Boolean)
				.join("\n");
		})
		.join("\n");

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`Berita ${info.nama}`)}</title>
    <link>${siteUrl}/berita</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <description>${escapeXml(info.deskripsi ?? `Berita, agenda, dan pengumuman ${info.nama}`)}</description>
    <language>id-id</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
	return new Response(xml, {
		headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
	});
};
