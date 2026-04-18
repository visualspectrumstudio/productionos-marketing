export default function SlugPage({ params }) {
  return (
    <main style={{ padding: "4rem 2rem" }}>
      <h1>{params.slug}</h1>
    </main>
  );
}
