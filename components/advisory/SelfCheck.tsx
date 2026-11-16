"use client";

import { useId, useState, type ReactNode } from "react";
import { track } from "@/lib/analytics";

type Props = {
  items: string[];
  ctaHref: string;
  children?: ReactNode;
};

// "Is this for you?" — the score and verdict update as boxes are ticked.
function verdict(count: number) {
  if (count === 0)
    return {
      title: "Start ticking",
      note: "If four or more sound like you, a short call will tell us if we fit.",
      cta: null
    };
  if (count <= 2)
    return {
      title: "Maybe not yet",
      note: "We may not be the right fit today. If a round, a new market or a deal is coming, a call can still help.",
      cta: "Talk to us anyway"
    };
  if (count <= 4)
    return {
      title: "A good fit",
      note: "These are the problems we fix every month. A 30-minute call will tell us both.",
      cta: "Book a call"
    };
  return {
    title: "A strong fit",
    note: "You sound like the companies we built this for. Let's talk.",
    cta: "Book a call"
  };
}

const BAND = (n: number) => (n === 0 ? "start" : n <= 2 ? "maybe_not_yet" : n <= 4 ? "good_fit" : "strong_fit");

export default function SelfCheck({ items, ctaHref, children }: Props) {
  const [ticked, setTicked] = useState<boolean[]>(() => items.map(() => false));
  const id = useId();
  const count = ticked.filter(Boolean).length;
  const v = verdict(count);

  return (
    <div className="fit">
      <div className="fit-list">
        <div className="fit-k">Tick what sounds like you</div>
        <ul>
          {items.map((item, i) => (
            <li key={item}>
              <label htmlFor={`${id}-${i}`}>
                <input
                  id={`${id}-${i}`}
                  type="checkbox"
                  checked={ticked[i]}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    const t = e.target.closest<HTMLElement>("[data-track]")?.dataset.track ?? "none";
                    const next = count + (checked ? 1 : -1);
                    track("selfcheck_interact", { track: t, item_index: i, checked, ticked_count: next });
                    if (BAND(next) !== BAND(count) && next > 0) {
                      track("selfcheck_verdict", { track: t, verdict: BAND(next), ticked_count: next });
                    }
                    setTicked((prev) => prev.map((t, j) => (j === i ? checked : t)));
                  }}
                />
                <span>{item}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="fit-side">
        <div className="fit-result" aria-live="polite">
          <div className="fit-score">
            <b>{count}</b>
            <span>of {items.length}</span>
          </div>
          <div>
            <div className="fit-v">{v.title}</div>
            <p>{v.note}</p>
            {v.cta ? (
              <a className="btn" href={ctaHref}>
                {v.cta}
              </a>
            ) : null}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
