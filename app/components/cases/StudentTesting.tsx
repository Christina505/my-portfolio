"use client";

import Image from "next/image";

export default function StudentTesting() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 md:px-8 pt-12 pb-12 max-w-3xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">UX Research</span>
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">Concept Redesign</span>
          <span className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">Classroom Observation</span>
        </div>
        <p className="text-sm font-medium text-amber-700 mb-3">My villain origin story</p>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-4">Student Testing Platform</h1>
        <p className="text-xl font-light text-gray-400 leading-relaxed">Three years watching kindergartners fail a test that had nothing to do with what they actually knew. A concept redesign of a standardized test that was measuring the wrong thing &mdash; a five-year-old&apos;s ability to operate an adult interface, not what they learned.</p>
      </section>

      {/* Hero Image */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="rounded-3xl overflow-hidden bg-[#4a6741] p-6 md:p-12 flex items-center justify-center gap-3 md:gap-6">
          <div className="relative w-36 md:w-48 h-52 md:h-72 rounded-2xl overflow-hidden shadow-2xl -rotate-2 hidden sm:block"><Image src="/projects/stp-dashboard.png" alt="Teacher dashboard" fill className="object-cover" /></div>
          <div className="relative w-40 sm:w-48 h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-2xl z-10"><Image src="/projects/stp-quiz.png" alt="Student quiz interface" fill className="object-cover" /></div>
          <div className="relative w-36 md:w-48 h-52 md:h-72 rounded-2xl overflow-hidden shadow-2xl rotate-2 hidden sm:block"><Image src="/projects/stp-avatar.png" alt="Student avatar" fill className="object-cover" /></div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-12">
          <div><p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Role</p><p className="text-sm">Researcher &amp; Designer</p></div>
          <div><p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Research</p><p className="text-sm">~180 students, 3 years</p></div>
          <div><p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Type</p><p className="text-sm">Concept redesign</p></div>
        </div>
        <p className="text-gray-500 leading-relaxed mb-4">Kindergarten isn&apos;t just play. In Mandarin immersion, we teach real content against real end-of-year benchmarks &mdash; and the standardized test is <span className="text-black font-medium">in Mandarin</span>, taken by kids who started the year knowing none of it. The test should capture that remarkable progress. Instead, the interface gets in the way.</p>
        <p className="text-gray-500 leading-relaxed">This is a concept redesign grounded in three years of firsthand observation. I administered this vendor-built test; I did not build it. Everything here comes from watching ~180 real five-year-olds use it, repeatedly, under real stakes. I&apos;ve taken these problems to the vendor year after year and offered solutions &mdash; and nothing has been done. That gap, between the people who see the problem and the people who design the tool, is a big part of why I want to do this work.</p>
      </section>

      {/* Thesis */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <div className="border-l-4 border-amber-600 bg-amber-50/50 rounded-r-2xl p-6 md:p-8">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">A standardized test is supposed to measure what a child learned this year. But because this one was built for literate adults, it actually measured whether a five-year-old could operate an adult interface &mdash; in a second language &mdash; without melting down. <span className="font-medium text-black">The UX was corrupting the data</span>, and those scores get compared across schools, districts, and countries. This isn&apos;t a &ldquo;make it friendlier&rdquo; project. It&apos;s a measurement-validity and fairness problem.</p>
        </div>
      </section>

      {/* The Problem — three levels */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-2">The Problem, at Three Levels</h2>
        <p className="text-gray-500 leading-relaxed mb-10">I watched the experience break down in three distinct places: getting <em>in</em>, the <em>layout</em>, and the <em>question</em> itself. A real fix has to address all three.</p>
        <div className="mb-10">
          <p className="text-xs text-amber-700 uppercase tracking-widest mb-2 font-medium">Level 1 &middot; Getting in</p>
          <h3 className="text-lg font-medium mb-3">A 10-step login</h3>
          <p className="text-gray-500 leading-relaxed mb-3">It takes <span className="text-black font-medium">ten steps</span> for a kindergartner to log in. My TA and I go child by child, and it takes <span className="text-black font-medium">30+ minutes to log in 30 kids</span>. By the time everyone&apos;s in, half are bored and half are too stressed to think &mdash; some melt down before the test even starts.</p>
          <p className="text-gray-500 leading-relaxed mb-3">And it doesn&apos;t stick. A 10-step sequence has to be drilled continuously or they forget it. <span className="text-black font-medium">I lose nearly a month of class time every year</span> teaching kids to navigate an interface &mdash; time that should be spent learning.</p>
          <p className="text-gray-500 leading-relaxed">The login screen is unreadable to a five-year-old, so they navigate by the only cue they have &mdash; <span className="text-black font-medium">color</span>. I say &ldquo;tap the big blue button&rdquo; &mdash; and the big blue button opens <em>another</em> menu.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <div className="bg-gray-50 rounded-2xl p-4"><div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden"><Image src="/projects/stp-steps1.png" alt="Steps 1-3" fill className="object-contain" /></div><p className="text-xs text-gray-400 text-center mt-3">Steps 1–3: Navigate to the site and log in</p></div>
          <div className="bg-gray-50 rounded-2xl p-4"><div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden"><Image src="/projects/stp-steps2.png" alt="Steps 4-6" fill className="object-contain" /></div><p className="text-xs text-gray-400 text-center mt-3">Steps 4–6: Enter the code — they can&apos;t read it</p></div>
          <div className="bg-gray-50 rounded-2xl p-4"><div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden"><Image src="/projects/stp-steps3.png" alt="Steps 7-10" fill className="object-contain" /></div><p className="text-xs text-gray-400 text-center mt-3">Steps 7–10: Tiny buttons, confusing layout</p></div>
        </div>
        <p className="text-xs text-gray-400 italic mb-12">Hand-drawn from real classroom observation (no proprietary screenshots used).</p>
        <div className="mb-12">
          <p className="text-xs text-amber-700 uppercase tracking-widest mb-2 font-medium">Level 2 &middot; The testing screen</p>
          <h3 className="text-lg font-medium mb-3">Built for adults</h3>
          <p className="text-gray-500 leading-relaxed mb-3">The test screen is split into two halves that scroll on <span className="text-black font-medium">different axes</span>. A five-year-old has no idea where to look or which way to move. It&apos;s dense, text-heavy, and built for an adult who reads fluently.</p>
          <p className="text-gray-500 leading-relaxed">The accessibility features make it worse. Kids discover they can invert colors or shrink everything to nothing, and treat it as a toy. On shared Chromebooks, the next kid can&apos;t see the screen. Accessibility should be <span className="text-black font-medium">teacher-controlled</span>, not a loose toy that breaks the device for everyone after.</p>
        </div>
        <div>
          <p className="text-xs text-amber-700 uppercase tracking-widest mb-2 font-medium">Level 3 &middot; The question</p>
          <h3 className="text-lg font-medium mb-3">Written for adults, not spoken for kids</h3>
          <p className="text-gray-500 leading-relaxed mb-3">Five-year-olds don&apos;t think in written cloze. Their world is <span className="text-black font-medium">spoken</span> question and answer. The right question is a real, verbal one: &ldquo;What is the story called?&rdquo;</p>
          <p className="text-gray-500 leading-relaxed mb-3">The audio button is a tiny target kids can&apos;t hit, and too quiet to hear &mdash; <span className="text-black font-medium">I end up reading every question aloud myself</span>. And on some screens the audio <span className="text-black font-medium">silently fails</span>. A child can sit through the entire test having heard nothing, and I&apos;d never know.</p>
          <p className="text-gray-500 leading-relaxed">Finally, many questions test several skills at once, so a wrong answer tells you nothing about what the child actually couldn&apos;t do.</p>
        </div>
      </section>

      {/* Stakes */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-6">Why It Matters Beyond One Classroom</h2>
        <p className="text-gray-500 leading-relaxed mb-6">These scores go to the school and parents, and get <span className="text-black font-medium">compared across the district and country</span>. So three things happen:</p>
        <div className="space-y-4">
          <div className="flex gap-4 items-start"><span className="text-amber-600 mt-1">›</span><p className="text-gray-500 leading-relaxed">A capable kid who froze or sat through a test with silently broken audio <span className="text-black font-medium">looks behind when they aren&apos;t</span> &mdash; and no one can tell which.</p></div>
          <div className="flex gap-4 items-start"><span className="text-amber-600 mt-1">›</span><p className="text-gray-500 leading-relaxed">Schools get ranked against each other on <span className="text-black font-medium">data that was corrupted by the interface</span>.</p></div>
          <div className="flex gap-4 items-start"><span className="text-amber-600 mt-1">›</span><p className="text-gray-500 leading-relaxed">Every test day I watch the same three kids: the one too stressed to perform, the one who smashes every button to make it end, and the one so afraid of a wrong click that they touch nothing.</p></div>
        </div>
      </section>

      {/* Design principles */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-6">Design Principles I Derived</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-2xl p-6"><p className="font-medium mb-1">One page, one objective</p><p className="text-sm text-gray-500">Each screen does exactly one thing.</p></div>
          <div className="bg-gray-50 rounded-2xl p-6"><p className="font-medium mb-1">One screen, one direction, no scroll</p><p className="text-sm text-gray-500">No two-axis split. No hunting.</p></div>
          <div className="bg-gray-50 rounded-2xl p-6"><p className="font-medium mb-1">Verbal, not written</p><p className="text-sm text-gray-500">Questions sound like how kids actually talk.</p></div>
          <div className="bg-gray-50 rounded-2xl p-6"><p className="font-medium mb-1">One skill per question</p><p className="text-sm text-gray-500">So a wrong answer actually means something.</p></div>
          <div className="bg-gray-50 rounded-2xl p-6"><p className="font-medium mb-1">Huge targets, obvious feedback</p><p className="text-sm text-gray-500">No tiny dots that don&apos;t register the tap.</p></div>
          <div className="bg-gray-50 rounded-2xl p-6"><p className="font-medium mb-1">The teacher holds the controls</p><p className="text-sm text-gray-500">Accessibility and pacing belong to the adult.</p></div>
        </div>
      </section>

      {/* Key decision */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-2">The Decisions &mdash; and the Alternatives I Weighed</h2>
        <div className="mt-8 mb-8">
          <h3 className="text-lg font-medium mb-3">Identity: how a kid proves &ldquo;this is me&rdquo;</h3>
          <p className="text-gray-500 leading-relaxed mb-4">The problem: kids can&apos;t reliably read or spell their own name, and the Chromebooks are shared.</p>
          <div className="space-y-3 mb-4">
            <div className="flex gap-3 items-start"><span className="text-gray-300 mt-0.5">✕</span><p className="text-sm text-gray-500"><span className="text-black">Teacher logs everyone in</span> &mdash; fastest, but the kid never confirms it&apos;s their account.</p></div>
            <div className="flex gap-3 items-start"><span className="text-gray-300 mt-0.5">✕</span><p className="text-sm text-gray-500"><span className="text-black">QR code alone</span> &mdash; works, but it&apos;s buried inside the same 10 steps.</p></div>
            <div className="flex gap-3 items-start"><span className="text-green-600 mt-0.5">✓</span><p className="text-sm text-gray-500"><span className="text-black font-medium">QR code + avatar identity</span> &mdash; what I chose.</p></div>
          </div>
          <p className="text-gray-500 leading-relaxed">Kids recognize their <span className="text-black font-medium">avatar long before they recognize their name</span>. If everyone is a different animal, a child can instantly confirm &ldquo;that&apos;s me&rdquo; &mdash; even if they can&apos;t spell. So I kept the QR code but redesigned the flow around it and paired it with avatars, collapsing login from ~10 steps to ~3.</p>
        </div>
      </section>

      {/* Student screens */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-[#4a6741] rounded-2xl p-5 sm:p-8 flex items-center justify-center"><div className="relative w-full max-w-[16rem] aspect-[16/11] rounded-xl overflow-hidden shadow-lg"><Image src="/projects/stp-avatar.png" alt="Student avatar welcome screen" fill className="object-cover" /></div></div>
          <div className="bg-[#4a6741] rounded-2xl p-5 sm:p-8 flex items-center justify-center"><div className="relative w-full max-w-[16rem] aspect-[16/11] rounded-xl overflow-hidden shadow-lg"><Image src="/projects/stp-quiz.png" alt="Quiz interface with audio support" fill className="object-cover" /></div></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
          <div><p className="text-sm font-medium mb-1">Avatar identity</p><p className="text-sm text-gray-500">Big bold name + a unique avatar. A kid can confirm it&apos;s their account without reading a word.</p></div>
          <div><p className="text-sm font-medium mb-1">One spoken question per screen</p><p className="text-sm text-gray-500">One picture, one verbal question, big image choices, loud auto-playing audio. No scroll, no wall of buttons.</p></div>
        </div>
      </section>

      {/* Teacher interface */}
      <section className="px-5 md:px-8 pb-12 max-w-3xl mx-auto">
        <h3 className="text-lg font-medium mb-3">The teacher interface</h3>
        <p className="text-gray-500 leading-relaxed">The teacher should stop being human middleware. The redesigned admin view lets me <span className="text-black font-medium">control and lock student screens</span>, <span className="text-black font-medium">see in real time which kids are just clicking through</span>, and <span className="text-black font-medium">restart a kid&apos;s test with a single toggle</span>.</p>
      </section>
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center"><div className="relative w-full max-w-lg h-64 rounded-xl overflow-hidden shadow-lg"><Image src="/projects/stp-dashboard.png" alt="Teacher dashboard" fill className="object-cover" /></div></div>
        <p className="text-sm text-gray-500 mt-6 max-w-3xl mx-auto">Live testing status with flagged students, a student-view toggle so I can see exactly what a child sees, and reading progress &mdash; all from one screen.</p>
      </section>

      {/* Hard tradeoff */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">The Hard Tradeoff</h2>
        <p className="text-gray-500 leading-relaxed mb-4">The obvious pushback: <em>if you read questions aloud and make it verbal, aren&apos;t you making the test easier and less standardized?</em></p>
        <p className="text-gray-500 leading-relaxed">My answer: the original test <span className="text-black font-medium">conflates</span> three things &mdash; reading knowledge, interface-navigation ability, and motor/literacy skill. By removing the navigation and motor confounds and isolating one skill per question, the redesign measures the <span className="text-black font-medium">intended construct</span> more cleanly. It&apos;s a more valid instrument, not a softer one.</p>
      </section>

      {/* Reflection */}
      <section className="px-5 md:px-8 pb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">Reflection</h2>
        <p className="text-gray-500 leading-relaxed">This is the project that made me want to become a designer. For three years I watched 180 kids get failed by an interface that had nothing to do with what they actually knew. That&apos;s when design stopped being about making things pretty and became about consequences: a five-year-old&apos;s score, a school&apos;s ranking, a child deciding they&apos;re &ldquo;bad at&rdquo; something when really they just couldn&apos;t find the blue button. Good UX, here, is a fairness issue. That&apos;s the kind of problem I want to work on.</p>
      </section>
    </>
  );
}
