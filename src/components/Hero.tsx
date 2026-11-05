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
        Frontend developer and designer. I build fast, accessible <em>React</em> and Next.js
        experiences that feel as good as they work.
      </p>
      <div className="action-row">
        <a className="portfolio-button" href="#work">
          Selected work <ArrowDownIcon size={16} aria-hidden="true" />
        </a>
        <a className="text-link mono" href="#contact">
          Work with me <ArrowUpRightIcon size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="hero-meta mono">
        <span>
          <i className="availability-dot" aria-hidden="true" />
          Open to remote work and freelance
        </span>
        <span>South Africa</span>
        <span>React · TypeScript · Next.js</span>
      </div>
    </div>
  );
}
