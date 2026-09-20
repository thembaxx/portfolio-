import { Mail, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 border-b border-border transition-colors relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-blue-500/10 dark:bg-sky-500/10 blur-[100px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-foreground">
              Have an opportunity or project in mind? Let&apos;s build something exceptional.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              I am actively available for full-time frontend engineering roles, React development contracts, and technical collaborations. Feel free to reach out via email or LinkedIn.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="mailto:me@themba.dev"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <Mail className="w-4 h-4" />
              <span>me@themba.dev</span>
            </a>

            <a
              href="https://www.linkedin.com/in/themba-p"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-card hover:bg-accent border border-border text-foreground font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            </a>

            <a
              href="https://github.com/thembaxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-card hover:bg-accent border border-border text-foreground font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
