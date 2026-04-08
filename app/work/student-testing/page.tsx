import Image from "next/image";
import Link from "next/link";

export default function StudentTestingCaseStudy() {
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
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">UX Research</span>
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">Figma</span>
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">Classroom Observation</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-4">
          Student Testing Platform
        </h1>
        <p className="text-xl font-light text-gray-400 leading-relaxed">
          Kindergartners struggle with digital tests designed for adults. I redesigned the experience to make it intuitive, accessible, and stress free.
        </p>
      </section>

      {/* Hero Image */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="rounded-3xl overflow-hidden bg-[#4a6741] p-6 md:p-12 flex items-center justify-center gap-3 md:gap-6">
          <div className="relative w-36 md:w-48 h-52 md:h-72 rounded-2xl overflow-hidden shadow-2xl -rotate-2 hidden sm:block">
            <Image src="/projects/stp-dashboard.png" alt="Teacher dashboard" fill className="object-cover" />
          </div>
          <div className="relative w-40 sm:w-48 h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-2xl z-10">
            <Image src="/projects/stp-quiz.png" alt="Student quiz interface" fill className="object-cover" />
          </div>
          <div className="relative w-36 md:w-48 h-52 md:h-72 rounded-2xl overflow-hidden shadow-2xl rotate-2 hidden sm:block">
            <Image src="/projects/stp-avatar.png" alt="Student avatar" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-16">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Role</p>
            <p className="text-sm">Researcher &amp; Designer</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Tools</p>
            <p className="text-sm">Figma, Classroom Observation</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Timeline</p>
            <p className="text-sm">2 weeks concept project</p>
          </div>
        </div>

        <p className="text-gray-500 leading-relaxed">
          Current digital tests assume basic computer knowledge like reading ability and mouse precision — both beyond most kindergartners. This project started from a simple observation: the testing software was harder to navigate than the test itself. As a teacher, I&apos;ve raised concerns about this directly to the testing platforms and given suggestions on how to improve, but nothing has changed. Every year I still have students cry because of how overwhelmed they are, and parents wondering why their kindergartner didn&apos;t do well on a test they were never equipped to take. It feels like no one designing these tests actually thinks about what&apos;s happening in the younger grades.
        </p>
      </section>

      {/* Problem — Real quotes */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-6">The Problem</h2>

        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <p className="text-lg italic text-gray-600 mb-2">
            &ldquo;Ms. Ma, what do I do next?&rdquo;
          </p>
          <p className="text-sm text-gray-400 mb-6">— What I hear the most, from all my kinder students</p>
          <p className="text-lg italic text-gray-600 mb-2">
            &ldquo;It takes an hour just to log all 30 of them in.&rdquo;
          </p>
          <p className="text-sm text-gray-400">— Ms. Chen, kindergarten teacher</p>
        </div>

        <p className="text-sm font-medium mb-4">Problem definition from classroom observation:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-medium mb-1 text-sm">Too many steps</p>
            <p className="text-sm text-gray-400">10 steps before actually taking the test. Navigating the multi-step login already feels like a test itself.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-medium mb-1 text-sm">Too much text</p>
            <p className="text-sm text-gray-400">Instructions are written for adults. Kids need things that sound like how people talk, not how things are written.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-medium mb-1 text-sm">Too many buttons</p>
            <p className="text-sm text-gray-400">No clear direction on which to click first and which to click last. Kids click randomly or are scared to click anything at all.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-medium mb-1 text-sm">Audio too quiet</p>
            <p className="text-sm text-gray-400">Most of the time the kids can&apos;t hear the audio cues, making the accessibility features useless.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-medium mb-1 text-sm">Anxiety from confusion</p>
            <p className="text-sm text-gray-400">Too much text on screen causes anxiety. Kids are scared to click the wrong thing, so they&apos;d rather not click anything at all.</p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <p className="font-medium mb-1 text-sm">Teacher blindspot</p>
            <p className="text-sm text-gray-400">Teachers can&apos;t see who&apos;s struggling until the results come in. No real-time visibility into student progress.</p>
          </div>
        </div>

        <p className="text-gray-500 leading-relaxed">
          I also noticed two distinct groups of kids that need the most help: kids who won&apos;t press any button at all, and kids who press every button available. The accessibility options themselves could become a game for students — once they played with it too much, they didn&apos;t know how to turn it back, wasting class time for teachers to fix.
        </p>
      </section>

      {/* Research method */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-medium tracking-tight mb-4">The 10 Steps (Drawn From Observation)</h2>
          <p className="text-gray-500 leading-relaxed">
            I mapped out every single step a kindergartner has to take just to start a test. I drew these from real classroom observation to document every click, every confusion point, and every moment a student raises their hand for help. The annotations are my own notes from watching this happen — &ldquo;they can&apos;t read,&rdquo; &ldquo;tiny audio buttons, confusing layout,&rdquo; &ldquo;don&apos;t know which button to press to submit.&rdquo;
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
              <Image src="/projects/stp-steps1.png" alt="Steps 1-3: Google, login, find the right website" fill className="object-contain" />
            </div>
            <p className="text-xs text-gray-400 text-center mt-3">Steps 1–3: Navigate to the site and log in</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
              <Image src="/projects/stp-steps2.png" alt="Steps 4-6: Enter code, find the test" fill className="object-contain" />
            </div>
            <p className="text-xs text-gray-400 text-center mt-3">Steps 4–6: Enter the code — they can&apos;t read it</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
              <Image src="/projects/stp-steps3.png" alt="Steps 7-10: Find test, start test, navigate confusing UI" fill className="object-contain" />
            </div>
            <p className="text-xs text-gray-400 text-center mt-3">Steps 7–10: Tiny buttons, confusing layout</p>
          </div>
        </div>
        <p className="text-xs text-gray-400 italic mt-4 max-w-3xl mx-auto">Hand-drawn from real classroom observation (no proprietary screenshots used).</p>
      </section>

      {/* Design Goals */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-6">Design Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="font-medium mb-2">Reduce steps from 10 → 3</p>
            <p className="text-sm text-gray-500">Cut the login and test-start flow down from 10 clicks to just 3, so kids spend time learning instead of navigating.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="font-medium mb-2">Support non-readers</p>
            <p className="text-sm text-gray-500">Replace text instructions with visual and audio cues. Pictures with words and hover audio so every child can understand.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="font-medium mb-2">Make every click area large and obvious</p>
            <p className="text-sm text-gray-500">Max two buttons per page. Full-screen mode to avoid mis-clicking other elements.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="font-medium mb-2">Let teachers monitor and assist quickly</p>
            <p className="text-sm text-gray-500">A teacher dashboard showing who&apos;s ready or struggling, with flags for kids who are just clicking through without answering.</p>
          </div>
        </div>
      </section>

      {/* Design Ideas */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">Key Design Ideas</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
            <p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">Friendly start button</span> — with an animation or sound cue on hover that reads the instructions to the student.</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
            <p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">One question per page</span> — no scrolling, no distractions. Max two buttons to click per page.</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
            <p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">Visual progress bar</span> — a percentage bar on top indicating how many questions they still have to do, designed to be visual and cute.</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
            <p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">Unique student avatars</span> — name in big bold text with a uniquely assigned avatar so they don&apos;t take the test on someone else&apos;s account.</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
            <p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">Louder audio</span> — but not so loud it damages hearing. Audio that kids can actually hear without headphones.</p>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-sm bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">6</span>
            <p className="text-gray-500 text-sm leading-relaxed"><span className="text-black font-medium">Struggle detection</span> — flag the teacher if kids are just clicking through and not answering, so they can step in and help.</p>
          </div>
        </div>
      </section>

      {/* Solution - Student View */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">Solution: Student Experience</h2>
        <p className="text-gray-500 leading-relaxed mb-8">
          Every student is greeted by their uniquely assigned avatar with their name in large, bold text — making it immediately obvious whose account it is. The testing screen uses one question per page with pictures, hover audio, and large colorful buttons that kids can confidently tap.
        </p>
      </section>

      {/* Student screens */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-[#4a6741] rounded-2xl p-5 sm:p-8 flex items-center justify-center">
            <div className="relative w-full max-w-[16rem] aspect-[16/11] rounded-xl overflow-hidden shadow-lg">
              <Image src="/projects/stp-avatar.png" alt="Student avatar welcome screen" fill className="object-cover" />
            </div>
          </div>
          <div className="bg-[#4a6741] rounded-2xl p-5 sm:p-8 flex items-center justify-center">
            <div className="relative w-full max-w-[16rem] aspect-[16/11] rounded-xl overflow-hidden shadow-lg">
              <Image src="/projects/stp-quiz.png" alt="Quiz interface with audio support" fill className="object-cover" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
          <div>
            <p className="text-sm font-medium mb-1">Personalized welcome</p>
            <p className="text-sm text-gray-500">Big bold name + unique cat avatar. Kids can immediately spot if it&apos;s not their account.</p>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">Audio-supported questions</p>
            <p className="text-sm text-gray-500">Questions like &ldquo;How many apples are there in this picture?&rdquo; with audio loud enough for kids to hear, paired with real images.</p>
          </div>
        </div>
      </section>

      {/* Solution - Teacher View */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">Solution: Teacher Dashboard</h2>
        <p className="text-gray-500 leading-relaxed mb-8">
          The teacher dashboard shows who&apos;s ready or struggling in real time. It includes a student view toggle so teachers can see exactly what their students see — making troubleshooting instant. Flagged students are highlighted so teachers can assist before the test is over, not after.
        </p>
      </section>

      {/* Teacher screen */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
          <div className="relative w-full max-w-lg h-64 rounded-xl overflow-hidden shadow-lg">
            <Image src="/projects/stp-dashboard.png" alt="Teacher dashboard" fill className="object-cover" />
          </div>
        </div>
        <div className="mt-6 max-w-3xl mx-auto">
          <p className="text-sm text-gray-500">
            The dashboard includes daily tasks, testing status with flagged students, reading progress, and a student view — all from one screen. Teachers no longer have to wait until results come in to know who needs help.
          </p>
        </div>
      </section>

      {/* Reflection */}
      <section className="px-5 md:px-8 pb-24 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">Reflection</h2>
        <p className="text-gray-500 leading-relaxed">
          This project taught me that too many choices create pressure, not freedom — kids feel more confident with a clear, simple path. But it also made me realize why UX design matters to me personally. I&apos;ve given feedback to these testing platforms year after year, and nothing changes. The people building these tools don&apos;t sit in a classroom watching a five-year-old have a full meltdown because there are too many buttons on the screen. I do. If the people who see the problem firsthand aren&apos;t the ones designing the solution, it won&apos;t get fixed. That&apos;s why I want to do this work.
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
