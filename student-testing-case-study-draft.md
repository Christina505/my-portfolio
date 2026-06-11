# Student Testing Platform — Flagship Case Study (Draft)

> This is the **story spine** — the narrative and reasoning, written before touching visuals.
> Once you're happy with it, I'll port it into the website page and we'll slot your existing
> hand-drawn images (the 10 steps, the avatar, the quiz, the teacher dashboard) into the right spots.

---

## Homepage block — hook options

Pick the voice you like; I'd lead with one of the first two.

1. **My villain origin story.** *Three years watching kindergartners fail a test that had nothing to do with what they actually knew. This is why I became a designer.*
2. **The project that made me want to become a designer.** *Redesigning a standardized test that was measuring the wrong thing — a five-year-old's ability to operate an adult interface, not what they learned.*
3. *(safest / most conventional)* **Reimagining a standardized test for five-year-olds** — *so the score measures what a child knows, not whether they can survive the interface.*

---

## The one-line thesis (everything hangs off this)

A standardized test is supposed to measure what a child learned this year. But because this one was built for literate adults, it actually measured whether a five-year-old could operate an adult interface — in a second language — without melting down. **The UX was corrupting the data**, and those scores get compared across schools, districts, and countries. This isn't a "make it friendlier" project. It's a measurement-validity and fairness problem.

---

## Overview

- **Role:** UX Researcher & Designer (concept redesign)
- **Context:** Mandarin-immersion kindergarten. I taught it and administered the test.
- **Scale of observation:** ~180 students over three years
- **What this is:** A concept redesign grounded in three years of firsthand classroom observation. I administered this vendor-built test; I did not build it. Everything here comes from watching real five-year-olds use it, repeatedly, under real stakes.
- **Tools:** Classroom observation, Figma

*(Honesty note baked in: calling it a concept redesign up front is a strength, not a weakness — it frames the depth of your research and keeps you credible.)*

---

## Context most people get wrong

Kindergarten isn't just play. In Mandarin immersion, we teach real content against real end-of-year benchmarks — and the standardized test is **in Mandarin**, taken by kids who started the year knowing none. They learn enough to be tested in a second language within months. The test should capture that remarkable progress. Instead, the interface gets in the way.

---

## The problem, at three levels

I observed the experience break down in three distinct places. A good redesign has to fix all three.

### Level 1 — Getting in: a 10-step login

It takes **ten steps** for a kindergartner to log in. For a class of 30, showing them isn't enough; doing it step-by-step alongside them isn't enough either. My TA and I have to go child by child, and it takes **30+ minutes to log in 30 kids**. By the time everyone's in, half are bored and half are too stressed to think — some melt down before the test even starts.

And it doesn't stick. Five-year-olds are blank slates; a 10-step sequence has to be drilled continuously or they forget it. **I lose nearly a month of class time every year teaching kids to navigate an interface** — time that should be spent learning.

And the login screen itself is unreadable to a five-year-old, so they navigate by the only cue they have — **color**. I find myself saying *"tap the big blue button"* — and the big blue button opens *another* menu. Nested, unlabeled choices on a screen they can't read, just to reach the test.

### Level 2 — The testing screen: built for adults

The test screen is split into two halves that scroll on **different axes** — the reading on one side, a wall of questions and buttons on the other. A five-year-old has no idea where to look or which way to move. It's dense, text-heavy, and built for an adult who reads fluently.

The accessibility features make it worse. Kids discover they can invert the colors or shrink everything to nothing, and they treat it as a toy. On shared Chromebooks, the next kid sits down and literally can't see the screen. Accessibility should be **teacher-controlled for the kids who actually need it**, not a loose toy that breaks the device for everyone after.

### Level 3 — The question itself

The questions are written for adults. On screen, a child sees a fill-in-the-blank: *这篇文章叫（）*. They tap the tiny audio button and it reads *"这篇文章叫…（pause）括号里填什么?"* — but five-year-olds don't think in written cloze. Their world is **spoken** question and answer. The right question is a real, verbal one: *这个故事的名字叫什么?* ("What is the story called?").

Two things make it worse. The audio button is a tiny target in the corner that kids don't have the fine motor control to hit, and it's too quiet to hear — **I end up reading every question aloud myself.** And on some kids' screens the audio **silently fails**. A five-year-old won't tell you it's broken; they just keep going. So a child can sit through the **entire test having heard nothing**, and I'd never know — their score looks like a knowledge result when it's really a broken-audio result.

Finally, many questions test several skills at once, so a wrong answer tells you nothing about what the child actually couldn't do.

---

## The stakes (why this matters beyond one classroom)

These scores go to the school and parents and get **compared across the district and country**. So three things happen:

- A capable kid who froze, couldn't navigate, or sat through a test whose audio was silently broken **looks behind when they aren't** — and no one can tell which.
- Schools get ranked against each other on **data that was corrupted by the interface.**
- And every test day I watch the same three kids: the one who can do it but is too stressed to, the one who smashes every button to make it end, and the one so afraid of a wrong click that they touch nothing at all.

---

## Design principles I derived

From the three levels of failure, a few rules fell out — and every design decision traces back to one of them:

- **One page, one objective.** Each screen does exactly one thing.
- **One screen, one direction, no scroll.** No two-axis split. No hunting.
- **Verbal, not written.** Questions sound like how kids talk.
- **One skill per question.** So a wrong answer means something.
- **Huge targets, obvious feedback.** No tiny dots that don't register.
- **The teacher holds the controls.** Accessibility and pacing belong to the adult, not to whoever pokes the screen.

---

## The decisions — and the alternatives I weighed

This is the part that matters: not just what I chose, but what else I considered and why I rejected it.

### Identity: how a kid proves "this is me"

**The problem:** kids can't reliably read or spell their own name, and the Chromebooks are shared.

**Options I considered:**
- *Teacher logs everyone in centrally* — fastest, but the kid never confirms it's their own account, so mix-ups go unnoticed.
- *QR code* (what the vendor uses today) — works, but it's buried inside the same 10 steps.
- *Avatar-based identity* — each child is a distinct animal/avatar.

**What I chose and why:** Keep the QR code, but redesign the flow around it and pair it with **avatars**. In three years of ClassDojo, I noticed kids recognize their **avatar long before they recognize their name**. If everyone in the class is a different animal, a child can instantly confirm "that's me" — even if they can't spell. So the login collapses from ~10 steps to ~3, and the kid still self-verifies. The insight isn't "add avatars," it's *match the identifier to what a five-year-old can actually recognize.*

### The question screen: one picture, one sentence, one question

**The insight:** reading at this age is already *one picture, one sentence*. So the reading passage doesn't need its own half-screen — **the question becomes the screen.** One picture, one sentence, one spoken question, big answer choices, no scroll.

**Key interaction fix:** the vendor uses tiny dot/radio selection, and kids constantly think *"I clicked it!"* but the dot didn't register, so it doesn't count. That's an affordance-and-feedback failure. Replace it with **large, image-based choices and unmistakable selected-state feedback**, plus audio that **auto-plays loud enough to actually hear**.

### Each question tests exactly one skill (the validity argument)

Decide what you're measuring and isolate it. *Recognize a word* and *find information in a passage* are **different skills** — so they should never live in the same question. This is the move that makes the redesign **more valid, not easier**.

### The teacher interface

The teacher should stop being human middleware. The redesigned admin view lets me:
- **Control and lock student screens** (killing the accessibility-toy problem),
- **See in real time which kids are just clicking through** mindlessly instead of answering,
- **Restart a kid's test with a single toggle** when they need it.

---

## The hard tradeoff (the part that proves product maturity)

The obvious pushback: *if you read questions aloud, add pictures, and make it verbal, aren't you making the test easier and less standardized — so you can't compare schools anymore?*

My answer: the original test **conflates** three things — reading knowledge, interface-navigation ability, and motor/literacy skill. A low score could mean any of them. By removing the navigation and motor confounds and isolating **one skill per question**, the redesign measures the *intended* construct more cleanly. **It's a more valid instrument, not a softer one** — and a more valid instrument is exactly what you want if you're going to rank schools on the results.

---

## Did it work? (honest, because it's a concept)

I can't claim deployed metrics — I administered this test, I didn't ship a replacement, and inventing numbers would be dishonest. But I have a real, lived proxy:

> It took me the better part of a **year of repeated practice** to get kids through the existing **10-step** login. A **3-step**, avatar-based flow should be teachable in a fraction of that — likely with little to no drilling — which hands me back **weeks of class time** every year.

If I could run this with a class of 30 tomorrow, here's what I'd measure to know it worked:

- **Login time for the whole class** (today: 30+ minutes)
- **Kids who need 1:1 teacher help** to get in or answer
- **Wrong/ghost clicks per question** (the dot-didn't-register problem)
- **Meltdowns per session**
- **Questions a child can complete unassisted**

---

## What I'd do next (on a real team)

The classroom is a sample of one. If I joined the team that owns a product like this, I'd want to **test a real build with real students**, and tackle the open problem I couldn't solve from the classroom: **how do you make a test engaging enough that kids don't just click through to be done with it?** Speed-running to "finish" is its own kind of corrupted data, and designing against it is a genuinely hard, interesting problem.

---

## Reflection

This is the project that made me want to become a designer. For three years I watched 180 kids get failed by an interface that had nothing to do with what they actually knew — capable children looking behind on paper because a screen built for adults overwhelmed them. That's when design stopped being about making things pretty and became about consequences: a five-year-old's score, a school's ranking, a child deciding they're "bad at" something when really they just couldn't find the blue button. Good UX, here, is a fairness issue. That's the kind of problem I want to work on.
