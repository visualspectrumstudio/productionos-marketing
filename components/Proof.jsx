'use client';

export default function Proof({ proof }) {
  return (
    <section className="proof-section">
      <div className="container">
        <div className="proof-inner">
          <div className="proof-label-col">
            <div className="eyebrow">{proof.eyebrow}</div>
            <div className="proof-label-serif arcilla">
              {proof.labelLead}{' '}
              <em className="accent">{proof.labelAccent}</em>
            </div>
          </div>
          <div className="proof-content">
            <div className="proof-body">
              <p className="proof-display arcilla">{proof.paragraphs[0]}</p>
              <p className="proof-body-sans">
                {proof.paragraphs[1].split('£25')[0]}
                <span className="price-tag">£25</span>
                {proof.paragraphs[1].split('£25')[1]}
              </p>
              <p className="proof-resolution arcilla">{proof.resolution}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
