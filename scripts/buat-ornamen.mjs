// Membuat SVG ornamen geometri Islam di public/images/ornamen (bintang delapan/khatam & roset).
// Jalankan ulang bila bentuk ornamen diubah: node scripts/buat-ornamen.mjs public/images/ornamen
import { writeFileSync } from "node:fs";
const out = process.argv[2];
const f = (n) => +n.toFixed(2);
const pt = (cx, cy, r, deg) => [f(cx + r * Math.cos((deg * Math.PI) / 180)), f(cy + r * Math.sin((deg * Math.PI) / 180))];
// Bintang delapan (dua persegi bertumpuk): 16 titik, luar R, dalam R*0.7654
function khatam(cx, cy, R, rot = 0) {
	const r = R * 0.76537;
	const p = [];
	for (let i = 0; i < 16; i++) p.push(pt(cx, cy, i % 2 ? r : R, rot + i * 22.5));
	return "M" + p.map((q) => q.join(" ")).join("L") + "Z";
}
// Bintang {8/3}
function bintang83(cx, cy, R, rot = 0) {
	const v = [...Array(8)].map((_, i) => pt(cx, cy, R, rot + i * 45));
	let d = "";
	let i = 0;
	for (let k = 0; k <= 8; k++) {
		d += (k ? "L" : "M") + v[i].join(" ");
		i = (i + 3) % 8;
	}
	return d + "Z";
}
const circle = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r}"/>`;

// 1. Pola berulang: bintang delapan saling bersentuhan (kisi persegi berpusat), petak 100.
{
	const R = 35.355;
	const pusat = [[50, 50], [0, 0], [100, 0], [0, 100], [100, 100]];
	const paths = pusat.map(([x, y]) => `<path d="${khatam(x, y, R)}"/>`).join("");
	const inti = pusat.map(([x, y]) => `<path d="${khatam(x, y, 12, 22.5)}"/>`).join("");
	const tengahSilang = [[50, 0], [0, 50], [100, 50], [50, 100]].map(([x, y]) => circle(x, y, 6)).join("");
	const isi = (warna, op) =>
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><g fill="none" stroke="${warna}" stroke-opacity="${op}" stroke-width="1.3" stroke-linejoin="round">${paths}${inti}${tengahSilang}</g></svg>\n`;
	writeFileSync(`${out}/pola-bintang.svg`, isi("#000", 1));
	writeFileSync(`${out}/pola-bintang-putih.svg`, isi("#fff", 0.1));
}

// 2. Roset delapan: lingkaran ganda, khatam besar, bintang {8/3}, khatam kecil, titik pusat.
{
	const c = 200;
	const g = [
		circle(c, c, 196),
		circle(c, c, 184),
		`<path d="${khatam(c, c, 180, 22.5)}"/>`,
		`<path d="${khatam(c, c, 180, 0)}"/>`,
		circle(c, c, 132),
		`<path d="${bintang83(c, c, 132, 22.5)}"/>`,
		`<path d="${khatam(c, c, 56)}"/>`,
		circle(c, c, 22),
		...[...Array(16)].map((_, i) => {
			const [x1, y1] = pt(c, c, 184, i * 22.5 + 11.25);
			const [x2, y2] = pt(c, c, 196, i * 22.5 + 11.25);
			return `<path d="M${x1} ${y1}L${x2} ${y2}"/>`;
		}),
	].join("");
	writeFileSync(
		`${out}/roset.svg`,
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400"><g fill="none" stroke="#000" stroke-width="2.2" stroke-linejoin="round">${g}</g></svg>\n`,
	);
}
