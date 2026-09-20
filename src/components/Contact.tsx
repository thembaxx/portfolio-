import { Mail, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 border-b border-slate-800/50 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Have an opportunity or project in mind? Let&apos;s build something exceptional.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              I am actively available for full-time frontend engineering roles, React development contracts, and technical collaborations. Feel free to reach out via email or LinkedIn.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="mailto:mndebele.themba@gmail.com"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-sky-500/20 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <Mail className="w-4 h-4" />
              <span>mndebele.themba@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/themba-p"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400" />
            </a>

            <a
              href="https://github.com/thembaxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
