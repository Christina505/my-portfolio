import type { ReactNode } from "react";
import HabitDemo from "@/app/components/HabitDemo";
import StoryDemo from "@/app/components/StoryDemo";

export interface Media {
  type: "image" | "video";
  src: string;
}

// Text supports *accent* markers for highlighted words.
export type Slide =
  | { kind: "image"; eyebrow: string; title?: string; media: Media; caption?: string }
  | { kind: "gallery"; eyebrow: string; title?: string; media: Media[]; caption?: string }
  | { kind: "split"; eyebrow: string; title: string; body?: string; bullets?: string[]; media: Media }
  | { kind: "text"; eyebrow: string; title: string; body?: string; bullets?: string[] }
  | { kind: "demo"; eyebrow: string; title: string; node: ReactNode };

export interface Deck {
  title: string;
  year: string;
  highlight: string;
  role: string;
  tools: string;
  type: string;
  slides: Slide[];
}

export const decks: Deck[] = [
  // 0 — Little Checks
  {
    title: "Little Checks",
    year: "2025 – 2026",
    highlight: "Wellness · iOS · End-to-End",
    role: "Designer & Developer",
    tools: "Figma, SwiftUI, Xcode",
    type: "Shipped to the App Store",
    slides: [
      { kind: "image", eyebrow: "Overview", title: "A cozy habit app, *built end to end*", media: { type: "video", src: "/projects/lc-demo.mp4" }, caption: "Designed, coded, and shipped to the App Store." },
      { kind: "text", eyebrow: "The Insight", title: "Wellness apps add *pressure*, not relief", bullets: ["Streaks make missing a day feel like *failure*", "Most apps try to do *everything*", "Dashboards feel like a *performance review*"] },
      { kind: "split", eyebrow: "The Origin", title: "From my classroom *behavior chart*", body: "Small visual check-ins helped my kindergartners build routines. The same model can help busy adults — three tiny habits, a reward for steady progress.", media: { type: "image", src: "/projects/lc-classroom-chart.jpg" } },
      { kind: "text", eyebrow: "Design Goals", title: "Make it *gentle and tiny*", bullets: ["Cozy, not clinical", "Three habits — sips, move, breathe", "A reward after 100 checks — *no streaks*", "As few screens as possible"] },
      { kind: "demo", eyebrow: "Try It", title: "Check in, right *here*", node: <HabitDemo /> },
      { kind: "gallery", eyebrow: "Evolution", title: "I kept *cutting*", media: [{ type: "image", src: "/projects/lc-firstversion.png" }, { type: "image", src: "/projects/lc-home.png" }], caption: "From a busy first build to three taps." },
      { kind: "gallery", eyebrow: "The Shipped App", title: "Stripped to the *essentials*", media: [{ type: "image", src: "/projects/lc-final-welcome.png" }, { type: "image", src: "/projects/lc-home.png" }, { type: "image", src: "/projects/lc-final-album.png" }] },
      { kind: "split", eyebrow: "Engineering", title: "I *coded* it myself", body: "Figma → SwiftUI → Mandarin localization → App Store. End-to-end, so I can talk implementation with engineers.", media: { type: "image", src: "/projects/lc-code.png" } },
      { kind: "image", eyebrow: "Localization", title: "Warm in *Mandarin*, too", media: { type: "video", src: "/projects/lc-mandarin.mp4" }, caption: "I translated the entire app into Chinese — 奶茶 included." },
      { kind: "text", eyebrow: "Reflection", title: "The work is in the *seams*", body: "Once the screens were stripped down, the real work became the seams between them. I spent most of my iteration time on transitions — matching motion curves, carrying shared elements across pages, tuning timing — so moving through the app feels like one continuous, breathing surface rather than a stack of separate views. Cohesion isn't a coat of paint you add at the end; it's the thing that makes a simple app feel finished. Fewer features gave every interaction the room to feel intentional." },
    ],
  },
  // 1 — Dear Traveler
  {
    title: "Dear Traveler",
    year: "2025",
    highlight: "Interaction · Storytelling · iOS",
    role: "Designer · Writer · Developer",
    tools: "SwiftUI, Xcode",
    type: "Shipped to the App Store",
    slides: [
      { kind: "image", eyebrow: "Overview", title: "A diary that *writes back*", media: { type: "video", src: "/projects/dt-demo1.mp4" }, caption: "An interactive story game, shipped to the App Store." },
      { kind: "split", eyebrow: "Inspiration", title: "Tom Riddle's diary, meets *Lifeline*", bullets: ["Words appear, then *vanish*", "Timed, *binary* choices build tension"], media: { type: "image", src: "/projects/dt-wait.png" } },
      { kind: "text", eyebrow: "The Design", title: "A real *storybook* feeling", bullets: ["Parchment, serif, handwritten text", "Two choices keep you *in* the story", "*Multiple* endings reward replay", "Pacing tuned so it feels alive"] },
      { kind: "demo", eyebrow: "Try It", title: "Make a *choice*", node: <StoryDemo /> },
      { kind: "image", eyebrow: "Live", title: "Words that *write themselves*", media: { type: "video", src: "/projects/dt-demo2.mp4" }, caption: "Text appears and vanishes as the story unfolds in real time." },
      { kind: "image", eyebrow: "Interaction", title: "Your choice *branches* the story", media: { type: "image", src: "/projects/dt-choice.png" } },
      { kind: "split", eyebrow: "Engineering", title: "I *coded* it in SwiftUI", body: "A GameEngine drives the story graph, timed waits, and multiple endings — written and shipped by me.", media: { type: "image", src: "/projects/dt-code.png" } },
      { kind: "text", eyebrow: "Iteration", title: "After launch, I *trimmed*", bullets: ["Cut a lot of dialogue — fewer words, more impact", "Sped up the text timing so pacing felt alive"] },
      { kind: "text", eyebrow: "Reflection", title: "Design + storytelling is my *superpower*", body: "Writing the story and designing the interface turned out to be the same job. Every choice about pacing — how fast text appears, how long a silence holds, when a choice interrupts you — is both a narrative beat and an interaction decision. Because I controlled the words, the visuals, and the SwiftUI that drove them, I could tune all three toward one feeling instead of handing off between roles. That end-to-end ownership is where the magic lives for me: the medium and the message shaped together, concept to App Store." },
    ],
  },
  // 2 — Student Testing
  {
    title: "Student Testing",
    year: "2023",
    highlight: "UX Research · Accessibility · Fairness",
    role: "Researcher & Designer",
    tools: "Figma, Classroom observation",
    type: "Concept redesign",
    slides: [
      { kind: "text", eyebrow: "Case Study", title: "The test measured the *wrong thing*", body: "Three years watching ~180 kindergartners fail a standardized test that was built for literate adults." },
      { kind: "text", eyebrow: "The Problem", title: "The UX was *corrupting the data*", body: "It measured whether a five-year-old could operate an adult interface — in a second language — not what they learned. And those scores rank schools." },
      { kind: "gallery", eyebrow: "Level 1 · Getting In", title: "A *10-step* login", media: [{ type: "image", src: "/projects/stp-steps1.png" }, { type: "image", src: "/projects/stp-steps2.png" }, { type: "image", src: "/projects/stp-steps3.png" }], caption: "30+ minutes to log in 30 kids — and a month of class time lost every year." },
      { kind: "text", eyebrow: "Levels 2 & 3", title: "Built for *adults*, not kids", bullets: ["Two scroll axes and walls of text", "Accessibility becomes a *toy* that breaks shared devices", "Written cloze instead of a *spoken* question", "Tiny audio that *fails unnoticed*"] },
      { kind: "text", eyebrow: "Principles", title: "Rules I *derived*", bullets: ["One page, one objective", "One screen, one direction, *no scroll*", "*Verbal*, not written", "*One skill* per question", "Huge targets, obvious feedback", "The *teacher* holds the controls"] },
      { kind: "split", eyebrow: "Key Decision", title: "Identity by *avatar*, not name", body: "Kids recognize their avatar long before their name. QR code + avatar collapsed login from ~10 steps to ~3.", media: { type: "image", src: "/projects/stp-avatar.png" } },
      { kind: "split", eyebrow: "Redesign", title: "One picture, one *spoken* question", body: "Big image choices, loud auto-playing audio, no scroll, no wall of buttons.", media: { type: "image", src: "/projects/stp-quiz.png" } },
      { kind: "split", eyebrow: "Teacher View", title: "Stop being *human middleware*", body: "Lock student screens, see who's clicking through mindlessly, and restart a kid's test with one toggle.", media: { type: "image", src: "/projects/stp-dashboard.png" } },
      { kind: "text", eyebrow: "The Tradeoff", title: "More *valid*, not easier", body: "The old test conflates reading, navigation, and motor skill. Isolating one skill per question measures the intended construct more cleanly — exactly what you want if you rank schools on the results." },
      { kind: "text", eyebrow: "Reflection", title: "Good UX is a *fairness* issue", body: "Watching kids fail a test they actually understood taught me that an interface is never neutral — every extra step, every scroll, every wall of text quietly decides who gets counted and who gets left out. Design that ignores the person in front of it doesn't just frustrate them; it distorts the data and the stakes that ride on it. That's the reframe that made me a designer: usability isn't polish, it's whose reality the product is willing to hold. I now start every project by asking who the current design is silently failing." },
    ],
  },
  // 3 — ABC Countdown
  {
    title: "ABC Countdown",
    year: "2026 — in progress",
    highlight: "3D Game · Unity · In progress",
    role: "Designer & Developer",
    tools: "Unity, Blender, C#",
    type: "In the workshop",
    slides: [
      { kind: "image", eyebrow: "In the Workshop", title: "A 3D game about *being five again*", media: { type: "image", src: "/projects/abc-1.png" }, caption: "Still in development — here's a look inside what I'm building right now." },
      { kind: "text", eyebrow: "Why", title: "The world I *know best*", body: "Most cozy games are cabins and farms. I'm designing the kindergarten classroom from the inside — as someone who lives in it every day." },
      { kind: "image", eyebrow: "Sneak Peek · Now", title: "A living *classroom economy*", media: { type: "video", src: "/projects/abc-playtest.mp4" }, caption: "The current playtest build — a working systems prototype I'm iterating on daily." },
      { kind: "split", eyebrow: "Sneak Peek · Now", title: "Every kid is a *system*", body: "Loyalty, tickets, and risk all tuned per character — talk, ask, bribe, or scare, and the odds shift. I'm balancing the whole loop in engine before I make it pretty.", media: { type: "image", src: "/projects/abc-playtest.png" } },
      { kind: "split", eyebrow: "Early Testing Scenes", title: "Where the world *started*", body: "The first blocked-out scenes — named kids like Aria, Mia, Leo, Noah, Zoe, and Ms. Bloom, each with their own lines and personality.", media: { type: "image", src: "/projects/abc-2.png" } },
      { kind: "image", eyebrow: "Early Testing Scenes", title: "Assembled in *Unity*", media: { type: "image", src: "/projects/abc-4.png" }, caption: "An early test scene — NPCs, triggers, lighting, and a game manager wired together by hand." },
      { kind: "image", eyebrow: "Early Testing Scenes", title: "Dialogue system in *C#*", media: { type: "image", src: "/projects/abc-3.png" }, caption: "An early build of the dialogue system — I wrote DialogueManager.cs myself." },
      { kind: "image", eyebrow: "Early Testing Scenes", title: "A classroom in a *happy memory*", media: { type: "image", src: "/projects/abc-5.png" }, caption: "An early look-and-feel test for the classroom." },
      { kind: "text", eyebrow: "Still Building", title: "One *playable day* at a time", body: "The world, characters, dialogue, and the core economy loop are all in and playable. I'm iterating on it every day — next comes more story and the ABC mini-games, building toward a first downloadable build. Check back soon." },
    ],
  },
];
