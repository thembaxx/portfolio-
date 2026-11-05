import { ArrowDownIcon, ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

export function Hero() {
  return (
    <div id="top" className="portfolio-wrap portfolio-hero">
      <h1 className="hero-name" aria-label="Themba Mndebele">
        <span>
          <b>Themba</b>
        </span>
        <span>
          <b>Mndebele</b>
        </span>
      </h1>
      <p className="hero-lead">
        I design and build fast, accessible <em>React</em> and TypeScript products.
      </p>
      <div className="action-row">
        <a className="portfolio-button" href="#work">
          Selected work <ArrowDownIcon size={16} aria-hidden="true" />
        </a>
        <a
          className="text-link mono"
          href="mailto:me@themba.dev?subject=Project%20inquiry"
          aria-label="Email me about a project"
        >
          Discuss a project <ArrowUpRightIcon size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="hero-meta mono">
        <span>
          <i className="availability-dot" aria-hidden="true" />
          Available for freelance &amp; remote work
        </span>
        <span>South Africa</span>
        <span>React · TypeScript · Next.js</span>
      </div>
    </div>
  );
}
