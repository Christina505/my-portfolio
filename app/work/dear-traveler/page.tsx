import Image from "next/image";
import Link from "next/link";

export default function DearTravelerCaseStudy() {
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
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">Interaction Design</span>
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">Storytelling</span>
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">App Store</span>
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">End-to-End</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            Dear Traveler
          </h1>
          <a
            href="https://apps.apple.com/us/app/dear-traveler-a-story-game/id6751476313"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-black text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
        </div>
        <p className="text-xl font-light text-gray-400 leading-relaxed">
          An interactive story game where words appear and vanish on the pages of a mysterious diary. You make the choices. The story unfolds in real time.
        </p>
      </section>

      {/* Hero Image */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="rounded-3xl overflow-hidden bg-[#3D3224] p-6 md:p-12 flex items-center justify-center gap-3 md:gap-6">
          <div className="relative w-24 md:w-40 aspect-[9/19.5] rounded-2xl overflow-hidden shadow-2xl -rotate-6 -translate-y-2 hidden sm:block">
            <Image src="/projects/dt-intro.png" alt="Dear Traveler story intro" fill className="object-contain" />
          </div>
          <div className="relative w-36 sm:w-44 md:w-48 aspect-[9/19.5] rounded-2xl overflow-hidden shadow-2xl z-10">
            <Image src="/projects/dt-wait.png" alt="Dear Traveler wait timer" fill className="object-contain" />
          </div>
          <div className="relative w-24 md:w-40 aspect-[9/19.5] rounded-2xl overflow-hidden shadow-2xl rotate-6 -translate-y-2 hidden sm:block">
            <Image src="/projects/dt-climax.png" alt="Dear Traveler emotional moment" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-16">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Role</p>
            <p className="text-sm">Designer, Writer &amp; Developer</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Tools</p>
            <p className="text-sm">SwiftUI, Xcode, GarageBand</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Timeline</p>
            <p className="text-sm">2025</p>
          </div>
        </div>

        <p className="text-gray-500 leading-relaxed">
          Dear Traveler started as a coding practice project. I wanted to get better at SwiftUI, so I picked something fun to build. But as I got into it, I realized I cared way more about the design and the story than the code itself. That was the moment I knew — I&apos;m a designer who can code, not a coder who designs. I vibe coded the whole thing, but the part that lit me up was thinking about what it would look like, how it would feel, and how the story would unfold.
        </p>
      </section>

      {/* Inspiration */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-6">Inspiration</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#F5F0E8] rounded-2xl p-6">
            <p className="font-medium mb-2">Tom Riddle&apos;s Diary</p>
            <p className="text-sm text-gray-500">The scene in the second Harry Potter movie where Harry writes in Tom Riddle&apos;s diary and the words appear, then vanish, and new words write themselves back. I wanted that exact feeling — a conversation with a mysterious book where text materializes and disappears before your eyes.</p>
          </div>
          <div className="bg-[#F5F0E8] rounded-2xl p-6">
            <p className="font-medium mb-2">Lifeline (the game)</p>
            <p className="text-sm text-gray-500">Lifeline told a story through timed text messages with binary choices. I loved how it created tension through waiting and simple decisions. Dear Traveler takes a similar approach — you read, you choose, and the story branches based on your decisions.</p>
          </div>
        </div>
      </section>

      {/* The Design */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">The Design</h2>
        <p className="text-gray-500 leading-relaxed mb-8">
          The entire app is designed to look and feel like an old diary or storybook. Parchment-textured backgrounds, elegant serif headers, and handwritten-style text create the illusion that you&apos;re reading a real book. Text appears word by word or line by line, just like someone is writing to you in real time. When you reach a choice, two options fade in at the bottom — and your decision determines where the story goes next.
        </p>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="font-medium mb-2">Words that appear and vanish</p>
            <p className="text-sm text-gray-500">The core interaction mirrors Tom Riddle&apos;s diary — text writes itself onto the page, and previous passages fade away as the story moves forward. It creates a sense of magic and impermanence.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="font-medium mb-2">Binary choices</p>
            <p className="text-sm text-gray-500">Every decision is simple — two options, clearly presented. Go to the Royal Ball or sneak into the bedroom? Trust the stranger or run? The simplicity keeps you in the story instead of overthinking.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="font-medium mb-2">Multiple endings</p>
            <p className="text-sm text-gray-500">Wrong turns lead to dead ends with a gentle nudge to try another path. Good choices lead deeper into the story. The branching structure encourages replaying to discover every ending — but no spoilers here.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="font-medium mb-2">Background music</p>
            <p className="text-sm text-gray-500">I made simple piano notes in GarageBand that match the mood of each scene — just a few short phrases that set the tone without getting in the way. Small touch, but it makes the diary feel alive.</p>
          </div>
        </div>
      </section>

      {/* App Screens — story progression */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <div className="rounded-3xl overflow-hidden bg-[#3D3224] p-4 sm:p-6 md:p-10">
          <div className="flex items-end justify-start sm:justify-center gap-2 sm:gap-3 md:gap-5 overflow-x-auto pb-2 scrollbar-hide">
            <div className="relative w-20 sm:w-24 md:w-28 aspect-[9/19.5] rounded-lg overflow-hidden shadow-lg flex-shrink-0">
              <Image src="/projects/dt-intro.png" alt="Story intro" fill className="object-contain" />
            </div>
            <div className="relative w-20 sm:w-24 md:w-28 aspect-[9/19.5] rounded-lg overflow-hidden shadow-lg flex-shrink-0">
              <Image src="/projects/dt-choice.png" alt="Making a choice" fill className="object-contain" />
            </div>
            <div className="relative w-20 sm:w-24 md:w-28 aspect-[9/19.5] rounded-lg overflow-hidden shadow-lg flex-shrink-0">
              <Image src="/projects/dt-wait.png" alt="Wait timer" fill className="object-contain" />
            </div>
            <div className="relative w-20 sm:w-24 md:w-28 aspect-[9/19.5] rounded-lg overflow-hidden shadow-lg flex-shrink-0">
              <Image src="/projects/dt-tension.png" alt="Tension building" fill className="object-contain" />
            </div>
            <div className="relative w-20 sm:w-24 md:w-28 aspect-[9/19.5] rounded-lg overflow-hidden shadow-lg flex-shrink-0">
              <Image src="/projects/dt-climax.png" alt="Emotional climax" fill className="object-contain" />
            </div>
            <div className="relative w-20 sm:w-24 md:w-28 aspect-[9/19.5] rounded-lg overflow-hidden shadow-lg flex-shrink-0">
              <Image src="/projects/dt-badend.png" alt="Bad End" fill className="object-contain" />
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-400 text-center mt-4">The story unfolds left to right — from the first diary entry, through choices and tension, to the ending.</p>
      </section>

      {/* Iteration */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">Iteration After Launch</h2>
        <p className="text-gray-500 leading-relaxed mb-6">
          After shipping the first version, I realized two things needed to change to make the experience more fun:
        </p>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
            <p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">Cut a lot of dialogue</span> — the original story had too many lines. I trimmed it down so each passage gets the meaning across with fewer words. Less reading, more impact.</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
            <p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">Shortened the wait time</span> — the text animation was too slow in v1. In my second push, I sped up the timing between lines so the pacing felt more engaging and less like waiting.</p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="px-5 md:px-8 pb-24 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">Reflection</h2>
        <p className="text-gray-500 leading-relaxed">
          Dear Traveler was the project that helped me understand what I really love. I started it to practice coding, but the part I kept coming back to was the design — the visual atmosphere, the pacing of the text, the feeling of turning a diary page. I wrote the entire story, made the music, designed every screen, and vibe coded it all in SwiftUI. It&apos;s a small, personal project, but it taught me that my superpower is in the intersection of design and storytelling — and that I can bring ideas all the way from concept to the App Store by myself.
        </p>
      </section>

      {/* Footer */}
      <footer className="px-5 md:px-8 py-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
        <Link href="/" className="hover:text-black transition-colors">← Back to work</Link>
        <span>Christina Ma</span>
      </footer>
    </main>
  );
}
