"use client";

import Image from "next/image";

export default function AbcCountdown() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 md:px-8 pt-12 pb-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-amber-800 bg-amber-50 rounded-full px-4 py-2">
          <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span></span>
          In the workshop
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {["3D Game", "Unity", "Blender", "C#", "AI-assisted"].map((t) => (
            <span key={t} className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">{t}</span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-4">ABC Countdown</h1>
        <p className="text-xl font-light text-gray-400 leading-relaxed">Let&apos;s travel back in time to experience the pure fun of being a kindergartener — the sunshine leaking through the leaves one afternoon, and your friend running to you the moment you arrive at school.</p>
      </section>

      {/* Hero visual */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl bg-[#FFF4E0]"><Image src="/projects/abc-1.png" alt="ABC Countdown gameplay — meeting Aria" fill className="object-cover" /></div>
        <p className="text-sm text-gray-400 mt-3 text-center">In-game: meeting the kids on your first morning in the classroom.</p>
      </section>

      {/* Overview */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-12">
          <div><p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Role</p><p className="text-sm">Designer &amp; Developer</p></div>
          <div><p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Tools</p><p className="text-sm">Unity, Blender, C#</p></div>
          <div><p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Status</p><p className="text-sm">In progress, 2026</p></div>
        </div>
        <p className="text-gray-500 leading-relaxed">Every spring, my kindergarten class counts down the last weeks of school with an ABC theme — Animal Day, Beach Day, all the way through Z. I&apos;m turning that tradition into a 3D game: you play as a child arriving at school, wander a hand-built classroom, and meet the kids and teacher who live there.</p>
      </section>

      {/* Why */}
      <section className="px-5 md:px-8 pb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">Why I&apos;m making it</h2>
        <p className="text-gray-500 leading-relaxed">I spend every day with five-year-olds, and I wanted to bottle the specific feeling of being that age — small, curious, and delighted by ordinary things. Most &ldquo;cozy&rdquo; games are about cabins and farms; almost none are about the world I actually know best. ABC Countdown is my attempt to design that world from the inside.</p>
      </section>

      {/* Characters */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-4">Characters &amp; dialogue</h2>
          <p className="text-gray-500 leading-relaxed">The classroom is full of named kids — Aria, Mia, Leo, Noah, Zoe — and their teacher, Ms. Bloom. I designed and wrote the dialogue system so you can walk up to anyone, press a key, and talk to them, with the camera turning to face whoever&apos;s speaking.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div><div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-gray-50"><Image src="/projects/abc-1.png" alt="Talking to Aria" fill className="object-cover" /></div><p className="text-sm text-gray-400 mt-3">&ldquo;Hello, I&apos;m Aria.&rdquo; — each kid introduces themselves.</p></div>
          <div><div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-gray-50"><Image src="/projects/abc-2.png" alt="Ms. Bloom" fill className="object-cover" /></div><p className="text-sm text-gray-400 mt-3">Ms. Bloom keeps you in line — behavior moments from my real classroom.</p></div>
        </div>
      </section>

      {/* Building it */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-4">Designing and building it myself</h2>
          <p className="text-gray-500 leading-relaxed">I&apos;m building the whole thing — modeling the room and props in Blender, assembling and lighting the scene in Unity, and writing the gameplay in C# (with AI as a pair-programmer when I get stuck).</p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div><div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg bg-[#1f1f22]"><Image src="/projects/abc-4.png" alt="Unity editor" fill className="object-contain" /></div><p className="text-sm text-gray-400 mt-3">The classroom in Unity — NPCs, triggers, lighting, and a game manager wired together.</p></div>
          <div><div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg bg-[#1e1e1e]"><Image src="/projects/abc-3.png" alt="DialogueManager.cs" fill className="object-contain" /></div><p className="text-sm text-gray-400 mt-3">DialogueManager.cs — handling input, advancing lines, and turning the player to face who&apos;s speaking.</p></div>
        </div>
      </section>

      {/* Look & feel */}
      <section className="px-5 md:px-8 pb-16 max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-4">The look &amp; feel</h2>
          <p className="text-gray-500 leading-relaxed">Soft pastels, rounded shapes, hanging cloud lights, a rainbow rug — everything tuned to feel like a classroom in a happy memory rather than how it really is.</p>
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-[#FFF4E0]"><Image src="/projects/abc-5.png" alt="Classroom scene" fill className="object-cover" /></div>
      </section>

      {/* What's next */}
      <section className="px-5 md:px-8 pb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-medium tracking-tight mb-4">What&apos;s next</h2>
        <p className="text-gray-500 leading-relaxed">Right now the classroom, the characters, and the dialogue system are in. Next I&apos;m writing more story and adding the ABC mini-games — one playable day at a time — building toward a first downloadable build.</p>
      </section>
    </>
  );
}
