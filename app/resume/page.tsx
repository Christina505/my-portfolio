import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100/50 px-5 md:px-8 py-4 md:py-6">
        <div className="flex justify-between items-start gap-4">
          <div className="min-w-0">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              <h1 className="text-lg md:text-xl font-medium tracking-tight mb-1">Christina Ma</h1>
            </Link>
            <p className="text-xs md:text-sm font-light text-gray-400 leading-relaxed max-w-lg hidden sm:block">
              UX Designer in Irvine, CA — I teach kindergarten, so I design things that are intuitive for first-time users. If a five-year-old can figure it out, anyone can.
            </p>
            <p className="text-xs font-light text-gray-400 leading-relaxed sm:hidden">
              UX Designer in Irvine, CA
            </p>
          </div>
          <div className="flex gap-4 md:gap-8 text-sm text-gray-400 pt-1 flex-shrink-0">
            <Link href="/" className="hover:text-black transition-colors">
              Work
            </Link>
            <span className="text-black font-medium">
              Resume
            </span>
          </div>
        </div>
      </header>

      {/* Resume Content */}
      <section className="max-w-2xl mx-auto px-5 md:px-8 pt-10 md:pt-12 pb-24">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight mb-2">Christina Ma</h2>
          <p className="text-lg text-gray-400 mb-4">UX Designer</p>
          <div className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1 text-sm text-gray-400">
            <span>Irvine, CA</span>
            <span className="text-gray-200 hidden sm:inline">·</span>
            <a href="mailto:wuxuan.ma@gmail.com" className="hover:text-black transition-colors">wuxuan.ma@gmail.com</a>
            <span className="text-gray-200 hidden sm:inline">·</span>
            <a href="https://www.linkedin.com/in/christina-ma-a564a3a4/" className="hover:text-black transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-10">
          <p className="text-gray-500 leading-relaxed">
            UX designer with 8+ years of experience observing how first-time users interact with products. I teach kindergarten full-time, which means I watch five-year-olds navigate new interfaces every day — and I bring that perspective to everything I design. I&apos;ve shipped two apps to the App Store end-to-end (design, code, and launch) and I&apos;m fluent in English and Mandarin.
          </p>
        </div>

        {/* Skills */}
        <Section title="Skills">
          <div className="space-y-2">
            <SkillRow label="Design" items="UX/UI Design, User Research, Interaction Design, Prototyping, Wireframing, Information Architecture, Usability Testing" />
            <SkillRow label="Tools" items="Figma, SwiftUI, Xcode, VScode" />
            <SkillRow label="Other" items="Bilingual (English & Mandarin), Localization, Storytelling, Curriculum Design, Cross-Cultural Communication" />
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <Entry
            title="Little Checks — Habit Tracking App"
            subtitle="Designer & Developer · App Store"
            date="2025"
            bullets={[
              "Designed and built a habit-tracking iOS app end-to-end in SwiftUI, from concept to App Store launch",
              "Based on the behavior charts I use with my kindergartners — adapted a proven classroom model into a consumer product for adults",
              "Conducted competitive analysis of 5+ habit apps, identifying gaps in simplicity and delight",
              "Built with screen-size adapting, Mandarin localization, and edge-case handling for a polished experience",
            ]}
          />
          <Entry
            title="Dear Traveler — Interactive Story Game"
            subtitle="Designer, Writer & Developer · App Store"
            date="2025"
            bullets={[
              "Designed and shipped an interactive diary game inspired by Tom Riddle's diary and Lifeline",
              "Wrote the full branching narrative, composed background music, and designed every screen",
              "Iterated after launch: cut dialogue for pacing and shortened wait times based on play-testing feedback",
            ]}
          />
          <Entry
            title="Student Testing Platform — UX Research Case Study"
            subtitle="UX Researcher & Designer"
            date="2024–2025"
            bullets={[
              "Observed hundreds of kindergarten and elementary students taking standardized tests, documenting 10 distinct steps and pain points",
              "Redesigned the student testing experience in Figma with reduced cognitive load, friendlier UI, and clearer navigation",
              "Raised usability concerns directly to testing platform vendors based on real classroom observations",
            ]}
          />
        </Section>

        {/* Experience */}
        <Section title="Teaching & User Research Experience">
          <Entry
            title="Mandarin Immersion Teacher"
            subtitle="Irvine International Academy · Irvine, CA"
            date="2023 – Present"
            bullets={[
              "Observe how 5–6-year-olds interact with new tools and interfaces daily — direct insight into first-time user behavior",
              "Design lesson plans and classroom systems that translate complex concepts into intuitive, step-by-step experiences",
              "Integrate educational technology into curriculum, evaluating apps and platforms for usability with young learners",
              "Developed behavior-chart system that became the design foundation for Little Checks app",
            ]}
          />
          <Entry
            title="University Writing Instructor"
            subtitle="University of Washington · Seattle, WA"
            date="2022 – 2023"
            bullets={[
              "Taught business and biology writing to undergraduate students, structuring information for clarity and accessibility",
              "Designed course materials and assignments with a focus on clear communication and logical information flow",
            ]}
          />
          <Entry
            title="Lead Mandarin Immersion Teacher (Grade 5–6)"
            subtitle="East Lake Elementary · Eagle Mountain, UT"
            date="2018 – 2021"
            bullets={[
              "Led curriculum design for a dual-language immersion program, creating materials that work across languages and cultures",
              "Managed 30+ students through project-based learning, iterating on materials based on student feedback and outcomes",
            ]}
          />
        </Section>

        {/* Education */}
        <Section title="Education">
          <Entry
            title="Master of Arts, TESOL"
            subtitle="University of Washington · Seattle, WA"
            date="2021 – 2023"
          />
          <Entry
            title="Bachelor of Science, Elementary Education"
            subtitle="Brigham Young University · Provo, UT"
            date="2013 – 2018"
            extra="Minor: TESOL · Dual Language Immersion · Multiple Subject Teaching Credential, CA (Cleared) · BAMA K–12 English & Mandarin · Single Subject Teaching Credential (Mandarin), CA (Cleared)"
          />
        </Section>

        {/* Download */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <a
            href="/christina-ma-ux-resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-black transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download as PDF
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 md:px-8 py-6 md:py-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
        <span>Christina Ma</span>
        <div className="flex gap-6">
          <a href="mailto:wuxuan.ma@gmail.com" className="hover:text-black transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/christina-ma-a564a3a4/" className="hover:text-black transition-colors">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}

/* ── Helper Components ── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h3 className="text-xs font-medium tracking-widest text-gray-300 uppercase mb-5 pb-2 border-b border-gray-100">
        {title}
      </h3>
      {children}
    </div>
  );
}

function SkillRow({ label, items }: { label: string; items: string }) {
  return (
    <p className="text-sm text-gray-500 leading-relaxed">
      <span className="font-medium text-black">{label}:</span>{" "}{items}
    </p>
  );
}

function Entry({
  title,
  subtitle,
  date,
  bullets,
  extra,
}: {
  title: string;
  subtitle: string;
  date: string;
  bullets?: string[];
  extra?: string;
}) {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
        <h4 className="font-medium text-sm">{title}</h4>
        <span className="text-xs text-gray-300 whitespace-nowrap">{date}</span>
      </div>
      <p className="text-sm text-gray-400 italic mb-2">{subtitle}</p>
      {bullets && (
        <ul className="space-y-1">
          {bullets.map((b, i) => (
            <li key={i} className="text-sm text-gray-500 leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-gray-300">
              {b}
            </li>
          ))}
        </ul>
      )}
      {extra && <p className="text-sm text-gray-400 mt-1">{extra}</p>}
    </div>
  );
}
