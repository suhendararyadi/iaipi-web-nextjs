// Interaksi kecil situs publik (tanpa framework): menu mobile, tab, carousel, slider hero.
// Dimuat sekali dari Base.astro; setiap fitur aktif lewat atribut data-*.

/** Menu utama: tombol hamburger + dropdown submenu (klik/ketuk di layar sempit). */
function initMenu() {
	const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
	const nav = document.getElementById("menu-utama");
	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			const open = nav.dataset.open !== "true";
			nav.dataset.open = String(open);
			toggle.setAttribute("aria-expanded", String(open));
		});
	}
	document.querySelectorAll<HTMLButtonElement>("[data-submenu-toggle]").forEach((btn) => {
		btn.addEventListener("click", () => {
			const open = btn.getAttribute("aria-expanded") !== "true";
			document.querySelectorAll<HTMLButtonElement>("[data-submenu-toggle]").forEach((other) => {
				if (other !== btn) other.setAttribute("aria-expanded", "false");
			});
			btn.setAttribute("aria-expanded", String(open));
		});
	});
	document.addEventListener("click", (event) => {
		if (!(event.target as Element).closest(".nav-item")) {
			document.querySelectorAll("[data-submenu-toggle]").forEach((b) => b.setAttribute("aria-expanded", "false"));
		}
	});
}

/**
 * Tab: <div data-tabs> berisi tombol [role=tab][aria-controls=ID] dan panel [role=tabpanel][id=ID].
 * Mendukung panah kiri/kanan sesuai pola WAI-ARIA.
 */
function initTabs() {
	document.querySelectorAll<HTMLElement>("[data-tabs]").forEach((group) => {
		const tabs = Array.from(group.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
		const select = (tab: HTMLButtonElement) => {
			tabs.forEach((t) => {
				const on = t === tab;
				t.setAttribute("aria-selected", String(on));
				t.tabIndex = on ? 0 : -1;
				const panel = document.getElementById(t.getAttribute("aria-controls") ?? "");
				if (panel) panel.hidden = !on;
			});
		};
		tabs.forEach((tab, i) => {
			tab.addEventListener("click", () => select(tab));
			tab.addEventListener("keydown", (event) => {
				const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
				if (!step) return;
				event.preventDefault();
				const next = tabs[(i + step + tabs.length) % tabs.length];
				next.focus();
				select(next);
			});
		});
	});
}

/** Carousel geser: <div data-carousel> berisi .carousel-jalur + tombol [data-prev]/[data-next]. */
function initCarousel() {
	document.querySelectorAll<HTMLElement>("[data-carousel]").forEach((root) => {
		const track = root.querySelector<HTMLElement>(".carousel-jalur");
		if (!track) return;
		const step = () => {
			const first = track.firstElementChild as HTMLElement | null;
			const gap = parseFloat(getComputedStyle(track).columnGap || "0");
			return first ? first.offsetWidth + gap : track.clientWidth;
		};
		root.querySelector("[data-prev]")?.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
		root.querySelector("[data-next]")?.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
	});
}

/**
 * Slider hero: <div data-slider> berisi slide [data-slide], tombol [data-prev]/[data-next],
 * dan titik [data-dot]. Berganti otomatis tiap 6 detik kecuali pengguna memilih reduced motion.
 */
function initSlider() {
	document.querySelectorAll<HTMLElement>("[data-slider]").forEach((root) => {
		const slides = Array.from(root.querySelectorAll<HTMLElement>("[data-slide]"));
		const dots = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-dot]"));
		if (slides.length < 2) return;
		let index = 0;
		let timer: number | undefined;
		const show = (next: number) => {
			index = (next + slides.length) % slides.length;
			slides.forEach((s, i) => {
				const on = i === index;
				s.dataset.active = String(on);
				s.setAttribute("aria-hidden", String(!on));
				s.querySelectorAll<HTMLElement>("a, button").forEach((el) => (el.tabIndex = on ? 0 : -1));
			});
			dots.forEach((d, i) => d.setAttribute("aria-current", String(i === index)));
		};
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const play = () => {
			if (reduce) return;
			window.clearInterval(timer);
			timer = window.setInterval(() => show(index + 1), 6000);
		};
		root.querySelector("[data-prev]")?.addEventListener("click", () => {
			show(index - 1);
			play();
		});
		root.querySelector("[data-next]")?.addEventListener("click", () => {
			show(index + 1);
			play();
		});
		dots.forEach((dot, i) =>
			dot.addEventListener("click", () => {
				show(i);
				play();
			}),
		);
		root.addEventListener("mouseenter", () => window.clearInterval(timer));
		root.addEventListener("mouseleave", play);
		root.addEventListener("focusin", () => window.clearInterval(timer));
		show(0);
		play();
	});
}

/** Tombol WhatsApp mengambang muncul setelah menggulir. */
function initWhatsApp() {
	const button = document.querySelector<HTMLElement>("[data-wa-float]");
	if (!button) return;
	const update = () => (button.hidden = window.scrollY <= 300);
	window.addEventListener("scroll", update, { passive: true });
	update();
}

initMenu();
initTabs();
initCarousel();
initSlider();
initWhatsApp();
