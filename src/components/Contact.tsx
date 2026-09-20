import { Mail, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 border-b border-border transition-colors relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-foreground [text-wrap:balance]">
              Have an opportunity or project in mind? Let&rsquo;s build something exceptional.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-[65ch] [text-wrap:pretty]">
              I am actively available for full-time frontend engineering roles, React development contracts, and technical collaborations. Feel free to reach out via email or LinkedIn.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="mailto:me@themba.dev"
              className="inline-flex items-center justify-center gap-2.5 pl-5 pr-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm active:scale-[0.98] transition-transform duration-150 ease-out shadow-md hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>me@themba.dev</span>
            </a>

            <a
              href="https://www.linkedin.com/in/themba-p"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 pl-6 pr-5 py-3.5 rounded-xl bg-card hover:bg-accent border border-border text-foreground font-medium text-sm active:scale-[0.98] transition-transform duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
            </a>

            <a
              href="https://github.com/thembaxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 pl-6 pr-5 py-3.5 rounded-xl bg-card hover:bg-accent border border-border text-foreground font-medium text-sm active:scale-[0.98] transition-transform duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
