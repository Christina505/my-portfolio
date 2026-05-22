import Link from "next/link";

export default function AbcCountdownCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100/50 px-5 md:px-8 py-5">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="font-medium tracking-tight text-lg hover:opacity-70 transition-opacity"
          >
            ← Back
          </Link>
          <span className="text-sm text-gray-400">Christina Ma</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-5 md:px-8 pt-16 pb-10 max-w-3xl mx-auto">
        {/* "In the workshop" badge */}
        <div className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-amber-800 bg-amber-50 rounded-full px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          In the workshop
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">
            3D Game
          </span>
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">
            Unity
          </span>
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">
            Blender
          </span>
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">
            AI
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-4">
          ABC Countdown
        </h1>
        <p className="text-xl font-light text-gray-400 leading-relaxed">
          Let&apos;s travel back in time to experience the pure fun and excitement of being a kindergartener — where you vividly remember the sunshine leaking through the layered leaves one afternoon, and your friend running to you the moment you arrived at school.
        </p>
      </section>

      {/* Hero visual — larger ABC blocks */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-[#FFF4E0] p-8 md:p-16 flex items-center justify-center gap-4 md:gap-8">
          <div className="w-24 h-24 md:w-36 md:h-36 rounded-3xl bg-[#E04E3F] flex items-center justify-center text-5xl md:text-7xl font-bold text-white shadow-[0_10px_0_rgba(0,0,0,0.14)] -rotate-6">
            A
          </div>
          <div className="w-24 h-24 md:w-36 md:h-36 rounded-3xl bg-[#3E6FE0] flex items-center justify-center text-5xl md:text-7xl font-bold text-white shadow-[0_10px_0_rgba(0,0,0,0.14)] -translate-y-4">
            B
          </div>
          <div className="w-24 h-24 md:w-36 md:h-36 rounded-3xl bg-[#F1B832] flex items-center justify-center text-5xl md:text-7xl font-bold text-white shadow-[0_10px_0_rgba(0,0,0,0.14)] rotate-6">
            C
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-12">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
              Role
            </p>
            <p className="text-sm">Designer &amp; Developer</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
              Tools
            </p>
            <p className="text-sm">Unity, Blender, AI</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
              Status
            </p>
            <p className="text-sm">In progress, 2026</p>
          </div>
        </div>

        <p className="text-gray-500 leading-relaxed">
          Every spring, my kindergarten class counts down the last weeks of school with an ABC theme — Animal Day, Beach Day, all the way through Z. I&apos;m turning that tradition into a 3D game: each day is a mini-game, and you collect tickets along the way.
        </p>
        <p className="text-gray-500 leading-relaxed mt-4">
          Building it now in Unity, with Blender for the 3D worlds and a lot of AI help along the way. Check back soon for the first build.
        </p>
      </section>

      {/* Footer */}
      <footer className="px-5 md:px-8 py-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
        <Link href="/" className="hover:text-black transition-colors">
          ← Back to work
        </Link>
        <span>Christina Ma</span>
      </footer>
    </main>
  );
}
