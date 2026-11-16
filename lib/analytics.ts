// GA4 helper. Safe to call anywhere on the client: does nothing during SSR, and if gtag is
// not defined it just queues on dataLayer (events only leave the browser on the real domains,
// see components/Analytics.tsx).

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __gaq?: [string, Record<string, unknown>][];
  }
}

export function viewport(): "mobile" | "tablet" | "desktop" {
  const w = window.innerWidth;
  return w < 768 ? "mobile" : w < 1100 ? "tablet" : "desktop";
}

export function pageType(): string {
  return window.location.pathname.startsWith("/privacy") ? "privacy" : "home";
}

export function track(name: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  const clean: Params = { page_type: pageType(), viewport: viewport(), ...params };
  for (const k of Object.keys(clean)) if (clean[k] === undefined) delete clean[k];
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, { ...clean, transport_type: "beacon" });
    } else {
      // gtag is defined a moment after hydration; hold early events (e.g. on page load)
      // and let components/Analytics.tsx send them once it is ready.
      (window.__gaq = window.__gaq || []).push([name, { ...clean, transport_type: "beacon" }]);
    }
  } catch {
    /* analytics must never break the page */
  }
}
