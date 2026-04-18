const variant = {
  slug: 'v1',
  title: 'Canonical — Fragmentation angle',
  isLive: true,

  seo: {
    metaTitle: 'ProductionOS — A single source of truth for your production',
    metaDescription: 'Stop frankensteining subscriptions together to manage your show.',
    ogImageUrl: null,
  },

  hero: {
    eyebrow: 'In development · Alpha Jan 2027',
    headlineLead: 'A single source of truth',
    headlineAccent: 'for your production.',
    subhead: 'Stop frankensteining subscriptions together to manage your show.',
    ctaText: 'Request access',
  },

  proof: {
    eyebrow: 'The problem',
    labelLead: 'Four tools.',
    labelAccent: 'One you.',
    paragraphs: [
      "Shows in one tool. Crew rota in another. Advances on email. Warehouse stock in a system that doesn't know your shows exist.",
      "Every tool charges you per seat. None of them talk to each other. Four subscriptions, and every time you hire someone, each one wants another £25.",
    ],
    resolution: "ProductionOS puts all of it in one place, so the system actually knows what's going on.",
  },

  form: {
    eyebrow: 'Request access',
    headlineLead: 'Ten companies,',
    headlineAccent: 'first phase.',
    body: "Leave your details and we'll be in touch as access opens up.",
    metaRows: [
      { key: 'Alpha cohort', value: '10 companies' },
      { key: 'Cost', value: 'Free forever' },
      { key: 'Opens', value: 'January 2027' },
    ],
    ctaText: 'Request access',
    confirmationText: "You're on the list",
    note: "We'll only reach out about early access. No marketing emails. No list selling.",
  },

  tracking: {
    posthogVariantId: 'v1',
  },
};

export default variant;
