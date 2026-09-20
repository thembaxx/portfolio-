import { Mail, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 border-b border-border transition-colors relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              <span>Get in touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-foreground [text-wrap:balance]">
              Have an opportunity or project in mind? Let’s build something exceptional.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed [text-wrap:pretty]">
              I am actively available for full-time frontend engineering roles, React development contracts, and technical collaborations. Feel free to reach out via email or LinkedIn.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="mailto:me@themba.dev"
              className="inline-flex items-center justify-center gap-2.5 pl-5 pr-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-sm hover:bg-primary/90 active:scale-[0.97] transition-[color,background-color,border-color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Mail className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
              <span>me@themba.dev</span>
            </a>

            <a
              href="https://www.linkedin.com/in/themba-p"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 pl-6 pr-5 py-3.5 rounded-xl bg-card hover:bg-accent border border-border text-foreground font-medium text-sm active:scale-[0.97] transition-[color,background-color,border-color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-4 h-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
            </a>

            <a
              href="https://github.com/thembaxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 pl-6 pr-5 py-3.5 rounded-xl bg-card hover:bg-accent border border-border text-foreground font-medium text-sm active:scale-[0.97] transition-[color,background-color,border-color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
