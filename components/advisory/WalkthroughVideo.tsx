"use client";

import { useEffect, useRef, useState } from "react";
import { WALKTHROUGH } from "@/lib/advisory-config";
import { track } from "@/lib/analytics";

// Founders portal walkthrough.
// Muted, looped, inline, preload none. Plays when it scrolls into view and pauses when it
// scrolls out (or its tab is hidden). Has a play/pause button. With reduced motion turned on
// it never starts by itself.
export default function WalkthroughVideo() {
  const figRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const inView = useRef(false);
  const [playing, setPlaying] = useState(false);
  const userAction = useRef(false);
  const marks = useRef(new Set<number>());

  useEffect(() => {
    const fig = figRef.current;
    const video = videoRef.current;
    if (!fig || !video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    userPaused.current = reduce;

    const sync = () => {
      const want = !userPaused.current && inView.current;
      if (want && video.paused) {
        video.preload = "auto";
        video.play().then(
          () => setPlaying(true),
          () => setPlaying(false)
        );
      } else if (!want && !video.paused) {
        video.pause();
        setPlaying(false);
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        // Same rule as the design: counts as visible once it is well inside the viewport.
        inView.current = entry.isIntersecting;
        sync();
      },
      { rootMargin: "-15% 0px -15% 0px" }
    );
    io.observe(fig);

    const onPause = () => {
      setPlaying(false);
      const trigger = userAction.current ? "user" : document.hidden ? "tab_hidden" : "scroll_out";
      userAction.current = false;
      track("walkthrough_pause", { trigger, current_time_sec: Math.round(video.currentTime) });
    };
    const onPlay = () => {
      setPlaying(true);
      track("walkthrough_play", { trigger: userAction.current ? "user" : "autoplay" });
      userAction.current = false;
    };
    const onTime = () => {
      if (!video.duration) return;
      const pct = (video.currentTime / video.duration) * 100;
      for (const m of [25, 50, 75]) {
        if (pct >= m && !marks.current.has(m)) {
          marks.current.add(m);
          track("walkthrough_progress", { percent: m, seconds_watched: Math.round(video.currentTime) });
        }
      }
    };
    video.addEventListener("pause", onPause);
    video.addEventListener("play", onPlay);
    video.addEventListener("timeupdate", onTime);

    return () => {
      io.disconnect();
      video.removeEventListener("pause", onPause);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("timeupdate", onTime);
    };
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    userAction.current = true;
    if (video.paused) {
      userPaused.current = false;
      video.preload = "auto";
      video.play().catch(() => setPlaying(false));
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  return (
    <figure ref={figRef} className={`player${playing ? "" : " paused"}`}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster={WALKTHROUGH.poster}
        aria-label="Walkthrough of the founder portal: company set-up, monthly close, dashboard, data room and legal"
        onClick={toggle}
      >
        <source src={WALKTHROUGH.video} type="video/mp4" />
      </video>
      <button
        className="pp"
        type="button"
        aria-label={playing ? "Pause walkthrough" : "Play walkthrough"}
        onClick={toggle}
      >
        <span className="i-play">▶</span>
        <span className="i-pause">❚❚</span>
      </button>
      <figcaption>Portal walkthrough, 40 seconds · sample company, made-up figures</figcaption>
    </figure>
  );
}
