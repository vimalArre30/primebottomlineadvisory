"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

// One place for the page-wide GA4 events. Reads the DOM instead of needing attributes on every link:
//   - clicks on links (booking, contact, outbound, navigation)
//   - FAQ opens
//   - section views (elements with data-section) and scroll depth
// Self-check, track switch and video events live in their own components.

const VERDICTS: Record<string, string> = {
  "Start ticking": "start",
  "Maybe not yet": "maybe_not_yet",
  "A good fit": "good_fit",
  "A strong fit": "strong_fit"
};

function activeTrack(el?: Element | null): string {
  const own = el?.closest<HTMLElement>("[data-track]")?.dataset.track;
  if (own) return own;
  return document.querySelector<HTMLElement>(".panel.on")?.dataset.track ?? "none";
}

function bookPlacement(a: Element, t: string, text: string): string {
  if (a.closest(".fit")) return `selfcheck_${t}`;
  if (a.closest("footer")) return "footer";
  if (a.closest("#book-founders")) return "book_founders";
  if (a.closest("#book-business")) return "book_business";
  if (a.closest("#book")) return /founder/i.test(text) ? "book_shared_founder" : "book_shared_business";
  return "other";
}

function placementOf(a: Element): string {
  if (a.closest("header")) return "header";
  if (a.closest("footer")) return "footer";
  return a.closest<HTMLElement>("[data-section]")?.dataset.section ?? "page";
}

export default function AnalyticsEvents() {
  useEffect(() => {
    // ---- clicks ----
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      const text = (a.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 80);
      const t = activeTrack(a);

      if (href.includes("calendly.com")) {
        const placement = bookPlacement(a, t, text);
        track("schedule_call_click", { placement, track: t, link_text: text });
        return;
      }
      // Self-check button: scrolls to the booking band of that track
      const result = a.closest(".fit-result");
      if (result) {
        const v = VERDICTS[result.querySelector(".fit-v")?.textContent?.trim() ?? ""] ?? "unknown";
        const n = Number(result.querySelector(".fit-score b")?.textContent ?? 0);
        track("selfcheck_cta_click", { track: t, verdict: v, ticked_count: n, cta_text: text });
        return;
      }
      if (href.startsWith("mailto:") || href.startsWith("tel:")) {
        track("contact_click", {
          method: href.startsWith("mailto:") ? "email" : "phone",
          placement: a.closest<HTMLElement>("section[id]")?.id ?? "privacy_contact"
        });
        return;
      }
      if (a.classList.contains("logo")) {
        track("logo_click");
        return;
      }
      if (href === "/privacy" || href.endsWith("/privacy")) {
        track("privacy_click", { placement: placementOf(a) });
        return;
      }
      if (/^https?:\/\//.test(href) && !href.includes(location.hostname)) {
        const destination = href.includes("linkedin.com") ? "linkedin" : href.includes("primebottomline.vc") ? "fund_site" : "other";
        track("outbound_click", { destination, placement: placementOf(a), link_text: text });
        return;
      }
      const hash = href.includes("#") ? href.slice(href.indexOf("#")) : "";
      if (hash) {
        if (a.closest("header")) {
          track("nav_click", { link_text: text, destination: hash });
        } else if (a.closest(".hero")) {
          track("hero_door_click", { door: hash.slice(1) });
        } else if ((hash === "#founders" || hash === "#business") && a.closest("[data-track]")) {
          track("cross_track_link_click", { from_track: t, to_track: hash.slice(1) });
        }
      }
    };

    // ---- FAQ opens (toggle does not bubble, so listen in the capture phase) ----
    const onToggle = (e: Event) => {
      const d = e.target as HTMLDetailsElement;
      if (!(d instanceof HTMLDetailsElement) || !d.open) return;
      const q = (d.querySelector("summary")?.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 100);
      const siblings = d.parentElement ? Array.from(d.parentElement.querySelectorAll(":scope > details")) : [];
      track("faq_open", { track: activeTrack(d), question: q, question_index: Math.max(0, siblings.indexOf(d)) });
    };

    // ---- sections in view (30% visible for 1 s, once each) ----
    const seen = new Set<string>();
    const timers = new Map<Element, number>();
    const all = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          const el = en.target as HTMLElement;
          const id = el.dataset.section!;
          if (en.isIntersecting && !seen.has(id)) {
            timers.set(
              el,
              window.setTimeout(() => {
                seen.add(id);
                track("section_view", { section_id: id, track: activeTrack(el), section_order: all.indexOf(el) + 1 });
                io.unobserve(el);
              }, 1000)
            );
          } else {
            const tm = timers.get(el);
            if (tm) clearTimeout(tm);
            timers.delete(el);
          }
        }
      },
      { threshold: 0.3 }
    );
    all.forEach((el) => io.observe(el));

    // ---- scroll depth (GA's own scroll event only fires at 90%) ----
    const depths = new Set<number>();
    const onScroll = () => {
      const h = document.documentElement.scrollHeight;
      const pct = ((window.scrollY + window.innerHeight) / h) * 100;
      for (const mark of [25, 50, 75, 100]) {
        if (pct >= (mark === 100 ? 98 : mark) && !depths.has(mark)) {
          depths.add(mark);
          track("scroll_depth", { percent: mark });
        }
      }
    };

    document.addEventListener("click", onClick);
    document.addEventListener("toggle", onToggle, true);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("toggle", onToggle, true);
      window.removeEventListener("scroll", onScroll);
      timers.forEach((tm) => clearTimeout(tm));
      io.disconnect();
    };
  }, []);

  return null;
}
