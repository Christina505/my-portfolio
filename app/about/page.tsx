import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100/50 px-5 md:px-8 py-5">
        <div className="flex justify-between items-center gap-4">
          <Link
            href="/"
            className="font-medium tracking-tight text-lg hover:opacity-70 transition-opacity"
          >
            ← Back
          </Link>
          <div className="flex gap-4 md:gap-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-black transition-colors">
              Work
            </Link>
            <span className="text-black font-medium">About</span>
            <Link href="/resume" className="hover:text-black transition-colors">
              Resume
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-5 md:px-8 pt-16 pb-10 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          {/* Text: order-2 on mobile so the photo introduces you first */}
          <div className="order-2 md:order-1 flex-1">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-4">
              Christina Ma
            </h1>
            <p className="text-xl font-light text-gray-400">
              Product Designer in Irvine, California.
            </p>
          </div>
          {/* Photo */}
          <div className="order-1 md:order-2 w-40 md:w-48 flex-shrink-0">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/christina.png"
                alt="Christina Ma"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="px-5 md:px-8 pb-12 max-w-2xl mx-auto space-y-6 text-gray-600 leading-relaxed">
        <p>
          By day I teach kindergarten. By night and on weekends I design and build things: two apps on the App Store, a research project on student testing, and right now a 3D nostalgia game about kindergarten.
        </p>
        <p>
          Teaching kindergarten is the best UX bootcamp I could&apos;ve asked for. Five-year-olds are the most honest users on earth. If a button doesn&apos;t make sense to them, they don&apos;t pretend it does — they cry. Designing for them taught me to obsess over the first three seconds of any interaction and to never take my own designs for granted.
        </p>
        <p>
          I build my apps from start to finish. I design the screens, write the words, make the music, and use AI to help me write the code, working in Figma, Swift, Unity, Blender, or whatever the project needs. I love making things that feel personal, where using the app can make someone smile.
        </p>
      </section>

      {/* Currently: open to work callout */}
      <section className="px-5 md:px-8 pb-20 max-w-2xl mx-auto">
        <div className="rounded-3xl bg-emerald-50 p-6 md:p-8">
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-medium text-emerald-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            CURRENTLY
          </div>
          <p className="text-lg font-medium text-gray-900 mb-2">
            Looking for Product Designer roles.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Remote, hybrid, or in Orange County / LA. If you&apos;re hiring or just want to chat, I&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:wuxuan.ma@gmail.com"
              className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/christina-ma-a564a3a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors"
            >
              LinkedIn
            </a>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors"
            >
              Resume
            </Link>
          </div>
          {/* Fallback for visitors whose browser doesn't handle mailto: well. */}
          <p className="text-xs text-gray-500 mt-4">
            or copy:{" "}
            <span className="text-gray-700 font-medium select-all">
              wuxuan.ma@gmail.com
            </span>
          </p>
        </div>
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
