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
      {/* Nav */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
        <span className="font-medium tracking-tight">Christina Ma</span>
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="#work" className="hover:text-black transition-colors">
            Work
          </a>
          <a href="/resume.pdf" className="hover:text-black transition-colors">
            Resume
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-8 py-24 max-w-3xl">
        <p className="text-sm text-gray-400 mb-4 tracking-widest uppercase">
          UX Designer
        </p>
        <h1 className="text-4xl font-medium leading-tight mb-6">
          <span className="block">
            Hi! I&apos;m Christina Ma. I design experiences that are simple to
            use and hard to forget.
          </span>
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          Based in Irvine, CA. Currently open to work.
        </p>
      </section>

      {/* Work */}
      <section id="work" className="px-8 pb-24">
        <p className="text-xs text-gray-400 tracking-widest uppercase mb-8">
          Selected Work
        </p>

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
                    /* Dear Traveler — book/journey visual */
                    <div className="flex gap-3 items-end">
                      <div className="w-16 h-20 bg-white/40 rounded-lg transition-transform duration-500 group-hover:-translate-y-1" />
                      <div className="w-20 h-28 bg-white/60 rounded-lg shadow-sm transition-transform duration-500 group-hover:-translate-y-2" />
                      <div className="w-16 h-20 bg-white/40 rounded-lg transition-transform duration-500 group-hover:-translate-y-1" />
                    </div>
                  ) : (
                    /* Student Testing — grid/form visual */
                    <div className="grid grid-cols-3 gap-2 p-4 transition-transform duration-500 group-hover:scale-105">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-14 h-10 rounded-lg"
                          style={{
                            backgroundColor:
                              i % 3 === 0
                                ? "rgba(255,255,255,0.6)"
                                : i % 3 === 1
                                ? "rgba(255,255,255,0.4)"
                                : "rgba(255,255,255,0.25)",
                          }}
                        />
                      ))}
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
