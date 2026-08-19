/* ==========================================================================
   Theme + language + nav + rendering
   ========================================================================== */

(function () {
  const root = document.documentElement;

  /* ---------- Theme ---------- */
  function initTheme() {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    root.setAttribute("data-theme", theme);
  }

  function toggleTheme() {
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  /* ---------- Language ---------- */
  function initLang() {
    const saved = localStorage.getItem("lang");
    const lang = saved || "en";
    setLang(lang, false);
  }

  function setLang(lang, animate = true) {
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    localStorage.setItem("lang", lang);
    applyTranslations(lang);
    updateLangButton(lang);
    if (typeof window.onLangChange === "function") window.onLangChange(lang);
  }

  function toggleLang() {
    const current = root.getAttribute("lang") || "en";
    setLang(current === "en" ? "ar" : "en");
  }

  function updateLangButton(lang) {
    const enEl = document.querySelector('[data-lang-label="en"]');
    const arEl = document.querySelector('[data-lang-label="ar"]');
    if (!enEl || !arEl) return;
    enEl.classList.toggle("lang-current", lang === "en");
    arEl.classList.toggle("lang-current", lang === "ar");
  }

  function applyTranslations(lang) {
    const dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const path = el.getAttribute("data-i18n").split(".");
      let val = dict;
      for (const key of path) {
        val = val && val[key];
      }
      if (typeof val === "string") {
        el.textContent = val;
      }
    });
  }

  /* ---------- Mobile nav ---------- */
  function initNav() {
    const burger = document.querySelector(".nav-burger");
    const links = document.querySelector(".nav-links");
    if (!burger || !links) return;
    burger.addEventListener("click", () => {
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || items.length === 0) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---------- Wire up buttons ---------- */
  function initControls() {
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) =>
      btn.addEventListener("click", toggleTheme)
    );
    document.querySelectorAll("[data-lang-toggle]").forEach((btn) =>
      btn.addEventListener("click", toggleLang)
    );
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initLang();
    initNav();
    initControls();
    initReveal();
  });
})();

/* ==========================================================================
   Project card rendering — used by index.html (featured) and projects.html (all)
   ========================================================================== */

function projectCardHTML(p, lang) {
  const hasImage = !!p.image;
  const thumbClass = hasImage
    ? ""
    : ["thumb-bg-1", "thumb-bg-2", "thumb-bg-3", "thumb-bg-4"][
        Math.abs(hashCode(p.id)) % 4
      ];
  const isPlaceholder = p.category === "placeholder";

  const thumbInner = hasImage
    ? `<img src="${p.image}" alt="${escapeHTML(p.title[lang])}">`
    : `<div class="thumb-icon">${PROJECT_ICONS[p.icon] || ""}</div>`;

  const tools = (p.tools || [])
    .map((t) => `<span class="tool-pill">${escapeHTML(t)}</span>`)
    .join("");

  const result =
    p.result && p.result[lang]
      ? `<p class="project-result">${escapeHTML(p.result[lang])}</p>`
      : "";

  return `
    <article class="project-card reveal" data-category="${p.category}">
      <div class="project-thumb ${isPlaceholder ? "thumb-placeholder" : thumbClass}">
        ${thumbInner}
        <span class="thumb-tag">${escapeHTML(p.tag[lang])}</span>
      </div>
      <div class="project-body">
        <span class="project-cat">${escapeHTML(p.tag[lang])}</span>
        <h3 class="project-title">${escapeHTML(p.title[lang])}</h3>
        <p class="project-desc">${escapeHTML(p.desc[lang])}</p>
        ${tools ? `<div class="project-tools">${tools}</div>` : ""}
        ${result}
      </div>
    </article>
  `;
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str || "";
  return div.innerHTML;
}

function renderFeaturedProjects() {
  const container = document.getElementById("featured-projects");
  if (!container) return;
  const lang = document.documentElement.getAttribute("lang") || "en";
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);
  container.innerHTML = featured.map((p) => projectCardHTML(p, lang)).join("");
  reobserveReveal();
}

function renderAllProjects(filter = "all") {
  const container = document.getElementById("all-projects");
  if (!container) return;
  const lang = document.documentElement.getAttribute("lang") || "en";
  const list =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  container.innerHTML = list.map((p) => projectCardHTML(p, lang)).join("");
  reobserveReveal();
}

function reobserveReveal() {
  const items = document.querySelectorAll(".reveal:not(.in)");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
}
