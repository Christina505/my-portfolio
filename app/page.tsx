import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Little Checks",
      description:
        "A cozy habit-tracking app based on the behavior charts I use with my kindergartners. Designed, coded, and shipped to the App Store.",
      tags: ["UX Design", "Mobile", "End-to-End", "App Store"],
      bg: "#F0EDE8",
      images: ["/projects/lc-home.png", "/projects/lc-rewards.png", "/projects/lc-checklist.png"],
      href: "/work/little-checks",
    },
    {
      id: 2,
      title: "Dear Traveler",
      description:
        "An interactive diary game inspired by Tom Riddle's diary and Lifeline. I wrote the story, made the music, and shipped it.",
      tags: ["Interaction Design", "Storytelling", "App Store", "End-to-End"],
      bg: "#E8EDF0",
      images: [],
      href: "/work/dear-traveler",
    },
    {
      id: 3,
      title: "Student Testing Platform",
      description:
        "Reimagining the student testing experience — making it less stressful for kids who are already anxious enough.",
      tags: ["UX Research", "Figma", "Web"],
      bg: "#EDE8F0",
      images: [],
      href: "/work/student-testing",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black scroll-smooth">
      {/* Nav + Banner */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100/50 px-5 md:px-8 py-4 md:py-6">
        <div className="flex justify-between items-start gap-4">
          <div className="min-w-0">
            <h1 className="text-lg md:text-xl font-medium tracking-tight mb-1">Christina Ma</h1>
            <p className="text-xs md:text-sm font-light text-gray-400 leading-relaxed max-w-lg hidden sm:block">
              UX Designer in Irvine, CA — I teach kindergarten, so I design things that are intuitive for first-time users. If a five-year-old can figure it out, anyone can.
            </p>
            <p className="text-xs font-light text-gray-400 leading-relaxed sm:hidden">
              UX Designer in Irvine, CA
            </p>
          </div>
          <div className="flex gap-4 md:gap-8 text-sm text-gray-400 pt-1 flex-shrink-0">
            <span className="text-black font-medium">
              Work
            </span>
            <Link href="/resume" className="hover:text-black transition-colors">
              Resume
            </Link>
          </div>
        </div>
      </header>

      {/* Work */}
      <section id="work" className="px-5 md:px-8 pt-6 md:pt-8 pb-24">

        <div className="flex flex-col gap-6">
          {/* Featured project — Little Checks (full width) */}
          <Link
            href={projects[0].href || "#"}
            className="group rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-lg block"
            style={{ backgroundColor: projects[0].bg }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Text side */}
              <div className="p-10 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-500 bg-white/60 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl font-semibold mb-3 tracking-tight">
                    {projects[0].title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed max-w-sm">
                    {projects[0].description}
                  </p>
                </div>
                <div className="mt-8">
                  <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
                    View project →
                  </span>
                </div>
              </div>

              {/* Image side — phone mockups */}
              <div className="relative h-64 md:h-auto overflow-hidden flex items-end justify-center gap-3 md:gap-4 pt-6 md:pt-8 px-4">
                <div className="relative w-28 md:w-40 h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
                  <Image
                    src="/projects/lc-home.png"
                    alt="Little Checks home screen"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative w-28 md:w-40 h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 group-hover:-translate-y-3 translate-y-4">
                  <Image
                    src="/projects/lc-checklist.png"
                    alt="Little Checks checklist view"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative w-28 md:w-40 h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 group-hover:-translate-y-2 translate-y-2 hidden md:block">
                  <Image
                    src="/projects/lc-rewards.png"
                    alt="Little Checks rewards screen"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Two-column row for other projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(1).map((project) => {
              return (
                <Link
                  key={project.id}
                  href={project.href || "#"}
                  className="group rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-lg block"
                  style={{ backgroundColor: project.bg }}
                >
                {/* Decorative illustration area */}
                <div className="relative h-52 sm:h-56 overflow-hidden flex items-center justify-center">
                  {project.id === 2 ? (
                    /* Dear Traveler — real phone screenshots */
                    <div className="relative w-full h-full flex items-center justify-center gap-2 md:gap-3 pt-4">
                      <div className="relative w-20 sm:w-24 md:w-28 h-40 md:h-48 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-2 -rotate-3">
                        <Image
                          src="/projects/dt-intro.png"
                          alt="Dear Traveler story intro"
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="relative w-20 sm:w-24 md:w-28 h-40 md:h-48 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 group-hover:-translate-y-3 z-10">
                        <Image
                          src="/projects/dt-choice.png"
                          alt="Dear Traveler story choice"
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="relative w-20 sm:w-24 md:w-28 h-40 md:h-48 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-2 rotate-3">
                        <Image
                          src="/projects/dt-badend.png"
                          alt="Dear Traveler bad end screen"
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  ) : (
                    /* Student Testing — real screenshots */
                    <div className="relative w-full h-full flex items-center justify-center px-2">
                      <div className="relative w-32 sm:w-36 md:w-48 h-24 sm:h-28 md:h-36 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-1 -rotate-3">
                        <Image
                          src="/projects/stp-dashboard.png"
                          alt="Student Testing Platform dashboard"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute right-3 sm:right-4 md:right-8 top-6 sm:top-8 w-20 sm:w-24 md:w-32 h-16 sm:h-20 md:h-28 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-2 rotate-2">
                        <Image
                          src="/projects/stp-avatar.png"
                          alt="Student avatar selection"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute left-3 sm:left-4 md:left-6 bottom-3 sm:bottom-4 w-28 sm:w-32 md:w-40 h-16 sm:h-20 md:h-28 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-1 rotate-1">
                        <Image
                          src="/projects/stp-quiz.png"
                          alt="Student quiz interface"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Text area */}
                <div className="p-5 sm:p-8 pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-500 bg-white/60 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
                    View project →
                  </span>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 md:px-8 py-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
        <span>Christina Ma</span>
        <div className="flex gap-6">
          <a
            href="mailto:wuxuan.ma@gmail.com"
            className="hover:text-black transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/christina-ma-a564a3a4/"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
