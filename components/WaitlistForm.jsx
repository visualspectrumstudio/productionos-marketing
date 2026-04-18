'use client';

import { useState } from 'react';

export default function WaitlistForm({ form }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="form-section" id="waitlist">
      <div className="container">
        <div className="form-inner">
          <div className="form-intro">
            <div className="eyebrow">{form.eyebrow}</div>
            <h2 className="arcilla form-intro-h2">
              {form.headlineLead}{' '}
              <em className="accent">{form.headlineAccent}</em>
            </h2>
            <p className="form-intro-body">{form.body}</p>
            <div className="form-intro-meta">
              {form.metaRows.map((row) => (
                <div key={row.key} className="form-intro-meta-row">
                  <span className="meta-key">{row.key}</span>
                  <span className="meta-val">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="form-card" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Work email</label>
                <input type="email" id="email" name="email" required autoComplete="email" />
              </div>
              <div className="field field-wide">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" required autoComplete="organization" />
              </div>
              <div className="field">
                <label htmlFor="role">Your role</label>
                <select id="role" name="role" required defaultValue="">
                  <option value="" disabled>Select</option>
                  <option value="owner">Owner / MD</option>
                  <option value="production-manager">Production manager</option>
                  <option value="operations">Operations</option>
                  <option value="crew">Crew</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="size">Company size</label>
                <select id="size" name="size" required defaultValue="">
                  <option value="" disabled>Select</option>
                  <option value="1-5">1–5</option>
                  <option value="6-15">6–15</option>
                  <option value="16-50">16–50</option>
                  <option value="50+">50+</option>
                </select>
              </div>
              <div className="field field-wide">
                <label htmlFor="stack">What are you using now?</label>
                <input type="text" id="stack" name="stack" placeholder="Optional" />
              </div>
            </div>

            <div className="form-footer">
              <div className="form-note">{form.note}</div>
              <button
                type="submit"
                className={submitted ? 'submit-btn submitted' : 'submit-btn'}
                disabled={submitted}
              >
                <span>{submitted ? form.confirmationText : form.ctaText}</span>
                <span className="arrow">{submitted ? '✓' : '→'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
