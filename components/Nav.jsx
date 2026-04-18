'use client';

export default function Nav() {
  return (
    <nav className="main-nav">
      <a href="/" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
        color: 'var(--ink)',
      }}>
        <img src="/brand/ProductionOS_icon.svg" alt="" style={{ height: '28px', width: 'auto' }} />
        <img src="/brand/ProductionOS_wordmark.svg" alt="ProductionOS" style={{ height: '22px', width: 'auto' }} />
      </a>
      <a href="#waitlist" className="cta-nav">Request access</a>
    </nav>
  );
}
