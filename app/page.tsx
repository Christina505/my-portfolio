"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Little Checks",
    description:
      "A cozy habit-tracking app based on the behavior charts I use with my kindergartners. Designed, coded, and shipped to the App Store.",
    tags: ["UX Design", "Mobile", "End-to-End", "App Store"],
    bg: "#F0EDE8",
    href: "/work/little-checks",
  },
  {
    id: 2,
    title: "Dear Traveler",
    description:
      "An interactive diary game inspired by Tom Riddle's diary and Lifeline. I wrote the story, made the music, and shipped it.",
    tags: ["Interaction Design", "Storytelling", "App Store", "End-to-End"],
    bg: "#E8EDF0",
    href: "/work/dear-traveler",
  },
  {
    id: 3,
    title: "Student Testing Platform",
    description:
      "Reimagining the student testing experience — making it less stressful for kids who are already anxious enough.",
    tags: ["UX Research", "Figma", "Web"],
    bg: "#EDE8F0",
    href: "/work/student-testing",
  },
];

// Image sequences cycled through on hover (each phone slot in each card)
const lcLeftPhones = [
  "/projects/lc-home.png",
  "/projects/lc-final-welcome.png",
  "/projects/lc-final-album.png",
];
const lcRightPhones = [
  "/projects/lc-rewards.png",
  "/projects/lc-final-edit.png",
  "/projects/lc-home.png",
];
const dtPhone1 = [
  "/projects/dt-intro.png",
  "/projects/dt-tension.png",
  "/projects/dt-wait.png",
];
const dtPhone2 = [
  "/projects/dt-choice.png",
  "/projects/dt-climax.png",
  "/projects/dt-tension.png",
];
const dtPhone3 = [
  "/projects/dt-badend.png",
  "/projects/dt-wait.png",
  "/projects/dt-climax.png",
];
const stpDashboard = [
  "/projects/stp-dashboard.png",
  "/projects/stp-steps1.png",
];
const stpAvatar = ["/projects/stp-avatar.png", "/projects/stp-steps2.png"];
const stpQuiz = ["/projects/stp-quiz.png", "/projects/stp-steps3.png"];

/**
 * Crossfades through a list of images.
 * When `active` is false, locks to the first image (the "default" thumbnail).
 */
function CyclingImage({
  images,
  alt,
  interval = 2600,
  delay = 0,
  active,
  objectFit = "object-cover object-top",
}: {
  images: string[];
  alt: string;
  interval?: number;
  delay?: number;
  active: boolean;
  objectFit?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!active) return;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const timeoutId = setTimeout(() => {
      setIndex((i) => (i + 1) % images.length);
      intervalId = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, interval);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [active, interval, delay, images.length]);

  // When inactive, snap back to the first image; the cycle index lingers
  // internally so the timer still works cleanly when hover starts again.
  const displayIndex = active ? index : 0;

  return (
    <>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 33vw, 200px"
          className={`${objectFit} transition-opacity duration-[1100ms] ease-in-out ${
            i === displayIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}

/**
 * Shows a poster image, with a video playing silently underneath. When
 * `active` becomes true we crossfade to the video and rewind it so the
 * viewer always sees it from the beginning.
 *
 * Browsers (especially Safari and Chrome on a first page visit) often block
 * muted autoplay until the user has interacted with the page somewhere. So
 * on mount we (a) optimistically try to play, and (b) hook into the first
 * pointer/touch/key event anywhere on the document and try again. By the
 * time the visitor actually hovers a card, the video is already running
 * silently behind the poster — hover just unveils it.
 */
function VideoOnHover({
  poster,
  videoSrc,
  alt,
  active,
}: {
  poster: string;
  videoSrc: string;
  alt: string;
  active: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Track whether the video is *actually* playing (the browser fired the
  // 'playing' event). Only when this is true do we crossfade to the video.
  // Otherwise the poster stays up — which means the browser's "tap to play"
  // overlay (which we can't reliably hide via CSS in modern Safari) never
  // gets revealed to the user.
  const [isPlaying, setIsPlaying] = useState(false);

  // Subscribe to real play-state events on the video element.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlaying = () => setIsPlaying(true);
    const onStopped = () => setIsPlaying(false);

    v.addEventListener("playing", onPlaying);
    v.addEventListener("pause", onStopped);
    v.addEventListener("ended", onStopped);

    return () => {
      v.removeEventListener("playing", onPlaying);
      v.removeEventListener("pause", onStopped);
      v.removeEventListener("ended", onStopped);
    };
  }, []);

  // Prime the video on mount and on the first user input anywhere on the page.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => {
      const p = v.play();
      if (p !== undefined) p.catch(() => {});
    };

    // Optimistic attempt — works in most browsers with muted + playsInline.
    tryPlay();

    // Retry when the browser has buffered enough to start playback.
    const onCanPlay = () => tryPlay();
    v.addEventListener("canplay", onCanPlay);

    // Fallback for browsers that block autoplay until a user gesture:
    // listen at the document level so any click/tap/key anywhere kicks
    // playback off behind the scenes.
    const onUserInput = () => {
      if (v.paused) tryPlay();
    };
    document.addEventListener("pointerdown", onUserInput, true);
    document.addEventListener("touchstart", onUserInput, true);
    document.addEventListener("keydown", onUserInput, true);

    return () => {
      v.removeEventListener("canplay", onCanPlay);
      document.removeEventListener("pointerdown", onUserInput, true);
      document.removeEventListener("touchstart", onUserInput, true);
      document.removeEventListener("keydown", onUserInput, true);
    };
  }, []);

  // When the card becomes active, rewind to the start and (re)issue play().
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !active) return;
    try {
      v.currentTime = 0;
    } catch {
      // Some browsers throw if metadata isn't loaded yet; that's fine.
    }
    const p = v.play();
    if (p !== undefined) p.catch(() => {});
  }, [active]);

  // Only reveal the video once both conditions hold: the user is hovering
  // AND the video has actually started playing. Otherwise the poster stays.
  const showVideo = active && isPlaying;

  return (
    <>
      <Image
        src={poster}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw, 200px"
        className={`object-cover object-top transition-opacity duration-[900ms] ease-in-out ${
          showVideo ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-[900ms] ease-in-out ${
          showVideo ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </>
  );
}

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [inViewCards, setInViewCards] = useState<Set<number>>(new Set());
  const [isTouch, setIsTouch] = useState(false);

  // Detect touch-only / no-hover devices (mostly phones & tablets). We
  // listen reactively in case the user docks an iPad / plugs in a mouse.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // On touch devices, auto-activate a card when it's substantially in view
  // so the previews play as the user scrolls past, without needing hover.
  useEffect(() => {
    if (!isTouch || typeof window === "undefined") return;
    const cards = document.querySelectorAll<HTMLElement>("[data-card-id]");
    if (cards.length === 0) return;

    // Activate a card when any part of it is inside the middle ~50% band of
    // the viewport. Works regardless of card height (some cards are taller
    // than a phone screen, so ratio-based thresholds can never trigger).
    const observer = new IntersectionObserver(
      (entries) => {
        setInViewCards((prev) => {
          const next = new Set(prev);
          for (const entry of entries) {
            const id = Number(
              (entry.target as HTMLElement).dataset.cardId ?? 0,
            );
            if (!id) continue;
            if (entry.isIntersecting) next.add(id);
            else next.delete(id);
          }
          return next;
        });
      },
      { rootMargin: "-25% 0px -25% 0px", threshold: 0 },
    );

    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isTouch]);

  const lcActive = hoveredCard === 1 || (isTouch && inViewCards.has(1));
  const dtActive = hoveredCard === 2 || (isTouch && inViewCards.has(2));
  const stpActive = hoveredCard === 3 || (isTouch && inViewCards.has(3));

  return (
    <main className="min-h-screen bg-white text-black scroll-smooth">
      {/* Nav + Banner */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100/50 px-5 md:px-8 py-4 md:py-6">
        <div className="flex justify-between items-start gap-4">
          <div className="min-w-0">
            <h1 className="text-lg md:text-xl font-medium tracking-tight mb-1">Christina Ma</h1>
            <p className="text-xs md:text-sm font-light text-gray-400 leading-relaxed max-w-lg hidden sm:block">
              UX Designer in Irvine, CA — I teach kindergarten, so I design things that are intuitive for first-time users. If a five-year-old can figure it out, anyone can.
            </p>
            <p className="text-xs font-light text-gray-400 leading-relaxed sm:hidden">
              UX Designer in Irvine, CA
            </p>
          </div>
          <div className="flex gap-4 md:gap-8 text-sm text-gray-400 pt-1 flex-shrink-0">
            <span className="text-black font-medium">Work</span>
            <Link href="/resume" className="hover:text-black transition-colors">
              Resume
            </Link>
          </div>
        </div>
      </header>

      {/* Work */}
      <section id="work" className="px-5 md:px-8 pt-6 md:pt-8 pb-24">
        <div className="flex flex-col gap-6">
          {/* Featured project — Little Checks (full width) */}
          <Link
            href={projects[0].href || "#"}
            data-card-id="1"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1 block"
            style={{ backgroundColor: projects[0].bg }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Text side */}
              <div className="p-10 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-500 bg-white/60 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl font-semibold mb-3 tracking-tight">
                    {projects[0].title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed max-w-sm">
                    {projects[0].description}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2">
                  <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
                    View project →
                  </span>
                  <span
                    className={`text-xs text-gray-400 transition-opacity duration-300 ${
                      lcActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    · playing demo
                  </span>
                </div>
              </div>

              {/* Image side — phone mockups */}
              <div className="relative h-64 md:h-auto overflow-hidden flex items-end justify-center gap-3 md:gap-4 pt-6 md:pt-8 px-4">
                {/* Left phone */}
                <div
                  className={`relative w-28 md:w-40 h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 ${
                    lcActive ? "-translate-y-4 shadow-2xl" : ""
                  }`}
                >
                  <CyclingImage
                    images={lcLeftPhones}
                    alt="Little Checks app screens"
                    active={lcActive}
                    delay={400}
                  />
                </div>
                {/* Center phone — plays demo video on hover */}
                <div
                  className={`relative w-28 md:w-40 h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 translate-y-4 ${
                    lcActive ? "scale-105 -translate-y-2 shadow-2xl" : ""
                  }`}
                >
                  <VideoOnHover
                    poster="/projects/lc-checklist.png"
                    videoSrc="/projects/lc-demo.mp4"
                    alt="Little Checks demo video"
                    active={lcActive}
                  />
                </div>
                {/* Right phone */}
                <div
                  className={`relative w-28 md:w-40 h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 translate-y-2 hidden md:block ${
                    lcActive ? "-translate-y-4 shadow-2xl" : ""
                  }`}
                >
                  <CyclingImage
                    images={lcRightPhones}
                    alt="Little Checks app screens"
                    active={lcActive}
                    delay={1500}
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Two-column row for other projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dear Traveler */}
            <Link
              href={projects[1].href || "#"}
              data-card-id="2"
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1 block"
              style={{ backgroundColor: projects[1].bg }}
            >
              <div className="relative h-52 sm:h-56 overflow-hidden flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center gap-2 md:gap-3 pt-4">
                  <div
                    className={`relative w-20 sm:w-24 md:w-28 h-40 md:h-48 rounded-2xl overflow-hidden shadow-lg transition-all duration-700 -rotate-3 ${
                      dtActive ? "-translate-y-3 -rotate-6" : ""
                    }`}
                  >
                    <CyclingImage
                      images={dtPhone1}
                      alt="Dear Traveler story scene"
                      active={dtActive}
                      delay={0}
                    />
                  </div>
                  <div
                    className={`relative w-20 sm:w-24 md:w-28 h-40 md:h-48 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 z-10 ${
                      dtActive ? "-translate-y-4 scale-105" : ""
                    }`}
                  >
                    <CyclingImage
                      images={dtPhone2}
                      alt="Dear Traveler choice scene"
                      active={dtActive}
                      delay={900}
                    />
                  </div>
                  <div
                    className={`relative w-20 sm:w-24 md:w-28 h-40 md:h-48 rounded-2xl overflow-hidden shadow-lg transition-all duration-700 rotate-3 ${
                      dtActive ? "-translate-y-3 rotate-6" : ""
                    }`}
                  >
                    <CyclingImage
                      images={dtPhone3}
                      alt="Dear Traveler ending scene"
                      active={dtActive}
                      delay={1800}
                    />
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-8 pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[1].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 bg-white/60 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-semibold mb-2 tracking-tight">
                  {projects[1].title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {projects[1].description}
                </p>
                <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
                  View project →
                </span>
              </div>
            </Link>

            {/* Student Testing */}
            <Link
              href={projects[2].href || "#"}
              data-card-id="3"
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1 block"
              style={{ backgroundColor: projects[2].bg }}
            >
              <div className="relative h-52 sm:h-56 overflow-hidden flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center px-2">
                  <div
                    className={`relative w-32 sm:w-36 md:w-48 h-24 sm:h-28 md:h-36 rounded-xl overflow-hidden shadow-lg transition-all duration-700 -rotate-3 ${
                      stpActive ? "-translate-y-2 -rotate-6 scale-105" : ""
                    }`}
                  >
                    <CyclingImage
                      images={stpDashboard}
                      alt="Student Testing dashboard"
                      active={stpActive}
                      delay={0}
                      objectFit="object-cover"
                    />
                  </div>
                  <div
                    className={`absolute right-3 sm:right-4 md:right-8 top-6 sm:top-8 w-20 sm:w-24 md:w-32 h-16 sm:h-20 md:h-28 rounded-xl overflow-hidden shadow-lg transition-all duration-700 rotate-2 ${
                      stpActive ? "-translate-y-3 rotate-6" : ""
                    }`}
                  >
                    <CyclingImage
                      images={stpAvatar}
                      alt="Student avatar selection"
                      active={stpActive}
                      delay={900}
                      objectFit="object-cover"
                    />
                  </div>
                  <div
                    className={`absolute left-3 sm:left-4 md:left-6 bottom-3 sm:bottom-4 w-28 sm:w-32 md:w-40 h-16 sm:h-20 md:h-28 rounded-xl overflow-hidden shadow-lg transition-all duration-700 rotate-1 ${
                      stpActive ? "-translate-y-2 rotate-3" : ""
                    }`}
                  >
                    <CyclingImage
                      images={stpQuiz}
                      alt="Student quiz interface"
                      active={stpActive}
                      delay={1800}
                      objectFit="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-8 pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[2].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 bg-white/60 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-semibold mb-2 tracking-tight">
                  {projects[2].title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {projects[2].description}
                </p>
                <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
                  View project →
                </span>
              </div>
            </Link>
          </div>

          {/* ABC Countdown — in progress, "next up" card */}
          <Link
            href="/work/abc-countdown"
            className="group rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1 block"
            style={{ backgroundColor: "#FFF4E0" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Text side */}
              <div className="p-10 md:p-12 flex flex-col justify-between order-2 md:order-1">
                <div>
                  {/* "In the workshop" badge with pulsing dot */}
                  <div className="inline-flex items-center gap-2 mb-6 text-xs font-medium text-amber-800 bg-white/70 rounded-full px-3 py-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                    </span>
                    In the workshop
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["3D Game", "Unity", "Blender", "AI"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-500 bg-white/60 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl font-semibold mb-3 tracking-tight">
                    ABC Countdown
                  </h2>
                  <p className="text-gray-500 leading-relaxed max-w-sm">
                    Let&apos;s travel back in time to experience the pure fun and excitement of being a kindergartener — where you vividly remember the sunshine leaking through the layered leaves one afternoon, and your friend running to you the moment you arrived at school.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2">
                  <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
                    Peek at the workshop →
                  </span>
                </div>
              </div>

              {/* Visual side — ABC alphabet blocks that wiggle on hover */}
              <div className="relative h-56 md:h-auto overflow-hidden flex items-center justify-center gap-3 md:gap-5 py-12 md:py-0 order-1 md:order-2">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl flex items-center justify-center text-3xl md:text-5xl font-bold text-white bg-[#E04E3F] shadow-[0_8px_0_rgba(0,0,0,0.12)] -rotate-6 transition-all duration-700 group-hover:-translate-y-2 group-hover:-rotate-12">
                  A
                </div>
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl flex items-center justify-center text-3xl md:text-5xl font-bold text-white bg-[#3E6FE0] shadow-[0_8px_0_rgba(0,0,0,0.12)] -translate-y-3 transition-all duration-700 delay-100 group-hover:-translate-y-6 group-hover:scale-105">
                  B
                </div>
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl flex items-center justify-center text-3xl md:text-5xl font-bold text-white bg-[#F1B832] shadow-[0_8px_0_rgba(0,0,0,0.12)] rotate-6 transition-all duration-700 delay-200 group-hover:-translate-y-2 group-hover:rotate-12">
                  C
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 md:px-8 py-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
        <span>Christina Ma</span>
        <div className="flex gap-6">
          <a
            href="mailto:wuxuan.ma@gmail.com"
            className="hover:text-black transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/christina-ma-a564a3a4/"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
