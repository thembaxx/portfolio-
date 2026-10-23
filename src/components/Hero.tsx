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
        Frontend developer. I build fast, accessible <em>React</em> and TypeScript products — about
        four years of shipping interfaces people actually use.
      </p>
      <div className="action-row">
        <a className="portfolio-button" href="#work">
          Selected work <span aria-hidden="true">↓</span>
        </a>
        <a className="text-link mono" href="mailto:me@themba.dev">
          me@themba.dev
        </a>
      </div>
      <div className="hero-meta mono">
        <span>
          <i className="availability-dot" aria-hidden="true" />
          Open to remote roles
        </span>
        <span>South Africa</span>
        <span>React · TypeScript · Next.js</span>
      </div>
    </div>
  );
}
