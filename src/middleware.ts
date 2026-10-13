import { defineMiddleware } from "astro:middleware";

// Header keamanan dasar untuk semua respons dari Worker (dulu di next.config.mjs).
// Aset statis di public/ mendapat header yang sama lewat public/_headers.
const SECURITY_HEADERS: Record<string, string> = {
	"X-Content-Type-Options": "nosniff",
	"X-Frame-Options": "SAMEORIGIN",
	"Referrer-Policy": "strict-origin-when-cross-origin",
	"Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

export const onRequest = defineMiddleware(async (_context, next) => {
	const response = await next();
	for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
		if (!response.headers.has(name)) {
			try {
				response.headers.set(name, value);
			} catch {
				// Header respons immutable (mis. dari fetch/aset); lewati.
				return response;
			}
		}
	}
	return response;
});
