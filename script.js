// Shared header, footer, icons and helpers for every MindCare page.
const PAGES = [
  ["index.html", "Home"], ["understand.html", "Understand"], ["wellbeing.html", "Well-Being"],
  ["relax.html", "Relax"], ["reflect.html", "Reflect"], ["resources.html", "Resources"],
  ["chatbot.html", "Talk & Listen"], ["games.html", "Games"], ["research.html", "Research"], ["support.html", "Support"]
];
const ICONS = {
  understand: "M4 4h12a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3z M8 9h7 M8 13h5",
  wellbeing: "M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6C19 16.5 12 21 12 21z",
  relax: "M3 9c3-3 6-3 9 0s6 3 9 0 M3 15c3-3 6-3 9 0s6 3 9 0",
  reflect: "M4 20l4-1 11-11-3-3L5 16z M14 6l3 3",
  resources: "M4 4h4v16H4z M10 4h4v16h-4z M16 6l4 1-3 13-4-1z",
  quiz: "M5 4h14v16H5z M8 9l2 2 3-3 M8 15h8",
  guide: "M4 5h16v11H9l-5 4z M8 10h8",
  research: "M5 20V11 M12 20V4 M19 20v-6",
  support: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
};
(function () {
  const here = location.pathname.split("/").pop() || "index.html";
  const links = PAGES.map(([h, l]) => `<a href="${h}"${h === here ? ' aria-current="page"' : ""}>${l}</a>`).join("");
  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `<div class="hd"><div class="w"><a class="logo" href="index.html">Mind<span>Care</span></a>
      <button class="mb" id="menu-btn" aria-expanded="false" aria-controls="menu">Menu</button>
      <nav class="nav" id="menu" aria-label="Main">${links}</nav>
      <a class="helpbtn" href="support.html">Need help?</a></div></div>`;
    const btn = document.getElementById("menu-btn"), menu = document.getElementById("menu");
    btn.addEventListener("click", () => { btn.setAttribute("aria-expanded", menu.classList.toggle("open")); });
  }
  const footer = document.getElementById("site-footer");
  if (footer) footer.innerHTML = `<div class="ft"><div class="w">
    <div><strong>MindCare</strong> &mdash; Mental Health Awareness &amp; Student Well-Being Survey. BSc Data Science project.</div>
    <div>MindCare is educational. It does not diagnose conditions or replace professional care. If you need support, visit <a href="support.html">Get Support</a>.</div></div></div>`;
  document.querySelectorAll("[data-ic]").forEach(e => {
    e.className = "ic";
    e.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ICONS[e.dataset.ic]}"/></svg>`;
  });
})();
window.st = {
  get(k) { try { return JSON.parse(localStorage.getItem(k)) || []; } catch (e) { return []; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  clear(k) { try { localStorage.removeItem(k); } catch (e) {} }
};
window.SOS = /suicid|kill myself|end my life|self.?harm|hurt myself|want to die|no reason to live|better off dead/i;
window.SUP = "I'm really sorry you're feeling this way. You deserve support right now. Please reach out to someone you trust, or call Tele-MANAS (India, 24/7) on 14416. If you are in immediate danger, call 112.";
window.ED = /skip(ping)? meals|not eating|starv|purg(e|ing)|binge|hate my body/i;
window.EDR = "That sounds hard, and I'm glad you said it. I can't give diet or weight advice, but you deserve care. Please talk to someone you trust, or a doctor or counsellor, about it.";
