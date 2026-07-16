import Link from "next/link";
import LittleChecks from "@/app/components/cases/LittleChecks";

export default function LittleChecksCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-black">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100/50 px-5 md:px-8 py-5">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-medium tracking-tight text-lg hover:opacity-70 transition-opacity">← Back</Link>
          <span className="text-sm text-gray-400">Christina Ma</span>
        </div>
      </nav>
      <LittleChecks />
      <footer className="px-5 md:px-8 py-8 border-t border-gray-100 flex justify-between items-center text-sm text-gray-400">
        <Link href="/" className="hover:text-black transition-colors">← Back to the book</Link>
        <span>Christina Ma</span>
      </footer>
    </main>
  );
}
