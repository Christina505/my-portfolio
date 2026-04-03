export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Little Checks",
      description: "A productivity app designed to help users build habits and stay on top of daily tasks. Available on the App Store.",
      tags: ["UX Design", "Mobile", "end-to-end", "App Store"],
      bg: "#F0EDE8",
    },
    {
      id: 2,
      title: "Dear Traveler",
      description: "An interactive story app that puts the reader in control of their journey. Available on the App Store.",
      tags: ["Interaction Design", "Storytelling", "App Store", "end-to-end"],
      bg: "#E8EDF0",
    },
    {
      id: 3,
      title: "Student Testing Platform",
      description: "A Figma mockup reimagining the student testing experience — focused on reducing anxiety and improving clarity.",
      tags: ["UX Research", "Figma", "Web"],
      bg: "#EDE8F0",
    },
  ];

  return (
  <main className="min-h-screen bg-white text-black scroll-smooth">

      {/* Nav */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
        <span className="font-medium tracking-tight">Christina Ma</span>
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="#work" className="hover:text-black transition-colors">Work</a>
          <a href="/resume.pdf" className="hover:text-black transition-colors">Resume</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-8 py-24 max-w-3xl">
        <p className="text-sm text-gray-400 mb-4 tracking-widest uppercase">UX Designer</p>
        <h1 className="text-4xl font-medium leading-tight mb-6">
          <span className="block">Hi! I'm Christina Ma. I design experiences that are simple to use and hard to forget.</span>
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          Based in Irvine, CA. Currently open to work.
        </p>
      </section>

      {/* Work */}
      <section id="work" className="px-8 pb-24">
        <p className="text-xs text-gray-400 tracking-widest uppercase mb-8">Selected Work</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl p-8 cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-md"
              style={{ backgroundColor: project.bg }}
            >
              <div className="flex gap-2 mb-12">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-gray-500 border border-gray-300 rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-medium mb-2">{project.title}</h2>
              <p className="text-sm text-gray-500">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
        <span>Christina Ma</span>
        <div className="flex gap-6">
          <a href="mailto:wuxuan.ma@gmail.com" className="hover:text-black transition-colors">Email</a>
          <a href="https://linkedin.com/in/yourhandle" className="hover:text-black transition-colors">LinkedIn</a>
        </div>
      </footer>

    </main>
  );
}