import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section id="about" className="portfolio-section" aria-label="About Themba">
      <div className="portfolio-wrap about-copy">
        <SectionLabel title="03 — About" note="Design × engineering" />
        <p className="about-statement">
          Four years building React products, with a design background that shows in the{" "}
          <em>details</em> — spacing, states, accessibility, and how it holds up on a slow
          connection.
        </p>
        <p className="about-description">
          I care about design-system consistency, responsive layouts and resilient state. I use AI
          tooling to speed up research, bug hunts and test writing, while owning architecture,
          reliability and security myself.
        </p>
      </div>
    </section>
  );
}
