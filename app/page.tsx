import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#101010] text-[#e4e4e4]">
      <main className="relative z-10 flex flex-col items-center text-center px-8 py-12 max-w-[560px]">
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-2 text-white">
          Tomasz Zając
        </h1>
        <p className="text-gray-400 font-medium tracking-wide uppercase text-sm sm:text-base">
          Full Stack Developer
        </p>
        <p className="text-base leading-relaxed text-white/60 mt-1 mb-5">
          This site is currently under construction. Soon you will find my
          projects, experience, and more information about me.
        </p>
        <a
          href="mailto:tomasz.zajac08@proton.me"
          className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white bg-violet-700 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
        >
          Contact me
        </a>
      </main>

      <footer className="absolute bottom-6 flex flex-col items-center gap-4 z-10">
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Loleku"
            target="_blank"
            className="text-white/40 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/tomaszzaj/"
            target="_blank"
            className="text-white/40 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
        <div className="text-[0.75rem] text-white/20">
          © {new Date().getFullYear()} Tomasz Zając
        </div>
      </footer>
    </div>
  );
}
