import Image from "next/image";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Little Checks",
      description:
        "A productivity app designed to help users build habits and stay on top of daily tasks. Available on the App Store.",
      tags: ["UX Design", "Mobile", "End-to-End", "App Store"],
      bg: "#F0EDE8",
      images: ["/projects/lc-home.png", "/projects/lc-rewards.png", "/projects/lc-checklist.png"],
    },
    {
      id: 2,
      title: "Dear Traveler",
      description:
        "An interactive story app that puts the reader in control of their journey. Available on the App Store.",
      tags: ["Interaction Design", "Storytelling", "App Store", "End-to-End"],
      bg: "#E8EDF0",
      images: [],
    },
    {
      id: 3,
      title: "Student Testing Platform",
      description:
        "A Figma mockup reimagining the student testing experience — focused on reducing anxiety and improving clarity.",
      tags: ["UX Research", "Figma", "Web"],
      bg: "#EDE8F0",
      images: [],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black scroll-smooth">
      {/* Nav + Banner */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100/50 px-8">
        <div className="flex justify-between items-center py-5">
          <span className="font-medium tracking-tight text-lg">Christina Ma</span>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#work" className="hover:text-black transition-colors">
              Work
            </a>
            <a href="/resume.pdf" className="hover:text-black transition-colors">
              Resume
            </a>
          </div>
        </div>
        <p className="pb-5 text-lg font-light text-gray-400 leading-relaxed max-w-2xl">
          UX Designer in Irvine, CA — I design apps that help people build better habits, explore stories, and learn with less stress.
        </p>
      </nav>

      {/* Work */}
      <section id="work" className="px-8 pt-8 pb-24">

        <div className="flex flex-col gap-6">
          {/* Featured project — Little Checks (full width) */}
          <div
            className="group rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-lg"
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
              <div className="relative h-80 md:h-auto overflow-hidden flex items-end justify-center gap-4 pt-8 px-4">
                <div className="relative w-36 md:w-40 h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
                  <Image
                    src="/projects/lc-home.png"
                    alt="Little Checks home screen"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative w-36 md:w-40 h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 group-hover:-translate-y-3 translate-y-4">
                  <Image
                    src="/projects/lc-checklist.png"
                    alt="Little Checks checklist view"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative w-36 md:w-40 h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 group-hover:-translate-y-2 translate-y-2 hidden md:block">
                  <Image
                    src="/projects/lc-rewards.png"
                    alt="Little Checks rewards screen"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Two-column row for other projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(1).map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-lg"
                style={{ backgroundColor: project.bg }}
              >
                {/* Decorative illustration area */}
                <div className="relative h-56 overflow-hidden flex items-center justify-center">
                  {project.id === 2 ? (
                    /* Dear Traveler — real phone screenshots */
                    <div className="relative w-full h-full flex items-center justify-center gap-3 pt-4">
                      <div className="relative w-28 h-48 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-2 -rotate-3">
                        <Image
                          src="/projects/dt-intro.png"
                          alt="Dear Traveler story intro"
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="relative w-28 h-48 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 group-hover:-translate-y-3 z-10">
                        <Image
                          src="/projects/dt-choice.png"
                          alt="Dear Traveler story choice"
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="relative w-28 h-48 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-2 rotate-3">
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
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative w-48 h-36 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-1 -rotate-3">
                        <Image
                          src="/projects/stp-dashboard.png"
                          alt="Student Testing Platform dashboard"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute right-8 top-8 w-32 h-28 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-2 rotate-2">
                        <Image
                          src="/projects/stp-avatar.png"
                          alt="Student avatar selection"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute left-6 bottom-4 w-40 h-28 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-1 rotate-1">
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
                <div className="p-8 pt-0">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
        <span>Christina Ma</span>
        <div className="flex gap-6">
          <a
            href="mailto:wuxuan.ma@gmail.com"
            className="hover:text-black transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/yourhandle"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
