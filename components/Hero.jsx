'use client';

export default function Hero({ hero }) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="eyebrow hero-eyebrow">{hero.eyebrow}</div>
        <h1 className="arcilla hero-headline">
          {hero.headlineLead}{' '}
          <span className="accent">{hero.headlineAccent}</span>
        </h1>
        <div className="hero-footer">
          <p className="hero-sub">{hero.subhead}</p>
          <a href="#waitlist" className="cta-primary">
            {hero.ctaText}
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
