'use client';

export default function Footer({ footer }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-mark">
          <img
            src={footer.iconSrc}
            alt=""
            style={{ height: '36px', width: 'auto' }}
          />
          <img
            src={footer.wordmarkSrc}
            alt="ProductionOS"
            style={{ height: '22px', width: 'auto' }}
          />
        </div>
        <div className="footer-tagline arcilla">
          {footer.tagline}
        </div>
        <div className="footer-meta">
          {footer.meta.url}<br />
          © {footer.meta.year}
        </div>
      </div>
    </footer>
  );
}
