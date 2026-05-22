"use client";

import { useRef, useState } from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";

type HabitKey = "water" | "move" | "breathe";

const HABITS: { key: HabitKey; emoji: string; label: string }[] = [
  { key: "water", emoji: "🫖", label: "take a few sips" },
  { key: "move", emoji: "👣", label: "move around" },
  { key: "breathe", emoji: "🍃", label: "breathe" },
];

// Real app rewards you at 100 checks. For a demo we scale way down — one
// hold per habit, three habits, treat unlocked.
const PER_HABIT_MAX = 1;
const TARGET = HABITS.length * PER_HABIT_MAX;
const REWARDS = ["🧋", "☕", "🍵", "🍫", "🍦", "🍰"];

// Timing constants — pulled directly from the SwiftUI HoldBubble in the app.
const FADE_IN_MS = 100;   // ripple fade-in (opacity 0 → 0.7)
const EXPAND_MS = 800;    // ripple expansion (scale 0 → 1), intentionally slow
const MIN_HOLD_MS = 100;  // ripple sits at full briefly before completing
const REVERSE_MS = 500;   // ripple reversal if user releases early
const TOTAL_HOLD_MS = EXPAND_MS + MIN_HOLD_MS; // 900ms total commitment

// Star particle offsets — fan upward from progress-bar tip.
const STAR_OFFSETS: { dx: number; dy: number }[] = [
  { dx: -28, dy: -18 },
  { dx: -14, dy: -30 },
  { dx: 0, dy: -34 },
  { dx: 14, dy: -30 },
  { dx: 28, dy: -18 },
];

type Burst = { id: number; progress: number };

type Hold = {
  habit: HabitKey;
  pointerId: number;
  x: number; // ripple origin (touch point) in bubble-local coords
  y: number;
  phase: "expanding" | "reversing";
  started: boolean; // flips true on the next frame so CSS transitions run
};

export default function HabitDemo() {
  const [counts, setCounts] = useState<Record<HabitKey, number>>({
    water: 0,
    move: 0,
    breathe: 0,
  });
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [reward, setReward] = useState<string | null>(null);
  const [hold, setHold] = useState<Hold | null>(null);

  const burstIdRef = useRef(0);
  const completeTimerRef = useRef<number | null>(null);
  const startedRafRef = useRef<number | null>(null);
  const reverseTimerRef = useRef<number | null>(null);
  const cleanupHoldTimerRef = useRef<number | null>(null);
  // Ref to the progress-bar wrapper so we can drive its celebration animation
  // imperatively via the Web Animations API (cleaner than React state for
  // a one-shot effect that needs to restart on every check-in).
  const barRef = useRef<HTMLDivElement>(null);

  const total = counts.water + counts.move + counts.breathe;
  const progress = Math.min(total / TARGET, 1);
  const isComplete = total >= TARGET;

  const clearAllTimers = () => {
    if (completeTimerRef.current !== null) {
      clearTimeout(completeTimerRef.current);
      completeTimerRef.current = null;
    }
    if (startedRafRef.current !== null) {
      cancelAnimationFrame(startedRafRef.current);
      startedRafRef.current = null;
    }
    if (reverseTimerRef.current !== null) {
      clearTimeout(reverseTimerRef.current);
      reverseTimerRef.current = null;
    }
    if (cleanupHoldTimerRef.current !== null) {
      clearTimeout(cleanupHoldTimerRef.current);
      cleanupHoldTimerRef.current = null;
    }
  };

  // Mirrors the SwiftUI `triggerCelebration`: a brief vertical pulse with a
  // warm-brown glow on the progress bar. Bouncy spring curve makes it feel
  // alive instead of mechanical.
  const triggerBarPulse = () => {
    const el = barRef.current;
    if (!el) return;
    el.animate(
      [
        {
          transform: "scaleY(1)",
          filter: "drop-shadow(0 0 0 rgba(139,111,71,0))",
        },
        {
          transform: "scaleY(1.8)",
          filter: "drop-shadow(0 0 14px rgba(139,111,71,0.6))",
          offset: 0.22,
        },
        {
          transform: "scaleY(1)",
          filter: "drop-shadow(0 0 0 rgba(139,111,71,0))",
        },
      ],
      {
        duration: 700,
        easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    );
  };

  const completeCheckin = (habit: HabitKey) => {
    const newTotal = total + 1;
    const newProgress = Math.min(newTotal / TARGET, 1);

    setCounts((c) => ({ ...c, [habit]: c[habit] + 1 }));

    // Spawn a star burst (with halo ring) at the new tip of the progress bar.
    const burstId = burstIdRef.current + 1;
    burstIdRef.current = burstId;
    setBursts((b) => [...b, { id: burstId, progress: newProgress }]);
    window.setTimeout(() => {
      setBursts((b) => b.filter((burst) => burst.id !== burstId));
    }, 1100);

    // Bar pulse + glow.
    triggerBarPulse();

    if (newTotal >= TARGET) {
      // Small delay so the reward feels like it arrives after the last hold.
      window.setTimeout(() => {
        const pick = REWARDS[Math.floor(Math.random() * REWARDS.length)];
        setReward(pick);
      }, 500);
    }
  };

  const handlePointerDown = (
    habit: HabitKey,
    e: ReactPointerEvent<HTMLButtonElement>,
  ) => {
    if (isComplete || counts[habit] >= PER_HABIT_MAX) return;
    if (hold) return; // already holding something

    // Capture so pointermove/up keep delivering to this button even if the
    // pointer drifts outside it.
    e.currentTarget.setPointerCapture(e.pointerId);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setHold({
      habit,
      pointerId: e.pointerId,
      x,
      y,
      phase: "expanding",
      started: false,
    });

    // Flip `started` on the next frame so the CSS transition actually runs
    // from scale(0) → scale(1) instead of mounting at scale(1).
    startedRafRef.current = requestAnimationFrame(() => {
      startedRafRef.current = null;
      setHold((h) => (h && h.habit === habit ? { ...h, started: true } : h));
    });

    // Schedule the completion. If the user releases before this fires, the
    // pointer-up handler cancels it.
    completeTimerRef.current = window.setTimeout(() => {
      completeTimerRef.current = null;
      completeCheckin(habit);
      // Hold the ripple at full briefly, then unmount it. The badge update
      // and star burst give the success feedback.
      cleanupHoldTimerRef.current = window.setTimeout(() => {
        cleanupHoldTimerRef.current = null;
        setHold((h) => (h && h.habit === habit ? null : h));
      }, 220);
    }, TOTAL_HOLD_MS);
  };

  const handlePointerEnd = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (!hold || hold.pointerId !== e.pointerId) return;

    // Completion timer already fired — the success cleanup is running, do
    // nothing here.
    if (completeTimerRef.current === null) return;

    // User released early — cancel completion and reverse the ripple.
    clearTimeout(completeTimerRef.current);
    completeTimerRef.current = null;
    if (startedRafRef.current !== null) {
      cancelAnimationFrame(startedRafRef.current);
      startedRafRef.current = null;
    }

    setHold((h) => (h ? { ...h, phase: "reversing" } : null));

    reverseTimerRef.current = window.setTimeout(() => {
      reverseTimerRef.current = null;
      setHold(null);
    }, REVERSE_MS);
  };

  const reset = () => {
    clearAllTimers();
    setCounts({ water: 0, move: 0, breathe: 0 });
    setReward(null);
    setBursts([]);
    setHold(null);
  };

  // Inline style for the ripple element, based on current hold phase.
  const computeRippleStyle = (h: Hold): CSSProperties => {
    if (h.phase === "reversing") {
      return {
        left: `${h.x}px`,
        top: `${h.y}px`,
        transform: "translate(-50%, -50%) scale(0)",
        opacity: 0,
        transition: `transform ${REVERSE_MS}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${REVERSE_MS}ms ease-out`,
      };
    }
    // expanding
    return {
      left: `${h.x}px`,
      top: `${h.y}px`,
      transform: h.started
        ? "translate(-50%, -50%) scale(1)"
        : "translate(-50%, -50%) scale(0)",
      opacity: h.started ? 0.72 : 0,
      transition: h.started
        ? `transform ${EXPAND_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity ${FADE_IN_MS}ms ease-out`
        : "none",
    };
  };

  return (
    <section className="px-5 md:px-8 pb-20 max-w-3xl mx-auto">
      <h2 className="text-2xl font-medium tracking-tight mb-3">
        Try the check-in
      </h2>
      <p className="text-gray-500 leading-relaxed mb-8">
        Press and hold each habit — slowly, the same as in the app. Let go too
        early and the ripple reverses. After all three, you&apos;ll earn a
        little treat.
      </p>

      <div className="rounded-3xl bg-[#F0EDE8] p-8 sm:p-12">
        <p className="text-center text-gray-500 mb-10 text-sm tracking-wide">
          hey you ♡
        </p>

        <div className="grid grid-cols-3 gap-3 sm:gap-8 mb-10">
          {HABITS.map(({ key, emoji, label }) => {
            const count = counts[key];
            const maxed = count >= PER_HABIT_MAX;
            const isHolding = hold?.habit === key;

            return (
              <button
                key={key}
                type="button"
                onPointerDown={(e) => handlePointerDown(key, e)}
                onPointerUp={handlePointerEnd}
                onPointerCancel={handlePointerEnd}
                onContextMenu={(e) => e.preventDefault()}
                disabled={isComplete || maxed}
                aria-label={`Check in: ${label} (press and hold)`}
                className="group flex flex-col items-center gap-3 disabled:cursor-default touch-none select-none focus:outline-none"
              >
                <div
                  className={`relative w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center text-4xl sm:text-5xl transition-transform duration-200 ${
                    isHolding ? "scale-[1.03]" : ""
                  } ${
                    maxed
                      ? // Persist the orange "completed" state. A soft outer
                        // glow mirrors what the case study calls "the orange
                        // glow shows which one you just completed."
                        "bg-orange-400 shadow-[0_0_24px_rgba(251,146,60,0.5)]"
                      : "bg-white shadow-sm"
                  }`}
                >
                  {/* Ripple layer — clipped to the circle. Sized at 240px,
                      which guarantees full coverage even if the user
                      pressed near the bubble's edge. */}
                  <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                    {isHolding && (
                      <span
                        className="absolute bg-orange-400 rounded-full"
                        style={{
                          width: "240px",
                          height: "240px",
                          ...computeRippleStyle(hold!),
                        }}
                      />
                    )}
                  </span>
                  <span className="relative z-10">{emoji}</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-500">{label}</span>
              </button>
            );
          })}
        </div>

        {/* Progress bar — relative wrapper allows bursts to overlay above.
            The bar itself isn't overflow-hidden here so the pulse + glow can
            extend above and below it. */}
        <div className="relative w-full mb-3">
          <div
            ref={barRef}
            className="relative w-full h-2 bg-white/70 rounded-full overflow-hidden"
            style={{ transformOrigin: "center" }}
          >
            <div
              className="absolute inset-y-0 left-0 bg-[#8B6F47] rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          {/* Bursts — five star particles fan upward from the new tip of
              the progress bar. */}
          {bursts.map((burst) => (
            <span
              key={burst.id}
              className="pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${burst.progress * 100}%` }}
            >
              {STAR_OFFSETS.map((offset, i) => (
                <span
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2 text-sm select-none animate-star-burst"
                  style={
                    {
                      "--dx": `${offset.dx}px`,
                      "--dy": `${offset.dy}px`,
                      animationDelay: `${i * 35}ms`,
                    } as CSSProperties
                  }
                >
                  ✨
                </span>
              ))}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-400 text-center tracking-wide">
          {reward ? "you earned a treat ♡" : `${total} / ${TARGET} checks`}
        </p>

        {/* Reward reveal */}
        {reward && (
          <div className="mt-10 flex flex-col items-center gap-5 animate-fade-up">
            <div className="text-7xl drop-shadow-sm">{reward}</div>
            <button
              type="button"
              onClick={reset}
              className="text-sm text-gray-500 underline underline-offset-4 hover:text-black transition-colors"
            >
              do tiny thing again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
