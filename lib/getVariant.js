export async function getVariant(slug) {
  try {
    const mod = await import(`@/content/variants/${slug}.js`);
    return mod.default;
  } catch (err) {
    return null;
  }
}
