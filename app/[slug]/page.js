import { notFound } from "next/navigation";

const KNOWN_SLUGS = [];

export default function SlugPage({ params }) {
  if (!KNOWN_SLUGS.includes(params.slug)) {
    notFound();
  }

  return (
    <main style={{ padding: "4rem 2rem" }}>
      <h1>{params.slug}</h1>
    </main>
  );
}
