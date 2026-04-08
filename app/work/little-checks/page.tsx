import Image from "next/image";
import Link from "next/link";

export default function LittleChecksCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100/50 px-5 md:px-8 py-5">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-medium tracking-tight text-lg hover:opacity-70 transition-opacity">
            ← Back
          </Link>
          <span className="text-sm text-gray-400">Christina Ma</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-5 md:px-8 pt-16 pb-12 max-w-3xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">UX Design</span>
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">SwiftUI</span>
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">App Store</span>
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">End-to-End</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            Little Checks
          </h1>
          <a
            href="https://apps.apple.com/us/app/little-checks/id6760602816"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-black text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
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
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain rounded-2xl"
            >
              <source src="/projects/lc-demo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative w-24 md:w-40 aspect-[9/19.5] rounded-2xl overflow-hidden shadow-2xl rotate-6 -translate-y-2 hidden sm:block">
            <Image src="/projects/lc-checklist.png" alt="Little Checks checklist view" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-16">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Role</p>
            <p className="text-sm">Designer &amp; Developer</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Tools</p>
            <p className="text-sm">Figma, SwiftUI, Xcode</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Timeline</p>
            <p className="text-sm">Nov 2025 — present</p>
          </div>
        </div>

        <p className="text-gray-500 leading-relaxed">
          Little Checks started from something I already knew worked. As a teacher, I used behavior charts in my classroom to help young kids get familiar with routines — small, visual check-ins that made big habits feel manageable. It worked incredibly well. When I started thinking about building a wellness app, I realized: if this model helped kids build structure, it should be able to help busy adults take care of their mental health with small habits too.
        </p>
      </section>

      {/* Research */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-6">Research</h2>

        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <p className="text-sm font-medium mb-4">Competitive Analysis</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            To identify gaps in the self-care app space, I analyzed Finch, Stoic, Fabulous, and Notion — all of which I&apos;ve personally used and even paid for. I looked at each through the lens of usability and emotional tone.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-sm font-medium mb-1">Finch</p>
              <p className="text-xs text-gray-400">Gamified, cute but complex</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-sm font-medium mb-1">Stoic</p>
              <p className="text-xs text-gray-400">Data-heavy, clinical feel</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-sm font-medium mb-1">Fabulous</p>
              <p className="text-xs text-gray-400">Beautiful but overwhelming</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-sm font-medium mb-1">Notion</p>
              <p className="text-xs text-gray-400">Flexible but too much setup</p>
            </div>
          </div>
        </div>

        <div className="bg-[#F0EDE8] rounded-2xl p-8">
          <p className="text-sm font-medium mb-3">Key Insight</p>
          <p className="text-gray-600 leading-relaxed">
            Most existing wellness apps promote achievement-based motivation — data, streaks, checklists. This adds mental pressure instead of relief — another &ldquo;thing to manage.&rdquo; There&apos;s a gap for an app that offers emotional restoration over performance tracking.
          </p>
        </div>
      </section>

      {/* Origin — Behavior Chart */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-medium tracking-tight mb-4">From Classroom to App</h2>
          <p className="text-gray-500 leading-relaxed">
            The format of Little Checks is directly based on the behavior chart I used in my classroom with my kids. The chart helped them build familiarity with routines through small, visual check-ins — each check mark was a tiny win, and after enough of them, they earned a reward. It was simple, non-punitive, and it worked. When I started ideating, I thought: since this model worked so well for kids, it should help adults with busy jobs too. Instead of tracking complex goals, you just check in with three small things — drink water, move around, breathe — and after 100 checks, you treat yourself. The reward isn&apos;t for milestones on a daily basis (that would be exhausting), it&apos;s for steady accumulation over time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden">
              <Image src="/projects/lc-classroom-chart.jpg" alt="Real behavior chart used in classroom with check marks for keeping hands to self, being respectful, and following directions" fill className="object-cover" />
            </div>
            <p className="text-xs text-gray-400 text-center mt-3">The actual behavior chart I used with my students</p>
          </div>
          <div className="bg-[#F0EDE8] rounded-2xl p-4 flex items-center justify-center">
            <div className="relative w-48 h-80 rounded-xl overflow-hidden shadow-lg">
              <Image src="/projects/lc-final-checklist.png" alt="Little Checks app checklist — the digital version of the classroom chart" fill className="object-contain" />
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-4 max-w-3xl mx-auto">The classroom chart tracked behaviors across parts of the school day with simple check marks and points. Little Checks does the same thing — three habits across time blocks, with a reward at the end.</p>
      </section>

      {/* Problem */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-6">The Problem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-medium mb-1 text-sm">Streak anxiety</p>
            <p className="text-sm text-gray-400">Missing a day feels like failure. The app that&apos;s supposed to help you relax becomes a source of guilt.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-medium mb-1 text-sm">Too many features</p>
            <p className="text-sm text-gray-400">Most apps try to do everything — journaling, meditation, tracking, social. It&apos;s overwhelming when you just want something simple.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-medium mb-1 text-sm">Cold, clinical tone</p>
            <p className="text-sm text-gray-400">Data dashboards and progress charts feel like work. Wellness should feel warm, not like a performance review.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-medium mb-1 text-sm">No gentle accountability</p>
            <p className="text-sm text-gray-400">Either apps nag you with notifications or they let you forget entirely. There&apos;s no middle ground that feels supportive.</p>
          </div>
        </div>
      </section>

      {/* Design Goals */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-6">Design Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="font-medium mb-2">Feel cozy, not clinical</p>
            <p className="text-sm text-gray-500">Warm beige palette, hand-picked emojis, and friendly language like &ldquo;hey you ♡&rdquo; instead of sterile UI copy.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="font-medium mb-2">As few pages as possible</p>
            <p className="text-sm text-gray-500">Cut everything that isn&apos;t essential. One screen to check in, one screen to see history. No separate editing page — edit mode lives right on the habit view.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="font-medium mb-2">Reward without pressure</p>
            <p className="text-sm text-gray-500">After 100 checks, you earn a small treat — boba, coffee, cake. No streaks. No daily goals. Log it whenever you remember.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="font-medium mb-2">Three tiny habits</p>
            <p className="text-sm text-gray-500">Just three things: take a few sips, move around, and breathe. Small enough that you can do them without thinking.</p>
          </div>
        </div>
      </section>

      {/* Early Wireframes */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-4">Early Wireframes &amp; Ideation</h2>
          <p className="text-gray-500 leading-relaxed">
            I started with pen and paper, sketching out the core screens and flows. These early wireframes explored the daily check-in structure, the album/history concept, and the reward milestone system. One key decision from this stage: rewards should be for milestones (reaching 100 checks), not daily — because daily rewards would be exhausting.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-3">
              <Image src="/projects/lc-wireframe1.png" alt="Early hand-drawn wireframes of daily check-in and reflection screens" fill className="object-contain" />
            </div>
            <p className="text-xs text-gray-400 text-center">Check-in &amp; reflection sketches</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-3">
              <Image src="/projects/lc-wireframe2.png" alt="Early wireframes of album, archive, and reward system" fill className="object-contain" />
            </div>
            <p className="text-xs text-gray-400 text-center">Album &amp; reward milestone ideas</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-3">
              <Image src="/projects/lc-designmap.png" alt="Full early design map showing all screen flows" fill className="object-contain" />
            </div>
            <p className="text-xs text-gray-400 text-center">Early design map — full app flow</p>
          </div>
        </div>
      </section>

      {/* Early Prototype → First Version → Final */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-4">Design Evolution</h2>
          <p className="text-gray-500 leading-relaxed">
            The app went through several stages. The early prototype had more text, more screens, and even a fourth habit (positive affirmations). The first shipped version still had a tab bar and a &ldquo;Did you...?&rdquo; prompt. Through constant iteration, I kept cutting — removing the tab bar, merging the edit page into the habit view, simplifying the welcome screen, and reducing words everywhere to make the app feel lighter and run smoother.
          </p>
        </div>

        {/* Early Prototype */}
        <div className="mb-10">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">Early Prototype</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#F0EDE8] rounded-2xl p-3 flex items-center justify-center">
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden">
                <Image src="/projects/lc-firstversion-welcome.png" alt="Early welcome screen with lots of text" fill className="object-contain" />
              </div>
            </div>
            <div className="bg-[#F0EDE8] rounded-2xl p-3 flex items-center justify-center">
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden">
                <Image src="/projects/lc-earlyprototype.png" alt="Early prototype with four habits including affirmations" fill className="object-contain" />
              </div>
            </div>
            <div className="bg-[#F0EDE8] rounded-2xl p-3 flex items-center justify-center">
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden">
                <Image src="/projects/lc-firstversion.png" alt="First version with tab bar and Did you prompt" fill className="object-contain" />
              </div>
            </div>
            <div className="bg-[#F0EDE8] rounded-2xl p-3 flex items-center justify-center">
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden">
                <Image src="/projects/lc-earlyprototype-celebration.png" alt="Early prototype celebration screen with confetti" fill className="object-contain" />
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-3">More text, more habits, tab bar navigation, &ldquo;Did you...?&rdquo; prompts — the early version tried to do too much.</p>
        </div>

        {/* Final Product */}
        <div>
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">Final Product</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            <div className="bg-[#F0EDE8] rounded-2xl p-3 flex items-center justify-center">
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden">
                <Image src="/projects/lc-final-welcome.png" alt="Final welcome screen - just hey you with heart" fill className="object-contain" />
              </div>
            </div>
            <div className="bg-[#F0EDE8] rounded-2xl p-3 flex items-center justify-center">
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden">
                <Image src="/projects/lc-home.png" alt="Final habit circles screen" fill className="object-contain" />
              </div>
            </div>
            <div className="bg-[#F0EDE8] rounded-2xl p-3 flex items-center justify-center">
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden">
                <Image src="/projects/lc-final-edit.png" alt="Final edit mode inline with habits" fill className="object-contain" />
              </div>
            </div>
            <div className="bg-[#F0EDE8] rounded-2xl p-3 flex items-center justify-center">
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden">
                <Image src="/projects/lc-final-checklist.png" alt="Final checklist with checkmarks" fill className="object-contain" />
              </div>
            </div>
            <div className="bg-[#F0EDE8] rounded-2xl p-3 flex items-center justify-center">
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden">
                <Image src="/projects/lc-final-album.png" alt="Final album view with polaroid string lights" fill className="object-contain" />
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-3">Stripped down to the essentials — &ldquo;hey you ♡&rdquo;, three habit circles, inline edit mode, clean checklist, cozy polaroid album.</p>
        </div>
      </section>

      {/* What Changed */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">What I Cut (and Why)</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
            <p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">Removed the fourth habit (positive affirmations)</span> — three habits felt right. Four was one too many. The app should take seconds, not minutes.</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
            <p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">Removed the tab bar</span> — the first version had Habits / Today / Album tabs. I replaced it with a swipe gesture and dots. Less chrome, more breathing room.</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
            <p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">Removed the separate edit page</span> — I merged it into the habit view so everything lives on one page. The habit view transitions into edit mode in place. Fewer taps, less confusion.</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
            <p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">Cut most of the onboarding text</span> — the early version had paragraphs of explanation. The final just says &ldquo;hey you ♡&rdquo; and lets you hold the teapot to begin.</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
            <p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">Simplified the history view</span> — replaced a complex calendar with a cozy polaroid-on-string-lights album, making past check-ins feel like warm memories instead of data.</p>
          </div>
        </div>
      </section>

      {/* Solution - Main Experience */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">The Core Experience</h2>
        <p className="text-gray-500 leading-relaxed">
          The app greets you with &ldquo;hey you ♡&rdquo; and a hold-to-start teapot button. The main screen shows three large, tappable habit circles — drink water, move around, breathe — with a progress bar tracking your journey toward a reward. A checklist view breaks the day into time blocks so you can log whenever you remember. And the album turns your history into polaroid photos on string lights, with a playful manual that reads: &ldquo;do tiny thing → ✓, repeat until 100, reward yourself, feel slightly better about life.&rdquo;
        </p>
      </section>


      {/* Final app screens */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-[#F0EDE8] rounded-2xl p-6 flex items-center justify-center">
            <div className="relative w-40 sm:w-48 aspect-[9/19.5] rounded-xl overflow-hidden shadow-lg">
              <Image src="/projects/lc-home.png" alt="Home screen with three habit circles" fill className="object-contain" />
            </div>
          </div>
          <div className="bg-[#F0EDE8] rounded-2xl p-6 flex items-center justify-center">
            <div className="relative w-40 sm:w-48 aspect-[9/19.5] rounded-xl overflow-hidden shadow-lg">
              <Image src="/projects/lc-checklist.png" alt="Checklist view with time blocks" fill className="object-contain" />
            </div>
          </div>
          <div className="bg-[#F0EDE8] rounded-2xl p-6 flex items-center justify-center">
            <div className="relative w-40 sm:w-48 aspect-[9/19.5] rounded-xl overflow-hidden shadow-lg">
              <Image src="/projects/lc-rewards.png" alt="Rewards screen with treats" fill className="object-contain" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6">
          <div>
            <p className="text-sm font-medium mb-1">Habit view</p>
            <p className="text-sm text-gray-500">Three oversized circles for each micro-habit. Tap to check in. The orange glow shows which one you just completed.</p>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">Checklist</p>
            <p className="text-sm text-gray-500">Time-block grid so you can log throughout the day. &ldquo;log it whenever you remember ♡&rdquo;</p>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">Rewards</p>
            <p className="text-sm text-gray-500">After 100 checks, you&apos;ve earned a little treat. Choose from boba, coffee, tea, chocolate, ice cream, or cake.</p>
          </div>
        </div>
      </section>

      {/* Design Details */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-6">Design Details</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="font-medium mb-2">Warm onboarding</p>
            <p className="text-sm text-gray-500">Each habit is introduced one at a time — &ldquo;first, take a few sips&rdquo; with a teapot, &ldquo;then, move around&rdquo; with footprints, &ldquo;finally, breathe&rdquo; with a leaf. One element per page. No walls of text.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="font-medium mb-2">Polaroid album history</p>
            <p className="text-sm text-gray-500">Past check-ins appear as polaroid photos clipped to string lights with warm orange bulbs. Looking back feels nostalgic and cozy rather than analytical.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="font-medium mb-2">Hold-to-start interaction</p>
            <p className="text-sm text-gray-500">The main action uses a press-and-hold gesture instead of a tap. It&apos;s intentionally slower — a small moment of pause before you begin your check-in.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="font-medium mb-2">Inline edit mode</p>
            <p className="text-sm text-gray-500">Instead of navigating to a separate page to edit habits, the habit view transitions into edit mode in place. Everything on one page, fewer taps to manage.</p>
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">Building It Myself</h2>
        <p className="text-gray-500 leading-relaxed mb-6">
          I didn&apos;t just design Little Checks — I vibe coded the whole project. Going from Figma to a shipped App Store product gave me a much deeper understanding of what backend and frontend engineers deal with every day. I had to research and figure out screen size adapting methods to make the app look right on every iPhone and iPad. I dealt with edge cases I never would have anticipated as a designer alone. I researched and weighed whether bools or enums were the better data model for the habit bubbles&apos; state management. Every one of these decisions gave me a new appreciation for engineering tradeoffs.
        </p>
        <p className="text-gray-500 leading-relaxed">
          This experience made me not only a better designer, but someone who can have real conversations with engineers about implementation — because I&apos;ve been there. I also localized the entire app into Mandarin Chinese, handling every string, label, and piece of UI copy in both languages. I have true end-to-end experience: from research to wireframes to visual design to SwiftUI code to localization to App Store submission.
        </p>
      </section>

      {/* Reflection */}
      <section className="px-5 md:px-8 pb-24 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">Reflection</h2>
        <p className="text-gray-500 leading-relaxed">
          Building Little Checks taught me that cutting features is just as important as adding them. Every time I removed a page or simplified an interaction, the app felt better. The biggest design lesson was that less really is more — especially when the goal is to make someone feel calm. The behavior chart model from my classroom translated surprisingly well to adults: people don&apos;t need complex systems to take care of themselves. They need something gentle that meets them where they are. I shipped it on the App Store and I still use it every day.
        </p>
      </section>

      {/* Footer */}
      <footer className="px-5 md:px-8 py-6 md:py-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
        <Link href="/" className="hover:text-black transition-colors">← Back to work</Link>
        <span>Christina Ma</span>
      </footer>
    </main>
  );
}
