"use client";

import { useEffect, useState } from "react";

type StoryChoice = { text: string; nextNodeID: string };
type StoryNode = {
  id: string;
  lines: string[];
  choices?: StoryChoice[];
};

// An excerpt from the actual Dear Traveler story — same wording as the
// SwiftUI app's "2_en", "3_en", and "4_en" nodes.
const STORY: Record<string, StoryNode> = {
  "2_en": {
    id: "2_en",
    lines: [
      "Please, please, PLEASE!! Before I totally lose myself, get me out of here, pleaseee!!",
    ],
    choices: [
      {
        text: "Even though it's my first day at work, I will for sure get you out!",
        nextNodeID: "3_en",
      },
      {
        text: "Oh my you kinda suck! But fear not! I will get you out!",
        nextNodeID: "4_en",
      },
    ],
  },
  "3_en": {
    id: "3_en",
    lines: [
      "Day one?! You're an intern?!",
      "I mean...I guess I don't have much of a choice now.",
      "Please help me!!!",
    ],
  },
  "4_en": {
    id: "4_en",
    lines: [
      "If I was any good, do you think I'd still be stuck here?",
      "I'm seriously out of options...",
      "If you can get me out of here, I'll literally do anything you say!",
    ],
  },
};

// Each line bleeds onto the page as a whole sentence, then a beat passes
// before the next line begins. Tuned to feel like ink soaking through paper.
const LINE_FADE_MS = 2800;       // how long one line takes to fully appear
const LINE_INTERVAL_MS = 3200;   // start-to-start gap between lines
const CHOICES_AFTER_MS = 700;    // pause after last line before choices fade in

// Fonts mirror the SwiftUI app: handwritten body, marker-style choices.
// Both are Apple system fonts; the fallbacks cover other platforms.
const BODY_FONT =
  '"Bradley Hand", "Bradley Hand ITC", "Segoe Script", "Comic Sans MS", cursive';
const CHOICE_FONT =
  '"Noteworthy", "Marker Felt", "Segoe Script", "Comic Sans MS", cursive';

function StoryNodeView({
  node,
  onChoice,
  onReset,
}: {
  node: StoryNode;
  onChoice: (id: string) => void;
  onReset: () => void;
}) {
  const [linesShown, setLinesShown] = useState(0);
  const [showChoices, setShowChoices] = useState(false);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < node.lines.length; i++) {
      const myIdx = i;
      timeouts.push(
        setTimeout(() => setLinesShown(myIdx + 1), i * LINE_INTERVAL_MS)
      );
    }
    // Choices appear once the last line has had time to fully render.
    const finishedAt =
      (node.lines.length - 1) * LINE_INTERVAL_MS +
      LINE_FADE_MS +
      CHOICES_AFTER_MS;
    timeouts.push(setTimeout(() => setShowChoices(true), finishedAt));
    return () => {
      for (const t of timeouts) clearTimeout(t);
    };
  }, [node]);

  const lineTransition = `opacity ${LINE_FADE_MS}ms cubic-bezier(0.22, 1, 0.36, 1), filter ${LINE_FADE_MS}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${LINE_FADE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`;

  return (
    <div
      className="mx-auto max-w-md rounded-2xl shadow-2xl px-6 py-7 sm:px-8 sm:py-9 min-h-[440px] flex flex-col overflow-hidden"
      style={{
        fontFamily: BODY_FONT,
        backgroundColor: "#F5E6D3",
        backgroundImage: "url('/parchment.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex-1 space-y-4 text-[#3D3224] text-[20px] leading-[1.6]">
        {node.lines.map((line, lineIdx) => {
          const visible = lineIdx < linesShown;
          return (
            <p
              key={lineIdx}
              style={{
                opacity: visible ? 1 : 0,
                filter: visible ? "blur(0px)" : "blur(5px)",
                transform: visible ? "translateY(0)" : "translateY(3px)",
                transition: lineTransition,
                willChange: "opacity, filter, transform",
              }}
            >
              {line}
            </p>
          );
        })}
      </div>

      <div
        className="mt-6"
        style={{
          opacity: showChoices ? 1 : 0,
          filter: showChoices ? "blur(0px)" : "blur(4px)",
          transform: showChoices ? "translateY(0)" : "translateY(8px)",
          transition: lineTransition,
          pointerEvents: showChoices ? "auto" : "none",
        }}
      >
        {node.choices ? (
          <div className="space-y-2">
            {node.choices.map((choice, i) => (
              <button
                key={i}
                onClick={() => onChoice(choice.nextNodeID)}
                className="block w-full text-left text-[16px] leading-snug text-[#3D3224] px-4 py-3 rounded-xl border border-[#3D3224]/25 hover:bg-[#3D3224] hover:text-[#F5E6D3] active:scale-[0.99] transition-all"
                style={{ fontFamily: CHOICE_FONT }}
              >
                {choice.text}
              </button>
            ))}
          </div>
        ) : (
          <div
            className="flex items-center justify-between gap-3"
            style={{ fontFamily: CHOICE_FONT }}
          >
            <p className="text-[14px] text-[#3D3224]/60">to be continued…</p>
            <button
              onClick={onReset}
              className="text-[14px] text-[#3D3224] px-3 py-2 rounded-lg border border-[#3D3224]/25 hover:bg-[#3D3224] hover:text-[#F5E6D3] transition-colors"
            >
              ↺ Try the other path
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function StoryDemo() {
  const [nodeId, setNodeId] = useState<string>("2_en");
  const node = STORY[nodeId];

  return (
    <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
      <h2 className="text-2xl font-medium tracking-tight mb-3">Try it</h2>
      <p className="text-gray-500 leading-relaxed mb-8 text-sm">
        An excerpt from chapter one — same words as the App Store version.
        Read the diary, then pick how you respond. Your choice changes what
        the trapped character says next.
      </p>

      <div className="rounded-3xl bg-[#3D3224] p-5 sm:p-8 md:p-12">
        {/* `key` forces a fresh mount on node change, restarting the reveal. */}
        <StoryNodeView
          key={nodeId}
          node={node}
          onChoice={setNodeId}
          onReset={() => setNodeId("2_en")}
        />
      </div>

      <p className="text-sm text-gray-400 text-center mt-4">
        A taste of the interaction — the full story has many more branches and endings.
      </p>
    </section>
  );
}
