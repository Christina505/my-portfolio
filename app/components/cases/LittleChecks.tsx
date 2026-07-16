"use client";

import Image from "next/image";
import HabitDemo from "@/app/components/HabitDemo";

export default function LittleChecks() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 md:px-8 pt-12 pb-12 max-w-3xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">UX Design</span>
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">SwiftUI</span>
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">App Store</span>
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">End-to-End</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">Little Checks</h1>
          <a href="https://apps.apple.com/us/app/little-checks/id6760602816" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-black text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
        </div>
        <p className="text-xl font-light text-gray-400 leading-relaxed">
          A cozy habit-tracking app that helps busy adults build small, sustainable routines — without the pressure of streaks or performance tracking.
        </p>
      </section>

      {/* Hero — video flanked by screenshots */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="rounded-3xl overflow-hidden bg-[#F0EDE8] p-6 md:p-12 flex items-center justify-center gap-3 md:gap-6">
          <div className="relative w-24 md:w-40 aspect-[9/19.5] rounded-2xl overflow-hidden shadow-2xl -rotate-6 -translate-y-2 hidden sm:block">
            <Image src="/projects/lc-rewards.png" alt="Little Checks rewards screen" fill className="object-contain" />
          </div>
          <div className="w-36 sm:w-44 md:w-48 aspect-[9/19.5] rounded-2xl overflow-hidden shadow-2xl z-10">
            <video autoPlay loop muted playsInline className="w-full h-full object-contain rounded-2xl"><source src="/projects/lc-demo.mp4" type="video/mp4" /></video>
          </div>
          <div className="relative w-24 md:w-40 aspect-[9/19.5] rounded-2xl overflow-hidden shadow-2xl rotate-6 -translate-y-2 hidden sm:block">
            <Image src="/projects/lc-checklist.png" alt="Little Checks checklist view" fill className="object-contain" />
          </div>
        </div>
      </section>

      <HabitDemo />

      {/* Overview */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-16">
          <div><p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Role</p><p className="text-sm">Designer &amp; Developer</p></div>
          <div><p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Tools</p><p className="text-sm">Figma, SwiftUI, Xcode</p></div>
          <div><p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Timeline</p><p className="text-sm">Nov 2025 — 2026</p></div>
        </div>
        <p className="text-gray-500 leading-relaxed">
          Little Checks started from something I already knew worked. As a teacher, I used behavior charts in my classroom to help young kids get familiar with routines — small, visual check-ins that made big habits feel manageable. It worked incredibly well. When I started thinking about building a wellness app, I realized: if this model helped kids build structure, it should help busy adults take care of their mental health with small habits too.
        </p>
      </section>

      {/* Research */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-6">Research</h2>
        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <p className="text-sm font-medium mb-4">Competitive Analysis</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">To identify gaps in the self-care app space, I analyzed Finch, Stoic, Fabulous, and Notion — all of which I&apos;ve personally used and even paid for. I looked at each through the lens of usability and emotional tone.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded-xl p-4 text-center"><p className="text-sm font-medium mb-1">Finch</p><p className="text-xs text-gray-400">Gamified, cute but complex</p></div>
            <div className="bg-white rounded-xl p-4 text-center"><p className="text-sm font-medium mb-1">Stoic</p><p className="text-xs text-gray-400">Data-heavy, clinical feel</p></div>
            <div className="bg-white rounded-xl p-4 text-center"><p className="text-sm font-medium mb-1">Fabulous</p><p className="text-xs text-gray-400">Beautiful but overwhelming</p></div>
            <div className="bg-white rounded-xl p-4 text-center"><p className="text-sm font-medium mb-1">Notion</p><p className="text-xs text-gray-400">Flexible but too much setup</p></div>
          </div>
        </div>
        <div className="bg-[#F0EDE8] rounded-2xl p-8">
          <p className="text-sm font-medium mb-3">Key Insight</p>
          <p className="text-gray-600 leading-relaxed">Most existing wellness apps promote achievement-based motivation — data, streaks, checklists. This adds mental pressure instead of relief — another &ldquo;thing to manage.&rdquo; There&apos;s a gap for an app that offers emotional restoration over performance tracking.</p>
        </div>
      </section>

      {/* From Classroom to App */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-medium tracking-tight mb-4">From Classroom to App</h2>
          <p className="text-gray-500 leading-relaxed">The format of Little Checks is directly based on the behavior chart I used in my classroom. Each check mark was a tiny win, and after enough of them, the kids earned a reward. It was simple, non-punitive, and it worked. Instead of tracking complex goals, you just check in with three small things — drink water, move around, breathe — and after 100 checks, you treat yourself. The reward isn&apos;t for daily milestones (that would be exhausting), it&apos;s for steady accumulation over time.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden"><Image src="/projects/lc-classroom-chart.jpg" alt="Real behavior chart used in classroom" fill className="object-cover" /></div>
            <p className="text-xs text-gray-400 text-center mt-3">The actual behavior chart I used with my students</p>
          </div>
          <div className="bg-[#F0EDE8] rounded-2xl p-4 flex items-center justify-center">
            <div className="relative w-48 h-80 rounded-xl overflow-hidden shadow-lg"><Image src="/projects/lc-final-checklist.png" alt="Little Checks app checklist" fill className="object-contain" /></div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-6">The Problem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-100 rounded-xl p-5"><p className="font-medium mb-1 text-sm">Streak anxiety</p><p className="text-sm text-gray-400">Missing a day feels like failure. The app that&apos;s supposed to help you relax becomes a source of guilt.</p></div>
          <div className="border border-gray-100 rounded-xl p-5"><p className="font-medium mb-1 text-sm">Too many features</p><p className="text-sm text-gray-400">Most apps try to do everything. It&apos;s overwhelming when you just want something simple.</p></div>
          <div className="border border-gray-100 rounded-xl p-5"><p className="font-medium mb-1 text-sm">Cold, clinical tone</p><p className="text-sm text-gray-400">Data dashboards feel like work. Wellness should feel warm, not like a performance review.</p></div>
          <div className="border border-gray-100 rounded-xl p-5"><p className="font-medium mb-1 text-sm">No gentle accountability</p><p className="text-sm text-gray-400">Apps either nag you or let you forget entirely. There&apos;s no supportive middle ground.</p></div>
        </div>
      </section>

      {/* Design Goals */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-6">Design Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-2xl p-6"><p className="font-medium mb-2">Feel cozy, not clinical</p><p className="text-sm text-gray-500">Warm beige palette, hand-picked emojis, friendly language like &ldquo;hey you ♡&rdquo;.</p></div>
          <div className="bg-gray-50 rounded-2xl p-6"><p className="font-medium mb-2">As few pages as possible</p><p className="text-sm text-gray-500">One screen to check in, one to see history. Edit mode lives on the habit view.</p></div>
          <div className="bg-gray-50 rounded-2xl p-6"><p className="font-medium mb-2">Reward without pressure</p><p className="text-sm text-gray-500">After 100 checks, a small treat. No streaks. No daily goals.</p></div>
          <div className="bg-gray-50 rounded-2xl p-6"><p className="font-medium mb-2">Three tiny habits</p><p className="text-sm text-gray-500">Take a few sips, move around, breathe. Small enough to do without thinking.</p></div>
        </div>
      </section>

      {/* Design Evolution */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-4">Design Evolution</h2>
          <p className="text-gray-500 leading-relaxed">The early prototype had more text, more screens, and even a fourth habit. Through constant iteration I kept cutting — removing the tab bar, merging the edit page into the habit view, and reducing words everywhere to make the app feel lighter.</p>
        </div>
        <div className="mb-10">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">Early Prototype</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#F0EDE8] rounded-2xl p-3"><div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden"><Image src="/projects/lc-firstversion-welcome.png" alt="Early welcome screen" fill className="object-contain" /></div></div>
            <div className="bg-[#F0EDE8] rounded-2xl p-3"><div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden"><Image src="/projects/lc-earlyprototype.png" alt="Early prototype" fill className="object-contain" /></div></div>
            <div className="bg-[#F0EDE8] rounded-2xl p-3"><div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden"><Image src="/projects/lc-firstversion.png" alt="First version" fill className="object-contain" /></div></div>
            <div className="bg-[#F0EDE8] rounded-2xl p-3"><div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden"><Image src="/projects/lc-earlyprototype-celebration.png" alt="Celebration screen" fill className="object-contain" /></div></div>
          </div>
          <p className="text-sm text-gray-400 mt-3">More text, more habits, tab bar navigation — the early version tried to do too much.</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">Final Product</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            <div className="bg-[#F0EDE8] rounded-2xl p-3"><div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden"><Image src="/projects/lc-final-welcome.png" alt="Final welcome" fill className="object-contain" /></div></div>
            <div className="bg-[#F0EDE8] rounded-2xl p-3"><div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden"><Image src="/projects/lc-home.png" alt="Final habit screen" fill className="object-contain" /></div></div>
            <div className="bg-[#F0EDE8] rounded-2xl p-3"><div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden"><Image src="/projects/lc-final-edit.png" alt="Final edit mode" fill className="object-contain" /></div></div>
            <div className="bg-[#F0EDE8] rounded-2xl p-3"><div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden"><Image src="/projects/lc-final-checklist.png" alt="Final checklist" fill className="object-contain" /></div></div>
            <div className="bg-[#F0EDE8] rounded-2xl p-3"><div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden"><Image src="/projects/lc-final-album.png" alt="Final album" fill className="object-contain" /></div></div>
          </div>
          <p className="text-sm text-gray-400 mt-3">Stripped to the essentials — three habit circles, inline edit, cozy polaroid album.</p>
        </div>
      </section>

      {/* What I Cut */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">What I Cut (and Why)</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start"><span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">1</span><p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">Removed the fourth habit</span> — three felt right; four was one too many.</p></div>
          <div className="flex gap-4 items-start"><span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">2</span><p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">Removed the tab bar</span> — replaced with a swipe gesture and dots. Less chrome, more breathing room.</p></div>
          <div className="flex gap-4 items-start"><span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">3</span><p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">Removed the separate edit page</span> — merged into the habit view. Fewer taps, less confusion.</p></div>
          <div className="flex gap-4 items-start"><span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">4</span><p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">Cut most onboarding text</span> — the final just says &ldquo;hey you ♡&rdquo; and lets you hold the teapot to begin.</p></div>
          <div className="flex gap-4 items-start"><span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">5</span><p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">Simplified history</span> — a cozy polaroid-on-string-lights album instead of a complex calendar.</p></div>
        </div>
      </section>

      {/* Engineering */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">Building It Myself</h2>
        <p className="text-gray-500 leading-relaxed mb-6">I didn&apos;t just design Little Checks — I coded the whole project. Going from Figma to a shipped App Store product gave me a much deeper understanding of what engineers deal with every day: screen-size adaptation across every iPhone and iPad, edge cases I&apos;d never have anticipated as a designer alone, and data-model tradeoffs like bools vs. enums for the habit bubbles&apos; state.</p>
        <p className="text-gray-500 leading-relaxed mb-8">This made me a better designer and someone who can have real conversations with engineers about implementation — because I&apos;ve been there. I also localized the entire app into Mandarin Chinese. True end-to-end: research → wireframes → visual design → SwiftUI → localization → App Store submission.</p>
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-4">
          <Image src="/projects/lc-code.png" alt="Little Checks SwiftUI code in Xcode — the habit emoji matcher with English and Chinese localization" width={2560} height={1334} className="w-full h-auto" />
        </div>
        <p className="text-sm text-gray-400 mb-10">The SwiftUI source in Xcode — here, the emoji matcher with its built-in English &amp; Chinese dictionary.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-white"><Image src="/projects/lc-wireframe1.png" alt="Hand-drawn wireframes for Little Checks" fill className="object-contain" /></div>
            <p className="text-xs text-gray-400 text-center mt-3">1 · Wireframes on paper</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-white"><Image src="/projects/lc-designmap.png" alt="Figma user-flow map for Little Checks" fill className="object-contain" /></div>
            <p className="text-xs text-gray-400 text-center mt-3">2 · Figma flow &amp; visual design</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-white"><Image src="/projects/lc-home.png" alt="Shipped Little Checks app built in SwiftUI" fill className="object-contain" /></div>
            <p className="text-xs text-gray-400 text-center mt-3">3 · Shipped in SwiftUI</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center mt-10">
          <div>
            <p className="font-medium mb-2">Localized into Mandarin Chinese</p>
            <p className="text-sm text-gray-500 leading-relaxed">I translated the entire app, including the habit emoji matcher, so it feels just as warm in Chinese (奶茶, anyone?) as it does in English.</p>
          </div>
          <div className="bg-[#F0EDE8] rounded-2xl p-4 flex items-center justify-center">
            <div className="relative w-48 aspect-[9/19.5] rounded-2xl overflow-hidden shadow-lg bg-black">
              <video src="/projects/lc-mandarin.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="px-5 md:px-8 pb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">Reflection</h2>
        <p className="text-gray-500 leading-relaxed">Building Little Checks taught me that cutting features is just as important as adding them. Every time I removed a page or simplified an interaction, the app felt better. The behavior-chart model from my classroom translated surprisingly well to adults: people don&apos;t need complex systems to take care of themselves — they need something gentle that meets them where they are. I shipped it on the App Store and I still use it every day.</p>
      </section>
    </>
  );
}
