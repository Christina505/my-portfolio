"use client";

import { useEffect } from "react";
import { decks, type Media, type Slide } from "./cases/decks";

const SERIF = 'var(--font-playfair), "Iowan Old Style", Georgia, serif';
const ACCENT = "#c0532f";

/** Renders text with *accent* markers highlighted. */
function Rich({ t }: { t: string }) {
  return (
    <>
      {t.split(/(\*[^*]+\*)/g).map((p, i) =>
        p.length > 1 && p.startsWith("*") && p.endsWith("*") ? (
          <span key={i} style={{ color: ACCENT }}>
            {p.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

function MediaEl({ m, className }: { m: Media; className: string }) {
  if (m.type === "video") {
    return <video src={m.src} autoPlay loop muted playsInline className={className} />;
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={m.src} alt="" className={className} />;
}

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: ACCENT }}>
      {children}
    </p>
  );
}

function Headline({ t, small }: { t: string; small?: boolean }) {
  return (
    <h2
      className={`${small ? "text-2xl sm:text-3xl" : "text-3xl sm:text-5xl"} leading-[1.06] tracking-tight text-gray-900`}
      style={{ fontFamily: SERIF }}
    >
      <Rich t={t} />
    </h2>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ol className="space-y-4 mt-8 max-w-xl">
      {items.map((b, i) => (
        <li key={i} className="flex gap-4 text-base sm:text-lg text-gray-700 leading-snug">
          <span style={{ color: ACCENT, fontFamily: SERIF }} className="text-lg">{i + 1}.</span>
          <span><Rich t={b} /></span>
        </li>
      ))}
    </ol>
  );
}

function SlideView({ slide }: { slide: Slide }) {
  switch (slide.kind) {
    case "text":
      return (
        <div className="max-w-2xl">
          <Eyebrow>{slide.eyebrow}</Eyebrow>
          <Headline t={slide.title} />
          {slide.body && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mt-6 max-w-xl">
              <Rich t={slide.body} />
            </p>
          )}
          {slide.bullets && <Bullets items={slide.bullets} />}
        </div>
      );
    case "split":
      return (
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          <div>
            <Eyebrow>{slide.eyebrow}</Eyebrow>
            <Headline t={slide.title} />
            {slide.body && (
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mt-6">
                <Rich t={slide.body} />
              </p>
            )}
            {slide.bullets && <Bullets items={slide.bullets} />}
          </div>
          <MediaEl m={slide.media} className="w-full max-h-[60vh] object-contain rounded-2xl shadow-md bg-gray-50" />
        </div>
      );
    case "image":
      return (
        <div className="w-full text-center">
          <Eyebrow>{slide.eyebrow}</Eyebrow>
          {slide.title && <div className="mb-7"><Headline t={slide.title} small /></div>}
          <MediaEl m={slide.media} className="mx-auto max-h-[60vh] w-auto max-w-full object-contain rounded-2xl shadow-md bg-gray-50" />
          {slide.caption && <p className="text-sm text-gray-400 mt-4 max-w-xl mx-auto">{slide.caption}</p>}
        </div>
      );
    case "gallery":
      return (
        <div className="w-full text-center">
          <Eyebrow>{slide.eyebrow}</Eyebrow>
          {slide.title && <div className="mb-8"><Headline t={slide.title} small /></div>}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {slide.media.map((m, i) => (
              <MediaEl key={i} m={m} className="max-h-[46vh] w-auto max-w-[30%] object-contain rounded-xl shadow bg-gray-50" />
            ))}
          </div>
          {slide.caption && <p className="text-sm text-gray-400 mt-5 max-w-xl mx-auto">{slide.caption}</p>}
        </div>
      );
    case "demo":
      return (
        <div className="w-full">
          <div className="text-center mb-2"><Eyebrow>{slide.eyebrow}</Eyebrow></div>
          <div className="text-center mb-4"><Headline t={slide.title} small /></div>
          <div className="-mx-8 sm:-mx-16">{slide.node}</div>
        </div>
      );
  }
}

function SideBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="mb-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1.5">{label}</p>
      <p className="text-sm text-gray-700 leading-snug">{value}</p>
    </div>
  );
}

export default function CaseStudyOverlay({
  index,
  onClose,
  onNavigate,
}: {
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const deck = decks[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOv = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOv;
    };
  }, [onClose]);

  if (!deck) return null;
  const slides = deck.slides;

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-0 sm:p-6">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-[1] w-full max-w-6xl h-full sm:h-[92vh] bg-white sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col sm:flex-row cs-pop">
        {/* sidebar */}
        <aside className="w-full sm:w-72 shrink-0 bg-[#faf6ec] border-b sm:border-b-0 sm:border-r border-[#eadfca] p-6 sm:p-8 flex flex-col overflow-y-auto">
          <button onClick={onClose} className="text-sm text-gray-500 hover:text-black mb-6 sm:mb-8 self-start">✕ Close</button>
          <h2 className="text-2xl sm:text-3xl text-gray-900 mb-6 sm:mb-8" style={{ fontFamily: SERIF }}>{deck.title}</h2>
          <SideBlock label="Year" value={deck.year} />
          <SideBlock label="Highlight" value={deck.highlight} />
          <div className="hidden sm:block">
            <SideBlock label="Role" value={deck.role} />
            <SideBlock label="Tools" value={deck.tools} />
            <SideBlock label="Type" value={deck.type} />
          </div>
          <div className="mt-8 pt-2 shrink-0 flex items-center gap-3">
            <button onClick={() => onNavigate(index - 1)} disabled={index <= 0} aria-label="Previous project" className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 disabled:opacity-30 hover:bg-white">‹</button>
            <span className="text-xs text-gray-400">Project {index + 1} / {decks.length}</span>
            <button onClick={() => onNavigate(index + 1)} disabled={index >= decks.length - 1} aria-label="Next project" className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 disabled:opacity-30 hover:bg-white">›</button>
          </div>
        </aside>

        {/* scrollable deck — all slides stacked top to bottom */}
        <div className="flex-1 min-w-0 overflow-y-auto">
          {slides.map((s, i) => (
            <section
              key={i}
              className="px-7 sm:px-16 py-9 sm:py-12 flex flex-col justify-center"
            >
              <SlideView slide={s} />
            </section>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes cs-pop{from{opacity:0;transform:scale(.98) translateY(8px)}to{opacity:1;transform:none}}
        .cs-pop{animation:cs-pop .26s ease-out}
      `}</style>
    </div>
  );
}
