"use client";

import HTMLFlipBook from "react-pageflip";
import Link from "next/link";
import { forwardRef, useEffect, useRef, useState } from "react";
import CaseStudyOverlay from "./components/CaseStudyOverlay";

/**
 * Home — "A Little Book of Things I've Made"
 *
 * A real picture book powered by react-pageflip (StPageFlip): soft page curl,
 * drag-to-turn, corner peel. Picture on the left page, words on the right.
 * Each chapter links into a full case study (the rigorous "rooms").
 * "View as a list" (top-right) is the fast path for recruiters in a hurry.
 */

const stop = (e: React.MouseEvent) => e.stopPropagation();

// Opens a case study overlay via a window event (buttons live at module scope).
const openStudy = (n: number) => (e: React.MouseEvent) => {
  e.stopPropagation();
  window.dispatchEvent(new CustomEvent("open-study", { detail: n }));
};

// Flips the book to a given page via a window event (buttons live at module scope).
const gotoPage = (n: number) => (e: React.MouseEvent) => {
  e.stopPropagation();
  window.dispatchEvent(new CustomEvent("goto-page", { detail: n }));
};

// A single book page. react-pageflip needs each page to forward a ref.
const Page = forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  function Page({ className, children, ...rest }, ref) {
    return (
      <div className={`leaf ${className ?? ""}`} ref={ref} {...rest}>
        <div className="leaf-inner">{children}</div>
      </div>
    );
  },
);

interface Spread {
  left: React.ReactNode;
  right: React.ReactNode;
}

const spreads: Spread[] = [
  // opening — intro on the left, table of contents on the right
  {
    left: (
      <div className="opening">
        <p className="lead">Product + Interaction Designer</p>
        <h1 className="hero-name">Christina&nbsp;Ma</h1>
        <p className="story">
          Designing playful,<br />
          intuitive <em>experiences</em>.
        </p>
        <div className="hero-rocket-group" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-rocket" src="/projects/hero-rocket.png" alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-star star-a" src="/projects/hero-star-1.png" alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-star star-b" src="/projects/hero-star-2.png" alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-star star-c" src="/projects/hero-star-3.png" alt="" />
        </div>
      </div>
    ),
    right: (
      <div className="text toc">
        <p className="cap-once">目录 · Contents</p>
        <h2>The chapters</h2>
        <ol className="toc-list">
          <li>
            <button type="button" onClick={gotoPage(2)}>
              <span className="toc-num">01</span>
              <span className="toc-body">
                <span className="toc-title">Little Checks</span>
                <span className="toc-sub">A cozy little habit app</span>
              </span>
              <span className="toc-dot live" title="On the App Store">●</span>
            </button>
          </li>
          <li>
            <button type="button" onClick={gotoPage(4)}>
              <span className="toc-num">02</span>
              <span className="toc-body">
                <span className="toc-title">Dear Traveler</span>
                <span className="toc-sub">A diary that writes back</span>
              </span>
              <span className="toc-dot live" title="On the App Store">●</span>
            </button>
          </li>
          <li>
            <button type="button" onClick={gotoPage(6)}>
              <span className="toc-num">03</span>
              <span className="toc-body">
                <span className="toc-title">Student Testing</span>
                <span className="toc-sub">Redesigning a test that measured the wrong thing</span>
              </span>
            </button>
          </li>
          <li>
            <button type="button" onClick={gotoPage(8)}>
              <span className="toc-num">04</span>
              <span className="toc-body">
                <span className="toc-title">ABC Countdown</span>
                <span className="toc-sub">A 3D game about being five again</span>
              </span>
              <span className="toc-dot wip" title="In the workshop">●</span>
            </button>
          </li>
          <li>
            <button type="button" onClick={gotoPage(10)}>
              <span className="toc-num">05</span>
              <span className="toc-body">
                <span className="toc-title">About the Author</span>
                <span className="toc-sub">From classroom insight to product design</span>
              </span>
            </button>
          </li>
        </ol>
        <p className="toc-hint">turn the page to read each chapter →</p>
      </div>
    ),
  },
  // Little Checks
  {
    left: (
      <div className="plate">
        <video
          className="shot"
          src="/projects/lc-demo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    ),
    right: (
      <div className="text">
        <p className="cap-once">Chapter one</p>
        <h2>Little Checks</h2>
        <p className="one">“Ms. Ma&apos;s cozy little habit app.”</p>
        <div className="tags">
          <span className="live">● On the App Store</span>
          <span>Designed &amp; coded end-to-end</span>
          <span>SwiftUI</span>
        </div>
        <div className="links">
          <button type="button" className="read" onClick={openStudy(0)}>
            Read the story →
          </button>
          <a
            href="https://apps.apple.com/us/app/little-checks/id6760602816"
            target="_blank"
            rel="noopener noreferrer"
            onClick={stop}
            className="ext"
          >
            App Store ↗
          </a>
        </div>      </div>
    ),
  },
  // Dear Traveler
  {
    left: (
      <div className="plate">
        <video
          className="shot"
          src="/projects/dt-demo2.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    ),
    right: (
      <div className="text">
        <p className="cap-once">Chapter two</p>
        <h2>Dear Traveler</h2>
        <p className="one">“A diary that writes back.”</p>
        <div className="tags">
          <span className="live">● On the App Store</span>
          <span>Wrote the story</span>
          <span>Interactive fiction</span>
        </div>
        <div className="links">
          <button type="button" className="read" onClick={openStudy(1)}>
            Read the story →
          </button>
          <a
            href="https://apps.apple.com/us/app/dear-traveler-a-story-game/id6751476313"
            target="_blank"
            rel="noopener noreferrer"
            onClick={stop}
            className="ext"
          >
            App Store ↗
          </a>
        </div>      </div>
    ),
  },
  // Student Testing
  {
    left: (
      <div className="plate">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="shot" src="/projects/stp-dashboard.png" alt="Student Testing" />
      </div>
    ),
    right: (
      <div className="text">
        <p className="cap-once">Chapter three</p>
        <h2>Student Testing</h2>
        <p className="one">
          “Redesigning a test that measured the wrong thing.”
        </p>
        <div className="tags">
          <span>UX research</span>
          <span>3 years of classroom observation</span>
          <span>Concept redesign</span>
        </div>
        <div className="links">
          <button type="button" className="read" onClick={openStudy(2)}>
            Read the story →
          </button>
        </div>      </div>
    ),
  },
  // ABC Countdown
  {
    left: (
      <div className="plate">
        <video
          className="shot"
          src="/projects/abc-playtest.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    ),
    right: (
      <div className="text">
        <p className="cap-once">Now being written…</p>
        <h2>ABC Countdown</h2>
        <p className="one">“A 3D game about being five again.”</p>
        <div className="tags">
          <span className="wip">● In the workshop</span>
          <span>Unity · Blender</span>
          <span>Scene, NPCs &amp; dialogue</span>
        </div>
        <div className="links">
          <button type="button" className="read" onClick={openStudy(3)}>
            Peek at the workshop →
          </button>
        </div>      </div>
    ),
  },
  // About the author
  {
    left: (
      <div className="plate author-plate">
        <div className="polaroid">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="polaroid-tape" src="/projects/tape.png" alt="" aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="polaroid-photo" src="/christina.png" alt="Christina Ma" />
        </div>
        <p className="lead">About the author</p>
        <div className="btns">
          <a className="primary" href="mailto:wuxuan.ma@gmail.com" onClick={stop}>
            Say hello
          </a>
          <a
            href="https://www.linkedin.com/in/christina-ma-a564a3a4/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={stop}
          >
            LinkedIn
          </a>
          <Link href="/resume" onClick={stop}>
            Résumé
          </Link>
        </div>
      </div>
    ),
    right: (
      <div className="text">
        <p className="author-bio">
          I&apos;m <b>Christina</b> — a product designer with a teacher&apos;s eye
          for behavior, clarity, and tiny moments that make or break an
          experience.
        </p>
        <p className="author-bio">
          After years in a bilingual kindergarten classroom, I&apos;ve learned
          how people actually react when instructions are confusing, systems are
          messy, and attention is limited. Now I bring that lens into digital
          products: designing apps, playful tools, and interactive experiences
          that feel easier, warmer, and more human.
        </p>
        <p className="author-bio">
          I&apos;m looking for a product design team that values thoughtful
          systems, strong storytelling, and a little play.
        </p>
        <div className="tags">
          <span>product design</span>
          <span>education</span>
          <span>game UX</span>
          <span>prototyping</span>
          <span>human behavior</span>
        </div>
      </div>
    ),
  },
];

// A little hand-drawn doodle for each chapter, placed on the named page side.
interface Doodle {
  side: "left" | "right";
  node: React.ReactNode;
}
const pageDoodles: Doodle[] = [
  // opening — a dotted sun/swirl (right / words page)
  {
    side: "right",
    node: (
      <svg key="d0" className="doodle d-float" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path className="d-dash" d="M24 13 a11 11 0 1 1 -8 3.5" stroke="#e0a341" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 8" />
      </svg>
    ),
  },
  // Little Checks — a checkmark that draws itself, on the video page
  {
    side: "left",
    node: (
      <svg key="d1" className="doodle lc-check" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <g className="lc-stars">
          <path className="st st-a" d="M41 7 l1.3 3.2 3.2 1.3 -3.2 1.3 -1.3 3.2 -1.3 -3.2 -3.2 -1.3 3.2 -1.3 Z" fill="#e0a341" />
          <path className="st st-b" d="M6 13 l1 2.4 2.4 1 -2.4 1 -1 2.4 -1 -2.4 -2.4 -1 2.4 -1 Z" fill="#e0603f" />
          <path className="st st-c" d="M43 35 l1 2.4 2.4 1 -2.4 1 -1 2.4 -1 -2.4 -2.4 -1 2.4 -1 Z" fill="#3e6fe0" />
        </g>
        <path className="lc-line" d="M9 25 L20 36 L40 11" stroke="#e0603f" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  // Dear Traveler — a glowing glass slipper bouncing left↔right, on the picture page
  {
    side: "left",
    node: (
      <svg key="d2" className="doodle dt-slipper" viewBox="0 0 150 110" fill="none" aria-hidden="true">
        {/* shoe body — flat sole, rounded toe (left), open top, tall counter + thin heel (right) */}
        <path className="glass" d="M14 84 C 14 66, 28 52, 50 50 C 66 58, 84 60, 100 56 C 110 53, 118 46, 124 40 C 130 42, 129 54, 124 62 C 123 72, 122 82, 120 92 L 114 92 C 115 82, 114 71, 110 64 C 100 76, 94 84, 80 88 C 56 91, 30 90, 18 86 C 15 85, 13 85, 14 84 Z" fill="#9ed8f5" stroke="#3fa9e6" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
        {/* open top / inner cavity */}
        <path d="M52 52 C 68 60, 86 61, 102 57 C 112 54, 119 49, 123 44 C 120 56, 109 64, 92 66 C 76 68, 62 62, 55 55 C 53 53, 52 52, 52 52 Z" fill="#cfeefb" stroke="#7cc7ea" strokeWidth="1.2" />
        {/* glossy highlight on the heel counter */}
        <path d="M125 43 C 131 50, 130 58, 125 64 C 129 56, 129 48, 125 43 Z" fill="#ffffff" opacity="0.75" />
        {/* toe gloss */}
        <path d="M22 70 C 28 62, 36 59, 44 60 C 36 63, 31 68, 28 74 C 24 74, 22 73, 22 70 Z" fill="#ffffff" opacity="0.5" />
        <g className="shine">
          <path transform="translate(78,60)" d="M0 -8 L1.8 -1.8 8 0 1.8 1.8 0 8 -1.8 1.8 -8 0 -1.8 -1.8 Z" fill="#ffffff" />
          <path transform="translate(106,52)" d="M0 -5 L1.2 -1.2 5 0 1.2 1.2 0 5 -1.2 1.2 -5 0 -1.2 -1.2 Z" fill="#ffffff" />
          <path transform="translate(50,74)" d="M0 -5 L1.2 -1.2 5 0 1.2 1.2 0 5 -1.2 1.2 -5 0 -1.2 -1.2 Z" fill="#ffffff" />
          <path transform="translate(34,48)" d="M0 -6 L1.4 -1.4 6 0 1.4 1.4 0 6 -1.4 1.4 -6 0 -1.4 -1.4 Z" fill="#f2c84b" />
          <path transform="translate(136,86)" d="M0 -5 L1.2 -1.2 5 0 1.2 1.2 0 5 -1.2 1.2 -5 0 -1.2 -1.2 Z" fill="#f2c84b" />
        </g>
      </svg>
    ),
  },
  // Student Testing — a pulsing hand-drawn "A+" stamp on the picture page
  {
    side: "left",
    node: (
      <svg key="d3" className="doodle aplus-stamp d-pulse" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <g stroke="#a3261b" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M58 11 C 82 14, 93 33, 90 54 C 87 78, 66 91, 44 88 C 22 85, 9 64, 13 43 C 17 22, 37 10, 63 14" />
          <path d="M33 71 L45 29 L57 71" />
          <path d="M37 57 L53 57" />
          <path d="M71 45 L71 65" />
          <path d="M61 55 L81 55" />
        </g>
      </svg>
    ),
  },
  // ABC Countdown — a smiling, winking bear on the picture page
  {
    side: "left",
    node: (
      <svg key="d4" className="doodle bear-doodle bear-bob" viewBox="0 0 100 98" fill="none" aria-hidden="true">
        <g fill="#e7d2ac" stroke="#4a3b2c" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          {/* hands & feet first so the body covers most of them */}
          <ellipse cx="31" cy="70" rx="6" ry="7" />
          <ellipse cx="69" cy="70" rx="6" ry="7" />
          <ellipse cx="40" cy="88" rx="9" ry="6.5" />
          <ellipse cx="60" cy="88" rx="9" ry="6.5" />
          <ellipse cx="50" cy="72" rx="18" ry="15" />
          <circle cx="26" cy="16" r="12" />
          <circle cx="74" cy="16" r="12" />
          <ellipse cx="50" cy="41" rx="30" ry="26" />
        </g>
        <g fill="#f8e8d2" stroke="#4a3b2c" strokeWidth="2">
          <circle cx="28" cy="17" r="5.5" />
          <circle cx="72" cy="17" r="5.5" />
        </g>
        <g fill="#f8e8d2">
          <circle cx="40" cy="91" r="2.4" />
          <circle cx="60" cy="91" r="2.4" />
        </g>
        {/* face */}
        <circle cx="40" cy="40" r="3.4" fill="#4a3b2c" />
        {/* right eye winks: open dot most of the time, brief closed arc */}
        <circle className="eye-open" cx="60" cy="40" r="3.4" fill="#4a3b2c" />
        <path className="eye-wink" d="M55 41 Q60 35 65 41" fill="none" stroke="#4a3b2c" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="50" cy="48" rx="4.2" ry="3.2" fill="#4a3b2c" />
        <path d="M50 50 L50 54 M39 54 Q50 64 61 54" fill="none" stroke="#4a3b2c" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  // About — a wiggling music note (right)
  { side: "right", node: <span key="d5" className="doodle doodle-text d-wiggle">♪</span> },
  // The end — a shooting star with a dotted trail (right)
  {
    side: "right",
    node: (
      <svg key="d6" className="doodle d-float" viewBox="0 0 60 48" fill="none" aria-hidden="true">
        <path className="d-dash" d="M4 42 C 16 36, 26 28, 35 18" stroke="#e0a341" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="2 8" />
        <path d="M41 6 l2.6 7.4 7.8 .6 -6 5 2 7.6 -6.4 -4.2 -6.6 4 1.8 -7.6 -5.6 -5.4 7.8 -.4 Z" fill="rgba(255,255,255,.9)" stroke="#e0603f" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
];

type PageFlip = {
  flipNext: () => void;
  flipPrev: () => void;
  flip: (page: number) => void;
  getPageCount: () => number;
};

export default function Home() {
  const bookRef = useRef<{ pageFlip: () => PageFlip } | null>(null);
  const starRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [page, setPage] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const overlayOpenRef = useRef(false);
  useEffect(() => {
    overlayOpenRef.current = openIdx !== null;
  }, [openIdx]);

  // Open a case study when a chapter button dispatches the event.
  useEffect(() => {
    const onOpen = (e: Event) =>
      setOpenIdx((e as CustomEvent<number>).detail);
    window.addEventListener("open-study", onOpen as EventListener);
    return () =>
      window.removeEventListener("open-study", onOpen as EventListener);
  }, []);

  // Flip to a chapter page when a table-of-contents entry is clicked.
  useEffect(() => {
    const onGoto = (e: Event) =>
      bookRef.current?.pageFlip()?.flip((e as CustomEvent<number>).detail);
    window.addEventListener("goto-page", onGoto as EventListener);
    return () =>
      window.removeEventListener("goto-page", onGoto as EventListener);
  }, []);

  const total = spreads.length * 2; // (left,right)*n — no covers

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Pulsing-star cursor whenever hovering something clickable (replaces the hand).
  useEffect(() => {
    const star = starRef.current;
    if (!star) return;
    const isClickable = (t: EventTarget | null) =>
      t instanceof Element && !!t.closest('a,button,[role="button"]');
    const onMove = (e: MouseEvent) => {
      star.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      star.classList.toggle("on", isClickable(e.target));
    };
    const onLeave = () => star.classList.remove("on");
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const next = () => bookRef.current?.pageFlip()?.flipNext();
  const prev = () => bookRef.current?.pageFlip()?.flipPrev();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (overlayOpenRef.current) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="book-home">
      <style>{css}</style>

      <div ref={starRef} className="star-cursor" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path
            d="M12 2 L14.9 8.6 L22 9.2 L16.5 13.8 L18.3 20.8 L12 17 L5.7 20.8 L7.5 13.8 L2 9.2 L9.1 8.6 Z"
            fill="#f4ecd6"
            stroke="#1b2a32"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {openIdx !== null && (
        <CaseStudyOverlay
          key={openIdx}
          index={openIdx}
          onClose={() => setOpenIdx(null)}
          onNavigate={(i) => setOpenIdx(i)}
        />
      )}

      <div className="hint">
        drag a page corner, click the page edges, or use ← → arrows
      </div>

      <div className="book-stage">
        {mounted && (
          // @ts-expect-error — react-pageflip's prop types mark every setting
          // as required; we pass the ones we need and let the rest default.
          <HTMLFlipBook
            ref={bookRef}
            className="flipbook"
            width={460}
            height={620}
            size="stretch"
            minWidth={300}
            maxWidth={560}
            minHeight={400}
            maxHeight={760}
            drawShadow
            flippingTime={800}
            maxShadowOpacity={0.5}
            showCover={false}
            mobileScrollSupport
            clickEventForward
            useMouseEvents
            showPageCorners
            swipeDistance={30}
            usePortrait
            startZIndex={5}
            autoSize
            onFlip={(e: { data: number }) => setPage(e.data)}
          >
            {spreads.flatMap((s, idx) => [
              <Page key={`l${idx}`} className="pg left">
                {s.left}
              </Page>,
              <Page key={`r${idx}`} className="pg right">
                {s.right}
              </Page>,
            ])}
          </HTMLFlipBook>
        )}

        {/* sparkles clustered into the book's top-right corner */}
        <div className="corner-sparks" aria-hidden="true">
          <span className="spark s1">✦</span>
          <span className="spark s2">✧</span>
          <span className="spark s3">✦</span>
          <span className="spark s4">✧</span>
        </div>
      </div>

      {/* Paper planes looping across the whole page with dotted contrails */}
      <div className="doodles" aria-hidden="true">
        <svg className="plane plane-1" viewBox="0 0 92 36" fill="none">
          <path className="trail" d="M0 18 L34 18" stroke="#e0a341" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="1.5 8" />
          <path d="M38 8 L86 18 L38 28 L54 18 Z" fill="rgba(255,255,255,.92)" stroke="#c0532f" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M54 18 L86 18" stroke="#c0532f" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
        <svg className="plane plane-2" viewBox="0 0 92 36" fill="none">
          <path className="trail" d="M0 18 L34 18" stroke="#3e6fe0" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="1.5 8" />
          <path d="M38 8 L86 18 L38 28 L54 18 Z" fill="rgba(255,255,255,.92)" stroke="#3e6fe0" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M54 18 L86 18" stroke="#3e6fe0" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="nav">
        <button aria-label="Previous page" disabled={page <= 0} onClick={prev}>
          ‹
        </button>
        <button
          aria-label="Next page"
          disabled={page >= total - 2}
          onClick={next}
        >
          ›
        </button>
      </div>
    </main>
  );
}

const css = `
  /* playful paper-airplane cursor — hand-drawn sticker style (matches the rocket & stars) */
  .book-home, .book-home *{
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='36' viewBox='0 0 44 40'%3E%3Cpath d='M6 6 L38 15 L24 20 L28 32 Z' fill='%23f4ecd6' stroke='%231b2a32' stroke-width='3.2' stroke-linejoin='round'/%3E%3Cpath d='M6 6 L24 20' fill='none' stroke='%231b2a32' stroke-width='2.8' stroke-linecap='round'/%3E%3C/svg%3E") 6 6, auto;
  }
  /* over clickable things, hide the hand — a pulsing star follows instead */
  .book-home a, .book-home button, .book-home [role="button"]{ cursor: none !important; }
  .book-home .star-cursor{
    position:fixed; left:0; top:0; width:24px; height:24px; margin:-12px 0 0 -12px;
    pointer-events:none; z-index:9999; opacity:0; transition:opacity .12s ease;
    will-change:transform;
  }
  .book-home .star-cursor.on{ opacity:1; }
  .book-home .star-cursor svg{
    display:block; width:24px; height:24px; transform-origin:center;
    filter:drop-shadow(0 2px 3px rgba(60,40,15,.22));
    animation:starPulse .85s ease-in-out infinite;
  }
  @keyframes starPulse{
    0%,100%{ transform:scale(.72) rotate(-6deg); opacity:.75; }
    50%{ transform:scale(1.08) rotate(6deg); opacity:1; }
  }
  .book-home{
    --paper:#fbf3df; --ink:#4a3b2c; --soft:#9a8a72; --accent:#e0603f;
    font-family:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif;
    color:var(--ink);
    min-height:100dvh;overflow:hidden;position:relative;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    -webkit-font-smoothing:antialiased;
    background-color:#fde9c8;
    background-image:
      radial-gradient(130% 110% at 50% 0%, #fff3dc 0%, #fbe2bd 45%, #f6cf9f 100%),
      radial-gradient(60% 50% at 88% 92%, rgba(224,96,63,.10), transparent 70%),
      radial-gradient(55% 45% at 10% 90%, rgba(62,111,224,.08), transparent 70%);
  }
  .book-home .list-link{
    position:fixed;top:18px;right:20px;z-index:300;
    font-family:ui-sans-serif,system-ui,sans-serif;font-size:13px;letter-spacing:.02em;
    color:#7a6747;background:rgba(255,255,255,.7);border:1px solid rgba(150,110,60,.25);
    border-radius:999px;padding:7px 14px;text-decoration:none;backdrop-filter:blur(6px);transition:background .2s;
  }
  .book-home .list-link:hover{background:#fff}
  .book-home .hint{
    position:absolute;top:26px;left:50%;transform:translateX(-50%);
    font-size:13px;letter-spacing:.04em;color:#9a7e58;opacity:.85;
    font-family:ui-sans-serif,system-ui,sans-serif;white-space:nowrap;text-align:center;
  }
  @media (max-width:720px){ .book-home .hint{font-size:11px;white-space:normal;width:82%} }

  .book-home .book-stage{position:relative;width:min(92vw,1060px);display:flex;justify-content:center}
  .book-home .flipbook{margin:0 auto}
  /* drop shadow beneath the whole book */
  .book-home .stf__parent{filter:drop-shadow(0 26px 40px rgba(150,90,40,.45));position:relative}

  /* ---- stacked page edges: makes the flipbook read as a thick open book ---- */
  .book-home .stf__parent::before,
  .book-home .stf__parent::after{
    content:"";position:absolute;top:0;height:100%;width:18px;z-index:0;pointer-events:none;
    /* thin vertical striations = the cut edges of stacked pages */
    background-image:
      repeating-linear-gradient(90deg,
        #f7edd6 0px, #f7edd6 1.5px,
        #e4d4af 1.5px, #e4d4af 2.5px,
        #efe2c4 2.5px, #efe2c4 3.5px);
    box-shadow:0 12px 22px rgba(90,60,25,.30);
    /* crisp top; a whisper of fade (0.5%) only on the very bottom corner */
    -webkit-mask-image:linear-gradient(to bottom, #000 0, #000 99.5%, transparent 100%);
    mask-image:linear-gradient(to bottom, #000 0, #000 99.5%, transparent 100%);
  }
  /* left stack — tucks just under the left page, fore-edge shaded on the outer (left) side */
  .book-home .stf__parent::before{
    left:0;transform:translateX(-94%);border-radius:6px 0 0 6px;
    background-image:
      linear-gradient(90deg, rgba(90,60,25,.28), rgba(90,60,25,0) 34%),
      repeating-linear-gradient(90deg,
        #f7edd6 0px, #f7edd6 1.5px,
        #e4d4af 1.5px, #e4d4af 2.5px,
        #efe2c4 2.5px, #efe2c4 3.5px);
  }
  /* right stack — mirror image */
  .book-home .stf__parent::after{
    right:0;transform:translateX(94%);border-radius:0 6px 6px 0;
    background-image:
      linear-gradient(270deg, rgba(90,60,25,.28), rgba(90,60,25,0) 34%),
      repeating-linear-gradient(90deg,
        #f7edd6 0px, #f7edd6 1.5px,
        #e4d4af 1.5px, #e4d4af 2.5px,
        #efe2c4 2.5px, #efe2c4 3.5px);
  }
  /* hide the side stacks on narrow screens where the book shows a single page */
  @media (max-width:720px){
    .book-home .stf__parent::before,.book-home .stf__parent::after{display:none}
  }

  /* ---- a page ---- */
  .book-home .leaf{
    background-color:var(--paper);overflow:hidden;
    background-image:
      radial-gradient(75% 60% at 50% 45%, rgba(255,250,235,.5), transparent 75%),
      radial-gradient(closest-side at 16% 18%, rgba(150,120,70,.14), transparent),
      radial-gradient(closest-side at 86% 88%, rgba(150,120,70,.14), transparent);
  }
  .book-home .leaf.pg.left{box-shadow:inset -34px 0 46px -34px rgba(70,45,15,.5)}
  .book-home .leaf.pg.right{box-shadow:inset 34px 0 46px -34px rgba(70,45,15,.5)}
  .book-home .leaf-inner{position:absolute;inset:0;padding:8% 8.5%;
    display:flex;flex-direction:column;justify-content:center}

  /* ---- hard covers ---- */
  .book-home .leaf.cover-page{
    background:radial-gradient(125% 120% at 28% 12%, #f6b24c 0%, #e0603f 48%, #c8492c 100%);
    color:#fff7ea;
  }
  .book-home .leaf.cover-page .leaf-inner{align-items:center;justify-content:center;text-align:center}
  .book-home .cover-page .crest{font-size:46px;margin-bottom:8px;opacity:.95;filter:drop-shadow(0 2px 3px rgba(0,0,0,.3))}
  .book-home .cover-page .kicker{font-family:ui-sans-serif,system-ui,sans-serif;letter-spacing:.3em;
    font-size:11px;text-transform:uppercase;opacity:.85;margin-bottom:14px}
  .book-home .cover-page h1{font-size:clamp(26px,3.2vw,44px);line-height:1.05;margin:0 0 14px;text-shadow:0 2px 0 rgba(0,0,0,.16)}
  .book-home .cover-page .sub{font-size:clamp(13px,1.5vw,17px);max-width:24ch;line-height:1.5;opacity:.92;font-style:italic}
  .book-home .cover-page .open{margin-top:26px;font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;
    letter-spacing:.12em;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.45);border-radius:999px;padding:8px 16px}
  .book-home .cover-page.back .back-note{font-style:italic;font-size:18px;opacity:.95;margin:6px 0 0}

  /* ---- page contents ---- */
  .book-home .plate{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;min-height:0}
  .book-home .author-plate{justify-content:center;gap:16px}
  .book-home .author-plate .end-moral{max-width:34ch;text-align:center;margin-top:6px}
  .book-home .author-plate .btns{margin-top:2px}
  .book-home .plate .shot{max-width:80%;max-height:80%;object-fit:contain;border-radius:8px;box-shadow:0 16px 30px rgba(60,40,15,.30)}
  .book-home .portrait{width:128px;height:160px;object-fit:cover;border-radius:6px;
    border:6px solid #fff;transform:rotate(-3deg);box-shadow:0 10px 22px rgba(60,40,15,.35)}
  .book-home .big-portrait{width:150px;height:188px}
  /* polaroid frame for the author photo */
  .book-home .polaroid{position:relative;background:#fffdf8;padding:16px 16px 48px;
    border-radius:3px;transform:rotate(-3deg);
    box-shadow:0 14px 30px rgba(60,40,15,.28),0 2px 5px rgba(60,40,15,.16)}
  .book-home .polaroid-photo{display:block;width:180px;height:216px;object-fit:cover;
    background:#e9e2d4}
  .book-home .polaroid-tape{position:absolute;top:-26px;left:50%;
    width:104px;height:auto;transform:translateX(-50%) rotate(-13deg);
    filter:drop-shadow(0 3px 5px rgba(60,40,15,.18));pointer-events:none;z-index:2}
  .book-home .game-placeholder{width:82%;aspect-ratio:4/3;background:#222c33;border-radius:10px;color:#cdd7df;
    display:flex;align-items:center;justify-content:center;text-align:center;padding:16px;
    font-family:ui-sans-serif,system-ui,sans-serif;box-shadow:0 16px 30px rgba(60,40,15,.30)}
  .book-home .game-placeholder b{font-size:15px;color:#fff}
  .book-home .game-placeholder span{font-size:12px;opacity:.8}
  .book-home .endmark{font-size:clamp(54px,9vw,104px);filter:drop-shadow(0 6px 8px rgba(60,40,15,.25));text-align:center}

  /* ---- combined opening page (portrait + intro) ---- */
  .book-home .opening{flex:1;position:relative;display:flex;flex-direction:column;align-items:center;
    justify-content:center;text-align:center;gap:0;min-height:0;padding-bottom:18%}
  .book-home .hero-rocket-group{position:absolute;left:6%;bottom:5%;width:clamp(150px,34%,290px);
    aspect-ratio:1/1.1;pointer-events:none}
  .book-home .hero-rocket{position:absolute;left:0;bottom:0;width:72%;
    height:auto;filter:drop-shadow(0 10px 16px rgba(60,40,15,.16));
    animation:heroRocketBob 4.5s ease-in-out infinite;transform-origin:center}
  .book-home .hero-star{position:absolute;height:auto;
    filter:drop-shadow(0 4px 7px rgba(60,40,15,.14));
    animation:heroTwinkle 3s ease-in-out infinite}
  .book-home .star-a{width:26%;top:2%;right:4%;animation-delay:.2s}
  .book-home .star-b{width:17%;top:34%;right:-2%;animation-delay:1.1s}
  .book-home .star-c{width:21%;top:20%;left:-6%;animation-delay:1.9s}
  @keyframes heroRocketBob{0%,100%{transform:translateY(0) rotate(0deg)}
    50%{transform:translateY(-10px) rotate(-2.5deg)}}
  @keyframes heroTwinkle{0%,100%{opacity:.55;transform:scale(.9) rotate(-4deg)}
    50%{opacity:1;transform:scale(1.05) rotate(4deg)}}
  .book-home .opening .lead{margin:0 0 8px;text-align:center}
  .book-home .hero-name{font-size:clamp(22px,3vw,36px);line-height:1;margin:0 0 18px;
    font-weight:600;letter-spacing:-.015em;text-align:center}
  .book-home .opening .story{font-size:clamp(13px,1.8vw,21px);line-height:1.25;margin:0;
    text-align:center;max-width:none;font-weight:500}
  .book-home .hero-sub{font-style:italic;color:var(--soft);font-size:clamp(14px,1.7vw,18px);
    margin:18px 0 0;max-width:26ch;line-height:1.45}

  /* ---- table of contents ---- */
  .book-home .toc{gap:0}
  .book-home .toc-list{list-style:none;margin:14px 0 0;padding:0;display:flex;flex-direction:column;gap:6px}
  .book-home .toc-list li{margin:0}
  .book-home .toc-list button{width:100%;display:flex;align-items:center;gap:14px;
    background:none;border:none;border-bottom:1px solid rgba(150,120,70,.22);
    padding:11px 4px;cursor:pointer;text-align:left;font-family:inherit;color:inherit;
    transition:background .18s,padding .18s}
  .book-home .toc-list button:hover{background:rgba(255,255,255,.5);padding-left:9px;border-radius:6px}
  /* keep clicks on the <button> itself so the flipbook doesn't treat them as page-turns */
  .book-home .toc-list button *{pointer-events:none}
  .book-home .toc-num{font-family:ui-sans-serif,system-ui,sans-serif;font-size:13px;font-weight:600;
    color:var(--accent);opacity:.75;min-width:22px}
  .book-home .toc-body{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}
  .book-home .toc-title{font-size:clamp(16px,1.9vw,20px);line-height:1.1}
  .book-home .toc-sub{font-style:italic;color:var(--soft);font-size:12.5px;line-height:1.25}
  .book-home .toc-dot{font-size:10px;line-height:1}
  .book-home .toc-dot.live{color:var(--accent)}
  .book-home .toc-dot.wip{color:#d69a2a}
  .book-home .toc-hint{margin-top:16px;font-style:italic;color:var(--soft);font-size:12.5px;
    font-family:ui-sans-serif,system-ui,sans-serif}

  .book-home .text{display:flex;flex-direction:column;justify-content:center}
  .book-home .lead{font-family:ui-sans-serif,system-ui,sans-serif;letter-spacing:.26em;text-transform:uppercase;
    font-size:11px;color:var(--accent);margin:6px 0 0;text-align:center}
  .book-home .story{font-size:clamp(16px,1.9vw,22px);line-height:1.6;margin:0}
  .book-home .story .big{font-size:1.2em;font-weight:600}
  .book-home .story em{color:var(--accent);font-style:italic}
  .book-home .signature{margin-top:22px;font-style:italic;color:var(--soft);font-size:15px}
  .book-home .cap-once{font-style:italic;color:var(--soft);font-size:13px;margin:0 0 6px;
    font-family:ui-sans-serif,system-ui,sans-serif;letter-spacing:.02em}
  .book-home .text h2{font-size:clamp(23px,3vw,38px);margin:0 0 8px;line-height:1.06}
  .book-home .one{font-size:clamp(15px,1.9vw,20px);color:#5a503f;margin:0 0 14px;font-style:italic}
  .book-home .tags{display:flex;flex-wrap:wrap;gap:7px;font-family:ui-sans-serif,system-ui,sans-serif;margin-bottom:16px}
  .book-home .tags span{font-size:11px;color:#6a5f4d;background:rgba(255,255,255,.6);border:1px solid rgba(150,120,70,.3);
    border-radius:999px;padding:4px 11px}
  .book-home .tags .live{color:#fff;background:var(--accent);border-color:transparent}
  .book-home .tags .wip{color:#7a5a13;background:#ffe7bf;border-color:#eccf95}
  .book-home .links{display:flex;flex-wrap:wrap;gap:14px;align-items:center;font-family:ui-sans-serif,system-ui,sans-serif}
  .book-home .links .read{font-size:14px;color:var(--accent);text-decoration:none;font-weight:600;
    background:none;border:none;padding:0;cursor:pointer;font-family:inherit}
  .book-home .links .read:hover{text-decoration:underline}
  .book-home .moral{margin-top:16px;font-style:italic;color:var(--soft);font-size:13px;
    font-family:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif}
  .book-home .end-moral{margin-top:12px;margin-bottom:14px;color:var(--accent);font-size:14px;line-height:1.4}
  .book-home .links .ext{font-size:13px;color:#6a5f4d;text-decoration:none}
  .book-home .links .ext:hover{text-decoration:underline}
  .book-home .author-bio{font-size:clamp(12.5px,1.45vw,15.5px);line-height:1.45;color:#4a4234;margin:0 0 8px}
  .book-home .author-bio b{color:var(--accent)}
  .book-home .likes{display:flex;flex-wrap:wrap;gap:9px;font-family:ui-sans-serif,system-ui,sans-serif;margin-top:4px}
  .book-home .likes span{font-size:13px;color:#6a5f4d;background:rgba(255,255,255,.6);border:1px solid rgba(150,120,70,.3);
    border-radius:999px;padding:6px 14px}
  .book-home .text.end{align-items:flex-start}
  .book-home .btns{display:flex;gap:10px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,sans-serif;margin-top:6px}
  .book-home .btns a{font-size:14px;text-decoration:none;border-radius:999px;padding:10px 20px;
    border:1px solid rgba(150,120,70,.4);color:var(--ink);background:rgba(255,255,255,.55)}
  .book-home .btns a.primary{background:var(--ink);color:#f3ead7;border-color:transparent}

  /* ---- nav: arrows flanking the book, left & right, vertically centered ---- */
  .book-home .nav{position:fixed;top:50%;left:0;right:0;transform:translateY(-50%);
    display:flex;justify-content:space-between;align-items:center;
    padding:0 clamp(14px,3.5vw,46px);z-index:200;pointer-events:none}
  .book-home .nav button{pointer-events:auto;width:48px;height:48px;border-radius:999px;border:none;cursor:pointer;
    background:#fff;color:var(--ink);font-size:20px;box-shadow:0 6px 16px rgba(150,90,40,.28);transition:transform .15s}
  .book-home .nav button:hover{transform:scale(1.08)}
  .book-home .nav button:disabled{background:#d8c8a8;color:#9a8a72;cursor:default;transform:none;
    box-shadow:0 3px 8px rgba(150,90,40,.15)}

  /* ---- hand-drawn doodles ---- */
  .book-home .cover-arrow{position:absolute;bottom:6%;left:50%;width:50px;height:60px;
    transform:translateX(-50%);animation:ca-float 2.4s ease-in-out infinite}
  .book-home .ca-line{animation:ca-draw 1.8s linear infinite}
  @keyframes ca-float{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(5px)}}
  @keyframes ca-draw{to{stroke-dashoffset:-24}}

  /* per-page corner doodles */
  .book-home .doodle{position:absolute;top:20px;right:22px;width:44px;height:44px;
    pointer-events:none;opacity:.92;z-index:6}
  .book-home .doodle-text{width:auto;height:auto;
    font-family:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif;
    font-weight:700;font-size:22px;letter-spacing:1px;color:var(--accent);line-height:1}
  .book-home .d-float{animation:d-float 3.6s ease-in-out infinite;transform-origin:center}
  @keyframes d-float{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-6px) rotate(4deg)}}
  .book-home .d-bounce{display:inline-block;animation:d-bounce 1.7s ease-in-out infinite}
  @keyframes d-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
  .book-home .d-wiggle{display:inline-block;animation:d-wiggle 2.2s ease-in-out infinite}
  @keyframes d-wiggle{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(14deg)}}
  .book-home .aplus-stamp{width:54px;height:auto}
  /* ABC bear — gentle bob + periodic wink */
  .book-home .bear-doodle{width:62px;height:auto}
  .book-home .bear-bob{transform-origin:center bottom;animation:bear-bob 3.2s ease-in-out infinite}
  @keyframes bear-bob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-4px) rotate(2deg)}}
  .book-home .eye-open{animation:wink-open 3.4s ease-in-out infinite}
  .book-home .eye-wink{opacity:0;animation:wink-close 3.4s ease-in-out infinite}
  @keyframes wink-open{0%,80%{opacity:1}85%,93%{opacity:0}100%{opacity:1}}
  @keyframes wink-close{0%,80%{opacity:0}85%,93%{opacity:1}100%{opacity:0}}
  .book-home .d-pulse{display:inline-block;transform-origin:center;animation:d-pulse 1.4s ease-in-out infinite}
  @keyframes d-pulse{0%,100%{transform:scale(1);opacity:.85}50%{transform:scale(1.18);opacity:1}}
  .book-home .d-dash{animation:ca-draw 2s linear infinite}

  /* Little Checks — checkmark that draws itself (solid line) with twinkling stars */
  .book-home .lc-check{width:48px;height:auto}
  .book-home .lc-stars .st{transform-box:fill-box;transform-origin:center;animation:star-twk 2.2s ease-in-out infinite}
  .book-home .lc-stars .st-b{animation-delay:.7s}
  .book-home .lc-stars .st-c{animation-delay:1.3s}
  @keyframes star-twk{0%,100%{opacity:.2;transform:scale(.55)}50%{opacity:1;transform:scale(1)}}
  .book-home .lc-line{stroke-dasharray:50;stroke-dashoffset:50;animation:lc-draw 2.8s ease-in-out infinite}
  @keyframes lc-draw{
    0%{stroke-dashoffset:50;opacity:0}
    12%{opacity:1}
    55%{stroke-dashoffset:0;opacity:1}
    82%{stroke-dashoffset:0;opacity:1}
    100%{stroke-dashoffset:0;opacity:0}
  }

  /* Dear Traveler — glowing glass slipper, bouncing left↔right */
  .book-home .dt-slipper{width:72px;height:auto;animation:slipper-bounce 2.8s ease-in-out infinite}
  .book-home .dt-slipper .glass{filter:drop-shadow(0 0 3px rgba(150,228,255,.95))}
  .book-home .dt-slipper .shine{animation:shine-pulse 1.8s ease-in-out infinite;transform-origin:center}
  @keyframes slipper-bounce{0%,100%{transform:translateX(-7px) rotate(-3deg)}50%{transform:translateX(7px) rotate(3deg)}}
  @keyframes shine-pulse{0%,100%{opacity:.35}50%{opacity:1}}

  /* paper planes fly across the whole page */
  .book-home .doodles{position:absolute;inset:0;pointer-events:none;z-index:150;overflow:hidden}
  .book-home .plane{position:absolute;width:66px;height:auto;opacity:0;
    filter:drop-shadow(0 4px 4px rgba(150,90,40,.18))}
  .book-home .plane-1{animation:fly1 18s linear infinite}
  .book-home .plane-2{width:46px;animation:fly2 24s linear infinite;animation-delay:7s}
  .book-home .plane .trail{animation:trail-dash 1.1s linear infinite}
  @keyframes trail-dash{to{stroke-dashoffset:-18}}
  @keyframes fly1{
    0%{transform:translate(-12vw,44vh) rotate(-7deg);opacity:0}
    6%{opacity:1}
    50%{transform:translate(48vw,13vh) rotate(9deg)}
    94%{opacity:1}
    100%{transform:translate(114vw,30vh) rotate(-4deg);opacity:0}
  }
  @keyframes fly2{
    0%{transform:translate(114vw,18vh) rotate(187deg);opacity:0}
    8%{opacity:1}
    50%{transform:translate(42vw,40vh) rotate(171deg)}
    92%{opacity:1}
    100%{transform:translate(-12vw,24vh) rotate(185deg);opacity:0}
  }

  /* sparkles clustered into a box pinned to the book's top-right corner */
  .book-home .corner-sparks{position:absolute;top:0;right:0;
    width:min(40%,300px);height:min(38%,260px);pointer-events:none;z-index:150;overflow:visible}
  .book-home .spark{position:absolute;font-size:15px;color:#e0a341;opacity:0;
    animation:twinkle 4.2s ease-in-out infinite}
  .book-home .spark.s1{top:22%;right:58%}
  .book-home .spark.s2{top:10%;right:24%;font-size:12px;color:#e0603f;animation-delay:1.2s}
  .book-home .spark.s3{top:60%;right:44%;font-size:13px;animation-delay:2.1s}
  .book-home .spark.s4{top:40%;right:10%;color:#e0603f;animation-delay:3.1s}
  @keyframes twinkle{0%,100%{opacity:0;transform:scale(.6)}50%{opacity:.85;transform:scale(1)}}

  @media (prefers-reduced-motion: reduce){
    .book-home .plane,.book-home .spark{display:none}
    .book-home .cover-arrow,.book-home .ca-line,
    .book-home .d-float,.book-home .d-bounce,.book-home .d-wiggle,.book-home .d-dash,.book-home .d-pulse,
    .book-home .lc-line,.book-home .dt-slipper,.book-home .dt-slipper .shine,
    .book-home .lc-stars .st,.book-home .bear-bob,
    .book-home .eye-open,.book-home .eye-wink{animation:none}
    .book-home .lc-line{stroke-dashoffset:0}
    .book-home .eye-wink{opacity:0}
  }
`;
