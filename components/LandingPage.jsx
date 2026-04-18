export default function LandingPage({ variant }) {
  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ fontFamily: 'Arcilla, serif', fontSize: '48px', color: 'var(--ink)', marginBottom: '16px' }}>
        Hello from {variant.slug}
      </h1>
      <p style={{ fontFamily: 'Rethink Sans, sans-serif', color: 'var(--ink)', fontSize: '18px' }}>
        {variant.hero.headlineLead} {variant.hero.headlineAccent}
      </p>
    </div>
  );
}
