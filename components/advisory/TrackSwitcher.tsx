"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { track } from "@/lib/analytics";

type Track = "founders" | "business";

const HINTS: Record<Track, string> = {
  founders: "Showing: from finance to your next round",
  business: "Showing: from monthly numbers to your exit"
};

// Bottom edge of the sticky headers above the switch bar
// (the site's main header + the Advisory sub-header).
function headerBottom() {
  const sub = document.querySelector(".pba-header");
  return sub ? sub.getBoundingClientRect().bottom : 0;
}

function isTrack(v: string): v is Track {
  return v === "founders" || v === "business";
}

// Founders / Established businesses switch.
// - #founders and #business open that track (on load, and from any link on the page).
// - Links to anything inside a track (e.g. #book-business) open that track first, then scroll.
// - Other anchors, like #scope, scroll normally.
export default function TrackSwitcher({ founders, business }: { founders: ReactNode; business: ReactNode }) {
  const [active, setActive] = useState<Track>("founders");
  const switchRef = useRef<HTMLDivElement>(null);
  const pendingScroll = useRef<{ id: string; smooth: boolean } | null>(null);

  const reduceMotion = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Which track (if any) a hash points to.
  const trackFor = (id: string): Track | null => {
    if (isTrack(id)) return id;
    const el = document.getElementById(id);
    const panel = el?.closest<HTMLElement>("[data-track]");
    const t = panel?.dataset.track ?? "";
    return isTrack(t) ? t : null;
  };

  const scrollTo = useCallback((id: string, smooth: boolean) => {
    const behavior: ScrollBehavior = smooth && !reduceMotion() ? "smooth" : "auto";
    const bar = switchRef.current;
    if (!bar) return;
    let y: number;
    if (isTrack(id)) {
      // The switch bar is sticky, so measure where it naturally sits: right after the hero.
      const before = bar.previousElementSibling;
      const natural = before ? before.getBoundingClientRect().bottom : bar.getBoundingClientRect().top;
      y = natural + window.scrollY - headerBottom();
    } else {
      const el = document.getElementById(id);
      if (!el) return;
      // Land just below the sticky header and the sticky switch bar.
      y = el.getBoundingClientRect().top + window.scrollY - headerBottom() - bar.offsetHeight;
    }
    window.scrollTo({ top: Math.max(0, Math.round(y)), behavior });
  }, []);

  const go = useCallback(
    (id: string, smooth: boolean, method = "url_hash") => {
      const t = trackFor(id);
      if (!t) return false;
      if (t !== active) track("track_select", { track: t, from_track: active, method });
      pendingScroll.current = { id, smooth };
      setActive(t);
      // If the track is already showing, no re-render happens, so scroll now.
      if (t === active) {
        scrollTo(id, smooth);
        pendingScroll.current = null;
      }
      history.replaceState(null, "", `#${id}`);
      return true;
    },
    [active, scrollTo]
  );

  // Scroll once the newly chosen track is visible.
  useEffect(() => {
    const p = pendingScroll.current;
    if (!p) return;
    pendingScroll.current = null;
    requestAnimationFrame(() => scrollTo(p.id, p.smooth));
  }, [active, scrollTo]);

  // Page opened with a hash.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    if (!go(id, false)) {
      // e.g. #scope: make sure it lands correctly after hydration.
      requestAnimationFrame(() => scrollTo(id, false));
    }
    // Web fonts can shift the layout after the first scroll; land again once they have loaded.
    let cancelled = false;
    const settle = () => {
      if (!cancelled && window.location.hash.slice(1) === id) scrollTo(id, false);
    };
    document.fonts?.ready.then(() => requestAnimationFrame(settle));
    if (document.readyState === "complete") requestAnimationFrame(settle);
    else window.addEventListener("load", settle, { once: true });
    // Stop correcting as soon as the visitor scrolls themselves.
    const stop = () => {
      cancelled = true;
    };
    window.addEventListener("wheel", stop, { once: true, passive: true });
    window.addEventListener("touchstart", stop, { once: true, passive: true });
    window.addEventListener("keydown", stop, { once: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // In-page links (hero cards, header nav, "see the other track", self-check buttons).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      const href = a?.getAttribute("href");
      if (!href || !href.startsWith("#") || href.length < 2) return;
      const method = a?.closest(".pba-header")
        ? "header_nav"
        : a?.closest(".hero")
          ? "hero_door"
          : a?.closest(".fit")
            ? "selfcheck_link"
            : "cross_link";
      if (go(decodeURIComponent(href.slice(1)), true, method)) e.preventDefault();
    };
    const onHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (id) go(id, true);
    };
    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHash);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHash);
    };
  }, [go]);

  return (
    <>
      <div className="switch" ref={switchRef}>
        <div className="wrap">
          <div className="seg" role="tablist" aria-label="Choose your view">
            {(["founders", "business"] as Track[]).map((t) => (
              <button
                key={t}
                role="tab"
                id={`tab-${t}`}
                aria-controls={t}
                aria-selected={active === t}
                onClick={() => go(t, true, "tab")}
              >
                {t === "founders" ? "Founders" : "Established businesses"}
              </button>
            ))}
          </div>
          <div className="hint">{HINTS[active]}</div>
        </div>
      </div>

      <section
        className={`panel${active === "founders" ? " on" : ""}`}
        id="founders"
        data-track="founders"
        role="tabpanel"
        aria-labelledby="tab-founders"
      >
        {founders}
      </section>
      <section
        className={`panel${active === "business" ? " on" : ""}`}
        id="business"
        data-track="business"
        role="tabpanel"
        aria-labelledby="tab-business"
      >
        {business}
      </section>
    </>
  );
}
